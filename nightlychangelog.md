---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

# Changes in 1.9

1.8.1 is the latest production release.

Here are changes since then, up to GitHub commit 14733f030ce (March 24th, 2021)

* New Oscillators
   * Modern, a low aliasing, clean waveshape oscillator based on [Differentiated Polynomial Waveforms](https://www.researchgate.net/publication/224557976_Alias-Suppressed_Oscillators_Based_on_Differentiated_Polynomial_Waveforms) method
   * Alias, a very, very digital oscillator which ignores all the research ever made on low aliasing waveform generation methods, and gives some 8-bit joy
   * String, a waveguide-based feedback oscillator, perfect for creating all sorts of stringy, plucky, and plonky sounds
   * Twist, an oscillator based on a [rather famous Eurorack multi-oscillator module](https://mutable-instruments.net/modules/plaits/)
   
* New Effects
  * Neuron, a distortion effect based on [Gated Reccurent Unit](https://ccrma.stanford.edu/~jatin/ComplexNonlinearities/gru.html), done by Jatin Chowdhury
  * CHOW, a [truculent distortion effect](https://github.com/Chowdhury-DSP/CHOW), done by Jatin Chowdhury
  * Exciter, an effect based on a [rather famous aural exciter](https://github.com/jatinchowdhury18/Aphex_Exciter) unit, done by Jatin Chowdhury
  * Tape, a compact implementation of [Chow Tape Model](https://github.com/jatinchowdhury18/AnalogTapeModel), done by Jatin Chowdhury
  * 11-band graphical EQ
  * Resonator, inspired by a resonator unit from a very well-known vintage hybrid polyphonic synthesizer that rhymes with "vogue". Contains a few Surge-inspired additions like optionally allowing self-oscillation of resonators through modulation!
  * Combulator, a novel bank of 3 comb filters with feedback, additional noise exciter, separate output volumes for each comb, and individual panning for two out of three combs
  * Ensemble effect with several BBD modes and a clean delay mode, uses a very famous tri-phase dual LFO modulation setup
  * Nimbus, a live input granular processor with built-in reverb, based on [another rather famous Eurorack module](https://mutable-instruments.net/modules/clouds/)
  * Treemonster, really wild pitch-tracking ring modulator from Shortcircuit 2, a Vember Audio classic!
  * Five new Airwindows effects - Galactic, Infinity, Verbity, MatrixVerb and TripleSpread
  * All these effects are also added to SurgeEffectsBank

* Other DSP changes
  * A large number of C++ and SSE improvements in the Sine oscillator, substantially improving performance
  * Oscillator drift now works properly for all oscillator types
  * Oscillator drift now starts at small non-zero random value for each unison voice, rather than starting from 0 (there is also an option to use the old behavior, right-click Osc Drift slider)
  * Character filter will work on new oscillator types (so it's not just for Classic oscillator type anymore - but it is still a global parameter for both scenes!)
  * Retrigger now works properly on all oscillator types
  * Wide is the default filter configuration for all templates and Surge's startup state
  * The Asymmetric and Digital waveshapers in the Distortion effect now work properly
  * You can now deactivate Delay R time to allow linking left and right delay times
  * Ring Modulator frequency is now displayed in Hz; also added Absolute mode
  * Reverb 2 now has the same minimum predelay value as Reverb 1
  * Phaser and Neuron can now both deactivate Rate of their internal LFO, in which case modulating Rate will scrub the LFO's phase for manual phasing/combing effects
  * Added 4 new waveshapes in the Sine oscillator
  * More effect types now properly respond to All Notes Off message
  * Hard clip can be configured and set per scene or globally, with new settings at 0 and +18 dBFS (which is the default setting as it were before). You can set this by right-clicking the scene or global volume sliders, or additionally by right-clicking the A/B boxes in the FX grid
  * Sine, FM2 and FM3 oscillator types now have extended range for Feedback parameter by default
  * Maximum polyphony parameter is now actually read from the patches on load (Surge always did store the chosen max polyphony value into the patch, it was just never loaded!)
  * Global Volume doesn't apply to individual scene outputs anymore
  
* Alternate Tuning / Microtonal Interface
  * Provide two tuning application modes: Tuning applied at MIDI input, or after modulation. This is described in detail in the manual. By default, it is set to apply at MIDI input for new patches
  * Filter cutoff can now be tuning-aware
  * Currently loaded SCL/KBM files are now displayed in Tuning menu
  * Far clearer internal and user state management on tuning (= scale + mapping), scale, and mapping management
  * KBM name is now stored in patch and DAW state
  * Integrate [ODDSound MTS-ESP](https://github.com/ODDSound/MTS-ESP) as a tuning source
  * Tuning is now interpolated in log2 space rather than linear space for more accurate inter-note tuning

* User Interface
    * Reposition Author/Category fields in the factory skins, not to overlap with longer patch names
    * Hover effect is now available on more assets, for example oscillator type menu and FX grid
    * Retrigger and Keytrack button have a right-click option to set their value for all oscillators in a scene
    * Phase/Shuffle parameter now changes its label based on LFO type (will show Shuffle only when Step Seq is selected)
    * Patch browser left-click menu now has multiple columns (Windows only!)
    * Control/Command-drag on sliders to snap to units now works for modulation amounts
    * Expanded use of menu for integer sliders in some cases
    * Groups of sliders can now be deactivate collectively, for example in EQ and Tape effects, Twist oscillator...
    * Added an option to always show maximum amplitude LFO as a dotted line (User Settings > Value Displays > Show ghosted LFO waveform reference)
    
* Plugin Wrappers
    * AU advertises MPE support now
    * Label all AU parameters as high resolution
    * Disable VST3 parameter name resets which was coded incorrectly in Surge, causing problems in Bitwig
    * VST3 implements `getParamNormalizedByString`, allowing DAW-side value typeins to be consistent with Surge
    * VST3 bug with `getParameterString` fixed, correcting incorrect string display in some cases in Bitwig
    
* Skin Engine Changes
    * Far clearer skin component model
    * Add a developer mode option (right click Menu button) to overlay a grid on top of Surge's GUI at runtime as a helper tool when designing, with support for arbitrary grid size
    * Fixed some bugs pertaining to user-specified parameter groups
    * Introduced skin version 2 for all the below mentioned new skin engine features
    * Skin labels can show values from parameter names (useful for i.e. oscillator and FX parameters, which dynamically change their name based on oscillator/FX type)
    * Skin labels can now have an image assigned
    * Oscillator type and FX grid assets now only contain the backgrounds, any text on them is now generated through code
    * Slider class now has font size and text offset properties
    * Added skin properties for positioning the patch browser
    * Added a skin color for showing the current value of a macro more prominently
    * Added skin colors for About page text, column text, link and hovered link

* New Content
   * Patches and FX presets from Vospi
   * FX presets from Arty   
   * Updated Jacky Ligon patches to set default tuning mode and adjust maximum polyphony
   * Expanded tuning library from Jacky Ligon

* Smaller Changes
    * Show the plugin file location on About screen
    * Show the full modulator name in inter-LFO modulations
    * Show tne entire MSEG curve in Rate deactivated mode
    * When copying an oscillator, remember current position in the wavetable list index
    * About page shows your actual CPU model, not some build-time guess
    * The default value for scene Highpass cutoff parameter is minimum now (6.88 Hz)
    * Increase mouse hitzone on macro sliders slightly
    * Frequencies below C0 now have a proper negative-interval note name
    * Updated a few factory library patches that were using Latch mode by setting them to Mono mode, in order to avoid random noises when browsing through patches
    * Voice LFO Step Sequencer envelope triggers now run properly even without assigned modulation
    * Added a graphical asset for MIDI Learn, so it's now clearer to see when we're in MIDI learn mode and for which parameter
    * Handled a tuning regression when SCL files had a blank title in the first line
    * Next/Prev can span or constrain to category in patch navigation
    * All frequency-based parameters (except LFO rate) can now be set by typing in a note name (using 12-TET to convert to frequency)
    * Zoom level is no longer additionally saved in the DAW state - only the default value stored in user configurationi is used across DAW projects and all Surge instances
    * Wavetable export feature now correctly names the wavetable
    * Existing oscillator modulations are now cleared when changing oscillator type
    * Fixed a bug where loading a patch loaded wavetables twice, causing audio dropouts
    * Fixed a graphics memory leak on Linux, caused by difference in VSTGUI reference count between Linux and Windows/Mac
   
* Code cleanup and infrastructure
    * Reformatted the codebase with a new, far more sane, clang-format (no more 3 space tabs, and so on!)
    * Replaced our hand-rolled filesystem implementation with [gulak](https://github.com/gulrak/filesystem)
    * GUI overlay API (used for MSEG editor, Store Patch dialog, etc.) is now far more rational, so we can have more than one overlay showing at once
    * Activate warnings-are-errors on Linux gcc
    * Rework `char` and `string` functions to avoid potential overflows in several cases
    * Common oscillator functions (drift, character filter, etc..) are now all found in a single place (OscillatorBase.h)
    * Slider bipolarity and deactivation is now handled in a [single API point](https://github.com/surge-synthesizer/surge/blob/main/doc/DynamicNameActivationBipolar.md)
    * Consisntently named oscillator and FX related C++ files and classes
    * A non-global RNG used through most of the code where `rand()` was used before
    
* Infrastructure 
    * More work done on UTF-8 file names and paths on Windows  
    * Linux consistently uses `CMAKE_INSTALL_PREFIX` as a search path for assets
    * Surge on Windows can now be built with `mingw` or `clang` (but productoin builds are still using MSVC)
    * Linux reads config.xml from the filesystem
    * In Ardour on Linux, work around the `LD_LIBRARY_PATH / GTK2` issue which stopped Zenity from launching
    * Windows implicit `precompiled.h` removed
    * Integrated [libsamplerate](https://github.com/libsndfile/libsamplerate) in the codebase, required for Eurorack-based modules which operate at a fixed sample rate of 48k
    * CMake will now run even if `git` is not found
 
* Surge XT
    * Lots of commits for Surge XT which will hopefully be released sometime this summer!
