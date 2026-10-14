---
title: Bleeding edge (vNext)
description: The unstable vNext firmware prereleases, what they change, how to install them and how to go back.
sidebar:
  order: 7
---

vNext firmware is published as prereleases on the [svalboard/qmk releases page](https://github.com/svalboard/qmk/releases). The first, **vNext1**, came out on October 14, 2026.

**vNext is an unstable build.** Use it only if you are comfortable flashing back to a released version (see [Going back](#going-back)) when something breaks.

## What changes

- **64-byte reports.** Keybard and the board exchange larger messages, so reading and writing your layout is faster. This firmware needs **Keybard vLaunch2.3 or later** and **Keybard Host vLaunch2.3 or later**. Older versions can't talk to it. Both are out: https://keybard.svalboard.com runs vLaunch2.3.
- **One firmware per side for every pointing module.** There are two files: `svalboard_left_sval_<release>.uf2` and `svalboard_right_sval_<release>.uf2`. Each half finds its pointing module at startup, including the deprecated PMW3360 trackball. After you attach or change a module, unplug the board and plug it back in.
- **No blank file.** A vNext release has only the two files above.

## Installing vNext

1. Export a `.svil` from Keybard. Flashing resets your layout and settings to the default.
2. Download both files from the vNext release.
3. **Flash both halves** (see [Flashing firmware](/firmware/flashing/)). Until both halves run the same release, the other half won't work.
4. Open https://keybard.svalboard.com, connect, and import your `.svil`.

## If you ran a trackball, TrackPoint or touchpad file

The board now uses the same USB product ID as a board with no module: `4044` on the left, `4045` on the right (see [USB IDs](/reference/usb-ids/)).

- **Keybard**: choose **Connect Keyboard** and select the board again. The browser treats it as a new device.
- **Keybard Host**: nothing to reselect. It finds the board by its Svalboard interface and remembers it by serial number, and neither changes. Update it to vLaunch2.3 or later.
- **Linux**: the [udev rule](/firmware/linux-udev/) already covers the new ID. If you installed an older rule that names one product ID, replace it with that rule.

Boards with no pointing module keep their ID.

## Going back

To return to the released firmware:

1. Export a `.svil` from Keybard.
2. Flash the **vLaunch2** `.uf2` files for your pointing modules (see [Firmware files](/firmware/files/)) on both halves. This resets your settings.
3. Open stable Keybard at https://keybard.svalboard.com and import your `.svil`.
