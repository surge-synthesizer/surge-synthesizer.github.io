---
layout: page
title: Surge XT 1.1 Beta
noheader: true
permalink: nightly_XT
---

<b>Current build: {% include latest_xt_version %} built at {% include latest_xt_build_time %}</b>

You can always find the beta release in <a href="https://github.com/surge-synthesizer/releases-xt/releases/tag/Nightly">every available format here</a>, but for convenience,
direct download links for our most popular platforms are below. 

<ul>
<li><a href="{% include latest_xt_win_x64_url %}">Windows 64-bit .exe installer</a></li>
<li><a href="{% include latest_xt_macos_url %}">macOS .dmg installer</a></li>
<li><a href="{% include latest_xt_linux_x64_url %}">Linux .deb installer (built on Ubuntu 20)</a></li>
</ul>

Note that the direct links can break for 90-120 seconds while we are releasing a new build, but the <a href="https://github.com/surge-synthesizer/releases-xt/releases/tag/Nightly">all formats link</a> is always valid.

The draft changelog can be found <a href="nightlychangelog">here</a>.

Testing the beta is how the release gets good, though! We need and welcome your feedback, either on [GitHub](https://github.com/surge-synthesizer/surge/issues) or
[Discord](https://discord.gg/aFQDdMV). 

Recent changes:

```
{% include git_nightly_xt_recent_five %}
```

## Caveats

Please take a moment to understand the nightlies. We automatically build Surge XT on all our
platforms with every commit to our <a href="https://github.com/surge-synthesizer/surge">main</a> branch. This means
the code you are about to download may be minutes old. Depending on the pace of development at Surge Synth Team,
the code could contain bugs, new features which don't work, and may even end up making patches that
future Surge versions load differently, incorrectly, or not at all.


Our minimum advice if you use a nightly is to <b>use a limiter on the output</b>. We have made DSP errors in the nightlies before
which created nasty clicks and pops, in worst cases sudden blasts of noise.


But despite the above warning, we work really hard to have the nightlies be great. Most of Surge Synth Team runs the nightly in their
music-making environment, and the software is generally stable and robust. Also, using the nightly, finding a bug, and letting us
know is how bugs get fixed. For more on that, learn how to <a href="/feedback">contact us with questions and comments.</a>

