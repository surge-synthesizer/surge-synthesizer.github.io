version.json in this folder
===========================

version.json declares the version that this manual is written for. The manual page
reads it and prints it in the hero section, below the screenshot:

    This manual is written for Surge XT 1.4 nightlies.

The release manual has its own copy at src/content/manual_xt/version.json, which
says just the version, without "nightlies".


Promoting the nightly manual to the release manual
--------------------------------------------------

When the nightly manual is ready to become the release manual, its contents are
copied over src/content/manual_xt/.

DO NOT copy version.json across. Edit the one already in src/content/manual_xt/
in place instead, setting it to the version being released.

Copying it would leave the release manual announcing itself as "1.4 nightlies",
which is wrong on a released manual, and the two files are deliberately never
supposed to hold the same value.

The same goes for this README - it describes the nightly folder and does not
belong in the release folder.


Why these files are .json and .txt
-----------------------------------

The content collection for this folder globs **/*.{md,mdx} and requires every
entry it finds to have "title" and "order" in its frontmatter. A version.md or a
README.md here would therefore be loaded as a manual chapter and fail validation,
breaking the site build. Any non-Markdown extension is invisible to that glob,
which is why these two are .json and .txt.
