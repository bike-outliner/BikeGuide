# Row Log

Don't forget [use what you need](../getting-started.md#use-what-you-need)!

The row log records changes to a row's attributes over time, giving you a history of what happened and when. It's useful if you want to track task start times and completion times, or any other attribute changes.

## Adding a Log

Rows have no log until you give them one:

* Run **`row:create-log`**. It adds a `Log` row as the last child of the selected row.

That's it. If the row is a task, click the checkbox and you'll see the status changed in the log. The expectation is that you don't want this behavior for most rows and tasks in your outline. But it can be useful for a few higher level ones that need careful tracking. Only create a log for those special rows.

### Removing a Log

* Select the `Log` row and delete it.

That's it (again). When the log is gone changes stop being recorded.

## What a Log Entry Is

A log entry is an ordinary row. The row's text generally describes what happened: "Status changed", "Priority changed". Edit as you see fit. The changed value and date show in badges beside it.

::: tip
This is not the [Logs Explorer](../using-bike-advanced/logs-explorer.md). That's a window showing Bike's own diagnostic output when an extension or theme misbehaves. A row's Log is content in your document, saved in your file.
:::

## What Gets Recorded

The changed attributes' value and the time it changed.

These values are stored as attributes on the log entry row, using the `log-` prefix followed by the original attribute name. For example, if the row's `status` attribute changes, the log entry will have an attribute named `log-status` that contains the new value and `log-date` that contains the time of the change.

Which attributes get recorded is up to you. You configure the attributes that you want logged in the **Log** column of [Settings > Extensions > Attributes](settings-window.md#extensions).

## See also

* [Tasks & More](tasks-and-more.md)
* [Row Attributes](row-attributes.md)
* [Settings Window](settings-window.md#extensions)
* [Creating Outline Paths](../using-bike-advanced/creating-outline-paths.md)
