# Using Documents

Bike documents are ordinary macOS files. Apple's guides cover the basics:

* [Open documents](https://support.apple.com/guide/mac-help/open-documents-mchl971293e1/12.0/mac/12.0)
* [Create and work with documents](https://support.apple.com/guide/mac-help/create-and-work-with-documents-mchldc1dd114/12.0/mac/12.0)
* [View and restore past versions of documents](https://support.apple.com/guide/mac-help/view-and-restore-past-versions-of-documents-mh40710/12.0/mac/12.0)

## Own Your Data

Bike stores your outlines in documents using open file formats. They aren't locked in a web service or hidden in a database available for [export only](https://twitter.com/andy\_matuschak/status/1452438176996347907).

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

Settings > Document > When Open sets which rows are expanded when you open a document. Documents that Bike reopens at launch keep their previous state instead. See [Using Windows](using-windows.md#bike-window-restoration).

## File Extensions

You can save with your own file extension, such as `.html` for a Bike file or `.text` for plain text.

### To use a custom file extension

* Type the extension after the file name in the save panel.

### To load an outline that has a custom file extension

Open it normally. Bike tries Bike, then Bike Markdown, then OPML, then plain text. Pasted text is read the same way.

## See also

* [Bike HTML Format](bike-html-format.md)
* [Bike Markdown Format](bike-markdown-format.md)
* [Other Bike Formats](other-bike-formats.md)
* [Using Windows](using-windows.md)
* [Bike Compatible Apps](../bike-compatible-apps.md)
