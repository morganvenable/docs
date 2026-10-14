---
title: Svalboard keys in Vial
description: The Svalboard-specific keys in Vial's User tab, plus Achordion and mod-tap with any tap key.
sidebar:
  order: 5
---

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

## Achordion

**Achordion** stops same-hand rolls from triggering mod-tap modifiers. By default a mod-tap only acts as a modifier with a key on the other hand, unless you hold it about one second.

## Mod-tap with any tap key

If a mod-tap's tap key is Transparent, it sends the key from the next active layer below, even a shifted symbol. Both layers must be active.

More detail: [Svalboard advanced features](https://github.com/svalboard/vial-qmk/blob/vial/keyboards/svalboard/docs/non_standard_firmware_features.md).
