---
title: "Personal Library"
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
      <strong>LCC:</strong> {{ book.lcc }}<br>
      <strong>Tags:</strong> {{ book.tags | join: ", " }}<br>
      <strong>Notes:</strong> {{ book.notes }}
    </li>
    <hr>
  {% endfor %}
</ul>
