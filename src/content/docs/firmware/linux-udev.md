---
title: "Linux: the udev rule"
description: Add the udev rule that lets Keybard and Keybard Host open a Svalboard on Linux.
sidebar:
  order: 6
---

Linux lets only root open the keyboard until you add a udev rule. Without it, Keybard and Keybard Host can see the board but can't open it. Older Svalboard rules matched a Vial serial number that current firmware no longer reports, so many people hit this after a firmware update.

This rule covers every Svalboard QMK firmware file, current and upcoming:

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

## USB IDs

The product ID for each firmware file is in [USB IDs](/reference/usb-ids/).
