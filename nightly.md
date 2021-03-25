---
layout: page
title: Surge 1.9 Beta
noheader: true
permalink: nightly
---

Welcome to the Surge 1.9 Beta Page. 

We released Surge 1.8.1 in January 2021, and are planning to release Surge 1.9 in late April
or early May of 2021. The 1.9 release candidate contains many new features including 4 new oscillators
and 14 new FX! You can read the nightly changelog <a href="/nightlychangelog">here.</a>

There's no real difference between a Surge Nightly and a Beta, except that late in the release cycle
we get confident that the nightly is pretty good, and so call it a Beta. At this point we think the
bugs are mostly gone, the features all work, and barring an unforseen error, patches made with this
Beta should work in the 1.9 production release (the one exception here is we may still make some 
tweaks to the Ensemble effect parameters in one or two cases).

You all testing the beta is how the release gets good though! We need and welcome your feedback either on github or
on discord. And even though the Beta is in pretty good shape, it may still have bugs. Please be
careful, use a limiter, don't use in-ear headphones when experimenting, and so forth, in case we
have made a DSP error and you run across it.

Finally, enjoy making music with Surge!

<!--
This page allows you to get the nightly version of Surge. 

We released Surge 1.8.1 in January and are now working towards a Surge 1.9 release
in April. We are getting close to feature complete and bug resolved, so this nightly
is becoming more stable, but has many new features and still some known bugs. We are
almost ready to call this nightly the 1.9 beta, but not quite, basically!

You can always go and install
1.8 again if the nightly is broken, but at this point in the cycle, 
we think that making music with the nightly is reasonably likely to work.

As with all nightlies, here's no guarantee that
features in this nightly will be in a production release or that patches streamed
with this nightly will load in future production releases. But this late in the 1.9
cycle we are confident that our changes would be small. Other than Treemonster and
one edge case in Twist, we have no parameter changes planned which would break streaming,
and are cofident that the feature set here is the one we will ship.
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

<!--
We keep the nightly changelog up to date by hand. It can lag the actual nightly by days or weeks, but is available
<a href="/nightlychangelog">here.</a>
-->

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

