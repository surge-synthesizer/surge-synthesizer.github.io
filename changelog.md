---
layout: page
title: Changelog
permalink: /changelog/
---

This page contains changelogs for all release versions of Surge. For the latest developments, we are keeping
a <a href="/nightlychangelog">separate nightlies changelog, which will be merged to this page upon release</a>.

Changelogs for versions prior to Surge XT 1.0 release can be found <a href="/old-changelogs">here</a>.

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

<h1><a href="javascript:toggleCl('xt1.2.1')">Changes in Surge XT 1.2.1 and 1.2.2</a></h1>

<div markdown="1" id="xt1.2.1" style="display: block">

We released Surge XT 1.2.1 on April 30, 2023, and 1.2.2 fixing a small error on May 1. 
It fixes a few small irritations from the previous version
and adds a couple of features which we had ready for the next release.

* Headline Changes
  * In 1.2.0 we have corrected a problem with audio input for irregular block sizes, but we warned about this
    situation too loudly and way too often - the warning is now moved to the audio input oscillator
    screen  (in 1.2.2; in 1.2.1 it is on every oscillator screen), but the feature is kep
  * Renaming a patch could cause a race condition in our patch database - especially on Linux systems - 
    causing a simple rename to show a large number of database lock errors - this is now fixed
  
* Tuning
  * Pitch slider set to 0 in Absolute mode now tunes correctly with Scala tuning files loaded
 
* Modulation
  * Fixed pitch bend becoming stuck when toggling MPE mode during held bent note
  * Made sure Portamento set to 0 is strictly 0 in all modes
  
* UI/UX
  * Clearing FX slot or chains will now disable bypass if a slot or slots were bypassed
  * Dragging a node in MSEG shows a value tooltip
  * Fixed font difference after typein for VKB Tempo field
  * Fixed a problem where Oscilloscope improperly grabbed keyboard focus
  * Allowed envelope retrigger options for Latch play mode
  * Fixed a problem whereby the Tempo field in standalone didn't work in some cases

* Content
  * Added CC0 license to the Init Square template patch
  
* Infrastructure
  * 1.2.2 contains our last binary distribution of the LV2 format. Going forward
    users needing an LV2 will need to self build. (1.2.1 is missing an LV2).
 
  
</div>
  
<h1><a href="javascript:toggleCl('xt1.2.0')">Changes in Surge XT 1.2.0</a></h1>

<div markdown="1" id="xt1.2.0" style="display: none">
  
We released Surge XT 1.2.0 on April 10, 2023. As well as several new major features in tuning, visualization and
accessibility, this release brings several new developers contributing substantial changes to the project!
  
* Oscilloscope
  * Surge XT now has a built-in oscilloscope and spectrograph, based on s(m)exoscope from Smartelectronix!
  * Oscilloscope can be opened through right-click menu of the top-right output level meter, or through the main menu, Workflow submenu, or by pressing Alt+O (or Option+O on Mac)

* Tuning
  * Surge XT can now act as MTS-ESP provider (server), allowing the Surge XT Tuning Editor to provide tuning for all supporting clients in a session
  * Remediated yet more edge cases in our internal tuning, including keyboard mapping larger than a scale

* Accessibility
  * We have added Accesibility submenu to the main menu
    * This menu contains "Set all recommended accessible features" option which basically turns on all the good stuff that
    a screen reader user would require
  * Modulation Editor focus is improved when adding a modulation
  * Quantized slider movements (Control+drag) now work with keyboard bindings (Control+up/down arrow) symmetrically
  * There is now an option to export the current patch as text (opens in Web browser) for sharing and quicker patch inspection
  * Improved the Alias oscillator's additive editor for screen readers by making it consistent with other controls and overlays
  * Patch Selector will now select the submenu for the category of a given patch by default
  * Improved name invalidation when arrowing through discrete menu parameters
  * Step Sequencer steps now have manual value typeins on right mouse click context menu
  * Added a keybinding (Alt+0 by default) to announce which tabs are currently selected across Surge's user interface, and which patch is loaded
  * Fixed an issue where Alt+, and Alt+. bindings could get stuck in the Patch Selector

* Plugin
  * Allowed a more flexible set of I/O mappings, which fixed an interaction between a JUCE, Ardour and Surge XT which could silence VST3 plugin in some situations
  * Skipped VST3 context menu extensions in Reason, where they seem a bit dicey still
  * Added parameter name invalidation on patch change to refresh automation displays
  * Correctly implemented CLAP_NOTE_CHOKE
  * Corrected a problem with the virtual keyboard in the CLAP version of the plugin
  * Added appropriate buffering for the audio input for hosts where block size is not a multiple of Surge XT's internal process block size. This stops input buffer
    corruption with non-fixed sized blocks in FL Studio, at the cost of input buffer latency of 32 samples
  * Added a single entry point for note-matches-channel-key-voice-id, allowing the rare case of per-channel polyphonic modulation in CLAP to work

* Surge XT Effects
  * Implemented handling of block sizes that are not multiples of 32 samples more elegantly
  * Default settings for Reverb and Delay effects are more usable
  * Parameters for Airwindows effects will now be properly shown even if no audio engine is running
  
