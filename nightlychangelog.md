---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog 
---

## Draft Changelog for 1.8.0

1.8.0 is planned for Dec 2020 or Jan 2021

As of commit 63857da1 here's what's there:

* Filters
   * Added "Vintage Ladders", 2 models of vintage 4 stage feedback low pass ladder filters.
        Thanks to [@ddiakopoulos](https://github.com/ddiakopoulos) for maintaing this very
        useful [repo of research and code](https://github.com/ddiakopoulos/MoogLadders) which 
        heavily informed the models we implemented. 
   * Implement 24dB varients for the bandpass and notch filter subtypes

* Expanded Modulator Features
   * MSEG
     * Say
     * MOre
     * Here
   * New MIDI Types - breath, expression, sustain
   * Alternate and Random - both bi- and uni-polar - sources
   * Drag and Drop 
     * Drag a Macro to re-order it
     * Ctrl-drag any modulation source to a slider to open the modulation typein
   * MIDI controller smoothing has several models, in the "MIDI" menu, which
     increase the responsiveness (at cost of smoothness) for midi control inputs.
   
* Effects
   * Integrate about 50 Airwindows effects (from https://github.com/airwindows/airwindows). Thanks to Airwindows
     for providing high quality open source effects we could integrate.
   * Add a controllable number of phaser stages
   * Vocoder can work on stereo, blended, left, or right inputs
   * Extend Phaser Ringout, allowing for long phaser self oscillations at high feedbak

* FM Synthesis
  * The FM3 modulator can be extended allowing ratios from 1/32 to 32
  * (more here soon)
  
* Other Sound Design Tools
  * Fix a bug which picked the wrong step when start and end step were the same in the step sequencer
  * LFO Amplitude can be extended into negative ranges
  * "Temposync All Params" available in the AEG and FEG.
  * Display PitchBend as a bipolar modulator on sliders
  * Fix problems with very long running LFOs drifting due to truncation errors
  * Allow scrub (deactivated rate) mode on Step Sequencers to trigger envelopes still
  * WaveShaper drive is Extendible
  * Default polyphony set to 16.
  * Exclusive and Multi-solo both implemented.
  * Expand WT format to allow 16-bit-full-range .wt files
  * The "Show Tuning" display contains Interval Matrices
  * The global high pass filter can be deactivated

* Content
  * New Patches from @VinceyZed
  * New Patches from OSC136 link 
  * Add Carlos-Morrison CET Microtunings to the Factory Tuning Library
  
* Skin Engine
  * Colors are types with names used consistently
   * Begin restoring PNG support
  * Skin Engine can change overall window size
  
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
  * Step Sequencer shows position in scrub / deactivated rate mode
  * Mod assign mode is sticky when switching modulators
  * Innumerable tweaks and cleanups to both skins
  * The text entry box is no longer an external box for many prompts
  * Add "Clear Midi Settings" function
  * Fix a VSTGUI Routing Bar Aliasing problem on Windows
  * Implement "elastic" mode - move a slider with Alt+mouse and it will snap back to starting point on release
  
* Plugins
  * VST2 and VST3 advertise param name changes to the host
  * If the audio loop isn't running, plugins show idle error when patches won't load
  
* Infrastructure and Code Quality
  * build-linux now works with ARM
  * Fix VSTGUI issue with linux and mouse motion dropping modifiers
  * Add several libraries which were not explicitly linked on linux
  * Allow the tarball to build and collect version info in the absence of a git checkout
  * Parallel, Debug, and mult-generator CMake builds all work on all platforms
  * Enumerate linux library dependencies on all items (xcb-keypress, etc)
  
  
