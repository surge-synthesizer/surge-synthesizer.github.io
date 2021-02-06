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

One of the basic features of a skin file is to allow you to change images and colors in the skin
while still preserving layouts.
There's a variety of ways to do this which are covered in the tutorials, depending whether you want to do it
system wide or on a per-control basis. This second tutorial covers the simple replacement of global colors
and images, which results in a simple 're-skin' of the default surge skin with identical placement, size, and
behavior of all controls.

There are a couple of key concepts needed to reskin in this simplest fashion

1. All of the controls respond either to colors which are defaulted to the classic skin and can be replaced in this file, or
2. The control has an SVG representation of itself, usually with multiple states

In the first case, Surge has colors with heirarchical names ('lfo.waveform.background', say) which
are queried by our components at runtime. You can find out each of the names available in the
skin inspector.

In the second case, usually the states are vertically stacked, but this changes based on control type.
For instance, the playmode button (poly, mono, mono st, etc...) has 6 states, so the image actually has
6 copies of the button; and can have two additional images, on which specifies an overlay when hovering
over the button in an off state and one which specifies the overlay when hovering in an on state. This may
sound a bit confusing, but it's really just simple sprite maps and if you look at the images it should be clear.

The images also have well defined names of the form 'bmpDDDDD.svg' where DDDDD is a 5 digit number. These numbers
specify default images for particular controls. The easiest approach to replacing an image for a control is to
add a new instance of bmpDDDD.svg in your skin with the exact same pixel size and layout, but a different look and
feel.




```
<surge-skin name="02 Changing Images and Colors" category="Tutorial" author="Surge Synth Team" authorURL="https://surge-synth-team.org/" version="1">
  <globals>

```

We can pick an arbitrary element and just recolor it with a hex code. Here we recolor the oscillator
waveform green. We can find this colorname in the skin inspector


```
    <color id="osc.waveform" value="#00FF00"/>


```

We can also define our own colors for re-use and assignment later. For instance, here we define
a color called `hotpink` which we then use on the lfo background and the patchbrowser text


```
    <color id="hotpink" value="#FF69B4"/>
    <color id="lfo.waveform.background" value="hotpink"/>
    <color id="patchbrowser.text" value="hotpink"/>


```

There are lots and  lots of ways to replace images, and we will cover them in these tutorials.
In this tutorial, though, we show the two most common ways. Either create a defaultiamge directory
which contains files with the same name as default skin, or find the name of a skin-wide image
and replace the default image for it with a newly named image. So lets take these one by one.

In the first case, we make an image directory and declare it here. This will force the surge
skin engine to check for images there before it checks in the internal image repository.
From looking in the skin inspector we see the scene switch has image ID 113, so if we create
this directory then make a `bmp00113.svg` that will be loaded as the scene switch image.
Since the scene switch is a two state button, we will need to provide both states in the SVG
which is most easily done by copying the original and editing it without adjusting sizes.
But in the skin file, all we have to do is advertise the relative directory for SVGs and
populate it.


```
    <defaultimage directory="SVG/"/>


```

The other available approach is to replace an image by its ID with a new image
with a different filename. The string IDs are available in the skin inspector.
Here we replace the horizontal fader handle but ratner than overriding bmp00153.svg
we instead create an image with id SLIDER_HORIZ_HANDLE and all the horizontal handles
will use it for their handle graphic


```
    <image id="SLIDER_HORIZ_HANDLE" resource="SVG/NewHorizHandle.svg"/>


```

Surge has a collection of built in image ids like `SLIDER_HORIZ_HANDLE` which the
skin inspector will show you, and components will refer to them. But we can load
any other image we want into the image database with an ID. To do so, we create
an image here with an id and a resource reference. We will use it below


```
    <image id="another_handle_by_user" resource="SVG/AnotherHorizHandle.svg"/>

  </globals>
  <component-classes>
  </component-classes>
  <controls>

```

