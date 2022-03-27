---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

# Changes in Surge XT 1.1

We plan to release an 1.1 version of XT sometime this spring. No date quite yet. Here's what's done so far in the nightly, as of march 27 and 
commit 5e81fc20b, since 1.0.1


* Support for the CLAP format
  * Clap is an emerging plugin format develoepd by a collection of open source and commercial devs. Surge is an early adopter and test case for CLAP.

* Refactoring the code
   * We're making a substantial effort in 2022 to make critical parts of surge more like 'libraries' that other properties can use,
   * `sst-plugininfra` provides XML, Filesystem, Defaults management, Keybinding management, CPU information and more
   * `sst-cpputils` provides a collection of C++17 extensions we use a lot
   * `sst-filters` provides all of our filter code in a header-only set of tempaltes; Surge now uses this submodule

* DSP Changes
   * No longer fill the initial buffer with denormal noise, relying instead on the FTZ behavior of our processors. Gulp!
   * Make 'allsoundsoff' implement a small fade
   * Reset filters on scene release and all sounds off. This pair of fixes removes a click on transport start in Logic Pro.
   * Absolute unison mode works on Alias and Modern
   * Added multiple clipping options for delay feedback
   * The phaser takes the tone filter from the combulator to allow siltering
   * Add the AirWindows 'Cab' effect

* Accessibility changes
   * Our screen reader community gave us amazing feedback on 1.0.1 leading to several changes improvements and bugfixes
   * Using the announcement API, we screen read several actions including patch changes
   * Fix several components (osc copy/paste, scene copy/paste) which used mouse position improperly to find source and target  
   * Overlay buttons (Tuning editor, modulation, mseg, formula, and more) respond properly to return, shift-F10, and so on
   * Step sequencer rotate buttons exposed; and slider/trigmask order improved
   * Modlist names and accesibility works well
   * Discrete parameters represented as menu buttons in the UI are combobox, not slider, elements in screen reader
   * Effect tab order is in display order not internal storage order
   
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

* Modulation Changes
   * All LFOs have 3 outputs; the signal with envelope, the signal alone, and the envelope alone
   * Order modulation to before LFO attack for more modulators

* Other new features
   * Global highpass has slopes upto 48db/oct on the RMB   
   * `.wav` files in the wavetable synths can be multi-channel (and we justuse channle 0)
   * Polyphonic Aftertouch is per-channel properly.
   * The Tuning Editor contains the ability to create even division scales and three-note specified KBM files directly
   * Remove the no-longer-needed 'activate scene outputs' option
   * You can export and import favorites via CSV

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

