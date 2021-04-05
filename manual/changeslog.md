---
title: Changelog
permalink: /changelog/
---

This contains the changelogs for released versions. For the latest developments, we are keeping
a <a href="/nightlychangelog">separate changelog for the nightly which we will sweep
to this page when we release</a>.

- [Changes in version 1.8.1](#changes-in-version-181)
- [Changes in version 1.8.0](#changes-in-version-180)
- [Changes in version 1.7.1](#changes-in-version-171)
- [Changes in version 1.7.0](#changes-in-version-170)
- [Changes in version 1.6.6](#changes-in-version-166)
- [Changes in version 1.6.5](#changes-in-version-165)
- [Changes in version 1.6.4.1](#changes-in-version-1641)
- [Changes in version 1.6.3](#changes-in-version-163)
- [Changes in version 1.6.2.1](#changes-in-version-1621)
- [Changes in version 1.6.2](#changes-in-version-162)
- [Changes in version 1.6.1.1](#changes-in-version-1611)
- [Changes in version 1.6.0](#changes-in-version-160)
- [Changes in version 1.6.0-beta-9](#changes-in-version-160-beta-9)
- [Changes in version 1.6.0-beta-8](#changes-in-version-160-beta-8)
- [Changes in version 1.6.0-beta-7](#changes-in-version-160-beta-7)
- [Changes in version 1.6.0-beta-6](#changes-in-version-160-beta-6)
- [Changes up to version 1.6.0-beta-5](#changes-up-to-version-160-beta-5)

## Changes in version 1.8.1

Version 1.8.1 is a point release to clean up a few bugs we found after 1.8.0 release, to add a few features we simply forgot to code, and 
to update and add content to the installer which people shared after the 1.8.0. release. 

The changes are:

* Bugfixes and Features
   * Handled UTF-16 paths for saving user settings, allowing users on Windows with UTF-16 usernames to update their defaults
   * Drag and drop of a .wav or .wt wavetable doesn't reset oscillator type, if type is set to Window
   * The warning on Windows about uninstalled Lato font shows only once, not once every time the Surge GUI is opened
   * About screen actually mentions Surge Synth Team!
   * About screen on Windows shows "x86" instead of "Intel" for CPU
   * Modulation depth display and typein for tempo synced parameters is implemented now (as opposed to being just nonsense)
   * Subfolders in modulator presets are now listed first, before files
   * Dismissed the value display popup when toggling modulation assign mode on/off
   * Resolved Python with /usr/bin/env on Linux in the build phase
   * Fixed an occasional, but serious crash which would occur on slower machines when rapidly changing patches
   * Reordered and improved the MSEG segment menu
   * Drag and drop FX movement retains assigned modulation
   * Fixed a mis-drawn MSEG hover segment when scrolling horizontally
   * Added an explicit menu setting for touchscreen mode for Windows users (under User Settings->Mouse Behavior)
   * Avoided a floating point underflow which rendered MSEG S-curve deforms incorrectly when Deform was a very small value
   * Failure to load a .wav file will not rename the patch wavetable anymore
   * Fixed a typo which resulted in the Hard waveshaper sounding wrong in Rotary and Distortion effects
   
 * Content
   * Added a bunch of modulator presets
   * High quality versions of all factory wavetables in Basic folder
   * Updated Jacky Ligon's presets with new patches and CPU optimizations
   * Updated TMNG's presets with new patches, CPU optimizations and cleaner wavetables
   * Added wavetables from TNMG
   * Added patches from Stefan Singer (previously known as Stefan Hållèn)
   * Updated a single patch from Luna
   
   
## Changes in version 1.8.0

In version 1.8.0, we have introduced many new features,
but also adapted a large collection of existing open source code to work
inside Surge. We are especially grateful to these authors (noted in the changelog)
for making their software available, for being friendly when we talked to them about
adapting their software for Surge, and for being part of the free and open source
music software community!

1.8 has hundreds of changes and features, but the headlines of the release are:

* New skins, including the lovely "Royal Surge" skin and greatly improved Classic and Dark skins
* New filters, with multiple new filter models
* A complete implementation of a multi-segment envelope generator (MSEG) as a modulation source
* A large number of Airwindows FX available in the FX chain
* A bunch of amazing new content! We now have more than 2000 presets in the library!

The complete changelog is:

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
  

## Changes in version 1.7.1

  So, testing is hard. We're a scrappy rag tag group of volunteers facing an army of
  diverse operating systems, DAWs, environments, build flags, and so on. We're really happy
  that all the new features in 1.7.0 worked! But upon release we found some of the environmental
  stuff didn't, so we did a quick 1.7.1 release which includes the following fixes,
  most of which were cause by us doing a substantial upgrade to our build infrastructure with
  1.7.0. We still have a swath of features planned for the 1.7 series, and expect a 1.7.2 with
  some new features and effects in Autumn 2020.

<ul>
  <li>macOS</li>
  <ul>
    <li>Make the VST3 work in Abelton Live for mac (by doing a blank-signing of the bundle)</li>
    <li>Restore compatability back to OS 10.9 (by building macOS at C++-14 level).</li>
    <li>Change the support file lookup semantic to always use the newest support files</li>
  </ul>
  <li>Linux and FreeBSD</li>
  <ul>
    <li>Activate an Ubuntu-20 Clang-10 build and resolve bugs</li>
    <li>Remove a set of warnings that stop Clang-9 from building, allowing Surge to build on FreeBSD again</li>
  </ul> 
  <li>Windows</li>
  <ul>
    <li>Modify the VST3 zoom failure handler, which would cause an infinite loop in zooms on Studio One in some situations.</li>
    <li>Change our build pipeline so the 64-bit Windows installer installs the 64-bit SurgeEffectsBank</li>
  </ul> 
  <li>All Platforms</li>
  <ul>
    <li>Add greatly improved labels on value menus for filter subtypes and envelope attacks</li>
    <li>Improve error messages for missing skins</li>
    <li>Add a 'Zoom to Default' menu item which zooms to the user default setting</li>
  </ul>
</ul> 

## Changes in version 1.7.0

1.7.0 is a major release done on July 28, 2020.

+ Skin Engine
   + Surge now has a dark skin. Menu > Skins > Surge Dark
   + Surge is now runtime skinnable with swappable assets. Documentation on this skinning engine is
     forthcoming. For now if you want to author a skin, you are probably best to hop onto our Slack!
   + All synth elements in both skins get hover gestures to make the UI more reactive
+ DSP and Synthesis Changes
   + New and Improved Effects
      + Reverb 2, a new reverb based on a network of allpass filters and delays
      + Flanger, a flanger with some extreme tuning and feedback options
      + Ring Modulator, a simulation of an analog ring modulator with a choice of carrier waves based on Surge's Sine oscillator
      + Rotary Speaker effect gets drive, rotor rate (previously it was coupled to existing horn rate), stereo width, and mix parameters.
      + Fixed a phaser issue which caused instability at high modulation rates
      + Fixed a Reverb 1 and 2 problem where the HF/LF damping could become unstable at high modulation values
      + EQ gets a mix parameter, which can result in musically engaging phasing
   + Oscillator Improvements
      + The Sine oscillator becomes a mini-synth
         + Many more quadrant waveforms
         + Unison mode 
         + Extended feedback range and negative feedback, which results in a square-like (rather than saw-like) waveform
         + Built-in low and high cut filters
         + The first 8 sine waveforms are ordered to match the TX-series waveforms
      + Built-in low and high cut filters added to Window, S&H Noise and Audio Input oscillators
      + You can route the output of Scene A into Scene B and mix it with Surge's audio input
      + FM2/3 oscillators get extended feedback range and negative feedback for new instances
   + Other DSP Changes
      + Unison goes up to 16 on all unison oscillators
      + Surge uses the Surge Synth Team's tuning library used in several of our synths for SCL/KBM support
      + Fixed a problem with phase overflow in very long running Sine and FM2/3 oscillators
      + The Sine oscillator and Ring Modulator effect use a high performance approximation for sine/cosine waveforms (lower CPU usage)
      + Fixed a crash with high sync values in the Classic oscillator when set to absolute pitch mode
      + Fixed problems with the ADSR envelope becoming unstable or non-silent in very high or very low DS regimes
+ Modulation and Voice Management Changes
   + Each voice LFO can now trigger filter and amplifier envelopes
   + You can 'deactivate' the LFO rate (right click the Rate slider to see the option in the context menu) which makes the LFO take a 
     constant value at current phase, and makes the Phase slider act like a scrub operator
   + Step Sequencer UI rewrite 
      + Vector rendering
      + Show the actual resulting curve
      + Show value displays, right mouse drag to draw a ramp, quantize to scale length when holding Shift or Shift+Alt (twice the scale length)
   + Substantial improvements to Portamento
      + Added Constant Rate and Constant Time modes
      + Added logarithmic and exponential portamento curves (previously we only had linear)
      + Added a glissando mode (portamento quantizes to scale degrees)
      + Added a mode to retrigger envelopes when crossing scale degrees
      + All these features are available when right-clicking the Portamento slider
   + Capped modulated envelope sustain at 1
   + Fixed a variety of issues with modulation phase which could, in extreme cases, cause glitches and noise
   + Clear FX parameter modulation when changing FX type to avoid unexpected modulations
   + Fixed a variety of situations where, in extreme inter-modulation cases (LFO1->2->3->1 etc.) LFO sources could go unstable.
   + Allow the amplifier and filter envelopes to modulate LFO parameters
+ User Presets and Persistence
   + FX and MIDI mappings have user presets distinct from the patch/DAW stream
   + MIDI mappings are stored in the DAW state for recall
   + You can display the current MIDI mapping from the Menu
+ UI Improvements
   + Every parameter links to context-specific online help
   + Discrete parameters (like filter type or tempo synced LFO rates) can now also be set via the right click context menu
   + Continuous parameters and their modulations can now be adjusted via text input dialog - click on the value readouts in the slider's right click context menu
   + Slider Ctrl-drag is properly quantized for values and for modulations
   + Updated units and display of many values and their modulations
   + LFOs in Envelope or Step Seq modes will be renamed to ENV or SEQ across the board, respectively
   + Labels, checkmarks, and ordering in menus more generally consistent
   + Added Zoom button in the Status panel with more consistent status panel menu behavior
   + Active hover gestures on buttons, sliders, and so on
   + High Precision Value Readout mode (Menu->User Settings) shows more decimals in popups and value input dialogs
   + You can browse FX presets with previous/next buttons, and see the name of the selected preset
   + Inactive sliders are transparent (Win/Mac) or have a hidden handle (Linux). Some sliders can be activated with Activate option in right click context menu
+ OS-specific Improvements
   + Portable installation support on Windows (Surge will look for SurgeData and SurgeUserData folders next to the .dll/.vst3 first)
   + Substantial Linux UI improvements
       + VSTGUI performance patched to substantially improve redraw time
       + VSTGUI menus patched to open in a non-overlapping fashion
       + Activate vector UIs for all components (LFO, Oscillator)
+ Content
   + New patches from Jacky Ligon, many highlighting new features in 1.7
   + New patches from Dan Mauer
   + New patches from Psiome Send
   + Third party patches better organized and classified.
+ ARM Support
   + The synth builds on Linux ARM platforms from source. Following the direction on the
     README you can build and run the LV2 or the VST3 and run them in both armv71 and aarch64
     PI platforms.
+ Plugin Improvements
   + VST3 works reliably on Linux, including Reaper, Carla, Bitwig 3.2 and sample hosts
   + VST3 correctly orders multiple MIDI messages in the same sample chunk
   + Fixed a problem where the VST3 mis-rendered Macro DAW automation in Reaper
   + Added VST3 context menu facility to Macro controls
   + VST2/3 can output scenes to individual plugin outputs, prior to scene effects (not yet implemented in AU or LV2)
   + Fixed a bug with VST3 host menus which would crash Surge in some hosts (especially Bitwig on Linux)
   + AU advertises patch names to Logic Pro
   + LV2 reads screen scaling factors
   + DAW automation names contain scene label and are (mostly) uniquely named
   + VST3 (Windows) properly names MIDI extra parmeters
   + Fixed an error where some hosts in some situations would fail to load Surge patches stored as .vstpreset
+ Minor Changes
   + Set Default Zoom... option now sets the default and the current zoom level
   + Many UI elements renamed to be more consistent across the board
   + Effects now have Init (Dry) and Init (Send) presets, the latter are intended to be used in Send FX slots
   + Fixed a bug which limited modulation on some Scene B modulation sources
   + SVG renderer supports radial gradients
   + Menu labels and capitalizations generally more consistent
   + Limit MIDI learn to sensible controllers
   + Use General MIDI CC names in context menus of Macros
   + Option to choose the octave offset of MIDI note 60 (default is C4, other options are C3 and C5) and it is applied consistently across the board
   + Developer Options menu is available on right click of the Menu
   + Cursor hiding is a togglable option on Windows
   + When reappearing from being hidden, mouse cursor is restored to the position from which the drag was started
   + Scrollwheel works on LFO type parameter
   + Parameter value popup no longer clips or draws offscreen
   + Popup prompts have titles and directions
   + You can set default author and default comment which will be automatically applied to the patches you save
   + Fixed a bug which caused the cursor to disappear on Windows when renaming a Macro
   + Show an error when loading an .fxp file from a synth other than Surge
   + Properly callibrate Windows mousewheel to work on integer sliders
   + Fixed a bug where switching a Scene LFO to and from a deformed Step Sequencer could mis-calibrate the LFO rate
+ Infrastructure
   + Moved our entire build system to CMake
   + Fixed a bug where patches could incorrectly stream in international settings with "," as a decimal separator
   + Binaries are now properly licensed FOSS - disabled the VST2 builds
   + Better versioning strategy in various DLLs, plugins, and tools
   + Applied a variety of updates to our deb package
   + Move our Azure pipelines to macOS 10.14 (but still build for 10.12 and higher)
   + Tightened up some unit test thresholds to make them more reliable
   + Removed a large number of code warnings
   + Increased warnings-as-errors on macOS and squashed several warnings
   + The nightly deb installer starts version number with 9. instead of 0.
   + Renamed all 'master' code branches to 'main'.
   + Added a more correct copyright statement to each of the code files.

## Changes in version 1.6.6

Version 1.6.6 fixes several bugs and adds a few key features. We released so quickly after 1.6.5 since we want to take a pause on doing regular production releases while we
prepare for a Surge 1.7 release which will include (among other things) a skinning engine to allow designers to adapt 
the UI. As such, this will be our last production release for a little while - perhaps until summer of 2020. Changes in 1.6.6 are

* Audio and Performance Changes
  * Absolute unison mode was both sample rate dependant and incorrectly calibrated. Corrected it so that, at all sample
    rates, a 16 Hz absolute unison is a 16 Hz unison spread.
  * Unison range can now be extended, giving unison spreads up to one octave (pitch) or 192 Hz (absolute).
  * Window Oscillator now supports FM, and is calibrated to use the same FM Depth as FM2/3/Sine oscillators.
  * We initialize modulators before the initial voice start, setting the first modulator value at voice initialization corectly and 
    avoiding a 32 sample "sweep" across a modulator value at voice onset.
  * Fixed two bugs with the sustain pedal; first - sustain on channels 3 and 4 didn't work, and second - pressing a key 
    multiple times while sustain was held would lead to an incorrect state.
  * Fixed a bug with the tuning engine where mappings with root keys far outside of scale ranges gave incorrect results
  * Made the oscillator display constant even in extreme tuning changes
* LV2 Changes
  * The LV2 had incorrectly advertised the identity of its ports. Change to use unique symbols for each port. *Unfortunately this fix will break prior Surge sessions, but those prior sessions inconsistently streamed the synth state in most LV2 hosts*
  * The LV2 didn't advertise all parameter changes leading to a port being unsynchronized. 
* Minor Changes
  * The VST3 (Windows) plugin properly formats the automation display of the CC parameters
  * The FX slots and automation parameters are named more consistently, as are several menus and labels
  * The value popup window popsup on mouse-down not mouse-move on a slider
  * The patch and wavetable menus have refresh options on the popup menu, not just in menu/data and patches
  * Slider mouse behavior in medium and slow works more like classic when over-dragging
  * Added an init patch which assigns a distinct modulator envelope to each OSC
  * Added a regtest that parameter IDs are stable across versions
  * Modify the build pipeline so the linux .deb file has correct ownership on shared assets
  * Stream the Wavetable name into the patch
  * Correct the Open Tuning Library menu on Windows
  * Fixed a bug with opening and closing the VST2 on Linux


## Changes in version 1.6.5

* New Features
   * Added a "Channel Split" mode to split by MIDI channel across scenes, just like the Key Split mode does across the keyboard
   * Several changes to the alternate tuning implementation
      * We have full support for Scala KBM files, including full keyboard
        remapping, scale 0, and frequency 0 selection.
      * The default tuning constant key is MIDI note 60 (261.63 Hz)
      * The scale viewer shows frequencies per key
      * Corrected an error where tuning could interfere with filter cutoffs and delay timings, especially with long scales
   
* Modulation Section
   * When any control is tempo synced, show a beats display as well as time display on the LFO grid (not available on Linux)
   * Tempo sync all controls for an LFO modulator with a single RMB gesture on any syncable control.
   * Added LFO Envelope lanes in the LFO 1 retrigger section. Use Shift-click or right-click on the retrigger section to trigger both the Amp and Filter envelope or just one or the other.
   * Made envelope retrigger work properly for Analog mode envelopes.
   * Chose a more on-theme blue for the step sequencer section, rather than that wierd green.
   * Green line shows how far you have modulated when you modulate a slider. Try it!

* MPE
   * The global pitch bend (on channel 1) no longer double-bends in MPE mode
   * MPE pitch bend state is per instance and saved in the DAW state, so you can use two Surges with MPE bend of 24 and 48 in a single project, if you happen to own  both a Seaboard and a Linnstrument, say.

* VST3
  * Sidechain support is properly supported with a kAux channel, meaning sidechain works in Cubase Pro. Additionally, in Reaper versions > 6.02 the VST3 will properly configure routing for sidechaining when dragged into a track. (For earlier versions see [here](https://www.youtube.com/watch?v=OKR0x_dneYI).)
  * Support VST3 context menus. Right-click on a parameter in VST3 using a DAW that supports this feature and check it out!
  * VST3 automation for macros works.
  * LFO freerun works if transport is not running.
  
* Change the Windows Installation Locations
   * Windows now reads shared content from %PROGRAMDATA% (c:\ProgramData\Surge) and then if missing from %LOCALAPPDATA% 
   * The Windows Installer installes common assets in %PROGRAMDATA%
   * To allow debugging, the About screen on all platforms shows the data paths.
   
* A new collection of third party presets from Dan Mauer.

* Other Workflow and Engine Improvements
  * You can export a wavetable from a patch to a standalone wavetable using the export menu item in the oscillator wavetable selector
  * The Envelopes in analog mode corrected decay behavior and support sustain swells
  * The Digital envelopes in quadritic decay mode work with sustain 0
  * LFO phase is properly modulatable (modulated phase is snapped when an LFO starts and is not modulatable once going)
  * TempoSync was not correctly unstreamed on the Delay effect. 
  * TempoSync in Delay is correctly initialized when first played in a new DAW instance.
  * The AU unstreams zoom properly in Logic Pro
  * The AU allows automation of the "CC" and "Master" parameters properly

* Other UI Improvements
  * Windows Touch devices now work with the Surge UI
  * Fix a problem with a 'spiky' draw of the Square Wave on Windows
  * Several UI elements are higher contrast, several text displays are more consistently formatted
  * Frequency sliders (like Cutoff frequency) show a midi name as well as a frequency in their popups and string displays
  * TempoSync sliders show their status with a little "TS" on the handle.
  * FrameClose in the VST2 called at the appropriate time.
  * VST Names for FX Params are distinct per param
  
* Code Changes
  * Add and activate many unit tests spanning tuning, modulation, and much more
  * Add support for builds with Visual Studio 2019

## Changes in version 1.6.4.1

Versions 1.6.4 and 1.6.4.1 were released late November 2019, with several MPE and effect changes, new content, and some small 
cleanups

* Synth Sound and Behavior
   * Release velocity is now an available modulation source. See [more details here](https://www.youtube.com/watch?v=GnEX-ypuem0)
   * Sustain Pedal in MPE mode was mis-mapped to the wrong channel, leading to it not working in MPE note-per-channel configurations
   * The 'Drive' feature in the distortion effect is extensible
  
* New Content
   * A set of MPE patches for the Linnstrument provided by Roger Linn. [Here's a video of Roger demonstrating them.](https://www.youtube.com/watch?v=T-mKyShEvKg&t=1s)
   * Producer [Damon Armani](http://damon-armani.com) contributed a set of EDM & Dubstep Wavetables and Patches to the 3rd party library.

* Other smaller changes
   * Mouse button shows value of integer and boolean sliders
   * Fix a small repaint bug in the LFO display
   * Handle cases where user folders don't exist
   * Make LFO modulation button state always consistent
   * Better abbreviated names of modulation sources, with consistent case and spelling
   * Failed wav file loads include the name of the file which failed
   * Developer documentation cleanup and unit tests
  
* 1.6.4.1 was a minor release that corrected the installer on macOS Catalina, renamed and completed a couple of the new content packs and fixed two small graphics assets.


## Changes in version 1.6.3

1.6.3 fixes a collection of problems with the VST3 plugin. We are particularly grateful to the team
at Steinberg for providing us a complementary copy of the Cubase DAWs which best exhibited the VST3 bugs
Surge had, and allowed us to resolve the problems.

* VST3 Fixes galore
   * Pitchwheel and Modwheel work VST3/Cubase
   * Resolved bugs in midi mapping, midi learn, and other controller flows
   * Resolve VST3 automation inconsistently updating the Surge UI
   * Support drag-to-zoom in VST3 in hosts which support it (tested in Reaper, FL, Bitwig and Cubase)
   
* Upgraded the distortion effect 
   * Users can select the waveshaper for the drive stage from the set of surge waveshapers
   * The pre- and post- gain can be extended to allow outsized boosts and subsequent extreme distortions
   * Note that some settings of the distortion effect in extended mode can drive Surge well into digital clipping. Be careful!
   
* New patches from Inigo Kennedy

* Several LV2 and Linux changes, including the ability to build a 32 bit linux configuration.

* Deal with some small bugs with wave ordering, invalid waves, menu arrow keys on Linux, and error handling when Surge is mis-installed

## Changes in version 1.6.2.1

1.6.2.1 is a point release fixing a few regressions in 1.6.2 and a few crashes our users noticed when more
people downloaded the synth.

* Fix a long-standing MPE error where channel aftertouch was mis-routed
* Restore the "extended" menu on Oscillator pitch; apply a few other cosmetic menu changes
* Build patch menu correctly when user directory names exactly match factory directory names
* On Linux systems without zenity installed, fail gracefully instead of SEGV
* Apply naming consisntency to wavetables as well as patches

## Changes in version 1.6.2

* Substantial New Features
  * Alternate Tunings
    * Surge supports re-tuning the synthesizer using .scl files
    * .scl files are stored in the DAW state and optionally stored in a patch
    * UI elements to see if tuning is active, to see current tuning, and to reset tuning in place
  * Greatly expanded `.wav` file support and WaveTable Oscillator improvmenets
    * Surge can read `.wav` files on all platforms (linux, mac, and windows) now
    * Surge will recognize `.wav` files which contain a `clm` block to indicate loop size (as used by Serum),
      a `cue` block (as used by various products, including Native Instruments) and a `smpl` block.  *This means that
      all Serum compatible wavetables we have tried now load in surge*
    * Add a `srge` chunk type which allows wav files to advertise surge table sizes other than 2048, and a python script
      to add those chunks to wav files.
    * `.wav` files without loop information are loaded as one-shots
    * Increased the maximum table size to 4096 samples.
    * Drag and drop of .wav files, direct open with the file chooser, and scanning of .wav files in
      ~/Documents/Surge are available
    * The WaveTable and Window Oscillator Morph control shows the table and allow you to snap exactly to a table
  * Important Linux Changes
    * A Linux 64 bit LV2 is now available
    * A Llinux 64 bit VST3 is now available, although VST3 support in Linux is sporadic, and it only fully works in Reaper
    * Resolve problems with mis-animated, crashing, or ghosting menus in the Linux UI; and mis-aligned text fields in Reaper
  * Audio and Patch Creation Changes
    * Oscillator pitch can be set to "Absolute" using the right mouse, making the pitch shift in absolute
      frequency as opposed to relative note space.
    * Temposync Display values use musical values ("1/4 triplet" rather than "2.667 1/16")
    * The SIN oscillator implements FM feedback; and corrects some errors in the FM implementation making
      it respond line an unmodulated FM2 when no feedback or waveshape is applied.
    * The Surge Vocoder adds tunable bands, adjustable band count, and a different set of bands for modulator than carrier.
    * It is possible to copy and paste FX between slots in the FX router
    * For some lower resolution generated wavetables, add side-by-side high resolution ones
  * Oscillator and LFO Displays
    * The Oscillator display and LFO display are both vectorized, eliminating the high-zoom pixelation of prior versions.
    * The LFO display automatically zooms to show the entire envelope; and releases the sampled LFO to show the release stage.
    * Due to a technical limitation in Linux VSTGUI that we are still debugging, these features are only available in the
      Windows and Macintosh build today. Also on some older machines this feature will auto-deactivate if it is too slow; 
      and can be forcibly deactivated with a switch in the menu.
  * The SurgeEffectsBank plugin. 
     * We have wrapped the FX stage of surge as a separate JUCE plugin and generated a VST3
     * This plugin is included in the mac and windows installer.
  * New and Reorganized Content
     * EMU has adapted the CC-0 VSCO Community Edition (https://vis.versilstudios.com/vsco-community.html) as a collection
       of surge wavetables
     * EMU digital and sampled wavetables added in third party wavetables
     * EMU patches added to third party patches
     * Added a few presets by Claes which we found outside the factory distribution
     * Generally reorganized the presets to have more consistent case, name, and folder sturcture.
     * Place content too large for the core distribution on a wiki site and link it through menus in the main menu,
       patch menu, and wavetable menu.
  
* Bug Fixes, Host and DAW changes
  * Parameter automation in the Audio Unit corrected, allowing touch automation of parameters in LogicProX
  * Zoom issues resolved in renoise windows with renoise 3.2 upgrade
  * Zoom issues resolved in reaper linux by using the Linux VST3 rather than VST2
  * Oscillator copy and paste mis-copied dynamic wavetables; fixed
  * Oscillator copy and paste always copied oscillator 1; fixed
  * Automating OSCTYPE as a DAW parameter gives the correct behavior in the UI and the audio engine
  * Automating ENVTYPE as a DAW parameter updates the UI properly
  * Fix VST2 overflow which was stopping plugin from working in QTractor
  * VST3 UI responds properly to automation
  * VST3 shows parameter value strings correctly mac and linux

* Other UI Changes
  * A status area shows MPE and Tuning state, allows it to be edited, and allows the menu to be opened
  * Increased contrast and correctly anti-aliased labels in several parts of the skin
  * VST3 remembers its zoom setting inside a session
  * Linux hosts with zenity installed will see error prompts, rename prompts, and other UI 
    elements available on Mac and Windows
  * Windows mice with 5 buttons can use buttons 4 and 5 (the side buttons) to toggle modulation 
    when over a slider or modulation source
  * The Solo UI accurately renders the state of the mixer, showing the single-solo bus.
  * Fixed a bug where modulation sliders could reset to max when dragged far below min
  * "Chan. AT" renamed "Channel AT"
  * Menu includes feedback and the surge website
  * Double clicking on a metacontrol value resets it to the 0 point
  * Fix a problem with non-integral boxes clipping UI element borders on windows at some zooms
  * The control modulation elements respond more consistently to mouse gestures changing values
  * The zoom menu can directly set a default zoom to any value
  * Saving a project in the DAW remembers the zoom state and MPE state across sessions.
  * Added a status area for MPE and Tuning status display and menus
  * Properly respond to OK/Cancel in the file dialogs in several places
  * A menu links to our additional content page.
  
* Other behavior changes
  * Linux users who create a ~/.Surge directory will use that instead of ~/Documents/Surge; and if no directory
    is present, Surge will create ~/Documents/Surge only if ~/Documents exists.
  * Users can select their own directory for patch and wavetable storage instead of ~/Documents/Surge (although 
    user defaults remain in ~/Documents/Surge)
  * Presets with stored values of metacontrols will load those values rather than resetting to zero.
  
* Code Cleanup 
  * A variety of changes to allow the factoring for VCV Rack to continue
  * The Azure-Pipeline for pull requests is more efficient
  * The linux deb file for the binary image no longer references xcb-util0
  * Use non-deprecated Mac APIs for the critical section code
  * Prior wav/sample code removed.
  * MacOS chooses the Application Support directory based on configuration.xml existence
  * Add a python script to scan all presets for a feature

## Changes in version 1.6.1.1

* Fix two big concerns raised as people used 1.6.0
  * Dynamically allocate wavetable loading memory so that large wavetables no longer crash
    (as fixed below) but small wavetables don't bloat memory on low mem systems.
  * Fix two bugs in the VST3 zoom-dance supression which caused some versions of FL20 on Win to
    misdraw.
* Add new modes to the Sin oscillator by quadrant masking and shifting and pitch doubling.
* Several code-level changes to clean up warnings and make surge-rack easier.
* Version 1.6.1.1 also contains a tiny fix which resolves a crash with re-opening zoomed windows in Logic
  which is not in 1.6.1

## Changes in version 1.6.0

* UI Fixes
  * Fix the 'zoom-dance-on-open' problem where VST2 and 3 would show at 100% then zoom up to your default zoom.
  * Disable zoom in Cakewalk
  * Resolve a problem where the wavetable menu was truncated after selecting an item in some cases
  * Find SVG for live for mac version 9 in default location if the bundle is incorrectly set
* Synth and Effects
  * Rotary speaker temposync supported correctly
  * Midi channel 3 works properly in single scene mode
  * Correct crash for very large wavetables by growing wavetable storage size
  * Correct a mis-mapping in VST3 of global parameters (such as FX 1 Send) to the control set
* Code and other changes
  * Multiple changes to enable the surge-rack project
  * Fix a problem with incorrectly truncated memory for configuration on linux
  * Improve linux vst3 packaging script (but linux vst3 still is non-functional)
  * Move headless windows build to cmake

## Changes in version 1.6.0-beta-9

* Move the entire UI to vector / SVG rendering for elements rather than bitmap 
  rendering. This leads to cleaner pixel accurate zooms at all resolutions.
* Fix a problem with VST3 where pitch-wheel was mis-centered, meaning
  any use of the pitch wheel stuck surge out of tune and some hosts 
  (most notably Fruity Loops 20) were always a half step sharp in VST3.
* UI fixes and features
  * Correct a VST3 Mouse Wheel bug where, at some zoom settings, a mouse wheel
    would move an unrelated control slider.
  * Add user-selectable mouse speed settings allowing consistent speed by slider.
  * Add ability to re-scan all user folders when content has changed.
* Code Cleanups, API changes, and crash fixes
  * Fix a crash when midi program changes selected a patch out of bounds (but
    midi program change support is still inadequate)
  * Variety of code cleanups, including support for a headless build
    completely free of vstgui and vstsdk, and code changes to allow surge to
    build the dsp engine in the VCV Rack environment
  * Fix a variety of small memory and uninitialized errors.
  * Add a python script to dump a surge patch to stdout.
  * Add a File/Open dialog in the UserInteractions namespace.
  * Improved developer documentation on builds, git, and more.

## Changes in version 1.6.0-beta-8

* Fix a major problem in the audio engine where QuadFilterChainState was uninitialized
  occasionally driving the filters unstable resulting in a large audio "Click/Pop" rather than
  sound
* Fixed a memory leak where surge leaked 3 oscillator references on each voice
* Several improvements to the developer-only headless codebase
  * headless can write wav files and read midi files
  * headless can run stress tests
* New Content
  * Several new MPE factory patches 
  * New organ wavetables from layzer
* Other Fixes
  * Wavetable and Window navigation arrows no longer pixelated at high zoom
  * Default XML stream fixed so MPE pitch bend default saves properly
  * HPF default set properly in all the init patches

## Changes in version 1.6.0-beta-7

* VST3 Host
  * The VST3 Host was substantially improved in this version
  * Support note velocity, pitch bend, midi controllers, modulation, and MPE
  * Support DAW automation correctly
  * Show parameter names correctly on Mac
* MPE 
  * Mono voices no longer have stuck or mistuned notes
  * Menu allows setting of mpe pitchbend
  * 5 factory patches in the MPE folder
* Wavetables and Effects
  * Add three wavetable packs from user layzer; "vocals" "PPG" and "morph" 
  * Users can place their own .wt Wavetables in subdirectories in their User Data Folder and see them in the wavetable menu once surge restarts (macOS: "~/Documents/Surge/wavetables")
  * Third party wavetables are now present at Factory Data Folder (macOS: "/Library/Application Support/Surge/wavetables_3rdparty/")
  * Implement a python script to create and explode .wt files
  * Add an "Init" setting for each effect type
  * Take the chorus effects from "Delay/Chorus" and move them to "Chorus"; rename "Delay/Chorus" to "Delay"
* User Interface
  * Fix a problem with flickering in the Effects area
  * Fix elements which would dissapear on Linux in modulation mode
  * Update LFO TempoSync labels to include 1/128 and 1/256th notes
  * Both right and left button show wavetable menus
  * Fix the FM2 labels (it was previosly labeled "FM3")
  * Change WaveTable "Shape" parameter label to "Morph"
  * Set Controller To... -context menu now accurately shows CC#0 - CC#127 and is split by 20s
  * Fix a VST zoom problem where repeated zoom in and out could make the surge "walk" inside the frame
  * About menu now lets you open a Finder / Explorer for "Open User Data Folder" & "Open Factory Data Folder"
  * Make the about screen use Lato font
  * Supress the ctrl-click-reset gesture in LFO (which meant ctrl-click in step sequencer lost changes)
* Other Changes
  * Rename 32 bit surge dll "Surge_x86" on windows to avoid conflicts
  * Move the AU to the same zoom implementation as the VSTs
  * Add a headless app which plays all patches; build it with cmake
  * "OK/Cancel" dialog Linux (unimplemented) defaults to OK, allowing for patch overrides
  * Fix a problem where locales which didn't use "." as a decimal separator could not parse Surge patches
  * Update to developer documentation and some build tools
  
## Changes in version 1.6.0-beta-6

* Fix a major bug with font loading on Windows which would lock resources and hang some systems
* Implement scrollwheel for all slider controls
* Sub-folders for EFX Presets
* Added the Arty Distortion pack (9 distortion preset FX)
* Added the Arty Reverb pack (4 reverb preset FX)
* Added the Arty Delay pack (11 delay preset FX)
* Use Lato on linux as well as mac and win
* Slow down modulation blink time on Linux
* Only Shift is used to do swipe moves on sliders
* Shift-swipe moves dismiss popup properly

## Changes up to version 1.6.0-beta-5

### Platforms

* macOS: 64-bit AudioUnit, VST2, VST3 can be compiled, built and run.
* Windows: 64-bit VST2, VST3 can be compiled, built and run.
* Windows: 32-bit VST2, VST3 can be compiled, built and run.
* Linux: 64-bit VST2 can be compiled, built, and run.
* Packager (as .msi, .dmg/.pkg, and .deb respectively) for all three operating systems

### Presets and Waves

* Sub-folders in patches become sub-categories in menus.
* Certain presets would glitch when multiple notes were played, these clicks and pops no longer happen.
* Drag'n'drop of wavetable (.wt) to now works
* Drag'n'drop of wavefile (.wav) to Surge now shoots an error instead of crashing
* Preset and WaveTable subfolders are now sorted alphabetically instead of randomly.
* Loading of presets works
* Wavetable loading improved (all extensions capitalisation supported: .wt, .WT, .Wt, .wT - no longer only .wt and others ignored)
* Pressing +/- next to Patch will select the next (not the 31th) and the previous patch accurately.
* Pressing +/- next to Category will select the next (not random) and the previous category accurately
* Wavetable Next/Previous arrows work accurately and allow for scanning through each and every wavetable in the wavetables-folder.
* Switching patches no longer crashes
* Storing of patches works - if you write on Name and click on Category - the Name no longer reverts to"previous name". Same with Category, Creator, Comment.
* If you try to overwrite a patch that already exists, you will get an informative prompt to the tone of "this preset x already exists, are you sure?" (Mac and Win).
* You can no longer save a preset with no name.
* You can no longer save a preset into a category with no name.
* Right-clicking on preset name will show all presets in that category.
* Checkmarks added to Category and Preset (showing Category and selected Preset)
* Checkmarks added to Wavetable (showing folder + selected wavetable)

### Zoom

* Surge supports a zoomable UI on all platforms
* You can now use + / -, cmd+ / cmd- to Zoom the interface
* Classic Surge Skin has been re-done to be 1:1 but clearer and higher resolution bitmaps (less pixelation)
* VSTGui Scaling bugs fixed
* Maximum zoom, minimum zoom
* Zoom, resize menu positioning issues fixed for Linux

### Other UI

* LFO Waveform is displayed correctly
* Wavetable is displayed correctly
* All menus are correctly implemented
* Modulation names can be accurately renamed (Mac and Win)
* If you bind more than one parameter into a modulation, and remove the first parameter, the Modulation box updates to the correct parameter-name (Bind Cutoff, Bind Resonance, Remove Cutoff = Modulation box no longer says "Cutoff").
* If you Clear All binds from a Modulation box (Bind Cutoff, Clear All) - the Modulation box updates to "-", no longer stays as "Cutoff" even with no bind.
* Polyphony count was inaccurate and updated only when the area was clicked, now updates in real time.
* Polyphony count does not fluctuate while notes are being played
* Use Lato -font for macOS + Windows
* Umlauts ä/ö/å are correctly displayed in folder names.
* Surge now uses a VST3SDK VSTGUI with additional fixes

### Hosts

* VST2 / AudioUnit automation (bind parameters to DAW) learning works accurately (no longer spews forth a correct parameter and a wrong one)

### New Content

* Added the inigo_kennedy_03 pack (31 presets)
* Added the Nick Moritz pack (85 presets)
* Added the Zoozither 2 pack (40 presets)
* Added the Layzer Vocal pack (32 wavetables)

### Documentation

* New Website created at http://surge-synthesizer.github.io
* 1.6.0 Manual has been converted from PDF to HTML - available at http://surge-synthesizer.github.io/manual

### Other

* Scene Highpass has been set to 6.875Hz instead of the default 50Hz
* Typos fixed: EFX presets used to be called Rhytmic, renamed to Rhythmic
* UTF8 paths supported for wavetables
* No longer crash if installation if faulty, also warn loudly if installation is faulty
* Linux screensize detection sets zoom bounds properly
* More accurate FX sorting and correction of typos in FX names
