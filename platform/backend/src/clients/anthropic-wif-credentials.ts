import { readFile } from "node:fs/promises";
import config from "@/config";
import logger from "@/logging";

// JWT-bearer grant type per RFC 7523. Required by Anthropic's token exchange endpoint.
const JWT_BEARER_GRANT_TYPE = "urn:ietf:params:oauth:grant-type:jwt-bearer";
const TOKEN_EXCHANGE_PATH = "/v1/oauth/token";

// Refresh slightly before the server-side expiry so an in-flight request never lands on a stale token.
const TOKEN_REFRESH_BUFFER_MS = 30_000;

type AnthropicWifConfig = typeof config.llm.anthropic.wif;

type TokenExchangeResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope?: string;
};

type CachedToken = {
  accessToken: string;
  refreshAt: number;
};

class AnthropicWifClient {
  private cached: CachedToken | null = null;
  private pendingRefresh: Promise<string> | null = null;

  isEnabled(): boolean {
    return config.llm.anthropic.wif.enabled;
  }

  async getAccessToken(): Promise<string> {
    if (this.cached && Date.now() < this.cached.refreshAt) {
      return this.cached.accessToken;
    }
    if (!this.pendingRefresh) {
      this.pendingRefresh = this.refresh().finally(() => {
        this.pendingRefresh = null;
      });
    }
    return this.pendingRefresh;
  }

  // Exposed for tests so each case can exercise the refresh path from a clean state.
  reset(): void {
    this.cached = null;
    this.pendingRefresh = null;
  }

  private async refresh(): Promise<string> {
    const wif = config.llm.anthropic.wif;
    this.assertConfigured(wif);

    const jwt = await this.loadJwt(wif);
    const body: Record<string, string> = {
      grant_type: JWT_BEARER_GRANT_TYPE,
      assertion: jwt,
      federation_rule_id: wif.federationRuleId,
      organization_id: wif.organizationId,
      service_account_id: wif.serviceAccountId,
    };
    if (wif.workspaceId) {
      body.workspace_id = wif.workspaceId;
    }

    const baseUrl = config.llm.anthropic.baseUrl.replace(/\/+$/, "");
    const url = `${baseUrl}${TOKEN_EXCHANGE_PATH}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // Capture the response for diagnostics but never log the JWT.
      const errorBody = await response.text().catch(() => "");
      logger.error(
        { status: response.status, body: errorBody.slice(0, 500) },
        "Anthropic WIF token exchange failed",
      );
      throw new Error(
        `Anthropic WIF token exchange failed with status ${response.status}`,
      );
    }

    const data = (await response.json()) as TokenExchangeResponse;
    if (typeof data.access_token !== "string" || data.access_token === "") {
      throw new Error("Anthropic WIF token exchange returned no access_token");
    }

    const expiresInMs = (data.expires_in ?? 0) * 1000;
    this.cached = {
      accessToken: data.access_token,
      refreshAt:
        Date.now() + Math.max(0, expiresInMs - TOKEN_REFRESH_BUFFER_MS),
    };

    logger.debug(
      { expiresInSeconds: data.expires_in },
      "Anthropic WIF token exchange succeeded",
    );

    return data.access_token;
  }

  private async loadJwt(wif: AnthropicWifConfig): Promise<string> {
    if (wif.identityToken) {
      return wif.identityToken;
    }
    if (wif.identityTokenFile) {
      // Re-read on every exchange so projected tokens that rotate on disk are always current.
      const contents = await readFile(wif.identityTokenFile, "utf-8");
      return contents.trim();
    }
    throw new Error(
      "Anthropic WIF is enabled but neither ARCHESTRA_ANTHROPIC_WIF_IDENTITY_TOKEN nor ARCHESTRA_ANTHROPIC_WIF_IDENTITY_TOKEN_FILE is set",
    );
  }

  private assertConfigured(wif: AnthropicWifConfig): void {
    const missing: string[] = [];
    if (!wif.federationRuleId) {
      missing.push("ARCHESTRA_ANTHROPIC_WIF_FEDERATION_RULE_ID");
    }
    if (!wif.organizationId) {
      missing.push("ARCHESTRA_ANTHROPIC_WIF_ORGANIZATION_ID");
    }
    if (!wif.serviceAccountId) {
      missing.push("ARCHESTRA_ANTHROPIC_WIF_SERVICE_ACCOUNT_ID");
    }
    if (missing.length > 0) {
      throw new Error(
        `Anthropic WIF is enabled but required environment variables are missing: ${missing.join(", ")}`,
      );
    }
  }
}

export const anthropicWifClient = new AnthropicWifClient();

export function isAnthropicWifEnabled(): boolean {
  return anthropicWifClient.isEnabled();
}

export function getAnthropicWifBearerTokenProvider(): () => Promise<string> {
  return () => anthropicWifClient.getAccessToken();
}
