# Bike Markdown Format

Bike Markdown is Bike's text-based file format, saved with a `.md` extension. I chose a markdown subset so that your outlines stay plain, portable text you can read, diff, and edit anywhere. Open a `.md` file in any markdown viewer and it will render reasonably well. The tradeoff of sticking to a subset is that some markdown features fall outside what Bike can represent, so Bike will warn you when you open a `.md` file that uses them.

I reach for this format when I want my outline to live as friendly plain text: in a Git repo, alongside other notes, or anywhere a `.bike` file would feel out of place. If you'd rather keep every Bike feature with full fidelity, see [Bike HTML Format](bike-html-format.md).

## Markdown Subset

Bike Markdown uses standard markdown unordered lists to encode outline hierarchy. Each row is a list item (`- `), and indentation creates nesting:

```
- Parent
	- Child
		- Grandchild
	- Another child
```

This is valid markdown. Any markdown renderer will display it as a nested list.

## Row Types

Within that list structure, Bike uses standard markdown syntax to represent different row types:

| Type            | Syntax                  | Example                 |
| --------------- | ----------------------- | ----------------------- |
| Body            | `- `                    | `- Regular text`        |
| Heading         | `- # `                  | `- # Section title`     |
| Blockquote      | `- > `                  | `- > Quoted text`       |
| Task            | `- [ ] `                | `- [ ] Incomplete task` |
| Task (done)     | `- [x] `                | `- [x] Completed task`  |
| Ordered list    | `1. `                   | `1. First item`         |
| Unordered list  | `+ `                    | `+ Bullet item`         |
| Code block      | `` - `...` ``           | `` - `code content` ``  |
| Note            | `- ` with `{type=note}` | `- A note {type=note}`  |
| Log             | `- ` with `{type=log}`  | `- Log {type=log}`      |
| Horizontal rule | `- ---`                 | `- ---`                 |

Most of these (headings, blockquotes, task checkboxes, ordered lists) are standard markdown or widely supported extensions like GFM task lists.

A task's [state](tasks-and-more.md#status) is richer than a checkbox, so only `done` writes `- [x] `. A started or canceled task writes an unchecked `- [ ] ` plus a `{status=value}` trailer.

## Text Formatting

Inline formatting uses standard markdown syntax:

| Format            | Syntax        |
| ----------------- | ------------- |
| **Bold**          | `**text**`    |
| _Italic_          | `*text*`      |
| ~~Strikethrough~~ | `~~text~~`    |
| `Code`            | `` `text` ``  |
| Highlight         | `==text==`    |
| Link              | `[text](url)` |

## Pandoc Attributes

Standard markdown has no way to attach metadata to rows or text spans. Bike rows and text _can_ carry attributes (persistent IDs, classes, timestamps, custom data) that need to be preserved in the file.

Bike Markdown uses [Pandoc's attribute syntax](https://pandoc.org/MANUAL.html#heading-identifiers) to fill this gap. Attributes are written in curly braces and support IDs, classes, and key-value pairs:

```
{#identifier .class key="value"}
```

Pandoc attributes are only written when a row or span actually uses features that require them. Plain rows with standard formatting won't have any attribute blocks in the output.

**Row attributes** appear at the end of a row:

```
- A note {type=note}
- Styled row {.highlight}
```

**Row IDs** are encoded in the markdown only when they are referenced by a [link](outline-links.md) within the document, or when the ID appears to have been set explicitly (i.e. it doesn't look auto-generated). Auto-generated IDs are omitted to keep the file clean:

```
- # Section {#intro}
- See the [intro section](#intro)
```

**Inline attributes** use Pandoc's bracketed span syntax `[text]{attrs}` for formatting that has no standard markdown equivalent. For example, custom attributes on a span of text:

```
- Price is [lo]{pizza}
```

Bike uses standard markdown syntax when it can (`**bold**`, `*italic*`, etc.) and falls back to `[text]{attrs}` only when there's no markdown equivalent.

## Attachments

Attachments use standard markdown image syntax, whatever the file type. The destination points into the document's `assets` folder:

```
- Vacation ![photo](assets/photo.png)
- Budget ![report.csv](assets/report.csv)
```

An attachment's display width, when set, is written as a Pandoc-style attribute: percentages are a fraction of the text column, bare numbers are points:

```
- ![photo](assets/photo.png){width=50%}
- ![photo](assets/photo.png){width=320}
```

## Frontmatter

Files can optionally begin with a JSON metadata block between `---` delimiters:

```
---
{"root-id":"c43J5daN"}
---

- First row
```

The frontmatter preserves document metadata like the root ID and spell-checker ignore words. Bike manages this automatically. You don't need to edit it by hand.

## Escaping

Characters that would normally be interpreted as row type prefixes are escaped with a backslash:

```
- \# This is not a heading
- \> This is not a blockquote
- \+ This is not a list item
```

Standard markdown escaping also applies for inline formatting characters like `*`, `` ` ``, `[`, `]`, etc.

## Example

Here's a complete example showing several features together:

```
---
{"root-id":"root123"}
---

- # Project Notes {#notes}
	- This has **bold** and *italic* text
	- A row with ==highlighted words==
	- > An important quote
	- [ ] Review the [documentation](https://example.com)
	- [x] Write initial draft
	1. First step
	2. Second step
	+ A bullet point
	- `console.log("hello")`
- ---
- # Another Section
	- Regular body text {created="2024-02-26"}
```

## See also

* [Using Documents](using-documents.md)
* [Row Formatting](row-formatting.md)
* [Text Formatting](text-formatting.md)
