import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

// Hoist mock state and mocks so vi.mock factories can reference them at the top of the module.
const { wifConfig, readFileMock } = vi.hoisted(() => ({
  wifConfig: {
    enabled: true,
    federationRuleId: "fdrl_test",
    organizationId: "00000000-0000-0000-0000-000000000000",
    serviceAccountId: "svac_test",
    workspaceId: "",
    identityToken: "",
    identityTokenFile: "",
  },
  readFileMock: vi.fn(),
}));

vi.mock("@/config", () => ({
  default: {
    llm: {
      anthropic: {
        baseUrl: "https://api.anthropic.com",
        wif: wifConfig,
      },
    },
  },
}));

vi.mock("node:fs/promises", () => ({
  readFile: (...args: unknown[]) => readFileMock(...args),
}));

import {
  anthropicWifClient,
  getAnthropicWifBearerTokenProvider,
  isAnthropicWifEnabled,
} from "./anthropic-wif-credentials";

const originalFetch = globalThis.fetch;

function resetWifConfig() {
  wifConfig.enabled = true;
  wifConfig.federationRuleId = "fdrl_test";
  wifConfig.organizationId = "00000000-0000-0000-0000-000000000000";
  wifConfig.serviceAccountId = "svac_test";
  wifConfig.workspaceId = "";
  wifConfig.identityToken = "test-jwt";
  wifConfig.identityTokenFile = "";
}

function mockOkTokenExchange(
  overrides: Partial<{ access_token: string; expires_in: number }> = {},
) {
  const fetchMock = vi.fn().mockResolvedValue(
    new Response(
      JSON.stringify({
        access_token: overrides.access_token ?? "sk-ant-oat01-test",
        token_type: "Bearer",
        expires_in: overrides.expires_in ?? 3600,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    ),
  );
  globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;
  return fetchMock;
}

describe("anthropic-wif-credentials", () => {
  beforeEach(() => {
    resetWifConfig();
    anthropicWifClient.reset();
    readFileMock.mockReset();
  });

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  test("reports WIF as enabled from config", () => {
    expect(isAnthropicWifEnabled()).toBe(true);
  });

  test("exchanges the configured JWT for an access token", async () => {
    const fetchMock = mockOkTokenExchange();

    const token = await getAnthropicWifBearerTokenProvider()();

    expect(token).toBe("sk-ant-oat01-test");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.anthropic.com/v1/oauth/token");
    expect(init?.method).toBe("POST");
    const body = JSON.parse((init?.body as string) ?? "{}");
    expect(body).toEqual({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: "test-jwt",
      federation_rule_id: "fdrl_test",
      organization_id: "00000000-0000-0000-0000-000000000000",
      service_account_id: "svac_test",
    });
  });

  test("includes workspace_id when configured", async () => {
    wifConfig.workspaceId = "wrkspc_prod";
    const fetchMock = mockOkTokenExchange();

    await getAnthropicWifBearerTokenProvider()();

    const body = JSON.parse(
      (fetchMock.mock.calls[0][1]?.body as string) ?? "{}",
    );
    expect(body.workspace_id).toBe("wrkspc_prod");
  });

  test("reads the JWT from disk when a token file is configured", async () => {
    wifConfig.identityToken = "";
    wifConfig.identityTokenFile = "/var/run/secrets/anthropic.com/token";
    readFileMock.mockResolvedValueOnce("file-jwt\n");
    const fetchMock = mockOkTokenExchange();

    await getAnthropicWifBearerTokenProvider()();

    expect(readFileMock).toHaveBeenCalledWith(
      "/var/run/secrets/anthropic.com/token",
      "utf-8",
    );
    const body = JSON.parse(
      (fetchMock.mock.calls[0][1]?.body as string) ?? "{}",
    );
    expect(body.assertion).toBe("file-jwt");
  });

  test("caches the access token across calls", async () => {
    const fetchMock = mockOkTokenExchange();
    const provider = getAnthropicWifBearerTokenProvider();

    const first = await provider();
    const second = await provider();

    expect(first).toBe(second);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test("refreshes the access token after it expires", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            access_token: "first",
            token_type: "Bearer",
            // Short enough that the buffer (30s) immediately puts the token in refresh territory.
            expires_in: 1,
          }),
          { status: 200 },
        ),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            access_token: "second",
            token_type: "Bearer",
            expires_in: 3600,
          }),
          { status: 200 },
        ),
      );
    globalThis.fetch = fetchMock as unknown as typeof globalThis.fetch;

    const provider = getAnthropicWifBearerTokenProvider();
    const first = await provider();
    const second = await provider();

    expect(first).toBe("first");
    expect(second).toBe("second");
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  test("dedupes concurrent refreshes into a single token exchange", async () => {
    const fetchMock = mockOkTokenExchange();
    const provider = getAnthropicWifBearerTokenProvider();

    const [a, b, c] = await Promise.all([provider(), provider(), provider()]);

    expect(a).toBe(b);
    expect(b).toBe(c);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  test("throws when required env vars are missing", async () => {
    wifConfig.federationRuleId = "";
    mockOkTokenExchange();

    await expect(getAnthropicWifBearerTokenProvider()()).rejects.toThrow(
      /ARCHESTRA_ANTHROPIC_WIF_FEDERATION_RULE_ID/,
    );
  });

  test("throws when neither identity token nor token file is configured", async () => {
    wifConfig.identityToken = "";
    wifConfig.identityTokenFile = "";
    mockOkTokenExchange();

    await expect(getAnthropicWifBearerTokenProvider()()).rejects.toThrow(
      /ARCHESTRA_ANTHROPIC_WIF_IDENTITY_TOKEN/,
    );
  });

  test("throws when the token exchange returns a non-2xx response", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ error: "invalid_grant" }), {
        status: 400,
      }),
    ) as unknown as typeof globalThis.fetch;

    await expect(getAnthropicWifBearerTokenProvider()()).rejects.toThrow(
      /status 400/,
    );
  });

  test("throws when the token exchange response omits access_token", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ token_type: "Bearer", expires_in: 60 }), {
        status: 200,
      }),
    ) as unknown as typeof globalThis.fetch;

    await expect(getAnthropicWifBearerTokenProvider()()).rejects.toThrow(
      /no access_token/,
    );
  });
});
