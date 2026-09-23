# Other Bike Formats

Bike's main formats are [Bike HTML](bike-html-format.md) (`.bike`) and [Bike Markdown](bike-markdown-format.md) (`.md`). It also reads and writes these formats for moving outlines between apps and tools.

## OPML

OPML (`.opml`) is the standard format for moving outlines between [outliner apps](../bike-compatible-apps.md). Bike stores its own data in extra attributes, but other apps ignore them, so row types and formatting may not survive a round trip.

## HTML

A `.bike` file is already HTML. Save it with an `.html` extension if you want other apps to treat it as HTML. See [custom file extensions](using-documents.md#file-extensions).

## JSON

JSON (`.json`) holds your full outline: every row, its type and attributes, and the hierarchy. It's the easiest format to process with scripts.

## Plain Text

Plain text (`.txt`) uses tab indentation for hierarchy. Row types, attributes, formatting, and the row ids that [row links](outline-links.md) need are all lost.

## Rich Text

Rich text keeps bold, italic, and links, but not row types, attributes, or ids. Use it to paste into Mail or a word processor.

## Copying in Any Format

The Edit > Copy submenu copies the selection (rows and their children) in any of these formats:

* **Copy** (<kbd>Command-C</kbd>): Bike's native format
* **Copy Markdown Text**
* **Copy HTML Text**
* **Copy OPML Text**
* **Copy JSON Text**
* **Copy Rich Text**
* **Copy Plain Text**

**Copy Displayed** copies only the rows you can see, skipping rows hidden by folding or filtering.

The Edit > Paste submenu has **Paste and Render Markdown**, **Paste and Render HTML**, and **Paste and Render OPML**.

## See also

* [Using Documents](using-documents.md)
* [Bike HTML Format](bike-html-format.md)
* [Bike Markdown Format](bike-markdown-format.md)
* [Bike Compatible Apps](../bike-compatible-apps.md)
