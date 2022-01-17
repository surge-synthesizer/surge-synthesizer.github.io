---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

# Changes in Surge XT Beta

Our next release of Surge - aptly named Surge XT - will make a fundamental architectural break with prior
Surge versions (up to 1.9), porting to the JUCE framework and changing the plugin ID, while
adding a variety of new features. Here's what's in the nightly as of commit 97706b5c9 (Jan 11th, 2022).

Note that this changelog discusses some features which are still incomplete in the current beta release!

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
  - You can now drop a .surge-skin folder onto Surge XT's interface and it will be installed automatically
  - You can now drop a .zip file onto Surge XT's interface and it will extract patches, FX presets, skins etc... into your user area
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
  - Surge XT is now properly signed and notarized on macOS
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


