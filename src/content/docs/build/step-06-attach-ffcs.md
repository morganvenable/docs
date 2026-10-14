---
title: "Step 6: Attach FFCs"
description: Connect the flat flexible cables to the PCBAs, and learn the unlatch, insert, latch sequence used for every FFC.
sidebar:
  order: 7
---

## Every FFC connection

Every time you connect an FFC, do it in this order:

1. **Unlatch:** flip the connector's black latch up.
2. **Insert:** slide the FFC fully into the connector, with its contacts facing the way the step says.
3. **Latch:** flip the latch down to lock the FFC.

To remove an FFC, reverse it: unlatch, pull the FFC straight out, then latch the empty connector.

Contacts face **down** at both ends of every FFC, with the blue stiffener up. The one exception is the TrackPoint PCBA end, where the contacts face **up**.

![An MCU's FFC connectors up close. One latch is down (closed) and one is up (open).](../../../assets/build/ffc-latch-up-down.webp)

## Attach FFCs to the PCBAs

- For the thumbs, use only the 10-pin FFC if you have it. The RGB layer lights need it. The 8-pin thumb connector on the MCU is for older builds only.
- Unlatch: flip the black latch up.
- Insert the FFC with the contacts **down** and the blue stiffener up.
- Latch: flip the latch down to lock it.
- On thumb PCBAs, route the cable down through the slot after you close the latch.
- The latch is on the side opposite the cable.
- Exception: on the TrackPoint PCBA the contacts face **up** ([Step 10a](/build/step-10-pointing-devices/#10a-trackpoint)).

![FFCs attached to a trackball PCBA, a thumb PCBA and a finger cluster PCBA. On the thumb PCBA the latch sits on the side opposite the cable.](../../../assets/build/ffc-on-pcbas.webp)

## FFCs on the MCU

You connect the other end of each FFC to the MCU in [Step 12](/build/step-12-install-mcus/). The same rules apply:

- For the thumbs, use only the 10-pin FFC if you have it. The RGB layer lights need it. The 8-pin thumb connector on the MCU is for older builds only.
- At each MCU connector: unlatch, insert the FFC contacts **down**, latch.

![An MCU connected to a finger cluster PCBA by an FFC.](../../../assets/build/ffc-on-mcu.webp)
