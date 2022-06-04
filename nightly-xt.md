---
layout: page
title: Surge XT 1.1 Beta
noheader: true
permalink: nightly_XT
---

We are planning a Surge XT 1.1 release around July 15th, 2022. You can test the beta today by downloading
the nightly build from this page.

The XT 1.1 beta includes many fixes and new features, including support for CLAP format, 
complete undo/redo history, and many accessibility improvements. The draft changelog for Surge XT 1.1 can be found <a href="nightlychangelog">here</a>.

<b>Download beta: {% include latest_xt_version %} built at {% include latest_xt_build_time %}</b>
<ul>
<li><a href="{% include latest_xt_win_x64_url %}">Windows 64-bit installer</a></li>
<li><a href="{% include latest_xt_macos_url %}">macOS DMG</a></li>
<li><a href="{% include latest_xt_linux_x64_url %}">Linux .deb (built on Ubuntu 20)</a></li>
<li> <a href="https://github.com/surge-synthesizer/releases-xt/releases/tag/Nightly">Other formats and options</a></li>
</ul>


You testing the beta is how the release gets good, though! We need and welcome your feedback, either on [GitHub](https://github.com/surge-synthesizer/surge/issues) or
[Discord](https://discord.gg/aFQDdMV). 

<!-- Also, even though the beta is in pretty good shape, it may still have bugs.
Please be careful, use a limiter, don't use in-ear headphones when experimenting and so forth, in case we
have made a DSP error and you run across it!
-->


Recent changes:

```
{% include git_nightly_xt_recent_five %}
```


<!--
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
-->

<!-- We keep the nightly changelog up to date by hand. It can lag the actual nightly by days or weeks, but is available
<a href="/nightlychangelog">here.</a> -->

