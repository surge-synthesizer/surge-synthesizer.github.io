---
title: Accessibility Notes
permalink: /accessibility/
noheader: true
toc_levels: 1..3
---

<style>
article h4 {
    font-weight: bold;
}
</style>


{:.no_toc}
# Introduction

As of Surge XT 1.0, both the plugin as well as standalone version include accessibility for screen readers and other assistive technologies on Windows and Mac OS. While this support is mostly complete, there are a few areas of the interface that still require extra work to be more accessible. This page documents these problems and how to work around them, as well as gives some hints on how to navigate Surge faster with the most popular screen readers.

<br/>
## Table of Contents
{:.no_toc}

* unordered list
{:toc}

<br/>
<br/>
<br/>
<br/>


# Known issues

These known issues are scheduled to be addressed in the upcoming Surge XT 1.1 release. If you run into a problem that’s not mentioned here, please let us know on GitHub or Discord.


## Patch and category names are not spoken in the patch browser

Workaround: Instead of pressing on the “patch selector” to open the browser, you can bring up a menu listing all patches sorted by author and category. To do this, place keyboard focus on the patch selector, then press Shift+F10 on Windows or VO+Shift+M on Mac.
You can also navigate through categories and patches using the jog controls next to the browser, or by using these keyboard shortcuts:
- Previous category: Shift+Left
- Next category: Shift+Right
- Previous patch: Command+Left on Mac, Control+Left on Windows
- Next patch: Command+Right on Mac, Control+Right on Windows


## Patch typeahead results don’t speak

It's not possible to review results  with screen readers yet, but if you remember most of the name of whichever patch you’re trying to load, the typeahead feature can still be useful.
- Press Command+F on Mac or Control+F on Windows. Your screen reader should report that an edit box has focus.
- Type in part of the name of the patch you want to load, then hit Enter



## Menu items to edit a modulation are not reachable from the keyboard

When navigating context menus of controls that have modulations available using arrow keys, the options to edit and clear modulations are currently skipped over. 

Workaround: skipped menu items can be reached and activated using the deeper navigation features in screen reader software. For now, navigate to those menu items using the VoiceOver cursor, NVDA object navigator, Narrator cursor or JAWS touch cursor. See the hints section below if you're not sure how to use these features.



# Platform Specific Hints

## Mac OS and VoiceOver

If you’re using Surge hosted in Reaper and you find that keys like Enter aren't getting through, you can either switch to the AU version of the plugin, or hit the “Preset menu” button in Reaper's FX dialog with the VST3 instantiated and check the “Send all keyboard input to plugin” option.

If you find that the cursor gets stuck in a submenu, either disable cursor tracking  by hitting VO+Shift+F3 while you're in the menu, or set the mouse cursor to ignore VoiceOver in the navigation section of VoiceOver Utility.

Sliders can be adjusted using the conventional VoiceOver approach of interacting, but you'll find that using Surge’s native keystrokes to move the sliders provides more granular control. Try these keystrokes:

- Up/Down adjusts the value. Holding shift makes smaller adjustments, and holding Command goes by steps (for example, semitones when focused on a pitch slider).
- Home (FN+Left on a Macbook keyboard) jumps to a slider's maximum value, End (FN+Right) jumps to the minimum.
- Delete (FN+Backspace on a Macbook keyboard) resets a slider to its default position.


In addition to  its standard navigation and interaction keystrokes, VoiceOver's deeper features can boost productivity when navigating complex applications like Surge. A few that you’ll likely find helpful are VoiceOver Find (VO+F), Item Chooser (VO+I) and Hotspots. See VoiceOver help docs for more guidance.



## Windows

Generally speaking, Surge can be navigated using Tab and Shift+Tab to move focus through controls, arrow keys to adjust the control that has focus, and Shift+F10 or the Applications key to open context menus normally accessible with a right-click. However, Surge has a complex GUI with many controls, so that approach can be slow going.
In future releases, extra keys will be provided that will enable you to jump through control groups, but for now, all widely adopted Windows screen readers already offer some way to explore the screen using a hierarchical approach (much like how VoiceOver works on Mac) and you can use these deeper navigation features to jump from group to group in Surge.
We've put together some hints for hierarchical navigation with the three most common Windows screen readers below. For full details of these features, please refer to their respective user guides.


### NVDA

NVDA’s review feature is called the object navigator. It can be moved around using the NVDA key in combination with the numpad, or the arrow keys if you’re using NVDA's laptop layout. The most important keys you’ll need to know are:
- Move to the previous or next control in the current group: NVDA+Numpad4 or Numpad6 (Desktop), NVDA+Shift+Left or Right (Laptop)
- Move into or out of a group: NVDA+Numpad2 or Numpad8 (Desktop), NVDA+Shift+Down or Up (Laptop)
- Activate the control under the navigator: NVDA+Numpad Enter (Desktop), NVDA+Enter (Laptop). Use this to click buttons, toggle check boxes etc.
- Set the system focus to the navigator: NVDA+Numpad Minus (Desktop), NVDA+Shift+Backspace (Laptop). Use this to focus a slider for further adjustment using arrow keys, Home, End, Delete etc.

Also, if using Surge in combination with Reaper you find that NVDA takes a few seconds to respond when exiting menus, telling Reaper to run surge in a dedicated process may help. To do this, after you find Surge in the add FX dialog, bring up the context menu and select run as>dedicated process. You should need to do this only once.



#### Narrator

The Narrator cursor performs similarly to NVDA’s object navigator. However, at default settings, it moves through controls sequentially ignoring grouping information. This can be changed by going into Narrator’s settings (Control+Windows+N) and changing the "Navigation mode" combo box from “Basic” to “Advanced”.
In Advanced mode, Narrator+Left or Right moves between controls within the current group as usual, Control+Narrator+Down or Up moves in and out of groups, and Narrator+Enter activates controls.
 
 Narrator synchronizes the system focus automatically, so there's no need to  manually route focus for further adjustment using Surge's native keystrokes.

, Narrator includes a find feature which can be used to jump to a specific control. You can access this by pressing Control+Narrator+F, typing in part of the name of the control you want to jump to, then hitting Enter.


#### JAWS

The JAWS touch cursor can be activated by pressing Shift+Numpad Plus on desktop layout, or JAWS+Shift+Semicolon on laptop layout. At default settings, touch cursor ignores grouping, but this can be changed by pressing Numpad Star or JAWS+A.
Once done, Left and Right arrows move through controls within a group, Down and Up arrows move into and out of groups, and Enter activates controls.
You can return the arrow keys to normal operation by switching back to PC cursor (Numpad Plus on desktop, or JAWS+Semicolon twice quickly on laptop)