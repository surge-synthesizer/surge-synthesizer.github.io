---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

# Changes in 1.9

1.8.1 is the latest production release.

Here's changes since then up to github commit d91932b0d136 / Feb 24 2021

* New and Modified Effects
  * Four new effects from jatin (LINK)
    * Neuron, a distortion effect based on a GRU (TODO: PUT LINK TO JATINS BLOG)
    * CHOW, a distortion effect (TODO: PUT LINK TO JATINS BLOG)
    * EXCITER
    * TAPE
  * An 11 band graphical EQ
  * A resonator (a classic bank of 3 filters with mix)
  * A combulator (a novel bank of 3 comb filters with feedback)
  * An ensemble effect (WIP)
  * Integrate the eurorack module and add Nimbus, a granular reverb (LINK)
  
  * Modified Effects
    * The Asym and Digi waveshapers in the Distortion effect work properly
    * You can deactivate Delay R time to allow L/R linkage
    * Ringmod frequency is displayed in HZ; Adds absolute mode
    * Reverb2 has the same lower bound predelay as Reverb1
  
    
  * Surge Effects Bank
    * Gets all the new fx and an extended look and feel

* New Sound Sources
   * Modern, a low alias clean waveshape oscillator
   * String, a waveguide based feedback oscillator

* Other DSP changes
  * Oscillator drift starts at small non-zero random value
  * Retrigger works on all oscillator types
  * Wide is the default filter config in all tempaltes and init
  
* Alternate Tuning / Microtonal Interface
  * Provide two tuning application modes; at the keyboard or at the oscillator. This is described in detail in the manual (TODO). At Keyboard is new default for new patches
  * Filters can be tuning-aware or 12-TET tuned
  * Current SCL/KBM displayed in tuning menu
  * Integrate ODDSound MTS-ESP as a tuning source (LINK)

* User Interface
    * Reposition author/category fields in the factory skins
    * Hover on more assets - OSC menu and FX region
    
* Code cleanup and infrastructure
    * Reformat the codebase with a new, far more sane, clang format
    * The UI Overlay API is far more rational so now we can have 2 overlays at once
    * Activate warnings-are-errors on linux gcc
    
* Plugin modifications
    * Label all AU parameters as high resolution
    * Disable VST3 param name resets which was coded incorrectly in Surge, causing problems in Bitwig
    * VST3 implements getParamNormalizedByString allowing DAW-side value typeins to be consistent with Surge
    
* Skin Engine Changes
    * Skin Labels can drive values from parameter names 
    * Overlay a grid on surge at runtime for skin design help
    * Far clearer skin component model
    * Fix errors in skin user-specified groups
    * Skin Labels can be Images
    * Move OSC and EffectPanel drawing primarily to code
 
* Smaller Changes
    * Update the version to 1.9
    * Show the plugin location in the about screen
    * Show the full modulator name in inter-lfo modulations
    * In rate-deactivated mode show tne entire MSEG curve
    * When copying an oscillator, remember your place in the wavetable list index
    * About page can be modified with skins
    * About page shows your actual CPU, not some build time guess
    * The default (double click) high pass cutoff is 0hz.
    * Add a 1px larger hit zone on macro drag zones
    * Frequencies below C0 get a proper negative-interval note name
    * Scan factory library for noise making LATCH patches and convert them to MONO to avoid noises when scanning library
    * VLFOs in Step Sequencer mode without modulation assigned but with envelope triggers run properly
    * The Skin Engine can position the patch browser
    * MidiLearn gives visual feedback
    * Replace our implementation of filesystem with gulak (FIXME LINK)
    * Handle a tuning regression when SCL files had a blank title in line one
    * A notch shows the value of a macro
    * Next/Prev can span or constrain to category in patch navigation
    * All frequencies can be typed in as note-names (using 12-TET to convert to frequency)
    * At LFO amplitude != 1, we show the amp1 LFO as a dotted line
    * Zoom level no longer saves in your DAW; the user default is used across sessions.
    * Wavetable export box has correct file name
    * Modulations clearn when changing oscillator type
   
* Infrastructure
    * More work on UTF-8 file names and paths on windows  
    * Linux consistently uses CMAKE_INSTALL_PREFIX as a search path for assets
    * Surge on windows can build with mingw or clang (but prod builds are still msvc)
    * Linux reads config.xml from the filesystem
    * In Ardour on Linux, work around the LD_LIBRARY_PATH / GTK2 issue which stopped zenity launching
    * Windows implicit 'precompiled.h' removed
 
* SurgeXT
    * Lots of commits for SurgeXT which will release this summer
    
    
    
