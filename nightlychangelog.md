---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

# Changes in Surge XT 1.1

We plan to release Surge XT 1.1 sometime in Spring 2022, however no date has been decided quite yet. Here's what's done so far in the nightly, as of May 17th and 
commit 47e669f9d4, since XT 1.0.1 release.

* Action History
  * Surge XT now supports undo and redo for all actions (even loading patches!) - use either the common Ctrl+Z/Y keyboard shortcuts, or buttons on the GUI
  * If a patch has been modified, it will be marked as dirty and an asterisk will be appended to the patch name
    * By default, attempting to load a different patch will prompt the user to confirm the loading action in order not to lose your patch modifications
    * This can be disabled in Menu > Workflow

* CLAP Format
  * CLAP is an emerging plugin format developed by a group of open source and commercial developers. Surge XT is an early adopter and a test case for CLAP
  * Surge XT implements - exclusively in CLAP format only - the non-destructive modulation (both monophonic and polyphonic!) and note expressions!

* Patch Navigation
  * Patches without categories are displayed in their own category in the Patch Browser
  * Favorites are now also displayed in the Patch Browser, in User Patches section
  * Much improved Find Patch feature!
    * Search results will now stay open by default after loading a patch, so you can quickly navigate through this list
    * Ctrl+click or Ctrl+Enter will load the patch and close the search results
    * There is now an option in Menu > Workflow to bring back the old Surge XT 1.0 behavior, if you so wish
    * Magnifier button now acts properly as an on/off toggle button
    * Your last search term is remembered after leaving the Find Patch mode
    * Search results will now open immediately when entering the Find Patch mode, instead of only when you start typing

* Accessibility
  * Our screen reader community gave us amazing feedback on Surge XT 1.0.1, leading to several changes, improvements and bugfixes
  * Using the announcement API, we read several actions, including patch changes
  * Fixed several components (oscillator copy/paste, scene copy/paste) which used mouse position improperly to find the source and target  
  * Overlay buttons (Tuning, Mod List, MSEG Editor, Formula Editor, etc.) respond properly to Enter, Shift+F10, and so on
  * Step sequencer rotate buttons are now exposed, and order of step and trigger parameters improved
  * Mod List parameter names and accesibility works well
  * Discrete parameters represented as menu buttons in the UI are now using the combo box element instead of a slider in screen readers
  * Effect tab order is now in display order, not internal storage order
  * Every text entry field has a correct focus-restoration target when dismissed

* New Overlays
  * Keyboard shortcut editor:
    * Allows freely changing or disabling any of the available keyboard shortcut actions offered by Surge XT, in case there is a clash with keyboard shortcuts reserved by your DAW
  * Filter analysis:
    * Shows frequency response curves for Filter 1 and Filter 2 (also in realtime as you change filter cutoff, resonance and mixer pre-filter gain parameters)

* DSP Changes
  * String oscillator improvements:
    * Various Stiffness filter models which provide better tuning at high stiffness values. "Keytracked and pitch compensated" model is the new default
    * 2x oversampling option, which improves timbral quality for high pitched notes
    * Choose between three interpolation modes, which can limit energy loss in exchange for accuracy at high frequencies
    * Remember, right-click everything in Surge! These options are in context menus of Exciter Level and Stiffness parameters
  * Fixed an issue with Twist oscillator's LPG onset, creating occasional glitches in certain oscillator modes
  * Initial audio buffer is no longer filled with denormal noise - instead we rely on flush-to-zero (FTZ) flag in our processors
  * Sample rate is now a property of individual Surge XT instances, rather than global for all Surge XT instances - allows correct behavior when only certain instances are oversampled in hosts that provide this facility (for example, Reaper)
  * Fixed a crash when Reverb 2 was used at a very high sample rate
  * Implemented a small fade out when executing All-Sounds-Off
  * Reset filters on scene release and All-Sounds-Off - by doing so, we have removed a click on transport start in Logic Pro
  * Absolute unison mode now works for Alias and Modern oscillators
  * Scene highpass filter now has slopes up to 48 dB/oct (right-click option)
  * Output meter falloff is now sample rate independent (previously the meter would have a faster falloff on higher sample rates)

* Effects
  * Added multiple clipping options for the feedback path in the Delay effect (right-click the Feedback parameter)
  * Implemented the Tone filter to the Phaser effect (same as the one from Combulator)
  * Added new AirWindows effects: Cabs, Chrome Oxide, Dub Sub, Dub Center, Fire Amp, Glitch Shifter, Nonlinear Space, Pafnuty, Power Sag, Tape Dust, To Vinyl
  * Fixed a bug which could make Nimbus occasionally distort, especially in Looped Delay mode (applies to the Surge XT Effects plugin as well)

* Modulation
  * All LFOs now have 3 outputs: the signal multiplied by the LFO EG, the raw LFO signal alone, and the LFO EG alone
  * LFO attack will now start after setting up voice level modulators - this enables modulating voice LFO amplitude with velocity, which didn't work before
  * The range of the fractional part of the LFO phase is supposed to be strictly `[0, 1)`, excluding the maximum, whereas before it could hit exactly 1, which is not supposed to happen
  * Fixed S&H and Noise LFO types not properly freerunning for Scene LFOs
  * Removed a check which improperly changed song position with DAW looping enabled and transport not running, making LFO freerun mode not working properly in some cases

