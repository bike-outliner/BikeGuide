# Tasks & More

Don't forget [use what you need](../getting-started.md#use-what-you-need)! This section covers how to work with tasks and related attributes in Bike. Beware creating uneeded complexity, you don't need to use all these features at once. Just pick what seems useful for your particular way of working.

## Status

When you click a task's checkbox, you are changing its `@status` attribute.

Make a row a task by typing `[]` followed by a space. Clicking its checkbox sets the row's `@status` attribute, which has four states:

* **Todo**: not started. A row with no `@status` is todo.
* **Started**: in progress.
* **Done**: finished.
* **Canceled**: abandoned.

Done and canceled are *closed*; todo and started are *open*. The checkbox shows closed rows as checked. Closed rows fade, their due dates stop being urgent, and their estimates stop counting.

IMAGE: rows in each of the four states, with the status badge visible

A row with a `@status` shows a badge naming the state. Click it to change the state. Any row can have a status, not just tasks.

### To set a status

* Click the checkbox, or press <kbd>Space</kbd> in block mode.
* Right-click the row and choose from the **Status** submenu.
* Click the status badge.
* Use the [Attributes Editor](row-attributes.md#attributes-editor) (Format > Row Attributes…).
* Run a command: **`status:toggle-done`**, **`status:todo`**, **`status:started`**, **`status:done`**, **`status:canceled`**.

### Filtering by status

Status can have multiple states, but they all fall into the `open` or `closed` categories. When filtering use the `open()` and `closed()` functions to refer to these groups rather than spelling out individual states. For example:

* `//task open()` for everything unfinished.
* `//task closed()` for everything finished or dropped.

To record when a status changes, give the row a [Log](row-log.md).

## Due Dates

`@due` takes a date, a timestamp, or no value (meaning "Soon"). The badge is red once the date arrives, orange the day before, and plain otherwise or when the row is closed.

## Priority

`@priority` is `1`, `2`, or `3`, where 1 is highest. It shows as a `P1` badge.

## Estimates

`@estimate` is a duration such as `30m`, `2h`, or `1d`, shown with a `≈` badge.

A row with estimates beneath it shows a `Σ` badge totaling the estimates of its open rows. It shrinks as you check things off.

## Flags

`@flagged` marks a row for attention in one of seven colors: orange, red, purple, blue, yellow, green, or gray. The default is red. Give the colors whatever meaning you like.

## Progress

IMAGE: a parent row's progress badge with its menu open

A row with tasks beneath it shows a progress badge, as a fraction like `3/6` or as a pie. Change or turn it off in [Settings > Extensions > Tasks](settings-window.md#extensions).

Click the badge for commands that act on that branch:

* **Filter Open** and **Filter Closed**
* **Mark Branch Tasks Done** and **Reopen Branch Tasks**
* **Archive Branch Closed**: move closed rows (tasks or not) into the outline's `Archive`, keeping their branches intact.

To archive closed rows across the whole outline, run **`task:archive-closed`** from the [choice box](using-choice-box.md).

For other ways to set these attributes, see [Row Attributes](row-attributes.md).

## Updating Older Documents

Bike used to record completion in a `@done` attribute. It now uses `@status`, and the change is not backward compatible.

::: warning
When you open a document that uses `@done`, Bike offers to convert it. Until you do, completed tasks show unchecked with a stray `done` badge.

* **Update** replaces `@done` with `@status` in one undo step. Nothing is written until you save.
* **Keep completion dates as log entries** (off by default) saves each old completion time as a [log entry](row-log.md). Probably not wanted, unless the old completion dates are important to keep.
* **Not Now** changes nothing, and Bike asks again next time.

Older versions of Bike won't see completions in a converted document. Update saved filters and [stylesheets](../using-bike-advanced/creating-themes.md) that mention `@done` to use `open()` and `closed()`, and rebind custom keybindings on `row:toggle-done` or `tasks:` commands to the new `status:` commands.
:::

## See also

* [Row Log](row-log.md)
* [Row Attributes](row-attributes.md)
* [Row Badges](row-badges.md)
* [Using Calendar](using-calendar.md)
* [Outline Filtering](outline-filtering.md)
