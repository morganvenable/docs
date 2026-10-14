# Docs review: open questions

Each question sits in the page as a `<!-- VERIFY: ... -->` comment. Paths are under `src/content/docs/`.

## Questions for the owner

1. `start/quickstart.md` and `hardware/hardware.md`: the thumb-cluster diagram labels the Up key "Up (Mode Key)", but Up keys now ship blank. Keep the image, or replace it with one labeled just "Up"?
2. `hardware/typing.md`: capture new layer images from current Keybard (layers 0, 1, 2, 14, 15)? Yes or no.
3. `firmware/moving-from-vial.md`: the migration imports the Vial `.vil` (step 5), which the repo rules say not to promote. Keep `.vil` import as the main path, or lead with the Layouts panel?
4. `firmware/going-back-to-vial.md`: does Vial v2025-11-01 load a `.vil` exported by Keybard without errors?
5. `keybard/index.md`: the screenshots show "Trainer" in the left rail, where vLaunch2.3 says "Overlay". Recapture now, or accept for now?
6. `keybard/layer-lights.md`: is "thumb clusters shipped after May 2024" the right date for the RGB light? (The colors, the default brightness of 128 and the step of 10 match the firmware.)
7. `keybard/pointing.md`: vLaunch2 doesn't report pointing hardware. vNext1 does, but it has one file per side, so only **Pointing device not picked up** can appear. Keep the "Wrong pointing-device firmware" section, cut it to the not-picked-up case, or hold it back?
8. `keybard/settings.md`: Settings → Developer isn't public. Drop the mention of it entirely?
9. `keybard/overlay.md`: vLaunch2.3 ships Keybard Host as a portable ZIP. Should the docs describe the Windows installer instead?
10. `reference/links.md` and `vial/index.md`: is https://captdeaf.github.io/keybard/ the legacy Keybard link to give Vial users?
11. `reference/releases.mdx`: is "the desktop app for the Keybard overlay" the right one-line description of Keybard Host?
12. `reference/releases.mdx`: the `.svup` sentence comes from the vNext1 notes. Leave it until the in-firmware updater ships? Yes or no.
13. `reference/usb-ids.mdx`: does the board report the product ID of the half connected to USB?
14. `build/index.md`: the kit lists 14 M3x4 inserts (12 plus 2 spare), but Step 8 uses 7 per base plate (14). Which is right?
15. `build/index.md`: add "Touchpad PCBAs, optional" to the kit list? Any other kit changes?
16. `build/index.md`: is it still true that kits don't include the trackball or the bearing balls?
17. `build/fitment.md`: list the "−2 mm" side key (huge fingers, narrow cluster PCBAs, not standard)? Yes or no.
18. `build/fitment.md`: add the old fitment guide's notes (longer towers for unusual finger lengths, about 10% need wider keys)? Yes or no.
19. `build/step-01-print-parts.md`: which keys does "0.8 to 1.0 mm offset, about 10 to 15 g" apply to? The tipping center key at 0.9 mm is about 20 g.
20. `build/step-07-install-pcbas.md`: does the cluster test keep using the vLaunch2 blank files, or will vNext ship a blank file?
21. `build/step-10-pointing-devices.md`: what are the touchpad mounting steps (screws, holder, cover)?
22. `build/step-12-install-mcus.md`: do M3 6 mm thread-cutting screws hold the MCU, and how many go in each MCU?
23. `build/step-18-adjust-fit.md`: the tower base screw needs a 2.5 mm hex wrench, but the kit has only a T10 driver. Should this say T10, or "2.5 mm hex or T10"?
24. `build/step-18-adjust-fit.md`: does the 1.5 mm base plate clearance warning apply to tipping center keys, or only to the old sliders?

## Photos and screenshots needed

These are also marked with VERIFY comments.

- `build/step-08-heat-set-inserts.md`: square nuts seated in the base plate slots.
- `build/step-10-pointing-devices.md`: TrackPoint in its holder, and the contacts-up FFC end. Touchpad: the FFC at the touchpad end, the FFC in the MCU's "Azo" connector, and the touchpad on its rail from above and from the side.
- `build/step-16-test-keys.md`: Keybard Matrix Tester (the old slide shows Vial's).
- `keybard/layer-lights.md`: the color list under the color dot, with the gear button; the **Colors for** dialog with **LED color** selected.
- `hardware/typing.md`: one image per default layer (see question 2).

## Known gaps

- The Keybard recordings show "Trainer" in the left rail (question 5).
- The Up-key diagram still says "Mode Key" (question 1).
- Step 19 and the build index link to https://svalboard.com/manual, and hardware care links to https://svalboard.com/build for the old gap-slider removal. Both stay until cutover.
- No page describes how Keybard draws the pointing devices in the layout. That design is still under review.
- The vNext1 date on `firmware/bleeding-edge.md` (October 14) is the UTC publish date. In US time zones it was October 13.
