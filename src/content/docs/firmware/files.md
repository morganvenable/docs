---
title: Firmware files
description: Which Svalboard QMK vLaunch2 file to flash on each half, by the pointing module on that half.
sidebar:
  order: 3
---

Download from the [vLaunch2 release](https://github.com/svalboard/qmk/releases/tag/vLaunch2). Pick one file per half, by the module on that half:

| Module on that half | Left | Right |
| --- | --- | --- |
| None | `svalboard_left_sval_vLaunch2.uf2` | `svalboard_right_sval_vLaunch2.uf2` |
| None, blank keymap | `svalboard_left_blank_vLaunch2.uf2` | `svalboard_right_blank_vLaunch2.uf2` |
| Trackball | `svalboard_trackball_pmw3389_left_sval_vLaunch2.uf2` | `svalboard_trackball_pmw3389_right_sval_vLaunch2.uf2` |
| TrackPoint | `svalboard_trackpoint_left_sval_vLaunch2.uf2` | `svalboard_trackpoint_right_sval_vLaunch2.uf2` |
| Touchpad | `svalboard_azoteq_left_sval_vLaunch2.uf2` | `svalboard_azoteq_right_sval_vLaunch2.uf2` |
| Trackball, early 2024 units only (deprecated) | `svalboard_trackball_pmw3360_left_sval_vLaunch2.uf2` | `svalboard_trackball_pmw3360_right_sval_vLaunch2.uf2` |

The `blank` files have no keys assigned. Builders use them to test keys without typing anything.

Flash as in [Flashing firmware](/firmware/flashing/). Flashing resets your layout to the default, so export a `.svil` first and import it afterward.
