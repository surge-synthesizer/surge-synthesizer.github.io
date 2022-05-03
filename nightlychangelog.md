---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

# Changes in Surge XT 1.1

We plan to release an 1.1 version of XT sometime this spring. No date quite yet. Here's what's done so far in the nightly, as of May 3 and 
commit 80b85909421b3e, since 1.0.1

* Undo and Dirty Patch Management
  * The synth editor supports UNDO / REDO for all actions either with keybindings or with the undo/redo buttons on the UI
  * Changes which modify the patch mark the patch as dirty, displaying a asterix next to the patch name and blocking patch changes
  
* Keybinding Manager 

* Support for the CLAP format
  * Clap is an emerging plugin format develoepd by a collection of open source and commercial devs. Surge is an early adopter and test case for CLAP.

* Changes to the FX Plugin
  * Complete Accessibility Review
  * Correctly name the VST3 parameters
  * Double click to reset a value in the UI
  * Ability to run in zero-latency mode if your DAW guarantees fixed blocks 
  * Fix a big which made Nimbus looping mode very distorted in the FX plugin

* Refactoring the code
   * We're making a substantial effort in 2022 to make critical parts of surge more like 'libraries' that other properties can use,
   * `sst-plugininfra` provides XML, Filesystem, Defaults management, Keybinding management, CPU information and more
   * `sst-cpputils` provides a collection of C++17 extensions we use a lot
   * `sst-filters` provides all of our filter code in a header-only set of tempaltes; Surge now uses this submodule
   * `sst-waveshapers` provides all of our waveshaper code in a header-only set of tempaltes; Surge also uses this

* DSP Changes
   * A collection of improvements to the string oscillator
       * Remember, right mouse everything in surge! These are in context menus off string params
       * Filter Stiffness Models which tune better at high stiffness. (The compensated model is the default for new instances)
       * 2x oversampling available for high frequency strings
       * choose interpolation models, which can limit energy loss in exchange for accuracy at high frequencies
   * No longer fill the initial buffer with denormal noise, relying instead on the FTZ behavior of our processors. Gulp!
   * Make 'allsoundsoff' implement a small fade
   * Reset filters on scene release and all sounds off. This pair of fixes removes a click on transport start in Logic Pro.
   * Absolute unison mode works on Alias and Modern
   * Added multiple clipping options for delay feedback
   * The phaser takes the tone filter from the combulator to allow siltering
   * Add the AirWindows 'Cab' effect
   * "Use Channel for Octave" tuning mode no longer conflicts with MPE mode
   * VuMeter falloff is samplerate independent
   * Fix a big which could make Nimbus occaionally dirstort, especially in looping mode

* Accessibility changes
   * Our screen reader community gave us amazing feedback on 1.0.1 leading to several changes improvements and bugfixes
   * Using the announcement API, we screen read several actions including patch changes
   * Fix several components (osc copy/paste, scene copy/paste) which used mouse position improperly to find source and target  
   * Overlay buttons (Tuning editor, modulation, mseg, formula, and more) respond properly to return, shift-F10, and so on
   * Step sequencer rotate buttons exposed; and slider/trigmask order improved
   * Modlist names and accesibility works well
   * Discrete parameters represented as menu buttons in the UI are combobox, not slider, elements in screen reader
   * Effect tab order is in display order not internal storage order
   * Every typine has a correct focus-restoration target when dismissed
   
* User Interaction Changes
   * Improvmenets for touchscreen mode, including using exact mosue tracing and supporting long presses
   * The typein for FM Ration is correctly read when typing in a modulation
   * Audio In makes unused sliders appear deactivated
   * Patches without categories are displayed in the patch browser
   * Ctrl-click on a modbutton to arm an unfocussed url
   * Favorites displayed in-menu in the patch browser
   * Menus can be set in skins
   * You can use your OS dark/light setting for menus overriding skins
   * Surge detects if you change a preset and marks the preset name with an asterix and propmots if you unload it.
   * Double-click bypasses FX slots, so now RMB can pop up a more useful menu and single click works as expected  
   * "Store Tuning in Patch" for a given patch remembered in the patch save dialog
   * The WaveTable and Window editors have a '3d' visualizatino of the wavetable which you can see by clicking on the oscillator display
   * The tuning invterval display makes it easier to see the interval you are playing on a midi device
   * Popup menus scale properly on windows HDPI displays
   * Several elements missing context help got context help.
   * Key-bindings are user activatable and user-managable with the workflow/keybinding overlay
   * Add a visual pitch bend and mod wheel to the virtual keyboard
   * Correctly constrain drag-to-resize events
   * The Skin Engine can override the global font
   * The entire classic skin (including hovers) is contained inside the binary
   * The Filter Analyzer shows frequency response curves for your current filters
   * The Waveshaper Analyzer uses the live drive value not a what-if drive value, which was confusing
   * The Modulation List allows more expansive filters, by scene and control group
   * Most tearout windows can be resized
   * Improve error message to be clearer in the (very rare) situations where the patch db is locked by 2 instances.
   * The about-screen-as-layout-grid feature is back! We forgot to port it over from 1.9
   * The patch-find mechanism:
       * stays open and you can preview patches.
       * magnifiying glass acts properly as a toggle
       * remembers your last search for the next search
       * opens more eagerly, on find not on type
        
  
* Modulation and Tuning Changes
   * All LFOs have 3 outputs; the signal with envelope, the signal alone, and the envelope alone
   * Order modulation to before LFO attack for more modulators
   * The phase range of the LFO fractional part is strictly `[0,1)` whereas before it could hit exactly 1.0.
   * FIx a problem where MPE pitch bend in MPE mode with MTS was using the wrong tuning system

* Other new features
   * Global highpass has slopes upto 48db/oct on the RMB   
   * `.wav` files in the wavetable synths can be multi-channel (and we justuse channle 0)
   * Polyphonic Aftertouch is per-channel properly.
   * The Tuning Editor contains the ability to create even division scales and three-note specified KBM files directly
   * Remove the no-longer-needed 'activate scene outputs' option
   * You can export and import favorites via CSV
   * Correctly export a bypass parameter

* Bug Fixes
  * The "Orange Arrow" to select an LFO as a target was reversed on selection (but correct on drag gestures). Fix. 
  * Bug when dragging modulated FX resolved
  * Remove check which improperly changed song position with DAW looping enabled and transport not running.
  * Dropping a modulator on an overlay woudl modulate the slider underneath the overlay; fix.
  * Copying a modulation could duplicate a modulation routing. Fix.
  * With the move to a VST3 bundle, windows portable installs broke. Fix.
  * Drag-and-drop in the presence of overlays could corrupt z-order. Fix.

* Infrastructure
   * Test Case runtime substantially improved
   * Use 7Z for packing windows zip files
   * Use `std::thread` everywhere for threading
   * Lots of improvemens to the windows installer
   * Fixed comment and documentation typos across the codebase 
   * Linux 'pluginsonly' is a .tar.gz
   * The `.deb` file contains icons and an application startup for linux
   * The default skin is entirely in the distributed binary, including hover and temposync assets
   * CMake options to skip ALSA or VST3 builds
   * Various changes to support JUCE7 build (although our production build is still 6.1.6 as of this commit)

* Content
   * Updated the Slowboar patches 

