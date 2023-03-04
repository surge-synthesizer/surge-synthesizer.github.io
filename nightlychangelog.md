---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

We plan to release Surge 1.2 in spring of 2023. This changelog us updated as of 89a525946a8 / March 3 2023. We also had two
new contriburors in the 1.2 cycle. We welcome new devs on any of our projects!

* Major Feature: Oscilloscope
  * A built-in oscilloscope and spectrograph 

* Major Feature: Tuning Upgrades
  * Surge can act as an OddSound MTS provider ('master') allowing the Surge tuning editor to provide tuning to an entire session.
  * Add yet more edge cases to our internal tuning, including keyboard mapping larger than a scale.

* Major Feature: Accessibility-Targeted Improvements (although these are useful for non-accesiblility-tooled users too!)
  * We added an accesibility menu
  * Accesibility menu has item "set all recommended accessible features" which (basically) turns on all the good stuff if you are 
    a screen reader user.
  * Modulation Editor Focus is improved when adding a modulation
  * Quantized sliders (command-drag) now work with keyboard bindings (command-up/down arrow) symmetrically.
  * You can export a patch to HTML as values for sharing and viewing more quickly.
  * Improve the alias harmonics editor for screen readers, by making it consistent with other controls and overlays.
  * Patch Selector will focus/select the menu for the category of a given patch by default.
  * Improve name invalidation when arrowing through discrete menu parameters.
  * Step Sequencer Steps allow RMB / Typein value
  * Add a keybinding (Alt-0 by default) to announce the state of the synth ui at present.
  * Alt-, and Alt-. don't get stuck in the patch selector any more1

* DSP Changes
  * Noise can be stereo or mono in wide mode, per patch. 

* Plugins and Hosts
  * Correctly implement CLAP_NOTE_CHOKE, so you can choke express in the bitwig drum machine with surge voices! 
  * Allow a more flexible set of I/O mappings, fixing an interaction between a JUCE and Ardour and Surge which could
    silence the VST3 in some situations.
  * Skip the VST3 menu extensions in Reason, where they seem a bit dicey still.
  * Invalidate parameter names on patch change to refresh automation displays.
  * Correct a problem with the virtual keyboard in the CLAP version fo the plugin.


* Minor Changes and Bug Fixes
  * Clean up some lua syntax in formula tutorials  
  * Internal dialog titlebar buttons are consistent on macOS
  * One-frame wavetables had a clamp error which, in certain circumstances, could trigger an assert
    in production builds on ARCH linux and other gcc buidls with runtime checks on in production 
  * Modulation works on Ring Modulator Unison Detune
  * Clamp control smoothers to avoid an infrequent extreme instability under some very rapid (machine generated) changes
  * Replace factory templates with explicitly CC0 licensed factory templates.
  * Add a license field to the save patch dialog.
  * Repaint LFO when automation changes an LFO parameter.
  * Repaint the filter overlay on filter automation.
  * The Modulation List view allows a copy to clipboard.
  * Fix incorrect unstreaming of 'comb filter tunes incorrectly' setting.
  * Add a single entry point for note-matches-channel-key-voice-id allowing the rare case of per-channel polyphonic modulation in CLAP to work
  * FIx a problem which left audio-unused but graphically-incorrect uninitialized extra padding at the end of streamed one-shot wavetables
  * Typeins for toggle values work.
  * Alt-Click on an FX slot clears the slot.
  * Optionally ignore all midi program changes. You probably want to turn this on.
  * Provide an option to scale or not scale additional LFO outputs by amplitude.
  * Add a key binding to initialize patch (unbound by default).
  * Separate the 'is torn out' preference between plugins and standalone versions.


* Futher adopting to VCV Rack (and other non-vst clients of the code).
   * Allow LFO Envelopes at a code level to retrigger from non-zero values 
   * Provide a function to give a frame size to an untagged wav, but don't expose it in the surge UI yet.
   * Allow treemonster to output its pitch and envelope
   * The String Oscillator would leak if an instance was `init()` ed twice. Surge didn't do this but Rack did
   * Add the ability to compile without Airwindows, without SQLLite and without MTS-ESP
   * Update CMake rules for SIMDE and JUCE allowing yet more indirection and choice
   * Add a SurgeConfiguration for creating from non-surge clients
   * Add an option to explicitly skip third party wavetable scans.
   * Correct the Twist LPG optionally and activate the fix in Rack
   
* FX Unit
  * FX Unit handles non-multiple-of-32 block sizes more elegantly
  * Default FX for reverb and delay in FX unit are more usable. 

* Infrastructure
  * Make build on gcc12 on windows; make build with mingw on windows.
  * surge-common can build for RISC-V and WebAssembly 
  * Continue to modernize the C++, moving to proper copy and assignment constructors on core classes rather than memcpy
  * Move many C-style string usages to std::string
  * Build if an external build system adds avx flags to the build.
  * Addpfft as a submodule
  * Python Binding Upgrades
    * Update pybind 11
    * expose mpeEnabled and tuningApplicationMode
    * add build wheels for cibuildwheel
    * make surgepy and installable python package
  * Surge test runner will fail quickly and explicitly if resources are not available.
  * Add an api for the Surge image store to get a JuceImage for Juce specific uses.
  * Lots of small warning cleanups across the code.
  * Allow non-parameter sliders to access tooltips.

* Content
  * Update the Linnstrument MPE patches 

* What did these commits do? I didn't figure it out

```
+ 2aeffe55e17d59aa7cd507e4db7ede91bba4c341 Add new VKB related actions for keyboard shortcut mapping (#6691)
+ be5a0547246dce19da07c0a81d4618c423350411 Update WT Category Sort (#6694)
```
