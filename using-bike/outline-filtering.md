# Outline Filtering

Outline filtering hides rows that don't match your filter, letting you focus on just the rows you need. Unlike the [find panel](using-find-panel.md) which highlights matches, filtering changes which rows are visible.

## To start filtering

* Use Go > Filter (<kbd>Command-Shift-F</kbd>)

The filter field lives in the editor [toolbar](using-toolbar.md). Start typing there to filter your outline.

## What You See While Filtering

Filtering generates a set of matching rows, then reshapes the outline around them:

* Every match and each of its ancestors stays visible, so you always see your matches in context.
* A branch with no matches inside it is folded away.
* Siblings of a match that don't match themselves are tucked into a hidden range. Click the hidden range to reveal them.

## To navigate between matches

* Press <kbd>Return</kbd> to go to the next match
* Press <kbd>Shift-Return</kbd> to go to the previous match

## To clear the filter

* Click the X button in the filter bar
* Or delete all text in the filter field
* Or press <kbd>Command-Return</kbd> to clear the filter while keeping the folds it created

When you clear a filter Bike restores the scroll position and folded rows you had before you started, so filtering never loses your place. <kbd>Command-Return</kbd> is the exception. It keeps the folds the filter set, so you can carry that pruned view back into normal editing.

## Working with Matches

Right-click the filter field for commands that act on the whole set of matches at once:

* **Cut Matches**: remove the matching rows from your outline and place them on the clipboard.
* **Copy Matches**: copy the matching rows, including their children.
* **Copy Matches (Without Children)**: copy just the matching rows, leaving their children behind.
* **Save in Sidebar**: save the current filter as a [query shortcut](#sidebar-query-shortcuts).

You can also select rows in the filtered outline and use Edit > Copy > **Copy Displayed** to copy only the rows you can see. It skips anything hidden by the filter. See [Other Bike Formats](other-bike-formats.md#copying-in-any-format).

## Filter Syntax

The filter bar accepts two types of input:

**Text search:** Type any text to filter rows that contain that text.

**Outline path expressions:** Start your filter with `/` for a global search or `.` for a focused branch search. This gives you access to the full [outline path](../using-bike-advanced/creating-outline-paths.md) query syntax.

Examples:

* `pizza`: Show rows containing "pizza"
* `/heading`: Show top-level heading rows
* `//heading`: Show all heading rows anywhere in the outline
* `//task`: Show all task rows anywhere in the outline
* `//task not @done`: Show incomplete tasks
* `//note`: Show all note rows

## Sidebar Query Shortcuts

You can save frequently used filters as query shortcuts in the [sidebar](using-sidebar.md). With a filter active, right-click the filter field and choose **Save in Sidebar**. Click a saved query shortcut to instantly apply that filter to your outline.

## See also

* [Using Find Panel](using-find-panel.md)
* [Creating Outline Paths](../using-bike-advanced/creating-outline-paths.md)
* [Using Sidebar](using-sidebar.md)