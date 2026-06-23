# Other Bike Formats

Bike's two main file formats are [Bike HTML](bike-html-format.md) (`.bike`) and [Bike Markdown](bike-markdown-format.md) (`.md`). Both store your outline with full fidelity, and one of them is what I'd reach for day to day.

Beyond those, Bike speaks a handful of other formats for specific jobs — trading outlines with other apps, processing them with tools, or pasting text into another document. You can save some of them with File > Save As, and you can produce any of them on the fly with the Edit > Copy commands described at the end of this page.

### OPML

OPML (`.opml`) is the lingua franca of outliners — a widely supported standard for moving outlines between apps. I reach for it when I need to get an outline from Bike into another [OPML compatible app](../bike-compatible-apps.md), or back the other way.

I think of OPML as an interchange format, not a full-fidelity one. Bike does tuck its own data into the file using extra attributes, but other OPML apps ignore those and see only plain text — so row types and rich formatting don't reliably survive a round trip through another app. My advice: use OPML to move an outline between apps, then save it back in `.bike` or `.md` once it's home.

### HTML

Bike's native `.bike` format is already HTML — a `.bike` file is a valid HTML document. If you'd like that file to carry an `.html` extension instead — so other apps recognize it as HTML, or it opens in a browser by default — you can simply save it with `.html`. Bike still reads and writes it as full-fidelity Bike content; only the extension changes. See [Bike HTML Format](bike-html-format.md) for the details of the format itself, and [Using Documents](using-documents.md#file-extensions) for how custom extensions work.

### JSON

Bike can also read and write your outline as JSON (`.json`). The JSON mirrors your outline's full structure — every row, its type and attributes, and the hierarchy — which makes it the easiest format to crunch with scripts and other tools. Reach for it when you want to process your outline programmatically rather than read it by hand.

### Plain Text

Plain text (`.txt`) represents your outline as plain lines, using tab indentation to show the hierarchy. It's about as universal as a format gets, but it can't store any metadata: row types, row attributes, and text formatting are all dropped, and so are the row ids that [row links](outline-links.md) depend on. Use it when you just want the words and the shape, and don't mind losing everything else.

### Rich Text

Rich text keeps your *formatting* — bold, italic, and links — but not Bike's structure: row types, attributes, and ids are dropped. It's mainly handy for copying nicely formatted text out of Bike and pasting it into another app like Mail or a word processor.

### Copying in Any Format

The quickest way to produce one of these formats is the Edit > Copy submenu. Each command copies your current selection — rows and their children — in a particular format, ready to paste elsewhere:

* **Copy** (<kbd>Command-C</kbd>) — copy in Bike's native format
* **Copy Markdown Text** — copy as [Bike Markdown](bike-markdown-format.md)
* **Copy HTML Text** — copy as [Bike HTML](bike-html-format.md)
* **Copy OPML Text** — copy as OPML
* **Copy JSON Text** — copy as JSON
* **Copy Rich Text** — copy formatted text for pasting into other apps
* **Copy Plain Text** — copy just the text, with tab indentation

One more command in that submenu changes *what* gets copied rather than the format. A selection can include rows that aren't currently on screen — descendants hidden inside a collapsed row, or rows tucked away by a [filter](using-outline-filtering.md). Plain **Copy** includes those hidden rows; **Copy Displayed** copies only the rows you can actually see, skipping anything hidden by folding or filtering. It's handy for lifting just the visible shape of an outline — for example, copying the headings you've folded down to.

The same submenu also has **Copy Row Link** and **Copy Row Identifier** for working with [links](outline-links.md). And going the other way, the Edit > Paste submenu offers **Paste and Render Markdown**, **Paste and Render HTML**, and **Paste and Render OPML** to bring formatted content in.

### See also

* [Using Documents](using-documents.md)
* [Bike HTML Format](bike-html-format.md)
* [Bike Markdown Format](bike-markdown-format.md)
* [Bike Compatible Apps](../bike-compatible-apps.md)
