---
layout:         post
title:          Fractal Viewer
date:           2013-02-26 03:00:16
categories:     frontpage portfolio webgl
featured-image: fractal.png
---
This is a web app, and you are on the web, so you should really [click here and try it](/fractal-viewer). As long as you're not on a mobile device, or using internet explorer, it should just work! Actually if you are using a more recent Android device which can run Chrome (anything with an ARMv7 processor and running 4.0+), then it should work with a flag enabled. I would like to hear from you if you try this!

{% include image.html src="/images/fractal_1.png" %}

Are you back? Then I will tell you about about the app, how I made it, and a bit about my feelings concerning WebGL. Firstly, most of the UI is implemented using javascript and jquery, which despite me having next to no experience with I found very easy to hit the ground running with. The application was largely built during one single evening, which is testament to that. The UI passes the required values into the javascript functions I wrote, which then pass the processed data as uniforms to the fragment shader.

So what we have here is an application built using a mixture of javascript and GLSL. This allows for a mixture of very quick and flexible development for the UI, and very high performance for the repetitive and costly calculations required to respond to user interaction, as they can be performed on the GPU with optimised code. So not only does it have a relatively intuitive UI which I was able to build quickly, but it can respond to user input in realtime and generate high quality images.

The project is named 'fractal viewer' and not 'Mandelbrot viewer' because I hope in the future to extend the program to display other fractals. The shader aside, the framework could be applied to represent any mathematical set. I also think the colourisation and mouse controls could be improved upon. I'll make further posts when I have time to work on it further.
