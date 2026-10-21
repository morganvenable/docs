---
title: Update your firmware from Keybard
description: Install Svalboard firmware updates from Keybard. One manual install, then both halves update over USB with one approval on the keyboard.
---

<!-- VERIFY: no released firmware speaks updater protocol 4 yet (x3.1.3 is protocol 3), and Keybard carries no releases until one does. Name the first release that updates from Keybard once it is tagged. -->

Keybard installs Svalboard firmware for you. Pick a release, approve it once on the keyboard, and Keybard updates both halves through the half plugged into USB. It saves your layout first and puts it back afterward.

## One manual install, then updates come from Keybard

Updates from Keybard need firmware that has the updater built in. A board on older firmware gets it with one manual install, the same way you have always flashed a Svalboard. After that, every update comes from Keybard.

1. Connect your keyboard in Keybard and open **Settings** in the left navigation. Open **Firmware and backups**.
2. Back up your layout: choose **Export layout** and save a `.svil` file. The manual install resets the board's settings.
3. Under **This keyboard**, Keybard shows the firmware the board runs now. The newest release reads **One manual install, then updates come from Keybard**.
4. Choose the button with that release, for example **Install x4**. Keybard opens the steps:
   - **Download firmware**: download the **Left half .uf2** and the **Right half .uf2**.
   - **Install on the left half** and **Install on the right half**: plug USB into that half, double-tap its reset button, and copy that half's file onto the **RPI-RP2** drive.
   - **Connect your keyboard**: plug USB back into your usual half and choose **Connect**.
5. Choose **Import layout** and pick your `.svil`.

<!-- VERIFY: opened from the Firmware card, Install by hand gets no backup (it shows "Connect your keyboard to save its layout first.") and its Layout choice does nothing (FirmwareUpdateProvider passes backup null and a no-op). Until that changes, this page tells customers to export a .svil first and import it after. -->

<!-- SCREENSHOT: the Firmware card on a board without the updater, with "One manual install, then updates come from Keybard" next to the newest release. Source: Svalboard/review/updater-p4/ -->

<!-- SCREENSHOT: the Install by hand dialog with its steps. -->

