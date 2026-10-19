# Svalboard docs (docs.svalboard.com)

Astro Starlight site. Pages are Markdown in `src/content/docs/<section>/`. Build, Hardware, Firmware, Keybard and Vial are each one page (`<section>/index.md(x)`) read by jumping: their sidebar entries are anchor links listed in `astro.config.mjs` (update them when an h2 changes), old page URLs redirect to anchors there, and there is no previous/next pager. Start and Reference are generated per section (order with `sidebar: { order: N }` in frontmatter). Images live in `src/assets/<section>/` and are referenced relatively so Astro optimizes them.

## Commands

- `npm run dev` (background: `npx astro dev --background`)
- `npm run build`: builds, validates every internal link, writes `llms.txt`
- `npm run check`: wording rules (`scripts/check-wording.mjs`)

## Content rules (all checked or enforced in review)

- American spelling (color, gray, behavior, center).
- The cable between halves is the "split cable". Never write "TRRS".
- Never mention "Viable", `.viable`, or Scan Lab.
- PMW3360 appears only where every target is listed, last, marked deprecated.
- 52 keys at baseline, 56 to 60 with 6-key clusters; the 5-key cluster is the default.
- Point people to Keybard's Layouts panel; don't promote `.vil` import.
- The TrackPoint goes on the half connected to USB.
- Flashing firmware resets settings: export a `.svil` first, import it after.
- Short, plain sentences. UI names in **bold**, exactly as on screen. No filler, no marketing.
- Write as Svalboard speaking to its customers: describe options as offerings ("For more reach, choose…"), never as observations or exclusions ("Svalboard sometimes sells…", "the only other…"). No hedging about our own products.
- Owner questions go in an HTML comment, `<!-- VERIFY: ... -->` (in `.mdx`: `{/* VERIFY: ... */}`), never on the page.

## Docs and development

Every feature PR in svalboard/keybard or svalboard/qmk that changes what a user sees or does gets a matching PR here, written while the feature is designed. See CONTRIBUTING.md.

## Short links on svalboard.com

svalboard.com/manual, /fitment and /build are Shopify URL redirects to this site: /start/quickstart/, /hardware/#fit and /build/. Keep those anchors stable; if an h2 they land on changes, the redirect in Shopify changes with it. The older Google Doc and Slides stay linked from Reference > Links, under Older guides.

## Notes from the owner

`public/notes.js` lets the owner file notes on any page into a private inbox. Notes are private. Never quote or paraphrase a note's wording in commits, PR titles or bodies, issues, or pages. Describe each change in your own neutral words (for example, "Step 6: correct the latch direction").
