# Proposals: a golden path to the self-print files

Status: proposals only, for the owner to review. Nothing here is published, and nothing has changed in svalboard/svalboard-self-print or on the sizer sheet.

Source: customer feedback on the self-print kit. Mapping the build guide to the print files took about two to three hours. The guide changes on this branch add a file table under Step 1 > What to print and a sizer-to-file table under Key sizes. The proposals below fix the same gaps at their source.

## 1. A START HERE.md defaults index in the print repo

**Why:** the repository has no single place that names the default parts. Its README is one link to the build guide. A self-builder has to open many folders, many holding variants, prototypes and deprecated files, to work out which file is the standard one.

**Proposed change:** add `Lightly FDM/START HERE.md` (and link it from the top-level `README.md`). It holds the same table as the guide's What to print section, plus one line pointing to the guide for sizing and print settings:

| Part | Print | File |
|---|---|---|
| North keys | 8 | `V2.0/V2.0 Keys/Side Keys V2.0/Finger Side Keys V2.0 - 11mm Thick Medium.step` |
| East, South and West keys | 24 | `V2.0/V2.0 Keys/Side Keys V2.0/Finger Side Keys V2.0 - 6 <thickness> 0.7.step` (Thick 1, Semi 0.5, Thin 0, Backset -1) |
| Tipping center keys | 8 | `V2.0/V2.0 Keys/Center Keys V2.0/Center-Key_Offset-0.9_Wide.step` |
| Thumb Pad, Knuckle, Nail L/R, Up (Mode (Up) 29h) | 2 each, Nail 1 each | `V2.0/V2.0 Keys/Thumb Side Keys/Thumb Side Keys All v2.0 RCe.step` |
| Thumb Down keys | 2 | `V2.0/V2.0 Keys/Thumb Down Regular/TKDown V2.1.step` |
| Finger clusters | 8 | `V2.0/V2.0 Clusters/FC Standard - V2 RCe.step` |
| Thumb clusters | L and R | `V2.0/V2.0 Clusters/TC Standard - TC L C V2 RCe.step`, `... TC R C V2 RCe.step` |
| Palm rests | L and R | `Hemi Palm L.3mf`, `Hemi Palm R.3mf` (Hemi Palms folder) |
| Top washers | 2 | `Hemi Top Washer - Print two.step` |
| Carriers | 2 | `Hemi-Carrier-9mm-Shim_2N-Slots.step` |
| Base plates and cases | L and R | `V3.0rc/Baseplates and Case/` v3.0.0 plates (pop-nut, checked in CAD) and case STL |
| Trackball holder, 44 mm | 1 per trackball | `V2.0/V2.0 Trackball Holders/PROD Svalball 3.175mm 44mm ball 1.6mm gap 757560.step` |
| Tools | | `V2.0/Tools/`: Key and Cluster Stage Mini 4x3, Magnet Dropper v1.2, Side Key 4-position tray |

Keep the guide and this file in step: when a default changes, both change in the same pass.

## 2. Move the Hemi palms out of Experimental

**Why:** the Hemi palm rest is the guide's standard palm rest, but its files sit in `V2.0/Palmrests/Experimental/Hemi Palms/`. The customer never looked there, reasonably: "Experimental" reads as "not for you". The same folder also holds the Cyrus Literal and Cyrus Long STEPs, which are not the standard palm and are the only Hemi palm STEPs, so they are easy to pick by mistake.

**Proposed change:**
- Move `Palmrests/Experimental/Hemi Palms/` to `Palmrests/Hemi Palms/`.
- Inside it, keep `Hemi Palm L.3mf`, `Hemi Palm R.3mf`, `Hemi Top Washer - Print two.step`, the readme, and the carriers. Put `Hemi-Carrier-9mm-Shim_2N-Slots.step` at the top level of the folder, so the default carrier is beside the palms; leave the other heights in `Additional carrier variants and heights/`.
- Move the two Cyrus STEPs to `Palmrests/Experimental/Cyrus Hemi Palms/`.
- Move the tripod palm rests (`v1.3Redux Tripod ...`, `Palm v1.3Redux ...`) to `Palmrests/Older - Tripod/`.
- Update `Hemi Palm Readme.txt`: change "I recommend starting with 12" to start with the 9 mm carrier, which the owner confirmed as the starting height. A branch with this change already exists on origin: `hemi-readme-9mm` (b1896d7, "Hemi palm readme: start with the 9 mm carrier"), not yet merged to main.
- Then update the guide's table paths in the same pass.

## 3. Consistent North key naming

