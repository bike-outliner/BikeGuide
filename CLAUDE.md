# CLAUDE.md

## Overview

BikeGuide is the Markdown-based user documentation for the Bike outliner application. It is built with [VitePress](https://vitepress.dev/) and serves as the official user guide for Bike 2.

## Local Development

```sh
npm install
npm run dev      # start the dev server with live reload (http://localhost:5173/)
npm run build    # build the static site (also acts as a link/syntax check)
npm run preview  # preview the built site
```

`npm run build` is a useful sanity check — it fails on broken Vue/markdown syntax (e.g. an unclosed inline `<kbd>` tag) and on dead internal links.

Note the dev server serves the guide at `http://localhost:5173/bike/guide/`, not at `/` — the site is configured with `base: '/bike/guide/'` (see Publishing below).

## Publishing

The guide is published as part of the hogbaysoftware.com website at `https://www.hogbaysoftware.com/bike/guide/`. The two repos stay separate: the guide is built here and its output is committed into the website repo, which copies it through verbatim.

```sh
npm run publish-guide   # vitepress build + rsync into ../../hogbaysoftware.com/guide/
```

Then commit in **both** repos and push. The website's normal Netlify build picks it up — editing a page here does not reach the web until you run `publish-guide` and commit the website repo.

Set `HBS_SITE` if your hogbaysoftware.com checkout isn't at `../../hogbaysoftware.com`.

The moving parts:

- `base: '/bike/guide/'` in `.vitepress/config.mjs`. Because of this, any **dynamic** `:href` in a `<script setup>` block must be wrapped in `withBase()` — VitePress rewrites static markdown links automatically, but not dynamic bindings. `index.md` does this for its generated table of contents.
- `eleventyConfig.addPassthroughCopy({ "guide": "bike/guide" })` in the website's `.eleventy.js`. The output lives outside the website's `src/` so Eleventy never runs the HTML through Nunjucks.
- A `noindex, nofollow` meta tag in `head`, because Bike 2.0 is still in preview — the guide is reachable but deliberately not advertised or indexed. **Remove it at launch**, along with adding a link from the website's Bike page.

## Repository Structure

```
BikeGuide/
├── index.md                     # Landing page (site root)
├── getting-started.md           # Top-level pages live at the repo root
├── why-bike.md
├── keyboard-shortcuts.md
├── glossary.md
├── using-bike/                  # End-user documentation
│   ├── outline-editing.md
│   ├── using-scripts.md
│   ├── command-line-interface.md # `bike` CLI overview
│   └── ...
├── using-bike-advanced/         # Developer/power-user documentation
│   ├── creating-outline-paths.md # Outline path query language reference
│   ├── creating-scripts.md      # AppleScript examples
│   ├── creating-themes.md       # Theme creation
│   ├── creating-shortcuts.md    # macOS Shortcuts integration
│   ├── creating-extensions.md   # Links to extension-kit docs
│   └── logs-explorer.md         # Logs Explorer
├── public/assets/               # Screenshots and images (served from /assets/)
├── .vitepress/
    └── config.mjs               # Site config + sidebar navigation
```

## Editing Guidelines

**Navigation**: The sidebar is defined by the `sidebar` array in `.vitepress/config.mjs`. When adding a new page, add a `{ text, link }` entry to the appropriate section there.

**Images**: Store screenshots and images in `public/assets/`. Reference them with a site-root absolute path like `/assets/image.png` (VitePress serves everything in `public/` from the site root). This works from any page regardless of its directory depth.

**Cross-References**: Use relative markdown links (including the `.md` extension) to reference other pages within the guide, e.g. `[Using Scripts](using-scripts.md)`. VitePress checks these for dead links at build time.

**Callouts**: use VitePress containers (`::: tip`, `info`, `warning`, `danger`). Use `::: details Summary` (not raw `<details>`) for optional deep-dives; it renders as a bordered card.

## Voice & Style

**This is the single most important guide for generating prose.** Any text you write for this guide — new pages, new sections, rewrites, edits — MUST follow it.

### Brevity first

**Shorter is better. Cut anything the reader doesn't need to act. Leaving information out is fine.**

- Say what a feature does in one or two sentences, then show the commands. Don't sell it.
- Don't restate. If paragraph two says paragraph one again in other words, delete it.
- No closing summaries ("So…", "That's the point", "That's the kind of thing X is for").
- Don't advise on every option. List the choices; one line each at most.
- Don't repeat content across pages. Explain it once and link to it.
- Skip padded parentheticals and em-dash asides.

### Voice

- **Jesse writes the guide.** Use "I" only for real opinions and experiences, sparingly. Never invent usage habits ("I reach for it when…", "I leave it on most of the time", "I use it constantly").
- **Address the reader as "you".**
- **Humble and honest.** Admit limitations plainly ("I really can't spell", "I'm not the best one to teach them!").
- **Recommend only when it matters.** One clear recommendation where a choice is genuinely confusing; otherwise just describe.

### Tone

- Warm and plain. An occasional well-earned exclamation point ("Run it!", "You've found the pizza boxes!").
- Use "Bike solves this problem with…" only when introducing a named concept (e.g. _Typing Affinity_, link buttons). Don't open every feature with a problem statement.
- Never hype-y or marketing-heavy.

### Sentence & paragraph style

- **Short, declarative sentences.** "Bike is an outliner." "It's fast."
- Plain language, minimal jargon. When a new term is introduced, name it in Title Case and define it.
- Short paragraphs (1–3 sentences).
- Write clean, correct prose.

### Page structure conventions

- Start with an `#` H1 title matching the page name.
- Follow with a one-to-three sentence intro: what the feature is and why you'd use it.
- Often place a screenshot right after the intro: `![Alt text](/assets/Name.png)` (note: images live in `public/assets/` and are referenced from site root as `/assets/…`).
- **Task headings use the imperative "To …" form**, usually as `####` H4: "#### To create a row", "#### To show the find panel". Under each, a bullet list of steps or commands.
- **Concept/section headings are noun phrases** (`###` H3): "Bike Row Links", "Format Options", "Sandbox Requirements". Questions are also used as headings: "What is an outline path?", "What if a link stops working?".
- End pages with a "See also:" or "Next I suggest you read:" list of relative links when helpful.

### Referencing commands & shortcuts

- Refer to commands by their **full menu path**: "Outline > New Row", "Edit > Find > Find Next", "View > Show Status Bar".
- Put the keyboard shortcut in parentheses after the command, wrapped in `<kbd>`: `Edit > Find > Find Next (<kbd>Command-G</kbd>)`. (Keyboard shortcuts use `<kbd>` elements, never code spans.)
- Core domain noun is **row** (a row in the outline). The app is always just "Bike", never "the app".

## Cross-Repository Sync

When Bike app features or APIs change, this documentation must be updated:

- **Extension API changes** (`extension-kit/api/`): Update tutorials in `extension-kit/docs/`
- **New app features** (`Bike/`): Update relevant `using-bike/` pages
- **Theme/style changes**: Update `using-bike-advanced/creating-themes.md`
- **Keybinding changes** (`Bike/OutlineEditor/.../Keymaps/`): Update `keyboard-shortcuts.md` and `using-bike/commands-explorer.md`
