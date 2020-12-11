---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

## Draft Changelog for 1.8

Surge 1.8 is planned for January 2021. In 1.8, we have introduced many new features,
but also adapted a large collection of existing open source code to work
inside Surge. We are especially grateful to these authors (noted in the changelog)
for making their software available, for being friendly when we talked to them about
adapting their software for Surge, and for being part of the free and open source
music software community!

As of commit 05eec855d78ddb (December 9th 2020), here's what's new:

* Filters
   * Added "Vintage Ladders", two models of vintage 4-pole lowpass ladder filters
        Thanks to [@ddiakopoulos](https://github.com/ddiakopoulos) for maintaing this very
        useful [repository of research and code](https://github.com/ddiakopoulos/MoogLadders) which
        heavily informed the models we implemented
   * Added the filter from [OB-Xd](https://github.com/reales/OB-Xd)
   * Added the K-35 filter from [Odin 2](https://github.com/TheWaveWarden/odin2)
   * Added the Diode Ladder filter from [Odin 2](https://github.com/TheWaveWarden/odin2)
   * Added non-linear feedback filters (LP/BP/HP/N/AP) based on [this Jatin Chowdhury Blog Post](https://jatinchowdhury18.medium.com/complex-nonlinearities-episode-5-nonlinear-feedback-filters-115e65fc0402). This one is really weird!
   * Added non-linear stages filters (LP/BP/HP/N/AP) based on [this Jatin Chowdhury Blog Post](https://jatinchowdhury18.medium.com/complex-nonlinearities-episode-4-nonlinear-biquad-filters-ae6b3f23cb0e)
   * Implemented 24 dB/oct variants for the existing biquad bandpass and notch filter types
   * Add an allpass biquad filter based on existing biquad filters in Surge
   * Fixed an error in the comb filter which led it to be out of tune by 6 samples. By default
     this is corrected in new sessions or patches streamed with Surge 1.8, but it can be also toggled by right-clicking the filter
     subtype menu. Old patches remain "wrong" in order to preserve how your existing projects sound
   * Overhauled the filter type menu, grouping filters by their function

* Expanded Modulator Features and Fixes
   * MSEG
     * We have implemented a complete editable MSEG as a modulation source, with a large number
       of curve types and editor options.
     * To use the MSEG, select a voice or scene LFO, pick the MSEG modulator type (the multi point
       envelope in the bottom row) and click on the waveform.
     * Documentation on the editor is forthcoming, but most features work in a platform-natural
       fashion including edit (click and drag), add (double click), zoom (mouse/pinch), delete (double-click)
       and more.
     * Extended features on all components are available on the right mouse menu for a segment.
   * LFO modulator presets - users can save and share single LFO modulator settings
   * New MIDI controller modulators: Breath, Expression, Sustain pedal
   * New per-voice modulators: Alternate and Random (both unipolar and bipolar)
   * Drag and Drop
     * Drag a Macro slot around to reorder it
     * Ctrl-drag any modulation source onto a slider in order to open a dialog for typing in a modulation amount
   * Added several MIDI controller smoothing modes in the MIDI Settings menu, which
     increase the responsiveness (at cost of smoothness) for MIDI CCs, aftertouch, etc.
   * MPE Aftertouch and Timbre are now properly smoothed; MPE Pitch Bend has independent
     smoothing settings.
   * Deactivated rate LFO modulators show their waveform over which you can scrub using the Phase slider
   * LFO Freerun trigger mode now has correct relation to song position pointer when not synced to tempo
   * LFO Deform slider now has several different modes for sine, triangle, sawtooth and envelope LFO types


* Effects
   * Integrated 59 [Airwindows effects](https://github.com/airwindows/airwindows). Thanks to Airwindows
     for providing high quality open source effects!
   * Effects can be reordered via drag and drop, copied to another slot via Ctrl/Cmd+drag and drop, or replaced via Shift+drag and drop
   * Phaser effect now has an adjustable number of stages (up to 16), with spread and distribution (except in legacy setting)
   * Extended phaser ringout time, allowing for long self-oscillations at high feedback
   * Vocoder modulator signal can now be chosen between stereo, monosum, left, or right input
   * Disabling an effect (loading the "off" preset) now removes any leftover modulation
   * Individual bands of the EQ can now be deacivated by right-clicking the Gain sliders and choosing Deactivate

* SurgeEffectsBank
   * SurgeEffectsBank is now part of the main Surge source tree
   * Implemented the new Airwindows effects
  
* Voice Management
   * Added note priority modes for monophonic play modes: latest, highest, lowest or legacy (note ons latest, note offs highest)
   * Added a mode where sustain pedal in mono mode allows retriggering older still held notes on note release
   * Add even more extensive regression tests for voice management modes

* Other Sound Design Tools
  * FM3 Oscillator
     * M1/2/3 can now be extended allowing ratios from 1/32 to 32
     * M1/2/3 can be set to a ratio or an absolute frequency 
  * Fixed a bug in step sequencer LFO mode which picked the wrong step when start and end were the same
  * LFO Amplitude can be extended into negative ranges
  * "Tempo-sync All Parameters" available for filter and amp envelopes
  * Display Pitch Bend as a bipolar modulator on sliders
  * Fixed problems with very long-running LFOs drifting due to truncation errors
  * Allow scrubbing (when LFO Rate is deactivated) on step sequencers to trigger envelopes
  * Waveshaper drive can now be extended
  * Default scene polyphony is now set to 16
  * Solo buttons in the mixer now allow multiple active solos by default (Ctrl/Cmd+click for the old exclusive solo behavior)
  * Mute buttons in the mixer inherited the exclusive mute behavior on Ctrl/Cmd+click
  * Expand .wt file format to support 16-bit full-range files
  * "Show Current Tuning Information" now contains interval matrices
  * Post-amplifier highpass filter can now be deactivated (right-click the HP slider)
  * You can bypass the global hardclip in the Global Volume RMB menu
  * Scene pitch, Pitch bend, and so on work with non-keytracked oscillators
  * Fix a tuning error with partially-mapped long scales
  * Moving oscillator sync state off of zero no longer clicks
  * Name oscillator parameters more consistently

* Content
  * New patches from Vincent Zauhar
  * Add Carlos-Morrison CET microtunings to the factory tuning library

* Skin Engine
  * User-side:
    * Complete set of tutorial skins showing many features of the skin engine,
      which automatically generate [skin engine documentation](https://surge-synthesizer.github.io/skin-manual.html)
    * Skin inspector (Menu > Skins) shows the state of the currently loaded skin and information about colors and assets
  * Developer-side:
    * Internal C++ data model fully represents the skin as objects and is overrideable by XML
    * Support for scalable PNG or SVG for all assets
    * Support for fixed enumerated zooms if a skin designer desires (mainly useful for PNG-based skins)
    * Support for changing overall window size
    * Support for hiding any component
    * Support for grouping controls into panels
    * Improved nanoSVG parser with support for certain SVG features

* UI
  * A large number of contrast, color, and positioning tweaks, including a complete re-render of
    the classic and dark skins.
  * Fix VST3 zoom inconsistencies which caused problems in Cubase, FL20, and other hosts
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
  * Updated and improved About screen, including option to copy settings to clipboard
  * SVG renderer supports opacity in paths, not just fills
  * Fix a VSTGUI bug which caused artificial hover events in zoomed windows UIs
  * The "Store Patch" dialog is consistent with other internal dialogs
  * Activate NonIntegral mode consistently on linux, improving drawing quality in all assets and working around an
    inconsistency in VSTGUI.
  * MouseWheel works on nearly every element (the FX selector is the only one we couldn't get in 1.8)
  * Warn windows users if Lato font is not installed
  * Improve the look and feel (and code clarity) of the VU meter

* Plugins
  * VST2 and VST3 advertise param name changes to the host
  * If the audio loop isn't running, plugins show idle error when patches won't load
  * Menus, Typeins, and other controls in the AU and VST3 send automation change messages
  * Simultaneous automation of any number of parameters updates the UI (previously more than
    8 simultanous automations would leave the UI state incorrect).

* Infrastructure and Code Quality
  * Surge is a macOS fat binary (x86/Apple Silicon) 
  * build-linux now works with ARM
  * Remove a collection of specious _asm blocks
  * Fix VSTGUI issue with linux and mouse motion dropping modifiers
  * Add several libraries which were not explicitly linked on linux
  * Allow the tarball and code to build and collect version info in the absence of a git checkout
  * Parallel, Debug, and mult-generator CMake builds all work on all platforms
  * Enumerate linux library dependencies on all items (xcb-keypress, etc)
  * Implement proper unicode filename support across synth
  * Make our CMake file more modular for various library and test inclusion
  * Show the install location at the culmination of the windows installer operation
  * Replace CriticalSection with `std::mutex`
  * A far more complete implementation of `std::filesystem` for systems which don't have it (macOS < 10.15 basically)
  * Refactor our CMake implementation so shared code is compiled into static libraries
  * Revamp the mechanism by which Surge internal IDs and Surge plugin IDs are mapped, allowing an easier
    future expansion of the parameter set (Actual parameter set expansion coming in 1.9).
  * LFO and S&H oscillator have independent RNGs, avoiding problem with global seeds
  * Consistently use constants for scenes, oscillators, etc... rather than "2" and "3" and so on
  * use std::random / per-object RNGs rather than global rand() in appropriate locations
  * Purge un-used graphical assets from the code base
  * Turn on "warnings are errors" all platforms
  
