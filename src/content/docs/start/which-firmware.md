---
title: Which firmware
description: Find out whether your board runs Svalboard QMK or Svalboard's legacy Vial firmware, and which part of these docs applies.
sidebar:
  order: 2
---

Svalboard boards run one of two firmwares. Svalboard QMK, configured with Keybard, is the current firmware and the main track of these docs. Svalboard's Vial firmware is legacy.

| | Svalboard QMK (current) | Svalboard's Vial firmware (legacy) |
| --- | --- | --- |
| Firmware | `svalboard/qmk` release vLaunch2 | `svalboard/vial-qmk` release v2025-11-01 |
| File names | `..._sval_vLaunch2.uf2` | `..._vial_v2025-11-01.uf2` |
| Configure with | Keybard: https://keybard.svalboard.com | Vial (https://vial.rocks or the desktop app), or legacy Keybard |
| Layout backup file | `.svil` | `.vil` |

## Check your board

Open https://keybard.svalboard.com in Chrome or Edge and choose **Connect Keyboard**.

- If Keybard shows your layout, you are on Svalboard QMK. See [Keybard](/keybard/) and [What's new compared with Vial](/firmware/#whats-new-compared-with-vial).
- If Keybard shows **Update your Svalboard's firmware** and says the board is running the old Vial firmware, you are on Vial. To update, see [Moving from Vial](/firmware/#moving-from-vial). To stay on Vial, see [Vial firmware (legacy)](/vial/).

## Svalboard QMK and Keybard

Svalboard QMK is the current firmware, `svalboard/qmk`, release **vLaunch2**. You configure it with **Keybard** in your browser. The keyboard stores and runs your setup, so you can close Keybard and keep typing.

Open Keybard at https://keybard.svalboard.com.

Keybard needs **Chrome or Edge** on a desktop. Firefox and Safari can't connect to the keyboard. You can open layout files without a board.

## How these docs are organized

- **Hardware**: the halves, fit, typing, pointing modules and troubleshooting. These apply to every Svalboard.
- **Firmware**: flashing, Svalboard QMK files and recovery, and moving between Vial and Svalboard QMK.
- **Keybard**: the configurator, layer lights, and the Keybard Host overlay.
- **Vial (legacy)**: for boards that stay on Vial.
