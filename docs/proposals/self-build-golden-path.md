# Proposals: a golden path to the self-print files

Status: the owner approved items 1 to 7. Items 1, 2, 3, 5 and 6 are done on the local print repo branch `golden-path-defaults` (worktree `GitHub/svalboard-self-print-wt-golden`), not pushed. Item 4 (the sizer sheet) is still a proposal. Item 7 (the zip) is built locally; its release is not created. Nothing is published.

Source: customer feedback on the self-print kit. Mapping the build guide to the print files took about two to three hours. The guide changes on this branch put a three-step path and a linked file table under Step 1 > What to print, and a sizer-to-file table under Key sizes. The items below fix the same gaps at their source.

Side key sizes are named by number everywhere: +1, +0.5, 0, −0.5, −1, −1.5, −2, matching the second number in the file names (`6 1 0.7` is size +1). The older words (Thick, Semi, Thin, Backset) appear once, as "formerly", for people mapping older material.

## 1. A START HERE.md defaults index in the print repo (done locally)

**Why:** the repository had no single place that names the default parts. Its README was one link to the build guide. A self-builder had to open many folders, many holding variants, prototypes and deprecated files, to work out which file is the standard one.

**Change:** `Lightly FDM/START HERE.md`, linked from the top-level `README.md`. It has the same three steps as the guide, the sizer-to-size table, and every standard file as a relative link (all 26 checked against the branch), plus the zip download.

## 2. Move the Hemi palms out of Experimental (done locally)

**Why:** the Hemi palm rest is the guide's standard palm rest, but its files sat in `V2.0/Palmrests/Experimental/Hemi Palms/`. The customer never looked there, reasonably: "Experimental" reads as "not for you". The same folder held the Cyrus Literal and Cyrus Long STEPs, which are not the standard palm and were the only Hemi palm STEPs, so they were easy to pick by mistake.

**Change (git mv):**
- `Palmrests/Experimental/Hemi Palms/` is now `Palmrests/Hemi Palms/`.
- `Hemi-Carrier-9mm-Shim_2N-Slots.step` sits beside the palms; the other heights stay in `Additional carrier variants and heights/`.
- The two Cyrus STEPs are in `Palmrests/Experimental/Cyrus Hemi Palms/`.
- The tripod palm rests (`Palm v1.3Redux Tripod 8deg roll incl 5mm shims.step`, `v1.3Redux Tripod 5deg roll.step`) are in `Palmrests/Older - Tripod/`.
- `Hemi Palm Readme.txt` now says to start with the 9 mm carrier (owner confirmed), with the same two lines as the existing origin branch `hemi-readme-9mm` (b1896d7), so the two merge cleanly. Its Cyrus paragraph names the new Cyrus folder.

## 3. Consistent North key naming (done locally)

**Why:** every side key file used the `height size offset` scheme from `V2.0 Keys/readme.txt` except three named 11 mm files. The customer looked for the North key as `Finger Side Keys V2.0 - 11 1 0.7.step`, didn't find it, and concluded it was missing. He also looked for a "North key" folder.

**Checked in CAD before renaming** (cadquery, magnet pocket position along the key, and a boolean diff of the bodies):
- Pocket center: `11 0 0.7` −13.91 mm, `11 0 0.8` −13.81, `11 0 1.0` −13.61, `11 1 0.8` −13.81. `11mm Thick Medium` is −13.91, so offset 0.7. Its body differs from `11 1 0.8` only at the pocket, by the same volumes (0.532 and 0.814 mm³) as `6 1 0.7` differs from `6 1 0.8`, so it is size +1. It is `11 1 0.7`.
- `11mm Thick XXLight`: pocket −13.61, so offset 1.0; body differs from `11 1 0.8` only in the pocket region, so size +1. It is `11 1 1.0`.
- `11mm LessUltra XXLight` is exported in a different position and orientation, so the same comparison doesn't apply. Its name is unchanged.

**Change:** `11mm Thick Medium` → `Finger Side Keys V2.0 - 11 1 0.7.step`; `11mm Thick XXLight` → `Finger Side Keys V2.0 - 11 1 1.0.step`. `V2.0 Keys/readme.txt` now ends with the standard keys: North `11 1 0.7`; East, South and West `6 <size> 0.7`; center `0.9 Wide`; and a pointer to START HERE. The optional split of `Side Keys V2.0` into North and East/South/West subfolders is not done, to keep every other link stable; START HERE covers the need.

