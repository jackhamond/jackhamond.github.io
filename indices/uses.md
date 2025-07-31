---
layout: default
title: "My Uses"
---

<h1>Things I Use</h1>

{% assign sorted_uses = site.data.uses | sort: 'section' %}

{% capture current_section %}{% endcapture %}

{% for item in sorted_uses %}
  {% if item.section != current_section %}
    <h2>{{ item.section }}</h2>
    {% assign current_section = item.section %}
  {% endif %}

  <div class="use-item">
    <h3>{{ item.name }} <span class="item-type">({{ item.type }})</span></h3>
    <p>{{ item.note }}</p>
    <p><strong>Tags:</strong> {{ item.tags | join: ', ' }}</p>
  </div>
{% endfor %}
