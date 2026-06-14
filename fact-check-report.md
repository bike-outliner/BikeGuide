# Bike Guide Fact-Check Report

Automated fact-check of every Bike Guide page against the Bike app source (`Bike/`, `extension-kit/`) and the live running Bike app (`bike` MCP tools + `bike` CLI). Each claim on each page was extracted, then verified against its authoritative source.

**Totals:** 928 claims across 48 pages — ✅ 836 verified · ⚠️ 70 discrepancies · ❔ 22 unverifiable.

Verdicts: **verified** = source/live app confirms the claim · **discrepancy** = source/live app contradicts it · **unverifiable** = no authoritative source covers it (often external services). Only discrepancies and unverifiable items are detailed below; verified claims are summarized in the counts.

## Summary

| Page | Claims | ✅ | ⚠️ Disc. | ❔ Unver. |
|---|---:|---:|---:|---:|
| **using-bike/using-the-choice-palette.md** | 19 | 8 | 11 | 0 |
| **using-bike/outline-editing.md** | 16 | 9 | 7 | 0 |
| **using-bike/using-focus-mode.md** | 10 | 3 | 7 | 0 |
| **using-bike/using-status-bar.md** | 20 | 14 | 5 | 1 |
| **using-bike/using-typewriter-mode.md** | 11 | 6 | 5 | 0 |
| **using-bike/using-outline-paths.md** | 106 | 101 | 4 | 1 |
| **using-bike-advanced/creating-scripts.md** | 54 | 47 | 3 | 4 |
| **using-bike/using-links.md** | 43 | 37 | 3 | 3 |
| **using-bike/using-commands.md** | 40 | 37 | 3 | 0 |
| **using-bike/using-outline-filtering.md** | 28 | 25 | 3 | 0 |
| **using-bike/using-software-update.md** | 7 | 4 | 3 | 0 |
| **bike-compatible-apps.md** | 28 | 22 | 2 | 4 |
| **using-bike/bike-markdown-format.md** | 39 | 35 | 2 | 2 |
| **using-bike/bike-opml-format.md** | 18 | 16 | 2 | 0 |
| **using-bike/outline-viewing.md** | 14 | 12 | 2 | 0 |
| **using-bike/text-checking.md** | 31 | 29 | 2 | 0 |
| **using-bike/using-sidebar.md** | 16 | 14 | 2 | 0 |
| **using-bike/using-text-wrap.md** | 10 | 8 | 2 | 0 |
| **using-bike-advanced/creating-shortcuts.md** | 8 | 6 | 1 | 1 |
| **using-bike/using-windows.md** | 26 | 25 | 1 | 0 |
| using-bike/using-scripts.md | 12 | 9 | 0 | 3 |
| index.md | 4 | 3 | 0 | 1 |
| using-bike/using-find-panel.md | 22 | 21 | 0 | 1 |
| using-bike/using-selection.md | 8 | 7 | 0 | 1 |
| getting-started.md | 11 | 11 | 0 | 0 |
| glossary.md | 14 | 14 | 0 | 0 |
| keyboard-shortcuts.md | 42 | 42 | 0 | 0 |
| software.md | 9 | 9 | 0 | 0 |
| using-bike-advanced/command-line-tool.md | 23 | 23 | 0 | 0 |
| using-bike-advanced/creating-extensions.md | 3 | 3 | 0 | 0 |
| using-bike-advanced/creating-themes.md | 4 | 4 | 0 | 0 |
| using-bike/bike-html-format.md | 29 | 29 | 0 | 0 |
| using-bike/row-types.md | 17 | 17 | 0 | 0 |
| using-bike/text-formatting.md | 17 | 17 | 0 | 0 |
| using-bike/using-calendar.md | 30 | 30 | 0 | 0 |
| using-bike/using-documents.md | 21 | 21 | 0 | 0 |
| using-bike/using-extensions.md | 6 | 6 | 0 | 0 |
| using-bike/using-full-screen-mode.md | 7 | 7 | 0 | 0 |
| using-bike/using-inspector.md | 10 | 10 | 0 | 0 |
| using-bike/using-interface-explorer.md | 18 | 18 | 0 | 0 |
| using-bike/using-logs.md | 7 | 7 | 0 | 0 |
| using-bike/using-mcp-server.md | 18 | 18 | 0 | 0 |
| using-bike/using-outline-path-explorer.md | 2 | 2 | 0 | 0 |
| using-bike/using-shortcuts.md | 7 | 7 | 0 | 0 |
| using-bike/using-themes.md | 7 | 7 | 0 | 0 |
| using-bike/using-toolbar.md | 10 | 10 | 0 | 0 |
| whats-new.md | 16 | 16 | 0 | 0 |
| why-bike.md | 10 | 10 | 0 | 0 |
| **TOTAL** | **928** | **836** | **70** | **22** |

---

## Findings by page

Pages with zero discrepancies and zero unverifiable items are omitted (all their claims verified).

### index.md
*4 claims · 0 discrepancy · 1 unverifiable*

