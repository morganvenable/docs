---
title: "Step 1: Print all parts"
description: What to print, which version to use, and the print settings for keys, clusters, cases and palm rests.
sidebar:
  order: 2
---

## Get the files

The parts are in the [svalboard-self-print repository](https://github.com/svalboard/svalboard-self-print/). If you don't have access yet, ask @claussen on the [Svalboard Discord](https://www.svalboard.com/discord).

## Which version to print

- In general, use the latest version.
- V2.0 greatly improves the key mechanism tolerances. Use it unless you're building to match older printed parts.
- Keys and clusters **must** come from the same major version, or they won't fit together.
- Many other parts didn't change from V1.3 to V2.0 and were carried forward as they are.
- The repository may hold prototypes or parts that aren't in your kit. If you're unsure whether a part fits, ask in #supporters on Discord.

## What to print

Pick your side key size first. See [Sizing before you build](/build/fitment/).

**Finger keys**

- 8 North keys: 11 mm tall, Thick (16 mm), medium force (0.7 mm offset).
- 24 East, South and West side keys: 6 mm tall, in your size: Thick (16 mm), Semi (17 mm), Thin (18 mm) or Backset (20 mm). Medium force (0.7 mm offset).
- 8 tipping center keys: 0.9 mm offset is a good starting point.

**Thumb keys**

- 2 Pad, 2 Knuckle, 2 Down, Nail Left, Nail Right, and 2 Up (Mode) keys.

**Clusters**

- 8 finger clusters
- Thumb L and Thumb R

**Other parts**

- Palm rests: Hemi Palm L, Hemi Palm R, two 9 mm hemi carriers, and two hemi top washers. The files are in the Hemi Palms folder under Palmrests. Carriers from 1 mm to 15 mm tall are in its "Additional carrier variants and heights" folder.

  <!-- VERIFY: the hemi palm files are in "Lightly FDM/V2.0/Palmrests/Experimental/Hemi Palms". Will they move out of Experimental now that they're the current design? Which carrier ships: "2N-Slots" (both slots on the window side) or "Split-Slots"? The page and the carrier render assume 2N-Slots. -->
- Base plates and cases: L Base, L Case, R Base, R Case.
- TrackPoint case, if you have a TrackPoint: top cover and bottom cover.
- Tools: mini 4x3 magnet stages (Key and Cluster), magnet dropper, mini key tray fixture.

## Print tuning

- Use a smooth or satin build plate. Fully textured plates make the parts look rough. This is only about looks. We recommend the Fabreeko HoneyBadger SemiSatin plate.
- Only the palm rests and the tipping center keys need supports.
- Start by getting the 6 mm side key perfect, then the finger and thumb clusters. If you can print those, the rest is easy.

## Keys

- PLA: 0.12 mm layer height, 0.18 mm first layer.
- ABS: the same settings work, but the filament must be very dry. ABS is finicky with overhangs if it's even a little damp.
- Exterior perimeters: 0.3 mm.
- You may need to paint seam blockers on the sides of the small flag on each key.

![Slicer view of a full build plate with two sets of keys, all except the thumb Down keys.](../../../assets/build/print-key-plate.webp)

### Key flags

The flag is the thin tab under each key that blocks the optical sensor.

- If flags form badly, place the seams at the top corner of the flag. Seams on the flag face can leave pinholes and heat artifacts that let light through.
- The flags must be about 0.8 mm thick or less for the parts to fit. With a 0.4 mm nozzle, set exterior perimeters ("outer wall" in Orca and Bambu Studio) to 0.3 mm.
- You may still need to clean up stringing. Slower printers and wet filament make stringing worse.
- If your filament isn't opaque to infrared light, coat the flags with opaque marker. Silver Sharpie works well ([Step 5](/build/step-05-key-flags/)).

![Slicer view of a side key. A line points to the top corner of the flag, where the seams should go.](../../../assets/build/print-key-flag-seams.webp)

### Key force

The offset sets how hard a key is to press. A larger offset gives a lighter key.

<!-- VERIFY: slide 15 says "For lowest forces, use 0.8mm-1.0mm offset – this is about 10-15g", while slide 20 says the 0.9 mm tipping center key is about 20 g. Which keys does the 10-15 g figure apply to? It's left off the page until confirmed. -->

### Tipping center keys

The tipping center key is the standard center key. The default strength is 0.9 mm offset, about 20 g. The STEP file has every offset from 0 to 1.2 mm (very light) if you want to experiment.

- Print at 0.2 mm layer height.
- Make the supports very dense: 0 or 0.1 mm base pattern spacing, and zero interface layer spacing (a very dense support interface).
- Dense supports come off as one block and leave a clean surface, so you have little or no cleanup inside the light hole.

![Slicer support settings with the base pattern spacing set to 0.1 mm, next to a tipping center key on dense green supports.](../../../assets/build/print-tipping-center-key-supports.webp)

## Clusters

- 0.2 mm layer height.
- Arachne on is recommended.
- The tipping center key clusters don't need supports.
- V2 and later: bridging angle 0 (automatic).
- V1.3 and earlier: bridging angle 180°, plus bridging modifiers at the angles shown below.
- If your printer can print two colors, print the small diffusers for the RGB layer lights in white.

![Slicer view of the cluster plate. Yellow bridging modifiers on the clusters are set to 90°, 157.2°, 166.2°, 193.8° and 202.8°.](../../../assets/build/print-cluster-plate.webp)

### Thumb Down key opening

The marked edge of the thumb cluster **must** be square. Elephant's foot here makes the thumb Down key bind. A bevel here can add play to the key and change how it feels.

![Thumb cluster body seen from below, with the critical edge of the Down key opening marked in orange.](../../../assets/build/print-thumb-down-key-edge.webp)

## Cases and base plates

- 0.2 mm layer height, 6 walls.
- Default bridging angle 180°.
- Bridging modifiers in the slot areas, as shown.
- Smooth side down.
- No supports.

![Slicer view of the left case and base plate, with bridging modifiers at 135°, 45° and 90° over the slot areas.](../../../assets/build/print-cases-plates.webp)

## Palm rests and carriers

- Print every palm rest part with 6 walls for strength.
- Stand each palm rest on its flat long edge, with tree supports (Auto, Default or Organic) and a brim of 5 mm or more. You may want to paint seam blockers on the visible surfaces.
- Print the carriers and the top washers flat side down. They don't need supports.

<!-- PHOTO: slicer screenshot of one build plate with Hemi Palm L and R standing on their long edges with tree supports and brim, plus two 9 mm hemi carriers and two top washers lying flat side down. Same framing and plate as print-palm-rests.webp. -->

![The parts of a hemispherical palm rest, pulled apart: the M5 flat head screw and the hemispherical top washer, the palm rest with the ball on its underside, the carrier with its cup and two curved slots, and the M5 square nut.](../../../assets/build/palm-rest-hemisphere-exploded.webp)

### Older builds: tripod palm rests

Print the tripod palm rests the same way, standing on the long edge with tree supports and a brim. Print the carriers and shims without supports.

![Slicer view of a tripod palm rest standing on its long edge with tree supports, next to two carriers and a set of shims.](../../../assets/build/print-palm-rests.webp)

## TrackPoint case

- 0.2 mm layer height.
- Flat sides down.
- No supports.

![Slicer view of the two TrackPoint case parts lying flat side down.](../../../assets/build/print-trackpoint-case.webp)

## Deprecated parts

Don't print the center key sliders (gap sliders) or the printed towers. The tipping center keys and clusters replace the sliders, and the kit includes stainless steel towers.
