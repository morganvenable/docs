# Proposed **Docs** section for the svalboard/qmk PR template

svalboard/qmk still has the stock QMK `.github/PULL_REQUEST_TEMPLATE.md`. This proposal adds a **Docs** section to it, after **Issues Fixed or Closed by This PR**, and removes the two stock checklist items about documentation ("My change requires a change to the documentation." and "I have updated the documentation accordingly."), which point at QMK's docs, not ours.

Every PR either links its docs PR in [svalboard/docs](https://github.com/svalboard/docs) or says it has no user-visible change. See the docs repo's [CONTRIBUTING.md](../CONTRIBUTING.md).

Copy everything below the line into the template.

---

## Docs

<!-- Pick one and delete the other. -->

- Docs PR: https://github.com/svalboard/docs/pull/<!-- number -->
- No user-visible change.

<!--
User-visible means: changed key, setting or pointing behavior; new or changed
defaults; anything about flashing, updating, backing up or restoring; new
hardware support; a change to which firmware file a board needs or to its USB
IDs.

Draft the docs PR while you design the feature. Merge it when the firmware
release that contains this ships.

Release tags, file names and USB IDs on the docs site are generated from this
repo's releases (scripts/gen-facts.mjs in svalboard/docs), so you don't need
to edit those by hand.
-->
