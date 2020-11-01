---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

## Draft Changelog for 1.8.0

1.8.0 is planned for Jan 2021. In 1.8.0, we introduced many new original
features, but also adapted a large collection of existing open source code to work
inside Surge. We are especially grateful to these authors (noted in the changelog)
for making their software available, for being friendly when we talked to them about
adapting their software for Surge, and for being part of the Free and Open Source
music software community!

As of commit 8e03ba0b here's what's there:

* Filters
   * Added "Vintage Ladders", 2 models of vintage 4 stage feedback low pass ladder filters.
        Thanks to [@ddiakopoulos](https://github.com/ddiakopoulos) for maintaing this very
        useful [repo of research and code](https://github.com/ddiakopoulos/MoogLadders) which
        heavily informed the models we implemented.
   * Adapt the filter from [OB-Xd](https://github.com/reales/OB-Xd)
   * Adapt the K-35 filter from [Odin 2](https://github.com/TheWaveWarden/odin2)
   * Adapt the Diode Ladder filter from [Odin 2](https://github.com/TheWaveWarden/odin2)
   * Implement 24dB varients for the bandpass and notch filter subtypes

* Expanded Modulator Features and Fixes
   * MSEG
     * Say
     * More
     * Here
   * New MIDI Types - breath, expression, sustain
   * Alternate and Random - both bi- and uni-polar - sources
   * Drag and Drop
     * Drag a Macro to re-order it
     * Ctrl-drag any modulation source to a slider to open the modulation typein
   * MIDI controller smoothing has several models, in the "MIDI" menu, which
     increase the responsiveness (at cost of smoothness) for midi control inputs.
   * MPE Aftertouch and Timbre are properly smoothed; MPE Pitch Bend has an independent
     smoothing mode.
   * Deactivated-rate modulators show their underlying waveform over which you scrub
   * LFO FreeRun for non-temposynced modulators has the correct relation to songposition
   * LFO Deform has several different deform types on core modulators

* Effects
   * Integrate about 50 Airwindows effects (from https://github.com/airwindows/airwindows). Thanks to Airwindows
     for providing high quality open source effects we could integrate.
   * FX can be re-ordered via Drag and Drop (incomplete)
   * Add a controllable number of phaser stages
   * Vocoder can work on stereo, blended, left, or right inputs
   * Extend Phaser Ringout, allowing for long phaser self oscillations at high feedback

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
  * You can bypass the global hardclip in the Global Volume RMB menu
  * Scene pitch, Pitch bend, and so on work with non-keytracked oscillators

* Content
  * New Patches from Vincent Zauhar
  * New Patches from OSC136 link
  * Add Carlos-Morrison CET Microtunings to the Factory Tuning Library

* Skin Engine - a substantial upgrade
  * Skin User Features
  * Skin Developer Features
    * Internal C++ data model fully represents the skin as objects and is over-ridable by XML
    * Support for scalable PNG or SVG for any asset
    * Complete set of tutorials (still under development)
    * Skin Engine can change overall window size
    * Slightly improve nanoSVG support for Lunacy-exported SVGs
    * A far more robust Skin Inspector (still under development)
    * The Skin Engine can hide any component
    * FONTS maybe - remember to remove this if we yank the feature

* UI
  * A large number of contrast, color, and positioning tweaks
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
  * LFO Amplitude properly quantizes with Control
  * Selected modulator per scene is preserved as scenes switch
  * Version string in About screen can be copied to system clipboard
  * You can drag a wav, wt, scl, kbm or fxp file onto any part of Surge and have it react properly.
  * More rational cursor hiding behavior on windows; plus cursor hiding comes to macOS!
  * Buttons 3/4/5 on mice which support it arms modulation from any part of the UI
  * Widget hover state correctly survives UI rebuids

* Plugins
  * VST2 and VST3 advertise param name changes to the host
  * If the audio loop isn't running, plugins show idle error when patches won't load
  * Menus, Typeins, and other controls in the AU and VST3 send automation change messages
  * Simultaneous automation of any number of parameters updates the UI (previously more than
    8 simultanous automations would leave the UI state incorrect).

* Infrastructure and Code Quality
  * build-linux now works with ARM
  * Fix VSTGUI issue with linux and mouse motion dropping modifiers
  * Add several libraries which were not explicitly linked on linux
  * Allow the tarball and code to build and collect version info in the absence of a git checkout
  * Parallel, Debug, and mult-generator CMake builds all work on all platforms
  * Enumerate linux library dependencies on all items (xcb-keypress, etc)
  * Implement proper unicode filename support across synth
  * Make our CMake file more modular for various library and test inclusion
  * Replace CriticalSection with `std::mutex`
  * A far more complete implementation of `std::filesystem` for systems which don't have it (macOS < 10.15 basically)
  * Refactor our CMake implementation so shared code is compiled into static libraries
  * Revamp the mechanism by which Surge internal IDs and Surge plugin IDs are mapped, allowing an easier
    future expansion of the parameter set (Actual parameter set expansion coming in 1.9).
  * LFO and S&H oscillator have independent RNGs, avoiding problem with global seeds
