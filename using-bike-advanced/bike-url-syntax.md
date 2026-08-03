# Bike URL Syntax

Bike links are plain URLs. The [copy commands](../using-bike/outline-links.md) write them for you, but nothing stops you from reading or writing one by hand, and this page is the reference for doing that.

You don't need any of this to use Bike links. It's here for scripts, extensions, and anyone curious about what's inside the URL they just pasted.

## URL Pattern

```
bike://<rootid>/<focusref>?filter=<query>#<selectref>
```

* `<rootid>` The id of the root node of the document that you are linking to. This one is always a row id — it's what Spotlight indexes, and it's how the file is found at all.
* `<focusref>` Optional [row reference](#row-references) that should be focused after activating the link.
* `<query>` Optional [outline path](creating-outline-paths.md) to apply as a filter after activating the link.
* `<selectref>` Optional [row reference](#row-references) that should be selected after activating the link.

Here's what an actual Bike link looks like:

```
bike://KOcw9x9N/#zf
```

The three copy commands all produce this same URL, filling in different optional parts. A document link stops after the root id, a row link adds the row to select, and a view link fills in the focused row and filter.

Note that there's no file path anywhere in the URL. Bike finds the document by asking Spotlight which file carries the root id, which is why a link survives renaming or moving the outline. See [How Bike resolves links](../using-bike/outline-links.md#how-bike-resolves-links).

## Row references

A row reference names a row. Bike tries three forms, in this order, and uses the first one that finds a row:

1. **Row id** — the id the copy commands use, like `zf`. It's saved in the file, so it survives closing and reopening the document. Prefer it.
2. **Session id** — a plain number, like `483920114`. This is a row's temporary in-memory number. Breaks when you close the document. Use it for links a script creates and follows in one sitting, and don't save one into a document.
3. **Row number** — the row's position in outline order, counting the first row of the outline as `1`. So `bike://KOcw9x9N/#3` selects the third row. Row numbers are brittle, but useful for creating persistent links to rows when you expect the document won't change before link is resolved. For example they are used to save and restore the folded state of rows.

Bike's own copy commands always use row ids. The session and row number forms are intended for use by scripts and extensions that generate more temporary links on the fly.

## Path URLs

Bike links have an alternative form that uses a file path to locate the outline instead of the outline's id:

```
bike:///Users/jessegrosjean/Documents/todo.bike#aF
```

Path URLs are more likely to break than standard Bike links. If you move or rename the linked outline then the link will break. I generally recommend using normal Bike links.

There's no menu command to copy a path URL. If you need one you can write or edit the URL by hand to use the file path form shown above.

## See also

* [Outline Links](../using-bike/outline-links.md)
* [Creating Outline Paths](creating-outline-paths.md)
