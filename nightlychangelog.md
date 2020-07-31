---
layout: page
title: Nightly Changelog
noheader: true
permalink: nightlychangelog 
---

<p>
We keep this changelog somewhat up to date with the nightly and when we do
a release, copy it into the main changelog. This log is updated as of 467d41fde30.
</p>
<p>
Draft 1.7.1 Changelog
</p>

<p>
  So, testing is hard. We're a scrappy rag tag group of volunteers facing an army of
  diverse operating systems, DAWs, environments, build flags, and so on. We're really happy
  that all the new features in 1.7.0 worked! But upon release we found some of the environmental
  stuff didn't, so did a quick 1.7.1 release afterwards which includes the following fixes,
  most of which were cause by us doing a substantial upgrade to our build infrastructure with
  1.7.0. We still have a swath of features planned for the 1.7 series, and expect a 1.7.2 with
  some new features and effects in Autumn 2020.
</p>

<ul>
  <li>macOS</li>
  <ul>
    <li>Make the VST3 work in Abelton Live for mac (by doing a blank-signing of the bundle)</li>
    <li>Restore compatability back to OS 10.9 (by building mac at C++-14 level).</li>
    <li>Change the support file lookup semantic to always use the newest support files</li>
  </ul>
  <li>Linux and FreeBSD</li>
  <ul>
    <li>Activate an Ubuntu-20 Clang-10 build and resolve bugs</li>
    <li>Remove a set of warnings that stop Clang-9 from building, allowing Surge to build on FreeBSD</li>
  </ul> 
  <li>Windows</li>
  <ul>
    <li>Modify the VST3 Zoom Failure handler, which would cause an infinite loop in Zooms on Studio One in some situations.</li>
    <li>Change our build pipeline so the 64 bit Windows installer installs the 64 bit SurgeEffectsBank</li>
  </ul> 
  <li>All Platforms</li>
  <ul>
    <li>Add greatly improved labels on value menus for Filter Subtypes and Envelope Attacks</li>
    <li>Improve error messages for missing skins</li>
    <li>Add a 'Zoom to Default' menu item which zooms to the user default setting</li>
  </ul>
</ul> 
    
