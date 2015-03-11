# [liamness.co.uk](http://liamness.co.uk)

This is the source for my blog. It uses the static site generator [
jekyll](http://jekyllrb.com) to generate the html, and the task runner [gulp](http://gulpjs.com/) to do other things.

## Install Dependencies

If you're on a unixy system, run this:
```
sudo gem install jekyll
```
If on windows, first install ruby, then run the following in an elevated command prompt
```
gem install jekyll
```
Install [node](http://nodejs.org), then run
```
npm install -g gulp
npm install -g bower
npm install
bower install
```

## Build
```
gulp
```

## Run, watch for changes
```
gulp serve
```
