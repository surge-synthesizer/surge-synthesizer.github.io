---
title: Changelog
permalink: /changelog/
---

## Changes between 1.6.6 and current nightly

1.6.6 is the last of the '1.6' vintage surges. Our next planned release is 1.7, which includes
skinnable user interfaces, new effects and much more. We hope.

This changelog was last updated as of git hash b8f60a5189.

+ A Skin Engine
   + Surge is now runtime skinnable with swappable assets. For more information, see this documentation we haven't written yet.
   + All synth elements in both skins get "Hover" gestures to make the UI more active
+ DSP and Synthesis Changes
   + New and Improved Effects
      + Reverb 2, a new reverb based on a network of allpass filters and delays
      + Flanger, a flanger with some extreme tuning and feedback options
      + Ring Modulator, a simulation of an analog ring modulator with a choice of carrier waves based on Surge's Sine oscillator
      + Rotary Speaker model adds drive, separate horn and rotor rate, stereo width, and mix.
      + Fix a phaser issue which caused instability at high modulation rates
      + Fix a Reverb1 and 2 problem where the HF/LF damping could become unstable at high modulation values
      + EQ gets a mix parameter, which can lead to phase errors which are musically engaging
   + Oscillator Improvements
      + The Sine oscillator becomes a mini-synth
         + Many more quadrant waveforms, 
         + Unison mode, 
         + Extended feedback range and negative feedback (results in a square-like waveform rather than saw-like)
         + Built-in low-pass and high-pass filters
         + The Sine wavetables are ordered to match the TX-series wavetables for low wavetable count
      + Built in filters added to Window, S&H and Audio Input Oscillators
      + You can route the output of Scene A into Scene B and mix it with the plugin audio input
      + FM2/3 can have negative feedback in new instances.
   + Other DSP Changes
      + Unison goes up to 16 on all unison oscillators
      + Surge uses the Surge Tuning Library used in several of our synths for SCL/KBM support
      + Fixed a problem with phase overflow in very long running Sine and FM2/3 oscillators
      + The SIN oscillator and RM use a high performance approximation for sine/cos
      + Fix a crash with high sync values in absolute mode in the Classic oscillator (SurgeSuperOscillator.cpp)
      + Fix problems with the ADSR envelope could become unstable or non-silent in very-high or very-low DS regimes
+ Modulation and Voice Management Changes
   + Each voice LFO can now trigger filter and amplifier envelopes.
   + You can 'deactivate' the rate of an LFO (right mouse / deactivate on rate slider) which makes the LFO take the
     constant value at current phase, and makes phase act like a scrub operator.
   + Step Sequencer UI rewrite 
      + Vector Rendering
      + Show the actual curve
      + Show value displays, right-mouse drag to draw a ramp, quantize-to-scale-length drags, and more
   + Substantial improvements to Portamento
      + Add Constant Rate and Constant Time modes
      + Add multiple Portamento rate curves
      + Add a glissando mode (portamento hits only scale degrees)
      + Add a mode to retrigger envelopes when crossing scale degrees
      + Features all available on the Right Mouse button on the Portamento Slider
   + Cap modulated envelope sustain at 1
   + Fix a variety of issues with modulation phase which could, in extreme modulation cases, cause glitches and noise
   + Clear FX Modulation when changing FX type to avoid unexpected modulations
   + Fix a variety of situations where, in extreme inter-modulation cases (LFO1->2->3->1 and the like) LFO sources could go unstable.
   + Allow the AEG and FEG to moduate LFO states.
+ User Presets and Persistence
   + FX and MIDI Mappings have user presets distinct from the patch/daw stream
   + MIDI mappings are stored in your DAW state for recall
   + You can display the current midi mapping from the menu
+ UI Improvements
   + Every parameter links to context specific help.
   + Discrete parameters (like filter type or tempo synced LFO rates) can now also be set through the right mouse button context menu
   + Continuous parameters and their modulations can now be set with a text input dialog by choosing the value from the slider's right mouse button context menu
   + Slider Ctrl-Drag is properly quantized for values and for modulations
   + Updated units and display of many values and their modulations
   + LFOs which are in envelope or Step Seq mode will be renamed as ENV or SEQ across the board
   + Labels, checkmarks, and ordering in menus more generally consistent
   + Zoom button in the Status panel with more consistent status panel menu behavior
   + Active hover gestures on buttons, sliders, and so on
   + Optional High Precision Value Readout mode shows more decimals in popups and value input dialogs
   + You can browse FX presets with previous/next button, and see the name of the one you have selected 
   + Inactive sliders are transparent (Win/Mac) or have a hidden handle (Lin). Some sliders can be activated with RMB/Activate
