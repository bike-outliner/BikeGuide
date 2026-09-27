# Using Documents

Bike documents are ordinary macOS files. Apple's guides cover the basics:

* [Open documents](https://support.apple.com/guide/mac-help/open-documents-mchl971293e1/12.0/mac/12.0)
* [Create and work with documents](https://support.apple.com/guide/mac-help/create-and-work-with-documents-mchldc1dd114/12.0/mac/12.0)
* [View and restore past versions of documents](https://support.apple.com/guide/mac-help/view-and-restore-past-versions-of-documents-mh40710/12.0/mac/12.0)

## Own Your Data

Bike is a document based app that uses open file formats.

This combination gives you full ownership of your data. Your notes and thoughts aren't locked behind a proprietary web-service. They aren't hidden away in a database available for [export only](https://twitter.com/andy\_matuschak/status/1452438176996347907).

## Format Options

![Format Options](/assets/formats.png)

- **[`.bike`](bike-html-format.md)**: the default. Use it if you're not sure.
- **[`.md`](bike-markdown-format.md)**: plain markdown, for version control and other text tools.
- **[`.opml`](other-bike-formats.md#opml)**: for moving outlines to and from other outliners.
- **[`.txt`](other-bike-formats.md#plain-text)**: just text and indentation. Links and metadata are lost.

`.bike`, `.md`, `.opml`, and `.json` keep everything, so you can switch between them with File > Save As. See also [Other Bike Formats](other-bike-formats.md).

## Document Info

Per-document settings, in File > Document Info…

* **Spelling and Grammar**: the [spell-check](outline-checking.md) language, saved with the document.
* **File Type**: the current [format](#format-options). Click **Save As…** to change it.
* **Save row created & modified attributes**: record row timestamps in the file (not available for plain text).
* **Attachments**: the document's [attachments](attachments.md). Click a reference count to filter to the rows using it.

## Open Options

When you open a document Bike can expand rows (or not) for you. To set which rows are expanded when you open a document use Settings > Document > When Open.

This setting is for when you open a document while Bike is running. When Bike re-opens a document when starting it will restore the exact row expand/collapse state. For more information on restoring documents see [Using Windows](using-windows.md).

## File Extensions

When you save a Bike document the filename will default to a `.bike`, `.md`, `.opml`, or `.txt` file extension. This is usually what you want.

If it's not what you want you have the option to use your own file extension. For example you may wish to save "Bike" files with a `.html` file extension, or you might want to save "Plain Text" documents with a `.text` file extension.

### To use a custom file extension

* Type the file extension after the file name in the "Save As" text field in the document save panel.

### To load an outline that has a custom file extension

Open the file normally and Bike will detect the content format. When Bike loads an unknown file extension it performs these steps:

1. Read as Bike (the native `.bike` format), if that fails then…
2. Read as Bike Markdown, if that fails then…
3. Read as OPML, if that fails then…
4. Read as Plain Text, which should never fail

These same steps are followed when reading text from the pasteboard.

## See also

* [Bike HTML Format](bike-html-format.md)
* [Bike Markdown Format](bike-markdown-format.md)
* [Other Bike Formats](other-bike-formats.md)
* [Using Windows](using-windows.md)
* [Bike Compatible Apps](../bike-compatible-apps.md)
