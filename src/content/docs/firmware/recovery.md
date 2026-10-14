---
title: Recovery
description: What to do when Svalboard QMK resets its settings, can't save, won't connect to Keybard, or won't start.
sidebar:
  order: 4
---

- **"Your keyboard's settings were reset"**: the board couldn't read its settings and started from defaults. Import your `.svil`, or restore a backup from before the reset in **Settings → Backups**.
- **"Your keyboard can't save changes"**: export your current work, unplug the board, plug it back in, reconnect and make the change again.
- **After any reset**: restart the board before making new edits.
- **Keybard won't connect**: use Chrome or Edge, a USB data cable, and close other configuration apps. On Linux, add the udev rule (see [Linux: the udev rule](/firmware/linux-udev/)).
- **Board won't start or a half is stuck**: reflash both halves with matching vLaunch2 files (see [Flashing firmware](/firmware/flashing/)), then import your `.svil`.

For hardware problems, see [Troubleshooting](/hardware/troubleshooting/).
