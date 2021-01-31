---
layout: page
title: Surge Nightly
noheader: true
permalink: nightly
---

This page allows you to get the nightly version of Surge. 

We have recently released
Surge 1.8.1. We are planning a 1.8.2 release later this spring (march, maybe april) and
this nightly reflects the move towards that. The nightly is undergoing quite a lot of change 
right now, adding several effects some of which can crash. Please be careful. 
<!--

As such, it may be substantialy less stable than 1.8. You can always go and install
1.8 again if the nightly is broken, but at this point in the cycle, if you want to make
music with Surge we recommend caution with the nightly.

As with all nightlies, but especially early in the cycle, there's no guarantee that
features in this nightly will be in a production release or that patches streamed
with this nightly will load in future production releases.
-->

<b>Build: {% include latest_version %} built at {% include latest_build_time %}</b>

<ul>
<li><a href="{% include latest_macos_url %}">macOS 64-bit fat (Intel/Apple Silicon) binary</a> </li>
<li><a href="{% include latest_linux_x64_url %}">Linux 64-bit</a></li>
<li><a href="{% include latest_win_x64_url %}">Windows 64-bit</a> <!-- or <a href="{% include latest_win_x64_zip_url %}">Windows 64-bit Portable ZIP</a>--></li>
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

