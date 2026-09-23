# Outline Filtering

Filtering hides rows that don't match. (The [find panel](using-find-panel.md) highlights matches instead.)

## To start filtering

* Use Go > Filter (<kbd>Command-Shift-F</kbd>)

Type in the filter field in the [toolbar](using-toolbar.md).

## What You See While Filtering

* Matches and their ancestors stay visible.
* A branch with no matches inside it is folded away.
* Non-matching siblings are tucked into a hidden range. Click it to reveal them.

## To navigate between matches

* Press <kbd>Return</kbd> to go to the next match
* Press <kbd>Shift-Return</kbd> to go to the previous match

## To clear the filter

* Click the X button in the filter bar, or delete the filter text. Bike restores the view you had before filtering.
* Or press <kbd>Command-Return</kbd> to clear the filter but keep its folds.

## Working with Matches

Right-click the filter field for commands that act on all matches:

* **Cut Matches**
* **Copy Matches**: copy the matching rows, including their children.
* **Copy Matches (Without Children)**: copy just the matching rows, leaving their children behind.
* **Save in Sidebar**: save the filter as a sidebar [query shortcut](using-sidebar.md#query-shortcuts).

Edit > Copy > **Copy Displayed** copies only the visible rows. See [Other Bike Formats](other-bike-formats.md#copying-in-any-format).

## Filter Syntax

Plain text matches rows containing that text. Start with `/` (whole outline) or `.` (focused branch) to use an [outline path](../using-bike-advanced/creating-outline-paths.md).

Examples:

* `pizza`: Show rows containing "pizza"
* `/heading`: Show top-level heading rows
* `//heading`: Show all heading rows anywhere in the outline
* `//task`: Show all task rows anywhere in the outline
* `//task open()`: Show unfinished tasks
* `//task closed()`: Show tasks that are done or canceled
* `//note`: Show all note rows

## See also

* [Using Find Panel](using-find-panel.md)
* [Creating Outline Paths](../using-bike-advanced/creating-outline-paths.md)
* [Using Sidebar](using-sidebar.md)