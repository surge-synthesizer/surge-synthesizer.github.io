---
layout: page
title: Surge XT in VCV Rack
permalink: /rack_xt_manual/
---


Surge XT for Rack is a collection of modules which brings the majority of the DSP code
from Surge XT into the VCV Rack environment in a modern and carefully designed fashion.

Please remember that writing a manual is hard work! We've put this manual together for our
first release, but welcome folks to collaborate on changes and improvements! We are happy
to merge pull requests and changes!

{:.no_toc}
<br/>
## Table of Contents
{:.no_toc}

* unordered list
{:toc}


# Omri Cohen's Overview Video

A great starting point if you are impatient is to just
watch our beta-day launch video from Omri Cohen. Thanks for making such a great
video, Omri, and awesome flute playing!

<p align="center">
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/8MavXLbI50A" 
        title="Sound Design Heaven - Omri Cohen demonstrates Surge XT in Rack" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
</p>

# Collection Overview

<img src="./images/overview.png" alt = "An Image of some Rack Modules">

Surge XT contains a collection of modules which project the core capabilities of the
Surge XT synth into VCV Rack. It contains multiple VCOs, multiple FX, a Filter module
with a large number of complicated filter modes, a Waveshaper with multiple shaper models,
an LFO/Envelope Generator module, and a collection of utility modules.

This manual covers how to use these modules in VCV Rack, but it is intended to be read in
conjunction with the [Surge XT Manual](/manual-xt). Concepts like the meaning of a 
particular setting in a VCO or a particular knob on an effect are covered there in detail,
and we won't repeat that information here.

# Core Concepts

The module set strives for a high degree of consistency in the panels, and there are several
core concepts which cover nearly every module which you should understand before you turn
to the particular modules.

## Knobs, Switches, and Display Area Controls

<p align="center">
<img src="./images/basic_module.png" height = 400 alt = "A Sine VCO Module">
<img src="./images/flanger_basic.png" height = 400 alt = "A Flanger Module">
</p>

All Surge XT modules share a few basic features, shown in the above annotated image of the
Sine VCO and the . All components in Surge XT support the full set of Rack 2 features, including
value tooltips and typeins, using the standard Rack gestures. We can see almost all the
core UI features on the screenshot above of the Sine and Flanger modules.

* Knobs with rings to show their value, which can either be uni- or bi-polar. Knobs
  are labeled, and some panels have dynamic labels below knobs.
* Toggleable knbos have power buttons (here the green lit button above HI CUT in the Sine). For these
  you need to toggle the knob "On" for the feature to be in effect.
