---
title: Pointing modules
description: Trackball, TrackPoint and touchpad modules, which half to connect, the mouse layer, scrolling and TrackPoint drift.
sidebar:
  order: 4
---

Each half can have one pointing module:

- **Trackball**
- **TrackPoint**
- **Touchpad**

Each half needs the file for its module (see [Firmware files](/firmware/files/)). Flashing the wrong file does no harm; the pointer just won't work until you flash the right one.

One half connects to your computer by USB, and the other connects to it through the split cable. Pointing is smoothest on the USB half, so plug in the half with your main pointing device. A TrackPoint always goes on the USB half.

## The mouse layer (automouse)

Moving a pointer turns on the mouse layer, and the thumb layer lights glow magenta while it's on. The default mouse layer puts the mouse buttons and Sniper under your left hand: hold Sniper for slower, finer pointer movement.

![The default mouse layer in Keybard. Left click is on the left index center key and the left thumb pad, right click on the left ring center and the left thumb nail, middle click on the left middle center, and Sniper on the left pinky's south key. Every other key shows the transparent marker.](../../../assets/hardware/layer-15-mouse.webp)

Every key marked ▽ is transparent: it isn't on the mouse layer. Pressing one turns the mouse layer off and types that key's normal character, so you can go straight back to typing. The mouse layer also turns off on its own once the pointer has been still for the timeout with no mouse-layer key held. Each click restarts the timer, so double clicks and Ctrl-clicks work.

The timeout defaults to 500 ms. Change it, turn automouse off, or change sensitivity in Keybard (see [Pointing devices](/keybard/pointing/)). On Vial, see [Pointing settings in Vial](/vial/pointing/).

## Scrolling

Each pointer can move the cursor or scroll. A popular setup scrolls with the left hand and points with the right. By default the left pointer scrolls. You can set this per side, and switch for a moment with a hold or toggle key.

## TrackPoint drift

A TrackPoint can drift slightly, most often with large temperature changes. Press **Fix Drift** with your finger off the TrackPoint. In Keybard, Fix Drift is in the **Mouse Keys** panel; add it to a key you can reach.
