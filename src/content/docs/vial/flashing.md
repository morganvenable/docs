---
title: Flash Vial firmware
description: Install Svalboard's Vial firmware and restore your .vil layout afterward.
sidebar:
  order: 2
---

1. In Vial, save your layout: **File → Save current layout** (`.vil`). Flashing resets the layout to the default.
2. Flash both halves as in [Flashing firmware](/firmware/flashing/), with the files from [Vial firmware files](/vial/files/).
3. Open Vial. It connects by itself; it may take a couple of tries.
4. **File → Load saved layout** and choose your `.vil`.

After flashing:

- The mouse-layer timeout resets to its default, 500 ms. See [Pointing settings in Vial](/vial/pointing/).
- Vial stores the keymap on each half separately. If you plug the computer into the other half, the layout can look different. Load your `.vil` again.