* Controls in the display area (here unison, octave, and wave shape in the Sine) will open a menu , In FX, controls in the preset area (like
  on click and support a knob-style drag gesture. Labels in FX display areas (here
  "combs only" and "sine" in the Flanger image) will open a multi-choice menu. 
* Presets and Model Choices (here the item at the top of the flanger) present a left-right jog buttons
  and open a menu when selected.

The modules with display area charts will udpate those charts in realtime based on values
and modulations. We endeavour to make sure the charts show what is actually happening
in an appropriate fashion!

## Modulation

Surge XT contains an advanced modulation system where every module contains a many-to-many
modulation matrix from 4 CV inputs to each of the knobs. 

To modulate a value:
* Attach a CV input into one of the four mod inputs.
* "Arm" that modulator by pressing the button above. 
* Once armed each modulatable knob or slider will switch from 
a value display to a modulation depth display. 
* Drag the knob to attenuate the inbound modulation,
* While modulating, you can use shift-alt drag to edit the underlying knob

The modulation bounds and tooltip on the knob while editing modulation
show a bipolar level which is the impact of a + or -10V signal. If you are using
a +/-5V modulator (as opposed to a 0-10v modulator) you may need to set your depth higher.

Finally, this modulation gesture is far more natural to just do or see than it is to write 
about! We strongly suggest you watch Omri's video or just try the modules if this doesn't make
sense.

## Polyphony

All the Surge XT modules are Polyphonic. Polyphony is driven by natural inputs
(V/Oct, Trigger, and so on) in each module. Each of the FX (except the Digital Delay, as
discussed below) can work either monophonically, summing inputs, or optionally 
polyphonically, with an instance of the FX per channel.

Modulation inputs do *not* set polyphony in modules. Instead, a module which has
polyphony P will interact with modulation with polyphony M as follows:

1. P=1, M=1: This is the simple case. It's just all monophonic!
2. P=n, M=n; if the modulator and module polyphony match, each modulator addresses each voice
3. P=n, M=1; if the module is polyphonic and the modulator monophonic, the
   modulator is broadcast to each polyphonic voice
3. P=n; M=m, m!=n; In this case the first m modulator channels are used for
   the first m voices, and any voice n > m gets modulation value 0.

## TempoSync and Clocks

Surge XT supports temposynced values across the time-based effects, and we have 
extended those features to the Surge XT modules. If a module supports tempo-sync
values, it has a CLOCK input.

The CLOCK input can take two forms, which you can toggle between in the module
menu.

* CLOCK - the module expects a quarter-note trigger. Establishing tempo will require
multiple triggers and tempo changes will lag.
* BPM CV - the module expects a CV signal for the tempo frequency, as output by
popular modules such as CLOCKED. This allows instant setting and changing of tempo.

The panel label for the CLOCK input will change based on the mode you select.

## Skins, Colors, and Animations

We love the way the Surge modules look, but we also know people like picking colors,
light and dark modes, and the like. So we added all of that!

On any module you can right click and choose between three skins (light, medium, and dark)
and can choose the colors for the panel displays, the knob rings and the modulation gestures.
You can also deactivate animation and drawing features on the display.

Bu default, changing a skin or a color changes your global state and all Surge XT modules
will follow. If you want, you can also decouple a module from the global state and it 
will have independent retained colors and skin settings.

<p align="center">
<img src="../rack_xt_manual/images/skins.PNG">
</p>

Here are some examples of the base skins:

<p align="center">
<img src="../rack_xt_manual/images/darktheme.PNG" width="200" alt = "Dark Theme">
<img src="../rack_xt_manual/images/mediumtheme.PNG" width="200" alt = "Medium Theme">
<img src="../rack_xt_manual/images/lighttheme.PNG" width="200" alt = "Light Teheme">
</p>

## Extra Controls in the Menus

The Surge VST is a menu-driven experience for many controls, and some of the lesser
used options in the VST are not on the front panel but are in the module menus per module.
We strongly suggest you look at the module menu since it contains a bunch of great
features! 

## Block Size and Latency

By virtue of being a VST, Surge is designed for a block-processing environment as
opposed to a per-sample processing environment. This means there are a collection
of places where latency can appear or modulators are snapped less frequently than
per sample.

Luckily, in the Surge XT modules, we have undertaken the work to make the Surge code
base use a compile time variable block size, and for the Rack implementation, set the
module block size to 8 samples, greatly improved from the 32 sample condition
in the prior rack implementation.

Each module type has a slightly different strategy, which is detailed below. With 
a block size of 8 this probably doesn't matter to you much, but if you are doing careful
phase work, or if you try to do things like filter fm, it won't work or won't work the
way you expect.

# The VCO Modules

## Oscillator List

The Surge XT collection contains the following VCOs from the Surge oscillator section:

* **Classic** - a classic analog-style saw and square oscillator
* **Modern** - an analog-style multi-shape oscillator
* **Sine** - a sine wave oscillator with a collection of shaping functions, unison, and filtering options
* **FM2** - a 3 operator (2 modulators and a carrier) FM operator with integral C:M ratios
* **FM3** - a 4 operator (3 modulators and a carrier) FM operator with arbitrary and absolut-able C:M ratios
* **Wavetable** - a modern wavetable oscillator with multi-wavetable loading and warping
* **Window** - another wavetable oscillator using fixed windowing functions
* **S&H Noise** - a tuned noise generator
* **Alias** - a purposefully gritty and aliasing oscilator
* **String** - an oscillator with a pair of physical string (Karplus-Strong-style) models, multiple exciters, and more
* **Twist** - The SurgeXT adaptation of Mutable Plaits

<p align="center">
<img src="../rack_xt_manual/images/modern.PNG" width = "200" alt = "Modern VCO">
<img src="../rack_xt_manual/images/wavetable.PNG" width = "200" alt = "Wavetable VCO">
<img src="../rack_xt_manual/images/twist.PNG" width = "200" alt = "Twist VCO">
</p>

## Common Features

The oscillators all have a collection of common features, available on the right mouse menu. Some 
oscillators have VCO-specific menu items also. Among these options are

* Character: A set of basic filters to make the filters warmer or brighter
* Oscillator Drift: A low frequency pitch drift applied across the life of the oscillator for an "analog" style
* Output Attenuation: A fixed attenuator to "turn down" an oscillator; especially useful at high unison and low detune
* Halfband Filter: Alternate half-band filters to downsample the internally oversampled oscillators. At high
  polyphony, you may save some CPU at some quality expense by chosing an lower-M version
* DC Blocker: All the VCOs have a very low frequency high pass filter as a DC Blocker. You can deactivate this if you want.

## Tips for limiting CPU

The Surge VCOs use a collection of techniques to guarantee low CPU while maintaining high audio quality. But there
are some things which can drive the CPU high in VCOs. 

In general, the Modern, Twist, and WaveTable CPUs are among our most intensive, and Classic is among the lightest.
VCOs increase CPU count roughly linearly in unison count; a unison count of 3 or 5 is almost always as high as you want 
to go. Larger (higher number of points) wavetables can be more expensive than smaller ones. And finally, of course,
higher polyphony means higher CPU usage.

## Wavetables

The two surge Wavetable based oscillators read wavetables in a variety of formats,
including supporting the popular wavetable formats used by Serum (2048-long tagged .wav) and 
Bitwig (.wt). It also interprets WAV loop markers as wavetables. You can select and interact
with Wavetables using the menu on the preset selector in the VCO.

<p align="center">
<img src="./images/wavetable_menu.png" height = 400 alt="The Wavetable menu">
</p>

Wavetables in other formats require pre-processing or will be loaded as one shots.
For more on this consult the Surge VST manual and Wiki. 

Since wavedit (with its 256-block unragged wav file) is a popular format, we have added
a special menu in the Surge XT Rack modules, where you can load this file directly from
the wavetable menu using the "Load WaveEdit Wavetable" menu item.

If you have a wav file which you know is a 512 wide wavetable, you can also load it explicitly
with "load untagged wav as" submenu

Finally, on startup surge will scan your surge user directory for additional wavetables,
so you can copy or link to those. To reveal the directory where Surge looks, use the
"Reveal User Wavetable Directory" entry. This is the same directory the VST uses, so if
you have already set up a user wavetable collection, they will appear in your menu.

Surge saves the selected wavetable in the VCV Json Patch, so if you make a patch then
remove a table from your system, your patch will still play in the future.

## Block Size Considerations

All the Surge VCOs generate samples in blocks of 8, snapping the CV output at the start of the
block and smoothing to that value as an end of block target. In almost all music applications
this is unnoticable, but there are two consequences

1. Trigger events are processed every 8 samples, resulting in an amortized 4 sample delay
   on triggers; and
2. Audio-rate modulation - especially FM by plumbing a signal to the V/Oct input - is not
   possible.

# The VCF and Waveshaper Modules

## VCF

The Surge XT VCF presents all of the Surge XT filter types and subtypes in a single module.
Using the preset menu at the top of the display you can choose the core model and using the
preset meny at the bottom of the display can choose the sub-type. Each core model can vary substantially
by subtype and we encourage you to not ignore it!

The module runs in polyphonic stereo with a mix, pre- and post- gain and cutoff and resonance control
which all do the expected thing.

The surge filters are sample accurate adding no latency, but calculate coefficients every 8 samples and then
smooth over the block. This means the filters are suitable for feedback and audio situations, but cannot
do Filter FM.

The VCF display shows the result of transforming a chirp sweep through the filter as configured. It is the 
actual filter response calculated in near-realtime.

<p align="center">
<img src="./images/filter.png" width = "200" alt = "VCF Module">
</p>

## Waveshapers

The Surge XT Waveshapers presents all the waveshaper models from Surge in a single module.
Using the preset menu at the top of the display, you can choose the waveshaper model to apply.

The module is polyphonic and sample accurate, with no latency, calculating modulation at every step.

The Waveshaper display shows the result of applying the waveshaper as configured to a sample +/- 5V sine wave.

A waveshaper is a type of distortion where you alter the shape of the input waveform.

Here are some available options within the waveshaper module:

* Off
* Saturator
* Effect
* Harmonic
* Rectifiers
* Wavefolder
* Fuzz
* Trigonometric

Within each submenu listed there is a variety of different algorithms.

<p align="center">
<img src="./images/waveshaper.PNG" width = "200" alt="Waveshaper Module">
</p>

# The Surge Effect Modules

## The Effect List

Each of these effects is described in more detail in the [Surge XT manual](../manual-xt/).

<p align="center">
<img src="./images/chorus.PNG" width = "200" alt="chorus Module">
</p>

* Reverbs
   * **Reverb1**: A digital reverb, good for short gated type sounds, a bit odd in long tails
   * **Reverb2**: A more lush reverb, good for spatial or ambient sounds
   * **Spring Reverb**: A detailed model of a spring reverb, including knock and chaos effects. 
Can be CPU intensive.
* Modulation Effects
   * **Phaser**: A digital phaser with many options to control the filter network
   * **Flanger**: A flanger with some advanced feedback and tuning options
   * **Rotary Speaker**: A rotary speaker model, including two horns and an overdrive phase
   * **Chorus**: A clean digital chorus
   * **Ensemble**: An ensemble/chorus model based on a detailed model of a BBD chain,
akin to ensemble effects in older string synthesizers. Can be CPU intensive.
* Distortion and Saturation
  * **Distortion**: The name kinda gives it away right? 
  * **Neuron**: A saturation circuit
  * **Chow**: An interesting asymmetric saturator
* Special Effects
  * **Frequency Shifter**: A stereo extendible frequency shifter
  * **Ring Modulator**: A model of an analog ring modulator, with a multi-shape unison internal carrier
  * **Vocoder**: A vocoder with selectable bands and filter parameters
  * **Resonator**: A filter bank configured like classic resonator modules
  * **Combulator**: A bank of comb filters with feedback
  * **Exciter**: An exciter to add "sparkle" to your sound
  * **TreeMonster**: A pitch detection circuit which generates a tuned tracker signal you can 
ring modulate against. Its kinda crazy!
* Delays - see below for important information about these delays
  * **Delay**: A Digital Delay
  * **Tuned Delay**: A short-time delay meant for physical modeling.

## Polyphony

Except for the delays, All the Surge FX can run in either a monophonic or polyphonic mode. In monophonic mode,
the FX sum the inputs and hand them to a single instance of the effect, which is the default
for all the effects except for TreeMonster. In polyphonic mode, there is an instance
of the effect for each polyphonic channel, adding substantial CPU in some cases, but
also adding polyphonic separation. This is the default only for TreeMonster.

You can toggle polyphony behavior in the module menu.

<p align="center">
<img src="./images/polyphony.PNG" alt="Polyphony Selection">
</p>

## Block Considerations

Except for the delays, all the above effects work with a block size of 8, so have to collect 8 samples before 
processing. As such they add an 8 block latency to input signals.

## The Two Delays

Surge XT ships with two delay modules but these modules are built using Surge internal 
components, but not as Surge Effects. As such, they are all sample accurate, adding
only the standard 1-sample Rack latency from processing. 

The Digital Delay is strictly monophonic but supports delays up to 10 seconds and includes
tempo-sync without a block latency delay. It also has standard feedback and lo/hi cut features.

The Tuned Delay is a small module with a polyphonic short-duration delay line.
The primary feature of the Tuned Delay is that the delay time is set in V/Oct not
in seconds, and the delay time can have an explicit sample offset added to that
tuned delay. This makes the module a great module to do feedback-based sound
generation techniques, such as Karplus Strong.

# The Surge LFOxEG Module

The LFOxEG module features both an LFO and an envelope generator. 

Within the LFO sections one can adjust the rate, phase, amplitude and even the tension of the waveform.

The envelope section provides a delay in which the envelope begins, attack, hold, decay, sustain and release.

This allows for the creation of not only complicated LFO waveforms, but amplitude control of those LFO waveforms.

<p align="center">
<img src="./images/lfoxeg.PNG" alt="LFOxEG Module">
</p>

# Other Modules 

## The Mixer

The Rack Mixer is an implementation of the VST mixer section. It contains

* Three Oscillator Inputs with independent modulatable gains
* 2 digital ring modulators (1x2 and 2x3)
* A noise source with filtering (color)
* Full polyphony and modulation support
* Mute and Solo for each channel

<p align="center">
<img src="./images/mixer.PNG" width = "200" alt="Mixer Module">
</p>

## The Mod Matrix

We think the Surge modulation matrix model is really great! And it would be great
if we could extend it to other modules. In order to do that, we include a mod matrix
module which is simply a collection of knobs which are centers plus modulation targets
and the associated modulation output. You can use this to generate 8 re-mixed modulations
from 4 modulation sources to route to other CV sources. (Or, I guess, audio sources
if you really wanted)

<p align="center">
<img src="./images/modmatrix.PNG" width = "200" alt="Mod Matrix Module">
</p>