* Microtuning
  * Tuning Editor now contains the ability to create even division scales and three-note specified KBM files directly
  * Fixed a problem where MPE pitch bend in MPE mode with MTS enabled was using the wrong tuning system
  * "Use MIDI Channel for Octave Shift" tuning mode no longer conflicts with MPE mode
  * The Interval Between Notes display now makes it easier to see which interval you are playing

* Surge XT Effects Plugin
  * Complete accessibility review
  * Correctly report parameter names to host for the VST3 plugin
  * Double-clicking a parameter will reset it to the default value
  * Option to run the plugin in zero latency mode if your DAW can guarantee sending fixed blocks to the plugin

* UI, UX and Skin Engine Changes
  * Touchscreen mode improvements, which includes automatically using the Exact mouse sensitivity mode and long press support
  * Typein for FM3 oscillator's Ratio parameter is correctly read when typing in a modulation amount
  * Typing an out of range value for a parameter or modulation amount typein will now report the appropriate minimum or maximum value
  * Audio In sliders that are unused will now appear deactivated (semi-transparent)
  * Ctrl+click on a currently unselected LFO modbutton will bring that modulator to focus in the lower area (same as clicking the orange arrow, but now you have a larger hitzone to do it)
  * More consistent FX slot mouse gestures:
    * Double-click on FX slots will now bypass them (previously this was on right-click)
    * Right-click now pops up the more usefulFX presets menu
    * Single click works as it always did
  * The state of "Store Tuning in Patch" checkbox in the Save Patch dialog is now remembered after cancelling the dialog
  * 3D waveform display for Wavetable and Window oscillators - toggled by clicking the oscillator display (or via right-click context menu)
  * Context menus will now scale properly on Windows HiDPI displays
  * Add contextual help links in severeal places which were missing it
  * Context menu colors can now be set in skins
  * Added option to use OS dark mode setting for context menu colors, which overrides skin-defined colors
  * Skin engine can now override the global font used by Surge XT
  * The entire Classic skin (including hovers and tempo sync assets) is now contained inside the binary
  * Added pitch bend and modulation wheel widgets to the virtual keyboard
  * Correctly constrain plugin window drag-to-resize events
  * Waveshaper Analysis overlay now uses the actual Drive parameter for a realtime overview
  * The Modulation List now has new filtering options - by scene and by target parameter's control group
  * Most tearout windows can now be freely resized
    * Double-click on torn out window's title bar reverts to the default size
  * Improve error message to be clearer in the (very rare) situations where the patch database is locked by two Surge XT instances
  * The About-screen-as-skin-layout-grid feature is back! We completely forgot to port it over from Surge 1.9!

* Other Changes and Various Fixes
  * Support loading multichannel `.wav` files for wavetables (but load just the first channel, of course)
  * Polyphonic aftertouch is now properly processed per MIDI channel
  * Removed the Activate Scene Outputs option, which is not needed anymore due to JUCE's plugin wrapper handling
  * Favorites can now be exported and imported via .surgefav files (in essence these are CSV files with a new extension)
  * Correctly report VST3 bypass parameter and implement it in our JUCE processor
    * This should allow FL Studio's Randomize feature to stop disabling audio, and allow other VST3 hosts to bypass Surge XT as expected
  * Modbutton orange arrow state was incorrect on selection (but correct on drag gestures)
  * Fixed a bug when dragging FX slots with modulation assigned
  * Dropping a modulator on an overlay would modulate the slider underneath the overlay
  * Fixed a case where copying a modulation could duplicate a modulation routing
  * With the move to VST3 plugin bundle file format, Windows portable installs broke, so now they work again!
  * Drag and drop in the presence of overlays could corrupt Z-order of things
  * "Download Additional Content" link in the main menu didn't work, so now it works again!

* Infrastructure and Code Changes
  * We're making a substantial effort to make critical parts of Surge XT more like libraries that other projects can use
    * `sst-plugininfra` provides XML,fFilesystem, user preferences management, keyboard shortcut management, CPU information and more
    * `sst-cpputils` provides a collection of C++17 extensions we use a lot
    * `sst-filters` provides all Surge XT filters in a header-only set of templates - used as a submodule now
    * `sst-waveshapers` provides all Surge XT waveshapers in a header-only set of templates - used as a submodule now
  * Test case runtime substantially improved
  * Use `std::thread` everywhere for threading
  * Lots of improvements for the Windows installer
  * Use 7Zip for packing Windows ZIP files in the pipeline
  * Linux 'plugins only' archive is now a .tar.gz
  * The `.deb` file contains icons and an application startup for Linux
  * CMake options to skip ALSA and/or VST3 builds
  * Various changes to support JUCE 7 builds (although our production build is still using 6.1.6 until further notice)
  * Fixed comments and documentation typos across the codebase 

* Content
  * Updated Slowboat patches 
