# Row Attributes

A row attribute is a `key : value` pair attached to a row.

Attributes let you store extra information with a row. A status, a priority, a due date, an estimate. Or your own custom attributes. You can then filter, style, or otherwise act on your outline based on those attribute values.

## Context menu

Let's create an attribute using the context menu:

1. Right click on a row to show context menu
2. Choose Priority > 1 from the menu

You've now assigned the `@priority : 1` attribute to your row. The attribute is visible as a badge at the end of the row. Click that badge to pick a different priority, filter by priority, or remove the attribute. That's the essence of row attributes: you can add them, see them, and act on them.

## Attributes Editor

The Attributes Editor is a more general way to add, edit, or remove attributes. You can open it with Format > Row Attributes… or by right-clicking a row and choosing **Row Attributes…**. You can also move the cursor to the end of a row's text and press <kbd>Command-Right</kbd>.

Once visible, use the filter to select an existing attribute and value.

Few tricks:

- Use <kbd>Return</kbd> to commit the attribute value.
- Use <kbd>Command-Return</kbd> to commit an attribute value, and leave the editor open.
- Use <kbd>Command-Delete</kbd> to delete the selected attribute (or click the trash icon).
- Type a new attribute name, and select the last "add" option to create a new attribute.
- Use <kbd>Escape</kbd> to close the editor without committing changes.

## Commands

There are also commands for setting common attributes, such as "Priority: 1" and "Due: Soon". Use the [choice box](using-choice-box.md) (<kbd>Shift-Command-P</kbd>) to find them and more. You can assign your own keybindings to these commands in the [Commands Explorer](commands-explorer.md), or add buttons to the toolbar or status bar for them using the [Interface Explorer](interface-explorer.md).

## Attribute Names

Names are plain, unprefixed words: `priority`, `due`, `log-date`. Bike adds the `data-` prefix itself when it saves, so don't type it yourself — `data-due` would be stored as `data-data-due` and read back as something else, so Bike refuses it.

A few names are reserved because they already name something a row has: `id`, `text`, `type`, `created`, `modified`, and `indent`. A row's created and modified dates in particular are Bike's own, not attributes you can set; see [Using Documents](using-documents.md) for the **Save row created & modified attributes** setting that decides whether they're written to the file.

## Attribute Settings

Bike > Settings > Extensions has an **Attributes** section listing every row attribute that Bike and your extensions declare, and the ones your open documents simply happen to use. Configure how Bike handles each attribute using the provided checkbox table.

## Badges

Attributes are made visible in the outline through badges. Badges are small labels that follow the row text, like the `P1` badge we created above. Click a badge to edit its value, right-click it to remove the attribute. See [Row Badges](row-badges.md) for the details.

## See also

* [Row Badges](row-badges.md)
* [Row Log](row-log.md)
* [Tasks & More](tasks-and-more.md)
* [Creating Outline Paths](../using-bike-advanced/creating-outline-paths.md)
* [Text Formatting](text-formatting.md#links)
