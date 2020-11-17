---
layout: page
title: The Nightly Build
noheader: true
permalink: nightly
---

Welcome to the Surge nightly builds page! You can download the latest nightly build for any of our supported platforms here. Please
note important caveats at the end of this page!

<b>Build: {% include latest_version %} built at {% include latest_build_time %}</b>

<ul>
<li><a href="{% include latest_macos_url %}">macOS 64-bit</a> (or try the
<a href="{% include latest_macos_fat_url %}">experimental macOS 64-bit ARM build - see below!)</a></li>
<li><a href="{% include latest_linux_x64_url %}">Linux 64-bit</a></li>
<li><a href="{% include latest_win_x64_url %}">Windows 64-bit Installer</a> or <a href="{% include latest_win_x64_zip_url %}">Windows 64-bit Portable ZIP</a></li>
<li><a href="{% include latest_win_x86_url %}">Windows 32-bit</a></li>
</ul>

Details on the most recent change 
<a href="https://github.com/surge-synthesizer/surge/commit/{% include git_nightly_log_hash %}">(diff)</a>:

```
{% include git_nightly_log_long_display %}
```

<p>
</p>

<a href="https://github.com/surge-synthesizer/surge/commits/main">Full git commit history is always available</a>.
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
the code you are about to download may be minutes old. Depending on the pace of development at Surge Synth Team,
the code could contain bugs, new features which don't work, and may even end up making patches that
future Surge versions load differently, incorrectly, or not at all.

Our minimum advice if you use a nightly is to <b>use a limiter on the output</b>. We have made DSP errors in the nightlies before
which created nasty clicks and pops, in worst cases sudden blasts of noise.

But despite the above warning, we work really hard to have the nightlies be great. Most of Surge Synth Team runs the nightly in their
music-making environment, and the software is generally stable and robust. Also, using the nightly, finding a bug, and letting us
know is how bugs get fixed. For more on that, learn how to <a href="/feedback">contact us with questions and comments.</a>

We keep the nightly changelog up to date by hand. It can lag the actual nightly by days or weeks, but is available
<a href="/nightlychangelog">here.</a>

## What about that Mac ARM build?

So, we have XCode 12, the synth builds and runs on a Raspberry Pi without problems, and we can configure Surge so it
builds an ARM/x64 dual executable. But we don't have any Apple Silicon hardware. So what we've done is we have
made the Apple Silicon build available as a separate download with Surge only (without Surge Effect Bank), as part of the nightlies.

One of us will probably just buy an Apple Silicon-based machine before 1.8 ships, and then we will clean this up once we can test it.

If you do have and test on Apple Silicon, please hop on our <a href="{% include discord_invite_link %}">Discord</a> or <a href="https://github.com/surge-synthesizer/surge/issues">GitHub</a> to share bugs and experiences!
