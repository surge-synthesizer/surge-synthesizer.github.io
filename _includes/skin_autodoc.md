# 01 Intro to Skins

The Surge Skin Engine allows designers control over the positioning, rendering, and in some more limited cases
action of components which make up the Surge UI. These tutorials comprise the documentation for the skin engine
at this time.

The basic structure of a surge skin is a directory named "Something.surge-skin" which contains at least a single
file "skin.xml" describing the contents of the skin directory and the desired behaviour of the resulting surge UI.
We call a ".surge-skin" directory and its contents a "skin", "skin bundle" or "bundle" interchangably.

The skin bundle can be placed either in the user's surge documents directory (the location where user patches
are saved, as shown by the 'show user folder' menu item) or in the Surge central data folder if it is a
skin distributed with Surge.  Surge will search recursively for skins through both the factory and
user data areas.

The "skin.xml" file contains 4 key items
* The `surge-skin` tag with core attributes describing the skin
* The `globals` section defining global variables such as image directories and colors
* The `component classes` section, defining user-defined classes for components
* The `controls` section, which lays out the controls that build the UI

Surge compiles the Classic User Interface, including the images, control type, and layout
information, into the Surge DLL. As such, the `skin.xml` file is overriding or modifying parts
of the default layout. While you can change every element of the UI, you can also choose to change
nothing at all, and you will get the simplest built in version of the Surge Classic UI.

So this is the simplest "skin.xml" file. It defines a `surge-skin` with a name, category, author, authorURL
and version (which as of this writing must be "1"), and then declares empty globals, component-classes, and controls
sections.

It is worth noting that the Surge default skin is actually a bit larger than this file. Since the skin engine
activates features like hover overlays for some controls, the `default.surge-skin` surge uses a couple of features
shared in later tutorials. If you load this skin, you will get a UI with correct layout and functionality but no hover
images (some built in controls will display hover; more on that later).


```
<surge-skin name="01 Intro to Skins" category="Tutorial" author="Surge Synth Team" authorURL="https://surge-synth-team.org/" version="1">
  <globals>
  </globals>
  <component-classes>
  </component-classes>
  <controls>
  </controls>
</surge-skin>

```
# 02 Changing Images and Colors

One of the basic features of a skin file is to allow you to change images and colors in the skin preserving layouts.
There's a variety of ways to do this which are covered in the tutorials, depending whether you want to do it
system wide or on a per-control basis. This second tutorail covers the simple replacement of global colors
and images, which results in a simple 're-skin' of the default surge skin with identical placement, size, and
behavior of all controls.


```
<surge-skin name="02 Changing Images and Colors" category="Tutorial" author="Surge Synth Team" authorURL="https://surge-synth-team.org/" version="1">
  <globals>
    <color id="hotpink" value="#FF69B4"/>

    <color id="lfo.waveform.background" value="hotpink"/>
  </globals>
  <component-classes>
  </component-classes>
  <controls>
  </controls>
</surge-skin>

```
# 03 Moving Your First Control



```
<surge-skin name="03 Moving your First Control" category="Tutorial" author="Surge Synth Team" authorURL="https://surge-synth-team.org/" version="1">
  <globals>
  </globals>
  <component-classes>
  </component-classes>
  <controls>
    <control ui_identifier="osc.param.panel" x="15"/>
  </controls>
</surge-skin>

```
# 04 Control Classes and User Controls



```
<surge-skin name="04 Control Classes and User Controls" category="Tutorial" author="Surge Synth Team" authorURL="https://surge-synth-team.org/" version="1">
  <globals>
  </globals>
  <component-classes>
  </component-classes>
  <controls>
  </controls>
</surge-skin>

```
# 05 Labels And Modulators



```
<surge-skin name="05 Labels And Modulators" category="Tutorial" author="Surge Synth Team" authorURL="https://surge-synth-team.org/" version="1">
  <globals>
  </globals>
  <component-classes>
  </component-classes>
  <controls>
  </controls>
</surge-skin>

```
# 06 Using PNG

Up until now we have defined classes with SVG assets. SVG assets are great, inasmuch as
they are scalable vector images, but they do pose design constraints. Surge also supports
PNG images.

Surge PNG images take two forms

1. Single resolution images which the image engine will scale
2. Multi resolution images, which the image engine will scale,
but which will choose the nearest resolution

