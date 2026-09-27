# Using Choice Box

The choice box finds and jumps to a location, row, or command from the keyboard. Open it with Go > Go To… (<kbd>Command-P</kbd>) and start typing. In the future I expect the choice box to show up in other places too.

![Choice box](/assets/Focus%20Index%20Row%201.png)

## To make a choice

* Use the up and down arrow keys (or the mouse) to select an item
* Press <kbd>Return</kbd> to focus the selected item and close the choice box
* Press <kbd>Command-Return</kbd> to focus the item's *parent* and select the item instead, so you see it alongside its siblings
* Press <kbd>Escape</kbd> to close the choice box without selecting anything

## To filter the available choices

Filtering is really fast, even in big outlines!

![Choice box while filtering](/assets/Focus%20Index%20Row%202.png)

* Start typing to filter the list
* Filtering is "fuzzy". Matches must contain all the letters you type, in order, but they can have other letters in between.
* Results are always ordered by how well they match, with the best matches first.
* Acronym matching (the first letter of each word) works well when looking for shorter "topic" rows.
* Each result shows its containing path as a breadcrumb.

## What You Can Search

By default the choice box lists your [sidebar](using-sidebar.md) items. Start with a prefix to search something else:

* `-` searches every row (Go > Go to Row…).
* `>` searches every command (Go > Go to Command…, <kbd>Shift-Command-P</kbd>).

## Where the Choice Box Appears

Bike also uses the choice box for Outline > Move To…, Outline > Send To…, and Format > Add Link to Row… (<kbd>Command-Option-K</kbd>).

## See also

* [Using Sidebar](using-sidebar.md)
* [Outline Links](outline-links.md)
