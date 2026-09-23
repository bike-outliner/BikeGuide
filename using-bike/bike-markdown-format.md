# Bike Markdown Format

Bike Markdown (`.md`) stores your outline as a subset of standard markdown: plain text you can read, diff, and edit anywhere. Bike warns you when you open a `.md` file that uses markdown features outside that subset.

## Markdown Subset

Bike Markdown uses standard markdown unordered lists to encode outline hierarchy. Each row is a list item (`- `), and indentation creates nesting:

```
- Parent
	- Child
		- Grandchild
	- Another child
```

## Row Types

Row types use standard markdown syntax:

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

Row and text attributes that markdown can't express use [Pandoc's attribute syntax](https://pandoc.org/MANUAL.html#heading-identifiers):

```
{#identifier .class key="value"}
```

They're only written when needed.

**Row attributes** appear at the end of a row:

```
- A note {type=note}
- Styled row {.highlight}
```

**Row IDs** are written only when a [link](outline-links.md) in the document references them, or when they were set explicitly:

```
- # Section {#intro}
- See the [intro section](#intro)
```

**Inline attributes** use Pandoc's span syntax `[text]{attrs}` when markdown has no equivalent:

```
- Price is [lo]{pizza}
```

## Attachments

Attachments use markdown image syntax, whatever the file type, pointing into the document's `assets` folder:

```
- Vacation ![photo](assets/photo.png)
- Budget ![report.csv](assets/report.csv)
```

Display width is a percentage of the text column or a number of points:

```
- ![photo](assets/photo.png){width=50%}
- ![photo](assets/photo.png){width=320}
```

## Frontmatter

Files can begin with a JSON metadata block:

```
---
{"root-id":"c43J5daN"}
---

- First row
```

Bike manages it automatically.

## Escaping

Row type prefixes in text are escaped with a backslash:

```
- \# This is not a heading
- \> This is not a blockquote
- \+ This is not a list item
```

Standard markdown escaping applies to inline characters like `*` and `[`.

## Example

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
