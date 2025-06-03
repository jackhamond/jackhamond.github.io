---
title: "Poems"
---

{% assign poems = site.pages | where_exp: "page", "page.path contains '/research/creatio/poetry/' and page.path != '/research/creatio/poetry/index.md'" %}
{% assign sorted_poems = poems | sort: "title" %}

{% for poem in sorted_poems %}
## [{{ poem.title }}]({{ poem.url }})

*By {{ poem.author }}*

{{ poem.excerpt }}

{% endfor %}

*By Rudyard Kipling*  

Open the old cigar-box, get me a Cuba stout,  
For things are running crossways, and Maggie and I are out.  

