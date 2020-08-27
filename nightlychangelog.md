---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog 
---

## Draft Changelog for 1.7.2

1.7.2 will ship in late fall or early winter 2020

As of commit 125c7b9 here's what's there:

* DSP
   * Implement 24dB varients for the bandpass and notch filter subtypes
   * WaveShaper drive is Extendible
   * Default polyphony set to 16.
   
* Effects
   * Integrate about 50 Airwindows effects (from https://github.com/airwindows/airwindows). Thanks to Airwindows
     for providing high quality open source effects we could integrate.
   * Add a controllable number of phaser stages
   * Vocoder can work on stereo, blended, left, or right inputs

* Modulation
  * Introduce an MSEG Editor
     * Say
     * MOre
     * Here
  * Fix a bug which picked the wrong step when start and end step were the same in the step sequencer
  * LFO Amplitude can be extended into negative ranges
  * "Temposync All Params" available in the AEG and FEG.
  * Display PitchBend as a bipolar modulator on sliders

* Content
  * New Patches from @VinceyZed
  * New Patches from OSC136 link 
* UI
  * Consistently implemented our new logo!
  * Add an "Add Modulation..." menu item for an typein on the active but currently unassigned mod
  * Hover shows which modulation sources are available
  * Explicitly assign CC to parameters, just like Macros
  * Stack the Modulation Edit Display to avoid overflows
  * Unique FX Icons per FX Type
  * Introduce a menu type which can replace a slider type for discrete (integer) parameters
  * Allow load from file and drag and drop of patch for patch browser
  * Allow patch browser to rapidly open user and data folders
  * Save FX presets in per-FX directory
  
* Skin Engine
  * Begin restoring PNG support
  * Skin Engine can change overall window size
  
* Infrastructure and Code Quality
  * build-linux now works with ARM
  * Fix VSTGUI issue with linux and mouse motion dropping modifiers
  * Add several libraries which were not explicitly linked on linux
  * Allow the tarball to build and collect version info in the absence of a git checkout
  
  
