---
title: "Firmware"
description: "Flash, recover and get to know Svalboard QMK firmware."
---

## Flashing firmware

Both firmwares install the same way: copy a `.uf2` file onto the board.

To install Svalboard QMK by hand, from any firmware including Vial, follow [Install firmware by hand](/firmware/update/): one half at a time, each with its own file. After that, Keybard installs updates for you (see [Update your firmware from Keybard](/keybard/update-firmware/)).

**Installing resets your layout and settings to the defaults.** Save your layout first and put it back afterward, as the walkthrough shows.

For Vial firmware, see [Vial firmware](/vial/).

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

From x4.2, a release has these files, each for every pointing module:

| File | What it is |
| --- | --- |
| `svalboard_sval_right_x4.2.uf2` | The firmware for the right half, with the default layout. For installing by hand (see [Install firmware by hand](/firmware/update/)). |
| `svalboard_sval_left_x4.2.uf2` | The same for the left half. |
| `svalboard_sval_x4.2.uf2` | The same firmware for either half. Keybard installs this one. |
| `svalboard_blank_x4.2.uf2` | The firmware with no keys assigned, for testing keys, for either half. |

x4.1 has only the files for either half (`svalboard_sval_x4.1.uf2` and `svalboard_blank_x4.1.uf2`).

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
3. Flash both halves with the latest Svalboard QMK firmware. See [Install firmware by hand](/firmware/update/).
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
