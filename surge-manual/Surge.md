---
title: Manual
permalink: /surge-manual/
---

![](./images/Pictures/10000000000004BE0000012727D0CC6B.gif)

## Note:
This is a port of the old manual\!

# Getting Started

Thank you for choosing SURGE\!

This chapter is intended to give you a brief overview to some concepts
that are specific to SURGE and a general introduction of the
synthesizer. 

  -   - 
    
## Installing SURGE

### On Mac OS X

On Mac, SURGE is delivered as a Plug-in Instrument for both the Audio
Unit (AU) and VST Plug-in interfaces. To use it, a host application
compatible with one of the plug-in interfaces is required. 

System Requirements (1.6.0 and newer):

  - Mac OS X 10.5.0 or newer
  - An Intel CPU
  - AU or VST-compatible host application

System Requirements (1.5.4 and older):

  - Mac OS X 10.3.9 or newer
  - An Intel CPU or PowerPC G4/G5 CPU (1 GHz or faster)

To install, drag the file “SURGE.component” to the “Components” link,
“SURGE.vst” to the “VST” link and the directory “Vember Audio” to the
“Application Support” link as instructed in the DMG file. This will
install SURGE for all users on your computer.

If you wish to install SURGE only for a single user, drag the contents
to the following paths instead (\~ is your home directory):

SURGE.component -\> \~/Library/Audio/Plug-Ins/Components/  
SURGE.vst -\> \~/Library/Audio/Plug-Ins/VST/  
Vember Audio -\> \~/Library/Application Support/

Audio Units, AU is a trademark of Apple Computer, Inc  
VST is a trademark of Steinberg Media Technologies GmbH

### On Windows

On the windows platform, SURGE is delivered as a VST plug-in instrument
and need a compatible host application to work. 

System Requirements:

  - Windows 2000/XP or newer
  - A reasonably fast (1 GHz or faster) CPU with SSE support (Pentium 3,
    Athlon XP or better)
  - VST-compatible host application

Make sure you install it in a directory in which your host application
will search for VST plug-ins. There is usually a directory named
vstplugins created by the host application for this purpose. (see your
host application's documentation for more information)

VST is a trademark of Steinberg Media Technologies GmbH

### 64-bit version of SURGE (Windows x64)

As of version v1.1.0, SURGE ships as both a 32-bit (x86) and 64-bit
(x64) plug-in for the VST/windows platform. 

To use the 64-bit version you need the following:

  - A CPU supporting the x64 (AMD64/EM64T) instruction set
  - A 64-bit OS (like Windows XP x64 edition, Windows 2003 x64 or Vista
    x64)
  - An application capable of hosting 64-bit VST plug-ins

Applications known to support 64-bit VST plug-ins at this time include
Plogue Bidule and Cakewalk SONAR.

## Introduction to the User Interface

The user-interface of SURGE is divided into three main sections:
Patch/Global, Scene and FX to reflect what part of the synth they
control. Keeping this structure in mind will make it easier to
understand the layout.

![Illustration 1: The three sections the user-interface of SURGE is
divided into.](./images/Pictures/10000000000003AE0000023CBF46E6E1.gif)

## Modulation routing

Modulation routing in SURGE is a bit different than most synthesizers,
but it's dead easy. Just select the modulation source you want to use,
activate the modulation mode with a second click and drag the slider to
the position you want the parameter to be at when fully modulated.

When the modulation mode is active the modulation source flashes
(green/blue) and all sliders that can be modulated by the modulation
source turn blue. A transparent 'ghost slider' will show the
non-modulated position while in modulation mode.

A third click on the modulation source button disengages the modulation
mode.

![Illustration 4: modulation routing step-by-step.  
1-2) Select modulation source by clicking it.  
4\) Activate modulation mode by clicking it a second time.  
5\) Modulate-able sliders now appear blue.  
6\) Drag the slider to the desired position when fully modulated . A
“ghost slider” will display the original
position.](./images/Pictures/100002010000024C000000598BBB75A5.png)

As entering/leaving the modulation mode is something you will do often
there's several ways to activate/deactivate the modulation mode:

  - Clicking an already selected modulation source again
  - Holding down the alt-key
  - Pressing the TAB key
  - Pressing the middle, 4<sup>th</sup> or 5<sup>th</sup> mouse button.
    (cursor can be anywhere in the window)

The last three of the alternatives depend on the host application to
forward the correct mouse/keyboard-messages to the plug-in. They may not
work in all hosts because of this. Whether the middle, 4<sup>th</sup>
and 5<sup>th</sup> mouse buttons will work is also dependent on how the
mouse driver of the operating system is configured.

Keep in mind that although it might seem like the modulations are set to
an absolute position they are in fact relative. If you move the slider's
non-modulated position the modulated position will move as well.

# User Interface Reference

<!-- end list -->

  -   - 
    
## Common UI elements
        
### Sliders

The most common user-interface control in SURGE is the slider. They come
in both horizontal and vertical orientations but their functionality is
otherwise identical.

Sliders are always dragged, there is no jump if you click on the slider
tray instead of the slider head, it enters dragging mode nonetheless. 

Slider interaction:  
LMBDrag slider  
LMB+RMBDrag slider (fine)  
Shift+LMBDrag slider (fine)  
Shift+LMB+RMBDrag slider (ultra-fine)  
LMB double click Reset parameter to default value  
RMBContext menu

Right-clicking sliders bring up a context-menu that allows you to clear
modulation routings and assign a MIDI controller to the slider. 

![Illustration 5: Slider context
menu](./images/Pictures/2000000700002CA500001515841E5C27.png)

The 'learn controller \[midi\]' command will engage the learning mode.
The slider will be assigned to the next controller message received by
SURGE. The MIDI-messages recognized are ordinary Channel Controllers as
well as RPN/NRPN messages. (Registered Parameter Number/Non Registered
Parameter Number)

Some parameters can be have their range extended and/or be synchronized
to the host tempo. The options 'extend range' or 'temposync' will show
up on the context-menu if they do.

The slider heads give a visual indication whether they can be modulated
by the current modulation source when entering the modulation mode
([Modulation routing](#0.0.Modulation%20routing|outline)).

![Illustration 6: Modulation mode  
left) Off, Slider is editing parameter directly.  
right) On, Slider is editing the modulation depth from the currently
selected modulation
source.](./images/Pictures/200000070000295700000396C06D33CE.png) 

The slider tray will have a blue tint if it is modulated by the current
modulation source. A half-tint indicates that it is modulated, but not
by the currently selected source.

