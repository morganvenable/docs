---
title: Hardware
description: The two halves, their ports and keys, mounting and tenting, care, opening the case and repairs.
sidebar:
  order: 1
---

## The halves

![Both halves from above, labeled: towers, finger clusters, trackball, thumb cluster, palm rest, carrier and baseplate.](../../../assets/hardware/halves-overview.webp)

![Side view of both halves showing the RESET button, the U port to the computer and the S port to the other half.](../../../assets/hardware/ports-and-reset.webp)

Each half has its own RP2040 microcontroller and its own firmware. You flash each half with the file for its side (left or right). Copying a firmware file does not change which side a half is.

- **U port**: USB to your computer.
- **S port** (or **↔**): the split cable to the other half. You can connect and disconnect the split cable while the board is plugged in.
- **RESET button**: on the bottom of each half. A double press starts bootloader mode (see [Flashing firmware](/firmware/flashing/)).

## Keys

![A finger cluster with its keys labeled: North, South, East, West and Center.](../../../assets/hardware/finger-cluster-keys.webp)

Each finger has a **5-key cluster**: North, South, East, West, and a Center key pressed down. This is the standard cluster.

![A thumb cluster with its keys labeled: Nail, Knuckle, Pad, Up, Down, and the layer LED.](../../../assets/hardware/thumb-cluster-keys.webp)

<!-- VERIFY: this diagram labels the Up key "Up (Mode Key)". Thumb Up layer switching is gone and the Up keys ship blank. Keep this image, or replace it with one labeled just "Up"? -->

Each thumb has six keys: **Pad, Knuckle, Nail, Up, Down and Double Down**. Double Down is a switch under the Down key: press Down all the way through.

That gives **52 keys** in total, each a few millimeters from your fingers.

The only other cluster is the **6-key finger cluster**, which adds a second South key. With 6-key clusters on some or all fingers, a board has 56 to 60 keys. Svalboard sometimes sells boards built this way. The second South key works on all Svalboard firmware. In Keybard, choose the clusters your board has in **Settings → Fragments** (see [Fragments](/keybard/settings/#fragments-your-finger-clusters)).

## Mounting and tenting

Each half has two M5 inserts at the inner edge and a ¼"-20 insert at the center.

- M5: screw in machine screws of any length as tenting legs. Pad the screw heads so they don't scratch your desk.
- ¼"-20: the standard camera thread. Users attach super clamps, arms, quick-release plates and similar mounts.

## Care and cleaning

Factory builds are printed in ABS. Keep them out of hot cars and away from heaters. Self-printed PLA parts can soften in heat or strong sun. ABS dissolves in acetone; don't use it on the board.

- **Keys**: all keys except the finger Center keys lift out. Wash them in cold or room-temperature water with mild soap. Don't use an ultrasonic cleaner; it heats the water and can warp the keys. Handle the flag on each key carefully.
- **Center keys**: "tippy" Center keys curl under the cluster to a magnet at the north end. Rotate the key upward to pull its arm off the magnet and out through the cluster. Older "gap slider" Center keys pop off the back of the cluster; see the [build guide](https://svalboard.com/build). Don't lose the sliders.
- **The board**: use a powered air duster. Unplug the board before cleaning spills. Use a barely damp cloth on bare plastic only. Keep water off the circuit boards. When it is dry, plug it in and test every key in Matrix Tester.

## Opening the case

1. Unplug all USB cables, including magnetic adapters. They block the case.
2. Turn the half upside down. Don't rest it on the thumb keys.
3. Remove the six or seven M3 screws in the bottom plate with the included 2.5 mm hex key, or the T10 driver for Torx screws.
4. Lift off the bottom. You can leave the screws in their holes.

## Self-printing and repairs

- [Build guide](/build/): assembly, print settings, repairs and flashing a new build.
- [Parts repository](https://github.com/svalboard/svalboard-self-print): every plastic part. Customers can request access: send your GitHub username to morgan@svalboard.com.
- Ask the community on the [Discord](https://svalboard.com/discord).
