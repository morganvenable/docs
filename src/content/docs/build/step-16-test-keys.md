---
title: "Step 16: Test all keys"
description: Check every key with Keybard's Matrix Tester before you close the case.
sidebar:
  order: 18
---

Do this before you screw on the back cover.

1. Open [Keybard](/keybard/) and connect ([Step 15](/build/step-15-flash-and-connect/#connect-keybard)).
2. In the editor toolbar, choose **Matrix Tester**.
3. Press each finger key in every direction, and each thumb key. Hold each press for a moment.
4. Check that every key activates, and that the key that lights up is the one you pressed.
5. Use **Clear Matrix** to start over. This doesn't change your layout.
6. Choose **Exit Matrix Tester** when you're done.

If you have a pointing device, move it and check that the pointer moves.

<!-- VERIFY: the live guide's photo for this step is a Vial Matrix Tester screenshot. A Keybard Matrix Tester screenshot is needed here. -->

## If a key doesn't register

- Check that the key moves freely.
- Check that its flag is intact and opaque. Light filaments need silver marker ([Step 5](/build/step-05-key-flags/)).
- Check that the PCBA sits flat in the cluster, including the bottom-left corner ([Step 7](/build/step-07-install-pcbas/)).
- Check that the FFC is fully inserted and latched at both ends, contacts down.
- If the Matrix Tester shows the key but typing is wrong, the switch is fine. Check that key's layer and binding.

## On Vial

On Svalboard's Vial firmware, use Vial's **Matrix Tester** tab instead.
