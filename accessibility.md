---
layout: page
title: Accessibility Notes
permalink: /accessibility/
noheader: true
toc_levels: 1..4
---

<style>
article h4 {
    font-weight: bold;
}
</style>


{:.no\_toc}
# Introduction

As of Surge XT 1.0, both the plugin as well as standalone version include accessibility for screen readers and other assistive technologies on Windows and Mac OS. On this page you’ll find information on how to configure Surge to work best with a screen reader, as well as some tips on how to navigate around the interface faster.

<br/>
## Table of Contents
{:.no\_toc}

* unordered list
{:toc}

<br/>
<br/>
<br/>
<br/>


# Recommended configuration options

The Surge workflow menu includes a couple of options that should be turned on for the best accessibility experience. To adjust these settings, after you have loaded the surge plugin in your DAW or opened the standalone app, find and press the "Main Menu" button and open the "Workflow" submenu. Once you're there, check the following options if they're not already turned on:

- Use Keyboard Shortcuts - enables additional keyboard shortcuts to switch and save patches, adjust parameters and more.
- Shift + F10 and Edit Parameter Value Shortcuts>Follow Keyboard Focus - this allows you to bring up context menus on the focused control with Shift+F10.
- Send Additional Accessibility Announcements - makes Surge speak additional messages when you change patches or wavetables, add or remove a patch from favorites and use the Undo/Redo features.
- Add SubMenus to Modulation Menu Items - This makes accessing options to Mute, Edit and Clear modulations easier with a Screen Reader.
- announce patch browser (Windows workaround) - this makes the patch search results list accessible on Windows by speaking the selected patch with SAPI to work around a bug on Windows. This option is not present on Mac OS where the patch list is spoken correctly by VoiceOver.


Depending on the DAW, some of Surge's keyboard shortcuts may not get through to the Plugin. If this happens, refer to your DAW's documentation for a way to pass all keyboard input through to the plugin. For example, in the case of Reaper, you will find this option in the "preset menu" button found in the FX dialog. Alternatively, you can change any of Surge's keyboard shortcuts by selecting "Edit keyboard shortcuts..." From the workflow menu.

# Useful shortcuts

## Basic navigation

You can navigate the surge  interface using the keys you normally would in any other program - On Windows with Tab/Shift+Tab and the arrow keys, On Mac with VoiceOver commands. 
Every control also offers a right-click menu with additional options which can be accessed with Shift+F10 or VO+Shift+M on Mac.

In addition, you can use Alt+Period/Comma (Windows) or Option+Period/Comma (Mac) to quickly jump the focus between major interface sections. 

Other useful navigation commands worth remembering include:

- Alt/Option+S - change the active Scene
- Alt/Option+1-3, select the active oscillator.
- Alt/Option+M, open the modulation list, which allows you to easily add, modify, mute or delete all modulations in a patch from one place.

## Manipulating sliders

When a slider has focus, the following keys can be used:

- Up/Down adjusts the value. Holding shift makes smaller adjustments, and holding Command goes by steps (for example, semitones when focused on a pitch slider).
- Home (FN+Left on a Macbook keyboard) jumps to a slider's maximum value, End (FN+Right) jumps to the minimum.
- Delete (FN+Backspace on a Macbook keyboard) resets a slider to its default position.
- Enter opens a dialog allowing you to type in an exact value for a parameter

## Changing patches

In addition to pressing the patch selector to get a menu of all patches or using the Jog controls, a number of keyboard shortcuts are available to make switching patches easier.

- Previous category: Shift+Left
- Next category: Shift+Right
- Previous patch: Command+Left on Mac, Control+Left on Windows
- Next patch: Command+Right on Mac, Control+Right on Windows
- Search: Command+F on Mac, CTRL+F on Windows
- Add/remove patch from favorites: Option+F on Mac, Alt+F on Windows. Favorite patches are available in their own section of the patch browser menu


# Platform Specific Hints

## Mac OS and VoiceOver

If you find that the cursor gets stuck in a submenu, either disable cursor tracking  by hitting VO+Shift+F3 while you're in the menu, or set the mouse cursor to ignore VoiceOver in the navigation section of VoiceOver Utility.

