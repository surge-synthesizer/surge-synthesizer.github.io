---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

# Changes in Surge XT 1.1

We plan to release Surge XT 1.1 sometime in Spring 2022, however no date has been decided quite yet. Here's what's done so far in the nightly, as of Jul 25th and 
commit 01efe591dd4de45edb2020a1f685349823c5b1b8, since XT 1.0.1 release.

* Action History
  * Surge XT now supports undo and redo for all actions (even loading patches!) - use either the common Ctrl+Z/Y keyboard shortcuts, or buttons on the GUI
  * If a patch has been modified, it will be marked as dirty and an asterisk will be appended to the patch name
    * By default, attempting to load a different patch will prompt the user to confirm the loading action in order not to lose your patch modifications
    * This can be disabled in Menu > Workflow

* CLAP Support
  * CLAP is an new standard for host plugin interoperability developed by a group of open source and commercial developers. Surge XT is an early adopter and a test case for CLAP. You can read more about CLAP at https://cleveraudio.org/
  * Surge XT implements - exclusively in the CLAP version - the non-destructive modulation (both monophonic and polyphonic!) and note expressions!

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
  * Using the announcement API, we read several actions, including patch changes and favorite changes
  * Fixed several components (oscillator copy/paste, scene copy/paste) which used mouse position improperly to find the source and target  
  * Overlay buttons (Tuning, Mod List, MSEG Editor, Formula Editor, etc.) respond properly to Enter, Shift+F10, and so on
  * Step sequencer rotate buttons are now exposed, and order of step and trigger parameters improved
  * Mod List parameter names and accesibility works well
  * Discrete parameters represented as menu buttons in the UI are now using the combo box element instead of a slider in screen readers
  * Effect tab order is now in display order, not internal storage order
  * Every text entry field has a correct focus-restoration target when dismissed
  * The typeahead search supports accesible navigation (fully on macOS and with a narration workaround on windows)
  * A workflow options allows you to expand modulation menus to have specific edit/clear/mute submenus rather than compound multi-click menus
  * Introduce a mode where accesible key presses follow the mouse focus rather than keyboard focus.
  * Many other small changes

* New Overlays
  * Keyboard shortcut editor:
    * Allows freely changing or disabling any of the available keyboard shortcut actions offered by Surge XT, in case there is a clash with keyboard shortcuts reserved by your DAW
  * New Filter and Improved Waveshaper analysis:
    * Filter Window Shows frequency response curves for Filter 1 and Filter 2 (also in realtime as you change filter cutoff, resonance and mixer pre-filter gain parameters)
    * Waveshaper now uses the patch drive level as opposed to a what-if drive level

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
  * Simultaneous chords played on the exact same tick created voices well over the polyphony limit. Fix.

* Voicing Changes
  * Both Poly and Mono modes get expanded envelope and voice triggering modes, accesible from the right mouse menu on the Play Mode widget.
  * In PolyMode you can choose whether repeated strikes of the same key create a new voice or retrigger the currently playing voice (if there is one).
  * In Mono modes, you can select whether the envelopes (AEG and FEG) retrigger from 0 or from their current level if a voice is playing. 

* Effects
  * Added multiple clipping options for the feedback path in the Delay effect (right-click the Feedback parameter)
  * Added option to extend the Delay Feedback parameter range, allowing negative feedback
  * Implemented the Tone filter to the Phaser effect (same as the one from Combulator)
  * Added new AirWindows effects: Cabs, Chrome Oxide, Dub Sub, Dub Center, Fire Amp, Glitch Shifter, Nonlinear Space, Pafnuty, Power Sag, Tape Dust, To Vinyl
  * Fixed a bug which could make Nimbus occasionally distort, especially in Looped Delay mode (applies to the Surge XT Effects plugin as well)
  * Spring Reverb Decay Parameter and Flanger Combs Count Parameter get more accurate display and typein behavior in the UI.
  * Dragging an Airwindow around the effects routing panel no longer resets the parameters.
  * Delay Feedback can be extended, allowing negative feedback.

* Modulation
  * All LFOs now have 3 outputs: the signal multiplied by the LFO EG, the raw LFO signal alone, and the LFO EG alone
  * LFO attack will now start after setting up voice level modulators - this enables modulating voice LFO amplitude with velocity, which didn't work before
  * The range of the fractional part of the LFO phase is supposed to be strictly `[0, 1)`, excluding the maximum, whereas before it could hit exactly 1, which is not supposed to happen
  * Fixed S&H and Noise LFO types not properly freerunning for Scene LFOs
  * Removed a check which improperly changed song position with DAW looping enabled and transport not running, making LFO freerun mode not working properly in some cases
  * Deleting nodes in MSEG LFO mode could lead to a mis-configured MSEG in some cases. Fix.
  * The Modulation List now can launch a type-in for values with the pencil icon.
  * The step-sequencer deform slider now has deform types; and brings the ShortCircuit LFO smooth deform into Surge.
  * Adjust the SNH modulator so that the initial state is random, leading to less uniformity in the first few phases of SNH noise.
  * CHange the order of voice initiation and LFO attack in latch mode so a latch more accurately represents the voice.

