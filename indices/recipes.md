---
title: Recipes
permalink: /research/recipes/
layout: default
---

<div class="recipes">
  {% for recipe in site.data.recipes %}
    <article class="recipe">
      <h2><u>{{ recipe.title }}</u></h2>
      <p><em>{{ recipe.description }}</em></p>
      <h4>Steps</h4>
      <ol>
        {% for step in recipe.steps %}
          <li>{{ step }}</li>
        {% endfor %}
      </ol>
    </article>
  {% endfor %}
</div>