The default image 'bmp00113' wil be loaded by the scene browser. The `SLIDER_HORIZ_HANDLE`
will be loaded by all the sliders. But we need to pick an item to attach the other
image to. We do that here by picking a particular control and replacing the
handle image. This is covered more in Tutorial 04.


```
    <control ui_identifier="filter.balance" handle_image="another_handle_by_user"/>
  </controls>
</surge-skin>

```
# 03 Moving Your First Control

Changing layout is a critical feature of the skin engine. If you run the skin inspector you can see
that each control has been advertised with a name and has a location. Some controls are grouped in
panels by default, allowing you to move groups of items.

Moving an item in the skin engine is as simple as finding its ID and then re-setting the X and Y
location in the skin XML document. We show a few examples here.


```
<surge-skin name="03 Moving your First Control" category="Tutorial" author="Surge Synth Team" authorURL="https://surge-synth-team.org/" version="1">
  <globals>
  </globals>
  <component-classes>
  </component-classes>
  <controls>

```

The first most simple example is to just move a single slider. In the 18 UI the filter balance control
is positioned in the middle of a block. Lets move it. In the skin inspector in classic we see that
the control `filter.balance` has location `456x224`. Lets move it 10 pixels


```
    <control ui_identifier="filter.balance" x="446" y="214"/>


```

The skin inspector also shows that some items are in parent groups. For instance, the oscillator parameters
are all parented in a component named `osc.param.panel`. You should be able to see this in the Skin Inspector.

This means we can relocate all the parameters at once. Here we're just going to give them a little jump
to the right.


```
    <control ui_identifier="osc.param.panel" x="15"/>
  </controls>
</surge-skin>

```
# 04 Control Classes and User Controls

A core concept for a ui control is that it has a component-class. Surge's C++ engine has a collection of built
in classes with names like "CSurgeSlider" or "CHSwitch2". You can pick other classes for controls though.

In surge 1.8 you really don't want to swap a control's base class (the CSurgeSlider or whatever). As we approach
1.9 and add knobs and other such controls, you may have reason to do so. But for now, you may want groups of
items which are of the same base C++ type to have different properties. The most common use case for this is
defining a group of sliders to all have a different handle.

You could do this by overriding a parameter on a particular control over and over, which we show here, but you
can also do it by defining a user defined control class which allows you to set a bunch of properties then
apply that bundle to a control. This is very very loosely similar to CSS in web design, but don't let that
analogy lead you astray, especially in your optimism for how much we ahve implemented.



```
<surge-skin name="04 Control Classes and User Controls" category="Tutorial" author="Surge Synth Team" authorURL="https://surge-synth-team.org/" version="1">
  <globals>
    <defaultimage directory="SVG/"/>


```

As discussed in tutorial 02, we load a couple of images by ID into our image database. We can use
that to replace the handle image on a particula slider, as we show below and in Tutorial 2.


```
    <image id="horiz_pastel" resource="SVG/NewHorizHandle.svg"/>
    <image id="animal_handle" resource="SVG/AnotherHorizHandle.svg"/>
    <image id="fun_tray" resource="SVG/FunTray.svg"/>
    <image id="loud_pn" resource="SVG/loudPrevNext.svg"/>
    <image id="loud_pn_hover" resource="SVG/loudPrevNextHover.svg"/>
  </globals>
  <component-classes>

```

But if we want to replace a collection of sliders and modify several features we don't want
to have to repeat all the configuration. Instead we define a user component class. This class has
a name and a parent class but also advertises properties. Much like CSS these properties cascade
so a control can ovveride them, or a user class can have a user class as a parent. Here we take
the simplest approach though of just defining a new slider class which we intend to use for the
LFO H Sliders. We share the parent, CSurgeSlider, and modify the handle_image and the handle_tray
(backdrop) with a custom image.




```
    <class name="lfo-hslider" parent="CSurgeSlider" handle_image="animal_handle" handle_tray="fun_tray"/>


```