* Microtuning
  * Tuning Editor now contains the ability to create even division scales and three-note specified KBM files directly
  * Fixed a problem where MPE pitch bend in MPE mode with MTS enabled was using the wrong tuning system
  * "Use MIDI Channel for Octave Shift" tuning mode no longer conflicts with MPE mode
  * The Interval Between Notes display now makes it easier to see which interval you are playing

* Larger Bugs
  * We initialized the audio processing state too early which, in some cases loading the plugin in Logic Pro, could result in the patch resetting.
  * We mis-handled a patch load in the startup path of reaper, meaning loading a Reaper session with disabled Surge track would never load the
state, and subsequently resaving without activating the track would save the mis-initialized state. 

* Surge XT Effects Plugin
  * Complete accessibility review
  * Basic resizability in place, through corner drag, menu and keyboard shortcuts.
  * Correctly report parameter names to host for the VST3 plugin
  * Double-clicking a parameter will reset it to the default value
  * Option to run the plugin in zero latency mode if your DAW can guarantee sending fixed blocks to the plugin
  * Fixed Effect type menu not repainting when host automated
  * AirWindows type parameter is now streamed and unstreamed properly, so that projects don't break if we add new AirWindows effects
  * Fix a problem with integer streaming that means, going forward, changes in integer param ranges in Surge will not break broken Surge XT Effects sessions.

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
  * Added skin connectors for placing the new overlay windows (filter and waveshaper analysis)
  * The entire Classic skin (including hovers and tempo sync assets) is now contained inside the binary
  * Added pitch bend and modulation wheel widgets to the virtual keyboard
  * Correctly constrain plugin window drag-to-resize events
  * Waveshaper Analysis overlay now uses the actual Drive parameter for a realtime overview
  * The Modulation List now has new filtering options - by scene and by target parameter's control group
  * Most tearout windows can now be freely resized
    * Double-click on torn out window's title bar reverts to the default size
  * Improve error message to be clearer in the (very rare) situations where the patch database is locked by two Surge XT instances
  * The About-screen-as-skin-layout-grid feature is back! We completely forgot to port it over from Surge 1.9!
  * Typeins where you enter an out-of-range value will now show you valid range in the typein field.
  * The Macro Sliders and Number Fields send begin/end edit events allowing for better usage in DAW Automation contexts.
  * With no default zoom set, the zoom menu didn't let you set a default zoom. Fixed.
  * The wavetable 'morph' parameter displayed the wrong units in continuous and discrete modes; and the 3D display mis-displayed the wave.
  * Mute and Solo buttons no longer overlap.
  * F1 key shows help for currently focused element.
  * Sustain in the virtual keyboard.
  * Make PNG loading lazy, allowing us to restore PNG/Fixed Zoom skins, like Royal!
  * Improve Alias Harmonics editor mouse handling when out of range.
  * Imporved tearout behaviour, including a pin-to-top option.
  * Patch comment popup width is more appropriate.
  * Mouse-wheel in FX and Oscillator menus properly advances through sub-menus

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
  * "Absolute" mode was not preserved when copying oscillators, scenes, etc... Fix
  * Send automation events from several ui components which didn't, leading to them working inconsistently in Cubase VST3.
  * Special characters like `'` no longer break the SQLLite search. No bobby tables here!
  * .wav chunks must have an even number of bytes; fix our wav parser so when the size is odd we din't mis-read the wav file, which occured with some metadata chunks.
  * Upgrade MTS-ESP library allowing Surge + MTS-ESP + Linux to work.
  * Tuning Library can deal with fractions in SCL/KBM files up to 2^64 for numerator and denominator

* Infrastructure and Code Changes
  * We're making a substantial effort to make critical parts of Surge XT more like libraries that other projects can use
    * `sst-plugininfra` provides XML, filesystem, user preferences and keyboard shortcut management, CPU information and more
    * `sst-cpputils` provides a collection of C++17 extensions we use a lot
    * `sst-filters` provides all Surge XT filters in a header-only set of templates - used as a submodule now
    * `sst-waveshapers` provides all Surge XT waveshapers in a header-only set of templates - used as a submodule now
  * Test case runtime substantially improved
  * Use `std::thread` everywhere for threading
  * Lots of improvements for the Windows installer
  * Re-instante Windows Portable mode by chcking recursively for SurgeUserData etc... folders
  * Use 7Zip for packing Windows ZIP files in the pipeline
  * Linux 'plugins only' archive is now a .tar.gz
  * The `.deb` file contains icons and an application startup for Linux
  * CMake options to skip ALSA and/or VST3 builds
  * Various changes to support JUCE 7 builds (although our production build is still using 6.1.6 until further notice)
  * Fixed comments and documentation typos across the codebase 
  * Provide a cleaner compile-time error if building on a system other than x86 or ARM
  * Ability to build a slightly reduced `surge-common` without JUCE or LUA (for the upcoming surge-rack XT project)
  * Rename the `surge-py` target to `surgepy` to avoid a `-` which causes load time problems in python.
  * Make sure to cleanly join the background patch load thread on exit if it is still running or if another patch load begins.
 
* Content
  * Updated Slowboat patches 
  * Update John Valentine Patches
  * New wavetables from Quonundrai
