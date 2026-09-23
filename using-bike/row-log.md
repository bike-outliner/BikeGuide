# Row Log

Don't forget [use what you need](../getting-started.md#use-what-you-need)!

A row log records changes to a row's attributes, such as when a task was started and finished.

## Adding a Log

* Run **`row:create-log`**. It adds a `Log` row as the last child of the selected row.

Logs are meant for the few rows you want to track closely, not every task. Delete the `Log` row to stop recording.

## What a Log Entry Is

A log entry is an ordinary row, such as "Status changed", with the new value and date in badges. Edit it as you like.

::: tip
This is not the [Logs Explorer](../using-bike-advanced/logs-explorer.md), which shows Bike's diagnostic output.
:::

## What Gets Recorded

Each entry stores the new value in a `log-` attribute (for example `log-status`) and the time in `log-date`.

Choose which attributes are logged in the **Log** column of [Settings > Extensions > Attributes](settings-window.md#extensions).

## See also

* [Tasks & More](tasks-and-more.md)
* [Row Attributes](row-attributes.md)
* [Settings Window](settings-window.md#extensions)
* [Creating Outline Paths](../using-bike-advanced/creating-outline-paths.md)
