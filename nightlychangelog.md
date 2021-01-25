---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

## Draft Changelog for 1.8.1

1.8.1 is a point release to cleanup a few bugs we found after release, to add a few features we simply forgot to code, and 
to update and add content to the installer which people shared after the 1.8.0. release. 

Updated as of 53fe48d4df13e98b / Jan 25 morning NYC

The changes are

* BugFixes and Features
   * Handle UTF-16 paths for saving user settings, allowing users on windows with UTF-16 usernames
     to update their defaults.
   * Drag and Drop of a wav/wt doesn't reset oscillator type if type is window
   * The warning on windows about uninstalled Lato font shows only once, not once per window open
   * About Screen actually mentions the Surge Synth Team!
   * About Screen on Windows shows "x86" not "Intel" as the CPU
   * Modulation Depth display and typein for Temposync parameters implemented (as opposed to being just nonsense)
   * Modulator Preset subdirectory fix
   * Dismiss the value popup when toggling modulation
   * Resolve python with /usr/bin/env on Linux in the build phase
   * Fix an occasional but serious crash which would occur on slower machines when rapidly changing patches.
   * Reorder and improve the MSEG Segment menu
   * Drag and Drop FX movement retains modulation
   * Fix a mis-drawn MSEG hover segment when panning
   * Mouse-wheel can toggle Modulator Alternates
   * Add an explicit menu setting for Windows Touch settings to the user/mouse menu
   
   
 * Content
   * A Modulator/MSEG preset factory library
   * High Quality versions of many of the factory wavetables
   * Updated the Jacky Ligon 3rd part presets with new patches and optimizations to improve CPU usage
   
   
