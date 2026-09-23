# Outline Links

A Bike link points at an outline, a row, or a view. They're ordinary URLs, so they work from any app on your Mac.

## Document Links

Opens the document.

* Use Edit > Copy > Copy Document Link (<kbd>Shift-Command-Option-L</kbd>).

## View Links

Opens the document and restores the focused row and filter.

* Use Edit > Copy > Copy View Link (<kbd>Command-Option-L</kbd>).

## Row Links

Opens the document and selects the row.

* Use Edit > Copy > Copy Row Link (<kbd>Command-L</kbd>).
* Use Format > Add Link to Row… (<kbd>Command-Option-K</kbd>) to pick a row and insert a link to it.
* Or drag a row by its handle and hold <kbd>Control</kbd> as you drop.

## How Bike resolves links

Bike links contain the outline's id, not a file path. Bike asks Spotlight which file has that id, so links survive renaming and moving the file. See [Bike URL Syntax](../using-bike-advanced/bike-url-syntax.md).

## What if a link stops working?

* The document was deleted.
* The row was deleted. The document opens with a warning.
* The link was hand-written with a session id or row number, which don't last. See [Row references](../using-bike-advanced/bike-url-syntax.md#row-references).

Otherwise it's usually a Spotlight or sandbox permission problem:

::: details Advanced: why Bike links break, and Sandbox requirements

If Spotlight hasn't indexed the file, links fail until it does.

The outline id is stored in the file's `com.apple.metadata:kMDItemIdentifier` extended attribute each time Bike saves. If that attribute is lost, open and save the file in Bike again.

If two files share an outline id (for example a duplicated file), the link opens both.

**Sandbox requirements**

Spotlight only returns files Bike has permission to read. Bike can read files in its iCloud folder, and files still in its recent documents list. To fix a permission problem:

1. Move the target into Bike's iCloud folder.
2. Or grant Bike access to its folder in Bike > Settings > Sandbox.

:::

## See also

* [Bike URL Syntax](../using-bike-advanced/bike-url-syntax.md)
* [Text Formatting](text-formatting.md#links)
* [Using Documents](using-documents.md)
