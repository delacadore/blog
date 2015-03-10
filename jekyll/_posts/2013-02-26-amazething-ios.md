---
layout:         post
title:          AMazeThing iOS
date:           2013-02-26 02:28:53
categories:     frontpage portfolio
featured-image: amazething.png
---
This was a group project, with [Alberto Toglia](http://toglia3d.com/), [Lorenzo Mori](http://lorenzomori.com/), [Harry Evans](http://harry-evans.com/), [Will Masek](http://himynameiswill.co.uk/) and myself collaborating to create an iOS app. We were asked to produce a "creative" mobile application using [openFrameworks](http://openframeworks.cc/), and chose to make this ball maze game (with a particularly clever name). openFrameworks is a cross-platform library designed to make it easier to produce portable code, and it has found widespread use in contemporary digital art.

{% include video.html src="http://player.vimeo.com/video/60119794" %}

I scripted the sounds for the collision / rolling, and therefore had to implement a function which could respond to collision callbacks. This involved modifying the add-on library we were using (ofxBullet, which unsurprisingly is the Bullet physics library repurposed to hook into OF) a bit, as the standard functions weren't giving us the data (the lifetime of each collision) we needed. I also helped design and implement the user interaction, for example the pinch to zoom function.

We hope to get it up on the app store at some point, and are looking into porting it onto the Android platform. We're also going to collaborate further to bring the application to desktop platforms, possibly with Kinect support.
