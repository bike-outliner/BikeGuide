# Outline Editing

Outline editing is simplified in Bike 2.

When you move a row its children will always move with it, no matter the selection mode. There is no longer the possibility of moving a row without its children. If you do want to disconnect a row from its children use Outline > Promote Children. Then move the row.

## Text Editing

![Text Editing](/assets/TextEditing.png)

Text editing should work as you expect. This is a nice feature of Bike. Often outliner applications constrain text editing in various ways. Bike doesn't do that.

### Bike Text Editing

In addition to expected text editing commands Bike also adds a few new ones.

See [Using Selection](using-selection.md) for selection commands.

Outline commands:

* Outline > New Row (<kbd>Command-Return</kbd>)\
  This is similar to pressing <kbd>Return</kbd>. The difference is that it will only insert a new row. Pressing <kbd>Return</kbd> will replace the selection with a newline to create the new row.
* Outline > Duplicate (<kbd>Command-Shift-D</kbd>)
* Outline > Indent (<kbd>Control-Command-Right</kbd>)
* Outline > Outdent (<kbd>Control-Command-Left</kbd>)
* Outline > Move Up (<kbd>Control-Command-Up</kbd>)
* Outline > Move Down (<kbd>Control-Command-Down</kbd>)
* Outline > Move to Heading... (<kbd>Command-&#92;</kbd>)
* Outline > Promote Children
* Outline > Delete Rows (<kbd>Command-Shift-K</kbd>)

::: info
Indent and Outdent are important and used frequently. There are multiple keyboard shortcuts to perform these two commands. First you can use <kbd>Tab</kbd> and <kbd>Shift-Tab</kbd> as described in [Getting Started](../getting-started.md). Second you can use the above arrow key based shortcuts. Third you can use <kbd>Command-]</kbd> and <kbd>Command-[</kbd>.
:::

::: info
These outline commands always work on the outline structure, moving rows with their children. This is the same in both text mode and block mode. See [outline editing](outline-editing.md) for more details.
:::
