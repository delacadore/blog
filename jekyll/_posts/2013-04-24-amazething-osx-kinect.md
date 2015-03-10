---
layout:         post
title:          AMazeThing OSX + Kinect
date:           2013-04-24 23:48:59
categories:     frontpage portfolio
featured-image: kinect.png
---
This was a continuation of a previous group project, the details of which can be found [here]({% post_url 2013-02-26-amazething-ios %}). As we had to produce an interactive application for our course which used some aspect of computer vision (the acquiring and processing of image data), we decided to port our original application to use 3D motion controls, by way of a Kinect. You can watch a live demo below:

{% include video.html src="http://player.vimeo.com/video/63683246" %}

My role was to research the potential methods for Kinect integration, and I was also primarily responsible for implementing these controls into a 'snapshot' of the iOS version, while development continued apace on the full version. Roles were fluid though, and we often found ourselves all working on one or the other when an issue arose. We chose to implement motion controls using the [ofxOpenNI](https://github.com/gameoverhack/ofxOpenNI) addon, which allowed us to easily implement skeleton tracking, and use the co-ordinates from each joint of the skeleton as input. A gesture-based control system was designed and used to create an intuitive experience.

We have continued to develop the iOS app in parallel, and hope to release it to the app store soon.
