# Text Editing

![Text Editing](../.gitbook/assets/TextEditing.png)

Text editing should work as you expect. This is a nice feature of Bike. Often outliner applications constrain text editing in various ways. Bike doesn't do that.

### Bike Text Editing

In addition to expected text editing commands Bike also adds a few new ones.

See [Using Selection](using-selection.md) for selection commands.

Outline commands:

* Outline > New Row (`Command-Return`)\
  This is similar to pressing `Return`. The difference is that it will only insert a new row. Pressing `Return` will replace the selection with a newline to create the new row.
* Outline > Duplicate (`Command-Shift-D`)
* Outline > Indent (`Control-Command-Right`)
* Outline > Outdent (`Control-Command-Left`)
* Outline > Move Up (`Control-Command-Up`)
* Outline > Move Down (`Control-Command-Down`)
* Outline > Move to Heading... (`Command-\`)
* Outline > Promote Children
* Outline > Delete Rows (`Command-Shift-K`)

{% hint style="info" %}
Indent and Outdent are important and used frequently. There are multiple keyboard shortcuts to perform these two commands. First you can use `Tab` and `Shift-Tab`as described in [Getting Started](../getting-started.md). Second you can use the above arrow key based shortcuts. Third you can use `Command-]` and `Command-[`.
{% endhint %}

{% hint style="info" %}
These outline commands always work on the outline structure, moving rows with their children. This is the same in both text mode and block mode. See [outline editing](outline-editing.md) for more details.
{% endhint %}
