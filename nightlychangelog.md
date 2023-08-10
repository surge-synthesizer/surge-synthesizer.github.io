---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

# Nightly headed to 1.3 change log

We plan to release Surge XT 1.3 sometime in mid/late autumn 2023.

This is up to date as of Aug 10 / aad142fbe46def895b89aae0bf009733221ca357

## Open Sound Control
- Surge adds a complete open sound control implementation. For more information, see *what??*

## A CLI / True-Headless Synth
- we added a pure CLI/No GUI version of the surge synthesizer for total headless playback
- surge-xt-cli (on linux), the cli executable in the standalone bundle (mac). Windows users must
  download separately

## New Effects: Bonsai and Audio In
- Write this

## DSP Additions and Changes
- The Digital Ring Modulator (RM1x2 and 2x3 in the mixer) gains a large number
  alternate combinator modes.
- FM3 M3 frequency extendable down to 0.5 hz
- Oscillator initialization ignored the octave setting. This caused a very small initial
  gliss in the String and (in some cases) modern oscillator. Correct this to remove the
  gliss
- Sin, FM2, and FM3 get a 'vintage feedback' mode (right mouse the Feedback slider) using a
  longer feedback window for slightly smoother feedback results.

## Tuning-related changes
- The tuning editor gets two new visualizations. The "True Keys" mode shows actual keys depressed and the 
  interval betwene them. The "Radial" mode changes to "Polar" with both a "Radial" and "Angular" mode.
- The tuning editor converts into a tuning analyzer in MTS-ESP mode, showing the new True Keys mode against
  MTS-ESP sources
  

## MIDI and Performance Changes
- Support MIDI learn on all channels by channel
- Disallow learn on reserved MIDI CCs
- Dual scene mode in MPE and Latch-with-23-routing-off mis-released voices,
  leaving the non-active scene playing on release. Correct

## Other Changes
- Patch Save Factoriy Overwrite available with shift-alt-click
- Clap Parameter Menus work
- Clap remote-control pages get an initial implementation
- CLAP polymod works properly with per-channel and per-key polyphonic modulation, whereas
  previously it just worked per note
- Standalones with a non-null playhead still ignore it and use the standalone tempo
- Show input latency when block sizes are not power of 32 on the audio-input oscillator and FX
- Use built-in windows for all alerts and notifications, no longer using the JUCE generic alert
- XY drags in the filter window send VST automation events as well as modifying the filter
- Multuple virtual keyboard layouts
- Remove an unused button from the keyboard shortcuts editor which mis-read with screen readers
- Limit wavetable load dialog to .wav and .wt only
- Hide custom menu icons when menus are in accessible-expansion mode
- FX Swap with drag and drop participates in undo
- Add an unassigned-by-default but bindable key for random patch action
- Fix a problem with the use of bold fonts in menus which mis-render menu headers in some macOS situations
- You can mute an entire scene with the scene volume parameter
- Disconnecting from MTS-ESP in a single instance is stored in the DAW state
- The Standalone application works in FullScreen mode. Choose "Zoom/Enter Full Screen" to try.
- The Oscillator Display uses the half rate filter to show the waveform, which shows a
  more accurate waveform in a couple of (high noise FM) cases.


## Code Factoring and Quality
- A large number of efforts went to moving code from surge into libraries shared between
  surge and shortcircuit including:
  - moving many effects to the sst-effects library
  - moving fundamental operators to the sst-basic-blocks library
  - each of these moves included code improvements of various forms
- With JUCE 7, remove the modibund per-type class extensions
- The entire code base has uniform file comments and header guards
- Centralize our locale based formatting using the libfmt locale
- Remove some uses of `shared_ptr<T[]>` which dont work with the VCV Rack build environment
- Make sure we properly obey `__restrict` on gcc
- Consistently use `uses_wavetable` for all queries about wavetable usage
- Fix an assumption about parameter layout in FXStorage
- Fix a collection of typos across the code comments

## Infrastructure
- Upgrade to JUCE 7.0.5 (plus a couple of accesibility patches)
- Remove the LV2 from the binary distribution
- Tweak our CI/Azure strategy to improve time from commit to nightly
- Innclude the mistakenly unincluded for gcc13
- Surge builds on RPI on 64 bit OS but not 32; fail the 32 bit raspberry pi build earlier
- Expand documentation about polypohnic modulation, about raspberry pi, and others
- Move to catchv3; enable CTest
- Improve unit test runtimes
- Move windows production compiler to CLang
- Move minimum CMake version to 21
- Move macOS notarization from altool to notarytoool
- Consistently build for macOS 10.9 across all sub-modules
- Fix compile on Clang 15 on macOS