Sliders can be adjusted using the conventional VoiceOver approach of interacting, but you'll find that using Surge’s native keystrokes to move the sliders provides more granular control. See the section on manipulating sliders above for the details.

In addition to  its standard navigation and interaction keystrokes, VoiceOver's deeper features can boost productivity when navigating complex applications like Surge. A few that you’ll likely find helpful are VoiceOver Find (VO+F), Item Chooser (VO+I) and Hotspots. See VoiceOver help docs for more guidance.



## Windows

### Known issues

There are currently 2 things to be aware of when using Surge on Windows.

- The search results in the CTRL+F patch typeahead are not visible to screen readers when you arrow through them. However, Surge should speak them with your default Windows voice if the "announce patch browser" option is checked in the workflow menu. The results will be made accessible to screen readers in a future version.
- When you close out of a menu, screen readers will not notice the focus change until you tab to a different control. This appears to be a Juce bug. For more technical details and updates on this issue, see [issue #6426](https://github.com/surge-synthesizer/surge/issues/6426) in the Surge bug tracker.


### Screen Reader specific navigation hints

Generally speaking, Surge can be navigated using Tab and Shift+Tab to move focus through controls, arrow keys to adjust the control that has focus, and Shift+F10 or the Applications key to open context menus normally accessible with a right-click. Since Surge is a very complex application with many controls, you will also find the Alt+Period/Comma shortcuts to jump between the major groups very helpful.

If you wish to explore the screen in more detail without moving the system focus, all widely adopted Windows screen readers offer some way to explore the screen using a hierarchical approach (much like how VoiceOver works on Mac) and you can use these deeper navigation features to jump from group to group in Surge.
We've put together some hints for hierarchical navigation with the three most common Windows screen readers below. For full details of these features, please refer to their respective user guides.


#### NVDA

NVDA’s review feature is called the object navigator. It can be moved around using the NVDA key in combination with the numpad, or the arrow keys if you’re using NVDA's laptop layout. The most important keys you’ll need to know are:

- Move to the previous or next control in the current group: NVDA+Numpad4 or Numpad6 (Desktop), NVDA+Shift+Left or Right (Laptop)
- Move into or out of a group: NVDA+Numpad2 or Numpad8 (Desktop), NVDA+Shift+Down or Up (Laptop)
- Activate the control under the navigator: NVDA+Numpad Enter (Desktop), NVDA+Enter (Laptop). Use this to click buttons, toggle check boxes etc.
- Set the system focus to the navigator: NVDA+Numpad Minus (Desktop), NVDA+Shift+Backspace (Laptop). Use this to focus a slider for further adjustment using arrow keys, Home, End, Delete etc.

Also, if using Surge in combination with Reaper you find that NVDA takes a few seconds to respond when exiting menus, telling Reaper to run surge in a dedicated process may help. To do this, after you find Surge in the add FX dialog, bring up the context menu and select run as\>dedicated process. You should need to do this only once.



#### Narrator

The Narrator cursor performs similarly to NVDA’s object navigator. However, at default settings, it moves through controls sequentially ignoring grouping information. This can be changed by going into Narrator’s settings (Control+Windows+N) and changing the "Navigation mode" combo box from “Basic” to “Advanced”.
In Advanced mode, Narrator+Left or Right moves between controls within the current group as usual, Control+Narrator+Down or Up moves in and out of groups, and Narrator+Enter activates controls.
 
Narrator synchronizes the system focus automatically, so there's no need to  manually route focus for further adjustment using Surge's native keystrokes.

Narrator includes a find feature which can be used to jump to a specific control. You can access this by pressing Control+Narrator+F, typing in part of the name of the control you want to jump to, then hitting Enter.


#### JAWS

The JAWS touch cursor can be activated by pressing Shift+Numpad Plus on desktop layout, or JAWS+Shift+Semicolon on laptop layout. At default settings, touch cursor ignores grouping, but this can be changed by pressing Numpad Star or JAWS+A.
Once done, Left and Right arrows move through controls within a group, Down and Up arrows move into and out of groups, and Enter activates controls.
You can return the arrow keys to normal operation by switching back to PC cursor (Numpad Plus on desktop, or JAWS+Semicolon twice quickly on laptop)
