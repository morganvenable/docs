---
title: Update your firmware from Keybard
description: Install Svalboard firmware updates from Keybard. After one install by hand on both halves, Keybard updates both halves through USB after you confirm on the keyboard.
---

Keybard installs Svalboard firmware for you. Choose **Update**, confirm on the keyboard, and Keybard updates both halves through the cable to your computer. It saves your layout first and puts it back afterward.

Updates from Keybard start with x4. From x4, each release is one firmware file for both halves, for example `svalboard_sval_x4.1.uf2`. The same file installs from Keybard or by hand. To move to x4.1 from Vial, vLaunch2, x3 or x4, see [Update to x4.1](/firmware/update/).

## Find the Firmware card

Open **Settings** in the left navigation, then **Firmware and backups**. A dot on **Settings** means a newer release is ready, and the **Firmware** chip carries the same dot.

The card shows the release on each half, and **plugged in** next to the half your USB cable goes to. When a newer release is ready, the card reads, for example, **x4.1 is available**, with **What's new in x4.1** to open its release notes and one button: **Update to x4.1**.

When both halves run the newest release, the card reads **Your keyboard has the newest firmware**. When the halves run different releases, it reads **The halves run different firmware** and offers **Finish update**.

<!-- SCREENSHOT: the Firmware card with both halves, "x4 is available", What's new in x4 and Update to x4. Source: Svalboard/review/x4-keybard/01-card.png -->

Everything else is under **Other versions and files**:

- **Install** or **Reinstall** an older release this Keybard carries, each with its own **What's new** link.
- **Install a firmware file…** for a file you downloaded.
- **Update one half only…**, then **Left half** or **Right half**.

