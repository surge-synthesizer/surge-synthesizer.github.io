# surge-synthesizer.github.io

## Working with the website

For this site we are using a **Jekyll theme** named **Swiss**, which can be found [here.](https://github.com/broccolini/swiss) You can download **Jekyll** from [here.](https://jekyllrb.com/)

In order to make changes to the site you will need to follow standard operating procedures for working with GitHub pages and Jekyll sites that use themes. You will have to override styles with more specific CSS. You can also add more pages as HTML or `.md`, use front matter, etc.

Jekyll has a specific folder structure to generate sites from. It uses `.scss` files, layouts, etc. There is a bunch of stuff about using Jekyll and GitHub pages online. Since this was all entirely new to me, I won't attempt an in depth tutorial on all the moving pieces.

At a high level, what I did to make changes was create my own `_surge.scss` file, include that in the theme that we are using, and make changes to the `home.html` file. If you would like to make changes to styles, I would recommend making them in the `_surge.scss` file only.

# Use GitHub as CMS

You can follow a couple of different paths to make updates to the website. The easiest and most direct way is to use GitHub as a CMS.

To make changes this way, all you need to do is fork the project, create a branch, make changes locally, and then open a PR. [This "How to Git"](https://github.com/surge-synthesizer/surge/blob/main/doc/How%20to%20Git.md) document from the [Surge-Synthesizer](https://github.com/surge-synthesizer/surge) project outlines a suggested way of creating PRs.

Another option, using your new branch, is to click the edit button at the "pencil" button at the upper right corner of the GitHub editor, which should be available on all text documents, including HTML and CSS files.

## Using the command line and Jekyll, Bundler, and optionally Docker to get a more modern front end development experience.

Being comfortable using a command line and understanding how to get everything installed with the correct file permissions will be key. On a Mac, this meant I installed an updated version of Ruby in a different location that was in `$PATH`, and had correct read/write permissions. To accomplish this goal, I used `rbenv` and `bundler` to get Ruby, and `bundler` to install Jekyll.

Following this Mac specific tutorial is a pretty good way to set up Ruby and to get gems installed without beating your head against a wall; caveat emptor applies though: [Moncef Belyamani - Fastest and Easiest Way To Install Ruby on a Mac](https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/?utm_source=stackoverflow&utm_campaign=51126403#step-2-install-chruby-and-the-latest-ruby-with-ruby-install)

By the time you have Ruby installed on macOS successfully, you can run the commands below:

```
$ gem install jekyll
$ gem install bundle
$ git clone https://github.com/surge-synthesizer/surge-synthesizer.github.io.git
$ cd surge-synthesizer.github.io
$ bundle install
$ bundle exec jekyll server
```

After you successfully get through the above, the live version of the site will be running at `localhost`. From this point, you can open a text editor and make changes to files. Upon saving the files and refreshing the browser, you will see the changes appear.

## Docker

You can use Docker to help with all of this stuff. That requires for you to have a Docker account. It will also provide a live version of your site at `localhost`. Super useful if you are changing files often.

If you have Docker installed, you should be able to run the project by switching to the root dir and running:

```
$ rm Gemfile.lock ; docker run --rm -it -v "$(pwd)":/usr/src/app -p 4000:4000 starefossen/github-pages ; git checkout Gemfile.lock
```

# The Skin Library

The Skin library is part of this repository, but its assets now live in the [surge-extra-content](https://github.com/surge-synthesizer/surge-extra-content) repository. Correct procedure for additions is to upload the assets to that location, and link them into the Skin Library from there. Compare to the markdown of previous entries for reference. 
