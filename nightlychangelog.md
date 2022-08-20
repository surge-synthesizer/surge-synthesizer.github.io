---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

We released Surge XT 1.1.0 on August 3, 2022. Our strategy for the rest of 2022 with Surge is to release smaller maintenance updates
numbered 1.1.1, 1.1.2, etc.... with bug fixes and tweaks.

This changelog was updated Aug 20 as of commit 25d39a0.

* Regressions from 1.0.1
   * Restore the correct operation of the AirWindows AD-Clip effect  

* Performance and DSP
   * Add a JUCE patch which allows sample accurate VST3 MIDI CC and Pitch Bend (especially important with long block sizes)  
   * Set the velocity of re-used voices correctly in mono voice stealing modes
   * In the new reset-from-current mode, mono-fp would not reset portamento when a gap occured; fix.
   * Correct / revert a set of integer modulation changes which were nascent in 1.1.0 but which caused pops and clicks and misstaken unison settings when changing filter, voice, and oscillator types with active voices
 

* Accessibility Enhancements
   * The name of the accessible overlay for the FX slots contains the effect type name as well as the slot name.  
   * Correctly label the 'previous' and 'next' wavetable jog buttons (which were backwards)
   * Deactivate additional accessibility announcements (oscillator name, patch name, etc...) by default since an unknown bug makes them speak for some windows users even with accessibility turned off.
   * Correctly name the "Arm/Disarm" buttons on the modulator buttons when states change.

* UI/UX Fixes 
   * Filter-2 offset mode, when copied in a scene copy, sets up the copy target filter 2 cutoff slider properly
   * The Filter overlay correctly uses filter 2 offset and resonance link modes when drawing the filter
   * Keystrokes while the patch browser is scanning for the database now get handled by the patch browser anyway, avoiding accidental DAW forwarding
   * User patches can "Reveal in Finder / Show in Explorer" for quick drag and drop sharing!
   * Correctly set default zoom to 100 when no default zoom is set.
   * Mousewheel on next/previous can move presets, categories, and fx presets
   * Since we have undo, by default don't propmpt when changing a patch over a dirty patch.
   * RMB on the Wavetable Menu shows wavetalbes in just the current category
   * Loading a patch will try to locate your position in the wavetable menu for jogs, checks, etc
   * Don't double-scale velocity with mouse on virtual keyboard; Now the virtual keyboard mouse velocity always spans 0..127

* CLAP support
   * The Linux CMAKE Install rules install the CLAP now even if you don't use the deb/rpm
   * The MAC Installer selects CLAP as on by default, and also alphabetizes the formats
   * The CLAP paramsFlush implementation is safe to call when processing is happening, even though this probably shouldn't happen

* Infrastructure and Miscellany
   * Moved build infrastructure to Ubuntu 20 LTS since Azure is deprecating Ubuntu 18
   * Replace the `static const auto one = _mm_set1_ps(1.0)` with just `const auto one =` to avoid a static lock (thanks to The Audio Programmer discord community for catching this for us!)
   * Move the HalfRateFilter to sst-filters; use it in both shortcircuit and surge
   * Supress mouse wheel gestures during mouse drags to avoid nested begin/end edits with mac trackpads
   * Changes to Mac Signing to allow formula modulator to work in standalone on 10.14; and not prompt for non-root disks which wouldn't work in installer
  
* Content
   * New Wavetables from Philippe Favre    

