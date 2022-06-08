---
layout: page
title: Virus Warnings on Windows
noheader: true
permalink: viruses
---

Occasionally, users will get virus warnings when downloading one of our executables and ask if Surge XT has a virus.

**We have a very high degree of confidence that our binaries do not contain viruses.** We believe these virus
scans are false positives. But we thought it useful to share information for users who ask.

1. Surge XT is open source. You can review the entire code at https://github.com/surge-synthesizer/surge and each release has
   a branch and signed tag associated with it. For instance, [this is exactly the source that was used to build the
   1.7.1 binaries](https://github.com/surge-synthesizer/surge/tree/release_1.7.1).
   
2. We do not build binaries for distribution on personal developer machines, instead we use the free Microsoft Azure pipelines for all our
   builds (and are grateful to Microsoft for providing these for free to open source projects!). That means each build of Surge XT is done on a brand new,
   never before used, freshly booted Linux, macOS, or Windows image provided by Microsoft. It is incredibly unlikely that our
   build host has a virus.
   
3. The only process we use between the source and our binary is to compile it using the compile instructions in our README,
   package it using InnoSetup (which we retrieve via NuGet from the NuGet repository), and an upload to GitHub. All of 
   these steps use source-controlled build commands which are on our GitHub.
   
4. The binary assets (patches and wavetables) are only loaded by Surge XT.

5. Finally, for completeness, it goes without saying that we review our code regularly, and the code is a synth, not a virus!

Each of these statements are ones you can verify using the transaction log or pull request history at GitHub. We hope they help you draw the same
conclusions we drew - that the scan results are false positives.

But if these answers don't give you confidence, you don't have to trust us! Downloadable binaries are a convenience we provide to
our users, however you can easily build your own binary, too. The tools to compile Surge XT on all our platforms are free, and
the instructions in our README are clear. If you worry our binaries have a virus, scan your system, clone Surge XT repository, scan the individual
source files, install a compiler, scan the compiler, and execute a build. That Surge XT build will be fully functional and you will
have surety of provenance on the binary you are running.