- ❔ **unverifiable** — Jonathan Edwards's Twitter URL is https://twitter.com/jonathoda.
  - **Guide says:** – [Jonathan Edwards](https://twitter.com/jonathoda)
  - **Actual:** twitter.com/jonathoda 301-redirects to x.com/jonathoda (standard Twitter->X redirect, handle exists), but X blocks unauthenticated fetch (402) so account-owner identity as Jonathan Edwards cannot be confirmed via authoritative source.
  - **Source:** WebFetch https://twitter.com/jonathoda -> 301 redirect to https://x.com/jonathoda; https://x.com/jonathoda -> HTTP 402 Payment Required
  - **Note:** URL structure valid and handle exists; ownership/identity not confirmable due to X paywall. This is an external-service quote attribution, not covered by any Bike source.

### bike-compatible-apps.md
*28 claims · 2 discrepancy · 4 unverifiable*

- ⚠️ **discrepancy** — OPML does not support all Bike features like row types and text formatting.
  - **Guide says:** OPML doesn't support all Bike features like row types and text formatting.
  - **Actual:** Bike's OPML encoder sets writesRowTypes=true, writesRowAttributes=true, writesTextAttributes=true and writes a `type` attribute plus text encoded as markdown (row.text.encodeMarkdown()), so Bike's OPML round-trips row types and text formatting. using-documents.md:19 explicitly states .bike/.md/.opml are equivalent and OPML 'can represent all of your Bike outline state, including row types, text formatting, attributes, and hierarchy.'
  - **Source:** /Users/jessegrosjean/Documents/GitHub/@bike-outliner/Bike/OutlineEncoder/Sources/OutlineEncoder/OutlineEncoders/OPMLEncoder.swift:13-15; OPMLEncoder+ElementAttributes.swift:28-47; BikeGuide/using-bike/using-documents.md:19
  - **Note:** The claim is only true of the generic OPML standard / interoperability with other apps; for Bike's own OPML it is contradicted by the app source and by the sibling guide page using-documents.md.
- ⚠️ **discrepancy** — LittleOutliner (Web) at http://littleoutliner.com uses OPML as native format.
  - **Guide says:** http://littleoutliner.com is the LittleOutliner web outliner.
  - **Actual:** The URL returns a 404 'not found' page (Dave Winer's custom 404), not a LittleOutliner app page. The link appears dead/relocated.
  - **Source:** curl http://littleoutliner.com -> HTTP 404 (Dave Winer custom '404 not found' page); https://littleoutliner.com -> no response; WebFetch -> ECONNREFUSED.
  - **Note:** Repeated checks over http and https both failed; http returns an actual 404 page.
- ❔ **unverifiable** — Drummer (Web + Electron) at http://drummer.scripting.com uses OPML as native format.
  - **Source:** curl/WebFetch http://drummer.scripting.com -> connection failed (code 000 / ECONNREFUSED) on repeated attempts; DNS resolves to palatka.scripting.com (161.35.120.52).
  - **Note:** Domain resolves but the server did not respond during checks (likely transient outage or bot-blocking); could not confirm content or OPML-native claim.
- ❔ **unverifiable** — The Electron version of Drummer saves OPML directly to disk so you can work on the same file with Bike and Drummer without import/export.
  - **Source:** http://drummer.scripting.com unreachable during checks (000/ECONNREFUSED); no Bike-app source covers third-party Drummer behavior.
  - **Note:** This is an external app behavior claim with no authoritative Bike source and the site was unreachable.
- ❔ **unverifiable** — Some of OmniOutliner's features are only supported in its ooutline file format and won't persist in OPML mode.
  - **Source:** https://www.omnigroup.com/omnioutliner -> HTTP 200 but landing page does not mention OPML or the ooutline format; no Bike-app source covers OmniOutliner internals.
  - **Note:** External app behavior claim; not stated on the fetched page and no authoritative source available.
- ❔ **unverifiable** — Outlinely (macOS + iOS) at https://glamdevelopment.com/outlinely imports/exports OPML.
  - **Source:** curl/WebFetch https://glamdevelopment.com/outlinely -> no response (code 000 / timeout) on repeated attempts; DNS resolves to 162.243.106.244.
  - **Note:** Domain resolves but server did not respond during checks; could not confirm the page or OPML support.

### using-bike/outline-viewing.md
*14 claims · 2 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — Outline > Expand All expands all top level rows.
  - **Guide says:** Expand all top level rows.
  - **Actual:** expandAll() = expand(id: focused.id, completely: true), which expands the focused row AND all of its descendants (every level), not just top-level rows. The guide wording 'all top level rows' understates it: it expands the entire focused outline at all levels.
  - **Source:** Bike/OutlineEditor/Sources/OutlineEditor/OutlineEditor+Fold.swift:106-108 and the completely:true branch at 162-166
  - **Note:** Command id fold:expand-all -> selector expandAll: (Commands+Core.swift:216). Behavior is 'expand all rows / entire outline', not limited to top level.
- ⚠️ **discrepancy** — Outline > Collapse All collapses all top level rows.
  - **Guide says:** Collapse all top level rows.
  - **Actual:** collapseAll() = collapse(id: focused.id, completely: true), which collapses the focused row AND all non-leaf descendants at every level (completely branch forms union of all descendants). The guide wording 'all top level rows' understates it.
  - **Source:** Bike/OutlineEditor/Sources/OutlineEditor/OutlineEditor+Fold.swift:110-112 and completely:true branch at 239-247
  - **Note:** Command id fold:collapse-all -> selector collapseAll: (Commands+Core.swift:218). Behavior is 'collapse all rows / entire outline', not limited to top level.

### using-bike/outline-editing.md
*16 claims · 7 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — Outline > Duplicate has the keyboard shortcut Command-Shift-D.
  - **Guide says:** Command-Shift-D
  - **Actual:** Command-D (storyboard keyEquivalent is lowercase "d" with the default Command modifier and no Shift). Menu title is also "Duplicate Rows", not "Duplicate".
  - **Source:** Main.storyboard:730 menuItem title="Duplicate Rows" keyEquivalent="d" with no modifierMask element => default Command only (no Shift)
- ⚠️ **discrepancy** — Outline > Indent has the keyboard shortcut Control-Command-Right.
  - **Guide says:** Control-Command-Right
  - **Actual:** The Indent menu item has an empty keyEquivalent (no shortcut). The modifier mask is set to Control+Command but the key is blank, so no Control-Command-Right shortcut is registered in the storyboard or live keymap. (Tab still indents — see c14.)
  - **Source:** Main.storyboard:747-752 menuItem title="Indent" keyEquivalent="" (empty) with modifierMask control+command; LIVE bike.keybindings.toString() contains no arrow bindings; no JS/cocoa keymap entry for indentRow:
- ⚠️ **discrepancy** — Outline > Outdent has the keyboard shortcut Control-Command-Left.
  - **Guide says:** Control-Command-Left
  - **Actual:** The Outdent menu item has an empty keyEquivalent (no shortcut). No Control-Command-Left binding exists in the storyboard or live keymap. (Shift-Tab still outdents — see c14.)
  - **Source:** Main.storyboard:759-764 menuItem title="Outdent" keyEquivalent="" (empty) with modifierMask control+command; LIVE bike.keybindings.toString() has no arrow bindings
- ⚠️ **discrepancy** — Outline > Move Up has the keyboard shortcut Control-Command-Up.
  - **Guide says:** Control-Command-Up
  - **Actual:** The Move Up menu item has an empty keyEquivalent (no shortcut). No Control-Command-Up binding exists in the storyboard or live keymap.
  - **Source:** Main.storyboard:796-801 menuItem title="Move Up" keyEquivalent="" (empty) with modifierMask control+command; LIVE bike.keybindings.toString() has no arrow bindings
- ⚠️ **discrepancy** — Outline > Move Down has the keyboard shortcut Control-Command-Down.
  - **Guide says:** Control-Command-Down
  - **Actual:** The Move Down menu item has an empty keyEquivalent (no shortcut). No Control-Command-Down binding exists in the storyboard or live keymap.
  - **Source:** Main.storyboard:814-819 menuItem title="Move Down" keyEquivalent="" (empty) with modifierMask control+command; LIVE bike.keybindings.toString() has no arrow bindings
- ⚠️ **discrepancy** — Outline > Move to Heading... has the keyboard shortcut Command-\ (backslash).
  - **Guide says:** Outline > Move to Heading... (Command-\)
  - **Actual:** Command-\ is correct, but the menu command is titled "Move To…" (selector moveTo:), not "Move to Heading...". The Command-\ shortcut maps to "Move To…".
  - **Source:** Main.storyboard:832 menuItem title="Move To…" keyEquivalent="\" no modifierMask => Command-\ (selector moveTo:); also :837 "Move to Row…" keyEquivalent="\" with option+command
- ⚠️ **discrepancy** — Command-] and Command-[ can be used to indent and outdent rows.
  - **Guide says:** Command-] indents and Command-[ outdents rows
  - **Actual:** Command-[ is bound to Go > Back and Command-] to Go > Forward (navigation), not indent/outdent. There is no Command-]/Command-[ indent/outdent binding.
  - **Source:** Main.storyboard:867 menuItem title="Back" keyEquivalent="[" selector goEditorBack: (Command-[); :872 menuItem title="Forward" keyEquivalent="]" selector goEditorForward: (Command-]); no Command-]/Command-[ binding to indent/outdent in storyboard or LIVE keymap

### using-bike/using-selection.md
*8 claims · 0 discrepancy · 1 unverifiable*

- ❔ **unverifiable** — In Bike 1, a text selection could span rows.
  - **Source:** Bike v2 source repo (/Users/jessegrosjean/Documents/GitHub/@bike-outliner/Bike) contains no Bike 1 codebase; historical Bike 1 behavior is not present in the authoritative v2 source or live app
  - **Note:** Claim about prior major version; no authoritative source for Bike 1 in this repo or the running app.

### using-bike/text-checking.md
*31 claims · 2 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — Bike highlights spelling errors with a red zigzag underline.
  - **Guide says:** red zigzag underline
  - **Actual:** Spelling error color is red by default (JSColorTheme.swift:111-112 spelling = themeColor('spelling') ?? systemRed.alphaSet(0.6); themes use $red/$error), so the color is correct. But the underline is rendered as a solid rounded-rect bar (~2px tall, corner radius 1), not a zigzag/wavy line. See bike.bkext/style/main.js z() helper used for '.@view-check-spelling' (c.height=t.fixed(2*uiScale), c.corners.radius=1). There is no zigzag/wavy spelling underline in the rendering code.
  - **Source:** Bike/OutlineEditor/Sources/OutlineEditor/EditorStyle/Javascript/JSColorTheme.swift:111-112; Bike/BikeMac/BikeMac/Extensions/bike.bkext/style/main.js (z() / .@view-check-spelling).
  - **Note:** Color (red) is correct; the 'zigzag' shape descriptor does not match the solid-bar underline actually drawn.
- ⚠️ **discrepancy** — All autocorrected text is underlined with a blue zigzag line.
  - **Guide says:** blue zigzag underline
  - **Actual:** Active replacement color defaults to the macOS accent color (JSColorTheme.swift:115-116 replacement = themeColor('replacement') ?? theme.accentColor.alphaSet(0.5)); default accent is blue, so 'blue' is correct only for the default accent (themes override it, e.g. one-dark uses purple). The underline is rendered as a solid rounded-rect bar (~2px), not a zigzag — see bike.bkext/style/main.js z() used for '.@view-active-replacement'.
  - **Source:** Bike/OutlineEditor/Sources/OutlineEditor/EditorStyle/Javascript/JSColorTheme.swift:115-116; Bike/BikeMac/BikeMac/Extensions/bike.bkext/style/main.js (.@view-active-replacement via z()).
  - **Note:** Underline is a solid colored bar, not a zigzag; color is accent-dependent (blue only by default).

### using-bike/using-links.md
*43 claims · 3 discrepancy · 3 unverifiable*

- ⚠️ **discrepancy** — Edit > Copy > Row Link copies a link to the selected row.
  - **Guide says:** Edit > Copy > Row Link
  - **Actual:** The menu item is titled "Copy Row Link" (not "Row Link") in the Edit > Copy submenu
  - **Source:** Main.storyboard:250 (title="Copy Row Link", selector copyRowLink:)
  - **Note:** Path/location correct (Edit > Copy submenu) but the leaf item is "Copy Row Link".
- ⚠️ **discrepancy** — The keyboard shortcut for Edit > Copy > Row Link is Shift-Command-C.
  - **Guide says:** Shift-Command-C
  - **Actual:** Shift-Command-Option-L (keyEquivalent="L" uppercase => Shift, modifierMask option+command)
  - **Source:** Main.storyboard:250-251 (Copy Row Link: keyEquivalent="L", option=YES command=YES); convention from KeySequence+KeyEquivalent.swift:30-35
  - **Note:** No keymap override found; storyboard is authoritative. Shift-Command-C is actually "Copy Markdown Text" (storyboard:213-214).
- ⚠️ **discrepancy** — Edit > Copy > Path Row Link copies a path row link to the selected row.
  - **Guide says:** A menu command Edit > Copy > Path Row Link
  - **Actual:** No such menu item exists. The Edit > Copy submenu has no Path/Path-Row-Link item, there is no edit:copy-path-row-link command (bike_get_commands has only edit:copy-row-link), and copyPathRowLink: appears only in a commented-out validation block
  - **Source:** Main.storyboard:199-262 (Copy submenu, no Path Row Link); bike_get_commands (no copy-path-row-link); OutlineEditor+Actions.swift:974 (copyPathRowLink: inside /* */ comment lines 958-1018)
  - **Note:** The Copy > Path Row Link command is not present in the current app's menu or public command set.
- ❔ **unverifiable** — Clicking a Bike link pasted into Apple's Notes app opens Bike and selects the linked row.
  - **Source:** behavior of a third-party app (Apple Notes) handling a bike:// URL
  - **Note:** The bike:// scheme + selection-via-fragment (Outline+Links.swift:170,198) supports this, but cross-app click behavior in Notes is not verifiable against Bike source.
- ❔ **unverifiable** — Dragging a row by its triangle handle and holding the Control key before releasing the mouse inserts a link to the dragged row into your outline.
  - **Source:** drag-and-drop interaction; handled in JS/DOM runtime (common.js, minified) — not pinpointable in Swift source
  - **Note:** Could not confirm the Control-modifier drag behavior in readable source.
- ❔ **unverifiable** — Activating a link to a deleted row opens the document but shows a warning that the linked row could not be found.
  - **Source:** OutlineStore+Links.swift (document opens via matched file URL); could not locate a 'linked row could not be found' warning string in source
  - **Note:** Document-opens behavior is plausible (file still resolves), but the specific row-not-found warning UI was not found in the searched source.

### using-bike/using-find-panel.md
*22 claims · 0 discrepancy · 1 unverifiable*

- ❔ **unverifiable** — Regex learning link points to the Quora resources page
  - **Guide says:** reachable Quora page about learning regular expressions
  - **Actual:** Quora returns HTTP 403 Forbidden to automated/non-interactive clients (anti-bot protection); content/topic could not be confirmed
  - **Source:** WebFetch + curl (browser UA) of https://www.quora.com/What-are-the-best-resources-for-learning-regular-expressions both returned HTTP 403
  - **Note:** 403 is Quora's standard bot-blocking behavior, not necessarily a dead link. Reachability and topic match cannot be confirmed via automated tools; recommend a manual browser check.

### using-bike/using-the-choice-palette.md
*19 claims · 11 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — Inserting `!` at the start of the filter inverts the matching.
  - **Guide says:** Leading `!` inverts the match
  - **Actual:** The matcher constructs the pattern with Atom::new and a fixed AtomKind::Fuzzy + inverted=false. The nucleo special-syntax characters (!, ', ^, $) are only interpreted by Pattern::parse/Atom::parse, which is not used here, so a leading `!` is treated as a literal character, not an inversion operator.
  - **Source:** Bike/NucleoMatcher/nucleo_matcher_ffi/src/lib.rs:104-115 (PatternWrapper::new calls Atom::new(string, ..., AtomKind::Fuzzy, false) directly, not Pattern::parse/Atom::parse)
  - **Note:** Single source-of-truth is the Rust FFI; the special-character syntax is not wired up.
- ⚠️ **discrepancy** — Inserting `'` at the start of the filter uses substring matching.
  - **Guide says:** Leading `'` switches to substring matching
  - **Actual:** AtomKind is hardcoded to .Fuzzy; the leading-quote syntax that nucleo's Pattern::parse maps to substring matching is never invoked. The `'` is matched literally.
  - **Source:** Bike/NucleoMatcher/nucleo_matcher_ffi/src/lib.rs:104-115 (Atom::new with hardcoded AtomKind::Fuzzy, no Pattern::parse)
- ⚠️ **discrepancy** — Inserting `^` at the start of the filter uses prefix matching.
  - **Guide says:** Leading `^` switches to prefix matching
  - **Actual:** AtomKind is hardcoded; the `^` prefix-anchor syntax is not parsed and is matched literally. (Config.prefer_prefix=true biases scoring toward prefixes, but there is no `^` operator.)
  - **Source:** Bike/NucleoMatcher/nucleo_matcher_ffi/src/lib.rs:104-115 (Atom::new with hardcoded AtomKind::Fuzzy, no Pattern::parse)
- ⚠️ **discrepancy** — Inserting `$` at the end of the filter uses suffix matching.
  - **Guide says:** Trailing `$` switches to suffix matching
  - **Actual:** AtomKind is hardcoded to .Fuzzy and Pattern::parse is not used, so a trailing `$` is matched literally rather than anchoring a suffix.
  - **Source:** Bike/NucleoMatcher/nucleo_matcher_ffi/src/lib.rs:104-115 (Atom::new with hardcoded AtomKind::Fuzzy, no Pattern::parse)
- ⚠️ **discrepancy** — When filtering, the containing parent items of each match are always included in the results, even if those containing items don't match.
  - **Guide says:** Containing parent rows are added as their own entries in the results
  - **Actual:** The current choice box shows a flat list of the matched rows. Each item carries its containing path as a breadcrumb string (e.g. "one/a"), but parent rows are NOT inserted as separate result entries. The 'containing items always included' / duplicate-parent behavior described on the page is not present in the current implementation.
  - **Source:** Bike/BikeOutliner/BikeOutliner/Choice View/Outline+ChoiceViewItems.swift:32-62 (each candidate gets a breadcrumb `container` string via containerPath); ChoiceViewModel.swift:168-187 (results are the matched items only)
  - **Note:** The page's whole 'containing parent items' and 'Filter Options' screenshot model reflects an older choice-box design.
- ⚠️ **discrepancy** — The choice palette settings button is located to the right of the filter field.
  - **Guide says:** A settings button sits to the right of the filter field
  - **Actual:** The choice palette UI is just a search field, a placeholder hint label, and the results table. There is no settings (gear) button in the view at all.
  - **Source:** Bike/ChoiceBox/Sources/ChoiceBox/ChoiceViewController.swift:44-82 and 14-... (view contains only searchField + hintLabel + tableView; no settings/gear button is created anywhere); grep for button/gear/settings in ChoiceViewController.swift returns no settings control
- ⚠️ **discrepancy** — Each choice palette has its own settings; the settings for "Go To…" can differ from the settings for "Add Link to Row".
  - **Guide says:** Per-palette settings, configurable separately per command
  - **Actual:** There is no settings concept in the choice box. Each palette is constructed with sources (placeholder, default symbol, completion/candidate handlers) only; no settings are stored or surfaced per palette.
  - **Source:** Bike/ChoiceBox/Sources/ChoiceBox/ChoiceViewModel.swift (no per-palette settings model); WorkspaceSplitViewController.swift:240-289 and OutlineView+Actions.swift:511-554 (each palette is configured only with placeholder/symbol/handlers, no settings)
- ⚠️ **discrepancy** — The choice palette has a "Sort by match quality" setting that, when checked, shows the best matches first.
  - **Guide says:** A toggleable "Sort by match quality" setting
  - **Actual:** The choice box ALWAYS sorts filtered results by match score (best first); there is no toggle and no "natural order" mode. No such setting string exists in the source.
  - **Source:** Bike/ChoiceBox/Sources/ChoiceBox/ChoiceViewModel.swift:168-187 (orderedMatches always sorts by score descending: matches.sort { a.1 > b.1 }); repo-wide grep for "sort by match"/"match quality" returns nothing
- ⚠️ **discrepancy** — The choice palette has a "Remove duplicate containing parent items" setting.
  - **Guide says:** A "Remove duplicate containing parent items" setting
  - **Actual:** No such setting exists. Since parent rows are not emitted as separate result entries (see c13), there are no duplicate parent items to remove, and no UI/string for it anywhere in the source.
  - **Source:** repo-wide grep for "remove duplicate containing"/"duplicate containing parent" across *.swift/*.storyboard/*.strings returns no results; ChoiceViewModel.swift has no dedup option
- ⚠️ **discrepancy** — The choice palette has an "outline path" setting used to specify the rows shown and filtered.
  - **Guide says:** A user-configurable "outline path" setting controlling which rows appear
  - **Actual:** The outline path is hardcoded in code (e.g. "//*" for Go to Row and Add Link to Row) and is not exposed as an editable setting. There is no settings UI to customize it.
  - **Source:** Bike/BikeOutliner/BikeOutliner/Outline View/OutlineView+Actions.swift:502,547 and WorkspaceSplitViewController.swift:284 (outlinePath is hardcoded to "//*"); no settings UI in ChoiceBox
- ⚠️ **discrepancy** — The "Go To…" command shows "heading" type rows and top level rows by default.
  - **Guide says:** Go To… shows heading-type and top-level rows by default via an outline path
  - **Actual:** The default Go To source lists the sidebar's choosable items (locations, sidebar index entries, pinned items, and saved queries) from the sidebar tree, not rows selected by a configurable "heading + top level" outline path. A "-" prefixed sub-source ("Go to Row") separately lists all rows via the hardcoded "//*" path. The page's description of a default heading/top-level outline-path setting does not match the current implementation.
  - **Source:** Bike/BikeMac/BikeMac/Workspace Window/Views/WorkspaceSplitViewController.swift:243-265 (Go To default source = sidebarViewController.viewModel.allChoosableItems); Bike/OutlineEditorSidebar/Sources/SidebarViewModel.swift:140-149 (allChoosableItems = sidebar tree items: .location, .index, .pinned, .query)
  - **Note:** Default source is sidebar-derived, not an outline-path filter on rows.

### using-bike/using-outline-filtering.md
*28 claims · 3 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — The menu path to start filtering is Edit > Find > Filter.
  - **Guide says:** Edit > Find > Filter
  - **Actual:** The Filter menu item (action beginFilter:, line 896) is inside the GO menu (submenu opens line 848, closes before View at line 925), so the path is Go > Filter. The Edit > Find submenu (line 387-415) contains only Find…, Find Next, Find Previous, Use Selection for Find, Jump to Selection — no Filter.
  - **Source:** Bike/BikeMac/BikeMac/Base.lproj/Main.storyboard:846-900
  - **Note:** Keyboard shortcut Command-Shift-F itself is correct; only the menu path is wrong.
- ⚠️ **discrepancy** — The Save Filter in Sidebar command saves the current filter as a query shortcut.
  - **Guide says:** Save Filter in Sidebar
  - **Actual:** The active context-menu item title is 'Save in Sidebar' (line 124). The string 'Save Filter in Sidebar' appears only in a commented-out (/* */ lines 1-79) earlier version. The command does save the filter as a sidebar query (DocumentPaneViewController.swift:339-343 saveFilterInSidebar → addQuery), but the visible menu title is 'Save in Sidebar'.
  - **Source:** Bike/BikeMac/BikeMac/Workspace Window/Window/ToolbarView/OutlineEditorFilter.swift:124
- ⚠️ **discrepancy** — The filter /heading shows all heading rows.
  - **Guide says:** Show all heading rows
  - **Actual:** '/heading' is an absolute path with the CHILD axis, so it matches only heading rows that are direct children of the root (top-level headings), not all heading rows anywhere. To show all headings the path would need '//heading' (descendant shortcut), matching how the very next example '//task' is described as 'anywhere in the outline'.
  - **Source:** bike_outline_path_check '/heading' → absolute path, child axis, heading type

### using-bike/using-outline-paths.md
*106 claims · 4 discrepancy · 1 unverifiable*

- ⚠️ **discrepancy** — Bike's AppleScript dictionary has a `query` command (not yet ported to Bike 2)
  - **Guide says:** Not yet ported to Bike 2
  - **Actual:** The `query` command IS present and working in Bike 2.0. sdef defines it (Bike.sdef:330 'query ... Query your document using the given outline path' with 'outline path' param). Live test: osascript 'tell application "Bike" to query front document outline path "//*"' returned rows.
  - **Source:** Bike.sdef:330; live osascript query returned rows; bike.version = "2.0"
- ⚠️ **discrepancy** — The Shortcuts "Query Rows" action takes an outline path and returns matching rows (not yet ported to Bike 2)
  - **Guide says:** Not yet ported to Bike 2
  - **Actual:** QueryRowsIntent exists in Bike 2: title "Query Rows", @Parameter outlinePath, queries outline and returns rows.
  - **Source:** BikeMac/.../Automation/Shortcuts/Intents/Rows/QueryRowsIntent.swift:8 (title), :17 (Outline Path param), :26 (evaluate)
- ⚠️ **discrepancy** — Row types are body, heading, quote, code, note, unordered, ordered, task, hr, *
  - **Guide says:** quote and code as type test keywords
  - **Actual:** The type-test keywords are 'blockquote' and 'codeblock', not 'quote' and 'code'. bike_outline_path_check //quote → 'contains text quote' (NOT a type test); //code → 'contains text code'. //blockquote → 'quote type'; //codeblock → 'code type'. Cookbook lists: row body heading blockquote codeblock note unordered ordered task hr run *. So the guide's 'quote'/'code' entries are wrong; should be 'blockquote'/'codeblock' (also missing 'row' type).
  - **Source:** bike_outline_path_check //quote,//code,//blockquote,//codeblock; cookbook type tests section
- ⚠️ **discrepancy** — `count(.ancestor::*)` can substitute for `level()` (worse performance)
  - **Guide says:** count(.ancestor::*) is a valid substitute for level()
  - **Actual:** `.ancestor::*` does NOT parse — bike_outline_path_check '.ancestor::*' → Parse Error ('expected end of input'); 'count(.ancestor::*)' → Parse Error. The '.' self-shortcut cannot prefix a named 'ancestor::' axis. The working form is 'count(ancestor::*)' (no leading dot): bike_outline_path_check './/* count(ancestor::*) > 0' parses. So the specific example in the guide is syntactically invalid as written.
  - **Source:** bike_outline_path_check '.ancestor::*' and 'count(.ancestor::*)' (parse errors); 'count(ancestor::*)' parses
- ❔ **unverifiable** — `1 + "1"` is invalid; math operators don't make sense with text
  - **Source:** bike_outline_path_check '1 + "1"' (parses successfully)
  - **Note:** Parser ACCEPTS the syntax: bike_outline_path_check '1 + "1"' → 'add / value 1.0 / value "1"' (no parse error). The guide's 'invalid' claim is a runtime/semantic statement about mixing numbers and text, which the parse-check tool cannot evaluate. No contradiction surfaced, but the semantic invalidity is not confirmable via available sources.

### using-bike/using-text-wrap.md
*10 claims · 2 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — Text wrap can be configured in Settings > Editor.
  - **Guide says:** Settings > Editor
  - **Actual:** Settings > Typography. The settings panes are general, typography, themes(Appearance), autocorrect, document, extensions, links, sandbox, license. There is no 'Editor' pane. The Line Width (text wrap) control and the 'Allow size scale when line wraps...' checkbox both live in the Typography pane.
  - **Source:** /Users/jessegrosjean/Documents/GitHub/@bike-outliner/Bike/BikeMac/BikeMac/Settings Window/Typography/TypographySettingsViewController.swift:10-11 (paneIdentifier = .typography, paneTitle = "Typography"); /Users/jessegrosjean/Documents/GitHub/@bike-outliner/Bike/BikeMac/BikeMac/App/AppDelegate.swift:26-28 (PaneIdentifier list); directory listing of 'Settings Window/' shows no Editor pane
- ⚠️ **discrepancy** — Text wrap can be set to wrap to the window width or to a specific column width of 64, 72, or 80 columns.
  - **Guide says:** wrap to window width OR a specific column width of 64, 72, or 80 columns
  - **Actual:** In Settings > Typography the Line Width slider offers 0 = 'Editor Width' (window width) plus column values 66, 72, 80, 90, and 120 — not 64/72/80. The values 64/72/80 only appear in the separate Focus Filter shortcut intent (TextWrap enum: window/column64/column72/column80) and an internal textWrapColumn: menu action, which is not the Settings UI the guide references.
  - **Source:** /Users/jessegrosjean/Documents/GitHub/@bike-outliner/Bike/BikeMac/BikeMac/Settings Window/Typography/TypographySettingsViewController.swift:140-156 (columnsFromLineWidthSlider returns 66,72,80,90,120,0); 159-175 (reverse map); 85-88 (0 => 'Editor Width'). Focus Filter values: /Users/jessegrosjean/Documents/GitHub/@bike-outliner/Bike/BikeMac/BikeMac/Automation/Shortcuts/Intents/Focus Filter/FocusFilterIntent.swift:31-44

### using-bike/using-focus-mode.md
*10 claims · 7 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — The menu path to enable Writing Focus Mode is View > Writing Focus > Enable Focus.
  - **Guide says:** View > Writing Focus > Enable Focus
  - **Actual:** View > Writing Focus Mode > Enable Writing Focus. The parent submenu is titled "Writing Focus Mode" (not "Writing Focus") and the item is "Enable Writing Focus" (not "Enable Focus"). Its title dynamically becomes "Disable Writing Focus Mode" when enabled (Actions.swift:939).
  - **Source:** Bike/BikeMac/BikeMac/Base.lproj/Main.storyboard:981-990 (submenu title="Writing Focus Mode" under View menu id ENB-3g-2R0; item title="Enable Writing Focus")
  - **Note:** Both the submenu name and the item label differ from the guide.
- ⚠️ **discrepancy** — Writing Focus Mode can be enabled via the "Options" menu on the left side of the status bar.
  - **Guide says:** An "Options" menu on the left side of the status bar enables Writing Focus Mode.
  - **Actual:** The left-side status bar control is the "Editor Settings" button (lightswitch icon, opens a popover), not a menu named "Options". The popover does contain a "Writing Focus" toggle. So the location/mechanism is right but the control is not named "Options".
  - **Source:** Bike/BikeMac/BikeMac/Workspace Window/Views/Document Pane/StatusBarView.swift:16-65 (leftmost item is editorSettingsButton, .help "Editor Settings", lightswitch icon) and :200,212-220 (writingFocusSection with Toggle "Writing Focus")
  - **Note:** Control is on the left and toggles writing focus, but its name is "Editor Settings", not "Options".
- ⚠️ **discrepancy** — The menu path View > Writing Focus > Focus Word configures Writing Focus Mode to focus the word.
  - **Guide says:** View > Writing Focus > Focus Word
  - **Actual:** View > Writing Focus Mode > Writing Focus Word. Submenu is "Writing Focus Mode" and item is "Writing Focus Word" (not "Focus Word").
  - **Source:** Bike/BikeMac/BikeMac/Base.lproj/Main.storyboard:992 (menuItem title="Writing Focus Word") under submenu "Writing Focus Mode" (line 983)
  - **Note:** Both submenu and item label differ.
- ⚠️ **discrepancy** — The menu path View > Writing Focus > Focus Sentence configures Writing Focus Mode to focus the sentence.
  - **Guide says:** View > Writing Focus > Focus Sentence
  - **Actual:** View > Writing Focus Mode > Writing Focus Sentence. Submenu is "Writing Focus Mode" and item is "Writing Focus Sentence" (not "Focus Sentence").
  - **Source:** Bike/BikeMac/BikeMac/Base.lproj/Main.storyboard:998 (menuItem title="Writing Focus Sentence") under submenu "Writing Focus Mode" (line 983)
  - **Note:** Both submenu and item label differ.
- ⚠️ **discrepancy** — The menu path View > Writing Focus > Focus Paragraph configures Writing Focus Mode to focus the paragraph.
  - **Guide says:** View > Writing Focus > Focus Paragraph
  - **Actual:** View > Writing Focus Mode > Writing Focus Paragraph. Submenu is "Writing Focus Mode" and item is "Writing Focus Paragraph" (not "Focus Paragraph").
  - **Source:** Bike/BikeMac/BikeMac/Base.lproj/Main.storyboard:1004 (menuItem title="Writing Focus Paragraph") under submenu "Writing Focus Mode" (line 983)
  - **Note:** Both submenu and item label differ.
- ⚠️ **discrepancy** — The menu path to disable Writing Focus Mode is View > Writing Focus > Disable Focus.
  - **Guide says:** View > Writing Focus > Disable Focus
  - **Actual:** There is no separate "Disable Focus" item. The single "Enable Writing Focus" toggle item dynamically retitles to "Disable Writing Focus Mode" when focus mode is on. Path is View > Writing Focus Mode > Disable Writing Focus Mode (submenu name and label both differ from the guide).
  - **Source:** Bike/BikeMac/BikeMac/Base.lproj/Main.storyboard:985-988 (single toggle item) and Bike/OutlineEditor/Sources/OutlineEditor/OutlineEditor+Actions.swift:938-940 (label = enableWritingFocusMode ? "Disable Writing Focus Mode" : "Enable Writing Focus Mode")
  - **Note:** Same toggle item; guide's name and submenu both incorrect.
- ⚠️ **discrepancy** — Writing Focus Mode can be disabled via the "Options" menu on the left side of the status bar.
  - **Guide says:** An "Options" menu on the left side of the status bar disables Writing Focus Mode.
  - **Actual:** The left-side status bar control is the "Editor Settings" button (lightswitch popover), not a menu named "Options". Its popover "Writing Focus" toggle does disable focus mode, but the control name is wrong.
  - **Source:** Bike/BikeMac/BikeMac/Workspace Window/Views/Document Pane/StatusBarView.swift:55-65 (editorSettingsButton, .help "Editor Settings") and :218-220 (Toggle "Writing Focus" -> .toggleWritingFocus)
  - **Note:** Correct location and function; incorrect control name ("Editor Settings", not "Options").

### using-bike/using-typewriter-mode.md
*11 claims · 5 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — There is a menu path View > Typewriter Mode > Enable Typewriter with keyboard shortcut Option-Command-T to enable typewriter mode.
  - **Guide says:** View > Typewriter Mode > Enable Typewriter (Option-Command-T)
  - **Actual:** The View > Typewriter Mode submenu has a single toggle item (storyboard placeholder title 'ENABLE', identifier TypewriterModeOff) that is dynamically retitled at runtime to 'Enable Typewriter Mode' / 'Disable Typewriter Mode' (note the 'Mode' suffix), not 'Enable Typewriter'. The Option-Command-T shortcut is correct.
  - **Source:** Bike/BikeMac/BikeMac/Base.lproj/Main.storyboard:953-958; Bike/OutlineEditor/Sources/OutlineEditor/OutlineEditor+Actions.swift:948-950 (label = enableTypewriterMode ? 'Disable Typewriter Mode' : 'Enable Typewriter Mode')
  - **Note:** Path and shortcut are right; the live item title is 'Enable Typewriter Mode' (with 'Mode'), and it is one toggle rather than separate Enable/Disable items.
- ⚠️ **discrepancy** — Typewriter mode can be enabled via the "Options" menu on the left side of the status bar.
  - **Guide says:** Alternatively you can use the "Options" menu on the left side of the status bar
  - **Actual:** The status bar control is a button with a lightswitch icon and help text 'Editor Settings' (not 'Options') that opens an Editor Settings popover containing a 'Typewriter Mode' toggle. It is the left-side editorSettingsButton.
  - **Source:** Bike/BikeMac/BikeMac/Workspace Window/Views/Document Pane/StatusBarView.swift:17 (editorSettingsButton), :55-68, :63 (lightswitch image), :65 .help('Editor Settings'), :247-249 (Typewriter Mode toggle)
  - **Note:** Left-side status bar control exists and toggles typewriter mode, but it is labeled 'Editor Settings', not 'Options'.
- ⚠️ **discrepancy** — There is a menu command View > Typewriter Mode > Typewriter Variable.
  - **Guide says:** View > Typewriter Mode > Typewriter Variable
  - **Actual:** No 'Typewriter Variable' menu item exists. The Typewriter Mode submenu contains only the ENABLE toggle plus Top/Center/Bottom. There is no view:typewriter-variable in the live command list, and validateAction handles only toggle/top/center/bottom. A typewriterModeVariable() function exists in code but is not wired to any menu item.
  - **Source:** Bike/BikeMac/BikeMac/Base.lproj/Main.storyboard:951-979 (submenu items: ENABLE, Top, Center, Bottom only); live mcp__bike__bike_get_commands has no 'view:typewriter-variable'; OutlineEditor+Actions.swift:898-903,948-956
  - **Note:** The variable option is reachable only as an internal/default code path (e.g. via status bar default case), not as a documented menu command.
- ⚠️ **discrepancy** — The "Variable" typewriter position adjusts the caret position based on window size.
  - **Guide says:** "Variable" adjusts the caret position based on window size.
  - **Actual:** typewriterModeVariable() simply sets settings.typewriterMode = 0.0. The caret position is computed as visibleHeight * typewriterMode, so 0.0 pins the caret to the top of the viewport. There is no window-size-dependent adjustment in the code.
  - **Source:** Bike/OutlineEditor/Sources/OutlineEditor/OutlineEditor+Actions.swift:898-903 (typewriterMode = 0.0); EditorInner+Geometry.swift:245 (visibleHeight * settings.typewriterMode); OutlineEditor+Scrolling.swift:160-165
  - **Note:** No code computes a window-size-relative variable position; 'variable' (0.0) just places the caret at the top.
- ⚠️ **discrepancy** — There is a menu path View > Typewriter Mode > Disable Typewriter with keyboard shortcut Option-Command-T to disable typewriter mode.
  - **Guide says:** View > Typewriter Mode > Disable Typewriter (Option-Command-T)
  - **Actual:** There is no separate 'Disable Typewriter' item. The same single toggle item is retitled to 'Disable Typewriter Mode' (with 'Mode') when typewriter mode is enabled. Shortcut Option-Command-T is correct.
  - **Source:** Bike/OutlineEditor/Sources/OutlineEditor/OutlineEditor+Actions.swift:948-950; Bike/BikeMac/BikeMac/Base.lproj/Main.storyboard:953-958
  - **Note:** Same toggle as Enable; live title is 'Disable Typewriter Mode' (includes 'Mode'), and it is not a distinct menu entry.

### using-bike/using-windows.md
*26 claims · 1 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — To leave windows open when quitting Bike, open Settings > Document and make sure 'When quitting Bike: Close documents' is not checked
  - **Guide says:** Label/setting reads 'When quitting Bike: Close documents'
  - **Actual:** The Document settings pane label is 'When Quit Bike:' (not 'When quitting Bike:') and the checkbox is 'Close documents'. The setting/behavior (uncheck to re-open documents) is correct, but the exact label wording in the guide ('When quitting Bike:') does not match the app's 'When Quit Bike:'.
  - **Source:** Bike/BikeMac/BikeMac/Settings Window/Document/DocumentSettingsViewController.xib:195 (label title 'When Quit Bike:'), :205 (checkbox title 'Close documents'), :220 (help: 'Leave unchecked if you want Bike to re-open your documents.')
  - **Note:** Substantively correct (Settings > Document, 'Close documents' checkbox, leave unchecked to restore windows). Only the label prefix differs: app shows 'When Quit Bike:' vs guide's 'When quitting Bike:'.

### using-bike/using-sidebar.md
*16 claims · 2 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — To pin a row, select the row and use the menu command Go > Pin.
  - **Guide says:** Go > Pin
  - **Actual:** Outline > Pin Row
  - **Source:** Bike/BikeMac/BikeMac/Base.lproj/Main.storyboard:638-642 (Pin Row item, title="Pin Row", inside the Outline submenu which starts at :640); selector toggleSidebarPin:
  - **Note:** The menu item is titled "Pin Row" and lives in the Outline menu, not "Pin" in the Go menu. The Go menu (:846) does not contain a Pin item.
- ⚠️ **discrepancy** — To unpin a row, select the pinned row and use the menu command Go > Unpin.
  - **Guide says:** Go > Unpin
  - **Actual:** Outline > Pin Row (same item, shown checked when pinned); a separate "Unpin" exists only in the sidebar right-click context menu
  - **Source:** Bike/BikeOutliner/BikeOutliner/Outline View/OutlineView+Actions.swift:761-770 (toggleSidebarPin: sets menuItem.state .on/.off rather than retitling); SidebarViewController+ContextMenu.swift:18-25 (context-menu "Unpin"); Main.storyboard:846 (Go menu has no Unpin)
  - **Note:** There is no "Go > Unpin" main-menu command. The Outline > Pin Row item toggles pinning (it shows a checkmark when the row is pinned). An "Unpin" title appears only in the sidebar's right-click context menu.

### using-bike/using-status-bar.md
*20 claims · 5 discrepancy · 1 unverifiable*

- ⚠️ **discrepancy** — The status bar provides access to options, statistics, a row type picker, and editor settings.
  - **Guide says:** options, statistics, row type picker, and editor settings
  - **Actual:** The status bar HStack contains: an Editor Settings button, a Row Type picker, an optional status message, optional command buttons, and a Statistics button. There is no separate "options" element — the only settings button is the Editor Settings (lightswitch) button.
  - **Source:** Bike/BikeMac/BikeMac/Workspace Window/Views/Document Pane/StatusBarView.swift:16-47
  - **Note:** Row type picker, statistics, and editor settings are present. The distinct "options" item the guide lists does not exist as a separate control.
- ⚠️ **discrepancy** — When an option is set the options button is highlighted.
  - **Guide says:** An "options button" highlights when an option is set
  - **Actual:** There is no separate "options button". The Editor Settings button shows a lit icon (lightswitch.on) when hasActiveEditorSettings is true (writing focus enabled, typewriter enabled, or font zoom != 0).
  - **Source:** StatusBarView.swift:55-77 (editorSettingsButton) and :145-150 (hasActiveEditorSettings)
  - **Note:** The highlight-when-active behavior is real but belongs to the Editor Settings button, not a distinct options button.
- ⚠️ **discrepancy** — Clicking the options button gives access to writing focus mode, typewriter mode, and text wrap settings.
  - **Guide says:** writing focus mode, typewriter mode, and text wrap settings
  - **Actual:** The Editor Settings popover offers Writing Focus, Typewriter Mode, and a font-size Zoom slider. There is no "text wrap" setting in the popover (EditorSettings has lineWidth but it is not exposed here).
  - **Source:** StatusBarView.swift:194-304 (EditorSettingsPopoverView: writingFocusSection, typewriterSection, zoomSection)
  - **Note:** Writing focus and typewriter are correct; "text wrap" is not among the options shown (zoom is the third section instead).
- ⚠️ **discrepancy** — Rows is an available text statistic.
  - **Guide says:** Rows
  - **Actual:** There is no "Rows" statistic. The available statistics are: Characters, Without Spaces, Words, Sentences, Paragraphs, Tasks, Reading Time, Speaking Time.
  - **Source:** StatusBarView.swift:316-323 (statistics popover rows) and :157-188 (buildItems)
  - **Note:** Guide lists "Rows" but the app offers Sentences and Paragraphs (and Without Spaces) instead; no row-count statistic exists.
- ⚠️ **discrepancy** — The editor settings button is on the right side of the status bar.
  - **Guide says:** Editor settings button on the right side
  - **Actual:** The editor settings button is the first (leftmost) item in the status bar HStack; the Spacer pushes the statistics button to the right. So editor settings is on the LEFT, statistics on the right.
  - **Source:** StatusBarView.swift:16-47 (HStack order: editorSettingsButton is the FIRST item, line 17; statisticsButton is last, line 46, after Spacer at line 29)
- ❔ **unverifiable** — View > Text Statistics shows the statistics popover.
  - **Guide says:** View > Text Statistics menu command
  - **Actual:** No menu item titled "Text Statistics" exists in the storyboard, and no statistics command appears in bike_get_commands. The statistics popover is opened by clicking the status bar statistics button, not a View menu item.
  - **Source:** Main.storyboard (no "Text Statistics" menu item found via grep); mcp__bike__bike_get_commands (no statistics command in public command list)
  - **Note:** Could not find a View > Text Statistics command in any authoritative source; the claim appears to describe a menu path that does not exist. Marked unverifiable rather than discrepancy because the storyboard View menu may carry items not surfaced by grep, but no evidence supports the claim.

### using-bike/bike-markdown-format.md
*39 claims · 2 discrepancy · 2 unverifiable*

- ⚠️ **discrepancy** — Highlight inline formatting uses the syntax `[text]{highlight}`.
  - **Guide says:** [text]{highlight}
  - **Actual:** Highlight is serialized as ==text== (the mark attribute). Bike does NOT use [text]{highlight}; the attribute key is 'mark', not 'highlight'. The live app round-tripped highlighted text to '==highlighted text=='.
  - **Source:** RowText+Markdown+Encode.swift:450-451,473 (case .mark: append '=='); RowText+Markdown+SpanNode.swift:39-40,467-545 (mark tagName='mark', decode parses ==...==); extension-kit/api/app/outline.d.ts:433 (TextAttributeName 'mark' // was highlight); LIVE bike_get_outline output markdown: '- This has ==highlighted text== in it'
  - **Note:** Same error recurs in the guide's 'Inline attributes' example at line 79 ('[highlighted text]{highlight}'). The Text Formatting table row and that example should both use ==text==.
- ⚠️ **discrepancy** — A done task can be serialized as `- [x] Write initial draft {done}` using a {done} attribute.
  - **Guide says:** - [x] Write initial draft {done}
  - **Actual:** Done state is encoded solely via the '[x]' checkbox; the 'done' attribute is explicitly stripped from the trailer (line 131), so NO {done} attribute is written. Live app produced '- [x] Done task' with no {done}.
  - **Source:** BikeMarkdownEncoder+Encode.swift:79-84 (task with done attr -> '- [x] ' prefix) AND :129-131 (rowAttributes.removeValue(forKey: 'done') — the done attribute is REMOVED before writing the trailer); live markdown output for a done task: '- [x] Done task' (no {done} trailer)
  - **Note:** The guide's complete-example line 130 '- [x] Write initial draft {done}' would not be produced by Bike. The {done} trailer is redundant and not emitted; decode derives done from the [x] checkbox.
- ❔ **unverifiable** — Row IDs are encoded in the markdown only when referenced by a link within the document, or when the ID appears to have been set explicitly (not auto-generated).
  - **Guide says:** IDs written only when link-referenced or explicitly set
  - **Actual:** The markdown encoder unconditionally writes an 'id' trailer whenever the row has a persistentId. The 'only when referenced/explicit' filtering is NOT in BikeMarkdownEncoder; it must live in the layer that assigns/promotes persistentId before encoding (not located in OutlineEncoder). Could not confirm the referenced-by-link / auto-generated heuristic in the authoritative file format source.
  - **Source:** BikeMarkdownEncoder+Encode.swift:142-144 (writes rowAttributes['id'] whenever row.persistentId != nil)
  - **Note:** Whether a row HAS a persistentId at encode time is decided upstream (e.g. on link creation or explicit id assignment); the encoder itself has no such conditional. Mark unverifiable rather than discrepancy because the behavior may be implemented in app/outline code not covered by the file-format source.
- ❔ **unverifiable** — Auto-generated row IDs are omitted from the markdown output.
  - **Guide says:** auto-generated IDs omitted
  - **Actual:** The encoder cannot distinguish auto-generated from explicit IDs; it just writes row.persistentId when present. Any 'omit auto-generated' logic depends on whether persistentId is populated upstream, which is outside the file-format source examined.
  - **Source:** BikeMarkdownEncoder+Encode.swift:142-144 (encoder writes id iff row.persistentId set; no auto-generated-vs-explicit distinction here)
  - **Note:** Same caveat as c26: the load-bearing logic is upstream of the markdown encoder and was not found in OutlineEncoder.

### using-bike/bike-opml-format.md
*18 claims · 2 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — The <head> can contain a <script id="outline-metadata" type="text/json"> block with the root id and spell-checker ignored words.
  - **Guide says:** script id="outline-metadata" type="text/json" block contains the root id AND spell-checker ignored words
  - **Actual:** The script block element name/attrs (id="outline-metadata", type="text/json") are correct (BikeEncoder.swift:243-245). But it does NOT contain the root id: writeHeader calls writeFrontmatter without includeRootId (defaults false), so the frontmatter holds only persistentMetadata + ignore-words. The root id is written separately as the <body id="..."> attribute, confirmed in the live export. The block is also omitted entirely when there is no metadata/ignored words.
  - **Source:** BikeEncoder.swift:228-251 (writeHeader); Frontmatter.swift:56-72 (writeFrontmatter, includeRootId defaults false); OPMLEncoder.swift:42-44 (root id written as <body id>); LIVE export line 6: <body id="aCRtj96BL3lU2YIgZkJfX">
  - **Note:** Element name and 'ignored words' part are correct; attributing the root id to the script block is wrong - the root id is the <body> id attribute.
- ⚠️ **discrepancy** — The valid type attribute values are heading, quote, code, note, task, ordered, unordered, and hr.
  - **Guide says:** type values: heading, quote, code, note, task, ordered, unordered, hr
  - **Actual:** Source RowType.description yields: body, heading, quote, code, note, unordered, ordered, task, page, hr. The guide's list of non-default types is missing 'page' (description string "page", Row+Type.swift:91-92). All listed values are valid; the list is presented as complete but omits 'page'.
  - **Source:** /Users/jessegrosjean/Documents/GitHub/@bike-outliner/Bike/Outline/Sources/Outline/Row+Type.swift:71-95 (RowType.description)
  - **Note:** Minor: every value the guide lists is correct; it just omits the 'page' row type.

### using-bike/using-scripts.md
*12 claims · 0 discrepancy · 3 unverifiable*

- ❔ **unverifiable** — In Script Editor, View > Show Navigation Bar displays the language selector if none is shown at the top left of the document.
  - **Guide says:** Script Editor: View > Show Navigation Bar reveals the language selector
  - **Actual:** Concerns Apple's Script Editor menu structure, not the Bike app; no authoritative source in the Bike repo covers this.
  - **Source:** No Bike-repo source maps to Apple's Script Editor menus.
  - **Note:** Accurate to known macOS Script Editor behavior but outside the routed authoritative sources.
- ❔ **unverifiable** — In Script Editor, the Script Editor Help is accessed via Help > Script Editor Help.
  - **Guide says:** Script Editor: Help > Script Editor Help
  - **Actual:** Concerns Apple's Script Editor menu, not the Bike app; no authoritative Bike-repo source covers it.
  - **Source:** No Bike-repo source maps to Apple's Script Editor menus.
  - **Note:** Consistent with standard macOS app Help menu convention but outside routed sources.
- ❔ **unverifiable** — Script Editor Help contains a section titled "Access your scripts using the Script menu" that explains enabling and saving scripts into the system script menu.
  - **Guide says:** Apple's Script Editor Help has that section
  - **Actual:** Apple's offline Help content is not fetchable as a URL and no Bike-repo source covers it.
  - **Source:** Apple Script Editor Help (offline help book); no checkable authoritative source.
  - **Note:** Cannot confirm exact section title without access to Apple's help book.

### using-bike/using-commands.md
*40 claims · 3 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — The Commands Explorer has a mode picker at the top to switch between Text Mode and Block Mode.
  - **Guide says:** A mode picker at the top switches between Text Mode and Block Mode
  - **Actual:** There is no mode picker. Text Mode and Block Mode are shown side-by-side as two separate Table columns ('Text Mode' and 'Block Mode'); you do not switch between them. The toolbar contains only Title, Toggle Palette, Keybindings File, and Help items.
  - **Source:** Bike/BikeMac/BikeMac/Commands Explorer/CommandsExplorerView.swift:30-83 (Table columns); toolbar at 126-161
- ⚠️ **discrepancy** — Sorting by the Keybinding column shows the order keybindings are processed in.
  - **Guide says:** Sort by the 'Keybinding' column to see process order
  - **Actual:** There is no column named 'Keybinding'. Columns are ⌘, Command, Text Mode, Block Mode, and Source. Sorting is available on each of these (sortOrder/KeyPathComparator), but no single 'Keybinding' column exists, and the default sort is by Source then Command name (CommandsExplorerViewModel.swift:41-44).
  - **Source:** Bike/BikeMac/BikeMac/Commands Explorer/CommandsExplorerView.swift:32-83 (table columns are: '⌘', 'Command', 'Text Mode', 'Block Mode', 'Source')
- ⚠️ **discrepancy** — When multiple commands share the same key sequence, the one with the lowest process order takes priority.
  - **Guide says:** Lowest process order takes priority
  - **Actual:** Conflict resolution is by a numeric `priority` where the HIGHEST priority wins (User=100, default sources=0, menu=-1, cocoa=-2). There is no exposed 'process order' concept/number, and 'lowest takes priority' inverts the actual highest-wins behavior.
  - **Source:** Bike/OutlineEditor/Sources/OutlineEditor/Keymaps/Keymap.swift:80,88-94 (matches sorted by `$0.priority > $1.priority` — highest priority wins); EditorKeybindings.swift:41,46 (User bindings added with priority: 100); Keymap.swift:29-48 (menu priority -1, cocoa priority -2)

### using-bike/using-software-update.md
*7 claims · 3 discrepancy · 0 unverifiable*

- ⚠️ **discrepancy** — You can check for updates using the menu command Bike > Check for Updates.
  - **Guide says:** Menu item titled 'Check for Updates' under the Bike menu
  - **Actual:** The menu item title in the storyboard is 'Check for Update…' (singular 'Update', with an ellipsis). The guide writes it as 'Check for Updates' (plural, no ellipsis).
  - **Source:** /Users/jessegrosjean/Documents/GitHub/@bike-outliner/Bike/BikeMac/BikeMac/Base.lproj/Main.storyboard:23 (menuItem title="Check for Update…")
  - **Note:** Menu location (Bike menu, outlet checkForUpdatesMenuItem) is correct, but the exact title differs: 'Check for Update…' vs guide's 'Check for Updates'. Live menu title could not be read via MCP (editor-context only); storyboard is the authoritative source.
- ⚠️ **discrepancy** — You can enable automatic update checks via Bike > Settings > Check for Updates: Automatically.
  - **Guide says:** Setting labeled 'Check for Updates: Automatically'
  - **Actual:** The actual checkbox label in General settings is 'Check for Updates automatically' (no colon, no separate 'Automatically' word). The setting exists and does control automatic checks (checkForUpdatesAutomatically key).
  - **Source:** /Users/jessegrosjean/Documents/GitHub/@bike-outliner/Bike/BikeMac/BikeMac/Settings Window/General/GeneralSettingsViewController.xib:257 (buttonCell title="Check for Updates automatically")
  - **Note:** Setting and location verified; only the exact label wording differs from the guide's 'Check for Updates: Automatically'.
- ⚠️ **discrepancy** — You can include preview release updates via Bike > Settings > Check for Updates: Include Preview Releases.
  - **Guide says:** Setting labeled 'Check for Updates: Include Preview Releases'
  - **Actual:** The actual checkbox label is 'Include "Preview" releases in updates' (key checkForUpdatesIncludePreviews). It is a separate checkbox, not a 'Check for Updates: Include Preview Releases' option.
  - **Source:** /Users/jessegrosjean/Documents/GitHub/@bike-outliner/Bike/BikeMac/BikeMac/Settings Window/General/GeneralSettingsViewController.xib:270 (buttonCell title="Include \"Preview\" releases in updates")
  - **Note:** Setting and location verified; the exact label wording differs from the guide.

### using-bike-advanced/creating-scripts.md
*54 claims · 3 discrepancy · 4 unverifiable*

- ⚠️ **discrepancy** — make row with properties {id:"boom", name:"My id is boom"}.
  - **Guide says:** make row with properties {id:"boom", ...} creates a row with string id 'boom'
  - **Actual:** In Bike 2 this errors: 'Bike got an error: Can’t make "boom" into type integer. (-1700)'. `id` is now a read-only numeric integer; the writable string id is `persistent id`. Correct form: make row with properties {persistent id:"boom", ...} (verified working live).
  - **Source:** Bike.sdef:139 (id is integer, access='r'); live osascript error
- ⚠️ **discrepancy** — A row can be referenced by id with `row id "boom"`.
  - **Guide says:** row id "boom" references a row by its string id
  - **Actual:** `row id` takes the numeric integer id (live: 'exists row id <numericId>' = true). A string like "boom" is not a valid `id`. To look up the string id use `get row persistent id "boom"` (Bike.sdef:307-318) or `row id <numericId>`.
  - **Source:** Bike.sdef:139 (id type='integer'); live osascript
- ⚠️ **discrepancy** — Existence of a row by id with `if exists row id "boom"`.
  - **Guide says:** `exists row id "boom"` tests existence by string id
  - **Actual:** `row id` expects a numeric integer id (live: 'exists row id <numericId>' = true). A string id no longer works here; same root cause as c23/c25.
  - **Source:** Bike.sdef:139; live osascript
- ❔ **unverifiable** — You can open Bike's scripting dictionary by dragging and dropping Bike onto Script Editor's application icon.
  - **Source:** macOS Script Editor behavior (not in Bike repo)
  - **Note:** Standard macOS Script Editor capability; no authoritative Bike source covers it, but it is accurate general behavior.
- ❔ **unverifiable** — You can open Bike's scripting dictionary from Script Editor using File > Open Dictionary and choosing Bike's dictionary.
  - **Source:** macOS Script Editor menus (not in Bike repo)
  - **Note:** Standard Script Editor menu path; accurate but outside Bike's authoritative source. Bike.sdef confirms Bike ships a scripting dictionary.
- ❔ **unverifiable** — If a given id is already in use when making a row, the row is still made but assigned a different id.
  - **Source:** Bike.sdef:140-145 (persistent id is settable text)
  - **Note:** The string-id 'make' form the claim describes no longer applies (see c23). Could not confirm the duplicate-persistent-id fallback behavior; the claim as written (about {id:...}) is moot since that form errors.
- ❔ **unverifiable** — Restoring a saved selection via `select at` expands rows needed to show the selection.
  - **Source:** Bike.sdef:320-328 (select command); live select succeeded but expand side-effect not directly observed
  - **Note:** select at executes without error after collapse root row with all; the auto-expand side-effect is plausible app behavior but I did not assert/verify expanded state programmatically.

### using-bike-advanced/creating-shortcuts.md
*8 claims · 1 discrepancy · 1 unverifiable*

- ⚠️ **discrepancy** — Bike provides a shortcut action named "Show Matches".
  - **Guide says:** A Bike-provided shortcut action named "Show Matches"
  - **Actual:** No AppIntent titled "Show Matches" exists. Bike's action titles are: Evaluate Script, Query Rows, Configure Bike, Export Rows, Move Rows, Create Row, Delete Rows, Create Outline, Get Rows, Edit Rows, Focus Row, Import Rows, Fold Rows, Get Selection, Open Outline, Open Row. The page itself (line 9) describes "Bike: Show Matches" as a user shortcut the author is creating, not a Bike-provided action — so the extracted claim mis-characterizes the page. "Show Matches" is one of the example user-built shortcuts listed on the linked hogbaysoftware tutorial post.
  - **Source:** /Users/jessegrosjean/Documents/GitHub/@bike-outliner/Bike/BikeMac/BikeMac/Automation/Shortcuts/Intents/ (grep of all `static let title` values)
  - **Note:** The page wording ('a Bike: Show Matches shortcut that I'm creating') is accurate; it does NOT claim Bike provides a Show Matches action. The claim as stated is the inaccuracy.
- ❔ **unverifiable** — In the Shortcuts app, the action documentation is viewed by mousing over the action and clicking the (i) information button.
  - **Source:** macOS Shortcuts app UI (third-party Apple app) — no authoritative source in the Bike repo or live Bike app covers Shortcuts.app UI behavior
  - **Note:** This describes Apple's Shortcuts app interface, which is outside the Bike codebase. It matches accompanying screenshot /assets/shortcut_information.png but cannot be confirmed against an authoritative Bike source.

