---
title: Pointing modules
description: Trackball, TrackPoint and touchpad modules, which half to connect, the mouse layer, scrolling and TrackPoint drift.
sidebar:
  order: 4
---

Each half can have one pointing module:

- **Trackball** (44 mm default, 52 mm option)
- **TrackPoint**
- **Touchpad**

On the current firmware, each half needs the file for its module (see [Firmware files](/firmware/files/)). Flashing the wrong file does no harm; the pointer just won't work until you flash the right one. The bleeding-edge firmware finds the module by itself (see [Bleeding edge (vNext)](/firmware/bleeding-edge/)).

**Which half to connect**: the TrackPoint half must be the half connected to the computer. On the other half it feels laggy. In general the half connected to the computer performs better, so connect the half with your main pointing device.

## The mouse layer (automouse)

Moving a pointer turns on the mouse layer, layer 15. The thumb layer lights glow magenta while it is on. On the default Svalboard QMK mouse layer:

- Left Index Center is left click, Left Middle Center is middle click, Left Ring Center is right click.
- Left Thumb Pad is left click and Left Thumb Nail is right click.
- Left Pinky South is Sniper 3x: hold it for slower, finer movement.

The mouse layer turns off when:

- you press a key that isn't on the mouse layer, or
- the timeout passes with no movement and no mouse-layer key pressed or held. Pressing a mouse-layer key restarts the timer, so double clicks and Ctrl-clicks work.

The timeout defaults to 500 ms. Change it, turn automouse off, or change sensitivity in Keybard (see [Pointing devices](/keybard/pointing/)). On Vial, see [Pointing settings in Vial](/vial/pointing/).

## Scrolling

Each pointer can move the cursor or scroll. A popular setup scrolls with the left hand and points with the right. By default the left pointer scrolls. You can set this per side, and switch for a moment with a hold or toggle key.

## TrackPoint drift

A TrackPoint can drift slightly, most often with large temperature changes. Press **Fix Drift** with your finger off the TrackPoint. In Keybard, Fix Drift is in the **Mouse Keys** panel; add it to a key you can reach.
