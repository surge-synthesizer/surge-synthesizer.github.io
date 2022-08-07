---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog
---

We released Surge XT 1.1.0 on August 3, 2022. Our strategy for the rest of 2022 with Surge is to release smaller maintenance updates
numbered 1.1.1, 1.1.2, etc.... with bug fixes and tweaks.

This changelog was updated Aug 7 as of commit 35318e3f685.

* Accessibility Enhancements
   * The name of the accessible overlay for the FX slots contains the effect type name as well as the slot name.  

* UI/UX Fixes 
   * Filter-2 offset mode, when copied in a scene copy, sets up the copy target filter 2 cutoff slider properly
   * The Filter overlay correctly uses filter 2 offset and resonance link modes when drawing the filter

* CLAP support
   * The Linux CMAKE Install rules install the CLAP now even if you don't use the deb/rpm
   * The MAC Installer selects CLAP as on by default, and also alphabetizes the formats
   * The CLAP paramsFlush implementation is safe to call when processing is happening, even though this probably shouldn't happen


