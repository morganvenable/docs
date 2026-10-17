---
title: "Vial firmware (legacy)"
description: "Svalboard's Vial firmware, for boards that stay on Vial instead of moving to Svalboard QMK."
---

Svalboard's Vial firmware is `svalboard/vial-qmk`, release **v2025-11-01**. No new Vial releases are planned. You configure it with the Vial app, or with legacy Keybard: https://captdeaf.github.io/keybard/

<!-- VERIFY: is https://captdeaf.github.io/keybard/ the legacy Keybard link to give Vial users? -->

Current Keybard doesn't edit Vial boards. When it sees Vial firmware, it shows **Update your Svalboard's firmware**. To move to Svalboard QMK, see [Moving from Vial](/firmware/#moving-from-vial).

## In this section

- [Vial firmware files](/vial/#vial-firmware-files)
- [Flash Vial firmware](/vial/#flash-vial-firmware)
- [The Vial app](/vial/#the-vial-app)
- [Layers, tap dances, combos, overrides and macros](/vial/#layers-tap-dances-combos-overrides-and-macros)
- [Svalboard keys in Vial](/vial/#svalboard-keys-in-vial)
- [Pointing settings in Vial](/vial/#pointing-settings-in-vial)
- [Recovery on Vial](/vial/#recovery-on-vial)

## Vial firmware files

Download from the [v2025-11-01 release](https://github.com/svalboard/vial-qmk/releases/tag/v2025-11-01). Pick one file per half, by the module on that half:

| Module on that half | Left | Right |
| --- | --- | --- |
| None | `svalboard_left_vial_v2025-11-01.uf2` | `svalboard_right_vial_v2025-11-01.uf2` |
| None, blank keymap (for testing) | `svalboard_left_blank_v2025-11-01.uf2` | `svalboard_right_blank_v2025-11-01.uf2` |
| Trackball | `svalboard_trackball_pmw3389_left_vial_v2025-11-01.uf2` | `svalboard_trackball_pmw3389_right_vial_v2025-11-01.uf2` |
| TrackPoint | `svalboard_trackpoint_left_vial_v2025-11-01.uf2` | `svalboard_trackpoint_right_vial_v2025-11-01.uf2` |
| Touchpad | `svalboard_azoteq_left_vial_v2025-11-01.uf2` | `svalboard_azoteq_right_vial_v2025-11-01.uf2` |
| Trackball, early 2024 units only (deprecated) | `svalboard_trackball_pmw3360_left_vial_v2025-11-01.uf2` | `svalboard_trackball_pmw3360_right_vial_v2025-11-01.uf2` |

Early alpha units (before July 2023): contact support@svalboard.com.

## Flash Vial firmware

1. In Vial, save your layout: **File → Save current layout** (`.vil`). Flashing resets the layout to the default.
2. Flash both halves as in [Flashing firmware](/firmware/#flashing-firmware), with the files from [Vial firmware files](/vial/#vial-firmware-files).
3. Open Vial. It connects by itself; it may take a couple of tries.
4. **File → Load saved layout** and choose your `.vil`.

After flashing:

- The mouse-layer timeout resets to its default, 500 ms. See [Pointing settings in Vial](/vial/#pointing-settings-in-vial).
- Vial stores the keymap on each half separately. If you plug the computer into the other half, the layout can look different. Load your `.vil` again.

## The Vial app

- Web: https://vial.rocks (Chrome or Edge).
- Desktop: https://get.vial.today.

Edits are live: change a key and it changes on the keyboard. Useful parts:

- **Matrix Tester** tab: press each key to check it registers.
- **File → Save current layout / Load saved layout**: `.vil` backups.
- Community layouts for Vial: [svalboard-configs](https://github.com/svalboard/svalboard-configs). Load one with **File → Load saved layout**.

## Layers, tap dances, combos, overrides and macros

Vial edits these directly:

- **Layers**: assign layer keys (MO, LT, TG, TT, OSL, TO, DF) like any key. Layer 15 is the mouse layer; keep it last.
- **Tap dances**: up to 50.
- **Combos**: up to 50.
- **Key overrides**: up to 30.
- **Macros**: up to 50.
- **QMK settings**: tapping term and other timing.

Layer light colors are set in the firmware, with the same defaults as Svalboard QMK (see [Layer lights and brightness](/keybard/#layer-lights-and-brightness)): green for layer 0, orange for layer 1, azure for layer 2, magenta for layer 15. Vial can't change them.

## Svalboard keys in Vial

Svalboard's keys are in Vial's **User** tab. Bind them anywhere in your layout.

| Key | What it does |
| --- | --- |
| Left / Right DPI + and − | Pointer speed per side: 200, 400, 800, 1200, 1600, 2400. Doesn't wrap. Saved. Not for the TrackPoint. |
| Sniper 2x / 3x / 5x | Hold for slower pointing. Works on all pointers. Holding two multiplies them. |
| Scroll Left Toggle / Scroll Right Toggle | Switch that side between pointing and scrolling. Saved. |
| Scroll Toggle | Switch both sides until you press it again or restart. |
| Scroll Toggle Hold | Switch both sides while held. |
| AutoMouse Toggle | Turn the automatic mouse layer off or on. Saved. |
| Mouse Key Timer | Cycle the mouse-layer timeout: 200, 300, 400, 500, 800 ms, no timeout. Default 500 ms. Saved. |
| Fix Drift | Recalibrate a TrackPoint. Keep your finger off it. |
| Toggle ACH | Turn Achordion on or off. Saved. |
| Caps Word Toggle | Capitalize one word. `-` becomes `_`. |
| MO 23 45=67 and MO 45 23=67 | Hold to turn on layers 2 and 3, or 4 and 5. Hold both for 6 and 7. |
| Output Status | Types the firmware version, pointer settings, Achordion and timer state. |

Keys marked "Saved" can't go on the mouse layer. This protects the keyboard's settings memory from repeated writes.

### Achordion

**Achordion** stops same-hand rolls from triggering mod-tap modifiers. By default a mod-tap only acts as a modifier with a key on the other hand, unless you hold it about one second.

### Mod-tap with any tap key

If a mod-tap's tap key is Transparent, it sends the key from the next active layer below, even a shifted symbol. Both layers must be active.

More detail: [Svalboard advanced features](https://github.com/svalboard/vial-qmk/blob/vial/keyboards/svalboard/docs/non_standard_firmware_features.md).

## Pointing settings in Vial

- **Timeout**: bind Mouse Key Timer (see [Svalboard keys in Vial](/vial/#svalboard-keys-in-vial)) and press it to cycle.
- **Turn off automouse**: bind AutoMouse Toggle and press it once.
- **Edit the mouse layer**: edit layer 15. On the Vial default mouse layer, Pinky Center is Fix Drift.
- **Speed**: DPI keys per side; Sniper keys while held.
- **Scrolling**: Scroll Left/Right Toggle to set each side; Scroll Toggle or Scroll Toggle Hold to switch for a moment.
- **TrackPoint drift**: Fix Drift. If drift persists, a larger dead zone needs a custom firmware build; ask on the [Discord](https://svalboard.com/discord).

Full reference: [pointing devices guide](https://svalboard.com/scroll). For the modules themselves, see [Pointing modules](/hardware/#pointing-modules).

## Recovery on Vial

- **A drive named RPI-RP2 appeared**: the half is in bootloader mode. Press RESET once.
- **Layout looks wrong or reset**: load your `.vil` with **File → Load saved layout**.
- **Layout differs depending on which half is plugged in**: load your `.vil` while plugged into the half you use.
- **Board won't start after flashing**: reflash both halves with matching files from the same release (see [Flashing firmware](/firmware/#flashing-firmware)).

For hardware problems, see [Troubleshooting](/hardware/#troubleshooting).
