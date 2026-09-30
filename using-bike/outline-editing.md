# Outline Editing

Press <kbd>Return</kbd> to create a new row.

Press <kbd>Tab</kbd> to indent a row, and <kbd>Shift-Tab</kbd> to unindent. Drag and drop rows by their triangle handle to move them around. Cut, copy, and paste. Outline editing should feel familar and work as you expect.

Row commands come in two flavors: those that act on whole [branches](../glossary.md), and those that act on the selected rows only, leaving their children behind. The first is the natural way to work in an outliner, while the second is more like a text editor. [You choose](#move-copy-delete) which flavor Bike uses by default.

## Outline Commands

These commands act on the selected rows. Cut, copy, delete, duplicate, move, indent, and outdent include the rows' children or not, [depending on your setting](#move-copy-delete).

* Outline > New Row (<kbd>Command-Return</kbd>)  
  A new empty row is created as a sibling below the current row.

* Outline > Split Rows (<kbd>Control-Command-Return</kbd>)  
  The row is split at the selection. In block mode the row is split by sentence.

* Outline > Join Rows (<kbd>Control-Command-Delete</kbd>)  
  The selected rows are joined into one, or the current row is joined with the one above it.

* Outline > Duplicate Rows (<kbd>Command-D</kbd>)  
  A copy of the selected rows is inserted.

* Outline > Delete Rows (<kbd>Command-Shift-K</kbd>)  
  The selected rows are deleted.

* Outline > Indent (<kbd>Tab</kbd>, <kbd>Control-Command-Right</kbd>)  
  The selected rows are indented to become children of the row above.

* Outline > Outdent (<kbd>Shift-Tab</kbd>, <kbd>Control-Command-Left</kbd>)  
  The selected rows are outdented to their parent's level.

* Outline > Sort Rows  
  The selected rows are sorted, with each row's children kept beneath it.

* Outline > Group Rows (<kbd>Control-Command-G</kbd>)  
  The selected rows, with their children, are wrapped in a new parent row.

* Outline > Promote Children  
  Children of the selection are promoted to the same level as their parent.

* Outline > Demote Siblings  
  The siblings following the selection are demoted to become its children.

* Outline > Move Up (<kbd>Control-Command-Up</kbd>)  
  The selected rows are moved up past the previous sibling.

* Outline > Move Down (<kbd>Control-Command-Down</kbd>)  
  The selected rows are moved down past the next sibling.

* Outline > Move To… (<kbd>Command-&#92;</kbd>)  
  A search box opens to move the selected rows to one of your [sidebar](using-sidebar.md) locations. Your selection travels with the rows.

* Outline > Send To… (<kbd>Control-Command-&#92;</kbd>)  
  The same, except the caret stays where it was. Use this to file rows away — into an archive, say — without losing your place.

* Outline > Move To Row… (<kbd>Option-Command-&#92;</kbd>)  
  A search box opens to move the selected rows beneath any other row in the outline. Your selection travels with the rows.

* Outline > Send To Row… (<kbd>Control-Option-Command-&#92;</kbd>)  
  The same, except the caret stays where it was.

::: tip
Hold <kbd>Control</kbd> in the Outline menu to see the Send commands. In the [choice box](using-choice-box.md), a leading `-` switches between sidebar locations and every row.
:::

## Move, Copy & Delete {#move-copy-delete}

Choose how row commands treat children in Settings > General > Move, copy & delete:

* **Whole branches (Outliner style)**: Children move, copy, and delete with their parent, even if not selected. This is the default.
* **Selected rows only (Text editor style)**: Only the selected rows move, copy, and delete. Unselected children are left behind. A collapsed row still carries its hidden children.

The setting applies to cut, copy, delete, duplicate, move, indent, outdent, and Move To / Send To. Group Rows always includes children.

Hold <kbd>Option</kbd> in the Outline menu to use the other flavor once. The menu items are labeled "(Rows Only)" or "(With Children)" to match.

* Outline > Indent (<kbd>Control-Option-Right</kbd>)
* Outline > Outdent (<kbd>Control-Option-Left</kbd>)
* Outline > Move Up (<kbd>Control-Option-Up</kbd>)
* Outline > Move Down (<kbd>Control-Option-Down</kbd>)
* Outline > Delete Row (<kbd>Control-Option-K</kbd>)  
  When deleting selected rows only, their children are left in place. Except the first row which is emptied. Like in a text editor.

## Selection Modes

Bike has two selection modes: text mode and block mode. In text mode your selection is a caret or a range of text inside a single row. In block mode your selection is one or more whole rows.

- You can switch between the two modes with <kbd>Escape</kbd>.
- You can also exit block mode by pressing <kbd>Left</kbd> or <kbd>Right</kbd> arrows.

### Why block mode?

Block mode makes it easier to move the selection through a list of rows. It also makes it easy to delete whole rows. The unit of selection is a row, not a single character.

Another major difference is you can't type to insert text in block mode. So, for instance, typing `a` won't do anything. This means you can assign keybindings to all the normal text entry keys for other commands.

Bike doesn't yet take good advantage of this ability, but pressing <kbd>Space</kbd> runs **`task:toggle-done`** on the selected rows: a done row reopens, and anything else is marked done. A mixed selection follows whatever the first row does. And you can assign your own block mode keybindings in the [Commands Explorer](commands-explorer.md). More to come in a future release!

## See also

* [Row Formatting](row-formatting.md)
* [Text Formatting](text-formatting.md)
* [Using Commands](commands-explorer.md)
* [Keyboard Shortcuts](../keyboard-shortcuts.md)
