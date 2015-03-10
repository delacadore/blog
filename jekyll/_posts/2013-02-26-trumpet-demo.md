---
layout:         post
title:          Trumpet Demo
date:           2013-02-26 00:49:01
categories:     portfolio
featured-image: trumpet.png
---
{% include image.html src="/images/trumpet_1.png" %}

This was the first C++ program that I produced as coursework for my MSc in Computer Games & Entertainment, which I am undertaking at Goldsmiths University currently. It's a simple demo using OpenAL and Box2D to allow the players to control a musical symbol (a quaver, if we want to be specific) in a 2D environment. Which happens to be a trumpet.

Box2D was used to add physics to the environment, which allowed me to quickly implement player movement and jumping, as well as collision with the instrument. The keys of the trumpet have prismatic joints, which allows the player to jump on them to activate different notes. When they jump off, the keys spring back up.

You can download the demo and source code [here](/download/trumpet.zip). It will run on windows and should also compile for OS X.

## More Images:
{% include image.html src="/images/trumpet_2.png" %}
{% include image.html src="/images/trumpet_3.png" %}
