---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

We released Surge XT 1.1.0 on August 3, 2022. Our strategy for the rest of 2022 with Surge is to release smaller maintenance updates
numbered 1.1.1, 1.1.2, etc.... with bug fixes and tweaks.

This changelog was updated Aug 23 as of commit 9adb35db38d00e.

* Regressions from 1.0.1 and Breaking Changes
   * Restore the correct operation of the AirWindows AD-Clip effect  
   * The WaveShaper effect mis-scaled the input meaning the simple test of a sin -> the filter waveshaper had a different response
   than the sin -> waveshaper effect. Remediate by correcting the input scale on waveshaper. This may make some waveshaper-effect using
   patches louder.

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
   * The step sequencer announces when a value is on an exact 1/12th for pitch-based sequencing
   * The wavetable menu display of frame and sample count is now screen-readable on Mac
   * Changing the LFO type sends an accessible notification to update the screen reader state
   * The FX Effects Region properly handles key presses; gives a cleaner menu; and many more usability improvements

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
   * Add a keybinding (default to Alt-A) to arm and unarm modulation; Hide the 'tab to arm modulator' option.
   * Rename legacy filter subtypes consistently to Standard/Driven/Clean
   * Paste-with-modulation can be undone

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
   * Fix a crash when closing a reaper window with the patch menu open
   * Review all other timers and delayed objects for a similar crash; make a few changes
   * Correctly read XDG defaults so that XDG Data for the DOCUMENTS_HOME correcty follows the spec on Linux
  
* Content
   * New Wavetables from Philippe Favre    
   * Updated Formula Tutorial Crossfade Example
   

