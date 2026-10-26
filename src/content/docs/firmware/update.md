---
title: Update to x4.1
description: Install Svalboard QMK x4.1 on both halves by hand, from Vial, vLaunch2, x3 or x4. After that, Keybard installs updates for you.
---

x4.1 is one firmware file for both halves, `svalboard_sval_x4.1.uf2`. The same file works with every pointing module.

Install it by hand on **both halves**, one half at a time, whatever your keyboard runs now. After that, Keybard installs updates for you.

x4.1 is a prerelease. Download it from the [x4.1 release](https://github.com/svalboard/qmk/releases/tag/x4.1), or let Keybard at [next.keybard.svalboard.com](https://next.keybard.svalboard.com) hand you the file. Plan on about ten minutes.

## Which firmware do I have?

Open [next.keybard.svalboard.com](https://next.keybard.svalboard.com) in Chrome or Edge and choose **Connect Keyboard**.

- Keybard shows **Update your Svalboard's firmware** and says the board is running the old Vial firmware: see [From Vial](#from-vial).
- Keybard shows your layout: open **Settings**, then **Firmware and backups**. The **Firmware** card shows the firmware on the half that's plugged in:
  - **x4**: see [From x4](#from-x4).
  - **x3**, **x3.1**, **x3.1.1**, **x3.1.2**, **x3.1.3** or **vNext1**: see [From x3](#from-x3).
  - Anything else, such as **vLaunch2**: see [From vLaunch2](#from-vlaunch2).

If your halves run different firmware, follow the section for the older one. The install is the same for every keyboard. Only how you keep your layout differs.

## Install x4.1 on both halves

Keep the split cable connected the whole time. Start with the half you don't usually plug in, and finish with the one you do.

1. Plug the USB cable into that half's **U** port.
2. Press its **RESET** button twice, about a quarter of a second apart. Too fast and nothing happens. A drive named **RPI-RP2** opens.
3. Drag `svalboard_sval_x4.1.uf2` onto the drive. The drive closes and the half restarts. What you see next depends on the other half:
   - **The other half runs Vial or vLaunch2**: nothing special. The half you just installed shows its usual lights, and the other half keeps its old lights (on Vial, plain white). The halves don't work together yet. That's expected: go on with step 4.
   - **The other half runs x3 or x4**: within a few seconds both halves turn rainbow. The other half then glows steady magenta for a few seconds while it installs x4.1 itself, restarts, and both halves flash green twice, about half a minute after the drive closed. Do step 4 anyway; it's quick and harmless.
4. Move the USB cable to the other half's **U** port. Press its **RESET** button twice, and drag the same file onto its **RPI-RP2** drive. The drive closes and the half restarts.
5. Within a few seconds both halves turn rainbow while this half sends x4.1 across the split cable. The first half glows steady magenta for a few seconds while it writes, then restarts. Both halves stay rainbow until they find each other, then flash green twice, about half a minute after the drive closed. Your keyboard is on x4.1.

If a half blinks red, about once a second, the install didn't finish: the halves still differ a minute after an update, or a half refused the file. The red stops by itself after 30 seconds. Check the split cable, then install the file on both halves again. If it blinks red again, open a ticket in #customer-service on the [Svalboard Discord](https://www.svalboard.com/discord).

The first start of x4.1 resets every setting to the defaults, so keep your layout first, as each section below says.

### Which half is which

When you connect after the install, Keybard may show **Set which half is which** and ask **Which half is plugged into your computer?** Choose **Left half** or **Right half**. Both halves restart, and then they type. Neither half types until you answer. See [Which half is which](/keybard/update-firmware/#which-half-is-which).

## From Vial

Keybard can't read a keyboard on Vial, so save your layout in Vial first.

1. In Vial, choose **File → Save current layout** and save the `.vil` file.
2. Note your DPI, scrolling, automouse and layer colors. A `.vil` doesn't hold them (see [What a .vil doesn't hold](/firmware/#what-a-vil-doesnt-hold)).
3. Download `svalboard_sval_x4.1.uf2` from the [x4.1 release](https://github.com/svalboard/qmk/releases/tag/x4.1). It replaces every Vial file, for every pointing module.
4. Install it on both halves. See [Install x4.1 on both halves](#install-x41-on-both-halves).
5. Open [next.keybard.svalboard.com](https://next.keybard.svalboard.com) and choose **Connect Keyboard**. If Keybard asks which half is which, answer it.
6. Choose **Import Layout** and pick your `.vil`. Read the review, then apply it.
7. Set DPI, scrolling, automouse and layer colors again. Check your mod-taps: Chordal Hold replaces Achordion.
8. Choose **Export Layout** and keep the `.svil` file.

From then on, updates install from Keybard. For everything that changes from Vial, see [Moving from Vial](/firmware/#moving-from-vial).

## From vLaunch2

Keybard saves your layout and puts it back for you.

1. Open [next.keybard.svalboard.com](https://next.keybard.svalboard.com), choose **Connect Keyboard**, then **Settings** and **Firmware and backups**.
2. The **Firmware** card reads **x4.1 is available**. Choose **Update to x4.1**. Keybard opens **Install x4.1 by hand** and saves your layout to Downloads.
3. Under **Your layout**, keep **Restore my layout**.
4. Under **Firmware file**, download the file.
5. Install it on both halves, as the dialog shows. See [Install x4.1 on both halves](#install-x41-on-both-halves).
6. After the green flashes, choose **Connect keyboard**. If Keybard asks which half is which, answer it.
7. Keybard puts your layout back and shows **x4.1 is installed**. Choose **Done**.

## From x3

x3, x3.1, x3.1.1, x3.1.2, x3.1.3 and vNext1 all update the same way. Keybard saves your layout and puts it back for you.

1. Open [next.keybard.svalboard.com](https://next.keybard.svalboard.com), choose **Connect Keyboard**, then **Settings** and **Firmware and backups**.
2. The **Firmware** card shows your release, for example **x3.1.3**, and reads **x4.1 is available**. Choose **Update to x4.1**. Keybard opens **Install x4.1 by hand** and saves your layout to Downloads.
3. Under **Your layout**, keep **Restore my layout**.
4. Under **Firmware file**, download the file.
5. Install it on both halves, as the dialog shows. See [Install x4.1 on both halves](#install-x41-on-both-halves).
6. After the green flashes, choose **Connect keyboard**. If Keybard asks which half is which, answer it.
7. Keybard puts your layout back and shows **x4.1 is installed**. Choose **Done**.

## From x4

Your keyboard already has the updater, so Keybard can install x4.1 for you.

1. Open [next.keybard.svalboard.com](https://next.keybard.svalboard.com), choose **Connect Keyboard**, then **Settings** and **Firmware and backups**.
2. The **Firmware** card reads **x4.1 is available**. Choose **Update to x4.1**.
3. Under **Your layout**, keep **Restore my layout**, and choose **Update**.
4. When Keybard shows **Confirm on your keyboard**, press the two keys it shows. See [Confirm on your keyboard](/keybard/update-firmware/#confirm-on-your-keyboard).
5. Keybard updates both halves, puts your layout back and shows **x4.1 is installed**. Choose **Done**.

You can install by hand instead: choose **Export Layout** and save a `.svil` first, install the file on both halves (see [Install x4.1 on both halves](#install-x41-on-both-halves)), then connect and choose **Import Layout**.

If the Firmware card reads **The left half didn't answer** (or the right), that half runs older firmware or the split cable is loose. Check the cable. If it still doesn't answer, choose **Install by hand** and install x4.1 on both halves.

## When it's done

The **Firmware** card shows **x4.1** on both halves and reads **Your keyboard has the newest firmware**. Both halves type.

If a half doesn't type:

- **Keybard asks which half is which**: answer it. See [Which half is which](#which-half-is-which).
- **The card names a half that still runs older firmware, or didn't answer**: check the split cable, then install the file on that half again.
- **A half stays a drive named RPI-RP2**: drag the file onto that drive again.

Still stuck? Open a ticket in #customer-service on the [Svalboard Discord](https://www.svalboard.com/discord).
