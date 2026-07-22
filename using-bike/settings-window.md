# Settings Window

Open Bike's settings with Bike > Settings… (<kbd>Command-,</kbd>). The window is split into panes along the top — **General**, **Typography**, **Appearance**, **Autocorrect**, **Links**, **Document**, **Extensions**, **Sandbox**, and **License** — and almost everything about how Bike looks and behaves is configured here.

These settings are global: they apply to every document. For settings that belong to a single document — its spell-check language, file type, and whether it stores row dates — see [Document Info](using-documents.md#document-info) instead.

### General

The catch-all pane for editor behavior and app-wide options.

* **Editor** — toggles for the editing surface: *Show caret line*, *Show row guide lines*, *Show row focus arrows*, *Hide outline controls when typing* (so nothing competes with your writing), and *Sort completed tasks to end of list*.
* **Menus** — *Show action images* turns the small icons in menus on or off.
* **Animations** — *Enable editor animations* and *Enable editor typing animations*, plus *Disable animations in macOS Low Power Mode* and an animation-rate slider (0.5x–2.0x) if you like Bike's motion faster or slower.
* **Updates & Reports** — *Check for Updates automatically*, *Include "Preview" releases in updates* (see [Using Software Update](using-software-update.md)), and *Prompt to send crash reports*. The update options are hidden in the Mac App Store and Setapp versions, which update through their stores.
* **Advanced** — buttons to open the [Interface Explorer](using-interface-explorer.md), [Commands Explorer](using-commands.md), Extensions Explorer ([Using Extensions](using-extensions.md)), and [Logs Explorer](using-logs.md), plus a **Reset All Settings** button.

### Typography

Controls the font and spacing of your outline:

* **Font** and **Font Size** (10–32pt). The font menu starts with "System".
* **Allow size scale when line wraps at character width** — lets Bike scale text up to better fill large windows when [text wrap](editor-view-settings.md#text-wrap) is on.
* **Line Width** — wrap to the editor's width or to a fixed column (66, 72, 80, 90, or 120 characters). This is the same setting described under [Text Wrap](editor-view-settings.md#text-wrap).
* **Line Height** (1.0x–2.0x) and **Row Spacing** for the space within and between rows.
* **Reset Typography Settings** returns this pane to its defaults.

### Appearance

Choose how Bike looks in light and dark mode:

* **Auto / Light / Dark** — follow the system appearance or pin Bike to one.
* **Light Theme** and **Dark Theme** — pick a separate [theme](using-themes.md) for each mode. Themes specify colors and fonts. **Open Themes Folder…** reveals where themes live so you can add your own.
* **Editor Style** — the ruleset that defines your outline's layout and styling, similar to CSS; themes are inputs to it. You can create your own, but unlike a theme it requires some programming. See [Using Themes](using-themes.md) and [Creating Themes](../using-bike-advanced/creating-themes.md).

### Autocorrect

Bike's text-correction options, covered in more depth in [Outline Checking](outline-checking.md):

* **Spelling** — *Correct spelling automatically* and *Capitalize words automatically*.
* **Formatting** — *Use smart links*, *Use smart quotes*, *Use smart dashes*, and *Use smart row types* (the markdown shortcuts that set [row types](row-formatting.md) — type `#` for a heading, and so on).
* **Replacements** — *Use text replacements* and *Use double-space for period*.
* **Undo** — *Use delete to undo autocorrections* lets you press <kbd>Delete</kbd> right after a correction to revert it, which is often quicker than Undo.

### Links

Decide what happens when you activate a [row link](outline-links.md). Each of plain **Click**, **⌘-Click**, and **⌥⌘-Click** can open in the current view, a new tab, or a new window. There's also *When a new tab or window opens, make it active* (hold <kbd>Shift</kbd> to reverse that for a single click), and an option to *Use ⌘-1 through ⌘-9 to switch tabs*.

### Document

Defaults for new documents and windows:

* **New Document** — the [file format](other-bike-formats.md) new documents use by default.
* **Save row created & modified attributes** — whether new documents record row dates (only available for formats that can store row attributes). This mirrors the per-document option in [Document Info](using-documents.md#document-info).
* **Show welcome text** — whether new outlines start with welcome content.
* **New Window** — *Match the current window's layout*, or use a layout you capture with **Save Window Layout**. See [Window Layout](using-windows.md#window-layout).
* **When Open** — for documents you open while Bike is already running, expand no rows, all rows, or just level-one rows. See [Open Options](using-documents.md#open-options).
* **When Quit Bike** — *Close documents*, or leave it unchecked to have Bike re-open your documents next launch. This is the setting behind [window restoration](using-windows.md#bike-window-restoration).

### Extensions

A home for settings that [extensions](using-extensions.md) add. When you have no extensions with settings it shows "No Extension Settings". Use Bike > Extensions Explorer to install and remove extensions, and the [Interface Explorer](using-interface-explorer.md) to arrange the UI they add.

### Sandbox

Grant Bike access to folders of outlines. This is only needed so Bike can resolve [row links](outline-links.md) to documents that aren't already open — without access to the containing folder, Bike can't find the document and the link fails. Use **Add** to grant a folder and **Remove** to revoke it. Reopen Bike for the change to take full effect. There's more on why this matters in [Outline Links](outline-links.md).

### License

Shows your license or subscription status. What you see here depends on how you got Bike — a direct download (where you activate a purchased license), the Mac App Store, or Setapp.

### See also

* [Editor View Settings](editor-view-settings.md)
* [Using Documents](using-documents.md)
