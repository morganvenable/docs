---
title: Layer lights and brightness
description: Set the color of each layer's thumb-cluster light and its brightness, and add brightness keys.
sidebar:
  order: 4
---

Thumb clusters shipped after May 2024 have an RGB light that shows the active layer. You set its colors and brightness in Keybard.

<!-- VERIFY: the default colors, the default brightness of 128 and the step of 10 per key match the vLaunch2 firmware source. Is "shipped after May 2024" the right date for the RGB light? -->

## Default colors

| Layer | Color | Default use |
| --- | --- | --- |
| 0 | Green | Base |
| 1 | Orange | NavNAS |
| 2 | Azure | Function |
| 3 | Coral | |
| 4 | Yellow | |
| 5 | Teal | |
| 6, 7 | Red | |
| 8 | Pink | |
| 9 | Purple | |
| 10 | Coral | |
| 11 | Spring green | |
| 12 | Teal | |
| 13 | Turquoise | |
| 14 | Yellow | Board settings |
| 15 | Magenta | Mouse layer |

## Change a layer's color

1. Select the layer's tab.
2. Click the color dot beside the layer name, above the keyboard. Its tooltip says **Layer Color** (or **Default Layer** on the default layer).
3. Pick a color. The board's light changes right away.

<!-- VERIFY: screenshot wanted: the layer name row with the color list open under the color dot, showing the gear button at the bottom of the list. -->

## Change the brightness

1. Click the color dot beside the layer name.
2. Click the gear button at the bottom of the color list (**Custom layer color**). The **Colors for** *layer name* dialog opens.
3. Make sure **LED color** is selected, not **Key color**.
4. Drag the **Brightness** slider (0 to 255). The board's light changes as you drag.
5. Choose **Apply**. **Cancel** puts the light back.

Brightness applies to every layer. The default is 128.

In the same dialog, **Key color** sets the color Keybard uses for that layer's keys on screen, separately from the LED.

<!-- VERIFY: screenshot wanted: the "Colors for <layer>" dialog with LED color selected, showing the Hue, Saturation and Brightness sliders, the note "LED brightness applies to every layer, like the brightness keys." and the Apply button. -->

## Brightness keys

To change brightness from the keyboard, add **Bright +** and **Bright -** to keys on a layer. They are in **Special Keys**, under **Backlight and RGB Keys**. Each press changes brightness by 10. **RGB Toggle** turns the layer lights on and off.

If you printed the thumb cluster in a dark color, turn the brightness up, or print the diffuser in white.
