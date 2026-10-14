---
title: "Step 6: Attach FFCs"
description: Connect the flat flexible cables to the PCBAs, and learn the unlatch, insert, latch sequence used for every FFC.
sidebar:
  order: 7
---

Every FFC connector has a small black latch. Flip the latch up, slide the cable all the way in, then flip the latch down to lock it. To remove a cable, flip the latch up and pull the cable straight out.

<!-- VIDEO: a short clip of unlatch, insert, latch on one connector (shot list: ffc-latch-video). -->

![An MCU's FFC connectors up close. One latch is down (closed) and one is up (open).](../../../assets/build/ffc-latch-up-down.webp)

## Attach FFCs to the PCBAs

At both ends of every FFC, the contacts face down and the blue stiffener faces up. The one exception is the TrackPoint PCBA, where the contacts face up ([Step 10a](/build/step-10-pointing-devices/#10a-trackpoint)).

For the thumbs, use the 10-pin FFC if you have it; the RGB layer lights need it. On a thumb PCBA the latch sits on the side opposite the cable, so route the cable down through the slot after you close the latch.

![FFCs attached to a TrackPoint PCBA, a thumb PCBA and a finger cluster PCBA. On the thumb PCBA the latch sits on the side opposite the cable.](../../../assets/build/ffc-on-pcbas.webp)

## FFCs on the MCU

You connect the other end of each FFC to the MCU in [Step 12](/build/step-12-install-mcus/), the same way. The MCU's 8-pin thumb connector is for older builds; use the 10-pin one.

![An MCU connected to a finger cluster PCBA by an FFC.](../../../assets/build/ffc-on-mcu.webp)
