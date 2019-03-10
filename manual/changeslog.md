# Surge changeslog

This document is maintained by hand. Every so often one of the devs does a 
`git cherry -v upstream/1.6.0-beta-6 master` or 
`git cherry -v upstream/release/1.6.0-beta-5 upstream/release/1.6.0-beta-6` and 
makes sure the document is updated.

## Version 1.6.0-beta-6 to hash 107dca6a518 

* VST3 Host
  * Suppor note velocity
* MPE 
  * Mono voices no longer have stuck or mistuned notes
  * Menu allows setting of mpe pitchbend
* Wavetables
  * Add the layzer PPG pack
  * Users can now save their Wavetables into their User Data Folder (macOS: "~/Documents/Surge/wavetables")
  * Third party wavetables are now present at Factory Data Folder (macOS: "/Library/Application Support/Surge/wavetables_3rdparty/")
* Rename 32 bit surge dll "Surge_x86" on windows to avoid conflicts
* Update LFO TempoSync labels to include 1/128 and 1/256th notes
* Implement a python script to create and explode .wt files
* Move the AU to zoom implementation symmetric with the VSTs
* Both right and left button show wavetable menus
* Fix the FM2 labels
* Add a headless app which plays all patches; build it with cmake
* Unimplemented "OK/Cancel" on Linux defaults to OK, allowing for patch overrides
* Change WaveTable "Shape" parameter label to "Morph"
* Set Controller To... -context menu now accurately shows CC#0 - CC#127
* Set Controller To... -context menus are split by 20 instead of 10
* Fix a VST zoom problem where repeated zoom in and out could make the surge "walk" inside the frame
* About menu now lets you open a Finder / Explorer for "Open User Data Folder" & "Open Factory Data Folder"
* Fix a problem where locales which didn't use "." as a decimal separator could not parse Surge patches


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



