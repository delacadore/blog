---
layout:         post
title:          Realtime Waves in DirectX9
date:           2013-04-24 23:30:14
categories:     portfolio
featured-image: waves.png
---
{% include video.html src="http://www.youtube.com/embed/FMQkp-FelX8" youtube=true %}

This was the third deliverable for the Maths and Graphics portion of my course. We were asked to produce a realtime representation of ocean waves, depicting their swells and ripples in 3D, using the RTVS_Lite framework. I produced a program which modelled waves as a 128 * 128 plane and allowed the user to adjust its appearance. You can see this program in action above.

The program displaces the y position at each vertex every frame, and updating the normals accordingly so the lighting will react to the changes. The open-source library AntTweakBar is used to allow the user to easily adjust the appearance of the ocean surface. Up to 6 different waves can be added, with amplitude, wave period, and wave origin all easily adjustable. A skybox is also used to enhance the realism, with the user being able to switch between three backgrounds at will.