+ OS Specific Improvements
   + Portable installation support on Windows (Surge will look for SurgeData and SurgeUserData folders next to the .dll/.vst3 first)
   + Substantial Linux UI improvements
       + VSTGUI performance patched to substantially improve redraw time
       + VSTGUI menus patched to open in a non-overlapping fashion
       + Activate vector UIs for all components (LFO, Oscillator)
+ Content
   + New patches from Dan Mauer
+ Plugin Improvements
   + The VST3 works reliably on Linux, including Reaper, Carla, Bitwig 3.2 and sample hosts
   + The VST3 correctly orders multiple MIDI messages in the same sample chunk
   + Fix a problem where the VST3 mis-rendered Macro DAW automation in Reaper
   + Add the VST3 context menu to Macro controls
   + The VST2/3 can output scenes onto auxilliary channels (not yet implemented in AU or LV2)
   + Fixed a bug with VST3 host menus which would crash Surge in some hosts (especially Bitwig Linux)
   + AU advertises patch names to Logic Pro
   + LV2 reads screen scale factors
   + DAW automation names contain scene label and are uniquely named
   + VST3 Windows properly names MIDI extra parmeters
   + VST3 Menus are available on Macro parmaeters also
   + Fix an error where some hosts in some situations would fail to load vstpreset versions of Surge sessions
+ Smaller Changes
   + Set Default Zoom option now sets the default and the current zoom level
   + Many UI elements renamed to be more consistent across the instrument
   + Effects now have an init (dry) and an init (send) preset, the latter to be used in send FX slots
   + Fix a bug which limited modulation on some Scene B modluation sources
   + SVG renderer supports radial gradients
   + Menu labels and capitalizations generally more consistent
   + Limit MIDI learn to sensible controllers
   + Use General MIDI CC names in macro controller context menus
   + You can choose the name of MIDI note 60 (default is C4; you can also pick C3 or C5) and it is applied consistently
   + Developer Mode menu is available on right click of the Menu button
   + Cursor hiding is a user option on Windows
   + When reappearing from being hidden, mouse cursor is restored to the position from which the drag was started
   + Scroll wheel works on LFO Type parameter
   + The information popup no longer clips or draws offscreen
   + Popup Prompts have titles and directions
   + You can set a default author and comment for patches you save
   + Fix a bug which caused the cursor to disappear on windows when renaming a Macro
   + Show an error when loading an .fxp file from a synth other than Surge
   + Properly callibrate windows mouse wheel to work on integer sliders
   + Fix a bug whereby switching an SLFO to and from a deformed Step Sequencer could mis-callibrate LFO rate
+ Infrastructure
   + Moved our entire build system to CMake
   + Fixed a bug where patches could incorrectly stream in international settings with "," as a decimal separator
   + Binaries are now properly licensed FOSS - disabled the VST2 builds
   + Better versioning strategy in the various DLLs, plugins, and tools
   + Applied a variety of updates to our deb package
   + Move our Azure pipelines to macOS 10.14 (but still build for 10.12 and higher)
   + Tightened up some unit test thresholds to make them more reliable
   + Removed a large number of code warnings
   + Increased warnings-as-errors on macOS and squashed several warnings
   + The NIGHTLY deb installer starts version number with 9. not 0.
   + Renamed all 'master' code branches 'main'.

## Changes in Version 1.6.6

Version 1.6.6 fixes several bugs and adds a few key features. We released so quickly after 1.6.5 since we want to take a pause on doing regular production releases while we
prepare for a Surge 1.7 release which will include (among other things) a skinning engine to allow designers to adapt 
the UI. As such, this will be our last production release for a little while - perhaps until summer of 2020. Changes in 1.6.6 are

* Audio and Performance Changes
  * The "Absolute" unison mode was both sample rate dependant and mis-callibrated. Correct it so that, at all sample
    rates, a "16hz" absolute unison is a 16hz unison spread.
  * Unison range can now be extended, giving unison spreads up to one octave (pitch) or 192Hz (absolute)
  * The Window Oscillator now supports FM, and is callibrated to use the same FM Depth as FM2/3/Sin oscillators.
  * We initialize modulators before the initial voice start, setting the first modulator value at voice initiaion corectly and 
    avoiding a 32-sample "sweep" across a modulator value at voice onset.
  * Fix two bugs with the sustain pedal; first sustain on channels 3 and 4 didn't work, and second pressing a key 
    multiple times while sustain was held would lead to an incorrect state.
  * Fix a bug with the tuning engine where mappings with root keys far outside of scale ranges gave incorrect results
  * Make the Oscillator display constant even in extreme tuning changes
