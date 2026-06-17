---
layout: home
description: Structured Focused Writing

hero:
  name: "Bike Guide"
  text: "Think, write, organize."
  tagline: The user guide for Bike — an unusually fast and flexible outliner for your Mac.
  actions:
    - theme: brand
      text: Getting Started
      link: /getting-started
    - theme: alt
      text: Why Bike?
      link: /why-bike
    - theme: alt
      text: Download Bike
      link: https://www.hogbaysoftware.com/bike/
---

<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { theme } = useData()

// Build the contents list straight from the sidebar in .vitepress/config.mjs,
// so this page stays in sync automatically. Drop any self-link to the home page.
// Match VitePress's default link rewriting (cleanUrls off → ".html"),
// since dynamic :href values aren't transformed the way static links are.
const withExt = (link) =>
  link.startsWith('/') && !link.endsWith('.html') ? `${link}.html` : link

const contents = computed(() =>
  (theme.value.sidebar || []).map(group => ({
    text: group.text,
    items: (group.items || [])
      .filter(item => item.link && item.link !== '/')
      .map(item => ({ text: item.text, link: withExt(item.link) })),
  })).filter(group => group.items.length)
)
</script>

Welcome to the Bike User Guide!

Please let me know if you have questions, suggestions, or if you find errors. I'd like to make this guide as useful to you as possible.

Thanks,  
Jesse Grosjean  
jesse@hogbaysoftware.com  
[Hog Bay Software Support Forums](https://support.hogbaysoftware.com/c/bike/22)

<hr class="toc-separator" />

<div class="vp-doc toc-columns">
  <div class="toc-group" v-for="group in contents" :key="group.text">
    <h3>{{ group.text }}</h3>
    <ul>
      <li v-for="item in group.items" :key="item.link">
        <a :href="item.link">{{ item.text }}</a>
      </li>
    </ul>
  </div>
</div>

<style scoped>
.toc-separator {
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  /* Equal space above and below the separator. */
  margin: 2.5rem 0;
}

.toc-columns {
  /* Up to 3 columns, but never narrower than 14rem — the browser
     drops to 2 then 1 column on its own as the viewport shrinks. */
  column-width: 14rem;
  column-count: 3;
  column-gap: 2.5rem;
}

.toc-columns .toc-group {
  /* Keep each group's heading and links together in one column. */
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  /* Space groups with bottom *padding*, not margin. A margin at a column
     break gets carried to the top of the next column, pushing that column's
     first heading down (ragged top). Padding lives inside the unbreakable
     group box, so every column starts flush at the top. */
  margin: 0;
  padding-bottom: 1.75rem;
}

.toc-columns .toc-group h3 {
  margin-top: 0;
}
</style>

<style>
/* The hero's default bottom padding leaves too much space above the
   "Welcome…" text. Match it to the space *above* the action buttons
   (the hero actions' top padding: 24px, then 32px at >= 640px). */
.VPHome .VPHero {
  padding-bottom: 24px !important;
}

@media (min-width: 640px) {
  .VPHome .VPHero {
    padding-bottom: 32px !important;
  }
}

/* Constrain the home page's text content to the same max width as a normal
   doc page's text column. VitePress caps that column with
   `.content-container { max-width: 688px }`; the home layout otherwise lets
   this content run to 1152px. (Hero and features stay full width.) */
.VPHome .vp-doc.container {
  max-width: 688px;
}
</style>
