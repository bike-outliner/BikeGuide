# Row Attributes

A row attribute is a `key : value` pair attached to a row, such as a status, priority, due date, or your own data. You can filter and style your outline by attribute.

## Context menu

Let's create an attribute using the context menu:

1. Right click on a row to show context menu
2. Choose Priority > 1 from the menu

The row now has `@priority : 1`, shown as a badge at the end of the row. Click the badge to change, filter by, or remove it.

## Attributes Editor

The Attributes Editor adds, edits, and removes any attribute. Open it with Format > Row Attributes…, from the row's context menu, or with <kbd>Command-Right</kbd> at the end of a row.

- Type to filter attributes and values.
- <kbd>Return</kbd> commits. <kbd>Command-Return</kbd> commits and keeps the editor open.
- <kbd>Command-Delete</kbd> deletes the selected attribute.
- To create an attribute, type its name and choose the "add" option.
- <kbd>Escape</kbd> closes without committing.

## Commands

Commands such as "Priority: 1" and "Due: Soon" are in the [choice box](using-choice-box.md) (<kbd>Shift-Command-P</kbd>). Give them keys in the [Commands Explorer](commands-explorer.md) or buttons in the [Interface Explorer](interface-explorer.md).

## Attribute Names

Names are plain words like `priority` or `log-date`. Don't start a name with `data-`. These names are reserved: `id`, `text`, `type`, `created`, `modified`, and `indent`.

## Attribute Settings

Bike > Settings > Extensions > **Attributes** lists every known attribute, with checkboxes for how Bike handles each.

## Badges

Badges show attributes at the end of a row. Click one to edit, right-click to remove. See [Row Badges](row-badges.md).

## See also

* [Row Badges](row-badges.md)
* [Row Log](row-log.md)
* [Tasks & More](tasks-and-more.md)
* [Creating Outline Paths](../using-bike-advanced/creating-outline-paths.md)
* [Text Formatting](text-formatting.md#links)
