# Using Attributes

An attribute is a `key : value` pair attached to a row. Attributes let you store extra information on a row beyond its text. A priority, a due date, a status. You can then filter, style, or otherwise act on your outline based on those attribute values.

Every row already carries a few built-in attributes, such as `@id`, `@type`, and `@level`. Others get added as you work: check off a task, for example, and Bike records a `@done` attribute on that row. You can add your own attributes on top of these.

### Badges

Some attributes display as a badge at the end of the row. For example, if a row has an attribute `@priority : 1`, Bike shows a small `P1` badge after the text, and you can click that badge to pick a different priority.

Bike ships with badges for a handful of built-in attributes. If you want badges for your own custom attributes, you can define them with the extension API. See [Creating Extensions](../using-bike-advanced/creating-extensions.md).

### Filtering by attribute

Outline paths use `@` to name the attribute you want to test against:

* `//@done` — rows that have a `@done` attribute.
* `//not @done` — rows that don't.
* `//@priority = 1` — rows whose `@priority` is `1`.

You can combine tests with `and`, `or`, and `not` to build up exactly the view you want. See [Creating Outline Paths](../using-bike-advanced/creating-outline-paths.md) for the full query language, and the Outline Path Explorer, which shows every attribute on every row so you can see what's available to filter on.

::: tip
Attributes are saved with your document. In [Bike Markdown](bike-markdown-format.md) they're written using Pandoc's attribute syntax — `- A row {priority=1}`. In [Bike HTML](bike-html-format.md) they are stored as `data-` attributes on the corresponding HTML elements.
:::

### See also

* [Creating Outline Paths](../using-bike-advanced/creating-outline-paths.md)
* [Links](outline-links.md)
