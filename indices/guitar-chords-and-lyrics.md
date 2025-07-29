---
title: "Guitar Chords and Lyrics"
layout: default
permalink: /research/guitar-chords-and-lyrics
---

{% assign sorted_guitar-chords-and-lyrics = site.guitar-chords-and-lyrics | sort: "title" %}

{% for song in sorted_guitar-chords-and-lyrics %}
## [{{ song.title }}]({{ song.url }})

*{{ song.artist }}*

{% endfor %}