![Illustration 7: The amount of blue-tine of slider tray indicates
whether the parameter is
modulated.](./images/Pictures/20000007000035BD000003096683A842.png)

### Modulation source buttons

The modulation source buttons have a few additional feats not shown in
the introductory modulation chapter. ([Modulation
routing](#0.0.Modulation%20routing|outline))

They do change their appearance depending if they're used in the current
patch (scene dependent) and will highlight when the mouse is hovering
over a destination slider that is modulated by that particular source.

![Illustration 8: Modulation sources look different when
used](./images/Pictures/200000070000295700000235C863AF94.png)

Right-clicking a modulation source button brings up a context-menu that
allows you to:

  - copy/paste LFO settings (LFO only)
  - clear routings to either all destinations or a single destination
  - Assign/clear a MIDI controller (CTRL 1-8 only)
  - Toggle between bipolar/unipolar (CTRL 1-8 only)
  - Rename them (CTRL 1-8 only)

![](./images/Pictures/20000007000029E4000016537785B955.png)

### Controller 1-8

What separates these controllers from the rest is that they are
assignable by the user to either MIDI CC, RPN or NRPN controllers and
their value can be edited on-screen. Choose 'Learn Controller \[MIDI\]'
from the context-menu and it will be assigned to the next MIDI
controller received by the synth. 

**CC** = Channel Controller (7-bit)  
**RPN** = Registered Parameter Number (14-bit)  
**NRPN** = Non Registered Parameter Number (14-bit)

These are different ways to send controller messages via MIDI. But as
Surge will recognize them automatically you just have rotate the knob
and Surge will learn it.

These controllers are stored globally. You can also rename them and
choose if their modulation is bipolar (both positive and negative with 0
in the middle) or unipolar (just positive). 

## Patch/Global section
        
### Scene select/mode

Whether a scene will generate a voice when a key is pressed is
determined by the **scene mode** setting:

![](./images/Pictures/2000000700001465000007DBB9AA1462.png)

  - **Single** – Notes will be played only by the selected scene. 
  - **Split** – Notes below the **split-key** will be played by scene A,
    notes above and including the **split-key** will be played by scene
    B.
  - **Dual** – Notes will be played by both scenes. 

**Scene select **determine which scene is selected for editing and
playing (when **scene mode** is set to Single). 

Right-clicking the **scene select** buttons brings up a context-menu
that allows you to copy/paste scenes.

**Poly **shows the number of voices currently playing and allows you to
set an upper limit to the number of voices allowed to play at the same
time. The voice-limiter will kill off excess voices gently to avoid
audible artifacts, thus it's not uncommon for the voice count to exceed
the limit.

The state of the polyphony limit setting is **not **stored in patches.

### Patch browser

Finding sounds in SURGE is easy, just press the **-/+** buttons until
you find something you like. If you left-click the patch-name field
(anywhere in the white area) a menu will list all available patches
arranged into categories. The categories are further organized into
three sections: Factory patches, 3<sup>rd</sup> party patches and User
patches.

A right-click will bring up a menu with just the patches of the current
category.

![Illustration 9: The patch
browser](./images/Pictures/2000000700003DBB000007DB4B90BC71.png)

### The store dialog

![](./images/Pictures/10000000000001E30000015A38B17E1E.png)Clicking the
store button of the patch browser opens the store dialog. It is where
you give patches their name and choose which category they should belong
in. You can type new category manually here as well. The patches you
store here will end up in the user section on the bottom of the patch
menu.

There's also text fields for the name of the patch creator and comments.
The comment is not currently shown in the main GUI. (v1.2)

### FX-Bypass, Character and Master Volume

![](./images/Pictures/20000007000029E4000007DB591C6A11.png)**FX Bypass**
lets you quickly hear what a patch sounds like without the effect-units.

  - **Off** – All effects are active.
  - **Send** – The send effects are disabled.
  - **Send + Master** - The send and master-effects are disabled.
  - **All** – All effects are disabled.

**Master volume** controls the last gain stage before the output. The
VU-meter above it shows the output-level and will become red if it goes
above 0 dBFS. 

The state of these two settings are **not **stored with patches. They
are however stored by the host application in your project files. 

**Character** controls the amount of high-frequency content present in
any oscillators of the patch that are using the “classic” algorithm. The
possible choices are Warm, Neutral and Bright.

## Scene section

The UI of the scene section is roughly divided into three parts:

  - Sound generation
  - Sound shaping
  - Modulation

![](./images/Pictures/100002000000030B000001E7B396D8C0.gif)

  -   -   - 
        
## Sound generation

This is where a sound is born. The oscillators generate waveforms
according to the notes played, are mixed in the oscillator mixer and the
audio is then passed on to the sound-shaping section.

<span class="image"></span>

### Oscillators

**1/2/3-buttons** – Chooses the active oscillator for editing.

**Display** – Shows the active waveform. When the wavetable oscillator
is used, it will also work as wavetable picker.

**Type** – Oscillator type. Chooses which algorithm is used for the
oscillator. Available options are classic, sin, wavetable, S\&H noise
and audio input.

**Pitch & octave** – Controls the pitch for this particular oscillator.
The range of the slider can be extended from its context menu.

**Keytrack** – When disabled, the oscillator will play the same pitch
regardless of the key pressed.

**Retrigger** – If active, the oscillator will always start immediately
at zero phase. This is useful for snappy sounds where you want the
attach to sound exactly the same each note. 

The rest of the sliders controlling the oscillator is specific to each
oscillator type.

### Oscillator Mixer

The oscillator mixer has 6 inputs. Each channel has 4 controls.

**M** – Mute

**S** – Solo (only play oscillators that have solo active)

**Routing** (the green box) – Chooses which filter the oscillator is
routed to. The middle position (default) will route the output to filter
1 if a serial filterblock configuration is used or both filters for any
other configuration.

**Slider** – Gain control

There is finally an output gain control which affect the level of all
the mixer inputs.

### Other

**Pitch & octave** – Controls the pitch for the entire scene. Affects
the filter key-tracking and the keytrack modulation source as well. The
range of the slider can be extended using the context menu.

**Portamento** – Portamento is an effect where a new note will slide in
pitch from the pitch of the last played note. This setting determine how
long the slide will be. A setting of 0 disables Portamento. Can be
tempo-synced.

**Osc drift** – Applies a small amount of instability to the pitch of
all oscillators, making them subtly detuned. Although the parameter is
shared, the randomness of the instability effect is independent for all
oscillators (and eventual unison sub-oscillators).

**Noise colour** – Affects the frequency spectrum of the noise
generator. The middle position results in white noise. Moving the slider
to the left emphasizes LF while moving it to the right emphasizes HF.

**Pitch Bend Down/Up** – Pitch Bend Depth. Controls how much the pitch
is affected by the pitch bend wheel. (in semitones)

**Playmode** – Chooses how multiple notes are handled. Poly will allow
multiple notes to be played, while Mono will only let the last note
play.

Mono has two possible modifiers:

  - Single Trigger EG (ST) means that the two envelope generators are
    not restarted when sliding between two notes (two notes that overlap
    in time)
  - Fingered portamento (FP) means that portamento is only applied when
    sliding between notes and not when there is time between the played
    notes.

<!-- end list -->

  -   -   - 
        
## Sound shaping

<span class="image"></span>

**Filterblock configuration** – Chooses how the filters, waveshaper and
the gain stage are connected together. 

**Feedback** – Controls the amount (and polarity) of output that's fed
back into the input of the filterblock. It has no effect when using the
Serial 1 filterblock configuration (which because of this has a lower
CPU load).

**Filter balance** – Controls how the two filters are mixed. The
behavior depend on the filterblock configuration.

Be careful with your monitoring volume when using feedback. It's easy to
make really loud high-pitched noises by mistake if you're not familiar
with how the synth reacts to feedback.  
  
Don't let this scare you though. There's a lot to be gained from proper
and creative use of feedback. Changing the character of filters, making
filters interact together, making basic physical models, making sounds
that are just about to break apart. It is one of those things that make
SURGE special.

### Filter controls

Type – Selects the type of the filter. There are 10 choices. Off, 2-pole
low-pass, 4-pole low-pass, 4-pole low-pass ladder filter, 2-pole
high-pass, 4-pole high-pass, band-pass, notch, comb-filters with both
positive and negative polarity and a sample\&hold module. 

**Subtype** – Selects variations of each filter type. The difference can
vary from subtle to radical depending on how the filter is used. See
[Filter algorithms](#7.1.Filter%20algorithms|outline) in the [Technical
Reference](#4.Technical%20Reference|outline) for information regarding
subtypes of each filter type. It is displayed as a number next to the
filter type (when available).

Cutoff – Controls the cutoff frequency of the filter.

**Cutoff relative switch** (small button, filter 2 only) – when active,
the cutoff frequency of filter 2 will be set relative to filter 1. This
includes any modulations (including the hardwired FEG depth &
keytracking).

**Resonance** – Controls the amount of resonance of the filter.

**Resonance link** (small button, filter 2 only) – Makes the slider
follow filter 1's resonance slider setting.

Keytrack \> F1/F2 – Controls how much the pitch of a note affects the
cutoff frequency of the filter. A setting of 100% means the filter
frequency will follow the pitch harmonically.

### Envelope Generators

There are two envelope generators connected to the filterblock. One of
them, the Amplitude Envelope Generator (AEG), is hardwired to the gain
stage of the filterblock. The other one is hardwired to the two filters,
whose depth is set by the **\>F1** and **\>F2** sliders.

<span class="image">Illustration 10: ADSR envelope structure</span>  
The envelope generators are of the 4-stage ADSR type. This is the most
common form of EG used in synthesizers and it is named after its four
stages **Attack**, **Decay**, **Sustain** and **Release**. If you're new
to synthesizer programming the illustration should give you a good idea
how they work. The thing you need to remember is that after going
through the attack & decay stages the envelope will stick in the sustain
stage until the key is released. 

Above the envelope stage controls is a graphic representation of the
ADSR structure. The orange fields allows you to choose the curvature of
the different stages of the envelope.

### Other

Keytrack root – Sets the root key of the filter keytracking and the
keytrack modulation source. At the root key, the keytrack modulation
source will have the value zero. Above/below it it will have
positive/negative modulation depending on the distance to the root key
in octaves. This parameter does not affect the oscillator pitch.

**HP/low-cut** – Controls the scene low cut filter. (scene parameter)

FM configuration – Chooses how oscillator FM (frequency modulation) is
routed. 

**FM depth** – Sets the depth of the oscillator FM.

**Waveshaper type** – Chooses type of the non-linear wave-shaping
element. 

**Waveshaper drive** – Set the drive amount of the waveshaper. 

**Amp Gain** – Controls the gain element inside the filterblock.

**Amp Vel.** - Controls how the **Amp Gain** scales with velocity. This
is neutral at the maximum position. Other settings provide attenuation
at lower velocities, thus this setting will never increase the **Amp
Gain** parameter by velocity.

  -   -   - 
        
### Output stage

The output stage is located after the filterblock in the audio-path. As
it's outside the filterblock-structure changing the gain here doesn't
have any affect on the timbre of the voice (unlike the previous
gain-control which may affect how the feedback and wave-shaping acts).
It can still change the timbre of the effect section if non-linear
effects (like distortion) are used.

**Volume** – volume control

**Pan** – Pan/balance control

**Width** – the amount of stereo spread (only present for the wide &
stereo filterblock configurations)

**Send 1/2** – Send level to Send effect 1/2. (scene parameter)

  -   -   - 
        
## Modulation

![](./images/Pictures/200000070000684E000013D8DF601587.png)The
modulation section of the scene is different from the sound generation
and shaping sections as no audio data is passed through it. Instead it
allows you to control the parameters in the other sections from various
sources. (see [Modulation routing](#0.0.Modulation%20routing|outline))

### Modulation source selection bar

The modulation source selection bar lets you choose which modulation
source is selected for modulation routing. It also lets you choose which
LFO that are active for editing by using the mini-buttons. When you
click the main button of one of the LFOs both the modulation source
state and the LFO editor state will be changed.

<span class="image"></span>

By using the mini-button next to the main one you can select a different
LFO for editing than the modulation source. This lets you modulate the
parameters of one LFO with another.

The sub-chapter [Modulation source
buttons](#0.0.0.Modulation%20source%20buttons|outline) contain more
information about how the buttons work.

### LFO Overview

  - <span class="image">Illustration 11: LFO-unit structure</span>

The LFOs (Low Frequency Oscillator) in surge are very flexible and come
with a built in DAHDSR-envelope which lets the LFO work as a dedicated
envelope generator or shape the magnitude of the LFO over time. 

### Parameters

**Waveform** – Selects the shape of the
LFO.

|          |                                                                                                                                            |                  |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| Sine     | Sine wave                                                                                                                                  | Vertical bend    |
| Triangle | Triangle wave                                                                                                                              | Vertical bend    |
| Square   | Pulse wave                                                                                                                                 | Pulse width      |
| Ramp     | Ramp wave (sawtooth)                                                                                                                       | Vertical bend    |
| Noise    | Smooth noise                                                                                                                               | Correlation      |
| S\&H     | Step noise                                                                                                                                 | Correlation      |
| Envelope | The LFO waveform output is one, making the LFO-unit as a whole work as an envelope generator.                                              | Envelope shape   |
| Stepseq  | The 'stepseq' waveform is a special case that has an additional editor. It can be used to draw waveforms or be used like a step-sequencer. | Smooth/Spikyness |

![](./images/Pictures/200000070000684E00000CAEC3EC3919.png)

**Rate** – Controls the rate of the LFO oscillation. When waveform is
'stepseq' 1 step equals the whole cycle. Can be tempo-synced.

**Phase/Shuffle** - Controls the starting phase of the LFO waveform. 

**Magnitude** – Controls the magnitude of the LFO. This is the parameter
you should use if you want to control the depth of an LFO with a
controller. (like controlling vibrato depth with the modulation wheel) 

**Deform** – Deform the LFO shape in various ways. The effect varies
with the LFO waveform.

**Trigger mode** (Freerun/Keytrigger/Random) – Chooses how the LFO is
triggered when a new note is played. 

**Unipolar** - If active, the LFO-output will be in the \[0 .. 1\]
range. If not \[-1 .. 1\]

### LFO EG

<span class="image">Illustration 12: 6-stage DAHDSR envelope</span>  
The LFO Envelope Generators are of the 6-stage DAHDSR type that are
multiplied with the waveform generator. 

### Stepseq

The 'stepseq' waveform is a special case. Instead of the graphical
preview there is an editor that allow you to draw the output waveform
with up to 16-steps. The two green markers define loop-points that the
LFO will repeat once it gets into the loop. The left mouse button is
used for drawing while the right one can be used to clear the values to
0. Holding down shift while drawing will quantize the values to
1/12<sup>th</sup> steps, hence if the LFO is used to modulate pitch by
an octave, each step will represent a semitone.

![Illustration 13: Stepseq
editor](./images/Pictures/10000000000001730000004FE3027192.png)

The step-sequencer of Voice LFO 1 has an extra pane at the top of the
step-editor that will re-trigger the two regular envelopes of the voice
(AEG and FEG) at each step if it is checked (black) at that particular
step.

![Illustration 14: Envelope retrigger pane of Voice LFO
1](./images/Pictures/20000007000028A6000009A6CE4E921C.png)

The deform parameter give this waveform a lot of flexibility. A value of
0% will output the steps just as they look on the editor. Negative
values will give an increasingly spiky waveform while positive values
will make the output smoother.

<span class="image">Illustration 15: Effect of the deform parameter on
the stepseq waveform</span>

## FX section

The FX section lets you control the 8 effect units of the effect block
stored in every patch. 

<span class="image"></span>

The effect unit selector chooses which effect unit is active in the
effect editor. A right-click disables/enables that particular unit (this
setting is stored within patches unlike the global FX bypass setting).

The effect algorithm/preset-picker lets you assign an effect to the unit
selected in the effect unit selector. The effect is assigned by
selecting one of the preset settings for that effect from the menu. You
can also save your own effect presets which will be stored globally with
the synth.

# Technical Reference

  - 

<!-- end list -->

## SURGE Hierarchy
        
### Overview

<span class="image">Illustration 16: Block diagram of the synthesizer
engine.</span>  
Illustration shows an overview of the synthesizer engine of SURGE. 

### Voices

<span class="image">Illustration 17: Block diagram of a synthesizer
voice</span>Illustration shows most audio and control-paths of a single
voice. Not all processing elements of the voice are shown in the
diagram. 

### LFOs

Each voice has 6 modulation source called LFOs (Low Frequency
Oscillator) that you can use for modulation purposes. Each scene has an
additional 6 LFOs making each voice capable of receiving modulation from
a total of 12 LFOs.

Calling them LFOs is a great understatement as they have an integrated
envelope generator and can function as a 16-step waveform-generator as
well.

<span class="image"></span>

More information about the LFOs in the UI reference. ([LFO
Overview](#0.0.0.LFO%20Overview|outline))

### The effect block

SURGE has 8 effect units, arranged into an 'effect block'. 

<span class="image">Illustration 18: The effect block</span>

See the chapter [FX section](#0.0.FX%20section|outline) for more
information.

### Modulation routing in-depth

How the modulation routing works internally isn't something you normally
have to think about when using SURGE. Just activate the modulation mode
with the desired source and see which of the sliders that become blue.
Nonetheless, it is useful to know which limitations are present and why.

<span class="image">Illustration 19: Modulation routing behind the
scenes</span>  
The thing to remember is that the voice modulation sources can't
modulate the scene parameters, global/effect parameters or the scene
LFOs. Other that that it should be pretty straightforward.

## Oscillator algorithms

SURGE provide 8 different oscillator algorithms. Each capable of
generating sound in different ways with a different set of controls.
They're not just different waveforms.

### Classic

The classic oscillator algorithm consists of a main oscillator that can
generate a pulse wave, a sawtooth wave, a dual-saw wave or anything in
between.

A sub-oscillator provide a pulse-wave one octave below the main
oscillator. Changing the pulse-width of the sub-oscillator does affect
the main oscillator as well, as they will both change levels at the same
time except that the main oscillator does it twice as often. 

The classic algorithm is also capable of oscillator self-sync. Note that
the sub-oscillator will be used as the base-pitch for the sync. 

The algorithm provides unison at the oscillator-level with up to 16
instances. Unlike the wavetable-oscillator the cost of unison in terms
of CPU usage for the classic oscillator is quite modest. The unison
oscillator-instances are affected by the scene-level Osc-Drift parameter
independently. 

<table>
<tbody>
<tr class="odd">
<td>Shape</td>
<td>Waveform shape -100% = pulse, 0% = saw, 100% = dual saw</td>
<td>-100 .. 100 %</td>
</tr>
<tr class="even">
<td>Width</td>
<td>Pulse-width (pulse) or relative phase (dual saw)</td>
<td>0 .. 100 %</td>
</tr>
<tr class="odd">
<td>Sub-width</td>
<td>Pulse-width of sub-oscillator.</td>
<td>0 .. 100 %</td>
</tr>
<tr class="even">
<td>Sub-level</td>
<td>Sub-oscillator mix. 0% = only main, 100% = only sub</td>
<td>0 .. 100 %</td>
</tr>
<tr class="odd">
<td>Sync</td>
<td>Oscillator self-sync</td>
<td>0..60 semitones</td>
</tr>
<tr class="even">
<td>Osc-spread</td>
<td><p>Detuning of unison oscillators. 100% = 1 semitone in both directions</p>
<p>Can be switched between relative (default) and absolute using the context-menu of the slider.</p></td>
<td><p>0 .. 100%</p>
<p>0..16Hz</p></td>
</tr>
<tr class="odd">
<td>Osc-count</td>
<td>Number of oscillators used for unison. 1 = disabled</td>
<td>1 .. 16</td>
</tr>
</tbody>
</table>

### Sinus

The sinus oscillator algorithm generates a simple sine-wave. It has no
non-standard parameters.

### Wavetable

A wavetable in SURGE consists of up to 1024 single-cycle waveforms.
Using the Shape parameter it is possible to sweep across the waveforms
in the wavetable. 

<span class="image"></span>

The individual waves are equidistant in the table. When the shape
setting is between two individual waves they will be mixed to ensure
smooth travel. You can't edit the wavetable contents directly within
SURGE but it is possible to generate custom wavetables with external
software. 

By modulating the shape parameter it is possible to create motion,
dynamic response to playing or just sonic variation. What real-life
property, if any, the shape parameter is supposed to mirror depend on
each wavetable. Common cases are: 

  - Analyzed from sounds that evolve over time. The behavior can be
    recreated by letting shape increase over time by modulation. It's
    the most common among the analyzed wavetables.
  - Analyzed from static sounds over different pitches to capture the
    formant shift of a sound. The behavior can be recreated by
    modulating shape by the keytrack modsource.
  - A parameter of a mathematical equation. 

In the end it's just a set of data and SURGE doesn't care how it was
generated, all that matters is how it sounds. 

The wave-table oscillator has some interesting sonic characteristics. It
outputs the waveform in a stair-stepped fashion, making no attempts to
'smooth the steps' in the process, but does so in a manner that is
completely band-limited. This makes it similar in sound to 1980s era
wave-table synths and samplers which didn't use resampling but had
dedicated D/A-converters for each voice instead and changed the pitch by
varying the sample rate of the individual D/As. 

The fact that the steps aren't smoothed causes an artifact known as
harmonic aliasing. This is not to be confused with inharmonic aliasing
which sounds somewhat similar to an AM-radio being tuned and is
generally nasty. Instead, this artifact will cause the harmonics of the
waveform to repeat themselves and fill up the entire audible spectra
even at low pitches, just like a square-wave would, preventing the
waveform from sounding dull. As this artifact is completely harmonic it
is also musically pleasing. Nonetheless, it may sound a bit out of place
on very smooth waveforms but the effect can be filtered out by a
lowpass-filter in the filterblock if desired. Some of the wave-tables,
such as the regular triangle wave, are large enough for this artifact to
never appear in the normally used range for this specific reason.

The important thing is that just like most other oscillators in SURGE,
it doesn't output any inharmonic aliasing whatsoever or any audible
levels of interpolation-noise, two artifacts which has played a big part
in giving digital synthesizers a bad name. 

For developers & advanced users:  
There is a reference for the .wt file-format used by the wavetables. It
is located in:  
surgedata/wavetables/wt fileformat.txt

<table>
<tbody>
<tr class="odd">
<td>Shape</td>
<td>Waveform shape. 0% = first, 100% = last</td>
<td>0 .. 100 %</td>
</tr>
<tr class="even">
<td>Skew V</td>
<td>Vertical skew of the waveform</td>
<td>-100 .. 100 %</td>
</tr>
<tr class="odd">
<td>Saturate</td>
<td>Soft saturation of the waveform</td>
<td>0 .. 100 %</td>
</tr>
<tr class="even">
<td>Formant</td>
<td>Compresses the waveform in time but keeps the cycle-time intact</td>
<td>0..60 semitones</td>
</tr>
<tr class="odd">
<td>Skew H</td>
<td>Horizontal skew of the waveform</td>
<td>-100 .. 100 %</td>
</tr>
<tr class="even">
<td>Osc-spread</td>
<td><p>Detuning of unison oscillators. 100% = 1 semitone in both directions</p>
<p>Can be switched between relative (default) and absolute using the context-menu of the slider.</p></td>
<td><p>0 .. 100%</p>
<p>0..16Hz</p></td>
</tr>
<tr class="odd">
<td>Osc-count</td>
<td>Number of oscillators used for unison. 1 = disabled</td>
<td>1 .. 7</td>
</tr>
</tbody>
</table>

### Window

The window oscillator (added in v1.5) is another shot at wavetable
synthesis that is quite different from the previous wavetable algorithm.

The wave, which can be any waveform included with Surge, is multiplied
by a second waveform, the window, which can be one of 9 waveform types
that are specifically made for the window oscillator. The formant
parameter controls the pitch of the wave independently of the window,
but as the wave is always restarted with the window the pitch will
remain the same. Instead, the timbre of the sound will change
dramatically, much depending on which window is selected.

Unlike the wavetable algorithm, the window oscillator uses a more
traditional resampling approach which doesn't result in harmonic
aliasing. Obviously, being part of a Vember Audio product, the sound
quality is still top-notch.

<table>
<tbody>
<tr class="odd">
<td>Shape</td>
<td>Waveform shape. 0% = first, 100% = last (doesn't interpolate)</td>
<td>0 .. 100 %</td>
</tr>
<tr class="even">
<td>Formant</td>
<td>Pitch of the wave independently of the window</td>
<td>-60 .. 60 semitones</td>
</tr>
<tr class="odd">
<td>Window</td>
<td>Chooses the window waveform.</td>
<td>-</td>
</tr>
<tr class="even">
<td>Osc-spread</td>
<td><p>Detuning of unison oscillators. 100% = 1 semitone in both directions</p>
<p>Can be switched between relative (default) and absolute using the context-menu of the slider.</p></td>
<td><p>0 .. 100%</p>
<p>0..16Hz</p></td>
</tr>
<tr class="odd">
<td>Osc-count</td>
<td>Number of oscillators used for unison. 1 = disabled</td>
<td>1 .. 7</td>
</tr>
</tbody>
</table>

### FM2

FM2 provides a miniature FM-synthesizer voice in an oscillator that is
specifically tailored towards making nice and musical FM sounds. A
single sine carrier is modulated by two sine modulators, whose ratios to
the carrier are always integer thus the resulting waveform is always
cyclic. However, “Mx Shift” lets you offset the modulators slightly in
an absolute fashion, creating an evolving and pleasing detune
effect.

|                |                                                                                               |               |
| -------------- | --------------------------------------------------------------------------------------------- | ------------- |
| M1 Amount      | Modulation amount of the first modulator                                                      | 0 .. 100 %    |
| M1 Ratio       | Ratio of the first modulator to the carrier                                                   | 1 .. 32       |
| M2 Amount      | Modulation amount of the second modulator                                                     | 0 .. 100 %    |
| M2 Ratio       | Ratio of the second modulator to the carrier                                                  | 1 .. 32       |
| Mx Shift       | Absolute detuning of the modulators                                                           | \-10 .. 10 Hz |
| Mx Start Phase | Changes the initial phase of the modulators to give you different variations of the waveform. | 0 .. 100 %    |
| Feedback       | Modulation amount of the carrier to itself                                                    | 0 .. 100 %    |

### FM3

As a contrast to FM2, FM3 is the algorithm of choice for scraping paint
of walls. The modulators have a larger range, the ratios can be
non-integer and there's a third modulator which has its rate set as an
absolute
frequency.

|           |                                              |               |
| --------- | -------------------------------------------- | ------------- |
| M1 Amount | Modulation amount of the first modulator     | 0 .. 100 %    |
| M1 Ratio  | Ratio of the first modulator to the carrier  | 0.0 .. 32.0   |
| M2 Amount | Modulation amount of the second modulator    | 0 .. 100 %    |
| M2 Ratio  | Ratio of the second modulator to the carrier | 0.0 .. 32.0   |
| M3 Amount | Modulation amount of the third modulator     | 0 .. 100 %    |
| M3 Ratio  | Frequency of the third modulator             | 14Hz .. 25kHz |
| Feedback  | Modulation amount of the carrier to itself   | 0 .. 100 %    |

### S\&H-Noise

  - S\&H is an abbreviation for 'Sample and Hold'.
  - The S\&H-Noise oscillator algorithm works like a pulse oscillator,
    but instead of always switching between +1 and -1 the levels used
    are determined stochastically. 
  - The correlation parameter determine how new levels are calculated. A
    setting of 0% will have no memory and each new level will
    effectively be a random number (white noise). A lower setting will
    favor new values that is closer to the previous level and will
    provide a noise with a darker spectra. Higher values will favor
    values as far away from the previous one as possible, with 100%
    resulting in a harmonic pulse-wave.

<table>
<tbody>
<tr class="odd">
<td>Correlation</td>
<td>Noise correlation. 0% = white noise, 100% = pulse</td>
<td>-100 .. 100 %</td>
</tr>
<tr class="even">
<td>Width</td>
<td>Pulse-width (pulse)</td>
<td>0 .. 100 %</td>
</tr>
<tr class="odd">
<td>Sync</td>
<td>Oscillator self-sync</td>
<td>0..60 semitones</td>
</tr>
<tr class="even">
<td>Osc-spread</td>
<td><p>Detuning of unison oscillators. 100% = 1 semitone in both directions</p>
<p>Can be switched between relative (default) and absolute using the context-menu of the slider.</p></td>
<td><p>0 .. 100%</p>
<p>0..16Hz</p></td>
</tr>
<tr class="odd">
<td>Osc-count</td>
<td>Number of oscillators used for unison. 1 = disabled</td>
<td>1 .. 16</td>
</tr>
</tbody>
</table>

### Audio Input

Audio Input lets you route external audio into the voice-architecture of
SURGE.


|       |                                                                    |                |
| ----- | ------------------------------------------------------------------ | -------------- |
| Input | Chooses which input is used. -100% = left, 0% = both, 100% = right | \-100 .. 100 % |
| Gain  | Input gain in dB.                                                  | \-48 .. +48 dB |

Windows only:

Some problematic VST host applications will refuse to feed instrument
plug-ins with audio input unless they are configured as a regular
effect. Making a copy of the file “surge.dll” named “surge\_fx.dll” in
the same directory will cause that copy of SURGE to identify itself as
an effect instead of an instrument which will make it work in such
hosts.

## Filter algorithms

  - There are 9 filter algorithms available (+ off) for each of the 2
    filter units in the filterblock. Each of the algorithms have
    different subtypes, which alter their sound.

<!-- end list -->

  - Most of the filter-(sub)types have some non-linear elements in them
    to allow them to self-oscillate in a stable and predictable manner.
    This means they will sound different depending on how hard they're
    driven, which can be conveniently controlled with the Pre-Filter
    Gain setting. For example, if the resonance peaks of a filter is too
    loud, increase the Pre-Filter Gain to make the rest of the signal
    more dominant (and if needed decrease the gain at the output stage
    of the voice to compensate).

<!-- end list -->

### Subtypes for LP12/LP24/HP12/HP24/BP

Depending on the setting of the subtype switch, the characteristics and
behavior of these filters will be altered, although their main purpose
remains the
same.

|   |                                                                                                                                                                                              |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | Clean with a strong resonance, capable of self-oscillation. Handles transient behavior extremely well. (default)                                                                             |
| 2 | Chesty, somewhat distorted sound with a more held-back resonance. Capable of self-oscillation. (default in v1.2.2)                                                                           |
| 3 | The smoothest subtype, capable of lower resonance than the others, which is suitable when you do not want the sound of the filter to be noticed but only to roll-off a part of the spectrum. |

### LP12

  - 2-Pole Low-Pass filter.

### LP24

<!-- end list -->

  - 4-Pole Low-Pass filter.

<!-- end list -->

### HP12

  - 2-Pole High-Pass filter.

### HP24

<!-- end list -->

  - 4-Pole High-Pass filter.

### BP

  - 2-Pole Band-Pass filter.

  - For this particular algorithm an extra subtype (\#4) is provided
    which is a 4-pole equivalent of subtype 1.

<!-- end list -->

### LP24L

<!-- end list -->

  - 4-Pole Low-Pass ladder filter. You can select at which stage (1-4)
    the signal is output using the sub-type control. Has stable
    self-oscillation.

<!-- end list -->

### Notch

<!-- end list -->

  - 2-Pole Band-Reject filter.

|   |                                                                  |
| - | ---------------------------------------------------------------- |
| 1 | Default subtype                                                  |
| 2 | Included for compatibility with v1.2.0 (smaller resonance range) |

### Comb

<!-- end list -->

  - Delay-Based Comb filter. 

|   |                                    |
| - | ---------------------------------- |
| 1 | Positive feedback, 50% dry/wet mix |
| 2 | Positive feedback, 100% wet mix    |
| 3 | Negative feedback, 50% dry/wet mix |
| 4 | Negative feedback, 100% wet mix    |

  - When the sub-type is set to 2 (or 4) and resonance is 0% the
    comb-filter will work purely as a delay-unit (with sub-sample
    precision). This can be used together with the other filter-unit
    along with filterblock feedback to provide interesting options. The
    “wind/clarinet” and “pluck (fast)/simple waveguide” presets
    showcase how this ability can be used for simple physical modeling.
    They only use the oscillator section to ignite the sound, the rest
    is in the filterblock. 

<!-- end list -->

### Sample & Hold

  - Sample & Hold module. Will sample the audio at the rate set by the
    cutoff-frequency. Resonance will emphasize oscillations around the
    cutoff frequency, not unlike the resonance peak of a lowpass-filter.

## Effect algorithms

SURGE has 8 effect units which each can run one of the 10 provided
algorithms. 

### Delay

The delay algorithm in SURGE is very versatile and can work well both as
an echo/delay- and chorus-effect.

<span class="image">Illustration 20: Delay algorithm block
diagram</span>

There is an LFO connected to the delay-lines (not shown in diagram)
which can provide stereo-widening/detuning of the delay-line.

<table>
<tbody>
<tr class="odd">
<td>Pan</td>
<td>Routes the two channels to the delay-units by panning. The gain of the input-channels remain unaffected, it's only their stereo location that changes. (a sound only heard in the left channel will still be heard when pan is set to 100% here, but only in the right channel.)</td>
<td>-100 .. 100 %</td>
</tr>
<tr class="even">
<td>Delay time L/R</td>
<td>Delay time for the two channels. Can be tempo-synced.</td>
<td>0.004 .. 32 s<br />
1/512 .. 16 bars</td>
</tr>
<tr class="odd">
<td>Feedback</td>
<td>Amount fed from the channel to its own input</td>
<td>-inf .. 0 dB</td>
</tr>
<tr class="even">
<td>Crossfeed</td>
<td>Amount fed from the channel to the input of the opposing channel</td>
<td>-inf .. 0 dB</td>
</tr>
<tr class="odd">
<td>Low/High- cut</td>
<td>EQ controls of the delayed signal</td>
<td>14Hz .. 25kHz</td>
</tr>
<tr class="even">
<td>Modulation rate</td>
<td>Rate of the modulation LFO (triangle). This parameter is inexact due to implementation.</td>
<td>0.008..1024 Hz</td>
</tr>
<tr class="odd">
<td>Modulation depth</td>
<td>Indirect control of the modulation LFO depth. The effect adjust the depth to match the detuning in cents set here.</td>
<td>0 .. 200 cents</td>
</tr>
<tr class="even">
<td>Mix</td>
<td><p>Blend control between the dry and the wet signal. </p>
<p>0% = 100% dry, 0% wet</p>
<p>100% = 0% dry, 100% wet</p></td>
<td>0 .. 100 %</td>
</tr>
<tr class="odd">
<td>Width</td>
<td>Gain scaling of the Side-component of the wet signal</td>
<td>-24 .. 24 dB</td>
</tr>
</tbody>
</table>

### Reverb

The reverberation algorithm simulates room acoustics and is suitable
both at adding ambience to sounds and creating special effects.

<table>
<tbody>
<tr class="odd">
<td>Pre-delay</td>
<td>The amount of delay applied to the signal before it is fed to the reverberation unit. Can be tempo-synced.</td>
<td>0.004 .. 32 s<br />
1/512 .. 16 bars</td>
</tr>
<tr class="even">
<td>Room-shape</td>
<td><p>Selects between 4 room shapes that has different sounds.</p>
<p>(changing this parameter will interrupt the signal)</p></td>
<td>0 .. 3</td>
</tr>
<tr class="odd">
<td>Size</td>
<td><p>Changes the apparent size of the simulated room.</p>
<p>(changing this parameter will interrupt the signal)</p></td>
<td>0 .. 100 %</td>
</tr>
<tr class="even">
<td>Decay time</td>
<td>The time it takes for the reverberation to ring-out. (-60 dB) </td>
<td>0.063 .. 64 s</td>
</tr>
<tr class="odd">
<td>HF-damp</td>
<td>Amount of HF damping applied to the signal inside the reverberator.</td>
<td>0 .. 100 %</td>
</tr>
<tr class="even">
<td><p>Low cut,</p>
<p>Band1 freq/gain,</p>
<p>High cut</p></td>
<td>Post-reverb equalizer controls. </td>
<td></td>
</tr>
<tr class="odd">
<td>Mix</td>
<td>Blend control between the dry and the wet signal. </td>
<td>0 .. 100 %</td>
</tr>
<tr class="even">
<td>Width</td>
<td>Gain scaling of the Side-component of the wet signal</td>
<td>-24 .. 24 dB</td>
</tr>
</tbody>
</table>

### Reverb 2

TODO

### Chorus

4-stage chorus algorithm.

<table>
<tbody>
<tr class="odd">
<td>Time</td>
<td>Delay time used as chorus mid-point.</td>
<td>0 .. 1/8 s<br />
</td>
</tr>
<tr class="even">
<td>Mod rate</td>
<td>Rate of modulation LFO. Can be tempo-synced.</td>
<td><p>0.008..1024 Hz</p>
<p>64..1/2048 bar</p></td>
</tr>
<tr class="odd">
<td>Mod depth</td>
<td>Depth of modulation LFO</td>
<td>0 .. 100 %</td>
</tr>
<tr class="even">
<td>Feedback</td>
<td>Amount fed from the output back into the input</td>
<td>-inf .. 0 dB</td>
</tr>
<tr class="odd">
<td>Low/High-cut</td>
<td>EQ controls of the chorused signal</td>
<td>14Hz .. 25kHz</td>
</tr>
<tr class="even">
<td>Mix</td>
<td>Blend control between the dry and the wet signal. </td>
<td>0 .. 100 %</td>
</tr>
<tr class="odd">
<td>Width</td>
<td>Gain scaling of the Side-component of the wet signal</td>
<td>-24 .. 24 dB</td>
</tr>
</tbody>
</table>

### Phaser

4-stage phaser.

<table>
<tbody>
<tr class="odd">
<td>Base freq</td>
<td>Base frequency for all the stages</td>
<td>-100 .. 100 %</td>
</tr>
<tr class="even">
<td>Feedback</td>
<td>Feedback of the phaser</td>
<td>-100 .. 100 %</td>
</tr>
<tr class="odd">
<td>Q</td>
<td>Q setting for the stages</td>
<td>-100 .. 100 %</td>
</tr>
<tr class="even">
<td>Rate</td>
<td>Rate of modulation LFO. Can be tempo-synced.</td>
<td><p>0.008..1024 Hz</p>
<p>64..1/2048 bar</p></td>
</tr>
<tr class="odd">
<td>Depth</td>
<td>Depth of modulation LFO</td>
<td>0 .. 100 %</td>
</tr>
<tr class="even">
<td>Stereo</td>
<td><p>LFO Phase relation between stereo channels</p>
<p>0% = 0 degrees, 100% = 180 degrees</p></td>
<td>0 .. 100 %</td>
</tr>
<tr class="odd">
<td>Mix</td>
<td>Blend control between the dry and the wet signal. </td>
<td>0 .. 100 %</td>
</tr>
</tbody>
</table>

### Rotary Speaker

Rotary speaker simulator algorithm.

<table>
<tbody>
<tr class="odd">
<td>Horn rate</td>
<td>Rate of HF horn rotation. The LF horn is a lower multiple of this rate. Can be tempo-synced.</td>
<td><p>0.008..1024 Hz</p>
<p>64..1/2048 bar</p></td>
</tr>
<tr class="even">
<td>Doppler depth</td>
<td>The amount of Doppler shift used in the simulation. (vibrato)</td>
<td>0 .. 100 %</td>
</tr>
<tr class="odd">
<td>Ampmod depth</td>
<td>The amount of amplitude modulation used in the simulation. (tremolo)</td>
<td>0 .. 100 %</td>
</tr>
</tbody>
</table>

### Distortion

Distortion algorithm. Provides plenty of EQ options as well as a
feedback loop to alter the tonality of the clipping stage.

<span class="image">Illustration 21: Distortion algorithm block
diagram</span>

<table>
<tbody>
<tr class="odd">
<td>Pre-EQ gain/freq/BW</td>
<td>Parametric EQ band prior to the clipping stage</td>
<td></td>
</tr>
<tr class="even">
<td><p>Pre-EQ </p>
<p>High cut</p></td>
<td>High cut element prior to the clipping stage</td>
<td>14Hz .. 25kHz</td>
</tr>
<tr class="odd">
<td>Drive</td>
<td>Drive of the clipping stage</td>
<td>-24 .. +24 dB</td>
</tr>
<tr class="even">
<td>Feedback</td>
<td>Feedback loop around the clipping stage</td>
<td>-100 .. 100 %</td>
</tr>
<tr class="odd">
<td>Post-EQ gain/freq/BW</td>
<td>Parametric EQ band after the clipping stage</td>
<td></td>
</tr>
<tr class="even">
<td><p>Post-EQ </p>
<p>High cut</p></td>
<td>High cut element prior to the clipping stage</td>
<td>14Hz .. 25kHz</td>
</tr>
<tr class="odd">
<td>Output gain</td>
<td>Output gain</td>
<td>-24 .. +24 dB</td>
</tr>
</tbody>
</table>

### EQ

The EQ unit provide 3-bands of fully parametric equalizing. This
high-quality algorithm has a much better response at high frequencies
than digital equalizers usually have.

<table>
<tbody>
<tr class="odd">
<td><p>Band 1/2/3</p>
<p>Gain</p></td>
<td>Band gain</td>
<td>-48 .. +48 dB<br />
</td>
</tr>
<tr class="even">
<td><p>Band 1/2/3</p>
<p>Freq</p></td>
<td>Band frequency</td>
<td>14Hz .. 25kHz</td>
</tr>
<tr class="odd">
<td><p>Band 1/2/3</p>
<p>Bandwidth</p></td>
<td>Band bandwidth</td>
<td>0 .. 5 octaves</td>
</tr>
<tr class="even">
<td>Output gain</td>
<td>Gain control</td>
<td>-48 .. +48 dB</td>
</tr>
</tbody>
</table>

### Conditioner

The conditioner is a simple EQ, stereo image control and a limiter built
into one unit. The limiter applies make-up gain
automatically.

<span class="image"></span>

|           |                                                                |                |
| --------- | -------------------------------------------------------------- | -------------- |
| Bass      | LF boost/cut                                                   | \-12 .. +12 dB |
| Treble    | HF boost/cut                                                   | \-12 .. +12 dB |
| Width     | Stereo width. 0% = mono, 100% = stereo, -100% = reverse stereo | \-100 .. 100 % |
| Balance   | Stereo balance                                                 | \-100 .. 100 % |
| Threshold | Limiter threshold level.                                       | \-48 .. 0 dB   |
| Attack    | Limiter attack rate                                            | \-100 .. 100 % |
| Release   | Limiter release rate                                           | \-100 .. 100 % |
| Output    | Limiter output attenuation                                     | \-48 .. 0 dB   |

### Frequency Shifter

Frequency shifter effect. Provides a delay unit and a feedback loop to
give consecutively shifted repeating delays.

<table>
<tbody>
<tr class="odd">
<td>Shift Left</td>
<td><p>Amount of frequency shift (in hertz) for the left channel.</p>
<p>The range can be extended from the sliders context menu.</p></td>
<td><p>-10 .. 10 Hz /</p>
<p>-1 .. 1 kHz</p></td>
</tr>
<tr class="even">
<td>Shift Right</td>
<td>Amount of frequency shift (relative to the left channel) for the right channel.</td>
<td>-100 .. 100 %</td>
</tr>
<tr class="odd">
<td>Delay</td>
<td>Delay time for the frequency-shifted signal. Can be tempo-synced.</td>
<td>0.004 .. 32 s<br />
1/512 .. 16 bars</td>
</tr>
<tr class="even">
<td>Feedback</td>
<td>Feedback around the frequency shifter and delay-unit.</td>
<td></td>
</tr>
<tr class="odd">
<td>Mix</td>
<td>Blend control between the dry and the wet signal. </td>
<td>0 .. 100 %</td>
</tr>
</tbody>
</table>

### Vocoder

The audio-input of Surge is used to modulate the carrier signal at the
input stage of this 20-band vocoder algorithm. The carrier channels are
in stereo while the modulator use the mono sum of the input channels.

<table>
<tbody>
<tr class="odd">
<td>Gain</td>
<td>Gain control of the modulator</td>
<td>-48 .. +48 dB<br />
</td>
</tr>
<tr class="even">
<td>Gate</td>
<td>Bands below this level will be silenced.</td>
<td>-96 .. 0 dB<br />
</td>
</tr>
<tr class="odd">
<td>Rate</td>
<td>Rate of the envelope followers.</td>
<td>0 .. +100 %</td>
</tr>
<tr class="even">
<td>Q</td>
<td>Controls the steepness of the filters.</td>
<td>-100 .. +100 %</td>
</tr>
</tbody>
</table>

## Questions?

Feel free to visit the on-line forum at the Vember Audio website if
there is anything you want to ask about.

[*http://www.vemberaudio.se*](http://www.vemberaudio.se/)