## 4. Size numbers on the sizer sheet (proposal)

**Why:** the sizer marks crescents in mm (14 mm, 15 mm and up), but the key files are named by size number. The customer had to work out the link, and didn't realize the reading picks the East, South and West keys only.

**Proposed change:** next to each crescent on svalboard.com/sizer, print the size number it selects on a standard cluster, and a line under the table:
- 14, 15 and 16 mm: size +1, file `6 1 0.7`
- 17 mm: size +0.5, file `6 0.5 0.7`
- 18 mm: size 0, file `6 0 0.7`
- 19 and 20 mm: size −1, file `6 -1 0.7`
- Under the table: "Your largest reading is your size. It picks your East, South and West keys. North keys are always +1."

The mapping is owner-confirmed (14–15 mm → +1, 19 mm → −1). Use the numbers only, not Thick, Semi, Thin or Backset.

## 5. Center key Narrow and Wide in the folder (done locally)

**Why:** the guide never said what Narrow and Wide mean; the only explanation was in `Center Keys V2.0/Errata - Readme.txt`, whose name doesn't suggest it.

**Change:** renamed to `readme.txt`, starting with "Standard: Center-Key_Offset-0.9_Wide. Narrow is for tighter key geometries and very small fingertips."

## 6. Drop "WIP" from the touchpad holder names (done locally)

**Why:** the owner confirmed the SvalTPS43 Rev 2 holders are the current files. "WIP" tells builders not to print them.

**Change:** `Lightly FDM/V2.0/Touchpad/SvalTPS43 Rev 2 WIP - {Ambi,Left,Right}.step` → `SvalTPS43 Rev 2 - {Ambi,Left,Right}.step`. No readme named them.

## 7. A versioned standard-build zip as a release asset

**Why:** one download is the shortest path: the builder gets every default file, already sorted, with the sizes side by side.

**Change:**
- Script: `scripts/build_standard_zip.py` in the print repo (on `golden-path-defaults`). It lives in a new top-level `scripts/` folder rather than `tools/`, because `Lightly FDM/V2.0/Tools/` already means printable build tools. Its `FILES` list is the single source for the package; it refuses to build if any file is missing. Run from the repo root: `python scripts/build_standard_zip.py v2.0.1 dist`.
- Contents: every file in the guide's table, in numbered folders (finger keys, thumb keys, clusters, palm rests, base plates and cases, pointing, build tools). The East/South/West keys sit in `01 Finger keys/East South West - pick ONE size/`, one subfolder per size, named by size number and sizer reading (for example `Size +0.5 - sizer 17 mm`). A `README.txt` lists the sizer-to-size mapping and each file with its part, how many to print, its source path, and the source commit.
- Version scheme: `svalboard-lightly-standard-build-v<major>.<minor>.<patch>.zip`. Major.minor is the key and cluster generation (keys and clusters must match), so v2.0 now. Patch goes up whenever any file name, folder name or file inside changes. Release tag: `standard-build-v<version>`, so it never collides with other tags. Current package: `v2.0.1` (v2.0.0 was the first local build, never published; v2.0.1 renames the North key file and the size folders to numbers and adds TKDown V2.0 as an alternate Down key).
- Hosting: a GitHub release asset on svalboard/svalboard-self-print, so it inherits the repository's supporters-only access. Release URL: `https://github.com/svalboard/svalboard-self-print/releases/download/standard-build-v2.0.1/svalboard-lightly-standard-build-v2.0.1.zip`. The release isn't created; the guide carries a VERIFY note until it is. Build the release zip after the branch merges, so the README's commit is on main.
- Rule: when a default changes, update the script's list, the guide's table and `START HERE.md` together, then publish the next patch version.

## 8. Re-render the two key size figures (done)

`cad-key-profiles` and `cad-key-sizing` are re-rendered with the labels +1, +0.5, 0 and −1. The label text comes from `SIZE_LABEL` in `cad-render/cad3/batch1/geo.py`; geometry and camera are unchanged.