Clearly the second class of image results in better skins and we
recommend everyone use it; but we show both here. Also, we recommend
unless strictly necessary, you try to use SVG images.

The PNG background image provides another option, which is to constrain
zoom. It is the skin designers choice whether to do this, but if blah blah

Unlike SVG images, which can override by name, PNG images cannot. You need
to specify them for your controls specifically.


```
<surge-skin name="06 Using PNG" category="Tutorial" author="Surge Synth Team" authorURL="https://surge-synth-team.org/" version="1">
  <globals>

```

Here we set up a single resolution image which we later apply to the scene switch.
This image is the appropriate 100% low resolution (in this case 51x54) and has the
same sprite structure as the SVG, but has a single resolution and, as such, will
look like garbage. But you get a fish and a soccer ball!


```
    <image id="scene-switch" resource="PNG/scene_selector.png"/>


```

A key to making PNG images work is to use multiple resolutions and let the system
decide which to pick at various zoom levels. By default surge always has unconstrained
zooms (but more on that below) so a good scattering of resolutions is recommended.

To specify a multi-resolution PNG image, use the tag <multi-image rather than <image
whih has image children with a zoom level tag. If you do not have the "100" tag the
skin engine will raise an error.

We generally try to use the naming convention "name_ZZZ.png" where ZZZ is the soom
level but you can use anything.

Using the technique described in Tutorial 02, we are replacing the default horizontal
slider handle image in with this scalable image.


```
    <multi-image id="FADERH_HANDLE">
      <image zoom-level="100" resource="PNG/horiz_handles_100.png"/>
      <image zoom-level="200" resource="PNG/horiz_handles_200.png"/>
      <image zoom-level="400" resource="PNG/horiz_handles_400.png"/>
    </multi-image>


```

The same aplies to a background image, of course, which we set
with the special global tag 'background'


```
    <multi-image id="frac-bg">
      <image zoom-level="100" resource="PNG/fracbg_100.png"/>
      <image zoom-level="125" resource="PNG/fracbg_125.png"/>
      <image zoom-level="150" resource="PNG/fracbg_150.png"/>
      <image zoom-level="200" resource="PNG/fracbg_200.png"/>
      <image zoom-level="250" resource="PNG/fracbg_250.png"/>
      <image zoom-level="300" resource="PNG/fracbg_300.png"/>
      <image zoom-level="400" resource="PNG/fracbg_400.png"/>
    </multi-image>

    <background image="frac-bg"/>
  </globals>
  <component-classes>

  </component-classes>
  <controls>
    <control ui_identifier="global.active_scene" bg_resource="scene-switch"/>
  </controls>
</surge-skin>

```
# 07 The FX Section



```
<surge-skin name="07 The FX Section" category="Tutorial" author="Surge Synth Team" authorURL="https://surge-synth-team.org/" version="1">
  <globals>
  </globals>
  <component-classes>
  </component-classes>
  <controls>
  </controls>
</surge-skin>

```
# 08 Hiding Controls

Hiding a control is remarkably easy. Just find a control and give it class "none". This works
for sliders, switches, and also for special types and panels. If for a panel you set a class
'none' it pushes to the children of the panel, effectively hiding the entire group.

This example simply hides the LFO deform and amplitude sliders, the oscillator display, and the
entire mixer section. That's not a very useful skin practically, but combined with the move
and resize examples shown in other tutorials, it gives an idea of how to generate 'compact' or
'player' skins.


```
<surge-skin name="08 Hiding Controls" category="Tutorial" author="Surge Synth Team" authorURL="https://surge-synth-team.org/" version="1">
  <globals>
  </globals>
  <component-classes>
  </component-classes>
  <controls>

```

Here we hide a couple of sliders. We could do the same with switches and so on, of course.


```
    <control ui_identifier="lfo.deform" class="none"/>
    <control ui_identifier="lfo.amplitude" class="none"/>


```

But you can also hide more special non-slider controls. Here's the osc.display being hidden.


```
    <control ui_identifier="osc.display" class="none"/>


```

Finally, the skin model places items into groups, and so assigning a class of 'none' to a group
hides all the components inside it.


```
    <control ui_identifier="mix.panel" class="none"/>
  </controls>
</surge-skin>

```
