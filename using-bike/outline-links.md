# Outline Links

A Bike link points at a whole outline, a single row, or a specific view. They're ordinary URLs, so they work inside Bike and from any other app on your Mac. Paste one into Apple's Notes and clicking it opens Bike and takes you to the linked location.

## Document Links

A document link points at the outline as a whole. Activating it just opens the document, leaving you wherever you last were in it.

* Use Edit > Copy > Copy Document Link (<kbd>Shift-Command-Option-L</kbd>).

## View Links

A view link points at a focus row and active filter, a location in your outline. Activating it opens the outline and restores both the focus row and filter.

* Use Edit > Copy > Copy View Link (<kbd>Command-Option-L</kbd>).

## Row Links

A row link points at one specific row in the outline. Activating it opens the document, reveals that row, and selects it.

* Use Edit > Copy > Copy Row Link (<kbd>Command-L</kbd>) to copy a link to the selected row, then paste it wherever you want it.
* Use Format > Add Link to Row… (<kbd>Command-Option-K</kbd>) to pick a row from the [choice box](using-choice-box.md) and insert a link to it right where you're typing.
* Or drag a row by its triangle handle and hold <kbd>Control</kbd> before releasing the mouse. A link to the dragged row is inserted where you drop it.

## How Bike resolves links

Bike links don't use a file path.

Instead, they contain the id of the outline. When Bike resolves a link, it asks Spotlight to find the file that carries that id. This means you can rename the outline, move it to another folder, or reorganize your Documents directory, and the link still resolves.

It also means if Spotlight isn't indexing the file, or Bike doesn't have permission to read the file, the link won't work. See the next section for details.

Bike links are plain URLs, and you can read or write them by hand. See [Bike URL Syntax](../using-bike-advanced/bike-url-syntax.md) for the pattern and its parts.

## What if a link stops working?

Most broken links come down to one of two everyday causes:

* You linked to a document and then deleted that document. When you activate the link the document won't be found. This is not surprising!
* You linked to a row and then deleted that row. The document still opens, but you'll get a warning naming the row reference that could not be found.
* You hand-wrote a link using a session id or a row number instead of a row id. Those forms aren't durable — see [Row references](../using-bike-advanced/bike-url-syntax.md#row-references). Only row ids survive closing the document or copying rows into another outline.

If the link target still exists and the link *still* won't open, it's usually a Spotlight or sandbox-permission issue. The details below explain why. Most people won't need them.

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
