# Text Formatting

Bike supports bold, italic, code, highlight, strikethrough, superscript, and subscript text formatting. You can also insert links.

My goal is to make formatting precise like Markdown, but without the syntax characters.

## To format text

* Use the formatting commands in the Format menu, or their keyboard shortcuts
* Or press <kbd>Command-E</kbd> to open the Formatting Popover and apply formatting with single keys

## Formatting Popover

You only need one shortcut: <kbd>Command-E</kbd> shows the popover, which lists single-key shortcuts for each format.

## Typing Affinity

Rich text editing can be frustrating at formatting boundaries. There is no precise way to specify what formatting to apply when inserting text at a boundary.

Bike solves this problem with a new concept: _Typing Affinity_. When your text caret is at a formatting boundary Bike attaches a new affinity bar to the bottom of the caret. Point that bar at the formatting you want applied to inserted text.

## Visible Typing Attributes

When the text you're about to type will be formatted differently from its surroundings (for example after choosing Bold with nothing selected), Bike shows that formatting, such as a bold "B", above the caret.

## Links

Bike supports web links and its own [outline links](outline-links.md) to rows, views, and documents.

![Links](/assets/Links.png)

Links work like other formatting, with one twist. There's often an overlap between commands that activate a link and commands that edit it, and that overlap makes both tasks harder. Bike solves this problem with _link buttons_: a small button is added after each link, so the button does the activating and the link text stays ordinary editable text.

* To add a web link, type or paste its URL (see "Use smart links" in [Settings > Autocorrect](settings-window.md#autocorrect)).
* To turn text you've already written into a link, select it and use Format > Add Link (<kbd>Command-K</kbd>).
* Or copy the URL first, then select the text and paste. Bike applies the URL to your selection instead of replacing it.
* To open a link, click its link button, or use Go > Open Link (<kbd>Command-Shift-O</kbd>).
* To open a link in a new tab, <kbd>Command-Click</kbd> it. To open it in a new window, <kbd>Command-Option-Click</kbd> it.
* To flip whether that new tab or window becomes active, hold <kbd>Shift</kbd> as you click.
* To change what each of those clicks does, see [Settings > Links](settings-window.md#links).
* To edit a link's URL, right-click the link text or its link button and choose "Edit Link".

## See also

* [Outline Links](outline-links.md)
* [Row Formatting](row-formatting.md)
