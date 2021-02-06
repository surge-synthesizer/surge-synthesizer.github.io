---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

# Changes in 1.9

1.8.1 is the latest production release.

Here's changes since then up to github commit cb617d28b3c965 / Feb 6 2021

* New and Modified Effects
  * Three new effects from jatin (LINK)
    * Neuron, a distortion effect based on a GRU (TODO: PUT LINK TO JATINS BLOG)
    * CHOW, a distortion effect (TODO: PUT LINK TO JATINS BLOG)
    * EXCITER
  * An 11 band graphical EQ
  * A resonator (a classic bank of 3 filters with mix)
  * A combulator (a novel bank of 3 comb filters with feedback)
  * Integrate the eurorack module and add Nimbus, a granular reverb (LINK)
  
  * Modified Effects
    * The Asym and Digi waveshapers in the Distortion effect work properly
    * You can deactivate Delay R time to allow L/R linkage
    * Ringmod frequency is displayed in HZ; Adds absolute mode
    
  * Surge Effects Bank
    * Gets all the new fx and an extended look and feel
    
* Other DSP changes
  * Oscillator drift starts at small non-zero random value
  * Retrigger works on all oscillator types
  

* User Interface
    * Reposition author/category fields in the factory skins
    
* Code cleanup and infrastructure
    * Reformat the codebase with a new, far more sane, clang format
    * The UI Overlay API is far more rational so now we can have 2 overlays at once
    * Activate warnings-are-errors on linux gcc
    
* Plugin modifications
    * Label all AU parameters as high resolution
    * Disable VST3 param name resets which was coded incorrectly in Surge, causing problems in Bitwig
    * VST3 implements getParamNormalizedByString allowing DAW-side value typeins to be consistent with Surge
    
 
* Smaller Changes
    * Update the version to 1.9
    * Show the plugin location in the about screen
    * Show the full modulator name in inter-lfo modulations
    * In rate-deactivated mode show tne entire MSEG curve
    * When copying an oscillator, remember your place in the wavetable list index
    * About page can be modified with skins
    * About page shows your actual CPU, not some build time guess
    * The default (double click) high pass cutoff is 0hz.
    * In Ardour on Linux, work around the LD_LIBRARY_PATH / GTK2 issue which stopped zenity launching
    * Add a 1px larger hit zone on macro drag zones
    * Frequencies below C0 get a proper negative-interval note name
    * Scan factory library for noise making LATCH patches and convert them to MONO to avoid noises when scanning library
    * VLFOs in Step Sequencer mode without modulation assigned but with envelope triggers run properly
    * The Skin Engine can position the patch browser
    * MidiLearn gives visual feedback
    * Replace our implementation of filesystem with gulak (FIXME LINK)
    * Handle a tuning regression when SCL files had a blank title in line one
    
    
* SurgeXT
    * Lots of commits for SurgeXT which will release this summer
    
    
    
