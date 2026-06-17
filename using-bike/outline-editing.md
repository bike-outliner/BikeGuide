# Outline Editing

Press <kbd>Return</kbd> to create a new row.

Press <kbd>Tab</kbd> to indent a row, and <kbd>Shift-Tab</kbd> to unindent. Drag and drop rows by their triangle handle to move them around. Cut, copy, and paste. Outline editing should feel familar and work as you expect.

These commands act on rows and come in two flavors:

1. *Outliner commands* move rows constrained by outline structure. Children always move with their parent, even if not directly selected.
2. *Text-editor commands* move rows unconstrained by outline structure, leaving their children behind when not selected as part of the move.

## Outline commands

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
  A search box opens to move the selected rows beneath any other row in the outline.

## Text Editor commands

Text commands all act on the selected rows only. If you have only selected a parent row, then children are left behind. On the other hand if the parent is collapsed, then the children are consided selected and move along with the parent.

* Outline > Indent (Text) (<kbd>Control-Option-Right</kbd>)  
  The row is indented on its own, leaving its children behind.

* Outline > Outdent (Text) (<kbd>Control-Option-Left</kbd>)  
  The row is outdented on its own, leaving its children behind.

* Outline > Move Up (Text) (<kbd>Control-Option-Up</kbd>)  
  The row is moved up past the previous row, leaving its children behind.

* Outline > Move Down (Text) (<kbd>Control-Option-Down</kbd>)  
  The row is moved down past the next row, leaving its children behind.

* Outline > Delete Rows (Text) (<kbd>Control-Option-K</kbd>)  
  The row is deleted, and its children are left in place.

## Selection Modes

In an outliner you're really doing two different jobs. Sometimes you're writing — editing the words inside a row. Other times you're organizing — moving, indenting, and rearranging whole rows. These two jobs want different kinds of selection, and trying to serve both with one selection makes a mess of either.

Bike solves this with two selection modes: **text mode** and **block mode**.

**Text mode** is for editing within a row. Your selection is a caret or a range of text inside a single row. This is where you spend most of your time writing.

**Block mode** is for working with whole rows. When you extend a selection beyond a single row Bike switches to block mode and selects entire rows. This is similar to how most outliners work, but different than how Bike 1 worked, where a text selection could span rows.

#### To switch between text and block mode

* Press <kbd>Escape</kbd> to toggle between text mode and block mode.

I think of <kbd>Escape</kbd> as stepping back from the words to look at the structure. Press it once and you're holding the whole row rather than a point inside it. Press it again to drop back into the text.

### What is block mode good for?

Block mode is where you reshape your outline. Once you have whole rows selected, the [outline commands](#text-editing) — move, indent, duplicate, delete, and so on — act on exactly those rows. It's the natural mode for reorganizing: select a few sibling rows and move them as a group, or grab a branch and indent it under a new parent.

Many of those commands work the same way in text mode too, always operating on whole rows. So you don't have to switch to block mode for everything — but when you're doing real structural work, selecting the rows first makes your intent clear and lets you operate on several at once.

## Text Editing

![Text Editing](/assets/TextEditing.png)

Text editing should work as you expect. This is a nice feature of Bike. Often outliner applications constrain text editing in various ways. Bike doesn't do that.

## Row: Outline Moves


## Row: Text Moves

Bike also has commands that move a row like a line of text. Rather than carrying its whole branch, the row moves on its own — hop it up or down past a neighbor, or shift its indent — and its children stay where they are. These are the text-mode counterparts to the structural commands above, using <kbd>Control-Option</kbd> with the arrow keys instead of <kbd>Control-Command</kbd>:

* Outline > Move Up (Text) (<kbd>Control-Option-Up</kbd>)
* Outline > Move Down (Text) (<kbd>Control-Option-Down</kbd>)
* Outline > Indent (Text) (<kbd>Control-Option-Right</kbd>)
* Outline > Outdent (Text) (<kbd>Control-Option-Left</kbd>)

These appear in the Outline menu when you hold <kbd>Option</kbd>, alongside their structural versions.

### See also

* [Row Formatting](row-formatting.md)
* [Text Formatting](text-formatting.md)
* [Using Commands](using-commands.md)
* [Keyboard Shortcuts](../keyboard-shortcuts.md)
