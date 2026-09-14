# Attachments

An attachment is a file (a photo, a PDF, a spreadsheet) that lives inside your outline. Attachments are embedded into a file bundle. They travel with your document.

## To add an attachment

* Drag a file from the Finder and drop it into your outline.
* Copy a file in the Finder and paste it into your outline.
* Choose Format > Add File Attachment… and pick the files you want.

Bike copies the attachment file into your outline's file bundle, and inserts a reference to it in your outline.

::: tip
To insert a link to the file instead of a copy of it, hold down the <kbd>Control</kbd> key while dropping, or use Edit > Paste > Paste as Link. In this linked case Bike won't be able to show a preview of the file because of Sandboxing restrictions.
:::

## To preview or open an attachment

* Select the attachment and press <kbd>Space</kbd> to show a Quick Look preview.
* Press <kbd>Return</kbd> to open the attachment in its default app.

## How attachments are displayed

By default an attachment shows as a simple icon plus its filename. Use the context menu to change the attachments display mode, to show a larger preview image.

## How attachments are stored

The first time you add an attachment, Bike converts your outline's storage from a plain text file into a file bundle. That bundle holds the original outline file together with your attachments.

Bike asks before it converts, so you always know when a document is about to change shape. The bundle still behaves like a single document in the Finder. Your outline is still plain text, and the attachments are just ordinary files in the bundle.

Plain text documents are the one exception. Plain text has nowhere to record which row an attachment belongs to, so Bike offers to change the document's format first. Bike, Markdown, HTML, OPML and JSON documents all take attachments.

## See also

* [Text Formatting](text-formatting.md#links)
