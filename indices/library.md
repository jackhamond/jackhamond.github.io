---
title: "Personal Library"
layout: library
permalink: /library/
---

<ul>
  {% assign books = site.data.library | sort: "title" %}
  {% for book in books %}
    <li>
      <strong>{{ book.title }}</strong>  
      {% if book.link %}
        <a href="{{ book.link }}" target="_blank" title="Open external link">🔗</a>
      {% endif %}
      <br>
      <em>by {{ book.author }}</em> ({{ book.published }})<br>
    </li>
    <hr>
  {% endfor %}
</ul>
