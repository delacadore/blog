---
layout:         post
title:          L-System Viewer
date:           2013-02-26 01:39:32
categories:     portfolio
featured-image: lsystem.png
---
{% include image.html src="/images/lsystem_1.png" %}

This was the first piece of coursework I submitted for the 'Maths and Graphics' portion of my MSc. We were asked to produce a program which could read a set of rules from a local file, and produce a graphical representation of the respective [Lindenmeyer system](https://en.wikipedia.org/wiki/L-system). Known as l-systems for short, these are rewriting systems which use simple, recursively applied rules to represent complex natural phenomena.

Using the RTVS_Lite framework as a starting point, I implemented a system that could write a 'tree' to a null-terminated string by iteratively applying a rule (or rules), which had been read from a file. I then added a parser so that the program could read this string, and produce a series of graphical primitives (lines) to represent the tree. Some parameters relating to the display of the tree, such as branch angle and zoom level, can also be adjusted by the user in realtime. They can also switch between configuration files, so they can view different sample trees.

You can download the demo and source code [here](/download/lsystem.zip). DirectX9 is required.

## More Images:
{% include image.html src="/images/lsystem_2.png" %}
{% include image.html src="/images/lsystem_3.png" %}
