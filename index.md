---
description: Structured Focused Writing
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

# Welcome

This is the user guide for [Bike](https://www.hogbaysoftware.com/bike/), an unusually fast and flexible outliner for your Mac.

Please let me know if you have questions, suggestions, or if you find errors. I'd like to make this guide as useful to you as possible.

Thanks,  
Jesse Grosjean  
jesse@hogbaysoftware.com  
[Hog Bay Software Support Forums](https://support.hogbaysoftware.com/c/bike/22)

<hr class="toc-separator" />

<div class="toc-columns">
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
  /* Up to 3 columns, but never narrower than 14rem, so the browser
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
  /* Match the border-less spacing of the surrounding list, not the
     top-bordered h3 rule vp-doc applies to page headings. */
  border-top: none;
  padding-top: 0;
}
</style>
