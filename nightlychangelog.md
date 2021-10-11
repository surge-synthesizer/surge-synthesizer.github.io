---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

# Changes in Surge XT Alpha Nightly

Our next release of Surge, "Surge XT", will make a fundamental architectural break with the 
Surge of versions 1.6 - 1.9, porting to the JUCE framework and changing the plugin ID while
adding a variety of new features. Here's what's in the nightly as of  99b1f0b97e1 (Oct 10 2021)

Note this alpha change log discusses some features which are still incomplete in the alpha.

- Rename the Plugins
   - The plugins are called "Surge XT" and "Surge XT Effects Bank"
   - Similarly the user directory is now named "Surge XT"
   - Please consult the manual for a migration guide from Surge (not written yet)

- Port to JUCE
  - There are innumerable changes, including basically a rewrite of the entire plugin layer
    and re-implementing all of the widgets and UI components
  - Although we don't distribute an LV2, the JUCE-LV2 port project branch allows linux
    users to build an LV2 if they wish, and it has almost all the features of the
    VST3 version (excluding the features VST3 supports and LV2 does not)
  - A port to JUCE also allows a standalone version of Surge
    
- Navigating the Patches
  - We have a patch 'favorites' mechanism! Click the heart to tag a favorite. RMB the heart to see your faves.
  - We have a high speed searchable database of all patches. Click the magnifying glass and type away!
  - User choosable default patch
  - Comments are multiline now!


- Modulation Changes
  - Modulation Overview and Menus
     - Write this
  - Custom Menus for Modulation 
  - Copy and Paste with Modulation
  - Formula Modulator
    - Surge XT incorporates LuaJIT
    - Formula Modulator (write this)
  - Index Modulation
      - Formula and Randon 

- Accessibility Support
  - Juce 6.1 gives support for accesible UIs allowing screen readers and other 
    navigation tools to work
  - WIP still but this is a top level feature

- Filter and WaveShaper Section
  - A greatly expanded waveshaper section
    - The waveshaper has gone from 5 models to (N)
    - Models include harmoic extension, noise, trigonemetric folders, classic folders, and much more
  - A new "Threeler" filter model
  - Filters and WaveShapers are bypassable/deactivatable both with a right mouse button and a double click.
 
- FX
  - Surge now has 4 send, insert-per-scene and insert-global effect slots
  - Add AirWindows FX "Mackity", "MackEQ", "Chamber"
  - The new WaveShapers are available as a monphonic FX plugin 
  - A new 'Mid/Side Tool' lets you go from stereo to midside and back at points in the FX chain
  - The "Tape" FX model gets a hystersis mode option which defaults to RK4 (Select with RMB on Mode)
  - The "Tape" FX model gets SIMD vectorization improvements
  - The "Conditioner" FX gets a high pass filter 
  

- Micro-tuning support
  - The JUCE TUning UI from Tuning Workbench Synth comes to surge! In the Tuning Menu choose "Tuning Editor" and explore!
  - Several smaller microtuning changes include:
    - Voice-skip in KBM with 'x' works
    - Channel-per-octave mode  
    - Fractional pitch bend. Extend the PB. In 'tune at midi' mode you are in frequency cents and in 'tune after modulation' in key cents.
    - Pitch Type-ins allow Tuning Fractions (RMB pitch, type 9/8, get 204 cents)

- Overlay Management
  - Tear Out Windows and Reposition Sub-Windows
   
- A couple of changes which will adjust how Surge plays.
  - We fixed a couple of bugs in surge which means SurgeXT will behave differently than Surge 1.9 in minor ways
  - Mono FP mode had a bug where the second to last held key would sometimes not trigger portanemto to the last key.  
  - The Twist LPG, in non-FM mode, incorrectly had its delay time sustained by about 4x. We corrected this, but patches which
    use Twist LPG will need to edit and adjust their delay.
  - The Surge Effects Bank now works with block sizes smaller than 32, fixing a problem in FL

