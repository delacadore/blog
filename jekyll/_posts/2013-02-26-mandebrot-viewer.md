---
layout:         post
title:          Mandelbrot Viewer
date:           2013-02-26 02:09:41
categories:     portfolio
featured-image: mandelbrot.png
---
{% include image.html src="/images/mandelbrot_1.png" %}
This was a group project, in which [Harry Evans](http://harry-evans.com/) and myself produced a viewer for the Mandelbrot set. This was once again done using the RTVS_Lite framework, though this time we worked more directly with DirectX9, writing the image to a texture, and then drawing the texture onto a quad.

In retrospect this was quite a bad idea. The performance of the app is not very good, and would have been better if we'd drawn the image using a fragment shader. I've since used this approach to port the viewer into a web app. However there are some nice features to the application, such as the ability to read configuration files that specify colour schemes, and the ability to 'drag-to-zoom'.

You can download the demo and source code [here](/download/mandelbrot.zip). DirectX9 is required.

## More Images:
{% include image.html src="/images/mandelbrot_2.png" %}
{% include image.html src="/images/mandelbrot_3.png" %}