* UI/UX
  * Filter analyzer now lets you modify the cutoff and resonance simultaneously by simply dragging across the plot, XY pad style
  * Output level meter can now show CPU usage optionally (right-click the level meter to show context menu with options)
  * Alt+click on an FX slot will now clear it
  * Typeins for certain continuously togglable parameters (like Freeze in Nimbus or Knock in Spring Reverb) now work
  * Added a license field to the Save Patch dialog
  * Added an action to initialize patch (not bound to a key by default)
  * Modulation List now has a button to copy all assignmets to clipboard
  * Several virtual keyboard actions are now in the Keyboard Shortcut Editor (octave up/down, velocity up/down 10%)
  * Modal overlays will now have a semi-transparent background (it was solid color before)
  * Fixed jog order for wavetables to match display order in all cases
  * Visual display of modulation state is now going to be correct after using Paste scene option
  * LFO display will now be repainted when automation changes LFO parameters
  * Filter analysis overlay will now be repainted when automation changes filter parameters

* DSP
  * Noise generator can now be dropped to mono in all stereo filter configurations (right click the Noise Color slider)
  * More work done to support process block sizes that are lower than 32 samples - especially fixing a zippering issue in block-wise interpolators used in the mixer
  * Nimbus resampler now works at very high sample rates (or low block sizes)
  * Added clamps to all Twist oscillator parameters, which means modulation can no longer make it fail to produce sounds
  * Added a clamp to Airwindows FX type parameter in order to fix an occasional crash

* Modulation
  * Modulation now works on Unison Detune parameter of Ring Modulator effect
  * Added an option to scale additional LFO outputs by Amplitude parameter (found in Switch to... submenu in modbutton context menu)
  * Fixed step sequencer fast drags and out of bounds drags when holding Control
  * Fixed a bug where a constant MSEG segment with an AEG or FEG trigger would send the trigger on every block, instead of just the first one
  
* MIDI
  * Added an option to ignore MIDI Program Change messages
  * Clamped MIDI CC/pitch bend smoothers to avoid an infrequent extreme instability under some very rapid (computer-generated) changes

* Other Changes and Bug Fixes
  * Internal dialog titlebar buttons are consistent on macOS (left-aligned instead of right-aligned)
  * Fixed incorrect deserialization of "Precise tuning" setting for comb filters
  * Overlay tearout state is now separately stored for standalone and plugin versions
  * Fixed a minor UI issue where setting up modulation for LFO parameters would blink when pressing the down arrow on the modbutton and switching LFOs
  * Fixed a problem which left extra uninitialized padding at the end of streamed oneshot wavetables (this was not audible, it just looked incorrect)
  * Truncated wavetables no longer add noise to the final imported wavetable
  * Single cycle wavetables had a clamping error which could trigger an assertion in production builds on Arch Linux and other GCC builds with runtime checks enabled
  * Surge XT will now close all open menus when destroying the GUI editor, which means lingering menus longer result in a crash when closing the plugin window
  * Fixed a bug where a .modpreset in the root menu of the Modulation Presets area would crash Surge XT
  * Show a warning and silence output rather than crash in case when Surge XT is incorrectly handed a mono output buffer (which could happen in some Mac configurations with
    Bluetooth headphones)

* VCV Rack Related Changes (and other non-plugin clients of the code)
   * Allowed retriggering from non-zero values for LFO EGs
   * Provided a function to give a frame size to an untagged WAV (not exposed in Surge XT interface yet)
   * Allowed Treemonster to output the pitch and envelope it detected
   * String Oscillator would leak memory if an instance was initialized twice. Surge XT didn't do this, but Rack did
   * Added the ability to compile without Airwindows, SQLLite or MTS-ESP
   * Updated CMake rules for `simde` and JUCE allowing yet more indirection and choice
   * Allowed `SurgeStorage` to be more flexibly configured in context other than Surge XT synthesizer, such as VCV Rack and SUrge XT Effects plugin
   * Added an option to explicitly skip third party wavetable scans
   * Corrected the bug in Twist oscillator's LPG optionally, activated the fix for VCV Rack use only (for now)
   
* Infrastructure
  * Make build on GCC12 and MinGW on Windows
  * `surge-common` can now build for RISC-V and WebAssembly
  * Continued to modernize the codebase, moving to proper copy and assignment constructors on core classes, rather than `memcpy`
  * Moved many C-style strings to `std::string`
  * Build if an external build system adds AVX flags to the build
  * Added `pffft` as a submodule
  * Python binding updates
    * Updated to pybind 11
    * Exposed `mpeEnabled` and `tuningApplicationMode`
    * Add build wheels for `cibuildwheel`
    * Made `surgepy` an installable Python package
  * Surge XT testrunner will fail quickly and explicitly if resources are not available
  * Added an API for `SurgeImageStore` to get a `JuceImage` for JUCE-specific uses
  * Lots of small warning cleanups across the codebase
  * Non-parameter sliders can now have tooltips

* Content
  * Replaced factory templates with explicitly CC0 licensed patches
  * Updated the LinnStrument MPE patches 
  * New third party wavetables from A.Liv
  * Fixed Init FM2 and Init Square templates so that they don't have filters bypassed
  * Cleaned up Lua syntax in Formula modulator tutorials

</div>
  
<h1><a href="javascript:toggleCl('xt1.1.2')">Changes in Surge XT 1.1.2</a></h1>

<div markdown="1" id="xt1.1.2" style="display: none">
  
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
</div>
  
<h1><a href="javascript:toggleCl('xt1.1.1')">Changes in Surge XT 1.1.1</a></h1>

<div markdown="1" id="xt1.1.1" style="display: none">

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

</div>
