Enter - Select next match
Shift-Enter - Select previous match
filter maintaining selection and folds
Escape/Clear - Cancel filter, restoring previous selection and foldsCommand-Enter - Cancel 

Click hidden region to reveal. Undo before editing to restore.


# Using Outline Filtering

Outline filtering hides rows that don't match your filter, letting you focus on just the rows you need. Unlike the [find panel](using-find-panel.md) which highlights matches, filtering changes which rows are visible.

#### To start filtering

* Click the filter button in the titlebar
* Or use Edit > Find > Filter (<kbd>Command-Shift-F</kbd>)

#### To navigate between matches

* Press <kbd>Return</kbd> to go to the next match
* Press <kbd>Shift-Return</kbd> to go to the previous match

#### To clear the filter

* Click the X button in the filter bar
* Or delete all text in the filter field

### Filter Syntax

The filter bar accepts two types of input:

**Text search:** Type any text to filter rows that contain that text.

**Outline path expressions:** Start your filter with `/` for a global search or `.` for a focused branch search. This gives you access to the full [outline path](using-outline-paths.md) query syntax.

Examples:

* `pizza` — Show rows containing "pizza"
* `/heading` — Show all heading rows
* `//task` — Show all task rows anywhere in the outline
* `//task not @done` — Show incomplete tasks
* `//note` — Show all note rows

### Sidebar Query Shortcuts

You can save frequently used filters as query shortcuts in the [sidebar](using-sidebar.md). Click a query shortcut to instantly apply that filter to your outline.
