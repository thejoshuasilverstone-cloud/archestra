# Zinger Winger — Website Redesign Pitch

**What this is:** a working redesign concept for [zingerwinger.com](https://www.zingerwinger.com), built as a single self-contained HTML file (`index.html` — open it in any browser, nothing to install). It reimagines their flagship *Dog Crates* page as a modern brand-and-commerce landing page, with real product data throughout: their four crate series, all twelve sizes with true dimensions, real dealer pricing, the G5 winger lineup, and their actual company story.

---

## The problem with the current site (talking points the owner will recognize)

These are concrete, verifiable issues — lead with them, because the owner can check every one:

1. **It looks like 2005 because it is.** The site runs on a legacy PHP shopping cart (X-Cart-era). Raw platform endpoints like `home.php`, `help.php?section=contactus`, and `reviews.php?productid=16428` are publicly indexed by Google.
2. **Five different URL conventions coexist** — `/Manuals.html`, `/hunt-tester-g5/`, `/AR-4000-1-FD.html`, `/privacy_statement.html`, `/Crates/Model/DX4500/` — which splits search authority and confuses crawlers.
3. **A typo is baked into a product URL:** the Field Trialer sells at `/Field-Trailer.html` ("Trailer," not "Trialer").
4. **Duplicate pages compete with each other** — `/Hunt-Tester.html` and `/hunt-tester-g5/` cover the same product.
5. **Page titles are inconsistent or missing** — many pages carry only the bare default "Zinger Sport Dog Gear," and separators vary page to page (`FAQ - `, `Zinger | `, `Zinger - `). That's lost search traffic on every one.
6. **No mobile-first design, no guided selling, no financing, no trust architecture** — everything their premium competitors now treat as table stakes (see below).

## What the redesign does

**Design concept — "the spec sheet brand."** Zinger sells TIG-welded aircraft-grade aluminum to serious gun-dog people. The concept leans into that: engineering-drawing product art with dimension lines and title blocks, a machined-steel palette with a blaze-orange accent, condensed industrial type (Barlow Condensed / Barlow). It reads as precision equipment, not petware — and it deliberately avoids the "fur baby" tone their audience distrusts.

**Structure borrowed from the brands winning this market** (Gunner Kennels, Impact Dog Crates, Lucky Duck):

| Feature in the mockup | Why it's there |
|---|---|
| Proof-first hero with quantified stats (12 sizes, 5 door configs, 29 lb, IATA CR-82) | Gunner/Lucky Duck lead with quantified superiority claims, not adjectives |
| Persistent trust bar (Made in Canada since 1996, welded aluminum, warranty, shipping) | Impact puts trial + warranty on the homepage; trust badges are table stakes at this price point |
| Series cards + honest comparison table (DX / PR / HD / AR) | Good-better-best merchandising; the current site makes buyers reconstruct this themselves |
| Interactive size finder (breed group → highlighted sizes) | Gunner's "Fit Finder" quiz cut returns 5% and lifted conversions 40% (Shopify case study) |
| Construction section with numbered callouts | Lucky Duck-style concrete feature storytelling (latch, hinge, venting, welds) |
| Real testimonials + the "more champions trained on a Zinger" claim | Their strongest asset, currently buried on a reviews page |
| Wingers cross-sell with live prices | The launcher line is the brand's fame; the crate page should sell both ways |
| Dealer strip alongside direct contact | Protects the dealer channel (Gun Dog Supply, LC Supply…) while building direct sales |

## Suggested pitch framing to the owner

- Their **product** already beats the competition on reputation (RetrieverTraining.net treats Zinger as the premium choice; their customer service stories are legendary — five-minute callbacks). Their **website** is the only thing losing them ground against Gunner ($550–$900 kennels, Shopify Plus, 3D/AR, financing) and Impact (quiz, financing page, lifetime guarantee marketing).
- Aluminum crates at $600–$1,250 are *considered purchases* — buyers research for weeks. The site that answers sizing, series, and proof questions best wins the order, and right now that's their dealers' sites, not theirs.
- Concrete next-step scope you can quote: (1) this design system applied site-wide, (2) migration to a modern commerce platform (their competitors run Shopify), with 301 redirects cleaning up the five URL conventions and duplicate pages, (3) product photography, (4) a "Which Winger?" selector and size quiz.

### Draft outreach email

> Subject: Your crates outsell your website
>
> Hi — I'm a web designer, and I found you the way your customers do: through the gun-dog forums, where Zinger's reputation is about as good as it gets. Then I clicked through to zingerwinger.com, and it isn't doing your products justice — Google is indexing raw `.php` pages, one of your product URLs spells Field Trialer as "Trailer," and the site is hard to use on a phone, where most of your traffic now arrives.
>
> Rather than send a proposal, I built the redesign first. The attached page is a working concept of your crate line — your real series, sizes, and story — in a design built the way you build crates. If you like it, I'd love to walk you through what a full rebuild costs and what it typically does for direct sales at your price point. If not, keep the design audit with my compliments.
>
> [name / contact]

## Fact-check before presenting (important)

Everything on the mockup was researched from Zinger's pages and their dealers' listings (Sporting Dog Pro, Gun Dog Supply, HuntEmUp, Lion Country Supply, OmniaPaws), but confirm with the owner before it goes live anywhere:

- **Prices** are dealer street prices as of Aug 2026: DX from $599.99, PR from $799.99, AR from $1,049.99; winger prices from Gun Dog Supply. HD pricing wasn't published anywhere, so the mockup says "by quote."
- **Dimensions, weights, and breed fits** in the sizing table come from Zinger's own size pages and dealer listings (e.g., 4000 = 24″×28″×36″, DX 4000 ≈ 34 lb, "to 120 lb"). Re-verify every row against their current spec sheets before the pitch — in a spec-sheet-themed design, one wrong number in front of the people who build the crates is fatal.
- **Warranty** claims conflict across sources (lifetime materials/workmanship per one dealer, 1-year per another). The mockup uses the vague-but-safe "materials & workmanship warranty" plus the confirmed 90-day no-escape guarantee on PR/HD. Get the real terms.
- **Testimonials**: the first quote is real (Retriever Club of Long Island, from their reviews page); the other two are adapted from their published reviews and RetrieverTraining.net threads. Re-permission real quotes for launch.
- **"TIG-welded"**: dealers say "welded aluminum" / "double-welded"; TIG is the standard process for aluminum but confirm their shop's word for it.
- The **maple-leaf/Made-in-Canada** claim is confirmed (Milton, Ontario shop; "Made in Canada" on dealer listings).

## Files

- `index.html` — the mockup. Self-contained (fonts and artwork embedded); open directly in a browser.
- `PITCH.md` — this document.
