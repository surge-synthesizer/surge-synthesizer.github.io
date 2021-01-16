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

We have hundreds of changes and features, but the headlines of the 1.8 release are:

* New skins, including the lovely "Royal Surge" skin and greatly improved Classic and Dark skins
* New filters, with multiple new filter models
* A complete implementation of a multi-segment envelope generator (MSEG) as a modulation source
* A large number of Airwindows FX available in the FX chain

The complete changelog as of commit 7667ce744a (Jan 13th 2021) is:

* New and Improved Skins
   * Added the 'Royal Surge' skin, a skin inspired by vintage hardware, developed and designed
     by [Voger Design](https://vogerdesign.com).
   * Major updates to the Classic and Dark surge skin, including better placement of controls, rendering,
     contrast, and consistency.
   * See "Skin Engine" section below for more technical details on the skinning engine
   
* Filters
   * Added "Vintage Ladders", two models of vintage 4-pole lowpass ladder filters
        Thanks to [@ddiakopoulos](https://github.com/ddiakopoulos) for maintaing this very
        useful [repository of research and code](https://github.com/ddiakopoulos/MoogLadders) which
        heavily informed the models we implemented
   * Added the filter from [OB-Xd](https://github.com/reales/OB-Xd)
   * Added the K-35 filter from [Odin 2](https://github.com/TheWaveWarden/odin2)
   * Added the Diode Ladder filter from [Odin 2](https://github.com/TheWaveWarden/odin2)
   * Added Cutoff Warp filters (LP/BP/HP/N/AP) based on [this Jatin Chowdhury Blog Post](https://jatinchowdhury18.medium.com/complex-nonlinearities-episode-5-nonlinear-feedback-filters-115e65fc0402). This one is really weird!
   * Added Resonance Warp filters (LP/BP/HP/N/AP) based on [this Jatin Chowdhury Blog Post](https://jatinchowdhury18.medium.com/complex-nonlinearities-episode-4-nonlinear-biquad-filters-ae6b3f23cb0e)
   * Implemented 24 dB/oct variants for the existing biquad bandpass and notch filter types
   * Add an allpass biquad filter based on existing biquad filters in Surge
   * Fixed an error in the comb filter which made it out of tune by 6 samples. By default
     this is corrected in new sessions or patches streamed with Surge 1.8, but it can be also toggled by right-clicking the filter
     subtype menu. Old patches remain "wrong" in order to preserve how your existing projects sound
   * Overhauled the filter type menu, filters are now grouped by their function

* Expanded Modulator Features and Fixes
   * Multi-Segment Envelope Generator (MSEG)
     * Implemented a fully editable MSEG modulation source, with a large number of curve types and various editing options
     * To use the MSEG, select a voice or scene LFO, choose the MSEG LFO type (bottommost row, first icon) and click on the LFO display, or the pencil button to the right
     * Extended features for a segment are available on the right click context menu
     * Currently, MSEG supports up to 128 nodes, and the maximum length of the MSEG is 128 phase units (duration of a single phase unit is determined by the LFO Rate parameter)
   * LFO modulator presets - users can save and share single LFO modulator settings
   * New MIDI controller modulators: Breath, Expression, Sustain pedal
   * New per-voice modulators: Alternate and Random (both unipolar and bipolar)
   * New scene modulators: Lowest Key, Highest Key, Latest Key
   * Drag and Drop
     * Drag a Macro slot around to reorder it
     * Ctrl-drag any modulation source onto a slider in order to open an edit dialog for typing in a modulation amount
   * Added several MIDI controller smoothing modes in the MIDI Settings menu, which
     increase the responsiveness (at cost of smoothness) for MIDI CCs, aftertouch, etc.
   * MPE Aftertouch and Timbre are now properly smoothed; MPE Pitch Bend has independent
     smoothing settings.
   * Deactivated rate LFO modulators show their waveform over which you can scrub using the Phase slider
   * LFO Freerun trigger mode now has correct relation to song position pointer when not synced to tempo
   * LFO Deform slider now has several different modes for Sine, Triangle, Sawtooth and Envelope LFO types


* Effects
   * Integrated 59 [Airwindows effects](https://github.com/airwindows/airwindows). Thanks to Airwindows
     for providing high quality open source effects!
   * Effects can be reordered via drag and drop, copied to another slot via Ctrl/Cmd+drag and drop, or replaced via Shift+drag and drop
   * Phaser effect now has an adjustable number of stages (up to 16), with adjustable spread and distribution of stages (except in legacy setting)
   * Extended phaser ringout time, allowing for long self-oscillations at high feedback
   * Vocoder modulator signal can now be chosen between stereo, monosum, left, or right input
   * Disabling an effect (loading the "off" preset) now removes any leftover modulation
   * Individual bands of the EQ can now be deacivated by right-clicking the Gain sliders and choosing Deactivate

* SurgeEffectsBank
   * SurgeEffectsBank is now part of the main Surge source tree
   * Implemented the new Airwindows effects
  
* Voice Management
   * Added note priority modes for monophonic play modes: latest, highest, lowest or legacy (note ons have latest note priority, note offs have highest note priority)
   * Added a mode where sustain pedal in mono mode allows retriggering older notes that are still held, on note release
   * Add even more extensive regression tests for voice management modes

* Other Sound Design Tools
  * FM3 Oscillator
     * M1/2/3 can now be extended allowing ratios from 1/32 to 32
     * M1/2 can now be set to a ratio or an absolute frequency 
  * Fixed a bug in step sequencer LFO mode which picked the wrong step when start and end were the same
  * LFO Amplitude can be extended into negative ranges
  * "Tempo-sync All Parameters" available for filter and amp envelopes
  * Display Pitch Bend as a bipolar modulator on sliders
  * Fixed problems with very long-running LFOs drifting due to truncation errors
  * Allow scrubbing (when LFO Rate is deactivated) on step sequencers to trigger envelopes
  * Waveshaper drive can now be extended to have twice as much gain as before (+/- 48 dB)
  * Default scene polyphony is now set to 16
  * Solo buttons in the mixer now allow multiple active solos by default (Ctrl/Cmd+click for the old exclusive solo behavior)
  * Mute buttons in the mixer behave the same way as Solo buttons now, with exclusive mute behavior on Ctrl/Cmd+click
  * Expanded .wt file format to support 16-bit full-range files - this also means compatibility with wavetables from Bitwig Studio's Wavetable device!
  * "Show Current Tuning Information" now contains interval matrices
  * Post-amplifier highpass filter can now be deactivated (right-click the HP slider)
  * Global hard clipping of the scene output can now be disabled in Scene Volume context menu
  * Scene pitch and pitch bend now work properly with non-keytracked oscillators
  * Fixed a tuning error with partially mapped long scales
  * Oscillator FM routing modes with only Ring 1x2 mixer channel active now work properly (previously this wasn't evaluated so it resulted in clicks)
  * Renamed Classic oscillator Width parameters (manual contains a more detailed explanation)

* Content
  * Fixed tuning of Flute 1/2 factory patches
  * New patches from Vincent Zauhar
  * New patches from David Bata
  * New patches and wavetables from Damon Armani - see Damon's [Preview](https://www.youtube.com/watch?v=7uqG14NfxyE) and [Full Demo](https://www.youtube.com/watch?v=bnZ7YLWdP2U)
  * New wavetables from Venus Theory
  * New and corrected patches from Inigo Kennedy
  * New patches from Kyurumi
  * New patches from Jacky Ligon
  * New patches from The Nerdy Music Guy
  * New patches from Luna
  * New FX presets from Arty
  * Add Carlos-Morrison CET microtunings to the factory tuning library

* Skin Engine
  * User-side:
    * Complete set of tutorial skins showing many features of the skin engine,
      which automatically generate [skin engine documentation](https://surge-synthesizer.github.io/skin-manual.html)
    * Skin inspector (Menu > Skins) shows the state of the currently loaded skin and information about colors and assets
    * Classic and Dark skins are now available as Figma templates. Please ask on our [Discord #design channel](https://discord.gg/aFQDdMV) if you are 
      interested in using Figma to design and work with skins!
  * Developer-side:
    * Internal C++ data model fully represents the skin as objects and is overrideable by XML
    * Support for scalable PNG or SVG for all assets
    * Support for fixed enumerated zooms if a skin designer desires (mainly useful for PNG-based skins)
    * Support for changing overall window size
    * Support for hiding any component
    * Support for grouping controls into panels
    * Improved nanoSVG parser with support for certain SVG features

* UI/UX
  * You can drag and drop .wav, .wt, .scl, .kbm and .fxp files onto any part of Surge's GUI and they will be loaded
  * Consistently implemented our new logo
  * Large number of contrast, color, and positioning tweaks, including a complete re-render of Classic and Dark skins
  * Text input dialogs are no longer OS-based, instead they are internal to Surge, created with VSTGUI
  * Store Patch dialog is now consistently designed with other internal dialogs in Surge
  * Fixed VST3 zoom inconsistencies which caused problems in Cubase, FL20, and other hosts
  * New "Add Modulation From..." menu entry for modulatable parameters, which opens a dialog for a direct modulation assignment from one of available and valid modulators for the target
  * Hovering over sliders shows which modulation sources are applied to them
  * Direct assignment of MIDI CCs to parameters via context menu, mirroring the same facility Macros have
  * Modified the design of Edit Modulation dialog to avoid text overflows
  * Unique FX grid icons for each effect type
  * Implemented dropdown menu widget which can replace sliders for discrete (integer) parameters
  * Allow loading FXP patches from file (use "Load patch from file..." option in patch browser context menu)
  * Allow patch browser to rapidly open user and data folders (shouldn't crash anymore on receiving rapid MIDI Program Change messages)
  * Save FX presets to unique subfolders per FX
  * Step Sequencer shows position in deactivated LFO Rate mode (when scrubbing the sequencer position with the Phase/Shuffle parameter)
  * Modulation assign mode now stays active when selecting another modulator (previously it would deactivate)
  * Added "Clear MIDI Settings" function (Menu > MIDI Settings)
  * Fixed a VSTGUI bug which caused artificial hover events at zoom levels other than 100% on Windows
  * Fixed a VSTGUI aliasing problem with modulation assign buttons on Windows
  * Activated non-integral mode consistently on Linux, improving drawing quality for all assets and working around an inconsistency in VSTGUI
  * Implemented "elastic" slider editing mode - move a slider while holding Alt/Option, and it will snap back to where it was when releasing the mouse button. Useful for quick auditioning of parameter changes without committing them
  * LFO Amplitude now properly quantizes to integer percent units when holding Ctrl/Cmd
  * Currently selected modulator is preserved as scenes switch
  * Completely redesigned the About screen, added more credits and links to relevant places
  * Version info in About screen can now be copied to system clipboard by clicking on Copy Version Info
  * Vastly improved cursor hiding behavior on Windows, plus cursor hiding is now available on macOS!
  * Mousweheel click, forward and backward buttons (buttons 3/4/5 on mice that have them) can now arm modulation from any part of the UI
  * Mousewheel works on nearly every element (the FX preset menu is the only one left)
  * Widget hover state now correctly survives UI rebuids
  * SVG renderer now supports opacity in paths, not just fills
  * Improved the look and feel (and code clarity) of the VU meter
  * Skinnable VU meter with gradient bars
  * We now warn Windows users if Lato font is not installed
  * Linux menus open in a way far less likely to occlude their parents
  * The main menu can be opened by right-clicking on any non-active region of the UI
  * As a consequence of the main menu being available anywhere on the GUI, removed the "zoom level too large for your display" check and error dialog
  * Allow deeply nested menus in the FX preset and Oscillator type menus - currently only used in the FX menu
  * Skinnable 'dots' on the Oscillator and LFO display, following the design of Royal Surge skin
  * Fixed wavetable name not being included in oscillator/scene copy-paste operations

* Plugins
  * VST2 and VST3 now advertise parameter name changes to the host
  * If the audio engine isn't running, plugins show idle error when patches won't load
  * Menus, typeins, and other controls now properly send automation change messages
  * Simultaneous automation of any number of parameters now correctly update the UI (previously more than
    8 simultanously automated parameters would leave the UI state incorrect).
  * Modify the threading pattern in the VST3 when loading patches to allow frequent automated patch changes without a crash
  * VST3 correctly supports the 'parameterNormalized' API, which is used extensively in Ardour for automation

* Python API
  * Surge now exposes a complete Python API to fully program and manipulate the synth inside Python programs and Jupyter notebooks
  * You can see a set of example notebooks in [this repo](https://github.com/surge-synthesizer/surge-python)

* Infrastructure, Bugfixess and Code Quality
  * Surge is now a macOS fat binary (x86/Apple Silicon) 
  * build-linux now works with ARM
  * Removed a collection of specious `_asm` blocks
  * Fixed a VSTGUI issue with Linux and mouse motion dropping modifiers
  * Added several libraries which were not explicitly linked on Linux
  * Allowed the tarball and code to build and collect version info in the absence of a git checkout
  * Parallel, Debug, and multi-generator CMake builds now work on all platforms
  * Enumerate Linux library dependencies on all items (xcb-keypress etc.)
  * Implemented proper Unicode filename support everywhere
  * Made our CMake file more modular for various library and test inclusions
  * We now show the install location at the last step of the Windows installer
  * Replaced CriticalSection.cpp with `std::mutex`
  * A far more complete implementation of `std::filesystem` for systems which don't have it (basically, macOS versions before 10.15)
  * Refactored our CMake implementation so that shared code is compiled into static libraries
  * Revamped the mechanism by which Surge internal IDs and Surge plugin IDs are mapped, allowing us a much easier
    future expansion of the parameter set (sctual parameter set expansion is coming in 1.9!)
  * LFO and S&H noise oscillators now have independent random number generators, avoiding problems with global seeds
  * Consistently use constants for scenes, oscillators and so on, rather than magic numbers "2" and "3" and so on
  * Purged unused/obsolete graphical assets from the codebase
  * Turned on "warnings are errors" on all platforms
  * Correctly set macro values on patch load by calling 'init()' rather than 'set_target()'
  * Fix some edge case threading problems which were exposed in high stress (rapid FX swap or rapid VST3 preset reset) cases
  
