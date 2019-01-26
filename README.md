# surge-synthesizer.github.io

## Working with the website

For this site we are using a Jekyll theme. 

It is named Swiss and can be found [here.](https://github.com/broccolini/swiss)

You can download Jekyll from [here.](https://jekyllrb.com/)

In order to make changes to the site you will need to follow SOP for working with GitHub pages and Jekyll sites that use themes. You will have to over-ride styles with more specfic CSS, you can add more pages as HTML or .md, there is front matter, etc. 

Jekylly has a specfic folder structure it looks at to generate sites from. It uses .scss files, layouts, etc. There is a bunch of stuff about using Jekyll and GitHub pages online. Since this was all entirely new to me I won't attempt an in depth tutorial on all the moving pieces.

At a high level, what I did to make changes was create my own surge.scss file. Include that in the theme that we are using. Then made changes to the home.html file. If you would like to make changes to styling I would reccomend adding it the surge.scss file only.

# Use GitHub as CMS

You can follow a couple of differnt pathes to make updates to the website. The easiest and most direct way to do that is simply use GitHub as a CMS. This can get most of the simple things you want to change done. 

To make changes this way, all you need to is fork the project. Once you have done that you can create a branch on your fork make changes and then open a PR. [This](https://github.com/surge-synthesizer/surge/blob/master/doc/git-howto.md) git document for the OSS Surge-Synthesizer project outlines a suggested way of doing work and then creating PR's. 

Once you have created a branch in your fork you can then just click the edit button (upper right corner) which should be available on all text documents. Meaning, since the site is all html and css you can just edit stuff in place in the GitHub editor. 

## Using the command line and Jekyll, Bundler, and optionally Docker to get a more modern front end development experience. 

Being comfortable using a command line and understanding how to get everything installed with the correct file permissions level will be key. On a Mac, this meant I installed an updated version of Ruby in a different location that was in $PATH and had correct read/write permissions.

To accomplish this goal, I used rbenv and bundler to get Ruby installed, used bundler to install Jekyll. Once I had done that I made sure to use a comand line to go to my GitHub fork directory on my hard drive. 

Once there I would run:
```bundle exec jekyll serve```
Which provided me with a live version of the site at localhost.

Then I could open a text editor and make changes to files.
Save the file.
Refresh broswer.
See change.

Docker helps on the last point. See below.

## Docker
You can use Docker to help with all of this stuff. That requires you to have an account. It will also provide a live version of your site at localhost. Super useful if your changing files often.

If you have Docker installed, you should be able to run the project by switching to the root dir and running:

```docker run --rm -it -v "$(pwd)":/usr/src/app -p 4000:4000 starefossen/github-pages```
