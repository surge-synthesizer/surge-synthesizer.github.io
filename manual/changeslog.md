---
title: Change Log
---

This document is maintained by hand. Every so often one of the devs does a 
`git cherry -v upstream/1.6.0-beta-6 master` or 
`git cherry -v upstream/release/1.6.0-beta-5 upstream/release/1.6.0-beta-6` and 
makes sure the document is updated.

## Version 1.6.1.1 to Nightly (Updated as of 5a8e19740)

We are headed towards a 1.6.2 release in September 2019. These are changes in the current nightly build.

* Substantial New Features
  * Alternate Tunings
    * This change is incomplete in the current Nightly and this changelog will be udpated 
  * Oscillator pitch can be set to "Absolute" using the right mouse, making the pitch shift in absolute
    frequency as opposed to relative note space.
  * Temposync Display values use musical values ("1/4 triplet" rather than "2.667 1/16")
  * It is possible to copy and paste FX between slots in the FX router
  * The Oscillator display and LFO display are both vectorized, eliminating the high-zoom pixelation of prior versions
  * The LFO display automatically zooms to show the entire envelope; and releases the sampled LFO to show the release stage
  
* Host and DAW changes
  * Parameter automation in the Audio Unit corrected, allowing touch automation of parameters in LogicProX
  
* Other UI Changes
  * VST3 remembers its zoom setting inside a session
  * Linux hosts with zenity installed will see error prompts, rename prompts, and other UI elements available on Mac and Windows
  * Increased contrast and correctly anti-aliased labels in several parts of the skin
  * Windows mice with 5 buttons can use buttons 4 and 5 (the side buttons) to toggle modulation when over a slider or modulation source
  * The Solo UI accurately renders the state of the mixer, showing the single-solo bus.
  * Fixed a bug where modulation sliders could reset to max when dragged far below min
  * "Chan. AT" renamed "Channel AT"
  * Menu includes feedback and the surge website
  
* Code Cleanup 
  * A variety of changes to allow the factoring for VCV Rack to continue
  * The Azure-Pipeline for pull requests is more efficient
  * The linux deb file for the binary image no longer references xcb-util0

## Version 1.6.0 to 1.6.1.1

* Fix two big concerns raised as people used 1.6.0
  * Dynamically allocate wavetable loading memory so that large wavetables no longer crash
    (as fixed below) but small wavetables don't bloat memory on low mem systems.
  * Fix two bugs in the VST3 zoom-dance supression which caused some versions of FL20 on Win to
    misdraw.
* Add new modes to the Sin oscillator by quadrant masking and shifting and pitch doubling.
* Several code-level changes to clean up warnings and make surge-rack easier.
* Version 1.6.1.1 also contains a tiny fix which resolves a crash with re-opening zoomed windows in Logic
  which is not in 1.6.1

## Version 1.6.0-beta-9 to 1.6.0

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

  
  
## Version 1.6.0-beta-8 to 1.6.0-beta-9

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

## Version 1.6.0-beta-7 to 1.6.0-beta-8

* Fix a major problem in the audio engine where QuadFilterChainState was uninitialized
  occasionally driving the filters unstable resulting in a large audio "Click/Pop" rather than
  sound
* Fixed a memory leak where surge leaked 3 oscillator references on each voice
* Several improvements to the developer-only headless codebase
  * headless can write wav files and read midi files
  * headless can run stress tests
* New Content
  * Several new MPE factory patches 
  * New organ wavetables from layzer
* Other Fixes
  * Wavetable and Window navigation arrows no longer pixelated at high zoom
  * Default XML stream fixed so MPE pitch bend default saves properly
  * HPF default set properly in all the init patches

## Version 1.6.0-beta-6 to 1.6.0-beta-7

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
  
## Version 1.6.0-beta-5 to 1.6.0-beta-6

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

## Up to version 1.6.0-beta-5

### Platforms

* macOS: 64-bit AudioUnit, VST2, VST3 can be compiled, built and run.
* Windows: 64-bit VST2, VST3 can be compiled, built and run.
* Windows: 32-bit VST2, VST3 can be compiled, built and run.
* Linux: 64-bit VST2 can be compiled, built, and run.
* Packager (as .msi, .dmg/.pkg, and .deb respectively) for all three operating systems

### Presets and Waves

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

### Zoom

* Surge supports a zoomable UI on all platforms
* You can now use + / -, cmd+ / cmd- to Zoom the interface
* Classic Surge Skin has been re-done to be 1:1 but clearer and higher resolution bitmaps (less pixelation)
* VSTGui Scaling bugs fixed
* Maximum zoom, minimum zoom
* Zoom, resize menu positioning issues fixed for Linux

### Other UI

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

### Hosts

* VST2 / AudioUnit automation (bind parameters to DAW) learning works accurately (no longer spews forth a correct parameter and a wrong one)

### New Content

* Added the inigo_kennedy_03 pack (31 presets)
* Added the Nick Moritz pack (85 presets)
* Added the Zoozither 2 pack (40 presets)
* Added the Layzer Vocal pack (32 wavetables)

### Documentation

* New Website created at http://surge-synthesizer.github.io
* 1.6.0 Manual has been converted from PDF to HTML - available at http://surge-synthesizer.github.io/manual

### Other

* Scene Highpass has been set to 6.875Hz instead of the default 50Hz
* Typos fixed: EFX presets used to be called Rhytmic, renamed to Rhythmic
* UTF8 paths supported for wavetables
* No longer crash if installation if faulty, also warn loudly if installation is faulty
* Linux screensize detection sets zoom bounds properly
* More accurate FX sorting and correction of typos in FX names