* LV2 Changes
  * The LV2 had incorrectly advertised the identity of its ports. Change to use unique symbols for each port. *Unfortunately this fix will break prior Surge sessions, but those prior sessions inconsistently streamed the synth state in most LV2 hosts*
  * The LV2 didn't advertise all parameter changes leading to a port being non-synchronized. 
* Smaller Changes
  * The VST3/Windows plugin properly formats the automation display of the CC parameters
  * The FX slots and automation parameters are named more consistently, as are several menus and labels
  * The value popup window popsup on mouse-down not mouse-move on a slider
  * The patch and wavetable menus have refresh options on the popup menu, not just in menu/data and patches
  * Slider mouse behavior in medium and slow works more like classic when over-dragging
  * Added an init patch which assigns a distinct modulator envelope to each OSC
  * Add a regtest that parameter IDs are stable across versions
  * Modify the build pipeline so the linux .deb file has correct ownership on shared assets
  * Stream the WaveTable name into the patch
  * Correct the "open tuning library" menu on windows
  * Fix a bug with opening and closing the VST2 on Linux


## Changes in Version 1.6.5

* New Features for Playing Surge
   * Added a "Channel Split" mode to split by midi channel across scenes, just like the KeySplit mode does with key
   * Several changes to the alternate tuning implementation
      * We have full support for scala KBM files, including full keyboard
        remapping, scale 0, and frequency 0 selection.
      * The default tuning constant key is Midi note 60 / 261.63 hz
      * The scale viewer shows frequencies per key
      * Correct an error where tuning could interfere with filter cutoffs and delay timings, especially with long scales
   
* Changes to the Modulation Section
   * When any control is TempoSynced, show a beats- display as well as a time-display on the LFO grid (not available on Linux)
   * Temposync all controls for an LFO modulator with a single RMB gesture on any control.
   * Add LFO Envelope "Lanes" in the LFO-1 retrigger section. Use shift- or right-click on the retrigger section to trigger both the Amp and Filter envelope or just one or the other.
   * Make envelope retrigger work properly for Analog mode envelopes.
   * Choose a more on-theme blue for the step sequencer section, rather than that wierd green.
   * A "Green Line" shows how far you have modulated when you modulate a slider. Try it!

* Changes related to MPE
   * The global pitch bend (ch0 pitch wheel) no longer double-bends in MPE mode
   * MPE pitch bend state is per instance and saved in the DAW state, so you can use two surges with mpe bend of 24 and 48 in a single project, if you happen to have both a Seaboard and a Linnstrument. Say.

* Changes to the VST3
  * SideChain support is properly supported with a kAux channel, meaning SideChain works in Cubase Pro. Additionally, in Reaper versions > 6.02 the VST3 will properly configure routing for sidechaining when dragged into a track. (For earlier versions see [here](https://www.youtube.com/watch?v=OKR0x_dneYI).)
  * Support VST3 context menus. Right mouse on a param in the VST3 in a modern DAW and check it out!
  * VST3 Automation for the special "CC" controls works.
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

## Version 1.6.3 to 1.6.4.1

Versions 1.6.4 and 1.6.4.1 were released late November 2019, with several MPE and effect changes, new content, and some small 
cleanups

* Synth Sound and Behavior
   * Release velocity is now an available modulation source. See [more details here](https://www.youtube.com/watch?v=GnEX-ypuem0)
   * Sustain Pedal in MPE mode was mis-mapped to the wrong channel, leading to it not working in MPE note-per-channel configurations
   * The 'Drive' feature in the distortion effect is extendible   
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


## Version 1.6.2.1 to 1.6.3

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

## Version 1.6.2 to 1.6.2.1

1.6.2.1 is a point release fixing a few regressions in 1.6.2 and a few crashes our users noticed when more
people downloaded the synth

* Fix a long-standing MPE error where channel aftertouch was mis-routed
* Restore the "extended" menu on Oscillator pitch; apply a few other cosmetic menu changes
* Build patch menu correctly when user directory names exactly match factory directory names
* On Linux systems without zenity installed, fail gracefully instead of SEGV
* Apply naming consisntency to wavetables as well as patches

## Version 1.6.1.1 to 1.6.2

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



