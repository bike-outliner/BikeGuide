# Bike HTML Format

Bike (`.bike`) is Bike's native file format and the one I recommend for everyday use. It supports every Bike feature with full fidelity. It's also a valid HTML document, so you can open a `.bike` file directly in any web browser and it renders as a nested list.

Because the file is well-formed XML as well as HTML, you can also process `.bike` files with standard XML tools. XPath and XQuery work over them, which is handy for searching across a whole folder of outlines.

If you want a plain-text format instead, see [Bike Markdown Format](bike-markdown-format.md). For an overview of all of Bike's formats, see [Using Documents](using-documents.md).

## Document Structure

A `.bike` file is an HTML document. The outline lives in a nested list inside the `<body>`:

```html
<?xml version="1.0" encoding="UTF-8"?>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <ul>
      <li id="aR3">
        <p>A plain row</p>
      </li>
    </ul>
  </body>
</html>
```

- The top-level `<ul>` is the outline's hidden root.
- Each row is an `<li>` containing a `<p>` with the row's text.
- A row that contains other rows holds a nested `<ul>` of child `<li>` elements, which is how hierarchy is encoded.

## Rows

Each `<li>` carries the row's identity and metadata as attributes:

- **`id`**: the row's persistent id, stable across edits and used by [row links](outline-links.md).
- **`data-type`**: the [row type](row-formatting.md), written only when it isn't the default `body`. For example `data-type="heading"` or `data-type="task"`. Type values are `heading`, `quote`, `code`, `note`, `task`, `ordered`, `unordered`, and `hr`.
- **`data-created` / `data-modified`**: ISO 8601 timestamps, written when the document is set to keep row dates.

## Row Attributes

Rows can carry extra attributes. Standard HTML attributes (`class`, `title`, `style`, `lang`, `dir`, `xml:lang`) are written as-is. Every other attribute is prefixed with `data-` so the file stays valid HTML. For example, when you check off a task, Bike records it as `data-done` with a timestamp:

```html
<li id="cT2" data-type="task" data-done="2024-02-26T12:00:00Z">
  <p>A finished task</p>
</li>
```

## Text Formatting

Inline formatting inside a row's `<p>` uses standard HTML tags:

| Format        | Tag                  |
| ------------- | -------------------- |
| Bold          | `<strong>`           |
| Italic        | `<em>`               |
| Code          | `<code>`             |
| Strikethrough | `<s>`                |
| Highlight     | `<mark>`             |
| Superscript   | `<sup>`              |
| Subscript     | `<sub>`              |
| Link          | `<a href="…">`       |

So a row with mixed formatting looks like this:

```html
<li id="dF9">
  <p>Some <strong>bold</strong> and <em>italic</em> text with a <a href="https://example.com">link</a></p>
</li>
```

## Document Metadata

The `<head>` always includes `<meta charset="utf-8">`. When the document has metadata to store (such as the root id or your spell-checker's ignored words), Bike writes it as a JSON block in a script element:

```html
<head>
  <meta charset="utf-8">
  <script id="outline-metadata" type="text/json">
    {"root-id":"c43J5daN"}
  </script>
</head>
```

Bike manages this block automatically; you don't need to edit it by hand.

## Example

Here's a complete `.bike` document showing several features together:

```html
<?xml version="1.0" encoding="UTF-8"?>
<html>
  <head>
    <meta charset="utf-8">
    <script id="outline-metadata" type="text/json">
      {"root-id":"root123"}
    </script>
  </head>
  <body>
    <ul>
      <li id="aR3" data-type="heading">
        <p>Project Notes</p>
        <ul>
          <li id="bX7">
            <p>A row with <strong>bold</strong> and <em>italic</em> text</p>
          </li>
          <li id="cT2" data-type="task" data-done="2024-02-26T12:00:00Z">
            <p>Write the first draft</p>
          </li>
        </ul>
      </li>
    </ul>
  </body>
</html>
```

## See also

* [Using Documents](using-documents.md)
* [Bike Markdown Format](bike-markdown-format.md)
