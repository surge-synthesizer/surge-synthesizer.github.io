---
layout: page
title: Plugin Formats
noheader: true
permalink: formats 
---

**As of the Surge 1.7.0 release, the Surge team is only distributing built binaries of Surge as a VST3 and AU**

The Surge team distributes a pre-built binary as a 64 bit VST3 and AU on macOS, a 64 bit VST3 on Linux, and a 32 and 64 bit VST3 on Windows. We have
worked hard to make sure all of these formats work, including in some cases working with DAW authors to resolve issues. We strongly
recommend all users use the AU or VST3 with Surge 1.7.0.

Surge source code can build VST2 and LV2, so if you want these formats you may be able to compile them yourself. This page contains information 
on these format and why we don't include it in our binary.

# VST2

VST2 is not free and open source software, and Steinberg, the copyright owner of the VST2 code, is no longer making licenses 
available to developers. With the Surge 1.7 family we are moving to having binary distributions of only Free and Open Source
software, so are no longer distributing a VST2. If you need a VST2 here are your choices

1. You can [download any of the 1.6.6 binary distributions](https://github.com/surge-synthesizer/releases/tags). In the 1.6.6
   family we did build a VST2, but as the synth drifted further from the Vember Audio roots, we stopped this practice.
   
2. If you have the VST2 SDK source code, you can build the synth yourself. Building the synth is relatively easy, and a single
   environment variable will activate the VST2 build. Even though we don't distribute a VST2, members of the dev team do test
   it to make sure it runs.
   
3. You can consider one of the VST2 stub alternative libraries. If you manage to make Surge work with one of these, we would
   merge any changes required to Surge so that future builders could do the same, although would be reluctant to include
   such a build in our binary for license clarity reasons.
   

# LV2

With 1.7 we temporarily disabled the LV2 binary distribution. A from--source build on linux will still build the plugin in LV2 format.

We made this choice because parts of the current LV2 spec and Surge are incompatible in a couple of ways, most importantly in the LV2 assumption
that plugins never modify their control input port. Actions like 'changing parameter types when an effect changes' or 'patch
changes' are not compatible with this design constraint. As a result, the LV2 - especially in Ardour - unreliably saves and
restores state. The solution - which we are working on - is to use new LV2 APIs that allow current Surge behavior (and match what other plugin specs 
like AU and VST do).

A variety of LV2 experts are working on this problem and we expect to have a working LV2 in the future which we will include in
our binary distribution. If you are an LV2 expert who is motivated to help us fix this, we have collected the open issues [in this GitHub 
milestone](https://github.com/surge-synthesizer/surge/issues?q=is%3Aopen+is%3Aissue+milestone%3A1.7.LV2) and you can see
the current WIP [here](https://github.com/surge-synthesizer/surge/pull/1773). We would welcome any help!


