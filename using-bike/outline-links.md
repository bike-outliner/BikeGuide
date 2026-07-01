# Outline Links

![Links](/assets/Links.png)

Bike allows you to insert links into your outline.

Bike also automatically detects URLs that you type.

Anytime there is a link in your document Bike will insert a "link button" after that link.

* Click the link button to activate the link.
* Or use Go > Open Link (<kbd>Command-Shift-O</kbd>) to activate links.
* <kbd>Command-Click</kbd> a link to open it in a new tab.
* <kbd>Command-Option-Click</kbd> a link to open it in a new window.
* Click and edit the link text without fear that you'll activate the link.
* To edit the URL associated with a link right click on the link text or link button and choose "Edit Link" from the popup menu.

#### To link existing text

If you've already copied a URL — from your web browser, say — you can apply it to text you already have, instead of retyping anything:

* Select the text you want to turn into a link.
* Paste (<kbd>Command-V</kbd>).

Bike notices that the clipboard holds a URL and applies it to your selection rather than replacing it, so the selected text becomes a link to that URL. (Paste a URL with nothing selected and Bike inserts it as a clickable link instead.)

This relies on link detection — the "Use smart links" option in [Settings > Autocorrect](settings-window.md#autocorrect) — which is on by default.

More information on formatting and activating links can be found in the [Text Formatting](text-formatting.md) section.

### Bike Row Links

Bike includes its own link type that allows you to link directly to a row in your outline. When activating a Bike link you can:

* <kbd>Command-Click</kbd> to open a Bike link in a new tab
* <kbd>Command-Option-Click</kbd> to open a Bike link in a new window

Bike links are normal URLs. You can paste them into other apps and they'll continue to work as long as Bike is installed on your computer. For example you can paste a Bike link into Apple's Notes app and when you click that link it will open Bike and select the linked row.

Bike links have this pattern:

```
bike://<rootid>/<focusid>#<selectid>
```

* `<rootid>` The id of the root node of the document that you are linking too.
* `<focusid>` The id of the row that should be focused after activating the link. This is optional.
* `<selectedid>` The id of the row that should be selected after activating the link. This is optional.

Here's what an actual Bike link looks like:

```
bike://KOcw9x9N/ch#zf
```

#### To create a Bike link:

* Use Format > Add Link to Row… <kbd>Command-Option-K</kbd> to quickly select a row and insert a link to that row.
* Use Edit > Copy > Copy Row Link (<kbd>Shift-Command-Option-L</kbd>) to copy a link to the selected row. If your view is focused when you copy then the link will also include the focused row id.

Alternatively you can drag a row by its triangle handle and then hold down the <kbd>Control</kbd> key before releasing the mouse. A link to the dragged row will be inserted into your outline.

### Bike Path Row Links

Bike links also have an alternative form. Bike path row links use a file path to locate the associated outline file instead of using the outline's id.

This is a Bike path link:

```
bike:///Users/jessegrosjean/Documents/todo.bike#aF
```

Path row links are more likely to break than standard Bike links. If you move or rename the linked to outline then the link will break. I generally recommend using normal Bike links.

There's no menu command to copy a path row link. If you need one you can write or edit the URL by hand to use the file path form shown above.

### What if a link stops working?

Most broken links come down to one of two everyday causes:

* You linked to a document and then deleted that document. When you activate the link the document won't be found. This is probably not surprising!
* You linked to a row and then deleted that row. The document still opens, but you'll get a warning that the linked row could not be found.

If the link target still exists and the link *still* won't open, it's usually a Spotlight or sandbox-permission issue. The details below explain why — most people won't need them.

::: details Advanced: why Bike links break, and Sandbox requirements

Bike uses Spotlight searches to resolve links. It associates the outline id with the document file and then searches for that id using Spotlight. So if something is wrong with Spotlight, your links won't work. This is temporary — they'll work again once the document id is re-indexed.

A second catch: Spotlight only finds documents Bike already has Sandbox permission to open. If Bike doesn't have permission, the document won't be in the results and the link won't resolve (see Sandbox requirements below).

The id-to-file association is stored in the `com.apple.metadata:kMDItemIdentifier` extended file attribute, written each time Bike saves. If a file's extended attributes are lost, links to it break until you open and save the file through Bike again.

And if two documents share the same outline id (for example because you duplicated a file), links to that id will open both documents.

**Sandbox requirements**

Bike is a sandboxed app, so it can only read files you've given it permission to read. The most common way to grant permission is to open the file in Bike — File > Open has that side effect. Another is to store the file in Bike's iCloud folder, which Bike can always read.

Because link resolution relies on a Spotlight search, and that search only returns files Bike can read, a link that seems broken may just be a permission problem. Two fixes:

1. Move the link target into a location Bike can read, such as Bike's iCloud folder.
2. Grant Bike access to where the target lives, using Bike > Settings > Sandbox.

Sandbox behavior can be confusing. When you open a file, Bike gets read/write access to it. After you close the document, Bike keeps that access as long as the document stays in your recent documents list. Once it drops off that list, Bike can no longer read or write the file.

:::

### See also

* [Text Formatting](text-formatting.md)
