---
layout: page
title: Changelog
permalink: /changelog/
---

This page contains changelogs for all release versions of Surge. For the latest developments, we are keeping
a <a href="/nightlychangelog">separate nightlies changelog, which will be merged to this page upon release</a>.

<script>
function toggleCl(log) {
  let id = document.getElementById(log)
  let style = window.getComputedStyle(id)
  let compStyle = style.getPropertyValue('display')
  if (compStyle == 'block') id.style.display = 'none'
  else if (compStyle == 'none') id.style.display = ''
}
</script>

<div id="changelog" markdown="0">

  <h1><a href="javascript:toggleCl('xt1.1.2')">Changes in Surge XT 1.1.2</a></h1>

<div markdown="1" id="xt1.1.2" style="display: block">
  
  We released Surge XT 1.1.2 on November 1, 2022.
  
  The primary reason for this point release is that it contains a fix for a problem in recent versions of Ableton Live, where Surge XT's sliders
and Live's VST3 automation conflict. If you have experienced jumpy or inconsistent sliders in Live, you should update Surge XT!

Additionally, 1.1.2 contains these incremental changes:

- Plugins
   - Fixed inconsistent and jumpy sliders in Ableton Live, due to inconsistent VST3 value setter messages, which recent versions of Live would send 
   - CLAP: Correctly labeled a number of parameters which are not polyphonically modulatable as such
   - CLAP: `CLAP_NOTE_ON` events with velocity of 0 will now act as note offs
   - CLAP: Defensively support the CLAP parameter cookie being `nullptr` without crashing

- MIDI
   - Added an option for using MIDI channels 2 and 3 to play individual scenes, or not (enabled by default)
   - Clearing current MIDI mapping will now also clear it from the DAW session state

- DSP
   - Processing block size is now a compile-time constant which can be a power of 2, but larger than 4 (Surge XT remains at block size of 32 samples)
   - Added the Absolute option for Combulator voices 2 and 3, so that their frequencies can be set as absolute values in Hz, unlinked from voice 1
   - Modulating global volume will now work (but be careful not to modulate too much!)

- UI/UX
   - Fixed a crash in the FX grid which occured on some Linux systems
   - Muted oscillator waveforms will now appear semi-transparent
   - Fixed the always-on-top pin button for the torn out overlays not being visible on macOS
   - Waveshaper effect parameter group names clearer
   - Added an option to display CPU load as a number in the VU meter (Menu > Value Displays)
   - Middle-mouse click on Patch and Category previous/next buttons will load random patch (regression from Surge 1.9)
   - Patch comments tooltip will now appear more quickly
   - Added a few accessibility labels and annoucnements we've missed, including the About screen
   - Holding Shift when saving a patch will force-overwrite the patch (bypasses the dialog asking if you want to overwrite the patch)
   - Shift-clicking in the main frame to open the main menu will now show Developer submenu
   - We will now display skin's category in the About screen, if it's defined in the skin's XML file
   - Restored the CLAP logo to the About screen of the Surge Dark skin

- Content
   - Added LinnStrument/MPE optimized patches from Roger Linn and the LinnStrument community 

- Infrastructure and work to re-introduce Surge XT in VCV Rack
   - Fixed a problem where an invalid patch in the user search path could in some cases crash the patch database scanner
   - Modified CMake so that Surge XT can be used as a sub-library of another project
   - Made `surge-common` buildable without building all of JUCE, instead cherry-picked a few JUCE dependencies
   - Made `surge-common` build without Lua
   - Provided a from-disk `windows.wt` loading strategy for VCV Rack
   - CMake now exports a `compile_commands.json`
  
  
<h1><a href="javascript:toggleCl('xt1.1.1')">Changes in Surge XT 1.1.1</a></h1>

<div markdown="1" id="xt1.1.1" style="display: block">

We released Surge XT 1.1.1 on August 25, with a collection of small changes and improvements which we found
either late in the 1.1.0 cycle or after release. We recommend all users upgrade to 1.1.1.
  
* Regressions from 1.0.1 and Breaking Changes
   * Restore the correct operation of the Airwindows AD Clip effect  
   * Waveshaper effect incorrectly scaled the input level, which means that the simple test of sine -> voice level waveshaper had a different response
   than sine -> waveshaper effect. Remediated this by correcting the input scale on Waveshaper effect. This may result in increased output level of patches which use the Waveshaper effect

* Performance and DSP
   * Added a JUCE patch which allows sample-accurate MIDI CC and pitch bend messages in VST3 plugin (especially important with long block sizes)  
   * Set the velocity of reused voices correctly in monophonic play modes
   * When "Continue from current level" envelope retrigger option is used with Mono FP play mode, portamento would not reset when a gap between two played notes occured (non-legato)
   * Revert a set of integer modulation changes which were nascent in 1.1.0, but which have also caused pops, clicks and incorrect unison settings when changing filter, voice, and oscillator types while there were active voices playing

