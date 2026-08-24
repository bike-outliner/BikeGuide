# Tasks & More

Don't forget [use what you need](../getting-started.md#use-what-you-need)!

This section covers how to work with tasks and related attributes in Bike. Beware creating uneeded complexity, you don't need to use all these features at once. Just pick what seems useful for your particular way of working.

## Status

When you click a task's checkbox, you are changing its `@status` attribute.

Make a row a task by typing `[]` followed by a space, then check it off. The checkbox is the fast path, and it means one thing: this row is finished, or it isn't.

Underneath the checkbox there are four states:

* **Todo** — not started.
* **Started** — in progress.
* **Canceled** — abandoned.
* **Done** — finished.

Two of those are *open* and two are *closed*. Done and canceled are closed; todo and started are open. That split is what the checkbox draws, what strikethrough follows, and what the rest of Bike watches. A closed row's badges fade back, its due date stops being urgent, and its estimate drops out of the totals below. Finishing something is what makes it quiet down.

IMAGE: rows in each of the four states, with the status badge visible

Any row carrying a `@status` shows a badge naming the state, so the two states the checkbox can't draw still say what they are. Click the badge to pick a different state, filter, or remove the attribute.

Status isn't only for tasks. Any row can have a status. The task row type adds the checkbox; the state itself stands on its own.

::: tip
In the badge menu, picking **Todo** and picking **Remove** both leave the row reading as todo. The difference only shows up in the file: Todo stores `@status : todo`, Remove takes the attribute back out. The `status:todo` command does the second one.
:::

### To set a status

* Click the checkbox, or press <kbd>Space</kbd> in block mode.
* Right-click the row and choose from the **Status** submenu.
* Click an existing status badge and pick a new state.
* Open the [attribute editor](row-attributes.md#attribute-editor) with Format > Row Attributes…
* Run a command: **`status:toggle-done`**, **`status:todo`**, **`status:started`**, **`status:done`**, **`status:canceled`**.

### Filtering by status

Status can have multiple states, but they all fall into the `open` or `closed` categories. When filtering use the `open()` and `closed()` functions to refer to these groups rather than spelling out individual states. For example:

* `//task open()` for everything unfinished.
* `//task closed()` for everything finished or dropped.

### Logging Changes

A status tells you what a row is now. It doesn't tell you when it changed, or how many times you started something before you finished it. Give a row a Log and it starts recording that. See [Row Log](row-log.md).

## Due Dates

`@due` is a date attribute. It takes a calendar day, a full timestamp, or no value at all, which means "Soon".

The badge shows the date, and its color tells you where you stand:

* **Red** once the due date has arrived or passed.
* **Orange** when it's due the next day.
* **Plain** when it's further out, or when the row status is closed.

## Priority

`@priority` is a choice of `1`, `2`, or `3`, where 1 is the highest. It shows as a compact `P1` badge rather than spelling out the whole attribute.

## Estimates

`@estimate` records the effort you expect a row to take, written as a duration: `30m`, `2h`, `1d`. The badge shows it with a `≈` in front, because an estimate is a guess.

Estimates add up. A row with estimates anywhere beneath it shows a second badge with a `Σ` and a total, and that total counts only the rows that are still open. So a project row tells you how much work is left under it, and the number falls as you check things off.

## Flags

`@flagged` marks a row for attention. It's a choice of seven colors: orange, red, purple, blue, yellow, green, and gray. The badge is a small filled flag in that color, and flagging without picking a color gives you a red one.

A flag doesn't mean anything in particular, which is the point. Use it for "look at this again", or pick a color and give it whatever meaning your outline needs.

## Progress

IMAGE: a parent row's progress badge with its menu open

Any row with tasks beneath it gets a progress badge, showing how many of those tasks are done. It draws as a fraction like `3/6` by default, or as a small pie if you prefer. Set which in [Settings > Extensions > Tasks](settings-window.md#extensions), where you can also turn the badge off entirely.

Click the badge for a menu that acts on that branch:

* **Filter Open** to see what's left.
* **Filter Closed** to see what's finished or dropped.
* **Mark Branch Tasks Done** and **Reopen Branch Tasks** to close or reset every task under the row at once.
* **Archive Branch Closed** to move the closed rows under it into the outline's `Archive`.

Archiving works on any closed row, not just tasks, and it moves the outermost ones with their branches intact. There's a whole-outline sweep too, **`task:archive-closed`**, which you'll find in the [choice box](using-choice-box.md).

## Setting Attributes

There are a few ways to set any of these, covered in [Row Attributes](row-attributes.md):

* Right-click a row and pick from the context menu, for example Status > Started or Priority > 1. This sets the attribute on every selected row at once.
* Click an existing badge to change its value, or right-click the badge to remove the attribute.
* Open the attribute editor with Format > Row Attributes… (<kbd>Command-Right</kbd> at the end of a row).
* Run a command. Bike has commands for the four states, and for setting and clearing due dates and priorities. Find them in the [choice box](using-choice-box.md) with <kbd>Shift-Command-P</kbd>, or give them keys in the [Commands Explorer](commands-explorer.md).

## Updating Older Documents

Bike used to record completion in a `@done` attribute. It now uses `@status`, and the change is not backward compatible.

::: warning
Open a document that still uses `@done` and Bike offers to convert it: **"Update tasks to the new status format?"** Until you accept, those completed tasks show as unchecked and with a stray `done` badge.

* **Update** sets `@status` on every row that had `@done` and removes the old attribute, in a single undo step. Nothing is written to the file until you save.
* The checkbox, **"Keep completion dates as log entries"**, is off by default. Turning it on preserves each @done completion time as a [log entry](row-log.md). Probably not wanted, unless the old completion dates are important to keep.
* **Not Now** writes nothing at all, so Bike asks again next time you open the document.
* A converted document won't show its completions in an older version of Bike.

Two other things need updating by hand. Saved filters and custom [stylesheets](../using-bike-advanced/creating-themes.md) that mention `@done` should use `@status`, or better, `open()` and `closed()`.
:::

## See also

* [Row Log](row-log.md)
* [Row Attributes](row-attributes.md)
* [Row Badges](row-badges.md)
* [Using Calendar](using-calendar.md)
* [Outline Filtering](outline-filtering.md)
