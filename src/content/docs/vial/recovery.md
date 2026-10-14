---
title: Recovery on Vial
description: What to do when a Vial board shows a drive, loses its layout, or won't start.
sidebar:
  order: 7
---

- **A drive named RPI-RP2 appeared**: the half is in bootloader mode. Press RESET once.
- **Layout looks wrong or reset**: load your `.vil` with **File → Load saved layout**.
- **Layout differs depending on which half is plugged in**: load your `.vil` while plugged into the half you use.
- **Board won't start after flashing**: reflash both halves with matching files from the same release (see [Flashing firmware](/firmware/flashing/)).

For hardware problems, see [Troubleshooting](/hardware/troubleshooting/).
