# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

BikeGuide is the Markdown-based user documentation for the Bike outliner application. It is built with [VitePress](https://vitepress.dev/) and serves as the official user guide for Bike 2.

> **Note:** This guide was previously hosted on GitBook and has migrated to VitePress. If you find any leftover GitBook syntax (`{% hint %}` callouts, `.gitbook/assets/` image paths, `SUMMARY.md` references), convert it to the VitePress equivalents described below.

## Local Development

```sh
npm install
npm run dev      # start the dev server with live reload (http://localhost:5173/)
npm run build    # build the static site (also acts as a link/syntax check)
npm run preview  # preview the built site
```

`npm run build` is a useful sanity check — it fails on broken Vue/markdown syntax (e.g. an unclosed inline `<kbd>` tag) and on dead internal links.

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
│   ├── using-selection.md
│   ├── using-scripts.md
│   └── ...
├── using-bike-advanced/         # Developer/power-user documentation
│   ├── creating-outline-paths.md # Outline path query language reference
│   ├── creating-scripts.md      # AppleScript examples
│   ├── creating-themes.md       # Theme creation
│   ├── creating-shortcuts.md    # macOS Shortcuts integration
│   ├── creating-extensions.md   # Links to extension-kit docs
│   └── command-line-tool.md     # `bike` CLI overview
├── public/assets/               # Screenshots and images (served from /assets/)
├── .vitepress/
│   └── config.mjs               # Site config + sidebar navigation
└── SUMMARY.md                   # Legacy GitBook TOC — excluded from the build (srcExclude)
```

## Editing Guidelines

**Navigation**: The sidebar is defined by the `sidebar` array in `.vitepress/config.mjs`. When adding a new page, add a `{ text, link }` entry to the appropriate section there. (`SUMMARY.md` is a leftover from GitBook and is excluded from the build via `srcExclude` — don't rely on it.)

**Images**: Store screenshots and images in `public/assets/`. Reference them with a site-root absolute path like `/assets/image.png` (VitePress serves everything in `public/` from the site root). This works from any page regardless of its directory depth.

**Cross-References**: Use relative markdown links (including the `.md` extension) to reference other pages within the guide, e.g. `[Using Scripts](using-scripts.md)`. VitePress checks these for dead links at build time.

**Callouts**: Use VitePress custom containers for tips and asides (not the old GitBook `{% hint %}` syntax):
```markdown
::: tip
Helpful tip here
:::
```
Available types: `info`, `tip`, `warning`, `danger`, `details`. Use the `::: details` container (not a raw `<details>` block) for collapsible deep-dives — it renders as a bordered card so expanded blocks stay visually grouped. See the Voice & Style section for when to reach for these.

## Voice & Style

**This is the single most important guide for generating prose.** Any text you write for this guide — new pages, new sections, rewrites, edits — MUST match the established voice and style below. It was derived by reading the entire guide. When in doubt, open a few existing pages and imitate them.

### Voice

- **First person singular for the author.** The guide is written by Jesse, the developer, in his own voice. Use "I" for opinions, recommendations, and personal asides: "I recommend…", "I think…", "I've added this option mostly so that…", "I generally recommend using normal Bike links." Do not write in a faceless corporate-docs voice.
- **Direct second person for the reader.** Address the reader as "you" throughout: "Use Bike to think, write, organize", "you'll get the most out of these scripts by…".
- **Humble, honest, and personable.** The author admits limitations and tradeoffs openly ("This happens to me quite often because I really can't spell", "I'm not the best one to teach them!"). Be candid about what's not yet ported, what can break, and why a feature exists.
- **Opinionated.** Give clear recommendations and the reasoning behind them rather than listing every option neutrally. Tell the reader what *you* (the author) would do.

### Tone

- Warm, encouraging, and lightly playful. Sparing, well-earned exclamation points convey enthusiasm: "Run it!", "You've found the pizza boxes!", "it's a fun trick! :)".
- Confident and calm. Explain design intent. A recurring move: **state a problem, then "Bike solves this problem with…"** a named concept (e.g. _Typing Affinity_, link buttons, smart row types).
- Never hype-y or marketing-heavy. Plain claims, concrete benefits.

### Sentence & paragraph style

- **Short, declarative sentences.** Favor a staccato rhythm and occasional deliberate fragments for emphasis: "Bike is an outliner." "It's fast." "Make lists, take notes, create documents."
- Plain language, minimal jargon. When a new term is introduced, name it in Title Case and immediately define it.
- Short paragraphs (often 1–3 sentences). Lots of "For example…" to ground abstractions in a concrete case.
- Write clean, correct prose. (The existing pages contain occasional typos — e.g. "sourounding", "strait forward", "permision". Do **not** imitate these; match the *style*, not the mistakes.)

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

### Markdown / VitePress features to use

- Use `::: tip` / `::: info` / `::: warning` containers for asides and tips (not the old GitBook `{% hint %}` syntax).
- Use a `::: details Summary` container for advanced or optional deep-dives that would otherwise clutter the main flow (see `creating-outline-paths.md`). Prefer it over a raw `<details>` block — it renders as a bordered card, so expanded sections stay visually distinct.
- Cross-reference other pages liberally with relative markdown links.

## Cross-Repository Sync

When Bike app features or APIs change, this documentation must be updated:

- **Extension API changes** (`extension-kit/api/`): Update tutorials in `extension-kit/docs/`
- **New app features** (`Bike/`): Update relevant `using-bike/` pages
- **Theme/style changes**: Update `using-bike-advanced/creating-themes.md`
- **Keybinding changes** (`Bike/OutlineEditor/.../Keymaps/`): Update `keyboard-shortcuts.md` and `using-bike/using-commands.md` (Commands Explorer)

Extension development documentation now lives in the [extension-kit](https://github.com/bike-outliner/extension-kit/tree/main/docs) repository. The BikeGuide page links there.
