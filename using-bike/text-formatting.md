# Text Formatting

Bike supports bold, italic, code, highlight, strikethrough, superscript, and subscript text formatting. You can also insert links.

Bike's rich text editing should be familiar, but also has a few innovations. My goal is to make Bike formatting precise like Markdown, but without all the syntax characters.

#### To format text

* Use the formatting commands in the Format menu, or their keyboard shortcuts
* Or press <kbd>Command-E</kbd> to open the Formatting Popover and apply formatting with single keys

The Formatting Popover is the one I reach for most. It's described below.

#### To add a link

Links work like other formatting, with one twist that makes them easier to live with.

There's often an overlap between commands that activate a link and commands that edit it. That overlap makes both tasks harder. Bike solves this problem with _link buttons_: after each link a small button is added. Click the button to activate the link. Click and edit the link text normally, without fear of triggering it.

A quick trick: copy a URL, select some text, and paste — Bike applies the URL to the selected text as a link instead of replacing it. For this and everything else about links, including how to create them and edit their URLs, see [Outline Links](outline-links.md).

#### Typing Affinity

Rich text editing can be frustrating at formatting boundaries. There is no precise way to specify what formatting to apply when inserting text at a boundary.

Bike solves this problem with a new concept: _Typing Affinity_. When your text caret is at a formatting boundary Bike attaches a new affinity bar to the bottom of the caret. Point that bar at the formatting you want applied to inserted text.

#### Formatting Popover

Rich text formatting is command based, to make text bold you need to use the bold command. This is straightforward, but can become slow if you can't remember the right keyboard shortcuts.

Bike's formatting popover makes this easier. You only need to learn one keyboard shortcut (<kbd>Command-E</kbd>) to show the formatting popover. Once the popover is showing you can use single key shortcuts to apply formatting commands. These shortcuts are shown in the popover so you don't need to memorize them.

#### Visible Typing Attributes

Normally when you type, the text is formatted the same as surrounding text. But there are some cases where this isn't true. For example if you have an empty selection and choose "Bold" then the text you type will be different than the surrounding text.

Bike indicates this hidden formatting state by showing the hidden attributes as part of the text caret. For example in the above example the bold "B" icon would show above the text caret.

### See also

* [Outline Links](outline-links.md)
* [Row Formatting](row-formatting.md)
