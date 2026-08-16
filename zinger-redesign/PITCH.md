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

### The outreach email (final — pressure-tested, email-only process)

Stress-tested across three reviews: a skeptical-owner roleplay, a sales-closer critique,
and an owner re-read of this email-only revision. Rules baked in: never say "I'm a web
designer" (instant-delete phrase), show the gift before any criticism, exactly one
self-verifiable problem, no spam vocabulary ("free site audit" nearly killed it), a
same-day-turnaround promise (speed is how this buyer measures respect), and the whole
process runs on email — you never place a call, but an inbound one is welcomed.

> **Subject: I rebuilt your crate pages — screenshots inside**
>
> Hi [owner's name],
>
> Your wingers have about the best reputation on the retriever forums — so before asking
> you for anything, I rebuilt your crate pages to match. The attached PDF shows the
> result: your real series, sizes, and prices, checked against your catalog and your
> dealers' listings. No fluff, all spec.
>
> The quickest way to see why I bothered: pull up zingerwinger.com on your phone next to
> page one of the PDF. That gap is the whole pitch. The working version is here if you'd
> rather click around: [live preview link]. And if you'd rather not open an attachment
> from a stranger, everything in the PDF is on that page too.
>
> Gunner and Impact get $700 for a crate partly because their websites look like the
> gear costs it. Your gear holds up better in the field than it does online — that's the
> gap I'd like to close.
>
> I work the way you'd want a supplier to quote you — everything in writing, in black
> and white. Hit reply (even just the word "interested" works) and you'll have a
> one-page plan with the price back the same day: one fixed number, well under agency
> money. No phone tag, no meetings — I won't chase you on your phone. (If you'd rather
> pick one up yourself, the number below gets answered.)
>
> Whatever you decide, the PDF is yours to keep — hand it to whoever ends up doing the
> work. Thanks for making gear this good.
>
> [Full name]
> [Town, Province/State] · [email] · [phone]
>
> P.S. You've heard this one before, I'm sure: the Field Trialer's address is spelled
> "Field-Trailer." A rebuild fixes that for good — and every old address forwards
> automatically, so twenty years of links and bookmarks keep working.

**Send mechanics (matter as much as the words):**

- Send Tuesday–Thursday, 7:00–8:30 a.m. — owners read email before the shop opens.
- Attach ONE file: `zinger-redesign-preview.pdf` (PDFs sail through spam filters and
  print cleanly for an owner who prints things). Never attach `.html` — mail clients
  block it.
- Host the live demo at a clean, readable URL (e.g. `zinger-preview.yourdomain.com`),
  not a random hash. One tap, no sign-up. Take it down if they decline — it uses their
  brand.
- Send from `you@yourdomain.com`, not a personal Gmail — fixes credibility and
  deliverability in one $20 move.
- **The phone line you never dial still matters.** The likeliest positive response from
  a phone-first owner is an inbound call to hear your voice. You don't have to make
  calls — but that number must get answered. If you can't answer live, set a voicemail
  that converts the call back to email: "You've reached [name]. I'm at the desk, not the
  phone — leave your name and you'll have an answer in your inbox within the hour."
  Then honor it. An unanswered signature number kills this exact prospect at the last step.
- **All-email follow-up sequence, then stop:**
  - Day 0 — the email above.
  - Day 4 — two-line bump: "In case Tuesday's note got filtered: the rebuilt crate pages
    are here — [link]. One tap, nothing to download."
  - Day 10 — closing note with the parting gift attached: "Closing the file on this —
    last note, promise. Attached is the one-page list of what I found under the hood:
    the duplicate page addresses splitting your Google ranking, the internal store pages
    Google is indexing, the mobile issues, and the Field-Trailer spelling. It's yours
    either way. If the website ever makes the winter project list, you know where to
    find me."
  - Then stop. Three touches is persistence; four is the spam folder.
- Pre-write the one-page proposal BEFORE sending the cold email, so "back the same day"
  is a ten-minute promise to keep, not a scramble.

**Reply-handling template (send the same day he replies):**

> Good to hear from you. One page attached, one number on it: **CAD $9,900, fixed** —
> the full rebuild as shown in the mockups: your store moved to modern software, all
> products carried over, every old address forwarding, launch included, and 30 days of
> fixes after launch on me. Two smaller and larger options are on the page too.
> Payments go CAD $2,500 to start, $4,900 when you've clicked through your own store and
> approved it, $2,500 at launch — you own everything delivered at each paid stage.
> If it reads right, reply "go ahead" and I'll send the agreement and first invoice —
> everything signable from your desk, nothing by phone unless you want it.

## Pricing (quote in CAD — they're in Ontario; print the currency next to every number)

Three build tiers, presented middle-first. The premium tier exists mostly to make the
middle one the sane choice. There is deliberately NO cheap "design-only" tier — selling
the mockups alone invites the owner to hand them to a cheaper developer and you lose the
build, the case study, and the retainer.

| Tier | Price | What's in it |
|---|---|---|
| Essentials | **CAD $7,500** | Shopify store, this design as a custom theme, 60 SKUs migrated as-is, full 301-redirect map, launch + 30 days of fixes. No size-finder. |
| **Recommended** | **CAD $9,900** (≈ USD $7,300) | Everything in the mockup: size-finder, guarantee/dealer/support pages, ~150 SKUs, redirect map, analytics, launch + 30 days of fixes. |
| The Works | CAD $15,900 | Adds a product-photography day at the Milton shop, copywriting, email flows, and a dealer/wholesale portal. |

