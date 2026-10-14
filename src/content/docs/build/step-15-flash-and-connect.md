---
title: "Step 15: Flash firmware and connect"
description: Flash Svalboard QMK onto both halves, connect the split cable and the computer cable, and connect Keybard.
sidebar:
  order: 17
---

Your MCUs ship with **no firmware**, and they aren't set to left or right. Flash both.

## Pick your firmware

Svalboard runs **Svalboard QMK**, configured with **Keybard**.

1. Go to the latest release: https://github.com/svalboard/qmk/releases/latest
2. Download one `sval` `.uf2` file for each half. Pick by side, and by the pointing device on that half (none, trackball, TrackPoint or touchpad). The full list of files is in [Firmware files](/firmware/files/).

- Use the newest release, and the same release on both halves.
- The `blank` files have no keys assigned. Use them only for the cluster test in [Step 7](/build/step-07-install-pcbas/#test-the-clusters-recommended).
- Flashing the wrong image does no harm. Flash the right one and try again.

## Flash each half

Do this once for each half.

1. Connect the half to your computer with a USB-C cable in the port marked **U**.
2. Double-tap the **reset** button on the bottom of the half.
3. A drive named **RPI-RP2** appears.
4. Copy that half's `.uf2` file onto the drive.
5. The half restarts by itself and the drive disappears. That half is done.

Flashing resets the layout to the default. Later, export a `.svil` from Keybard before you flash, and import it afterward. More detail: [Flashing firmware](/firmware/flashing/).

:::note[vNext1 prerelease]
vNext1 is a prerelease. It needs only two files: `svalboard_left_sval_<release>.uf2` and `svalboard_right_sval_<release>.uf2`. The same file works with every pointing device, because the firmware detects the module when the half starts. After you attach or change a module, unplug the board and plug it back in. See [Bleeding edge (vNext)](/firmware/bleeding-edge/) before you use it.
:::

### Staying on Vial

Svalboard's Vial firmware is still available, with no new releases planned. To use it, flash the `v2025-11-01` files from https://github.com/svalboard/vial-qmk/releases and configure the board with Vial (https://vial.rocks). The rest of this guide uses Keybard.

## Connect the cables

- Use the two USB-C cables from the kit.
- **Split cable:** the shorter cable joins the two ports marked **S** (or ↔).
- **Computer cable:** the longer cable goes from the port marked **U** on one half to your computer. That half is the main half.
- If you have a TrackPoint, the TrackPoint half must be the main half.
- Otherwise, make the half with your main pointing device the main half. The main half performs better.
- You can connect or disconnect the split cable while the board is plugged in.

## Connect Keybard

1. Open https://keybard.svalboard.com in Chrome or Edge on a desktop computer.
2. Choose **Connect Keyboard**, then pick your Svalboard in the browser's list.
3. Your layout loads. You can now edit it. Changes apply right away, with no flashing.
4. Keybard backs up each board automatically. After you change your layout, also choose **Export Layout** and keep the `.svil` file somewhere safe.

See [Keybard](/keybard/) for more.

### On Linux

Linux won't let the browser open the board until you add a udev rule. See [Linux: the udev rule](/firmware/linux-udev/).
