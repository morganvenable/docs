---
title: "Firmware"
description: "Flash, recover and get to know Svalboard QMK firmware."
---

## Flashing firmware

Both firmwares install the same way: copy a `.uf2` file onto the board.

From x4.1, one firmware file is for both halves: copy the same file onto each half. After that first install by hand, Keybard installs updates for you. For the steps from Vial, vLaunch2, x3 or x4, see [Update to x4.1](/firmware/update/).

**Flashing resets your layout and settings to the firmware's default layout.** Back up first and restore afterward.

1. **Back up your layout.** In Keybard, choose **Export Layout** and save a `.svil` file. On Vial, save a `.vil`.
2. Download the firmware. From x4.1, it is one file for both halves, for every pointing module. For older releases, download the file for **each half**: the side (left or right) and the pointing module on that half (see [Firmware files](/firmware/#firmware-files), or [Vial firmware files](/vial/#vial-firmware-files) for Vial).
3. Plug **one half** into your computer by its **U** port.
4. Press its **RESET** button twice, about a quarter of a second apart. Too fast and nothing happens. A drive named **RPI-RP2** opens.
5. Copy that half's `.uf2` onto the drive. The half restarts by itself and the drive closes. This is normal.
6. Move the USB cable to the other half and repeat with its file. From x4.1, it is the same file.
7. Plug in normally. In Keybard, choose **Import Layout** and pick your `.svil`.

Both halves must run the same release. Don't press keys, especially thumb keys, while the board starts.

From x4.1, after both halves are done, wait about half a minute for the lights to settle. If Keybard then asks which half is which, choose **Left half** or **Right half** (see [Which half is which](/keybard/update-firmware/#which-half-is-which)).

New microcontrollers, in a kit or as spares, ship with no firmware and are not set to a side. Flash each one with the file for the half it goes in. With x4.1, flash the same file on both; Keybard may then ask which half is which.

## What's new compared with Vial

Svalboard QMK is the current firmware, `svalboard/qmk`. Get the [latest release](https://github.com/svalboard/qmk/releases), and configure it with [Keybard](/keybard/) in Chrome or Edge.

Already in Svalboard's Vial firmware, now edited in Keybard:

- tap dances, combos, key overrides, alternate-repeat keys, macros and QMK settings
- DPI, scrolling and Sniper keys
- automouse toggle and timeout
- TrackPoint recalibration

New in Svalboard QMK:

- **256 entries** each for tap dances, combos, key overrides, macros, alternate-repeat keys and leader sequences.
- **Leader sequences**: a Leader key, then up to five keys, triggers an action.
- **Layer colors and LED brightness set from Keybard** (see [Layer lights and brightness](/keybard/#layer-lights-and-brightness)).
- **Board identity**: each board keeps its identity and can have a name.
- **Sniper toggle**: slow movement without holding a key.
- **Boost**: 2x, 3x or 5x faster movement, held or toggled.
- **Per-pointer automouse**, with an activation threshold and decay.
- **Natural scrolling**.
- **Idle power** settings.
- **Protocol additions**: host apps can read and control layer state.

Settings are stored in two checked copies, so a bad read doesn't wipe your layout.

Changed: **Chordal Hold** replaces Achordion and is on by default. It is similar but not identical; check your mod-taps after moving.

Keybard also adds automatic backups, layer reordering, a saved default layer, a layouts library, printable layers and the Keybard Overlay app.

To move your board over, see [Moving from Vial](/firmware/#moving-from-vial).

## Firmware files

Download from the [Svalboard QMK releases](https://github.com/svalboard/qmk/releases).

From x4.1, a release has two files, each for both halves and every pointing module:

| File | What it is |
| --- | --- |
| `svalboard_sval_x4.1.uf2` | The firmware, with the default layout. Copy it onto both halves. |
| `svalboard_blank_x4.1.uf2` | The same with no keys assigned, for testing keys. |

Releases before x4 have one file per half. Pick one file per half, by the module on that half. The names below are from vLaunch2; each release puts its own tag at the end.

| Module on that half | Left | Right |
| --- | --- | --- |
| None | `svalboard_left_sval_vLaunch2.uf2` | `svalboard_right_sval_vLaunch2.uf2` |
| None, blank keymap | `svalboard_left_blank_vLaunch2.uf2` | `svalboard_right_blank_vLaunch2.uf2` |
| Trackball | `svalboard_trackball_pmw3389_left_sval_vLaunch2.uf2` | `svalboard_trackball_pmw3389_right_sval_vLaunch2.uf2` |
| TrackPoint | `svalboard_trackpoint_left_sval_vLaunch2.uf2` | `svalboard_trackpoint_right_sval_vLaunch2.uf2` |
| Touchpad | `svalboard_azoteq_left_sval_vLaunch2.uf2` | `svalboard_azoteq_right_sval_vLaunch2.uf2` |
| Trackball, early 2024 units only (deprecated) | `svalboard_trackball_pmw3360_left_sval_vLaunch2.uf2` | `svalboard_trackball_pmw3360_right_sval_vLaunch2.uf2` |

The `blank` files have no keys assigned. Builders use them to test keys without typing anything.

Flash as in [Flashing firmware](/firmware/#flashing-firmware). Flashing resets your layout to the default, so export a `.svil` first and import it afterward.

## Recovery

- **"Your keyboard's settings were reset"**: the board couldn't read its settings and started from defaults. Import your `.svil`, or restore a backup from before the reset in **Settings → Backups**.
- **"Your keyboard can't save changes"**: export your current work, unplug the board, plug it back in, reconnect and make the change again.
- **After any reset**: restart the board before making new edits.
- **Keybard won't connect**: use Chrome or Edge, a USB data cable, and close other configuration apps. On Linux, add the udev rule (see [Linux: the udev rule](/firmware/#linux-the-udev-rule)).
- **Board won't start or a half is stuck**: reflash both halves with files from the same release (see [Flashing firmware](/firmware/#flashing-firmware)), then import your `.svil`.

For hardware problems, see [Troubleshooting](/hardware/#troubleshooting).

## Known limitations

- Alternate-repeat keys: modifier matching and "default to alternate" have known defects. Test custom mappings.
- Release a tap-dance key before changing its action.
- Auto Shift isn't in the standard firmware.
- Automatic backups live in one browser. Keep an exported `.svil` too.

## Linux: the udev rule

Linux lets only root open the keyboard until you add a udev rule. Without it, Keybard and Keybard Overlay can see the board but can't open it. Older Svalboard rules matched a Vial serial number that current firmware no longer reports, so many people hit this after a firmware update.

This rule covers every Svalboard QMK firmware file:

```
KERNEL=="hidraw*", SUBSYSTEM=="hidraw", ATTRS{idVendor}=="303a", ATTRS{idProduct}=="404[4-9a-d]", MODE="0660", TAG+="uaccess"
```

To install it, run these commands in a terminal:

```sh
sudo tee /etc/udev/rules.d/60-svalboard.rules > /dev/null <<'EOF'
KERNEL=="hidraw*", SUBSYSTEM=="hidraw", ATTRS{idVendor}=="303a", ATTRS{idProduct}=="404[4-9a-d]", MODE="0660", TAG+="uaccess"
EOF
sudo udevadm control --reload
sudo udevadm trigger --subsystem-match=hidraw
```

Then unplug the board, plug it back in, and connect again. If you have an old Svalboard rule in another file under `/etc/udev/rules.d/`, delete it.

When Keybard hits this problem, it shows these same commands, with the rule above, ready to copy. If you installed an older Keybard command that names a single product ID, replace it with this rule.

### USB IDs

The product ID for each firmware file is in [USB IDs](/reference/usb-ids/).

## Moving from Vial

The firmware does **not** bring your Vial settings across. Flashing resets the board to the default layout. Keybard can import your Vial `.vil` to restore it.

1. In Vial, save your layout as a `.vil`. Keep it unchanged.
2. Write down anything you rely on that a `.vil` doesn't hold: DPI, scrolling, automouse and layer colors (see [What a .vil doesn't hold](/firmware/#what-a-vil-doesnt-hold)).
3. Flash both halves with the latest Svalboard QMK firmware. For x4.1, see [From Vial](/firmware/update/#from-vial).
4. Open https://keybard.svalboard.com in Chrome or Edge (for x4.1, https://next.keybard.svalboard.com) and choose **Connect Keyboard**. If Keybard asks which half is which, choose **Left half** or **Right half**.
5. Choose **Import Layout** and pick your `.vil`. Read the review, then apply it. This restores your layout, macros, tap dances, combos, key overrides and QMK settings.
6. Set DPI, scrolling, automouse and layer colors again in Keybard.
7. Check every layer, your macros, your modifier swaps and your mod-tap feel (Chordal Hold replaces Achordion).
8. Export a `.svil` backup once it all works.

The first start after flashing takes a few seconds longer while the board sets up its settings storage.

If you'd rather start fresh, skip the import and use Keybard's **Layouts** panel for letter and NavNAS layers (see [Start from a layout Svalboard provides](/keybard/#start-from-a-layout-svalboard-provides)).

<!-- VERIFY: the repo rules say not to promote .vil import, but this owner-approved migration path imports the Vial .vil (step 5). Keep it as the main path, or lead with the Layouts panel? -->

## Going back to Vial

1. In Keybard, export your setup twice with **Export Layout**: once as **Svalboard (.svil) - Native Format**, and once as **Vial (.vil) - Legacy Compatibility** for Vial.
   <!-- VERIFY: does Vial v2025-11-01 load a Keybard .vil without errors? -->
2. Flash both halves with the Vial v2025-11-01 files (see [Vial firmware files](/vial/#vial-firmware-files) and [Flashing firmware](/firmware/#flashing-firmware)). This resets the board to Vial's default layout.
3. Open Vial and load your `.vil`.

Settings that only exist in Svalboard QMK (leaders, Boost, entries above Vial's limits) don't carry back. See also [What a .vil doesn't hold](/firmware/#what-a-vil-doesnt-hold).

## What a .vil doesn't hold

A `.vil` file doesn't hold DPI, scrolling, automouse, layer colors, names or cluster selections. Set those again after moving in either direction.

See [Moving from Vial](/firmware/#moving-from-vial) and [Going back to Vial](/firmware/#going-back-to-vial).
