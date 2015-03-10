---
layout:         post
title:          Set-Piece Specialist
date:           2013-04-25 00:01:22
categories:     frontpage portfolio
featured-image: setpiece.jpeg
---
Set-Piece Specialist is my first ever game, or at least the first I have ever made from scratch. You can [click here](/setpiece-specialist) and try it out, as long as you are using a WebGL capable browser. It is a free kick simulator, where the player must try to score from increasingly difficult positions. They can control the power, direction and spin of the ball, all of which affect its flight in a realistic manner.

{% include image.html src="/images/setpiece_1.jpeg" %}

I am developing it partly to produce a physics-based demo for my course, but I hope it will become more than that. It uses [three.js](http://mrdoob.github.io/three.js/) to help with the graphics, and [cannon.js](http://schteppe.github.io/cannon.js/") for physics. To simulate the 'bend' of the ball, it was necessary to implement my own solution to extend cannon.js. This was achieved by simulating the magnus effect; when a spinning ball is travelling over a certain velocity, turbulence is created on the side which is spinning against the direction of movement. By computing the cross product of positional and angular velocity, we find the effect of this turbulence. I've only just started developing the game over the past week, in between other things, so it is pre-alpha at this point. I will update this post as I continue to refine the gameplay and add features.

## More Images:
{% include image.html src="/images/setpiece_2.jpeg" %}
{% include image.html src="/images/setpiece_3.jpeg" %}
