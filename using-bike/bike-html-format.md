# Bike HTML Format

Bike (`.bike`) is Bike's native file format. It's valid HTML, so it opens in a web browser, and well-formed XML, so XPath and XQuery work on it.

## Document Structure

The outline is a nested list inside the `<body>`:

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
- Child rows go in a nested `<ul>`.

## Rows

Each `<li>` carries:

- **`id`**: the row's persistent id, used by [row links](outline-links.md).
- **`data-type`**: the [row type](row-formatting.md), written only when it isn't `body`. Values are `heading`, `quote`, `code`, `note`, `task`, `ordered`, `unordered`, `log`, `page`, and `hr`.
- **`data-created` / `data-modified`**: ISO 8601 timestamps, written when the document is set to keep row dates.

## Row Attributes

Standard HTML attributes (`class`, `title`, `style`, `lang`, `dir`, `xml:lang`) are written as-is. Other attributes get a `data-` prefix, which Bike strips when reading:

```html
<li id="cT2" data-type="task" data-status="started">
  <p>A task in progress</p>
</li>
```

## Text Formatting

Inline formatting uses standard HTML tags:

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

```html
<li id="dF9">
  <p>Some <strong>bold</strong> and <em>italic</em> text with a <a href="https://example.com">link</a></p>
</li>
```

## Document Metadata

Document metadata, such as the root id, is a JSON block in the `<head>`:

```html
<head>
  <meta charset="utf-8">
  <script id="outline-metadata" type="text/json">
    {"root-id":"c43J5daN"}
  </script>
</head>
```

Bike manages it automatically.

## Example

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
          <li id="cT2" data-type="task" data-status="started">
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