* Accessibility
   * The name of the accessible overlay for the FX slots contains the effect type name, as well as the slot name
   * Correctly labelled Previous and Next wavetable jog buttons (they were backwards)
   * Deactivated additional accessibility announcements (oscillator name, patch name, etc...) by default, since an unknown bug makes them speak for Windows users, even with accessibility features of Windows turned off
   * Correctly named the "Arm/Disarm" buttons on the modulator buttons when states change
   * Step sequencer announces when the value of a step is on an exact 1/12th for pitch-based sequencing
   * The wavetable info (available in wavetable display's context menu) is now accessible on Mac
   * Changing the LFO type will now send an accessible notification to update the screen reader state
   * Effects routing grid now properly handles key presses (Shift+F10), and 

* UI/UX
   * Filter 2 Offset mode, when copied via "Copy scene" command, now properly sets up the target's Filter 2 cutoff
   * The Filter overlay now correctly uses Filter 2 Offset and Resonance Link options when drawing the frequency response curve
   * Any keystrokes pressed while the Patch Browser is scanning content are now handled by the browser itself, avoiding accidental forwarding of keystrokes to the DAW
   * Added a new option to the Patch Browser context menu: "Reveal in Finder / Show in Explorer", for quick drag and drop sharing!
   * We will now correctly set default zoom to 100% when no default zoom is set
   * Mousewheel on all the various previous/next jog buttons will now scroll through the relevant data (regression from Surge 1.9)
   * Since we now have action history (undo/redo), we will not prompt the user by default when loading a patch while the current patch is dirty
   * Right mouse click on the Wavetable menu will now wavetalbes for just the currently selected folder
   * When loading a patch, Surge will try to locate the loaded wavetables in the wavetable menu, enabling previous/next jogging, correct checkmark display, etc.
   * Virtual keyboard velocity now always spans 1 ... 127 when clicked via mouse
   * Added a new keyboard shortcut (default Alt/Opt+A) to arm and unarm modulators, which also deprecates the Workflow > Tab Key Arms Mmodulators option (so we won't be showing it anymore)
   * Renamed legacy filter subtypes more logically to Standard/Driven/Clean (instead of Clean/Driven/Smooth)
   * Paste with Modulation option is now undoable

* CLAP Support
   * CMake install rules for Linux will now install CLAP flavors, even if you don't use .deb or RPM
   * Mac installer will now have CLAP selected by default; also, all options are now alphabetized
   * paramsFlush() implementation for CLAP is now safe to call when processing is happening, even though this probably shouldn't happen

* Infrastructure and Miscellaneous
   * Moved build infrastructure to Ubuntu 20 LTS, since Azure is deprecating Ubuntu 18
   * Replaced `static const auto one = _mm_set1_ps(1.0)` with just `const auto one =` to avoid a static lock (thanks to The Audio Programmer Discord community for catching this!)
   * Moved `HalfRateFilter` to `sst-filters` library; it is shared between Shortcircuit and Surge
   * Spupress mousewheel gestures during mouse drags to avoid nested begin/end edits with Mac trackpads
   * Changed Mac signing in order to allow Formula modulator to work in standalone on macOS 10.14
   * Mac installer won't allow installing to a non-system drive now
   * Fixed a crash when closing the plugin window in REAPER while the Patch Browser menu was open
   * Reviewed various other timers and delayed objects in order to avoid crashes similar to the above one
   * Correctly read XDG defaults so that XDG data for DOCUMENTS_HOME correctly follows the specification on Linux
   * Fixed a problem where Surge would enter an infinite loop when the stored key mappings would advertise a keymapping for an unknown function
  
* Content
   * New wavetables from Philippe Favre    
   * Updated Formula tutorial "09 Example - Crossfading Oscillators"
</div>  
  
<h1><a href="javascript:toggleCl('xt1.1')">Changes in Surge XT 1.1</a></h1>

<div markdown="1" id="xt1.1" style="display: none">

We released Surge XT 1.1 on August 3, 2022. It adds several big new features, including edit history (undo/redo), support for the new CLAP standard, expanded and improved support for accessible interfaces like screen readers, several new DSP and voice management features, and much more. 

* Action History
  * Surge XT now supports undo and redo for all actions (even loading patches!) - use either the common Ctrl+Z/Y keyboard shortcuts, or buttons on the GUI
  * If a patch has been modified, it will be marked as dirty and an asterisk will be appended to the patch name
    * By default, attempting to load a different patch will prompt the user to confirm the loading action in order not to lose your patch modifications
    * This can be disabled in Menu > Workflow

* CLAP Support
  * CLAP is a new standard for host-plugin interoperability developed by a group of open source and commercial developers. Surge XT is an early adopter and a test case for CLAP. You can read more about CLAP at https://cleveraudio.org/
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
  * Using the announcement API, we read several actions, including patch and favorites changes
  * Fixed several components (oscillator copy/paste, scene copy/paste) which used mouse position improperly to find the source and target  
  * Overlay buttons (Tuning, Mod List, MSEG Editor, Formula Editor, etc.) respond properly to Enter, Shift+F10, and so on
  * Step sequencer rotate buttons are now exposed, and order of step and trigger parameters improved
  * Mod List parameter names and accesibility works well
  * Discrete parameters represented as menu buttons in the UI are now using the combo box element instead of a slider in screen readers
  * Effect tab order is now in display order, not internal storage order
  * Every text entry field has a correct focus-restoration target when dismissed
  * The patch search typeahead supports accesible navigation (fully on macOS and with narration workaround on Windows)
  * New Workflow menu options allow you to expand modulation menus to have specific edit/clear/mute submenus, rather than compound multi-click menus
  * Introduced a mode where accesible key presses follow the mouse focus, rather than keyboard focus
  * Many other small changes and fixes

* New Overlays
  * Keyboard shortcut editor:
    * Allows freely changing or disabling any of the available keyboard shortcut actions offered by Surge XT, in case there is a clash with keyboard shortcuts reserved by your DAW
  * Filter Analysis:
    * This new overlay will show frequency response curves for Filter 1 and Filter 2, in realtime as you change filter cutoff, resonance and mixer pre-filter gain parameters

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
  * Fixed a bug where simultaneous chords played on the exact same tick created voices well over the polyphony limit

* Play Mode Updates
  * Both Poly and Mono modes get expanded envelope and voice triggering modes, accesed from the right mouse click context menu on the Play Mode parameter
  * In Poly mode you can choose whether repeated strikes of the same key create a new voice or retrigger the currently playing voice (if there is one)
  * In Mono modes, you can select whether the envelopes (AEG and FEG) retrigger from zero, or from their current level if a voice is playing

* Effects
  * Added multiple clipping options for the feedback path in the Delay effect (right-click the Feedback parameter)
  * Added option to extend the Delay Feedback parameter range, allowing negative feedback
  * Implemented the Tone filter to the Phaser effect (same as the one from Combulator)
  * Added new AirWindows effects: Cabs, Chrome Oxide, Dub Sub, Dub Center, Fire Amp, Glitch Shifter, Nonlinear Space, Pafnuty, Power Sag, Tape Dust, To Vinyl
  * Fixed a bug which could make Nimbus occasionally distort, especially in Looped Delay mode (applies to the Surge XT Effects plugin as well)
  * Spring Reverb's Decay parameter and Flanger's Count parameter now have a more accurate display and value typein behavior
  * Dragging an Airwindows effect around the FX routing grid no longer resets its parameters
  * Delay's Feedback parameter can now be extended, allowing negative feedback

* Modulation
  * All LFOs now have 3 outputs: the signal multiplied by the LFO EG, the raw LFO signal alone, and the LFO EG alone
  * LFO attack will now start after setting up voice level modulators - this enables modulating voice LFO amplitude with velocity, which didn't work before
  * The range of the fractional part of the LFO phase is supposed to be strictly `[0, 1)`, excluding the maximum, whereas before it could hit exactly 1, which is not supposed to happen
  * Fixed S&H and Noise LFO types not properly freerunning for Scene LFOs
  * Removed a check which improperly changed song position with DAW looping enabled and transport not running, making LFO freerun mode not working properly in some cases
  * Fixed cases where deleting nodes in MSEG LFO mode could lead to a broken envelope
  * Modulation List can now launch a value edit typein with the pencil icon
  * Step Sequencer's Deform slider now has deform types, which brings Shortcircuit's LFO Smooth method to Surge
  * Adjusted the S&H modulator so that the initial state is random, leading to less uniformity in the first few phases
  * Changed the order of voice initiation and LFO EG Attack in Latch mode so a latch more accurately represents the voice

* Microtuning
  * Tuning Editor now contains the ability to create even division scales and three-note specified KBM files directly
  * Fixed a problem where MPE pitch bend in MPE mode with MTS enabled was using the wrong tuning system
  * "Use MIDI Channel for Octave Shift" tuning mode no longer conflicts with MPE mode
  * The Interval Between Notes display now makes it easier to see which interval you are playing

* Larger Bugfixes
  * We initialized the audio processing state too early, which in some cases could result in the patch resetting when loading the plugin in Logic Pro
  * We incorrectly handled patch loading in the startup path of Reaper, meaning loading a Reaper session with disabled Surge track(s) would never load the
state correctly, and subsequently resaving without activating the track would save the incorrectly initialized state

* Surge XT Effects Plugin
  * Complete accessibility review
  * Implemented UI resizability through corner drag, menu and keyboard shortcuts
  * We now correctly report parameter names to host for the VST3 plugin
  * Double-clicking a parameter will now reset it to the default value
  * Added an option to run the plugin in zero latency mode - useful if your DAW can guarantee sending fixed block sizes to the plugin
  * Fixed Effect type menu not repainting during host automation
  * Airwindows Type parameter is now streamed and unstreamed properly, so that projects don't break if we add new Airwindows effects
  * Fixed a problem with integer streaming, which means that, going forward, changes in integer param ranges in Surge will not break Surge XT Effects sessions

* UI, UX and Skin Engine Changes
  * Royal Surge skin has been updated to fully match Surge XT feature set!
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
  * Fixed a bug where the Zoom menu wouldn't allow setting default zoom level, if default zoom level wasn't at all defined
  * Wavetable oscillator's Morph parameter displayed wrong units in continuous and discrete modes
  * Mute and Solo buttons no longer overlap, which created uncertainty in which parameter actually gets clicked
  * Pressing the F1 key will now open the relevant part of the manual for currently focused (or hovered) parameter
  * Added Sustain button to the virtual keyboard
  * Make PNG loading lazy, which resolved sporadic crashes with skins that use PNGs, like Royal Surge
  * Improve Alias Harmonics editor mouse handling when mouse cursor is out of editor's bounds
  * Imporved tearout behaviour, adding an Always On Top pin button in the title bar
  * Patch comment popup width will dynamically adjust its width to fit longer comments now
  * Mousewheel in FX and Oscillator menus properly advances through submenus

* Other Changes and Various Fixes
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
  * "Absolute" option was not preserved when copying oscillators, scenes, etc.
  * We're now sending automation events from several widgets which didn't do that, leading to inconsistent automation in Cubase
  * Special characters like `'` no longer break the SQLite search. No [little Bobby Tables](https://xkcd.com/327/) here!
  * WAV chunks must have an even number of bytes, so we've fixed our WAV parser for the case when the size is odd, preventing incorrectly reading the file - which could happen with certain metadata chunks
  * Upgraded MTS-ESP library, which allows MTS-ESP to work on Linux
  * Tuning Library can now deal with fractions up to 2^64 for numerator and denominator in SCL/KBM files

* Infrastructure and Code Changes
  * We're making a substantial effort to move critical parts of Surge XT into libraries that other projects can use
    * `sst-plugininfra` provides XML, filesystem, user preferences and keyboard shortcut management, CPU information and more
    * `sst-cpputils` provides a collection of C++17 extensions we use a lot
    * `sst-filters` provides all Surge XT filters in a header-only set of templates - used as a submodule now
    * `sst-waveshapers` provides all Surge XT waveshapers in a header-only set of templates - used as a submodule now
  * Test case runtime substantially improved
  * Use `std::thread` everywhere for threading
  * Lots of improvements for the Windows installer
  * Reinstated Windows portable mode by checking recursively for SurgeUserData etc. folders
  * Use 7Zip for packing Windows ZIP files in the pipeline
  * Linux 'plugins only' archive is now a .tar.gz
  * The `.deb` file now contains icons and an application startup for Linux
  * Added CMake options to skip ALSA and/or VST3 builds
  * Various changes to support JUCE 7 builds (although our production build is still using 6.1.6 until further notice)
  * Fixed comments and documentation typos across the codebase 
  * We now provide a cleaner compile-time error if building on a system other than x86 or ARM
  * Added ability to build a slightly reduced `surge-common` without JUCE or Lua (for the upcoming Surge Rack XT project)
  * Renamed the `surge-py` target to `surgepy` to avoid a `-`, which causes load time problems in Python
  * Made sure to cleanly join the background patch loading thread on exit if it is still running or if another patch load begins
 
* Content
  * Updated Slowboat patches 
  * Updated John Valentine patches
  * New wavetables from Quonundrai
  * New wavetables from A.Liv and Exocat

</div>

<h1><a href="javascript:toggleCl('xt1.0.1')">Changes in Surge XT 1.0.1</a></h1>

<div markdown="1" id="xt1.0.1" style="display: none">

We have the best testers in the world, we really do. Surge XT 1.0 was nearly 1000 GitHub commits, almost every
part of the code changed, and our beta testers discovered almost every bug before we released. And we had 
a lot of them. Those same testers found a few more bugs after we released, though, and a couple of them
were serious enough that we decided to collect up the first fortnight of finds and fixes and do a small point
release to give us time to get XT 1.1 together.

- Larger Bugfixes
   - The Formula modulator vector output would crash or go into an infinite loop with 8 or more output values. Fixed 
to report a single error message when we have more than 8 outputs
   - Fixed a crash when using vector modulators to modulate an FX slot and drag and drop to reordering effects
   - On macOS, the menu outline box was not painted, making menus visually confusing for many users.
Fixed to have parity in how menus look vs Windows and Linux
   - Fixed a set of issues with the Windows installer which we found once more people actually ran the installer on various systems
   - If two MIDI events had an identical timestamp, the second and all subsequent MIDI events in that block would push
to the end of the block causing potential block-length synchronization errors
   - The introduction of JUCE created a bypass parameter for VST3 plugins, which in some cases was improperly automated (especially in the FL
randomizer). While we wait for a longer term fix, we made Surge XT continue to render when bypassed
   - While most of our help links pointed to the XT manual, the actual Menu > Manual link pointed to the old manual!

- Smaller issues and regressions from Surge 1.9
    - In touchscreen mode, always use Exact mouse sensitivity option
    - When modulating FM ratios, use a correct result if a typein retains the "C: " prefix
    - User patches without categories will now appear in an uncategorized submenu (instead of not at all)
    - ZIP files for Windows builds are now created with 7zip, so that Explorer can now unpack them without any 3rd party unpackers
    - Rename the Tutorials skin category properly
    - The filter cutoff slider wouldn't visually reset when using the Reset to Keytrack Root option
    - MSEG draw mode was incorrectly remembered across different MSEG modulator instances
    - Dark skin had a graphical error in filter configuration graphic
    - Favorites and Search icons were added to the Dark skin

- Added a couple of XT 1.1 features which were harmless to merge
    - Improved our testcase runtime
    - Removed some OS specific APIs for thread handling now that we are on C++17
    - If a multi-channel .wav file is loaded as a wavetable, we will load only the left channel instead of erroring out
    - Ctrl-click on a modbutton will now arm a modulator without selecting it
    - Bring back certain patches from Luna that were in Surge 1.9

</div>

<h1><a href="javascript:toggleCl('xt1.0')">Changes in Surge XT 1.0</a></h1>

<div markdown="1" id="xt1.0" style="display: none">

Our next release of Surge - aptly named Surge XT - made a fundamental architectural break with prior
Surge versions (up to 1.9), porting to the JUCE framework and changing the plugin ID, while
adding a variety of exciting new features. Here's what's new!

- Plugin Names
   - New names are Surge XT and Surge XT Effects
   - Similarly, the user data folder is now named Surge XT
   - Please consult the manual for a migration guide from Surge 1.9 or earlier (work in progress)

- Port to JUCE
  - There are innumerable changes, including basically a rewrite of the entire plugin layer
    and re-implementing all of the widgets and UI components
  - Although we don't distribute an LV2 plugin, JUCE-LV2 port project branch allows Linux
    users to build LV2 if they wish, and it has almost all the features of the
    VST3 version (excluding the features VST3 supports and LV2 does not)
  - Port to JUCE also allows us to provide a standalone version of Surge XT

- Patch Navigation
  - Implemented a system to mark patches as favorites
    - Click the heart button in the Patch Browser to tag a favorite
    - Right-click it to see all your favorites in a menu
  - Implemented a searchable database for all patches
    - Click the magnifier button in the patch browser and type away!
  - User can now choose a default patch that will be loaded upon instantiating Surge XT
  - Patch comments can span more than a single line now, and they also show up in a tooltip when you hover above the Patch Browser

- Modulation
  - New Modulation List overlay
     - Provides a complete overview of all assigned modulations in the patch
     - You can filter the list by source or by target
     - You can add new modulation assignments using the Source and Target menus
     - You can mute or remove modulations, too
  - Modulation assignments in context menus now look nicer and show additional icon-based buttons with options (remove, mute, edit)
  - Added Copy and Paste with Modulation options to modbutton context menu
  - Formula modulator
    - As promised in Surge 1.9!
    - Enabled by embedding LuaJIT in Surge
    - Formula modulator enables you too many things to list here, so we have added a number of tutorials
      to showcase at least some of the things that are now possible
  - Vectorized/indexed modulators
    - Modulators can now provide more than one output simultaneously
    - Currently, modulators which employ this feature are Formula, Random and Alternate
  - Modbuttons can now be drag-and-dropped everywhere (without holding Control/Command like in Surge 1.9)
  - You can now temporarily mute modulations, either via context menu, or via the new Modulation List
  - Added a second deform mode for S&H LFO type
  - MSEG can now trigger FEG and/or AEG on each node, via context menu options
  - LFO Shuffle parameter can now be extended to allow bipolar shuffle (useful for adding swing in the step sequencer)
  - MSEG Editor now supports lasso/marquee node selection (Shift+left mouse drag )
  - LFO EG can now be deactivated. Right-click any of the DAHDSR sliders
  - Scene-level modulation sources can now independently modulate global parameters (any FX parameter, for example).
    Previously, only Scene A scene-level modulators were applied
  - Fixed a bug where Scene LFOs were triggered at the outset, which almost never mattered unless you modulated something latched, like a noisy FX

- Accessibility
  - JUCE 6.1 added support for accesible interfaces, allowing screen readers and other navigation tools to work
  - So we made use of that, resulting in Surge XT sporting a comprehensive accessibility support
  - While most things are accessible, there are still some things that could be improved, which will be coming in Surge XT 1.1

- Keyboard Shortcuts
   - There are numerous new keyboard shortcuts for both the plugin and standalone (optionally enabled in Menu->Workflow)
   - When pressing any of the below shortcuts for the first time, Surge will prompt for enabling the option automatically, with option to remember your choice
   - Num +/Num - zooms in/out by 10%, Shift+Num +/Num - zooms in/out by 25%, Shift+Num / resets zoom to default
   - Up/Down modifies focused parameter value, Home/End modifies the value to minimum/maximum, Del returns to default
   - Shift+Left/Right changes to previous or next patch category
   - Control/Command+Left/Right loads previous or next patch
   - Control/Command+S opens the Save Patch dialog
   - Control/Command+F starts patch search typeahead
   - Alt+F to toggle setting the patch as favorite
   - Alt+E to toggle the appropriate LFO editor overlay (MSEG or Formula)
   - Alt+T to toggle the new Tuning Editor overlay
   - Alt+M to toggle the new Modulation List overlay
   - Alt+D to toggle the debug console
   - Alt+K to toggle the new Virtual Keyboard
   - Alt/Option+1/2/3 to toggle between the oscillators
   - Alt+S to toggle between the scenes
   - F1 to open the manual
   - F5 to refresh the currently loaded skin
   - F12 to show the About screen

- Microtuning
  - Tuning interface from Tuning Workbench Synth is now implemented in Surge XT!
    - Right-click the Tune button and choose Tuning Editor, then explore! It's even better than in TWS, containing lots of new views
  - Several smaller microtuning changes:
    - Voice skip in KBM with 'x' works
    - Added channel-per-octave mode for controllers such as Lumatone
    - Added extendability to the pitch bend range parameter, which enables fractional pitch bend ranges
      - In 'Apply tuning at MIDI input' mode, this results in frequency.cents, while in 'Apply tuning after modulation' mode this results in keys.cents
    - Pitch-based parameter type-ins allow entering values as fractions (for example, right-click Osc 1 Pitch, Edit Value, then type 9/8, you will get 204 cents)
 - There are now options to retain (lock) the current tuning and/or mapping when loading patches. Find them in Menu->Patch Defaults->Tuning on Patch Load

- Filter Section
  - Added a new Tri-Pole filter type (inspired by Ian Fritz's Threeler filter)
  - Greatly expanded the waveshaper section
    - Increased the number of waveshaper types from 5 to 43!
    - Harmonic extension, noise, trigonometric wavefolders, classic wavefolders, and much more
  - Filters and waveshapers are now deactivatable by double-clicking the filter type icon/waveshaper curve, or a right-click context menu option

- Effects
  - Surge now has 4 send, scene insert and global insert effect slots!
  - Added a new Clear Reverb parameter to Airwindows Infinity effect
  - Added a new Spring Reverb effect from Jatin Chowdhury
  - Waveshaper is now available in the FX section as well
  - Added a new Mid-Side Tool effect, which enables transformations from stereo to mid-side and back, with additional filtering for mid and side
  - Added a new Precision option to the Tape effect (right-click any of Hysteresis section parameters) - it also affects CPU usage of the effect!
  - SIMD vectorization improvements for the Tape effect
  - Added a highpass filter applied to the sides of the signal to the Conditioner effect
  - Added Airwindows Mackity, MackEQ and Chamber effects

- Functional Differences vs Surge 1.9
  - Surge XT modifies where user content is stored
     - Surge XT uses a different folder for user content, with the name changed from `(Documents)/Surge` to `(Documents)/Surge XT`
       where `(Documents)` is the path to your OS-specific Documents folder
     - Surge XT forces content type into subfolders - `FX Presets`, `Patches`, `Wavetables` etc...
     - When you start the plugin for the first time, it will create an empty directory structure for you. You can simply copy your content from
       your Surge folder to your Surge XT folder
     - Note that, just like in Surge, all patches and wavetables need to be categorized. So a patch which was at `Surge/Basses/Plunky.fxp` needs to be
       moved to `Surge XT/Patches/Basses/Plunky.fxp`
  - Fixed a couple of bugs which means Surge XT will behave differently than Surge 1.9 in minor ways:
    - Mono FP play mode had a bug where the second to last held key would sometimes not trigger portamento to the last key
    - Twist oscillator's LPG incorrectly had its delay time sustained by about 4x in non-FM mode. This is now fixed, but patches which
      use Twist's LPG will need to be tweaked in order to adjust their delay
    - Surge XT Effects plugin now works with block sizes smaller than 32, which also fixes its behavior in FL Studio

- Other Changes and Various Fixes
  - Window oscillator now has a Continuous Morph option, matching the Wavetable oscillator in behavior
  - Fixed gain and clipping math in the Ensemble effect
  - Global volume can now be saved and restored in newly created patches
  - All Notes Off and All Sounds Off MIDI messages are now properly supported
  - Fixed an initialization bug in some of the waveshapers used in Distortion effect, which could result in
    uninitialized audio and subsequent blowups
  - Fixed a bug which could cause Airwindows effects to crash when switching patches quickly
  - Fixed a bug where Polyphony set above 61 caused a voice stealing error, if voices went above 64
  - Fixed a bug where certain patches using the Window oscillator showed incorrect value for Formant parameter
  - Fixed a memory initialiation bug in Surge XT Effects plugin which would sporadically crash the plugin

- UI, UX and Skin Engine Changes
  - Cleaned up and reorganized the main menu
  - Any overlay can now be torn out in a separate window (and reinstated back inside Surge XT window)
  - Overlays can now be moved around Surge XT's window
  - By default we no longer bind the TAB key to arm modulations (middle mouse click will still work!).
    If you want to restore this behavior (which can conflict with focus order and other accesibility
    features), Menu->Workflow contains an option to do so permanently
  - Added an option for appending the original patch author's name in parentheses when modifying the patch (defaults to on)
  - Skins can now include True Type fonts for skin-specific fonts. See Tutorial 10!
  - Skin version 1 is now deprecated and unsupported
  - A bunch of new skin color definitions - make sure to visit Menu->Skins->Skin Inspector with Surge Dark skin loaded to learn what's new!
  - Patch name, Category and Author fields in the Patch Browser will automatically adapt when displaying long patch names in order not to overlap
  - Added the Waveshaper Preview overlay (click on the waveshape button below the waveshaper type menu),
    which shows how would currently selected waveshaper curve affect a fullscale sine wave input
  - Added a QWERTY virtual keyboard (on by default in standalone, off by default in plugin)
    - Option to toggle the virtual keyboard is in Menu->Workflow
  - 'Audio Output Unavailable' message now overrides the output level meter instead of darkening the whole UI
  - File open dialogs for patches and tunings now properly remember your last visited folder
  - Macros and LFOs (!) can now be renamed by double-clicking on their respective slots (or through a context menu option)
  - Double-click on an FX slot in the FX grid will now toggle bypass
    (right-click still works, but will change functionality in XT 1.1 to show the FX preset menu!)
  - Alt/Opt+drag "rubberband edit" of sliders is now also possible on macros
  - When using keyboard shortcuts for loading prev/next category or patch, a dialog will pop up asking for confirmation to prevent you from losing the current patch,
    with option to remember your choice
  - Hovering over a slider will now show the parameter value by default - this can be turned off in Menu->Value Displays
  - You can now drop a `.surge-skin` folder onto Surge XT's interface and it will be installed automatically
  - You can now drop a `.zip` file onto Surge XT's interface and it will extract patches, FX presets, skins etc... into your user area
  - We now have an online [skin library](https://surge-synthesizer.github.io/skin-library), available from Menu->Skin Library
  - Added menu actions to Patch Browser to delete and rename a patch (not applicable to factory patches)

- Infrastructural and Code Changes
  - Surge XT had a massive investment in our CMake and code layout, with the source being far more organized and our CMake files being way cleaner
  - Upgraded to C++17 on all platforms
  - Surge XT can now run without the factory directory succesfully
  - A number of cleanups in the InnoSetup installer scripts
  - Startup files (configuration.xml and windows.wt) are included as binaries in the plugin
  - Removed an unused dependency on `libmidifile`
  - Removed enormous swaths of code which was unused in Surge, thanks to JUCE and other cleanups
  - Started using constrained enumerations for user default settings
  - Delivered an RPM as well as a DEB on Linux
  - Clear CPU info available on the About screen, getting ready for optional AVX enhancements
  - Added proper support for Flush-to-Zero CPU flag
  - CMake 'install' rules are now in place for non-Apple Unixes
  - Finally (finally!) removed use of `_aligned_malloc` in favor of `alignas` everywhere
  - Windows (MSVC) specifies UTF-8 encoding
  - Removed old 'wide' getters which were only used by legacy VST3
  - Restored Windows MinGW builds
  - `install-resources` targets work with Ninja generator
  - Removed memory allocation from the audio thread for most oscillator types - implemented pooled allocation for String, and less allocation for Twist
  - Cleaned up Airwindows code by removing `processDoubleReplacing`, anti-denormalization and dithering from all effects
  - Upgraded to the latest Catch2
  - Lots of work on expanding the appropriate use of `const`
  - Moved the FX presets to individual files in the factory data folder, rather than config.xml
  - Most of our filesystem code works with `std::filesystem` (or a sub thereof)
  - On Linux, choose the `ghc` rather than system `std::filesystem` by default
  - Cross-compliation works from Linux to Windows and Mac if you want!
  - Surge XT is properly signed and notarized on macOS
  - Surge XT properly requests microphone access on macOS

- Content
  - New patches from Altenberg
  - New patches from Cybersoda
  - New patches from Databroth
  - New patches from Jacky Ligon
  - New patches from John Valentine
  - New patches from Kinsey Dulcet
  - New patches from Luna
  - New patches from Malfunction
  - New patches from Slowboat
  - New patches from VincyZed
  - New patches from Xenofish
  - New FX presets from Arty

</div>

<h2><a href="javascript:toggleCl('1.9.0')">Changes in Surge 1.9.0</a></h2>

<div markdown="1" id="1.9.0" style="display: none">

Surge 1.9 is a major feature expansion over January's Surge 1.8 release, including 4 new oscillator types, 15 new effects, a large number of microtuning
enhancements (including support for [ODDSound MTS-ESP](https://oddsound.com/)), substantial new content including a set of patches tailor-made
for our new oscillators by Jacky Ligon, and much, much more. In more detail:


* New Oscillators
  * Modern, a low aliasing, clean waveshape oscillator based on extensive research into low aliasing waveform generation methods ([DPW](https://www.researchgate.net/publication/224557976_Alias-Suppressed_Oscillators_Based_on_Differentiated_Polynomial_Waveforms) in this case)
  * Alias, a very, very digital oscillator based on ignoring extensive research into low aliasing waveform generation methods, which as a result gives lots of 8-bit joy
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
  * Treemonster, a really wild pitch-tracking ring modulator from Shortcircuit 2, proper Vember Audio classic!
  * Five new Airwindows effects - Galactic, Infinity, Verbity, MatrixVerb and TripleSpread
  * All these effects are also added to SurgeEffectsBank

* Other DSP changes
  * A large number of C++ and SSE improvements in the Sine oscillator, substantially improving performance
  * Oscillator drift now works properly for all oscillator types
  * Oscillator drift now starts at small non-zero random value for each unison voice, rather than starting from 0 (there is also an option to use the old behavior, right-click Osc Drift slider)
  * Character filter will work on new oscillator types (so it's not just for Classic oscillator type anymore - but it is still a global parameter for both scenes!)
  * Retrigger now works properly on all oscillator types
  * Surge now supports single-cycle wavetables (previously, a minimum of two frames were required for the wavetable to load correctly)
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
  * Added deactivation toggles to low/high cut filters across all effects that didn't have them so far

* Alternate Tuning / Microtonal Interface
  * Provide two tuning application modes: Tuning applied at MIDI input, or after modulation. This is described in detail in the manual. By default, it is set to apply at MIDI input for new patches
  * Filter cutoff can now be tuning-aware
  * Currently loaded SCL/KBM files are now displayed in Tuning menu
  * Far clearer internal and user state management on tuning (= scale + mapping), scale, and mapping management
  * KBM name is now stored in patch and DAW state
  * Tuning is now interpolated in log2 space rather than linear space for more accurate inter-note tuning
  * And finally, thrilled to be one of the first synths to integrate [ODDSound MTS-ESP](https://oddsound.com) as a tuning source

* User Interface
  * Reposition Author/Category fields in the factory skins, not to overlap with longer patch names
  * Hover effect is now available on more assets, for example oscillator type menu and FX grid
  * Retrigger and Keytrack button have a right-click option to set their value for all oscillators in a scene
  * Phase/Shuffle parameter now changes its label based on LFO type (will show Shuffle only when Step Seq is selected)
  * Patch browser left-click menu now has multiple columns (Windows only!)
  * Control/Command-drag on sliders to snap to units now works for modulation amounts
  * Control/Command-click on patch or category previous/next buttons will load a random patch!
  * Expanded use of menu for integer sliders in some cases
  * Groups of sliders can now be deactivated collectively, for example in EQ and Tape effects, Twist oscillator...
  * Added an option to always show maximum amplitude LFO as a dotted line (User Settings > Value Displays > Show ghosted LFO waveform reference)
  * Option to drag bottom right corner to resize (VST3 only) is not displayed anymore for skins that have defined fixed zoom levels (i.e. Royal Surge)
  * Added a UI refresh when changing filter type via host automation
  * "Add Modulation From..." option now has its entries organized in submenus per modulator type
  * Removed a check if factory patches are installed. Now it's possible to completely remove all factory/3rd party patches if one wants to, and only focus on making one's own patches with a clean slate!
  * Envelope LFO presets are now saved to Envelope subfolder (previously they went to LFO subfolder)

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
  * Introduced skin version 2 for all the below mentioned new skin engine features:
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
  * New patches from Databroth
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
  * When drag&dropping a patch onto Surge's UI, it is first checked if it exists among the current factory/3rd party/user patches, then that position is used as an anchor for previous/next patch buttons
  * Fixed a bug where loading a patch loaded wavetables twice, causing audio dropouts
  * Fixed a graphics memory leak on Linux, caused by difference in VSTGUI reference count between Linux and Windows/Mac
  * Fixed a bug when changing patches with previous/next patch buttons could skip multiple patches sporadically
  * Default MIDI learn settings are not stored to configuration.xml in factory data folder anymore, but in the always-writeable user data folder
  * When loading patches that contain invalid modulations (for example, Shape parameter in Sine oscillator has some modulation that was made possible in 1.8 and before through certain steps), make sure those modulations are removed to not create any trouble down the road

* Code cleanup
  * Reformatted the codebase with a new, far more sane, clang-format (no more 3 space tabs, and so on!)
  * Replaced our hand-rolled filesystem implementation with [gulak](https://github.com/gulrak/filesystem)
  * GUI overlay API (used for MSEG editor, Store Patch dialog, etc.) is now far more rational, so we can have more than one overlay showing at once
  * Rework `char` and `string` functions to avoid potential overflows in several cases
  * Common oscillator functions (drift, character filter, etc..) are now all found in a single place (OscillatorBase.h)
  * Slider bipolarity and deactivation is now handled in a [single API point](https://github.com/surge-synthesizer/surge/blob/main/doc/DynamicNameActivationBipolar.md)
  * Consistently named oscillator and FX related C++ files and classes
  * A non-global RNG used through most of the code where `rand()` was used before
  * Some memory leaks were plugged up!

* Infrastructure
  * More work done on UTF-8 file names and paths on Windows
  * Linux consistently uses `CMAKE_INSTALL_PREFIX` as a search path for assets
  * Surge on Windows can now be built with `mingw` or `clang` (but productoin builds are still using MSVC)
  * Linux reads config.xml from the filesystem
  * In Ardour on Linux, work around the `LD_LIBRARY_PATH / GTK2` issue which stopped Zenity from launching
  * Activate warnings-are-errors on Linux gcc
  * Windows implicit `precompiled.h` removed
  * Integrated [libsamplerate](https://github.com/libsndfile/libsamplerate) in the codebase, required for Eurorack-based modules which operate at a fixed sample rate of 48k
  * CMake will now run even if `git` is not found

* Surge XT
  * Lots of commits for Surge XT which will hopefully be released sometime this summer!

</div>

<h2><a href="javascript:toggleCl('1.8.1')">Changes in Surge 1.8.1</a></h2>

<div markdown="1" id="1.8.1" style="display: none">

Version 1.8.1 is a point release to clean up a few bugs we found after 1.8.0 release, to add a few features we simply forgot to code, and
to update and add content to the installer which people shared after the 1.8.0. release.

The changes are:

* Bugfixes and Features
   * Handled UTF-16 paths for saving user settings, allowing users on Windows with UTF-16 usernames to update their defaults
   * Drag and drop of a .wav or .wt wavetable doesn't reset oscillator type, if type is set to Window
   * The warning on Windows about uninstalled Lato font shows only once, not once every time the Surge GUI is opened
   * About screen actually mentions Surge Synth Team!
   * About screen on Windows shows "x86" instead of "Intel" for CPU
   * Modulation depth display and typein for tempo synced parameters is implemented now (as opposed to being just nonsense)
   * Subfolders in modulator presets are now listed first, before files
   * Dismissed the value display popup when toggling modulation assign mode on/off
   * Resolved Python with /usr/bin/env on Linux in the build phase
   * Fixed an occasional, but serious crash which would occur on slower machines when rapidly changing patches
   * Reordered and improved the MSEG segment menu
   * Drag and drop FX movement retains assigned modulation
   * Fixed a mis-drawn MSEG hover segment when scrolling horizontally
   * Added an explicit menu setting for touchscreen mode for Windows users (under User Settings->Mouse Behavior)
   * Avoided a floating point underflow which rendered MSEG S-curve deforms incorrectly when Deform was a very small value
   * Failure to load a .wav file will not rename the patch wavetable anymore
   * Fixed a typo which resulted in the Hard waveshaper sounding wrong in Rotary and Distortion effects

 * Content
   * Added a bunch of modulator presets
   * High quality versions of all factory wavetables in Basic folder
   * Updated Jacky Ligon's presets with new patches and CPU optimizations
   * Updated TMNG's presets with new patches, CPU optimizations and cleaner wavetables
   * Added wavetables from TNMG
   * Added patches from Stefan Singer (previously known as Stefan Hållèn)
   * Updated a single patch from Luna

</div>

<h2><a href="javascript:toggleCl('1.8.0')">Changes in Surge 1.8.0</a></h2>

<div markdown="1" id="1.8.0" style="display: none">

In version 1.8.0, we have introduced many new features,
but also adapted a large collection of existing open source code to work
inside Surge. We are especially grateful to these authors (noted in the changelog)
for making their software available, for being friendly when we talked to them about
adapting their software for Surge, and for being part of the free and open source
music software community!

1.8 has hundreds of changes and features, but the headlines of the release are:

* New skins, including the lovely "Royal Surge" skin and greatly improved Classic and Dark skins
* New filters, with multiple new filter models
* A complete implementation of a multi-segment envelope generator (MSEG) as a modulation source
* A large number of Airwindows FX available in the FX chain
* A bunch of amazing new content! We now have more than 2000 presets in the library!

The complete changelog is:

* New and Improved Skins
   * Added the 'Royal Surge' skin, a skin inspired by vintage hardware, developed and designed
     by [Voger Design](https://vogerdesign.com).
   * Major updates to the Classic and Dark surge skin, including better placement of controls, rendering,
     contrast, and consistency.
   * See "Skin Engine" section below for more technical details on the skinning engine

* Filters
   * Added "Vintage Ladders", two models of vintage 4-pole lowpass ladder filters
        Thanks to [@ddiakopoulos](https://github.com/ddiakopoulos) for maintaing this very
        useful [repository of research and code](https://github.com/ddiakopoulos/MoogLadders) which
        heavily informed the models we implemented
   * Added the filter from [OB-Xd](https://github.com/reales/OB-Xd)
   * Added the K-35 filter from [Odin 2](https://github.com/TheWaveWarden/odin2)
   * Added the Diode Ladder filter from [Odin 2](https://github.com/TheWaveWarden/odin2)
   * Added Cutoff Warp filters (LP/BP/HP/N/AP) based on [this Jatin Chowdhury Blog Post](https://jatinchowdhury18.medium.com/complex-nonlinearities-episode-5-nonlinear-feedback-filters-115e65fc0402). This one is really weird!
   * Added Resonance Warp filters (LP/BP/HP/N/AP) based on [this Jatin Chowdhury Blog Post](https://jatinchowdhury18.medium.com/complex-nonlinearities-episode-4-nonlinear-biquad-filters-ae6b3f23cb0e)
   * Implemented 24 dB/oct variants for the existing biquad bandpass and notch filter types
   * Add an allpass biquad filter based on existing biquad filters in Surge
   * Fixed an error in the comb filter which made it out of tune by 6 samples. By default
     this is corrected in new sessions or patches streamed with Surge 1.8, but it can be also toggled by right-clicking the filter
     subtype menu. Old patches remain "wrong" in order to preserve how your existing projects sound
   * Overhauled the filter type menu, filters are now grouped by their function

* Expanded Modulator Features and Fixes
   * Multi-Segment Envelope Generator (MSEG)
     * Implemented a fully editable MSEG modulation source, with a large number of curve types and various editing options
     * To use the MSEG, select a voice or scene LFO, choose the MSEG LFO type (bottommost row, first icon) and click on the LFO display, or the pencil button to the right
     * Extended features for a segment are available on the right click context menu
     * Currently, MSEG supports up to 128 nodes, and the maximum length of the MSEG is 128 phase units (duration of a single phase unit is determined by the LFO Rate parameter)
   * LFO modulator presets - users can save and share single LFO modulator settings
   * New MIDI controller modulators: Breath, Expression, Sustain pedal
   * New per-voice modulators: Alternate and Random (both unipolar and bipolar)
   * New scene modulators: Lowest Key, Highest Key, Latest Key
   * Drag and Drop
     * Drag a Macro slot around to reorder it
     * Ctrl-drag any modulation source onto a slider in order to open an edit dialog for typing in a modulation amount
   * Added several MIDI controller smoothing modes in the MIDI Settings menu, which
     increase the responsiveness (at cost of smoothness) for MIDI CCs, aftertouch, etc.
   * MPE Aftertouch and Timbre are now properly smoothed; MPE Pitch Bend has independent
     smoothing settings.
   * Deactivated rate LFO modulators show their waveform over which you can scrub using the Phase slider
   * LFO Freerun trigger mode now has correct relation to song position pointer when not synced to tempo
   * LFO Deform slider now has several different modes for Sine, Triangle, Sawtooth and Envelope LFO types

* Effects
   * Integrated 59 [Airwindows effects](https://github.com/airwindows/airwindows). Thanks to Airwindows
     for providing high quality open source effects!
   * Effects can be reordered via drag and drop, copied to another slot via Ctrl/Cmd+drag and drop, or replaced via Shift+drag and drop
   * Phaser effect now has an adjustable number of stages (up to 16), with adjustable spread and distribution of stages (except in legacy setting)
   * Extended phaser ringout time, allowing for long self-oscillations at high feedback
   * Vocoder modulator signal can now be chosen between stereo, monosum, left, or right input
   * Disabling an effect (loading the "off" preset) now removes any leftover modulation
   * Individual bands of the EQ can now be deacivated by right-clicking the Gain sliders and choosing Deactivate

* SurgeEffectsBank
   * SurgeEffectsBank is now part of the main Surge source tree
   * Implemented the new Airwindows effects

* Voice Management
   * Added note priority modes for monophonic play modes: latest, highest, lowest or legacy (note ons have latest note priority, note offs have highest note priority)
   * Added a mode where sustain pedal in mono mode allows retriggering older notes that are still held, on note release
   * Add even more extensive regression tests for voice management modes

* Other Sound Design Tools
  * FM3 Oscillator
     * M1/2/3 can now be extended allowing ratios from 1/32 to 32
     * M1/2 can now be set to a ratio or an absolute frequency
  * Fixed a bug in step sequencer LFO mode which picked the wrong step when start and end were the same
  * LFO Amplitude can be extended into negative ranges
  * "Tempo-sync All Parameters" available for filter and amp envelopes
  * Display Pitch Bend as a bipolar modulator on sliders
  * Fixed problems with very long-running LFOs drifting due to truncation errors
  * Allow scrubbing (when LFO Rate is deactivated) on step sequencers to trigger envelopes
  * Waveshaper drive can now be extended to have twice as much gain as before (+/- 48 dB)
  * Default scene polyphony is now set to 16
  * Solo buttons in the mixer now allow multiple active solos by default (Ctrl/Cmd+click for the old exclusive solo behavior)
  * Mute buttons in the mixer behave the same way as Solo buttons now, with exclusive mute behavior on Ctrl/Cmd+click
  * Expanded .wt file format to support 16-bit full-range files - this also means compatibility with wavetables from Bitwig Studio's Wavetable device!
  * "Show Current Tuning Information" now contains interval matrices
  * Post-amplifier highpass filter can now be deactivated (right-click the HP slider)
  * Global hard clipping of the scene output can now be disabled in Scene Volume context menu
  * Scene pitch and pitch bend now work properly with non-keytracked oscillators
  * Fixed a tuning error with partially mapped long scales
  * Oscillator FM routing modes with only Ring 1x2 mixer channel active now work properly (previously this wasn't evaluated so it resulted in clicks)
  * Renamed Classic oscillator Width parameters (manual contains a more detailed explanation)

* Content
  * Fixed tuning of Flute 1/2 factory patches
  * New patches from Vincent Zauhar
  * New patches from David Bata
  * New patches and wavetables from Damon Armani - see Damon's [Preview](https://www.youtube.com/watch?v=7uqG14NfxyE) and [Full Demo](https://www.youtube.com/watch?v=bnZ7YLWdP2U)
  * New wavetables from Venus Theory
  * New and corrected patches from Inigo Kennedy
  * New patches from Kyurumi
  * New patches from Jacky Ligon
  * New patches from The Nerdy Music Guy
  * New patches from Luna
  * New FX presets from Arty
  * Add Carlos-Morrison CET microtunings to the factory tuning library

* Skin Engine
  * User-side:
    * Complete set of tutorial skins showing many features of the skin engine,
      which automatically generate [skin engine documentation](https://surge-synthesizer.github.io/skin-manual.html)
    * Skin inspector (Menu > Skins) shows the state of the currently loaded skin and information about colors and assets
    * Classic and Dark skins are now available as Figma templates. Please ask on our [Discord #design channel](https://discord.gg/aFQDdMV) if you are
      interested in using Figma to design and work with skins!
  * Developer-side:
    * Internal C++ data model fully represents the skin as objects and is overrideable by XML
    * Support for scalable PNG or SVG for all assets
    * Support for fixed enumerated zooms if a skin designer desires (mainly useful for PNG-based skins)
    * Support for changing overall window size
    * Support for hiding any component
    * Support for grouping controls into panels
    * Improved nanoSVG parser with support for certain SVG features

* UI/UX
  * You can drag and drop .wav, .wt, .scl, .kbm and .fxp files onto any part of Surge's GUI and they will be loaded
  * Consistently implemented our new logo
  * Large number of contrast, color, and positioning tweaks, including a complete re-render of Classic and Dark skins
  * Text input dialogs are no longer OS-based, instead they are internal to Surge, created with VSTGUI
  * Store Patch dialog is now consistently designed with other internal dialogs in Surge
  * Fixed VST3 zoom inconsistencies which caused problems in Cubase, FL20, and other hosts
  * New "Add Modulation From..." menu entry for modulatable parameters, which opens a dialog for a direct modulation assignment from one of available and valid modulators for the target
  * Hovering over sliders shows which modulation sources are applied to them
  * Direct assignment of MIDI CCs to parameters via context menu, mirroring the same facility Macros have
  * Modified the design of Edit Modulation dialog to avoid text overflows
  * Unique FX grid icons for each effect type
  * Implemented dropdown menu widget which can replace sliders for discrete (integer) parameters
  * Allow loading FXP patches from file (use "Load patch from file..." option in patch browser context menu)
  * Allow patch browser to rapidly open user and data folders (shouldn't crash anymore on receiving rapid MIDI Program Change messages)
  * Save FX presets to unique subfolders per FX
  * Step Sequencer shows position in deactivated LFO Rate mode (when scrubbing the sequencer position with the Phase/Shuffle parameter)
  * Modulation assign mode now stays active when selecting another modulator (previously it would deactivate)
  * Added "Clear MIDI Settings" function (Menu > MIDI Settings)
  * Fixed a VSTGUI bug which caused artificial hover events at zoom levels other than 100% on Windows
  * Fixed a VSTGUI aliasing problem with modulation assign buttons on Windows
  * Activated non-integral mode consistently on Linux, improving drawing quality for all assets and working around an inconsistency in VSTGUI
  * Implemented "elastic" slider editing mode - move a slider while holding Alt/Option, and it will snap back to where it was when releasing the mouse button. Useful for quick auditioning of parameter changes without committing them
  * LFO Amplitude now properly quantizes to integer percent units when holding Ctrl/Cmd
  * Currently selected modulator is preserved as scenes switch
  * Completely redesigned the About screen, added more credits and links to relevant places
  * Version info in About screen can now be copied to system clipboard by clicking on Copy Version Info
  * Vastly improved cursor hiding behavior on Windows, plus cursor hiding is now available on macOS!
  * Mousweheel click, forward and backward buttons (buttons 3/4/5 on mice that have them) can now arm modulation from any part of the UI
  * Mousewheel works on nearly every element (the FX preset menu is the only one left)
  * Widget hover state now correctly survives UI rebuids
  * SVG renderer now supports opacity in paths, not just fills
  * Improved the look and feel (and code clarity) of the VU meter
  * Skinnable VU meter with gradient bars
  * We now warn Windows users if Lato font is not installed
  * Linux menus open in a way far less likely to occlude their parents
  * The main menu can be opened by right-clicking on any non-active region of the UI
  * As a consequence of the main menu being available anywhere on the GUI, removed the "zoom level too large for your display" check and error dialog
  * Allow deeply nested menus in the FX preset and Oscillator type menus - currently only used in the FX menu
  * Skinnable 'dots' on the Oscillator and LFO display, following the design of Royal Surge skin
  * Fixed wavetable name not being included in oscillator/scene copy-paste operations

* Plugins
  * VST2 and VST3 now advertise parameter name changes to the host
  * If the audio engine isn't running, plugins show idle error when patches won't load
  * Menus, typeins, and other controls now properly send automation change messages
  * Simultaneous automation of any number of parameters now correctly update the UI (previously more than
    8 simultanously automated parameters would leave the UI state incorrect).
  * Modify the threading pattern in the VST3 when loading patches to allow frequent automated patch changes without a crash
  * VST3 correctly supports the 'parameterNormalized' API, which is used extensively in Ardour for automation

* Python API
  * Surge now exposes a complete Python API to fully program and manipulate the synth inside Python programs and Jupyter notebooks
  * You can see a set of example notebooks in [this repo](https://github.com/surge-synthesizer/surge-python)

* Infrastructure, Bugfixess and Code Quality
  * Surge is now a macOS fat binary (x86/Apple Silicon)
  * build-linux now works with ARM
  * Removed a collection of specious `_asm` blocks
  * Fixed a VSTGUI issue with Linux and mouse motion dropping modifiers
  * Added several libraries which were not explicitly linked on Linux
  * Allowed the tarball and code to build and collect version info in the absence of a git checkout
  * Parallel, Debug, and multi-generator CMake builds now work on all platforms
  * Enumerate Linux library dependencies on all items (xcb-keypress etc.)
  * Implemented proper Unicode filename support everywhere
  * Made our CMake file more modular for various library and test inclusions
  * We now show the install location at the last step of the Windows installer
  * Replaced CriticalSection.cpp with `std::mutex`
  * A far more complete implementation of `std::filesystem` for systems which don't have it (basically, macOS versions before 10.15)
  * Refactored our CMake implementation so that shared code is compiled into static libraries
  * Revamped the mechanism by which Surge internal IDs and Surge plugin IDs are mapped, allowing us a much easier
    future expansion of the parameter set (sctual parameter set expansion is coming in 1.9!)
  * LFO and S&H noise oscillators now have independent random number generators, avoiding problems with global seeds
  * Consistently use constants for scenes, oscillators and so on, rather than magic numbers "2" and "3" and so on
  * Purged unused/obsolete graphical assets from the codebase
  * Turned on "warnings are errors" on all platforms
  * Correctly set macro values on patch load by calling 'init()' rather than 'set_target()'
  * Fix some edge case threading problems which were exposed in high stress (rapid FX swap or rapid VST3 preset reset) cases

</div>

<h2><a href="javascript:toggleCl('1.7.1')">Changes in Surge 1.7.1</a></h2>

<div markdown="1" id="1.7.1" style="display: none">

  So, testing is hard. We're a scrappy rag tag group of volunteers facing an army of
  diverse operating systems, DAWs, environments, build flags, and so on. We're really happy
  that all the new features in 1.7.0 worked! But upon release we found some of the environmental
  stuff didn't, so we did a quick 1.7.1 release which includes the following fixes,
  most of which were cause by us doing a substantial upgrade to our build infrastructure with
  1.7.0. We still have a swath of features planned for the 1.7 series, and expect a 1.7.2 with
  some new features and effects in Autumn 2020.

<ul>
  <li>macOS</li>
  <ul>
    <li>Make the VST3 work in Abelton Live for Mac (by doing a blank-signing of the bundle)</li>
    <li>Restore compatability back to OS 10.9 (by building macOS at C++-14 level).</li>
    <li>Change the support file lookup semantic to always use the newest support files</li>
  </ul>
  <li>Linux and FreeBSD</li>
  <ul>
    <li>Activate an Ubuntu-20 Clang-10 build and resolve bugs</li>
    <li>Remove a set of warnings that stop Clang-9 from building, allowing Surge to build on FreeBSD again</li>
  </ul>
  <li>Windows</li>
  <ul>
    <li>Modify the VST3 zoom failure handler, which would cause an infinite loop in zooms on Studio One in some situations.</li>
    <li>Change our build pipeline so the 64-bit Windows installer installs the 64-bit SurgeEffectsBank</li>
  </ul>
  <li>All Platforms</li>
  <ul>
    <li>Add greatly improved labels on value menus for filter subtypes and envelope attacks</li>
    <li>Improve error messages for missing skins</li>
    <li>Add a 'Zoom to Default' menu item which zooms to the user default setting</li>
  </ul>
</ul>

</div>

<h2><a href="javascript:toggleCl('1.7.0')">Changes in Surge 1.7.0</a></h2>

<div markdown="1" id="1.7.0" style="display: none">

1.7.0 is a major release done on July 28, 2020.

+ Skin Engine
   + Surge now has a dark skin. Menu > Skins > Surge Dark
   + Surge is now runtime skinnable with swappable assets. Documentation on this skinning engine is
     forthcoming. For now if you want to author a skin, you are probably best to hop onto our Slack!
   + All synth elements in both skins get hover gestures to make the UI more reactive
+ DSP and Synthesis Changes
   + New and Improved Effects
      + Reverb 2, a new reverb based on a network of allpass filters and delays
      + Flanger, a flanger with some extreme tuning and feedback options
      + Ring Modulator, a simulation of an analog ring modulator with a choice of carrier waves based on Surge's Sine oscillator
      + Rotary Speaker effect gets drive, rotor rate (previously it was coupled to existing horn rate), stereo width, and mix parameters.
      + Fixed a phaser issue which caused instability at high modulation rates
      + Fixed a Reverb 1 and 2 problem where the HF/LF damping could become unstable at high modulation values
      + EQ gets a mix parameter, which can result in musically engaging phasing
   + Oscillator Improvements
      + The Sine oscillator becomes a mini-synth
         + Many more quadrant waveforms
         + Unison mode
         + Extended feedback range and negative feedback, which results in a square-like (rather than saw-like) waveform
         + Built-in low and high cut filters
         + The first 8 sine waveforms are ordered to match the TX-series waveforms
      + Built-in low and high cut filters added to Window, S&H Noise and Audio Input oscillators
      + You can route the output of Scene A into Scene B and mix it with Surge's audio input
      + FM2/3 oscillators get extended feedback range and negative feedback for new instances
   + Other DSP Changes
      + Unison goes up to 16 on all unison oscillators
      + Surge uses the Surge Synth Team's tuning library used in several of our synths for SCL/KBM support
      + Fixed a problem with phase overflow in very long running Sine and FM2/3 oscillators
      + The Sine oscillator and Ring Modulator effect use a high performance approximation for sine/cosine waveforms (lower CPU usage)
      + Fixed a crash with high sync values in the Classic oscillator when set to absolute pitch mode
      + Fixed problems with the ADSR envelope becoming unstable or non-silent in very high or very low DS regimes
+ Modulation and Voice Management Changes
   + Each voice LFO can now trigger filter and amplifier envelopes
   + You can 'deactivate' the LFO rate (right click the Rate slider to see the option in the context menu) which makes the LFO take a
     constant value at current phase, and makes the Phase slider act like a scrub operator
   + Step Sequencer UI rewrite
      + Vector rendering
      + Show the actual resulting curve
      + Show value displays, right mouse drag to draw a ramp, quantize to scale length when holding Shift or Shift+Alt (twice the scale length)
   + Substantial improvements to Portamento
      + Added Constant Rate and Constant Time modes
      + Added logarithmic and exponential portamento curves (previously we only had linear)
      + Added a glissando mode (portamento quantizes to scale degrees)
      + Added a mode to retrigger envelopes when crossing scale degrees
      + All these features are available when right-clicking the Portamento slider
   + Capped modulated envelope sustain at 1
   + Fixed a variety of issues with modulation phase which could, in extreme cases, cause glitches and noise
   + Clear FX parameter modulation when changing FX type to avoid unexpected modulations
   + Fixed a variety of situations where, in extreme inter-modulation cases (LFO1->2->3->1 etc.) LFO sources could go unstable.
   + Allow the amplifier and filter envelopes to modulate LFO parameters
+ User Presets and Persistence
   + FX and MIDI mappings have user presets distinct from the patch/DAW stream
   + MIDI mappings are stored in the DAW state for recall
   + You can display the current MIDI mapping from the Menu
+ UI Improvements
   + Every parameter links to context-specific online help
   + Discrete parameters (like filter type or tempo synced LFO rates) can now also be set via the right click context menu
   + Continuous parameters and their modulations can now be adjusted via text input dialog - click on the value readouts in the slider's right click context menu
   + Slider Ctrl-drag is properly quantized for values and for modulations
   + Updated units and display of many values and their modulations
   + LFOs in Envelope or Step Seq modes will be renamed to ENV or SEQ across the board, respectively
   + Labels, checkmarks, and ordering in menus more generally consistent
   + Added Zoom button in the Status panel with more consistent status panel menu behavior
   + Active hover gestures on buttons, sliders, and so on
   + High Precision Value Readout mode (Menu->User Settings) shows more decimals in popups and value input dialogs
   + You can browse FX presets with previous/next buttons, and see the name of the selected preset
   + Inactive sliders are transparent (Win/Mac) or have a hidden handle (Linux). Some sliders can be activated with Activate option in right click context menu
+ OS-specific Improvements
   + Portable installation support on Windows (Surge will look for SurgeData and SurgeUserData folders next to the .dll/.vst3 first)
   + Substantial Linux UI improvements
       + VSTGUI performance patched to substantially improve redraw time
       + VSTGUI menus patched to open in a non-overlapping fashion
       + Activate vector UIs for all components (LFO, Oscillator)
+ Content
   + New patches from Jacky Ligon, many highlighting new features in 1.7
   + New patches from Dan Mauer
   + New patches from Psiome Send
   + Third party patches better organized and classified.
+ ARM Support
   + The synth builds on Linux ARM platforms from source. Following the direction on the
     README you can build and run the LV2 or the VST3 and run them in both armv71 and aarch64
     PI platforms.
+ Plugin Improvements
   + VST3 works reliably on Linux, including Reaper, Carla, Bitwig 3.2 and sample hosts
   + VST3 correctly orders multiple MIDI messages in the same sample chunk
   + Fixed a problem where the VST3 mis-rendered Macro DAW automation in Reaper
   + Added VST3 context menu facility to Macro controls
   + VST2/3 can output scenes to individual plugin outputs, prior to scene effects (not yet implemented in AU or LV2)
   + Fixed a bug with VST3 host menus which would crash Surge in some hosts (especially Bitwig on Linux)
   + AU advertises patch names to Logic Pro
   + LV2 reads screen scaling factors
   + DAW automation names contain scene label and are (mostly) uniquely named
   + VST3 (Windows) properly names MIDI extra parmeters
   + Fixed an error where some hosts in some situations would fail to load Surge patches stored as .vstpreset
+ Minor Changes
   + Set Default Zoom... option now sets the default and the current zoom level
   + Many UI elements renamed to be more consistent across the board
   + Effects now have Init (Dry) and Init (Send) presets, the latter are intended to be used in Send FX slots
   + Fixed a bug which limited modulation on some Scene B modulation sources
   + SVG renderer supports radial gradients
   + Menu labels and capitalizations generally more consistent
   + Limit MIDI learn to sensible controllers
   + Use General MIDI CC names in context menus of Macros
   + Option to choose the octave offset of MIDI note 60 (default is C4, other options are C3 and C5) and it is applied consistently across the board
   + Developer Options menu is available on right click of the Menu
   + Cursor hiding is a togglable option on Windows
   + When reappearing from being hidden, mouse cursor is restored to the position from which the drag was started
   + Scrollwheel works on LFO type parameter
   + Parameter value popup no longer clips or draws offscreen
   + Popup prompts have titles and directions
   + You can set default author and default comment which will be automatically applied to the patches you save
   + Fixed a bug which caused the cursor to disappear on Windows when renaming a Macro
   + Show an error when loading an .fxp file from a synth other than Surge
   + Properly callibrate Windows mousewheel to work on integer sliders
   + Fixed a bug where switching a Scene LFO to and from a deformed Step Sequencer could mis-calibrate the LFO rate
+ Infrastructure
   + Moved our entire build system to CMake
   + Fixed a bug where patches could incorrectly stream in international settings with "," as a decimal separator
   + Binaries are now properly licensed FOSS - disabled the VST2 builds
   + Better versioning strategy in various DLLs, plugins, and tools
   + Applied a variety of updates to our deb package
   + Move our Azure pipelines to macOS 10.14 (but still build for 10.12 and higher)
   + Tightened up some unit test thresholds to make them more reliable
   + Removed a large number of code warnings
   + Increased warnings-as-errors on macOS and squashed several warnings
   + The nightly deb installer starts version number with 9. instead of 0.
   + Renamed all 'master' code branches to 'main'.
   + Added a more correct copyright statement to each of the code files.

</div>

<h2><a href="javascript:toggleCl('1.6.6')">Changes in Surge 1.6.6</a></h2>

<div markdown="1" id="1.6.6" style="display: none">

Version 1.6.6 fixes several bugs and adds a few key features. We released so quickly after 1.6.5 since we want to take a pause on doing regular production releases while we
prepare for a Surge 1.7 release which will include (among other things) a skinning engine to allow designers to adapt
the UI. As such, this will be our last production release for a little while - perhaps until summer of 2020. Changes in 1.6.6 are

* Audio and Performance Changes
  * Absolute unison mode was both sample rate dependant and incorrectly calibrated. Corrected it so that, at all sample
    rates, a 16 Hz absolute unison is a 16 Hz unison spread.
  * Unison range can now be extended, giving unison spreads up to one octave (pitch) or 192 Hz (absolute).
  * Window Oscillator now supports FM, and is calibrated to use the same FM Depth as FM2/3/Sine oscillators.
  * We initialize modulators before the initial voice start, setting the first modulator value at voice initialization corectly and
    avoiding a 32 sample "sweep" across a modulator value at voice onset.
  * Fixed two bugs with the sustain pedal; first - sustain on channels 3 and 4 didn't work, and second - pressing a key
    multiple times while sustain was held would lead to an incorrect state.
  * Fixed a bug with the tuning engine where mappings with root keys far outside of scale ranges gave incorrect results
  * Made the oscillator display constant even in extreme tuning changes
* LV2 Changes
  * The LV2 had incorrectly advertised the identity of its ports. Change to use unique symbols for each port. *Unfortunately this fix will break prior Surge sessions, but those prior sessions inconsistently streamed the synth state in most LV2 hosts*
  * The LV2 didn't advertise all parameter changes leading to a port being unsynchronized.
* Minor Changes
  * The VST3 (Windows) plugin properly formats the automation display of the CC parameters
  * The FX slots and automation parameters are named more consistently, as are several menus and labels
  * The value popup window popsup on mouse-down not mouse-move on a slider
  * The patch and wavetable menus have refresh options on the popup menu, not just in menu/data and patches
  * Slider mouse behavior in medium and slow works more like classic when over-dragging
  * Added an init patch which assigns a distinct modulator envelope to each OSC
  * Added a regtest that parameter IDs are stable across versions
  * Modify the build pipeline so the linux .deb file has correct ownership on shared assets
  * Stream the Wavetable name into the patch
  * Correct the Open Tuning Library menu on Windows
  * Fixed a bug with opening and closing the VST2 on Linux

</div>

<h2><a href="javascript:toggleCl('1.6.5')">Changes in Surge 1.6.5</a></h2>

<div markdown="1" id="1.6.5" style="display: none">

* New Features
   * Added a "Channel Split" mode to split by MIDI channel across scenes, just like the Key Split mode does across the keyboard
   * Several changes to the alternate tuning implementation
      * We have full support for Scala KBM files, including full keyboard
        remapping, scale 0, and frequency 0 selection.
      * The default tuning constant key is MIDI note 60 (261.63 Hz)
      * The scale viewer shows frequencies per key
      * Corrected an error where tuning could interfere with filter cutoffs and delay timings, especially with long scales

* Modulation Section
   * When any control is tempo synced, show a beats display as well as time display on the LFO grid (not available on Linux)
   * Tempo sync all controls for an LFO modulator with a single RMB gesture on any syncable control.
   * Added LFO Envelope lanes in the LFO 1 retrigger section. Use Shift-click or right-click on the retrigger section to trigger both the Amp and Filter envelope or just one or the other.
   * Made envelope retrigger work properly for Analog mode envelopes.
   * Chose a more on-theme blue for the step sequencer section, rather than that wierd green.
   * Green line shows how far you have modulated when you modulate a slider. Try it!

* MPE
   * The global pitch bend (on channel 1) no longer double-bends in MPE mode
   * MPE pitch bend state is per instance and saved in the DAW state, so you can use two Surges with MPE bend of 24 and 48 in a single project, if you happen to own  both a Seaboard and a Linnstrument, say.

* VST3
  * Sidechain support is properly supported with a kAux channel, meaning sidechain works in Cubase Pro. Additionally, in Reaper versions > 6.02 the VST3 will properly configure routing for sidechaining when dragged into a track. (For earlier versions see [here](https://www.youtube.com/watch?v=OKR0x_dneYI).)
  * Support VST3 context menus. Right-click on a parameter in VST3 using a DAW that supports this feature and check it out!
  * VST3 automation for macros works.
  * LFO freerun works if transport is not running.

* Change the Windows Installation Locations
   * Windows now reads shared content from %PROGRAMDATA% (c:\ProgramData\Surge) and then if missing from %LOCALAPPDATA%
   * The Windows Installer installes common assets in %PROGRAMDATA%
   * To allow debugging, the About screen on all platforms shows the data paths.

* A new collection of third party presets from Dan Mauer.

* Other Workflow and Engine Improvements
  * You can export a wavetable from a patch to a standalone wavetable using the export menu item in the oscillator wavetable selector
  * The Envelopes in analog mode corrected decay behavior and support sustain swells
  * The Digital envelopes in quadritic decay mode work with sustain 0
  * LFO phase is properly modulatable (modulated phase is snapped when an LFO starts and is not modulatable once going)
  * TempoSync was not correctly unstreamed on the Delay effect.
  * TempoSync in Delay is correctly initialized when first played in a new DAW instance.
  * The AU unstreams zoom properly in Logic Pro
  * The AU allows automation of the "CC" and "Master" parameters properly

* Other UI Improvements
  * Windows Touch devices now work with the Surge UI
  * Fix a problem with a 'spiky' draw of the Square Wave on Windows
  * Several UI elements are higher contrast, several text displays are more consistently formatted
  * Frequency sliders (like Cutoff frequency) show a midi name as well as a frequency in their popups and string displays
  * TempoSync sliders show their status with a little "TS" on the handle.
  * FrameClose in the VST2 called at the appropriate time.
  * VST Names for FX Params are distinct per param

* Code Changes
  * Add and activate many unit tests spanning tuning, modulation, and much more
  * Add support for builds with Visual Studio 2019

</div>

<h2><a href="javascript:toggleCl('1.6.4.1')">Changes in Surge 1.6.4.1</a></h2>

<div markdown="1" id="1.6.4.1" style="display: none">

Versions 1.6.4 and 1.6.4.1 were released late November 2019, with several MPE and effect changes, new content, and some small
cleanups

* Synth Sound and Behavior
   * Release velocity is now an available modulation source. See [more details here](https://www.youtube.com/watch?v=GnEX-ypuem0)
   * Sustain Pedal in MPE mode was mis-mapped to the wrong channel, leading to it not working in MPE note-per-channel configurations
   * The 'Drive' feature in the distortion effect is extensible

* New Content
   * A set of MPE patches for the Linnstrument provided by Roger Linn. [Here's a video of Roger demonstrating them.](https://www.youtube.com/watch?v=T-mKyShEvKg&t=1s)
   * Producer [Damon Armani](http://damon-armani.com) contributed a set of EDM & Dubstep Wavetables and Patches to the 3rd party library.

* Other smaller changes
   * Mouse button shows value of integer and boolean sliders
   * Fix a small repaint bug in the LFO display
   * Handle cases where user folders don't exist
   * Make LFO modulation button state always consistent
   * Better abbreviated names of modulation sources, with consistent case and spelling
   * Failed wav file loads include the name of the file which failed
   * Developer documentation cleanup and unit tests

* 1.6.4.1 was a minor release that corrected the installer on macOS Catalina, renamed and completed a couple of the new content packs and fixed two small graphics assets.

</div>

<h2><a href="javascript:toggleCl('1.6.3')">Changes in Surge 1.6.3</a></h2>

<div markdown="1" id="1.6.3" style="display: none">

1.6.3 fixes a collection of problems with the VST3 plugin. We are particularly grateful to the team
at Steinberg for providing us a complementary copy of the Cubase DAWs which best exhibited the VST3 bugs
Surge had, and allowed us to resolve the problems.

* VST3 Fixes galore
   * Pitchwheel and Modwheel work VST3/Cubase
   * Resolved bugs in midi mapping, midi learn, and other controller flows
   * Resolve VST3 automation inconsistently updating the Surge UI
   * Support drag-to-zoom in VST3 in hosts which support it (tested in Reaper, FL, Bitwig and Cubase)

* Upgraded the distortion effect
   * Users can select the waveshaper for the drive stage from the set of surge waveshapers
   * The pre- and post- gain can be extended to allow outsized boosts and subsequent extreme distortions
   * Note that some settings of the distortion effect in extended mode can drive Surge well into digital clipping. Be careful!

* New patches from Inigo Kennedy

* Several LV2 and Linux changes, including the ability to build a 32 bit linux configuration.

* Deal with some small bugs with wave ordering, invalid waves, menu arrow keys on Linux, and error handling when Surge is mis-installed

</div>

<h2><a href="javascript:toggleCl('1.6.2.1')">Changes in Surge 1.6.2.1</a></h2>

<div markdown="1" id="1.6.2.1" style="display: none">

1.6.2.1 is a point release fixing a few regressions in 1.6.2 and a few crashes our users noticed when more
people downloaded the synth.

* Fix a long-standing MPE error where channel aftertouch was mis-routed
* Restore the "extended" menu on Oscillator pitch; apply a few other cosmetic menu changes
* Build patch menu correctly when user directory names exactly match factory directory names
* On Linux systems without zenity installed, fail gracefully instead of SEGV
* Apply naming consisntency to wavetables as well as patches

</div>

<h2><a href="javascript:toggleCl('1.6.2')">Changes in Surge 1.6.2</a></h2>

<div markdown="1" id="1.6.2" style="display: none">

* Substantial New Features
  * Alternate Tunings
    * Surge supports re-tuning the synthesizer using .scl files
    * .scl files are stored in the DAW state and optionally stored in a patch
    * UI elements to see if tuning is active, to see current tuning, and to reset tuning in place
  * Greatly expanded `.wav` file support and WaveTable Oscillator improvmenets
    * Surge can read `.wav` files on all platforms (linux, mac, and windows) now
    * Surge will recognize `.wav` files which contain a `clm` block to indicate loop size (as used by Serum),
      a `cue` block (as used by various products, including Native Instruments) and a `smpl` block.  *This means that
      all Serum compatible wavetables we have tried now load in surge*
    * Add a `srge` chunk type which allows wav files to advertise surge table sizes other than 2048, and a python script
      to add those chunks to wav files.
    * `.wav` files without loop information are loaded as one-shots
    * Increased the maximum table size to 4096 samples.
    * Drag and drop of .wav files, direct open with the file chooser, and scanning of .wav files in
      ~/Documents/Surge are available
    * The WaveTable and Window Oscillator Morph control shows the table and allow you to snap exactly to a table
  * Important Linux Changes
    * A Linux 64 bit LV2 is now available
    * A Llinux 64 bit VST3 is now available, although VST3 support in Linux is sporadic, and it only fully works in Reaper
    * Resolve problems with mis-animated, crashing, or ghosting menus in the Linux UI; and mis-aligned text fields in Reaper
  * Audio and Patch Creation Changes
    * Oscillator pitch can be set to "Absolute" using the right mouse, making the pitch shift in absolute
      frequency as opposed to relative note space.
    * Temposync Display values use musical values ("1/4 triplet" rather than "2.667 1/16")
    * The SIN oscillator implements FM feedback; and corrects some errors in the FM implementation making
      it respond line an unmodulated FM2 when no feedback or waveshape is applied.
    * The Surge Vocoder adds tunable bands, adjustable band count, and a different set of bands for modulator than carrier.
    * It is possible to copy and paste FX between slots in the FX router
    * For some lower resolution generated wavetables, add side-by-side high resolution ones
  * Oscillator and LFO Displays
    * The Oscillator display and LFO display are both vectorized, eliminating the high-zoom pixelation of prior versions.
    * The LFO display automatically zooms to show the entire envelope; and releases the sampled LFO to show the release stage.
    * Due to a technical limitation in Linux VSTGUI that we are still debugging, these features are only available in the
      Windows and Macintosh build today. Also on some older machines this feature will auto-deactivate if it is too slow;
      and can be forcibly deactivated with a switch in the menu.
  * The SurgeEffectsBank plugin.
     * We have wrapped the FX stage of surge as a separate JUCE plugin and generated a VST3
     * This plugin is included in the mac and windows installer.
  * New and Reorganized Content
     * EMU has adapted the CC-0 VSCO Community Edition (https://vis.versilstudios.com/vsco-community.html) as a collection
       of surge wavetables
     * EMU digital and sampled wavetables added in third party wavetables
     * EMU patches added to third party patches
     * Added a few presets by Claes which we found outside the factory distribution
     * Generally reorganized the presets to have more consistent case, name, and folder sturcture.
     * Place content too large for the core distribution on a wiki site and link it through menus in the main menu,
       patch menu, and wavetable menu.

* Bug Fixes, Host and DAW changes
  * Parameter automation in the Audio Unit corrected, allowing touch automation of parameters in LogicProX
  * Zoom issues resolved in renoise windows with renoise 3.2 upgrade
  * Zoom issues resolved in reaper linux by using the Linux VST3 rather than VST2
  * Oscillator copy and paste mis-copied dynamic wavetables; fixed
  * Oscillator copy and paste always copied oscillator 1; fixed
  * Automating OSCTYPE as a DAW parameter gives the correct behavior in the UI and the audio engine
  * Automating ENVTYPE as a DAW parameter updates the UI properly
  * Fix VST2 overflow which was stopping plugin from working in QTractor
  * VST3 UI responds properly to automation
  * VST3 shows parameter value strings correctly mac and linux

* Other UI Changes
  * A status area shows MPE and Tuning state, allows it to be edited, and allows the menu to be opened
  * Increased contrast and correctly anti-aliased labels in several parts of the skin
  * VST3 remembers its zoom setting inside a session
  * Linux hosts with zenity installed will see error prompts, rename prompts, and other UI
    elements available on Mac and Windows
  * Windows mice with 5 buttons can use buttons 4 and 5 (the side buttons) to toggle modulation
    when over a slider or modulation source
  * The Solo UI accurately renders the state of the mixer, showing the single-solo bus.
  * Fixed a bug where modulation sliders could reset to max when dragged far below min
  * "Chan. AT" renamed "Channel AT"
  * Menu includes feedback and the surge website
  * Double clicking on a metacontrol value resets it to the 0 point
  * Fix a problem with non-integral boxes clipping UI element borders on windows at some zooms
  * The control modulation elements respond more consistently to mouse gestures changing values
  * The zoom menu can directly set a default zoom to any value
  * Saving a project in the DAW remembers the zoom state and MPE state across sessions.
  * Added a status area for MPE and Tuning status display and menus
  * Properly respond to OK/Cancel in the file dialogs in several places
  * A menu links to our additional content page.

* Other behavior changes
  * Linux users who create a ~/.Surge directory will use that instead of ~/Documents/Surge; and if no directory
    is present, Surge will create ~/Documents/Surge only if ~/Documents exists.
  * Users can select their own directory for patch and wavetable storage instead of ~/Documents/Surge (although
    user defaults remain in ~/Documents/Surge)
  * Presets with stored values of metacontrols will load those values rather than resetting to zero.

* Code Cleanup
  * A variety of changes to allow the factoring for VCV Rack to continue
  * The Azure-Pipeline for pull requests is more efficient
  * The linux deb file for the binary image no longer references xcb-util0
  * Use non-deprecated Mac APIs for the critical section code
  * Prior wav/sample code removed.
  * MacOS chooses the Application Support directory based on configuration.xml existence
  * Add a python script to scan all presets for a feature

</div>

<h2><a href="javascript:toggleCl('1.6.1.1')">Changes in Surge 1.6.1.1</a></h2>

<div markdown="1" id="1.6.1.1" style="display: none">

* Fix two big concerns raised as people used 1.6.0
  * Dynamically allocate wavetable loading memory so that large wavetables no longer crash
    (as fixed below) but small wavetables don't bloat memory on low mem systems.
  * Fix two bugs in the VST3 zoom-dance supression which caused some versions of FL20 on Win to
    misdraw.

* Add new modes to the Sin oscillator by quadrant masking and shifting and pitch doubling.
* Several code-level changes to clean up warnings and make surge-rack easier.
* Version 1.6.1.1 also contains a tiny fix which resolves a crash with re-opening zoomed windows in Logic
  which is not in 1.6.1

</div>

<h2><a href="javascript:toggleCl('1.6.0')">Changes in Surge 1.6.0</a></h2>

<div markdown="1" id="1.6.0" style="display: none">

* UI Fixes
  * Fix the 'zoom-dance-on-open' problem where VST2 and 3 would show at 100% then zoom up to your default zoom.
  * Disable zoom in Cakewalk
  * Resolve a problem where the wavetable menu was truncated after selecting an item in some cases
  * Find SVG for live for mac version 9 in default location if the bundle is incorrectly set

* Synth and Effects
  * Rotary speaker temposync supported correctly
  * Midi channel 3 works properly in single scene mode
  * Correct crash for very large wavetables by growing wavetable storage size
  * Correct a mis-mapping in VST3 of global parameters (such as FX 1 Send) to the control set

* Code and other changes
  * Multiple changes to enable the surge-rack project
  * Fix a problem with incorrectly truncated memory for configuration on linux
  * Improve linux vst3 packaging script (but linux vst3 still is non-functional)
  * Move headless windows build to cmake

</div>

<h2><a href="javascript:toggleCl('1.6.0b9')">Changes in Surge 1.6.0-beta-9</a></h2>

<div markdown="1" id="1.6.0b9" style="display: none">

* Move the entire UI to vector / SVG rendering for elements rather than bitmap
  rendering. This leads to cleaner pixel accurate zooms at all resolutions.
* Fix a problem with VST3 where pitch-wheel was mis-centered, meaning
  any use of the pitch wheel stuck surge out of tune and some hosts
  (most notably Fruity Loops 20) were always a half step sharp in VST3.

* UI fixes and features
  * Correct a VST3 Mouse Wheel bug where, at some zoom settings, a mouse wheel
    would move an unrelated control slider.
  * Add user-selectable mouse speed settings allowing consistent speed by slider.
  * Add ability to re-scan all user folders when content has changed.

* Code Cleanups, API changes, and crash fixes
  * Fix a crash when midi program changes selected a patch out of bounds (but
    midi program change support is still inadequate)
  * Variety of code cleanups, including support for a headless build
    completely free of vstgui and vstsdk, and code changes to allow surge to
    build the dsp engine in the VCV Rack environment
  * Fix a variety of small memory and uninitialized errors.
  * Add a python script to dump a surge patch to stdout.
  * Add a File/Open dialog in the UserInteractions namespace.
  * Improved developer documentation on builds, git, and more.

</div>

<h2><a href="javascript:toggleCl('1.6.0b8')">Changes in Surge 1.6.0-beta-8</a></h2>

<div markdown="1" id="1.6.0b8" style="display: none">

* Fix a major problem in the audio engine where QuadFilterChainState was uninitialized
  occasionally driving the filters unstable resulting in a large audio "Click/Pop" rather than
  sound
* Fixed a memory leak where surge leaked 3 oscillator references on each voice

* Several improvements to the developer-only headless codebase
  * Headless can write wav files and read midi files
  * Headless can run stress tests

* New Content
  * Several new MPE factory patches
  * New organ wavetables from layzer

* Other Fixes
  * Wavetable and Window navigation arrows no longer pixelated at high zoom
  * Default XML stream fixed so MPE pitch bend default saves properly
  * HPF default set properly in all the init patches

</div>

<h2><a href="javascript:toggleCl('1.6.0b7')">Changes in Surge 1.6.0-beta-7</a></h2>

<div markdown="1" id="1.6.0b7" style="display: none">

* VST3 Host
  * The VST3 Host was substantially improved in this version
  * Support note velocity, pitch bend, midi controllers, modulation, and MPE
  * Support DAW automation correctly
  * Show parameter names correctly on Mac

* MPE
  * Mono voices no longer have stuck or mistuned notes
  * Menu allows setting of mpe pitchbend
  * 5 factory patches in the MPE folder

* Wavetables and Effects
  * Add three wavetable packs from user layzer; "vocals" "PPG" and "morph"
  * Users can place their own .wt Wavetables in subdirectories in their User Data Folder and see them in the wavetable menu once surge restarts (macOS: "~/Documents/Surge/wavetables")
  * Third party wavetables are now present at Factory Data Folder (macOS: "/Library/Application Support/Surge/wavetables_3rdparty/")
  * Implement a python script to create and explode .wt files
  * Add an "Init" setting for each effect type
  * Take the chorus effects from "Delay/Chorus" and move them to "Chorus"; rename "Delay/Chorus" to "Delay"

* User Interface
  * Fix a problem with flickering in the Effects area
  * Fix elements which would dissapear on Linux in modulation mode
  * Update LFO TempoSync labels to include 1/128 and 1/256th notes
  * Both right and left button show wavetable menus
  * Fix the FM2 labels (it was previosly labeled "FM3")
  * Change WaveTable "Shape" parameter label to "Morph"
  * Set Controller To... -context menu now accurately shows CC#0 - CC#127 and is split by 20s
  * Fix a VST zoom problem where repeated zoom in and out could make the surge "walk" inside the frame
  * About menu now lets you open a Finder / Explorer for "Open User Data Folder" & "Open Factory Data Folder"
  * Make the about screen use Lato font
  * Supress the ctrl-click-reset gesture in LFO (which meant ctrl-click in step sequencer lost changes)

* Other Changes
  * Rename 32 bit surge dll "Surge_x86" on windows to avoid conflicts
  * Move the AU to the same zoom implementation as the VSTs
  * Add a headless app which plays all patches; build it with cmake
  * "OK/Cancel" dialog Linux (unimplemented) defaults to OK, allowing for patch overrides
  * Fix a problem where locales which didn't use "." as a decimal separator could not parse Surge patches
  * Update to developer documentation and some build tools

</div>

<h2><a href="javascript:toggleCl('1.6.0b6')">Changes in Surge 1.6.0-beta-6</a></h2>

<div markdown="1" id="1.6.0b6" style="display: none">

* Fix a major bug with font loading on Windows which would lock resources and hang some systems
* Implement scrollwheel for all slider controls
* Sub-folders for EFX Presets
* Added the Arty Distortion pack (9 distortion preset FX)
* Added the Arty Reverb pack (4 reverb preset FX)
* Added the Arty Delay pack (11 delay preset FX)
* Use Lato on linux as well as mac and win
* Slow down modulation blink time on Linux
* Only Shift is used to do swipe moves on sliders
* Shift-swipe moves dismiss popup properly

</div>

<h2><a href="javascript:toggleCl('1.6.0b5')">Changes in Surge 1.6.0-beta-5</a></h2>

<div markdown="1" id="1.6.0b5" style="display: none">

* Platforms
  * macOS: 64-bit AU, VST2, VST3 can be compiled, built and run.
  * Windows: 64-bit VST2, VST3 can be compiled, built and run.
  * Windows: 32-bit VST2, VST3 can be compiled, built and run.
  * Linux: 64-bit VST2 can be compiled, built, and run.
  * Packager (as .msi, .dmg/.pkg, and .deb respectively) for all three operating systems

* Presets and Wavetables
  * Sub-folders in patches become sub-categories in menus.
  * Certain presets would glitch when multiple notes were played, these clicks and pops no longer happen.
  * Drag'n'drop of wavetable (.wt) to now works
  * Drag'n'drop of wavefile (.wav) to Surge now shoots an error instead of crashing
  * Preset and WaveTable subfolders are now sorted alphabetically instead of randomly.
  * Loading of presets works
  * Wavetable loading improved (all extensions capitalisation supported: .wt, .WT, .Wt, .wT - no longer only .wt and others ignored)
  * Pressing +/- next to Patch will select the next (not the 31th) and the previous patch accurately.
  * Pressing +/- next to Category will select the next (not random) and the previous category accurately
  * Wavetable Next/Previous arrows work accurately and allow for scanning through each and every wavetable in the wavetables-folder.
  * Switching patches no longer crashes
  * Storing of patches works - if you write on Name and click on Category - the Name no longer reverts to"previous name". Same with Category, Creator, Comment.
  * If you try to overwrite a patch that already exists, you will get an informative prompt to the tone of "this preset x already exists, are you sure?" (Mac and Win).
  * You can no longer save a preset with no name.
  * You can no longer save a preset into a category with no name.
  * Right-clicking on preset name will show all presets in that category.
  * Checkmarks added to Category and Preset (showing Category and selected Preset)
  * Checkmarks added to Wavetable (showing folder + selected wavetable)

* Zoom
  * Surge supports a zoomable UI on all platforms
  * You can now use + / -, cmd+ / cmd- to Zoom the interface
  * Classic Surge Skin has been re-done to be 1:1 but clearer and higher resolution bitmaps (less pixelation)
  * VSTGui Scaling bugs fixed
  * Maximum zoom, minimum zoom
  * Zoom, resize menu positioning issues fixed for Linux

* Other UI
  * LFO Waveform is displayed correctly
  * Wavetable is displayed correctly
  * All menus are correctly implemented
  * Modulation names can be accurately renamed (Mac and Win)
  * If you bind more than one parameter into a modulation, and remove the first parameter, the Modulation box updates to the correct parameter-name (Bind Cutoff, Bind Resonance, Remove Cutoff = Modulation box no longer says "Cutoff").
  * If you Clear All binds from a Modulation box (Bind Cutoff, Clear All) - the Modulation box updates to "-", no longer stays as "Cutoff" even with no bind.
  * Polyphony count was inaccurate and updated only when the area was clicked, now updates in real time.
  * Polyphony count does not fluctuate while notes are being played
  * Use Lato -font for macOS + Windows
  * Umlauts ä/ö/å are correctly displayed in folder names.
  * Surge now uses a VST3SDK VSTGUI with additional fixes

* Hosts
  * VST2 / AU automation (bind parameters to DAW) learning works accurately (no longer spews forth a correct parameter and a wrong one)

* New Content
  * Added the inigo_kennedy_03 pack (31 presets)
  * Added the Nick Moritz pack (85 presets)
  * Added the Zoozither 2 pack (40 presets)
  * Added the Layzer Vocal pack (32 wavetables)

* Documentation
  * New Website created at http://surge-synthesizer.github.io
  * 1.6.0 Manual has been converted from PDF to HTML - available at http://surge-synthesizer.github.io/manual

* Other
  * Scene Highpass has been set to 6.875 Hz instead of the default 50Hz
  * Typos fixed: EFX presets used to be called Rhytmic, renamed to Rhythmic
  * UTF8 paths supported for wavetables
  * No longer crash if installation if faulty, also warn loudly if installation is faulty
  * Linux screensize detection sets zoom bounds properly
  * More accurate FX sorting and correction of typos in FX names

</div>

</div>
