---
title: "Poems"
---

{% assign poems = site.pages 
  | where_exp: "page", "page.path contains '/research/creatio/poetry/' and page.path != '/research/creatio/poetry/index.md'" 
%}
{% assign sorted_poems = poems | sort: "title" %}

{% for poem in sorted_poems %}
## [{{ poem.title }}]({{ poem.url }})

*By {{ poem.author | default: "Anonymous" }}*

{{ poem.excerpt }}

{% endfor %}
