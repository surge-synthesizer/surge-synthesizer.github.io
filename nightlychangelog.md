---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

# Changes in 1.9

1.8.1 is the latest production release.

Here's changes since then up to github commit 7e5975e1312af / Mar 19 2021

* New Oscillators
   * Modern, a low alias clean waveshape oscillator
   * String, a waveguide based feedback oscillator
   * Twist, an oscillator based on a eurorack multi-oscillator module
   
* New Effects
  * Neuron, a distortion effect based on a GRU (TODO: PUT LINK TO JATINS BLOG)
  * CHOW, a distortion effect (TODO: PUT LINK TO JATINS BLOG)
  * EXCITER
  * TAPE
  * An 11 band graphical EQ
  * A resonator (a classic bank of 3 filters with mix)
  * A combulator (a novel bank of 3 comb filters with feedback)
  * An ensemble effect with multi-stage BBD and clean delay loops
  * Integrate the eurorack module and add Nimbus, a granular reverb (LINK)
  * All these effects are both in Surge and SurgeEffectsBank
  * TreeMonster, a pitch tracked ring modulator from ShortCircuit
  

* Other DSP changes
  * A large number of C++ and SSE improvements in the Sine oscillator, substantially improving performance 
  * Oscillator drift works on all oscillator types
  * Oscillator drift starts at small non-zero random value
  * Character filter works on most oscillators
  * Retrigger works on all oscillator types
  * Wide is the default filter config in all tempaltes and init
  * The Asym and Digi waveshapers in the Distortion effect work properly
  * You can deactivate Delay R time to allow L/R linkage
  * Ringmod frequency is displayed in HZ; Adds absolute mode
  * Reverb2 has the same lower bound predelay as Reverb1
  * Phaser and Neuron can both deactivate rate for modulator-scrubbed phasing
  * Four new waveshapes in the sine oscillator
  * More effects property respond to allNotesOff
  * HardClip can be configured and set per scene or globally, with new settings at 0 and 18dbfs.
  * The default Sine, FM2 and FM3 oscillators extend FM by default.
  * PolyCount streams into patches and is read on load.
  * Global volume doesn't apply to individual scene outs
  
* Alternate Tuning / Microtonal Interface
  * Provide two tuning application modes; at the keyboard or at the oscillator. This is described in detail in the manual (TODO). At Keyboard is new default for new patches
  * Filters can be tuning-aware or 12-TET tuned
  * Current SCL/KBM displayed in tuning menu
  * Far clearer internal and user state management on tuning (=scale + mapping), scale, and mapping management
  * KBM name is stored in patch and DAW state
  * Integrate ODDSound MTS-ESP as a tuning source (LINK)
  * Tuning is interpolated in log-2 space rather than linear space for more accurate inter-note tuning

* User Interface
    * Reposition author/category fields in the factory skins
    * Hover on more assets - OSC menu and FX region
    * Retrigger and Keytrack button have RMB to set for all oscillators in a scene
    * Phase/Shuffle label changes based on LFO type
    * Patchbrowser menu has column split (windows only)
    * Discretized/Snapped moves works for modulation as well as value on sliders
    * Expanded use of menu for integer sliders in some cases
    * Fix problem with aliased amplitude-one line in LFO
    * Groups of sliders can deactivate collectively in EQ3, Twist, and elsewhere
    
* Plugin modifications
    * Label all AU parameters as high resolution
    * Disable VST3 param name resets which was coded incorrectly in Surge, causing problems in Bitwig
    * VST3 implements getParamNormalizedByString allowing DAW-side value typeins to be consistent with Surge
    * AU advertised MPE support
    * VST3 bug with getParameterString fixed, correcting Bitwig mis-string display in some cases
    
* Skin Engine Changes
    * Skin Labels can drive values from parameter names 
    * Overlay a grid on surge at runtime for skin design help
    * Far clearer skin component model
    * Fix errors in skin user-specified groups
    * Skin Labels can be Images
    * Move OSC and EffectPanel drawing primarily to code
    * The Slider class has font size and offset properties

* New Content
   * Third party patches from Vospi
   * FX presets from Arty   
   * Expanded tuning library from Jacky Ligon
   * Update Jacky Ligon patches to set default tuning mode and adjust polyphony

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
    * Fix a bug where loading a patch loaded wavetables twice, causing audio dropouts at patch change
    * Fix a Linux graphics memory leak caused by a VSTGUI reference count difference on Linux
   
* Code cleanup and infrastructure
    * Reformat the codebase with a new, far more sane, clang format
    * The UI Overlay API is far more rational so now we can have 2 overlays at once
    * Activate warnings-are-errors on linux gcc
    * Rework char and string functions to avoid potential overflows in several cases
    * Common oscillator functions (drift, character filter, etc..) in a single place
    * Bipolarity and Menu-ui-replacement into a single API point
    
* Infrastructure 
    * More work on UTF-8 file names and paths on windows  
    * Linux consistently uses CMAKE_INSTALL_PREFIX as a search path for assets
    * Surge on windows can build with mingw or clang (but prod builds are still msvc)
    * Linux reads config.xml from the filesystem
    * In Ardour on Linux, work around the LD_LIBRARY_PATH / GTK2 issue which stopped zenity launching
    * Windows implicit 'precompiled.h' removed
    * Integrated libsamplerate with the codebase for the eurorack module sample rate conversion
    * Cmake will run even if git is not found
 
* SurgeXT
    * Lots of commits for SurgeXT which will release this summer
    
    
    
