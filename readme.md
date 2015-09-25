# [liamness.co.uk](https://liamness.co.uk)

This is the source for my blog. It uses the static site generator [
jekyll](https://jekyllrb.com) to generate the html, and the task runner [gulp](https://gulpjs.com/) to do other things.

## Install Dependencies

If you're on a unixy system, run this:
```
sudo gem install jekyll
```
If on windows, first install ruby, then run the following in an elevated command prompt
```
gem install jekyll
```
Install [node](https://nodejs.org), then run
```
npm install -g gulp
npm install
```

## Build
```
gulp
```

## Run, watch for changes
```
gulp serve
```
