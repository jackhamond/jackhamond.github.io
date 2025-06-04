---
title: Recipes
permalink: /research/recipes/
layout: default
---

{% assign sorted_recipes = site.recipes | sort: "title" %}

{% for recipe in sorted_recipes %}
  <h2><a href="{{ recipe.url }}">{{ recipe.title }}</a></h2>
  {{ recipe.content }}
{% endfor %}
