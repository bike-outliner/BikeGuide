# Outline Links

A Bike link points at a whole outline, a single row, or a specific view. They're ordinary URLs, so they work inside Bike and from any other app on your Mac. Paste one into Apple's Notes and clicking it opens Bike and takes you to the linked location.

## Document Links

Opens the document.

* Use Edit > Copy > Copy Document Link (<kbd>Shift-Command-Option-L</kbd>).

## View Links

Opens the document and restores the focused row and filter.

* Use Edit > Copy > Copy View Link (<kbd>Command-Option-L</kbd>).

## Row Links

Opens the document and selects the row.

* Use Edit > Copy > Copy Row Link (<kbd>Command-L</kbd>) to copy a link to the selected row, then paste it wherever you want it.
* Use Format > Add Link to Row… (<kbd>Command-Option-K</kbd>) to pick a row from the [choice box](using-choice-box.md) and insert a link to it right where you're typing.
* Or drag a row by its triangle handle and hold <kbd>Control</kbd> before releasing the mouse. A link to the dragged row is inserted where you drop it.

## How Bike resolves links

Bike links contain the outline's id, not a file path. Bike asks Spotlight which file has that id, so links survive renaming and moving the file. See [Bike URL Syntax](../using-bike-advanced/bike-url-syntax.md).

## What if a link stops working?

* You linked to a document and then deleted that document. When you activate the link the document won't be found. This is not surprising!
* You linked to a row and then deleted that row. The document still opens, but you'll get a warning naming the row reference that could not be found.
* The link was hand-written with a session id or row number, which don't last. See [Row references](../using-bike-advanced/bike-url-syntax.md#row-references).

Otherwise it's usually a Spotlight or sandbox permission problem:

::: details Advanced: why Bike links break, and Sandbox requirements

Bike uses Spotlight searches to resolve links. It associates the outline id with the document file and then searches for that id using Spotlight. So if something is wrong with Spotlight, your links won't work. This is temporary. They'll work again once the document id is re-indexed.

A second catch: Spotlight only finds documents Bike already has Sandbox permission to open. If Bike doesn't have permission, the document won't be in the results and the link won't resolve (see Sandbox requirements below).

The id-to-file association is stored in the `com.apple.metadata:kMDItemIdentifier` extended file attribute, written each time Bike saves. If a file's extended attributes are lost, links to it break until you open and save the file through Bike again.

And if two documents share the same outline id (for example because you duplicated a file), links to that id will open both documents.

**Sandbox requirements**

Bike is a sandboxed app, so it can only read files you've given it permission to read. The most common way to grant permission is to open the file in Bike. File > Open has that side effect. Another is to store the file in Bike's iCloud folder, which Bike can always read.

Because link resolution relies on a Spotlight search, and that search only returns files Bike can read, a link that seems broken may just be a permission problem. Two fixes:

1. Move the link target into a location Bike can read, such as Bike's iCloud folder.
2. Grant Bike access to where the target lives, using Bike > Settings > Sandbox.

Sandbox behavior can be confusing. When you open a file, Bike gets read/write access to it. After you close the document, Bike keeps that access as long as the document stays in your recent documents list. Once it drops off that list, Bike can no longer read or write the file.

:::

## See also

* [Bike URL Syntax](../using-bike-advanced/bike-url-syntax.md)
* [Text Formatting](text-formatting.md#links)
* [Using Documents](using-documents.md)
