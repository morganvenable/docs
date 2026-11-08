---
title: Touchpad
description: Choose how your Svalboard touchpads work, watch each touch live, and tune taps, scrolling and palm rejection in Keybard.
---

Your touchpads work as a Windows or Linux touchpad out of the box, and use their own built-in gestures on a Mac. Keybard shows every touch live, so you can see why a touch clicked or didn't and set the pads to suit your hands.

:::note[Which release you need]
The **Touchpad tuning** dialog, dead zone, tap time, hold time, scroll start and the tap switches are in v4.3.4. Every finger in the live view, the two-finger guides, palm rejection and **Touchpad mode** need firmware and Keybard v4.3.5 or later. Use the two from the same release.
:::

## Open the Touchpad tuning dialog

Connect your board, then open the dialog either way:

- **Settings** → **Touchpad tuning** → **Tune touchpad…**
- **Pointing Devices** → **Touchpad** → **Tune touchpad…**

Both open the same dialog. It appears only for a board with a touchpad.

![Settings with the Touchpad chip selected and the Touchpad tuning card open: "See each touch on the pads live, and set when a touch clicks", and the Tune touchpad… button.](../../../assets/keybard/touchpad-settings-entry.webp)

**Changes apply at once.** Every control in the dialog writes to the board as you change it, in **Live Updating** and **Manual Updates** alike. There is no **Apply** step, and **Discard** doesn't undo them. If the board doesn't take a change, the dialog says so and shows the value the board has.

## What the live view shows

Touch a pad and the dialog draws it as it happens:

- **Both pads at true size**, left and right, each next to a close-up of where your touch began.
- **Each finger at its real contact size.** A light touch draws small, a flat finger large. Fingers are numbered, and a finger keeps its number until it lifts.
- **Palms** with palm rejection on: a dashed outline labeled **palm**.
- **The touch list** under each pad: every finished touch, newest first, with what it did and why. For example: **Tap: 89 ms, moved 0.64 mm**, **Two-finger tap ✓ right click, 120 ms**, or **Canceled: moved 19.21 mm, out of the dead zone**. The list keeps the last 50 touches.

What else the view shows depends on the touchpad mode the pads are in.

