# Contributing to the Svalboard docs

This repo is the source of [docs.svalboard.com](https://docs.svalboard.com). The docs change with the product: when Keybard or the firmware changes what someone sees or does, the docs change with it.

## Docs ship with features

Every pull request in [svalboard/keybard](https://github.com/svalboard/keybard) or [svalboard/qmk](https://github.com/svalboard/qmk) that changes what a user sees or does gets a matching pull request here.

1. **Draft the docs while the feature is designed.** Writing the explanation is part of the design. If a step is hard to explain, it is usually hard to use, and that is cheaper to fix before the code is done.
2. **Link the two pull requests.** The feature PR's **Docs** section links the docs PR. The docs PR links the feature PR.
3. **Review them together.** Reviewers read the docs PR to check the feature does what it says.
4. **Merge the docs when the feature ships**, not before. Keybard features ship when they reach keybard.svalboard.com. Firmware features ship with a release on GitHub.
5. If a change has no user-visible effect, the feature PR says "No user-visible change" in its **Docs** section, and no docs PR is needed.

The text for the **Docs** section of each repo's PR template is in [`proposals/`](proposals/).

### What counts as user-visible

- New, renamed, moved or removed UI: buttons, panels, menus, settings, dialogs, messages.
- Changed behavior: what a key, setting or gesture does, defaults, timing.
- Anything about installing, flashing, updating, backing up or restoring.
- New hardware support, or a change to which firmware file a board needs.

### Release facts are generated

Release tags, dates, firmware file names and USB IDs come from GitHub, not from hand-written text. [`scripts/gen-facts.mjs`](scripts/gen-facts.mjs) writes [`src/data/facts.json`](src/data/facts.json), and the [USB IDs](src/content/docs/reference/usb-ids.mdx) and [Releases](src/content/docs/reference/releases.mdx) pages render it.

- The **Facts** workflow runs every Monday and can be run by hand from the **Actions** tab. It opens a pull request when the facts changed.
- To refresh by hand: `npm run facts`. Set `GITHUB_TOKEN` if you hit the GitHub rate limit.
- Don't type release tags, file names or USB IDs into other pages. Import them from `facts.json` in an `.mdx` page instead, as the two reference pages do.

## How to write

Follow the content rules in [CLAUDE.md](CLAUDE.md). In short:

- Short, plain sentences. No filler, no marketing.
- UI names in **bold**, exactly as on screen.
- American spelling. "Split cable", never anything else.
- Flashing firmware resets settings: every flashing page says to export a `.svil` first and import it after.
- Never guess. If you aren't sure something is true, leave it off the page and add a question for the owner:
  - in `.md` pages: `<!-- VERIFY: your question -->`
  - in `.mdx` pages: `{/* VERIFY: your question */}`

  To find open questions: `grep -rn "VERIFY:" src/content/docs`.

Pages are Markdown in `src/content/docs/<section>/`. Images go in `src/assets/<section>/` as WebP, at most 1600 px wide, with real alt text. Link to other pages with site paths like `/firmware/flashing/`.

## How the owner edits

You don't need to clone anything to fix a page.

1. On the page, click **Edit page** at the bottom.
2. GitHub opens the file in its web editor. Make the change.
3. Click **Commit changes...**, choose to create a new branch, and open a pull request.
4. The checks run on the pull request. Merge it when they pass.

To answer a `VERIFY` question, edit the page the same way: put the answer on the page and delete the comment.

## Previews and checks

Every pull request runs:

- `npm run check`: the wording rules (`scripts/check-wording.mjs`).
- `npm run build`: builds the site and fails on any broken internal link.

To preview locally:

```
npm ci
npm run dev
```

Then open the address it prints. `npm run check` and `npm run build` run the same checks as CI.

Merging to `main` publishes the site.
