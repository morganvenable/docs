---
title: "Step 7: Install PCBAs and test"
description: Screw the PCBAs into the clusters, insert the square nuts, and test each cluster before final assembly.
sidebar:
  order: 8
---

## Install the PCBAs

- Line each PCBA up squarely with the cluster before you press it in. Installing it at an angle can damage the optical sensors.
- **Finger clusters:** use just the two screws shown. If one strips, use one of the other two holes.
- Make sure the bottom-left corner of the PCBA is fully seated in the cluster. If it isn't, the East or South key may not register.
- **Thumb clusters:** use 3 to 5 screws, as you prefer.
- You don't need to remove the finger center key to replace a PCBA.

Use the M2 thread-cutting screws.

![Thumb and finger cluster PCBAs screwed into their clusters. A red line marks one more thumb screw hidden under a key. Inset: a finger cluster PCBA with its two screws.](../../../assets/build/pcbas-in-clusters.webp)

## Insert the square nuts

A square nut goes in the back underside of each cluster. It's the fixing point for the tower.

1. Place the cluster top side down.
2. Line up the nut with small pliers or tweezers.
3. Press it **straight** down into the slot.

![A finger cluster from below with the square nut in its slot, and from the side.](../../../assets/build/square-nuts-in-clusters.webp)

## Test the clusters (recommended)

Test each cluster before final assembly. A bad PCBA is much easier to swap now.

1. Connect the cluster FFCs to the MCU: unlatch, insert contacts down, latch.
2. Flash the MCU with the **blank** firmware file for its side: `svalboard_left_blank_vLaunch2.uf2` or `svalboard_right_blank_vLaunch2.uf2`. The blank layout has no keys assigned, so pressing keys doesn't type into your computer. For how to flash, see [Step 15](/build/step-15-flash-and-connect/) and [Flashing firmware](/firmware/flashing/).
3. Open [Keybard](/keybard/) (https://keybard.svalboard.com), choose **Connect Keyboard**, then **Matrix Tester**.
4. Press every key on the cluster. Check that each one lights up in the Matrix Tester.
5. When you're done, disconnect the FFCs: unlatch, pull the FFC out, latch.

Flash the normal `sval` firmware in [Step 15](/build/step-15-flash-and-connect/).

:::note[vNext1 prerelease]
vNext1 has no `blank` files. Use the vLaunch2 blank files for this test, even if you plan to run vNext1.
:::

<!-- VERIFY: is it right that this test keeps using the vLaunch2 blank files, or will vNext ship a blank file? -->
