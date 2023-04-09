---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

We plan to release Surge 1.2 in spring of 2023. This changelog us updated as of 4dfadf4ead802 / April 9 2023. We also had two
new contriburors in the 1.2 cycle. We welcome new devs on any of our projects!

* Major Feature: Oscilloscope
  * A built-in oscilloscope and spectrograph. **Write a blurb here**

* Major Feature: Tuning Upgrades
  * Surge can act as an OddSound MTS provider ('master') allowing the Surge tuning editor to provide tuning to an entire session.
  * Remediate yet more edge cases in our internal tuning, including keyboard mapping larger than a scale.

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

* Plugins and Hosts
  * Correctly implement CLAP_NOTE_CHOKE, so you can choke express in the bitwig drum machine with surge voices! 
  * Allow a more flexible set of I/O mappings, fixing an interaction between a JUCE and Ardour and Surge which could
    silence the VST3 in some situations.
  * Skip the VST3 menu extensions in Reason, where they seem a bit dicey still.
  * Invalidate parameter names on patch change to refresh automation displays.
  * Correct a problem with the virtual keyboard in the CLAP version fo the plugin.
  * Add appropriate input buffering for audio input on hosts where block size is not a multiple of surge block size. This stops input buffer
    corruption with uneven blocks in FL Studio at the cost of input buffer latency of 32 samples.

* Other Notable New Features
  * The filter analyzer lets you drag the resonance and cutoff in the plot 
  * The VU Meter shows CPU usage optionally (right click on the VU to show or hide this feature)
  
* DSP Changes
  * Noise can be stereo or mono in wide mode, per patch. 
  * More work on non-32 block sizes, especially fixing a zippering inssue in block-wise interpolators used in the mixer
  * Nimbus re-sampler works at very high sample rates or low block sizes

* FX Unit
  * FX Unit handles non-multiple-of-32 block sizes more elegantly
  * Default FX for reverb and delay in FX unit are more usable. 
  * The FX Unit will display Airwindows parameters even if no audio engine is running

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
  * Some of the Virtual Keyboard mappings are now in the edit-keyboard-mapping screen.
  * Fix jog order for wavetables to match display order in all cases.
  * Modal overlays use a semi-transparent background
  * Clamp parameters in the twist oscillator, meaning modulation can no longer make it fail to produce correct sounds
  * Truncated wave tables no longer add noise to the oscillator final tables when imported.
  * Scene Paste correctly re-maps the source-scene of scene LFOs leading to correct visual display of odulation state
  * Close all open menus when destroying the gui editor, meaning 'lingering' menus on window closed no longer crash the synth
  * Correct the Init FM2 and Square templates to not bypass filters
  * Warn and silence rather than crash when surge is incorrectly handed a mono output buffer (which could happen in some mac configurations with
    bluetooth headphones)
  * Clamp airwindows FX selection to fix an occasional crash.
  * Fix step sequencer fast drags and out of bound drags to do the expected thing in more cases.
  * Fix a bug where a constant section on an MSEG with an AEG or FEG trigger would trigger the AEG and FEG on every block of the constant not just the first
  * Fix a bug where a .modpreset in the root menu of the Modulation Presets area would crash the LFO menu
  * Fix a problem where lfo mapping parameters would blink when pressing the orange arrow and switching LFOs


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