[keybard.svalboard.com](https://keybard.svalboard.com) carries the two newest full releases. [next.keybard.svalboard.com](https://next.keybard.svalboard.com) adds the newest prerelease. Keybard checks every firmware file it carries against a fingerprint before it installs it.

If the card says **Your keyboard runs newer firmware than this Keybard knows**, choose **Reload Keybard** to load the latest Keybard.

## Your first update is an install by hand

Updates from Keybard need firmware with the updater built in. A keyboard on older firmware gets it with one install by hand, on both halves. After that, every update comes from Keybard. For each firmware you may be coming from, see [Update to x4.1](/firmware/update/).

Choose **Update to x4.1** on the Firmware card. Keybard opens **Install x4.1 by hand**:

1. **Your layout**: Keybard saves it to Downloads first and names the file. Choose what happens afterward: **Restore my layout** or **Start from the default layout**.
2. **Firmware file**: download the file. One file is for both halves.
3. **Install**, keeping the split cable connected. Keybard starts with the half you don't usually plug in:
   1. Plug the USB cable into that half's **U** port.
   2. Press its **RESET** button twice, about a quarter of a second apart. Too fast and nothing happens. A drive named **RPI-RP2** opens.
   3. Drag the file onto the drive. The half restarts and the drive closes.
   4. Then the other half: move the USB cable to its **U** port, press its **RESET** button twice, and drag the same file onto the drive.
   5. Wait about half a minute. The halves may show rainbow colors while they check each other. When the lights settle, the install is done.
4. When the lights have settled, choose **Connect keyboard**.

<!-- SCREENSHOT: Install x4.1 by hand with the layout choice, the one file and the steps for both halves. Source: Svalboard/review/x4-keybard/09-by-hand-instructions.png (retake for x4.1) -->

On **Connect keyboard**, Keybard reads the firmware on both halves:

- **Both halves run x4.1**: Keybard restores your layout, as you chose, and shows **x4.1 is installed**. From then on, updates install from Keybard.
- **One half still runs its old firmware**: Keybard names that half, for example **The left half still runs x3.1.3**, and shows the steps for that half. Install the file on it, then choose **Connect again**.
- **A half didn't answer**: a half on older firmware doesn't answer over the split cable. Keybard names it and shows its steps. Install the file on it, then choose **Connect again**.
- **Neither half changed**: the steps stay, with a line saying what Keybard found.
- **Keybard asks which half is which**: answer **Set which half is which**, then Keybard restores your layout. See [Which half is which](#which-half-is-which).

<!-- SCREENSHOT: "The left half still runs x3.1.3" with the steps for the left half. Source: Svalboard/review/x4-keybard/10-by-hand-one-half.png -->

Closing the dialog loses nothing. Your layout is in Downloads and in **Backups**, and when you next connect, Keybard offers to put it back.

For an extra copy, choose **Export layout** and save a `.svil` file before you start. For flashing in detail, see [Flashing firmware](/firmware/#flashing-firmware).

A keyboard on Vial doesn't connect to Keybard. Save your layout in Vial first, then follow [From Vial](/firmware/update/#from-vial).

## Update from Keybard

Keep the USB cable plugged into one half and the split cable connected. Keybard updates the other half through the split cable, then the half with USB.

1. Choose **Update to x4.1**. Keybard reads both halves, saves your layout to Downloads and to **Backups**, and opens **Update to x4.1**: "Keybard updates both halves through the cable to your computer. It takes about 2 minutes."
2. Under **Your layout**, choose what happens afterward:
   - **Restore my layout**: Keybard restores your saved layout. This is the default.
   - **Start from the default layout**: the firmware's own default layout.
   - **Start from a blank keyboard**: every key empty on every layer.
3. Choose **Update**.
4. When Keybard shows **Confirm on your keyboard**, press the two keys it shows. See [Confirm on your keyboard](#confirm-on-your-keyboard).
5. Keybard shows **Updating your keyboard**, with one progress bar and what it is doing now, for example **Installing on the left half**. Keep the keyboard plugged in, keep the split cable connected, and keep Keybard open.
6. When it finishes, Keybard shows **x4.1 is installed** and **Your layout is back on the keyboard**. Choose **Done**.

<!-- SCREENSHOT: Update to x4: one sentence, the layout choice, Update. Source: Svalboard/review/x4-keybard/03-update-start.png -->

<!-- SCREENSHOT: Updating your keyboard: one bar, the stage line and the time left. Source: Svalboard/review/x4-keybard/05-update-updating.png -->

<!-- SCREENSHOT: x4 is installed. Source: Svalboard/review/x4-keybard/06-update-done.png -->

While Keybard copies firmware to the half without USB, don't type on that half. Between the two halves, the light on the half with USB blinks red slowly. That is expected, and it stops when that half is updated too.

### Update one half

Open **Other versions and files**, choose **Update one half only…**, then **Left half** or **Right half**. It takes about a minute.

### Install a firmware file

Open **Other versions and files** and choose **Install a firmware file…**. Pick the release's `.uf2` file, for example `svalboard_sval_x4.1.uf2` from the release on [GitHub](https://github.com/svalboard/qmk/releases). The one file installs both halves.

Files from releases before x4 have one file per half. Keybard doesn't install those. It says so, and how to install the file by hand: plug in the half it's for, press its **RESET** button twice, and drag the file onto the **RPI-RP2** drive.

Keybard Paranoid installs from a firmware file you choose.

<!-- SCREENSHOT: the refusal of a file from before x4, with the steps by hand. Source: Svalboard/review/x4-keybard/14-per-side-file-refused.png -->

### If you reload or close Keybard

Keybard asks before you close the tab while an update runs. If you reload it:

- **After the half with USB installed**, Keybard finishes the update.
- **After only the other half installed**, Keybard shows **Halves differ**: choose **Finish update**.
- **Before either half installed**, Keybard shows **Update didn't finish**. Nothing was changed. Choose **Try again**.

A closed tab doesn't pick the update back up. Open Keybard and connect again:

- **If neither half had installed**, nothing was changed. Start the update again.
- **If the new firmware installed**, it runs, and Keybard shows **Your layout was reset**: choose **Restore my layout** to restore the backup it saved before the update. The `.svil` file is in Downloads too.
- **If only one half installed**, Keybard shows **Halves differ**: choose **Finish update**.

## Which half is which

From x4, both halves run the same firmware. Each half knows its side: from its thumb PCBA when that is wired for one side, or from the side it saved. It keeps its side through every update. After an install from older firmware, Keybard may ask which half is which: a normal step, answered once.

If a half doesn't know its side, or both halves claim the same side, neither half types. Keybard shows **Set which half is which** on the Firmware card, in the editor, and before an update, and asks **Which half is plugged into your computer?** Choose **Left half** or **Right half**. When Keybard can tell, the likely answer is the main button. Your answer sets the sides, and each half restarts.

<!-- SCREENSHOT: Set which half is which on the Firmware card. Source: Svalboard/review/x4-keybard/15-sides-card-unknown.png -->

After an update, Keybard reads both sides again:

- **The sides are as before**: nothing to do.
- **The firmware picked the sides**, for example on the first update from the per-half firmware: Keybard shows **Check which half is which** once, with each half's side. Choose **That's right**, or **Swap** to swap them.
- **A half came back without a side**: Keybard asks, for example, **Keep the plugged-in half as the right half?** Choose **Yes, the right half** or **No, it's the left half**.

<!-- SCREENSHOT: Check which half is which after an update, with That's right and Swap. Source: Svalboard/review/x4-keybard/19-sides-after-update-confirm.png -->

Keybard never sets a side without your answer.

A thumb PCBA wired for one side makes that half that side. If you answer the other side, Keybard explains which thumb PCBA the half has. If that half really is the other side, it has the wrong thumb PCBA: open a ticket in #customer-service on the [Svalboard Discord](https://www.svalboard.com/discord).

## Confirm on your keyboard

Firmware only changes when someone at the keyboard says so. Keybard shows **Confirm on your keyboard** when the keyboard is waiting for you, once per update.

On the half with USB, press **Index South** and **Middle South** together and hold them for a second. Keybard shows the two keys on a picture of that half, labeled with what they type on your first layer.

| Half with USB | Keys to press | On the default layout |
| --- | --- | --- |
| Right | Index South + Middle South | **M** + **,** |
| Left | Index South + Middle South | **V** + **C** |

The light on that half blinks blue while it waits, and flashes white when it's done. You have 30 seconds, and Keybard counts them down. The two keys don't type while the keyboard waits for them.

<!-- SCREENSHOT: Confirm on your keyboard: the picture of the right half, "press M and , together and hold them for a second", and the countdown. Source: Svalboard/review/x4-keybard/04-update-confirm.png -->

If the keys aren't pressed in time, Keybard shows **The keys weren't pressed in time**. Nothing was changed. Choose **Try again**.

An install by hand needs no key press: pressing **RESET** twice already takes a hand on the keyboard.

## What the lights mean

| Light | What it means |
| --- | --- |
| Blue, blinking | Press the two keys now. |
| White, two flashes | The keyboard saw the key press. |
| Rainbow | Busy: checking, sending and copying the firmware. After an install by hand on both halves, the halves may show it for about half a minute while they check each other. |
| Magenta, steady | Installing. Don't unplug. |
| Red, blinking slowly, on the half with USB | The halves run different releases for a moment. This is expected between the two installs and stops when both halves are done. |

## Your settings reset to the new firmware's defaults

The first start of a new release resets every stored setting on both halves to that release's defaults. The keyboard keeps its identity, its name and each half's side.

This is why Keybard saves your layout before every install. With **Restore my layout**, Keybard restores:

- the keymap on every layer
- macros, combos, tap dances, key overrides, alternate repeat keys and leader sequences
- QMK settings
- layer colors and pointing settings, such as DPI, scrolling and Auto Mouse
- layer, macro and tap dance names
- hardware positions

Combo names and the trackball look in Keybard stay in your browser, so they don't change. A setting the new firmware doesn't support isn't put back, and the last screen lists each one. Every other setting starts from the new firmware's defaults.

Reinstalling the release your keyboard already runs keeps your settings. **Start from the default layout** then resets them on both halves.

Your saved layout stays in **Backups** and in Downloads. To put it back later, see [Backups and files](/keybard/#backups-and-files).

## Unplugging or a power cut is safe

The keyboard never runs half-written firmware. If USB is unplugged or the power cuts during an update, each half comes back one of two ways:

- **On its firmware**: the old release if it hadn't started installing, the new one if it had finished.
- **As a drive named RPI-RP2**, if the cut came while the light was magenta. Keybard shows, for example, **Left half needs its firmware installed by hand**: choose **Download the firmware file** and drag it onto the drive, or **Install by hand** for the steps.

Unplugging the split cable interrupts both halves the same safe way.

Keybard updates the half without USB first. If that half doesn't come back, Keybard stops before the half with USB, so the half you're plugged into keeps working. Your saved layout stays in **Backups** and in Downloads whatever happens.

## When a check finds something

Before **Update**, Keybard checks the file against your keyboard. Checks that pass show nothing. A check that finds something shows as a sentence and what to do about it.

A **warning** is a choice for you to make, and the button reads **Update anyway**. Warnings cover hardware differences, since moving a microcontroller between halves or pointing devices is a valid use:

- **This file has no trackball driver.** Pointing stops working on that half.
- **The left half isn't answering.** Check the split cable, or update the right half on its own: the button reads **Update the right half**.
- **v3 is older than x4.1.** Settings added since v3 won't come back.
- **Keybard can't check where this file came from.** Install it only if you trust where you got it.
- **This Keybard may not be able to edit this firmware.** You can still install it. Reload Keybard afterward to get a newer one.
- **This file has an older updater.** Afterward, Keybard can't update this keyboard, and later firmware installs by hand.
- **This file has a newer updater than this Keybard knows.** Reload Keybard to get a newer one before the next update.
- **Keybard couldn't save your layout.** The keyboard starts from the default layout afterward. Choose **Save it yourself first** to save it as a file.

<!-- SCREENSHOT: a warning, "v3 is older than x4.", with Update anyway. Source: Svalboard/review/x4-keybard/07-update-warning.png -->

A **refusal** stops the install, and nothing changes on the keyboard. Keybard refuses a file that fails its integrity check, and a file a half can't take:

- **This firmware file is damaged.** Download it again, then choose it.
- **The firmware file failed its check.** A file Keybard carries doesn't match its fingerprint. Choose **Reload** and try again.
- **The left half won't accept this file.** The reason follows, such as the file being too large or older than this keyboard allows. Choose another file.

<!-- SCREENSHOT: "The firmware file failed its check." with Reload and Close. Source: Svalboard/review/x4-keybard/08-update-refused.png -->

## If something goes wrong

Each message says what happened to your keyboard and offers the next step.

| Keybard shows | What to do |
| --- | --- |
| **Halves differ** | One half has the new release and the other doesn't yet. Choose **Finish update**. Keybard also shows this when you connect a keyboard whose halves don't match. |
| **Set which half is which** | A half doesn't know its side, so neither half types. Answer which half is plugged into your computer. See [Which half is which](#which-half-is-which). |
| **The keys weren't pressed in time**, **Update stopped** or **Update didn't finish** | Nothing was changed. Choose **Try again**. |
| **Another app is using the keyboard** | Close other Keybard tabs and Keybard Overlay, then choose **Try again**. |
| **Left half needs its firmware installed by hand** | The half opened as the **RPI-RP2** drive. Choose **Download the firmware file** and drag it onto the drive, or **Install by hand** for the steps. |
| **Keybard couldn't confirm the update** | The keyboard didn't say which firmware it runs. Choose **Close**; the Firmware card reads it again. |
| **Keyboard didn't come back** | Choose **Keep waiting**. If a drive named **RPI-RP2** opened, that half needs its firmware installed by hand. |
| **Layout not reset** | The new firmware is installed, but the layout wasn't reset to the default layout. Choose **Try again**. |
| **Layout not fully put back** | Your backup is safe in **Backups** and Downloads. Choose **Try again**, **Open Backups**, or **Keep defaults**. |
| **Your keyboard can't save its layout** | Updates from Keybard are off until this is fixed. Choose **Install by hand**. |
| **This keyboard installs firmware by hand** | The keyboard doesn't have the updater yet. Choose **Install by hand**. |
| **This Keybard can't configure this firmware** | Choose **Reload** to get a newer Keybard. |
| **Linux blocked the keyboard** | Choose **Copy command**, run it, then choose **Reconnect**. See [Linux: the udev rule](/firmware/#linux-the-udev-rule). |

If a half won't start at all, you can always install by hand: press its **RESET** button twice, about a quarter of a second apart, and drag the firmware file onto the **RPI-RP2** drive. See [Recovery](/firmware/#recovery).

Still stuck? Open a ticket in #customer-service on the [Svalboard Discord](https://www.svalboard.com/discord).
