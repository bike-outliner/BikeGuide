# Bike OPML Format

OPML (`.opml`) is a widely supported standard for exchanging outlines between applications. Use it when you want to move an outline between Bike and another [OPML compatible app](../bike-compatible-apps.md).

OPML is best thought of as an interchange format rather than a full-fidelity one. Bike preserves its own data in the file using extra attributes, but other OPML apps will ignore those and see only plain text — so row types and rich formatting don't reliably survive a round trip through another app. For full fidelity, save as [Bike HTML Format](bike-html-format.md) or [Bike Markdown Format](bike-markdown-format.md) instead. For an overview of all of Bike's formats, see [Using Documents](using-documents.md).

### Document structure

A `.opml` file is an XML document with an `<opml>` root, a `<head>` for document metadata, and a `<body>` that holds the outline:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<opml version="2.0">
  <head>
    <meta charset="utf-8">
  </head>
  <body id="root123">
    <outline id="aR3" text="A plain row"/>
  </body>
</opml>
```

- Bike writes OPML version `2.0`.
- The `<head>` carries Bike's document metadata (and, when present, a `<script id="outline-metadata" type="text/json">` block with things like the root id and spell-checker ignored words).
- Each row is an `<outline>` element. Child rows are nested directly inside their parent `<outline>`, which is how hierarchy is encoded.

### Rows

Every row's text lives in the standard OPML **`text`** attribute — this is what other OPML apps read. Bike adds more attributes alongside it to preserve its own data:

- **`text`** — the row's text (see [Text formatting](#text-formatting) below).
- **`id`** — the row's persistent id, used by [row links](using-links.md).
- **`type`** — the [row type](row-types.md), written only when it isn't the default `body`. Type values are `heading`, `quote`, `code`, `note`, `task`, `ordered`, `unordered`, and `hr`.
- **`created` / `modified`** — ISO 8601 timestamps, written when the document is set to keep row dates.
- Any other [row attributes](row-types.md) are written by name. For example, a finished task carries a `done` attribute with a timestamp.

```xml
<outline id="cT2" type="task" done="2024-02-26T12:00:00Z" text="A finished task"/>
```

### Text formatting

Inline formatting is stored inside the `text` attribute as Markdown. So bold, italic, and links are written with their Markdown syntax:

```xml
<outline id="bX7" text="Some **bold** and *italic* text with a [link](https://example.com)"/>
```

Other OPML apps that don't understand Markdown will simply show the literal characters, which is why formatting is best preserved in Bike's own formats.

### Example

Here's a complete `.opml` document showing several features together:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<opml version="2.0">
  <head>
    <meta charset="utf-8">
  </head>
  <body id="root123">
    <outline id="aR3" type="heading" text="Project Notes">
      <outline id="bX7" text="A row with **bold** and *italic* text"/>
      <outline id="cT2" type="task" done="2024-02-26T12:00:00Z" text="Write the first draft"/>
    </outline>
  </body>
</opml>
```

### See also

* [Using Documents](using-documents.md)
* [Bike Compatible Apps](../bike-compatible-apps.md)
* [Bike HTML Format](bike-html-format.md)
* [Bike Markdown Format](bike-markdown-format.md)
