# Outline Editing

Press <kbd>Return</kbd> to create a new row.

Press <kbd>Tab</kbd> to indent a row, and <kbd>Shift-Tab</kbd> to unindent. Drag and drop rows by their triangle handle to move them around. Cut, copy, and paste. Outline editing should feel familar and work as you expect.

There are two flavors of outline editing commands: those that move rows as whole units, and those that move rows on their own, leaving their children behind. The first is the natural way to work in an outliner, while the second is more like a text editor.

## Outline Commands

These commands move rows within the outline structure. Children always move with their parent, even if not directly selected.

* Outline > New Row (<kbd>Command-Return</kbd>)  
  A new empty row is created as a sibling below the current row.

* Outline > Split Rows (<kbd>Control-Command-Return</kbd>)  
  The row is split at the selection. In block mode the row is split by sentence.

* Outline > Join Rows (<kbd>Control-Command-Delete</kbd>)  
  The selected rows are joined into one, or the current row is joined with the one above it.

* Outline > Duplicate Rows (<kbd>Command-D</kbd>)  
  A copy of the selected rows, including their children, is inserted.

* Outline > Delete Rows (<kbd>Command-Shift-K</kbd>)  
  The selected rows are deleted along with their children.

* Outline > Indent (<kbd>Tab</kbd>, <kbd>Control-Command-Right</kbd>)  
  The selected rows are indented to become children of the row above.

* Outline > Outdent (<kbd>Shift-Tab</kbd>, <kbd>Control-Command-Left</kbd>)  
  The selected rows are outdented to their parent's level.

* Outline > Sort Rows  
  The selected rows are sorted, with each row's children kept beneath it.

* Outline > Group Rows (<kbd>Control-Command-G</kbd>)  
  The selected rows are wrapped in a new parent row.

* Outline > Promote Children  
  Children of the selection are promoted to the same level as their parent.

* Outline > Demote Siblings  
  The siblings following the selection are demoted to become its children.

* Outline > Move Up (<kbd>Control-Command-Up</kbd>)  
  The selected rows are moved up past the previous sibling.

* Outline > Move Down (<kbd>Control-Command-Down</kbd>)  
  The selected rows are moved down past the next sibling.

* Outline > Move To… (<kbd>Command-&#92;</kbd>)  
  A search box opens to move the selected rows to one of your [sidebar](using-sidebar.md) locations.

* Outline > Move To Row… (<kbd>Option-Command-&#92;</kbd>)  
  A search box opens to move the selected rows beneath any other row in the outline.

::: tip
Both "Move To" commands open the same [choice box](using-choice-box.md). Move To Row… just pre-inserts a `-` in the search field, which switches the list from your sidebar locations to every row in the outline. Delete the `-` to see only sidebar items again, or type it yourself to see all rows.
:::

## Text Editor Commands

These commands move rows unconstrained by outline structure, leaving their children behind when not selected as part of the move. They appear in the Outline menu when you hold <kbd>Option</kbd>.

* Outline > Indent (Text) (<kbd>Control-Option-Right</kbd>)  
  The row is indented on its own, leaving its children behind.

* Outline > Outdent (Text) (<kbd>Control-Option-Left</kbd>)  
  The row is outdented on its own, leaving its children behind.

* Outline > Move Up (Text) (<kbd>Control-Option-Up</kbd>)  
  The row is moved up past the previous row, leaving its children behind.

* Outline > Move Down (Text) (<kbd>Control-Option-Down</kbd>)  
  The row is moved down past the next row, leaving its children behind.

* Outline > Delete Rows (Text) (<kbd>Control-Option-K</kbd>)  
  The rows are deleted, and their children are left in place. Except the first row which is emptied. Like in a text editor.

## Selection Modes

Bike has two selection modes: text mode and block mode. In text mode your selection is a caret or a range of text inside a single row. In block mode your selection is one or more whole rows.

- You can switch between the two modes with <kbd>Escape</kbd>.
- You can also exit block mode by pressing <kbd>Left</kbd> or <kbd>Right</kbd> arrows.

### Why block mode?

Block mode makes it easier to move the selection through a list of rows. It also makes it easy to delete whole rows. The unit of selection is a row, not a single character.

Another major difference is you can't type to insert text in block mode. So, for instance, typing `a` won't do anything. This means you can assign keybindings to all the normal text entry keys for other commands.

Bike doesn't yet take good advantage of this ability, but pressing <kbd>Space</kbd> runs **`status:toggle-done`** on the selected rows: a done row reopens, and anything else is marked done. A mixed selection follows whatever the first row does. And you can assign your own block mode keybindings in the [Commands Explorer](commands-explorer.md). More to come in a future release!

## See also

* [Row Formatting](row-formatting.md)
* [Text Formatting](text-formatting.md)
* [Using Commands](commands-explorer.md)
* [Keyboard Shortcuts](../keyboard-shortcuts.md)
