---
title: "Poems"
layout: default
permalink: /research/poems
---

{% assign sorted_poems = site.poems | sort: "title" %}

{% for poem in sorted_poems %}
## [{{ poem.title }}]({{ poem.url }})

*By {{ poem.author | default: "Anonymous" }}*

{{ poem.excerpt }}

{% endfor %}