**Negotiation stance:** hold the price; trade everything else. Do not pre-authorize
yourself a discount — a price that slides 27% under pressure tells a man who negotiates
suppliers for a living that every number you say is padded. Your one prepared concession
is the **founding-client credit**: "CAD $9,900 — but $8,400 for my first manufacturing
client, in exchange for a testimonial, case-study rights, and two introductions to other
gun-dog brands." That buys the portfolio you don't have yet.

**Payment schedule** (built for a buyer who won't wire thousands to a stranger):
CAD $2,500 to start → CAD $4,900 when he clicks through the staging store with his real
products in it → CAD $2,500 at launch. He owns everything delivered at each paid stage.
Use a real contract and invoice — paperwork is credibility when you have no references.

**Assumptions block (put it in the written quote — this is what saves you):** migration
uses existing product photos and copy as-is; new photography, copywriting, and logo work
are quoted separately; product data arrives in one export; two revision rounds on the
theme; anything beyond is change-ordered at CAD $95–110/hr. Legacy-cart product data is
the #1 scope-creep sinkhole in this kind of job.

**Care plan (offer at handoff, not on the first call):** CAD $325/mo starting day 31,
three-month minimum then month-to-month — up to 2 hours of updates with a same-day
response promise. Pitch it as "my version of your five-minute callback." Offer the
alternative of straight hourly billing; having the no-retainer option is what makes him
consider the retainer. Annual prepay at ten months' price.

**Value framing for the call:** every order that comes direct instead of through a dealer
keeps the dealer's margin in his pocket — the site pays for itself moving a couple of
orders a month from dealer to direct. Disclose his ongoing costs honestly: Shopify
$39–105/mo plus ~2.9% card processing.

**Market context (why these numbers are defensible):** freelance small-business builds
run $1,500–8,000; Shopify redesigns start around $3,000 freelance and $5,000+ at
agencies; platform migration typically adds $3,000+ on its own. CAD $9,900 (~USD $7,300)
for design + build + migration + redirects sits squarely in the fair-freelancer band and
far under any agency quote he'd get for the same scope.

## Fact-check before presenting (important)

Everything on the mockup was researched from Zinger's pages and their dealers' listings (Sporting Dog Pro, Gun Dog Supply, HuntEmUp, Lion Country Supply, OmniaPaws), but confirm with the owner before it goes live anywhere:

- **Prices** are dealer street prices as of Aug 2026: DX from $599.99, PR from $799.99, AR from $1,049.99; winger prices from Gun Dog Supply. HD pricing wasn't published anywhere, so the mockup says "by quote."
- **Dimensions, weights, and breed fits** in the sizing table come from Zinger's own size pages and dealer listings (e.g., 4000 = 24″×28″×36″, DX 4000 ≈ 34 lb, "to 120 lb"). Re-verify every row against their current spec sheets before the pitch — in a spec-sheet-themed design, one wrong number in front of the people who build the crates is fatal.
- **Warranty** claims conflict across sources (lifetime materials/workmanship per one dealer, 1-year per another). The mockup uses the vague-but-safe "materials & workmanship warranty" plus the confirmed 90-day no-escape guarantee on PR/HD. Get the real terms.
- **Testimonials**: the first quote is real (Retriever Club of Long Island, from their reviews page); the other two are adapted from their published reviews and RetrieverTraining.net threads. Re-permission real quotes for launch.
- **"TIG-welded"**: dealers say "welded aluminum" / "double-welded"; TIG is the standard process for aluminum but confirm their shop's word for it.
- The **maple-leaf/Made-in-Canada** claim is confirmed (Milton, Ontario shop; "Made in Canada" on dealer listings).

## Getting real screenshots & photos into the mockup

The mockup was built in a cloud session whose network policy blocks outside websites, so
the product art is technical-drawing SVG (which reads as intentional). To upgrade it with
the live site's "before" screenshots and real product photography, run a **local** Claude
Code session on a machine with normal internet:

1. Open the Claude Code desktop app (or `claude` in a terminal) on your machine.
2. Clone the repo and check out this branch:
   `git clone https://github.com/thejoshuasilverstone-cloud/archestra && cd archestra && git checkout claude/zinger-website-redesign-jgmbpg`
3. Paste this prompt:
   > Open zinger-redesign/index.html. Fetch https://www.zingerwinger.com/zinger-dog-crates/ and its product pages. Screenshot the live site at desktop and mobile widths for a "before" record, download 4–6 of their product photos, and swap them into the mockup's hero and series cards (keep the technical-drawing art as secondary accents). Verify every price, dimension, and series name on the page against the live site and fix any that differ. Rebuild zinger-redesign-preview.pdf with a before/after spread as page one. Commit to this branch and push.

## Files

- `index.html` — the mockup. Self-contained (fonts and artwork embedded); open directly in a browser.
- `zinger-redesign-preview.pdf` — 6-page visual preview; this is what you attach to the email.
- `PITCH.md` — this document.