For the manual steps in detail, see [Flashing firmware](/firmware/#flashing-firmware).

<!-- VERIFY: does the one-time manual install need both halves, or only the half with USB? Keybard's Install by hand covers both halves, and Keybard also accepts an other half on updater protocol 2 or 3. -->

## Find the Firmware card

Open **Settings** in the left navigation, then **Firmware and backups**. A dot on **Settings** means a newer release is ready, and the **Firmware** chip carries the same dot.

The card has three parts:

- **This keyboard**: the release on each half, its pointing device, and a **USB** tag on the half plugged in. The heading changes to **Up to date** when both halves run the newest release, and to **Halves differ** when they don't match.
- **Install**: the releases this Keybard offers, and **Choose a file…**.
- One button that names what it does, such as **Update to x4**, **Reinstall x4** or **Install x4**.

<!-- SCREENSHOT: the Firmware card on an up-to-date board: This keyboard with both halves, the Install list, and the button. -->

If the card says **Newer than this Keybard**, the board runs a newer release than this Keybard knows. Choose **Reload** to load the latest Keybard.

## Pick a release

Each release in the list carries a label:

- **Newest**: the latest release this Keybard offers.
- **Older**: the release before it. Install it to go back.
- **Installed**: the release on your board now.
- **Prerelease**: a release for early testing. Prereleases are offered at [next.keybard.svalboard.com](https://next.keybard.svalboard.com).

[keybard.svalboard.com](https://keybard.svalboard.com) offers the two newest full releases. [next.keybard.svalboard.com](https://next.keybard.svalboard.com) adds the newest prerelease.

Choose **What's new** on a release to read its release notes. The highlights of the selected release are listed below the list.

The firmware files ship inside Keybard and are checked against a fingerprint before they install.

## Install a file you downloaded

To install a `.svup` firmware file, select **Choose a file…** and choose **Install file**. Pick one file for each half you want to update, up to two files. Each release on [GitHub](https://github.com/svalboard/qmk/releases) has a `.svup` file for each half beside its `.uf2`, for example `svalboard_left_sval_x4.svup` and `svalboard_right_sval_x4.svup`.

Keybard reads which half each file is for. A file Keybard doesn't carry shows **Unknown firmware file**: Keybard can't check where it came from. You can still install it.

<!-- VERIFY: example file names use x4 as a placeholder for the first release that updates from Keybard. -->

## Update both halves

Keep USB plugged into one half and the split cable connected. Keybard updates the other half through the split cable, then the half with USB.

1. Choose the button, for example **Update to x4**. Keybard checks your keyboard: **Both halves connected**, **Firmware files verified** and **Layout saved**. Your layout is saved to Downloads and to **Backups**.
2. Under **Layout**, choose what happens after the install:
   - **Keep my layout** (the default): Keybard puts your saved layout back.
   - **Reset to the default layout**: the firmware's own default layout.
   - **Wipe to a blank board**: every key empty on every layer.
3. Choose **Start update**. The sheet reads **About 2 minutes** for both halves.
4. Approve the update on the keyboard when the light on the half with USB blinks blue. See [Approve the update on the keyboard](#approve-the-update-on-the-keyboard).
5. Wait for **Done**. Keep the Keybard tab open until the update finishes.

<!-- SCREENSHOT: the update sheet: title, checks, Layout saved, the Layout choice, and the On the keyboard box with the chord. -->

<!-- SCREENSHOT: the progress view: two rows with a light swatch each, one per half. -->

<!-- SCREENSHOT: the result: Updated to x4, Left half and Right half with their release, Layout put back, What's new, Done. -->

While it runs, each half has a row with its progress: **Approve**, **Sending**, **Copying to left half**, **Installing**, **Restarting**, **Checking both halves** and **Putting your layout back**. The dialog title reads **Installing · don't unplug** while a half installs.

When it finishes, Keybard shows **Updated to** the new release, the release on each half, and what happened to your layout. Choose **What's new in** the release to read its notes, then **Done**.

Keybard asks before you close the tab while an update runs. If you reload the tab mid-update, the update picks up where it was.

### Update one half

To update one half only, open **Advanced** on the Firmware card and choose **Update left half…** or **Update right half…**. Keybard updates one half in **About 1 minute**. Don't type on the half without USB while it copies.

## Approve the update on the keyboard

Every update asks for approval on the keyboard, once. One hold approves both halves.

On the half with USB, hold **Index South** and **Middle South** together when the light blinks blue. Keybard shows the two keys on a picture of that half, labeled with what they type on your first layer.

| Half with USB | Keys to hold | On the default layout |
| --- | --- | --- |
| Right | Index South + Middle South | **M** + **,** |
| Left | Index South + Middle South | **V** + **C** |

Hold them for about a second. The light flashes white twice when the keyboard sees the hold. You have 30 seconds; Keybard counts down. The two keys don't type while the keyboard waits for them.

<!-- SCREENSHOT: the approval step: "Hold M + , on the right half", the chord picture, and the countdown. -->

<!-- VERIFY: Keybard's text says "Hold M + , once"; the firmware docs say hold for 1 s. Confirm "about a second" for customers. -->

If you don't hold the keys in time, Keybard shows **Not approved in time**. Nothing was changed. Choose **Try again**.

## What the lights mean

| Light | What it means |
| --- | --- |
| Blue, blinking | Hold the two keys now. |
| White, two flashes | The keyboard saw your hold. |
| Rainbow | Busy: checking, sending and copying the firmware. |
| Magenta, steady | Installing. Don't unplug. |
| Red, blinking slowly, on the half with USB | The halves run different releases for a moment. This is expected between the two installs and stops when the half with USB is done. |

## Your settings reset to the new firmware's defaults

Each new firmware starts from its own defaults on both halves. The first start of a new release resets every stored setting: the keymap, macros, combos, tap dances, overrides, QMK settings, layer colors, and pointing settings. The board keeps its identity and its name.

This is why Keybard saves your layout before every install. With **Keep my layout**, it puts the layout back after the install. If a part of your layout doesn't fit the new firmware, the result lists what was trimmed, for example the number of combos it kept.

Reinstalling the release your board already runs keeps your settings. **Reset to the default layout** then resets them on both halves.

Your saved layout stays in **Backups** and in Downloads. To put it back later, see [Backups and files](/keybard/#backups-and-files).

<!-- VERIFY: does Keep my layout put back layer colors, pointing settings and QMK settings, or only what a .svil import writes? The firmware resets all of them. -->

## Unplugging or a power cut is safe

The keyboard never runs half-written firmware. If USB is unplugged or the power cuts during an update, each half comes back one of two ways:

- **On its firmware.** Before a half starts installing, it still has its old release. After it installs, it has the new one.
- **As a drive named RPI-RP2.** A cut during the few seconds of the install leaves that half waiting for a manual install. Copy that half's `.uf2` onto the drive, as in [Flashing firmware](/firmware/#flashing-firmware). Keybard offers the file: **Download left half .uf2** or **Download right half .uf2**.

Your saved layout stays in **Backups** and in Downloads whatever happens.

Keybard updates the half without USB first. If that half doesn't come back, Keybard stops before the half with USB, so the half you're plugged into keeps working.

The split cable powers the left half. Pulling it during an update interrupts both halves. Keep it connected.

<!-- VERIFY: "the few seconds of the install": the firmware copy takes 1 to 2 s; the magenta light covers it. Confirm the wording. -->

## Warnings and refusals

Before **Start update**, Keybard checks the files against your keyboard.

A **warning** is a choice for you to make. Keybard explains it, and the button changes to **Update anyway**. Warnings cover hardware differences, since moving a microcontroller between halves or pointing devices is a valid use:

- **File is for the left hand** (or right): the halves stop working together until each half has its own side's file.
- **No trackball driver in this file** (or the module on that half): pointing stops on that half.
- **Left half not answering** (or right): check the split cable. Keybard offers **Update right half only** for the half with USB.
- A file **older than** what's installed: settings added since that release won't come back.
- **Unknown firmware file**: Keybard can't check where it came from.
- **Keybard may not configure this firmware**: you can still install it.
- **Layout not saved**: Keybard switches to **Reset to the default layout**. Choose **Save layout manually** to save it as a file first.

A **refusal** stops the install. Nothing is changed on the keyboard. Keybard refuses a file that fails its integrity check, and a file a half can't take:

- **Firmware file failed its check**: Keybard won't install it. Choose **Reload** and try again.
- **The left half won't accept this file** (or right): the reason follows, such as the file is damaged, too large, or older than this keyboard allows.
- **No file for the right half** (or left): choose a file for that half.

<!-- SCREENSHOT: the sheet with a warning row and the Update anyway button. -->

<!-- SCREENSHOT: the sheet with Firmware file failed its check, and Reload and Close. -->

## If something goes wrong

Each message says what happened to your keyboard and offers the next step.

| Keybard shows | What to do |
| --- | --- |
| **Halves differ** | One half has the new release and the other doesn't yet. Choose **Finish update**. Keybard also shows this when you connect a board whose halves don't match. |
| **Not approved in time**, **Update stopped** or **Update didn't finish** | Nothing was changed. Choose **Try again**. |
| **Another app is using the keyboard** | Close other Keybard tabs and Keybard Overlay, then choose **Try again**. |
| **Left half needs a manual install** (or right) | The half shows as the **RPI-RP2** drive. Choose **Download left half .uf2** and copy it onto the drive, or **Install by hand** for the steps. |
| **Keyboard didn't come back** | Choose **Keep waiting**. If a drive named **RPI-RP2** appeared, that half needs a manual install. |
| **Layout not fully put back** | Your backup is safe in **Backups** and Downloads. Choose **Try again**, **Open Backups**, or **Keep defaults**. |
| **Your keyboard can't save settings** | Updates from Keybard are off until this is fixed. Choose **Install by hand**. |
| **This keyboard installs firmware by hand** | The board doesn't have the updater yet. Choose **Install by hand**. |
| **This Keybard can't configure this firmware** | Choose **Reload** to get a newer Keybard. |
| **Linux blocked the keyboard** | Choose **Copy command**, run it, then choose **Reconnect**. See [Linux: the udev rule](/firmware/#linux-the-udev-rule). |

If a half won't start at all, you can always install by hand: double-tap its reset button and copy its `.uf2` onto the **RPI-RP2** drive. See [Recovery](/firmware/#recovery).

Still stuck? Open a ticket in #customer-service on the [Svalboard Discord](https://www.svalboard.com/discord).
