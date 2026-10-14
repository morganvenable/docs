---
title: What's new compared with Vial
description: What Svalboard QMK and Keybard add compared with Svalboard's Vial firmware, and what changed.
sidebar:
  order: 2
---

Svalboard QMK is the current firmware, `svalboard/qmk`, release **vLaunch2**. You configure it with [Keybard](/keybard/) in Chrome or Edge.

Already in Svalboard's Vial firmware, now edited in Keybard:

- tap dances, combos, key overrides, alternate-repeat keys, macros and QMK settings
- DPI, scrolling and Sniper keys
- automouse toggle and timeout
- TrackPoint recalibration

New in Svalboard QMK:

- **256 entries** each for tap dances, combos, key overrides, macros, alternate-repeat keys and leader sequences.
- **Leader sequences**: a Leader key, then up to five keys, triggers an action.
- **Layer colors and LED brightness set from Keybard** (see [Layer lights and brightness](/keybard/layer-lights/)).
- **Board identity**: each board keeps its identity and can have a name.
- **Sniper toggle**: slow movement without holding a key.
- **Boost**: 2x, 3x or 5x faster movement, held or toggled.
- **Per-pointer automouse**, with an activation threshold and decay.
- **Natural scrolling**.
- **Idle power** settings.
- **Protocol additions**: host apps can read and control layer state.

Settings are stored in two checked copies, so a bad read doesn't wipe your layout.

Changed: **Chordal Hold** replaces Achordion and is on by default. It is similar but not identical; check your mod-taps after moving.

Keybard also adds automatic backups, layer reordering, a saved default layer, a layouts library, printable layers and the Keybard Host overlay.

To move your board over, see [Moving from Vial](/firmware/moving-from-vial/).