**Why:** every side key file uses the `height thickness offset` scheme from `V2.0 Keys/readme.txt` except the three named 11 mm files. The customer looked for the North key as `Finger Side Keys V2.0 - 11 1 0.7.step`, didn't find it, and concluded it was missing. The real file is `Finger Side Keys V2.0 - 11mm Thick Medium.step`. He also looked for a "North key" folder.

**Proposed change** (offsets pending the owner's answer in the guide's VERIFY note):
- Rename `Finger Side Keys V2.0 - 11mm Thick Medium.step` to `Finger Side Keys V2.0 - 11 1 0.7.step` (if Medium is 0.7 mm).
- Rename `11mm Thick XXLight` and `11mm LessUltra XXLight` to their `11 <thickness> <offset>` names.
- Optionally split `Side Keys V2.0` into `North Keys (11 mm)` and `East South West Keys (6 and 7 mm)` subfolders, so the folder tree matches the names in the guide.
- Add the default files to `V2.0 Keys/readme.txt`: "Standard build: North 11 1 0.7; East, South and West 6 <your thickness> 0.7; center key 0.9 Wide."

## 4. Size names on the sizer sheet

**Why:** the sizer marks crescents in mm (14 mm, 15 mm and up), but the key files and the guide talk in Thick, Semi, Thin and Backset. The customer had to work out the link, and didn't realize the reading picks the East, South and West side keys only.

**Proposed change:** next to each crescent on svalboard.com/sizer, print the size it selects on a standard cluster, and a line under the table:
- 14 to 16 mm: Thick (+1), file `6 1 0.7`
- 17 mm: Semi (+0.5), file `6 0.5 0.7`
- 18 mm: Thin (0), file `6 0 0.7`
- 19 to 20 mm: Backset (−1), file `6 -1 0.7`
- Under the table: "Your largest reading picks your East, South and West keys. North keys are always Thick."

The 14, 15 and 19 mm rows depend on the owner's answer in the guide's VERIFY note under Key sizes.

## 5. Center key Narrow and Wide in the folder

**Why:** the guide never said what Narrow and Wide mean; the only explanation is in `Center Keys V2.0/Errata - Readme.txt`, whose name doesn't suggest it.

**Proposed change:** rename it to `readme.txt` and start it with one line: "Standard: Center-Key_Offset-0.9_Wide. Narrow is for tighter key geometries and very small fingertips."

## 6. Drop "WIP" from the touchpad holder names (done locally)

**Why:** the owner confirmed the SvalTPS43 Rev 2 holders are the current files. "WIP" tells builders not to print them.

**Change:** on the local print repo branch `golden-path-defaults` (commit 3caeb07, not pushed), `git mv` of `Lightly FDM/V2.0/Touchpad/SvalTPS43 Rev 2 WIP - {Ambi,Left,Right}.step` to `SvalTPS43 Rev 2 - {Ambi,Left,Right}.step`. No readme names them. The guide links the new Ambi name, so that link is broken until the branch is merged.

## 7. A versioned standard-build zip as a release asset

**Why:** one download is the shortest path: the builder gets every default file, already sorted, with the sizes side by side.

**Change:**
- Script: `scripts/build_standard_zip.py` in the print repo (on `golden-path-defaults`). It lives in a new top-level `scripts/` folder rather than `tools/`, because `Lightly FDM/V2.0/Tools/` already means printable build tools. Its `FILES` list is the single source for the package; it refuses to build if any file is missing. Run from the repo root: `python scripts/build_standard_zip.py v2.0.0 dist`.
- Contents: every file in the guide's table, in numbered folders (finger keys, thumb keys, clusters, palm rests, base plates and cases, pointing, build tools). The East/South/West keys sit in `01 Finger keys/East South West - pick ONE size/`, one subfolder per size, each named with its sizer reading. A `README.txt` lists each file with its part, how many to print, its source path, and the source commit.
- Version scheme: `svalboard-lightly-standard-build-v<major>.<minor>.<patch>.zip`. Major.minor is the key and cluster generation (keys and clusters must match), so v2.0 now. Patch goes up whenever any default file changes (a new plate, a renamed key, a moved folder). Release tag: `standard-build-v<version>`, so it never collides with other tags. First package: `v2.0.0`.
- Hosting: a GitHub release asset on svalboard/svalboard-self-print, so it inherits the repository's supporters-only access. Release URL: `https://github.com/svalboard/svalboard-self-print/releases/download/standard-build-v2.0.0/svalboard-lightly-standard-build-v2.0.0.zip`. The release isn't created; the guide carries a VERIFY note until it is.
- Rule: when a default changes, update the script's list, the guide's table and `START HERE.md` together, then publish the next patch version.
