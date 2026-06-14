# Using Documents

Bike documents are ordinary macOS files — you open, save, version, and organize them just like documents in any other Mac app. Apple's guides cover the basics:

* [Open documents](https://support.apple.com/guide/mac-help/open-documents-mchl971293e1/12.0/mac/12.0)
* [Create and work with documents](https://support.apple.com/guide/mac-help/create-and-work-with-documents-mchldc1dd114/12.0/mac/12.0)
* [View and restore past versions of documents](https://support.apple.com/guide/mac-help/view-and-restore-past-versions-of-documents-mh40710/12.0/mac/12.0)

### Own Your Data

Bike is a document based app that uses open file formats.

This combination gives you full ownership of your data. Your notes and thoughts aren't locked behind a proprietary web-service. They aren't hidden away in a database available for [export only](https://twitter.com/andy\_matuschak/status/1452438176996347907).

### Format Options

![Format Options](/assets/formats.png)

The three main formats, `.bike`, `.md`, and `.opml`, are equivalent: each can represent all of your Bike outline state, including row types, text formatting, attributes, and hierarchy. The format you choose depends on how you want to work with the file outside Bike. 

[Bike HTML Format](bike-html-format.md) `.bike`: Uses a subset of standard HTML. It's also a valid HTML document you can open in a web browser.

[Bike Markdown Format](bike-markdown-format.md) `.md`: Uses a subset of standard markdown. Good for interoperability with other text-based tools.

[Bike OPML Format](bike-opml-format.md) `.opml`: Uses the standard outline format for exchanging outlines with other outliners.

`.txt`: plain text, with hierarchy from leading tab indentation. It can't store metadata, so features like row links break when you reopen a `.txt` outline.

### Open Options

When you open a document Bike can expand rows (or not) for you. To set which rows are expanded when you open a document use Settings > Document > When Open...

This setting is for when you open a document while Bike is running. When Bike re-opens a document when starting it will restore the exact row expand/collapse state. For more information on restoring documents see [Using Windows](using-windows.md).

### File Extensions

When you save a Bike document the filename will default to a `.bike`, `.md`, `.opml`, or `.txt` file extension. This is usually what you want.

If it's not what you want you have the option to use your own file extension. For example you may wish to save "Bike" files with a `.html` file extension, or you might want to save "Plain Text" documents with a `.text` file extension.

#### To use a custom file extension

* Type the file extension after the file name in the "Save As" text field in the document save panel.

#### To load an outline that has a custom file extension

Open the file normally and Bike will detect the content format. When Bike loads an unknown file extension it performs these steps:

1. Read as Bike (the native `.bike` format), if that fails then...
2. Read as Bike Markdown, if that fails then...
3. Read as OPML, if that fails then...
4. Read as Plain Text, which should never fail

These same steps are followed when reading text from the pasteboard.

### See also

* [Bike HTML Format](bike-html-format.md)
* [Bike Markdown Format](bike-markdown-format.md)
* [Bike OPML Format](bike-opml-format.md)
* [Using Windows](using-windows.md)
* [Bike Compatible Apps](../bike-compatible-apps.md)