![The Touchpad tuning dialog with built-in gestures: Dead zone 1.2 mm, Tap time 150 ms, Hold time 300 ms, Scroll start 1.05 mm and Palm rejection Off across the top. The left pad has two numbered fingers joined by a line, with the scroll-start ring in its close-up. The right pad has one finger, with the dead zone and the tap and hold timer ring. Each pad's touch list is below.](../../../assets/keybard/touchpad-tuning-gestures.webp)

### One finger

With built-in gestures, the close-up shows:

- **The dead zone**: a circle around where your finger landed. A tap or a press and hold counts only while the finger stays inside it.
- **A timer ring**: green while a lift still counts as a tap, then blue until press and hold starts.
- **A mark** when a tap or a press and hold happens, or when the finger leaves the dead zone in time to cancel them.

### Two fingers

With built-in gestures, two fingers on one pad show:

- a line between them;
- **the scroll-start ring**, centered where the two fingers began, and an inner ring that grows as they move. When the inner ring reaches the outer one, the pad starts to scroll;
- the time window for a **two-finger tap**. Both fingers must stay inside the dead zone and lift within the tap time to right click. The window fades once it has passed.

A third finger shows as a numbered finger with no guides. Three fingers don't tap or scroll with built-in gestures.

## Choose the touchpad mode

**Touchpad mode** sits at the top of the dialog, and first in the **Touchpad** section of **Pointing Devices**. It has two choices.

| Mode | What you get |
| --- | --- |
| **Automatic** (the default) | Windows and Linux use their native Precision Touchpad Protocol by default. A Mac is limited to the built-in gestures from Azoteq. A BIOS or boot menu uses the built-in gestures too. |
| **Built-in gestures** | The pads use their built-in gestures on every computer: tap to click, two-finger tap to right click, two-finger scroll, and press and hold to drag, tuned in this dialog. |

Automatic is what we ship and recommend. Choose **Built-in gestures** if you want the pads to work the same on every computer, set up in Keybard.

### Switch to built-in gestures

1. Open the dialog and choose **Built-in gestures**. Or choose it in **Touchpad Mode** in **Pointing Devices**.
2. Keybard asks **Use built-in gestures?** and says what changes.
3. Choose **Use built-in gestures**. **Cancel**, the default, changes nothing.

![The Use built-in gestures? confirmation. Your computer's touchpad features won't apply on Windows and Linux: three- and four-finger swipes, pinch to zoom, and the system's tap, scroll and palm settings. Taps, two-finger scroll, right click and press and hold come from the touchpad itself, set here. Macs work the same either way. We recommend Automatic. Cancel and Use built-in gestures buttons.](../../../assets/keybard/touchpad-builtin-confirm.webp)

On Windows and Linux, your computer's touchpad features won't apply. That means three- and four-finger swipes, pinch to zoom, and the system's tap, scroll and palm settings. Your computer still lists the touchpad.

Taps, two-finger scroll, right click and press and hold to drag come from the pads themselves. Set them with the dead zone, tap time, hold time and scroll start in this dialog, and the switches in **Pointing Devices**.

Macs and BIOS screens work the same either way.

### Switch back to Automatic

Open **Settings** → **Touchpad tuning** → **Tune touchpad…** and choose **Automatic**. Or choose it in **Touchpad Mode** in **Pointing Devices**. It takes effect at once, with no confirmation, and Windows or Linux uses its own touchpad features again.

### Which settings show in each mode

Keybard shows only the settings that do something in the mode the pads are in right now.

| | Touchpad mode (Windows and Linux, with Automatic) | Built-in gestures |
| --- | --- | --- |
| **Touchpad mode** | Yes | Yes |
| **Palm rejection** | Yes | Yes |
| Live view | Fingers and palms only | Fingers, palms and every guide |
| **Dead zone**, **Tap time**, **Hold time**, **Scroll start** | No | Yes |
| **Pointing Devices**: **Tap to Click**, **Two-Finger Tap to Right Click**, **Press and Hold to Drag**, **Hold Time (ms)** | No | Yes |

In touchpad mode, your computer decides taps and scrolling, so the dialog points you to the system touchpad settings. On Windows that is **Settings > Bluetooth & devices > Touchpad**. The touch list then names each touch by its fingers and length, for example **Two fingers, 452 ms**, or marks it as a palm.

![The Touchpad tuning dialog in touchpad mode: Automatic selected, a line pointing to Settings > Bluetooth & devices > Touchpad, Palm rejection, and both pads showing fingers only, labeled "Touchpad mode: contacts only".](../../../assets/keybard/touchpad-tuning-touchpad-mode.webp)

With **Automatic** on a Mac, the pads use built-in gestures, so every setting shows.

### Saved on the board, not in your layout

The touchpad mode is a setting of the board itself:

- Importing or sharing a layout file never changes it. A layout someone shares with you keeps your own touchpad mode.
- Installing a different firmware release [resets every stored setting](/keybard/update-firmware/#your-settings-reset-to-the-new-firmwares-defaults), the touchpad mode included. When Keybard restores your layout after the update, it brings your touchpad mode back too.
- A settings reset returns it to **Automatic**.

One board used with a Mac and a PC: leave it on **Automatic**. It is a full touchpad on the PC and uses built-in gestures on the Mac.

<!-- Source for the update reset: svalboard/qmk build_reset.c:132-154 (a5275f7) resets every stored setting on the first boot of a different image, release builds can't skip it (build_reset.c:107-110), and svalboard.c:422-431 (8ea8785) sets the touchpad mode to Automatic on that reset. -->

## Using a KVM switch

A KVM switch that switches the USB connection itself works with your Svalboard. Each time you switch, the keyboard restarts in about two seconds and adapts to the computer it's now on. The touchpad works as a Precision Touchpad on Windows and uses its built-in gestures on a Mac, and Mac scrolling is set for you.

Some KVMs keep your keyboard connected to the KVM and show each computer its own generic keyboard and mouse. This is often called USB emulation, or EDID or HID emulation. The Svalboard can't tell which computer it's on, and Precision Touchpad gestures don't pass through, so the touchpad works as a basic mouse at best. Choose a KVM that switches USB directly, or plug the Svalboard straight into your computer.

## Palm rejection

Palm rejection ignores a contact larger than a fingertip, such as the heel of your hand resting on a pad. It is off by default.

- **In touchpad mode**, your computer is told the palm isn't a finger and ignores it. Other fingers on the pad keep working.
- **With built-in gestures**, while a palm is on a pad, that pad stops moving the pointer, stops scrolling and doesn't click, until every finger on it lifts. A drag you started before the palm landed keeps going.

**Palm rejection** is **Off**, or a contact size from 4 to 40 of the pad's channels. A lower number treats smaller contacts as palms.

To tune it:

1. Open the dialog and set **Palm rejection** to a value, for example 10.
2. Rest your palm on a pad as you do while typing. It should be drawn with a dashed outline labeled **palm**, and listed as a palm when you lift.
3. Touch the pad the ways you normally point: a fingertip, and a flatter finger. None of these should be marked as a palm.
4. If a finger is marked as a palm, choose a higher number. If your palm isn't marked, choose a lower one.

Each change applies at once, so you can keep your hand on the pad while you adjust it.

## Defaults and ranges

| Setting | Default | Range | Mode |
| --- | --- | --- | --- |
| **Touchpad mode** | **Automatic** | **Automatic** or **Built-in gestures** | Both |
| **Dead zone** | 1.2 mm | 0.2 to 4 mm | Built-in gestures |
| **Tap time** | 150 ms | 50 to 1000 ms | Built-in gestures |
| **Hold time** | 300 ms | 20 to 1500 ms | Built-in gestures |
| **Scroll start** | 1.05 mm | 0.3 to 10 mm | Built-in gestures |
| **Palm rejection** | **Off** | 4 to 40 channels | Both |
| **Tap to Click** | On | On or off | Built-in gestures |
| **Two-Finger Tap to Right Click** | On | On or off | Built-in gestures |
| **Press and Hold to Drag** | On | On or off | Built-in gestures |

- **Dead zone**: how far a finger can move before a tap or a hold is canceled.
- **Tap time**: a tap must lift within this.
- **Hold time**: press and hold starts after the tap time plus the hold time, 450 ms at the defaults. It is grayed out while **Press and Hold to Drag** is off.
- **Scroll start**: how far two fingers move, on average, before they scroll.

The switches and **Hold Time (ms)** are in the **Touchpad** section of **Pointing Devices**, with **Touchpad Mode** above them.

![The Touchpad section of Pointing Devices with built-in gestures: Touchpad Mode set to Automatic, Tap to Click, Two-Finger Tap to Right Click and Press and Hold to Drag all on, Hold Time 300 ms, and the Tune touchpad… link.](../../../assets/keybard/touchpad-pointing-section.webp)
