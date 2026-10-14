# Svalboard docs (docs.svalboard.com)

Astro Starlight site. Pages are Markdown in `src/content/docs/<section>/`; the sidebar is generated per section (order with `sidebar: { order: N }` in frontmatter). Images live in `src/assets/<section>/` and are referenced relatively so Astro optimizes them.

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
- Owner questions go in an HTML comment, `<!-- VERIFY: ... -->`, never on the page.

## Docs and development

Every feature PR in svalboard/keybard or svalboard/qmk that changes what a user sees or does gets a matching PR here, written while the feature is designed. See CONTRIBUTING.md.

## Not cut over yet

svalboard.com/manual and /build still point at the Google Doc and Slides. Don't edit those, and don't change those redirects. `src/components/PreviewBanner.astro` marks this site as a preview until cutover.
