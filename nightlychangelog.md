---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

On November 1 we plan to release Surge XT 1.1.2.

The primary reason for the point release is 1.1.2 fixes a problem with Surge XT in recent versions of Ableton Live where our sliders
and Ableton VST3 automation conflict. If you have experienced jumpy or inconsistent sliders in Ableton, you should upgrade Surge.

Additionally 1.1.2 contains these incremental changes

- Plugins, Automations, and MIDI
   - Change a behaviour in Surge where edited parameters ignore inconsistent VST3 value messages, which recent 
     versions of Ableton Live would send 
   - Correctly label several parameters which are not polyphonically modulatable as non-polymod for the CLAP plugin 
   - Add an option to make MIDI channels 2/3 no longer play individual scenes
   - Clearing MIDI learn also clears it from the DAW session state
   - Make Velocity = 0 CLAP_NOTE_ON events act as note off
   - Defensively support the CLAP parameter cookie being nullptr without a crash.

- DSP
   - Modify the Surge code base so the block size is a compile-time selectable power of 2 > 4 (but
     leave surge at block size 32).
   - Combulator can have absolute frequency offfsets for side voices
   - Modulating global volume now works!

- UI
   - Waveshaper Effect parameter group names clearer
   - Optionally display a CPU load estimate in the VU meter. (Available in the Value Displays menu)
   - The 'developer' menu items will be added with Shift-RMB in the main frame, not just on the menu button
   - Middle-mouse click on patch/category also loads random patch
   - Patch Comments appear more quickly
   - Muted oscillator waveforms appear semi-transparent
   - Add a few accesible labels and annoucnements we missed, including the About screen
   - Torn Out Overlay Pin but on macOS correctly position
   - Display skin category in the about screen, if possible
   - Restore the CLAP logo to the dark screen about screen
   - Holding shift when saving a patch bypasses the overwrite prompt.

- Content
   - Add a set of Linnstrument/MPE optimized patches from Roger Linn and the Linnstrument community 

- Infrastructure and work to re-introduce Surge XT in VCV Rack
   - Modify the CMake file so Surge can be used as a sub-library of another project.
   - Make surge-common buildable without building all of juce, but with just cherry-picking a few juce dependencies
   - Make surge-common build without Lua
   - Provide a from-disk windows.wt loading strategy for VCV Rack
   - Fix a crash in the effect chooser which occured on some linux systems
   - CMake exports a compile_commands.json
   - Fix a problem where an invalid patch in the user search path could in some cases crash the patch db scanner
   - A collection of commits to add the groundwork for a future Oscilloscope / Spectrum Display in surge
   - Search over Tags in the patchdb search strings