We can also create a class for switches, which we will use here to override one of the prev-next buttons


```
    <class name="loud-prev-next" parent="CHSwitch2" image="loud_pn" hover_image="loud_pn_hover"/>
  </component-classes>
  <controls>

```

We can change a single parameter of a single control however we want. Here we change the filterbalance
handle image. This is just like Tutorial 02


```
    <control ui_identifier="filter.balance" handle_image="horiz_pastel"/>


```

But rather than changing the images on these lfo sliders, we change their class. This picks up all
the properties on the class hierarchy back to the base class (in this case, still, CSurgeSlider)
and overrides them appropriately


```
    <control ui_identifier="lfo.rate" class="lfo-hslider"/>
    <control ui_identifier="lfo.phase" class="lfo-hslider"/>
    <control ui_identifier="lfo.deform" class="lfo-hslider"/>
    <control ui_identifier="lfo.amplitude" class="lfo-hslider"/>


```

And similary we change the prevnext patch button


```
    <control ui_identifier="controls.patch.prevnext" class="loud-prev-next"/>

  </controls>
</surge-skin>

```
# 05 Labels And Modulators

Surge skins to date have rendered the labels in SVGs as paths. Surge does install the Lato font with
an installation, though, and in Surge 1.8, you can use that font to draw labels anywhere on the UI.
This would allow you, in theory, to have text-free graphical assets for the background and render
labels as strings. Button assets would still require text-in-SVGs for now.

In Surge 1.8, there is minimal control over the positiong of the modulation section in the UI.
You can adjust the x and y position of the entire panel, or the color of an individual element
using the mechanism described in Tutorial 02 and 03 and the labels from the skin inspector.
In Surge 1.9, we expect to expand the ability to reponsition modulation source controls.


```
<surge-skin name="05 Labels And Modulators" category="Tutorial" author="Surge Synth Team" authorURL="https://surge-synth-team.org/" version="1">
  <globals>
  </globals>
  <component-classes>
  </component-classes>
  <controls>

```

Adding a label is simple, though. Simply add a label control at a position with text and properties. Here is a full example


```

    <label x="10" y="30" w="150" h="30"
           font_size="24" font_style="bold" color="#004400"
           bg_color="#AAFFAA488" frame_color="#FFFFFF"
           text="I Am Green"/>


```

We can also set labels to have slider text values (as of Surge 1.9)
where if instead of "text" you set "control_text" you end up getting
the same label which is on the slider. Here we also disable the text on the
second slider as an example.


```

    <label x="10" y="80" w="150" h="30"
           font_size="24" font_style="bold"
           color="#00FF00" bg_color="#FF9000AA"
           frame_color="#FFFFFF"
           control_text="osc.param_1"/>
    <label x="10" y="110" w="150" h="20"
           font_size="15" font_style="bold"
           color="#00FF00" bg_color="#FF9000AA"
           frame_color="#FFFFFF"
           control_text="osc.param_2"/>

    <control ui_identifier="osc.param_2" hide_slider_label="true"/>


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
    <multi-image id="SLIDER_HORIZ_HANDLE">
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


```

It is often the case with bitmap assets that you don't want arbitrary zoom levels
but instead want fixed zoom levels only, to avoid aliasing and blurring when
resizing assets. You can accomplish that with a `<zoom-levels>` global tag as
follows, which will constrain the menus and the zoom settings in the plugin.


```
    <zoom-levels>
      <zoom-level zoom="100"/>
      <zoom-level zoom="125"/>
      <zoom-level zoom="150"/>
      <zoom-level zoom="200"/>
    </zoom-levels>

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

In Surge 1.8, the FX section can only be changed in the most cursory way. The panels and components may be moved
but individual sliders, although addressible, cannot be relocated. As such, this tutorial is blank until
Surge 1.9 releases in Summer 2020.


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

    <control ui_identifier="lfo.title" class="none"/>
  </controls>
</surge-skin>

```
