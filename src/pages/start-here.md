---
layout: layouts/page.njk
title: Start here
description: New to the blog? Welcome. Here's the best way to find your way around.
permalink: /start-here/
---

Welcome, I'm really glad you're here.

This blog is about **understanding your mind and using that understanding to live better**. I take ideas from psychology research and turn them into something you can actually use, with a few personal reflections along the way.

## 1. Read these first

{% for post in collections.posts | featured | limit(5) %}
- [{{ post.data.title }}]({{ post.url }}): {{ post.data.description }}
{% endfor %}

## 2. Explore by topic

{% for t in site.topics %}
- **[{{ t.name }}](/topics/{{ t.name | slugify2 }}/)**: {{ t.description }}
{% endfor %}

## 3. Get new posts by email

If you'd like one thoughtful email a week, [subscribe to my newsletter]({{ site.newsletterUrl }}). It's free, and you can leave anytime.

## 4. Say hello

Have a question or a story to share? Write to me at [{{ site.email }}](mailto:{{ site.email }}). I read every message.
