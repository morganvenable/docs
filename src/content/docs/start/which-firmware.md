---
title: Which firmware
description: Find out whether your board runs Svalboard QMK or Svalboard's Vial firmware, and which part of these docs applies.
sidebar:
  order: 3
---

Svalboard boards run one of two firmwares. Svalboard QMK, configured with Keybard, is the current firmware and the main track of these docs.

| | Svalboard QMK (current) | Svalboard's Vial firmware |
| --- | --- | --- |
| Firmware | `svalboard/qmk`, latest release | `svalboard/vial-qmk` release v2025-11-01 |
| File names | `svalboard_sval_<release>.uf2` for both halves (x4.1 on), `..._sval_<release>.uf2` per half before | `..._vial_v2025-11-01.uf2` |
| Configure with | Keybard: https://keybard.svalboard.com | Vial (https://vial.rocks or the desktop app), or the Keybard for Vial boards |
| Layout backup file | `.svil` | `.vil` |

## Check your board

Open https://keybard.svalboard.com in Chrome or Edge and choose **Connect Keyboard**.

- If Keybard shows your layout, you are on Svalboard QMK. See [Keybard](/keybard/) and [What's new compared with Vial](/firmware/#whats-new-compared-with-vial). **Settings → Firmware and backups** shows which release it runs. To update, see [Update your firmware from Keybard](/keybard/update-firmware/).
- If Keybard shows **Update your Svalboard's firmware** and says the board is running Vial firmware, you are on Vial. To update, see [Install firmware by hand](/firmware/update/) and [Moving from Vial](/firmware/#moving-from-vial). To stay on Vial, see [Vial firmware](/vial/).

## Svalboard QMK and Keybard

Svalboard QMK is the current firmware, `svalboard/qmk`. Get the [latest release](https://github.com/svalboard/qmk/releases), and configure it with **Keybard** in your browser. The keyboard stores and runs your setup, so you can close Keybard and keep typing.

Open Keybard at https://keybard.svalboard.com.

Keybard needs **Chrome or Edge** on a desktop. Firefox and Safari can't connect to the keyboard. You can open layout files without a board.

## How these docs are organized

- **Hardware**: the halves, fit, typing, pointing modules and troubleshooting. These apply to every Svalboard.
- **Firmware**: flashing, Svalboard QMK files and recovery, and moving between Vial and Svalboard QMK.
- **Keybard**: the configurator, layer lights, and the Keybard Overlay app.
- **Vial**: for boards that stay on Vial.
