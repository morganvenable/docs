---
title: Build guide
description: Build a Svalboard from a self-print kit, from printing the parts to the first fit.
sidebar:
  order: 0
---

This guide covers building a Svalboard from a self-print kit. It also helps with repairs and part swaps on a finished board.

Help us improve it: send comments on the [Svalboard Discord](https://www.svalboard.com/discord).

- Before you print, pick your key size. See [Sizing before you build](/build/fitment/).
- To configure your Svalboard after the build, use [Keybard](/keybard/) in Chrome or Edge: https://keybard.svalboard.com

## Video build guide

[@beepbuildsathing](https://youtube.com/@beepbuildsathing) made a video build guide to go with this one: [watch it on YouTube](https://youtu.be/fa_BZ1AKQVk).

Some of the video is out of date, and it doesn't cover steps added since it was made. Where the video and this guide differ, follow this guide.

## What's in the kit

This is the standard packing list for Lightly FDM V2.0. It can vary a little between kit versions. We pack by weight and include a spare or two of most hardware. You can buy more of the small hardware on Amazon or AliExpress.

| Part | Minimum count |
|---|---|
| N35 magnets | about 200 (100, plus 100 spare) |
| M3x4 heat set inserts | 14 (12, plus 2 spare) |
| M5x5.7 heat set inserts | 4 |
| 1/4-20 heat set inserts | 2 |
| Cluster PCBAs | 10 (2 spare) |
| Thumb PCBAs | 2 |
| Main PCBAs (MCUs) | 2 |
| 150 mm FFCs (flat flexible cables) | 12 (10, plus 2 spare) |
| M2 thread-cutting screws, for PCBAs and palm rest set screws | 46 (44, plus 2 spare) |
| M3 6 mm screws, for cases and clusters | 40 (32, plus 8 spare) |
| M3 square nuts | 32 (24, plus 8 spare) |
| M3 6 mm thread-cutting screws, for the main PCB | 9 (8, plus 1 spare) |
| Stainless steel towers for clusters | set of 10 |
| Rubber feet (FC-036-DCW-PT) | 9 (4 per side) |
| T10 Torx driver | 1 |
| T6 Torx bit | 1 |
| USB-C to USB-C cables | 2 |
| TrackPoint PCBA | optional |
| Trackball PCBA | optional |

<!-- VERIFY: the kit list says 14 M3x4 inserts (12 plus 2 spare), but Step 8 installs 7 in each base plate, which is 14 with no spare. Which count is right? -->

The kit has twice the magnets you need, so you can build simple magnet fixtures. They make assembly much more reliable and tidy (Step 2).

<!-- VERIFY: the packing list on the live guide (slide 4) has no touchpad row, but the store sells a "+2x Touchpad PCBAs" option. Add "Touchpad PCBAs, optional"? Any other changes for current kits? -->

### Trackballs and static bearings

Kits don't include a trackball or the static bearing balls. Buy them separately.

<!-- VERIFY: the live guide says "as of 1/6/2026" kits don't include the trackball or bearings. Is that still true? -->

- **Static bearings:** 3.175 mm ceramic (ZrO2) balls. We recommend [G5 grade on Amazon](https://www.amazon.com/uxcell-Ceramic-Bearing-Zirconium-Precision/dp/B081SNH8J5). Some older holder designs use 3 mm balls ([G5 on Amazon](https://www.amazon.com/uxcell-Ceramic-Bearing-Zirconium-Precision/dp/B081SPLWT5)).
- **Trackballs:**
  - Svalboard Bright Silver, 44 mm: in the [Trackball Upgrade Kit](https://svalboard.com/products/trackball-upgrade-kit), option "Complete with Bright Silver ball - 44mm".
  - [SANWA 44 mm red trackball](https://www.amazon.com/SANWA-Trackball-Replacement-Kensington-Compatible/dp/B0BQV1X86B)

**Trackball size:** 44 mm is the default and suits any user. Larger balls need big hands: at least 190 mm, and more likely 200 mm, from wrist to the tip of the middle finger, with a fairly arched fit. A bigger ball affects fit, so start from 44 mm. An average man can probably use a 50 mm ball. Example of a larger ball: [SANWA 55 mm](https://www.amazon.com/SANWA-Trackball-Replacement-Kensington-Compatible/dp/B0DF7S4YJK).

### Handle the PCBAs safely

Static can damage the PCBAs.

- Every PCBA is tested and packed in static-dissipative bags or wrap. The exception is the finger cluster PCBAs. They aren't fully tested, so the kit includes two spares. Test them before final assembly ([Step 7](/build/step-07-install-pcbas/)).
- About 97.5% of finger cluster PCBAs work. The odds of three bad ones are about 1 in 1,000. If that happens, contact support@svalboard.com for a replacement.
- Use ESD-safe handling: a properly grounded ESD mat and a wrist strap. We can't take responsibility for PCBAs damaged during assembly.
- Take extra care in dry climates or on carpet.

## Tools you need

**Required:**

- A Prusa MK3S or better 3D printer with a 0.4 mm nozzle, or access to one (for example, at a library or makerspace).
- At least one full spool of filament. Black PLA is the basic choice. Any filament that isn't opaque to infrared light at 940 nm needs [silver Sharpie](https://www.amazon.com/Sharpie-39108PP-Metallic-Permanent-Blister/dp/B00009RAX4) on the key flags ([Step 5](/build/step-05-key-flags/)). Only Sharpie-brand silver works reliably. Sharpie gold, bronze and copper are less reliable.
- [Medium CA glue, with fine applicator tips](https://a.co/d/0MWOtlK).
- Adjustable parallel pliers. We recommend the [Knipex Pliers Wrench, 180 mm](https://www.amazon.com/dp/B081K8WFTF).
- A small flat-blade screwdriver, about 4 mm wide and 1 mm thick.
- A heat set insert kit or a soldering iron, for example [this one](https://amzn.to/3TOY4MW).
- 3D printing experience. This is an advanced build. Depending on your filament and your printer, you may need to tune your slicer settings to get working parts.

**Recommended:**

- Diamond files for cleanup (200 and 400 grit).
- A #2 X-Acto knife.

## The steps

1. [Print all parts and clean them up](/build/step-01-print-parts/)
2. [Organize magnets for assembly](/build/step-02-organize-magnets/)
3. [Install magnets in keys and clusters](/build/step-03-install-magnets/)
4. [Insert keys into clusters](/build/step-04-insert-keys/)
5. [Apply paint or ink to key flags as needed](/build/step-05-key-flags/)
6. [Attach FFCs to PCBAs](/build/step-06-attach-ffcs/)
7. [Install PCBAs in clusters, then test them (recommended)](/build/step-07-install-pcbas/)
8. [Install heat set inserts in base and cover](/build/step-08-heat-set-inserts/)
9. [Attach towers to clusters](/build/step-09-attach-towers/)
10. [Install towers on baseplates and clusters on towers](/build/step-10-install-towers/), then the pointing devices: [10a TrackPoint, 10b trackball, 10c touchpad](/build/step-10-pointing-devices/)
11. [Route cables through baseplates](/build/step-11-route-cables/)
12. [Install MCUs on baseplates and connect cables](/build/step-12-install-mcus/)
13. [Attach palm rest carriers to baseplates](/build/step-13-palm-rest-carriers/)
14. [Attach palm rests to sleds](/build/step-14-palm-rests/)
15. [Flash firmware and connect the cables](/build/step-15-flash-and-connect/)
16. [Test all keys in Keybard](/build/step-16-test-keys/)
17. [Install back cover and rubber feet](/build/step-17-back-cover/)
18. [Adjust fit for both hands](/build/step-18-adjust-fit/)
19. [Enjoy!](/build/step-19-enjoy/)
