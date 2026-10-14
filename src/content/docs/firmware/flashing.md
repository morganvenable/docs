---
title: Flashing firmware
description: Install firmware on each half with bootloader mode and a UF2 file, and restore your layout afterward.
sidebar:
  order: 1
---

Both firmwares install the same way: copy a `.uf2` file onto the board.

**Flashing resets your layout and settings to the firmware's default layout.** Back up first and restore afterward.

1. **Back up your layout.** In Keybard, choose **Export Layout** and save a `.svil` file. On Vial, save a `.vil`.
2. Download the right file for **each half**: the side (left or right) and, on the current firmware, the pointing module on that half (see [Firmware files](/firmware/files/), or [Vial firmware files](/vial/files/) for Vial).
3. Plug **one half** into your computer by its **U** port.
4. Press its **RESET** button twice quickly, within half a second. A drive named **RPI-RP2** appears.
5. Copy that half's `.uf2` onto the drive. The half restarts by itself and the drive disappears. This is normal.
6. Move the USB cable to the other half and repeat with its file.
7. Plug in normally. In Keybard, choose **Import Layout** and pick your `.svil`.

Both halves must run the same release. Don't press keys, especially thumb keys, while the board starts.

New microcontrollers, in a kit or as spares, ship with no firmware and are not set to a side. Flash each one with the file for the half it goes in.
