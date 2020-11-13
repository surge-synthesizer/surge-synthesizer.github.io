---
layout: page
title: The Nightly Build
noheader: true
permalink: nightly
---

Welcome to the Surge Nightly Build. You can download the nightly build for any of our supported platforms here. Please
see the important caveats at the end of this page.

<b>Build: {% include latest_version %} built at {% include latest_build_time %}</b>

<ul>
<li><a href="{% include latest_macos_url %}">macOS 64-bit</a> (or try the
<a href="{% include latest_macos_fat_url %}">experimental macOS x64/ARM build - see below</a>)</li>
<li><a href="{% include latest_linux_x64_url %}">Linux x64</a></li>
<li><a href="{% include latest_win_x64_url %}">Windows 64-bit Installer</a> or <a href="{% include latest_win_x64_zip_url %}">Windows 64-bit Portable Zip</a></li>
<li><a href="{% include latest_win_x86_url %}">Windows 32-bit</a></li>
</ul>

Details on the most recent change 
<a href="https://github.com/surge-synthesizer/surge/commit/{% include git_nightly_log_hash %}">(diff)</a> 

```
{% include git_nightly_log_long_display %}
```

<p>
</p>

The <a href="https://github.com/surge-synthesizer/surge/commits/main">full git commit history is always available</a>.
The five most recent commits are:

```
{% include git_nightly_recent_five %}
```

<p>
</p>

<hr>

## Caveats

Please take a moment to understand the nightlies. We automatically build Surge on all our 
platforms with every commit to our <a href="https://github.com/surge-synthesizer/surge">main</a> branch. This means
the code you are about to download may be minutes old. Depending on the pace of development in the Surge team
the code could contain bugs, contain new features which don't work, and may even end up making patches that
future Surge versions load differently, incorrectly, or not at all.

Our minimum advice if you use a nightly is to <b>use a limiter on the output</b>. We have made DSP errors in the nightlies
which have made nasty clicks and pops.

But despite the above warning, we work really hard to have the nightlies be great. Most of the Surge team runs the nightly in their
music making environment and the software is generally stable and robust. Also, using the nightly, finding a bug, and letting us
know is how bugs get fixed. For more on that, learn how to <a href="/feedback">contact us with questions and comments.</a>

We keep a nightly changelog up to date by hand. It can lag the actual nightly by days or weeks, but is available
<a href="/nightlychangelog">here</a>

## What about that mac ARM build

So, we have xcode 12, the synth builds and runs on a raspberry pi without problem, and we can configure surge so it
builds an ARM/X64 dual executable. But we don't have any M1/Apple Silicon hardware. So what we've done is we have
made the M1/Apple Silicon build available as a separate download with surge, but no FX bank, as part of the nightlies.

Probably one of us will just buy an M1 box before 1.8 ships and then we will clean this up once we can test it.

If you do have and test on Apple Silicon, please hop on our discord or github to share bugs and experiences!


