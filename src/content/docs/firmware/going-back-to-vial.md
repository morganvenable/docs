---
title: Going back to Vial
description: Return a board from Svalboard QMK to Svalboard's Vial firmware.
sidebar:
  order: 9
---

1. In Keybard, export your setup twice with **Export Layout**: once as **Svalboard (.svil) - Native Format**, and once as **Vial (.vil) - Legacy Compatibility** for Vial.
   <!-- VERIFY: does Vial v2025-11-01 load a Keybard .vil without errors? -->
2. Flash both halves with the Vial v2025-11-01 files (see [Vial firmware files](/vial/files/) and [Flashing firmware](/firmware/flashing/)). This resets the board to Vial's default layout.
3. Open Vial and load your `.vil`.

Settings that only exist in Svalboard QMK (leaders, Boost, entries above Vial's limits) don't carry back. See also [What a .vil doesn't hold](/firmware/vil-limits/).
