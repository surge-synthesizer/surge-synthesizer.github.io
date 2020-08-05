---
layout: page
title: Virus Warnings on Windows
noheader: true
permalink: viruses
---

Occasionally, users will get virus warnings when downloading one of our executables and ask if Surge has a virus.

**We have a very high degree of confidence that our binaries do not contain windows viruses.** We believe these virus
scans are false positives. But we thought it useful to share information for users who ask.

1. Surge is open source. You can review the entire code at https://github.com/surge-synthesizer/surge and each release has
   a branch and signed tag associated with it. For isntance, this is exactly the source that was used to build the
   1.7.1 binaries: https://github.com/surge-synthesizer/surge/tree/release_1.7.1
   
2. We do not build binaries for distribution on personal developer machines, rather we use the free Microsoft Azure Pipelines for all our
   builds (and are grateful to Microsoft for providing these!). That means each build of surge is done on a brand new,
   never before used, just booted linux, mac, or windows image provided by microsoft. It is incredibly unlikely that our
   build host has a virus.
   
3. The only process we use between the source and our binary is to compile it using the compile instructions on our readme,
   package it using innosetup (which we retrieve via nuget from the nuget repository), and an upload to GitHub. All of 
   these steps use source controlled build commands which are on our github.
   
4. The binary assets (the patches and wavetables) are only loaded by surge.

5. And finally, for completeness, it goes without saying that we review our code regularly, and the code is a synth, not a virus.

Each of these statements are ones you can verify using the transaction log or pull request history at GitHub. We hope they help you draw the same
conclusion we drew, that the scan results are false positives.

But if these answers don't give you confidence you don't have to trust us! The binaries are a convenience we provide to
our users, but you can easily build your own binary too. The tools to compile Surge on all our platforms are free, and
the instructions on the README are clear. If you worry our binary has a virus, scan your system, clone surge, scan the individual
source files, install a compiler, scan the compiler, and execute a build. That surge will be fully functional and you will
have surety of provenance on the binary you are running.

    