- Other Modulation Changes
  - Drag and Drop Modulatino Everywhere 
  - Surge can now 'mute' modulations 
  - Add a second deform mode for S&H LFOs
  - MSEG can now trigger FEG/AEG at en envelope start
  - Vector valued modulators (more to come)
  - LFO Shuffle can be extended to allow bipolar shuffles (useful for 'swing' beats
    in the step sequencer)
  - The MSEG Editor supports multi-select (with shift-drag)
  - The LFO envelope is now deactivatable. RMB/Deactivate any of the DAHDSR sliders.
  - Both Scene A and Scene B Modulation Sources can independently modulate global parameters (so both A and B can modulate FX sliders, say)

- Smaller changes
  - Window oscillator has an option to do continuous morphing
  - Sweep several upgrades and bug fixes to the tuning library,
    including silencing unmapped keys in a KBM file with an 'x'
  - Fix to gain and clipping math in the ensemble effect
  - Global volume can now be saved and restored in new patches
  - All Notes Off and All Sounds Off messages properly supported
  - The SSE waveshapers in distortion and rotary could result in
    uninitialized audio and subsequent blowups; fix.
  - Fix a surge bug which could cause airwindows fx to crash when switching
    patches quickly
  - Fix a bug where polyphony set above 61 had a voice stealing error if voices went above 64.

- UI and Skin Engine Changes
  - By default we no longer bind the TAB key to arm modulation. If you want to
    restore this behavior (which can conflict with focus order and other accesible
    features), the Workflow menu allows you to toggle it on permanently.
  - Skins can include TTF files for skin-specific fonts. See Tutorial 10
  - Deprecate Skin version 1
  - Surge has a virtual keyboard (on by default in standalone, off in plugin, in the menu)
  - The 'audio engine unavailable' error messatges and screens are clearer
  - The 'file open' dialogs for patches and tunings remember your last directory
  - The standalone app has a number of keybindings
  - DoubleClick on a Macro opens the rename dialog
  - Hovering over a slider shows the info popup, unless you turn that off in value displays menu
  - You can drop a .surge-skin directory onto the surge UI and it will install the skin for you
  - You can drop a .zip file onto surge and it will extract patches, fx presets, skins etc... into your user area for you
  - We have a skin library now, and you can get to it from the surge menu

- Infrastructure changes and Code changes
  - Surge XT has a massive investment in our make and code layout, with the source being far more organized and our cmake files being way cleaner
  - Upgrade to C++17 on all platforms
  - Startup files (configuration.xml and windows.wt) are included as binaries in the plugin
  - Remove an unused dependency on libmidifile
  - Remove enormous swaths of code which was unused in Surge XT thanks to JUCE and other cleanups
  - Use constrained enumerations for user default settings
  - Deliver an RPM as well as a DEB on linux
  - Clear CPU Info available, getting ready for optional AVX enhancements
  - CMake 'install' rules in place for non-apple unixes
  - Finally (finally) remove use of `_aligned_malloc` in favor of `alignas` everywhere
  - Windows/MSVC specifies UTF-8 encoding
  - More UTF-8 and remove old 'wide' getters which were only used by legacy vst3
  - Restore Windows MinGW builds
  - install-resources targets work with Ninja Generator
  - Surge can run without a factory directory succesfully
  - Remove an audio-thread memory allocation for most oscillator types
  - Upgrade to latest Catch2 
  - Lots of work on expanding the appropriate use of 'const'
  - Move the fx presets to individual files in the factory rather than config.xml
  - Most of our file code works with `std::filesystem` (or a sub thereof)
  - On linux, choose the ghc rather than system `std::filesystem` by default
  - Cross-compliation works from linux to windows and mac if you want!
  
- Content
  - New patches from Jacky Ligon
  - New patches from DataBroth
  - New patches from xenofish
  - New patches from VinceyZed
  - New FX Presets from Arty
  
  
