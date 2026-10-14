---
title: Moving from Vial
description: Move a board from Svalboard's Vial firmware to Svalboard QMK and bring your layout across.
sidebar:
  order: 8
---

The firmware does **not** bring your Vial settings across. Flashing resets the board to the default layout. Keybard can import your Vial `.vil` to restore it.

1. In Vial, save your layout as a `.vil`. Keep it unchanged.
2. Write down anything you rely on that a `.vil` doesn't hold: DPI, scrolling, automouse and layer colors (see [What a .vil doesn't hold](/firmware/vil-limits/)).
3. Flash both halves with the vLaunch2 files (see [Firmware files](/firmware/files/) and [Flashing firmware](/firmware/flashing/)).
4. Open https://keybard.svalboard.com in Chrome or Edge and choose **Connect Keyboard**.
5. Choose **Import Layout** and pick your `.vil`. Read the review, then apply it. This restores your layout, macros, tap dances, combos, key overrides and QMK settings.
6. Set DPI, scrolling, automouse and layer colors again in Keybard.
7. Check every layer, your macros, your modifier swaps and your mod-tap feel (Chordal Hold replaces Achordion).
8. Export a `.svil` backup once it all works.

The first start after flashing takes a few seconds longer while the board sets up its settings storage.

If you'd rather start fresh, skip the import and use Keybard's **Layouts** panel for letter and NavNAS layers (see [Start from a layout Svalboard provides](/keybard/layers/#start-from-a-layout-svalboard-provides)).

<!-- VERIFY: the repo rules say not to promote .vil import, but this owner-approved migration path imports the Vial .vil (step 5). Keep it as the main path, or lead with the Layouts panel? -->
