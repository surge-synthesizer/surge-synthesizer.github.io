---
layout: page
title: Surge XT Alpha
noheader: true
permalink: nightly_XT
---

This page allows you to download the Surge XT Alpha product. **If you want to make music
with Surge, we strongly recommend you use Surge 1.9**. Right now the dev team uses 1.9 for music
and XT for dev. But XT installs with a different ID and Library so you can use both side by side.

<b>Build: {% include latest_xt_version %} built at {% include latest_xt_build_time %}</b>

<a href="https://github.com/surge-synthesizer/releases-xt/releases/tag/Nightly">Get the build here</a>

```
{% include git_nightly_xt_log_long_display %}
```


## Caveats

Please take a moment to understand the nightlies. We automatically build Surge on all our 
platforms with every commit to our <a href="https://github.com/surge-synthesizer/surge">main</a> branch. This means
the code you are about to download may be minutes old. Depending on the pace of development at Surge Synth Team,
the code could contain bugs, new features which don't work, and may even end up making patches that
future Surge versions load differently, incorrectly, or not at all.

Our minimum advice if you use a nightly is to <b>use a limiter on the output</b>. We have made DSP errors in the nightlies before
which created nasty clicks and pops, in worst cases sudden blasts of noise.

And at this point in the XT-rebuild cycle, the nightlies are a little rocky. You probably want to 
at least hang out on discord a bit if you find something wrong. There's plenty wrong still.

<!--
But despite the above warning, we work really hard to have the nightlies be great. Most of Surge Synth Team runs the nightly in their
music-making environment, and the software is generally stable and robust. Also, using the nightly, finding a bug, and letting us
know is how bugs get fixed. For more on that, learn how to <a href="/feedback">contact us with questions and comments.</a>
-->

<!-- We keep the nightly changelog up to date by hand. It can lag the actual nightly by days or weeks, but is available
<a href="/nightlychangelog">here.</a> -->

