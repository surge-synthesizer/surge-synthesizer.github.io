---
layout: page
title: Developing Surge Skins
noheader: true
permalink: /skin-manual
---

With the release of Surge 1.7.0, we have started putting in place a Skin Engine, which allows you to change the GUI
in a variety of ways, and allows you to distribute switchable skins. As of Surge 1.7.1, the skin engine has a variety 
of limitations, and we are continuing to develop it. This documentation documents the 1.7.1 features and helps you understand
steps to develop a skin.

This documentation is still a work in progress

# Before you begin

To develop a skin you will need a few things

1. Surge 1.7.1 installed and running on your system.
2. An SVG editor. We have had good luck with inkscape, BoxySVG, and others. If you use more advanced tools
   they may output SVGs which Surge cannot render.
3. A text editor capable of editing an XML file. 

If you have these three things, you need two bits of information you can garner from running Surge and looking
at the "About" screen

1. The location of the factory assets folder. This will contain the factory skins
2. The location of your user data folder. This is a useful place to put skins you are developing.

Finally, as a skin developer you will need to use the Surge dev menu. To activate this menu, 
right mouse (as opposed to left mouse) on the Menu button. If you do this you should see a "Developer Options" menu 
activated, and the Skins menu should show you the factory test skins. See if you can select the factory
"Test: Minimal Position Change" skin which wil change some item positions and some sliders.

If you have these tools together and can select the Minimal Position Change skin you are ready!

# Anatomy of a Surge skin

A Surge skin is a directory with the extension `.surge-skin` which must contain in the directory a file
called `skin.xml`. It may contain other assets. Surge will scan for skins both in the factory location
and your user data folder. 

The `skin.xml` file contains the entirety of the UI description and is described below. It will reference
images by path; those paths will be resolved relative to the `skin.xml` file.

It is typical to have a subdirectory of your skin called `SVG` or `IMG` which contains your image resources.

You can get started on a skin by copying one of the factory or test skins to your user area, renaming the directory,
and beginning to edit `skin.xml`. Before we can edit `skin.xml` though we need to understand the components of the Surge
UI.

# Anatomy of the Surge UI and Controls

The core UI is assembled at runtime as a collection of controls and displays based on the synth. It comprises
some fixed renderers (like the LFO and Oscillator renderer) and a collection of components. 

## Colors

Many of the parts of surge query the skin engine for default colors. In 1.7.1 we have used a somewhat ad-hoc
but consistent naming scheme for these components. These colors are named in the skin engine and queried from 
C++ at render time, but as such runs, it keeps a record of all colors queried. If you want to know what colors
are available for modification in Surge, open the Developer Options menu and choose "Show Queried Colors". This will
show you each fo the color names queried by the engine at runtime.

## Positions (and current position constraints)

As of 1.7.1 you can reposition some components in Surge but not all. The position of the sliders and switches
(excepting the FX sliders) can be modified by the skin engine. The position of the oscilaltor display, effects section, modulation button,
and LFO waveform are not currently movable. As we approach Surge 1.7.2 this will change.

## Controls

Controls in surge use image assets (SVG in 1.7.1) to draw their features, and use sprite sheets with various settings to control
their display. All controls in Surge have hover states which can be controlled by the skin engine.

### Switch Controls

### Slider Controls

### Other Controls

# The Contents of Skin.xml

## The containing element

All skin.xml files are single node XML files where the single node is a node of type `surge-skin`. Here is an example
of the surge-skin element. 

<pre>
&lt;surge-skin name="Test: Minimal Position Change" author="Surge Synth Team"
</pre>
<pre>
            authorURL="https://surge-synth-team.org/" version="1"&gt;
</pre>

The `version="1"` allows us to support future format changes. Right now "1" is the only version supported, and the version tag
is required. The `name` attribute is the name which will be displayed in the synth menu.

## The globals section

## The component-classes section

## The controls section

# Image Names and Image IDs
