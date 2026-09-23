# Using Choice Box

The choice box finds and jumps to a location, row, or command from the keyboard. Open it with Go > Go To… (<kbd>Command-P</kbd>) and start typing.

![Choice box](/assets/Focus%20Index%20Row%201.png)

## To make a choice

* Use the up and down arrow keys (or the mouse) to select an item
* Press <kbd>Return</kbd> to focus the selected item and close the choice box
* Press <kbd>Command-Return</kbd> to focus the item's *parent* and select the item instead, so you see it alongside its siblings
* Press <kbd>Escape</kbd> to close the choice box without selecting anything

## To filter the available choices

![Choice box while filtering](/assets/Focus%20Index%20Row%202.png)

* Start typing to filter the list
* Matching is fuzzy: all the letters you type, in order, with anything in between. Acronyms work well.
* Best matches come first, each with a breadcrumb path.

## What You Can Search

By default the choice box lists your [sidebar](using-sidebar.md) items. Start with a prefix to search something else:

* `-` searches every row (Go > Go to Row…).
* `>` searches every command (Go > Go to Command…, <kbd>Shift-Command-P</kbd>).

## Where the Choice Box Appears

Bike also uses the choice box for Outline > Move To…, Outline > Send To…, and Format > Add Link to Row… (<kbd>Command-Option-K</kbd>).

## See also

* [Using Sidebar](using-sidebar.md)
* [Outline Links](outline-links.md)
