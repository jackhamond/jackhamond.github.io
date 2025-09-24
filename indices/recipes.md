---
title: Recipes
permalink: /research/recipes/
layout: default
---

<div class="recipes">
  {% for recipe in site.data.recipes %}
    <article class="recipe">
      <h2>{{ recipe.title }}</h2>
      <p><em>{{ recipe.description }}</em></p>

      <h3>Ingredients</h3>
      <ul>
        {% for item in recipe.ingredients %}
          <li>{{ item }}</li>
        {% endfor %}
      </ul>

      <h3>Steps</h3>
      <ol>
        {% for step in recipe.steps %}
          <li>{{ step }}</li>
        {% endfor %}
      </ol>
    </article>
  {% endfor %}
</div>

