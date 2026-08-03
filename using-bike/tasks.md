# Tasks

Bike is an outliner first, but outlines are where most of my todo lists start. So Bike ships with a small set of built-in [row attributes](row-attributes.md) for the things a list tends to need: a due date, a priority, an estimate, a flag.

None of this is a separate task manager bolted onto the side. Each one is just an attribute with a [badge](row-badges.md), so you set it on any row, see it at the end of that row, and filter on it with an [outline path](../using-bike-advanced/creating-outline-paths.md). If you never set them, you'll never see them.

## Done

The hinge for all of it is `@done`.

Make a row a task by typing `[]` followed by a space, then check it off. Checking the box sets `@done` on the row, and the value it stores is the completion time. In [block mode](outline-editing.md#selection-modes) you can also press <kbd>Space</kbd> to toggle done on every selected row.

`@done` is what the other features watch. A done row's badges fade back, its due date stops being urgent, and its estimate drops out of the totals below. Finishing something is what makes it quiet down.

## Due Dates

`@due` is a date attribute. It takes a calendar day, a full timestamp, or no value at all, which means "Soon".

The badge shows the date, and its color tells you where you stand:

* **Red** once the due date has arrived or passed.
* **Orange** when it's due the next day.
* **Plain** when it's further out, or when the row is done.

The badge re-checks the time about once a minute, so a row goes red while you're looking at it rather than the next time you open the document.

## Priority

`@priority` is a choice of `1`, `2`, or `3`, where 1 is the highest. It shows as a compact `P1` badge rather than spelling out the whole attribute.

Three levels is deliberate. I've used systems with ten, and all I ever did was argue with myself about whether something was a 6 or a 7.

## Estimates

`@estimate` records the effort you expect a row to take, written as a duration: `30m`, `2h`, `1d`. The badge shows it with a `≈` in front, because an estimate is a guess.

Estimates add up. A row with estimates anywhere beneath it shows a second badge with a `Σ` and a total, and that total counts only the rows that aren't done yet. So a project row tells you how much work is left under it, and the number falls as you check things off.

## Flags

`@flagged` marks a row for attention. It's a choice of seven colors: orange, red, purple, blue, yellow, green, and gray. The badge is a small filled flag in that color, and flagging without picking a color gives you a red one.

A flag doesn't mean anything in particular, which is the point. Use it for "look at this again", or pick a color and give it whatever meaning your outline needs.

## Progress

Any row with tasks beneath it gets a progress badge, showing how many of those tasks are done. It draws as a small pie by default, or as a fraction like `3/7` if you prefer. Set which in Settings > Progress.

Click the badge for a menu that acts on that branch:

* **Filter not @done** to see what's left.
* **Filter @done** to see what's finished.
* **Mark Branch Tasks Done** and **Clear Branch Tasks Done** to check off or reset every task under the row at once.

## Setting Attributes

There are a few ways to set any of these, covered in [Row Attributes](row-attributes.md):

* Right-click a row and pick from the context menu, for example Priority > 1.
* Click an existing badge to change its value, or right-click the badge to remove the attribute.
* Open the attribute editor with Format > Row Attributes… (<kbd>Command-Right</kbd> at the end of a row).
* Run a command. Bike has commands for setting and clearing due dates and priorities, and one that filters to everything still due. Find them in the [choice box](using-choice-box.md) with <kbd>Shift-Command-P</kbd>, or give them keys in the [Commands Explorer](commands-explorer.md).

## Filtering by What Matters

Attributes earn their keep when you filter on them. Type these in the filter bar (<kbd>Command-Shift-F</kbd>):

* `//task not @done` for everything unfinished.
* `//@due <[d] today()` for what's overdue.
* `//@priority = 1` for the things you said were most important.
* `//@flagged` for whatever you flagged.
* `//task not @done and @due <[d] today() + days(7)` for the week ahead.

Save a filter you use often to the [sidebar](using-sidebar.md) so it's one click away. See [Outline Filtering](outline-filtering.md) and [Creating Outline Paths](../using-bike-advanced/creating-outline-paths.md) for the full query language.

## The Calendar

The [Calendar](using-calendar.md) approaches the same problem from the other end. Instead of tagging rows with dates, it generates the rows: pick a day and Bike builds a `Calendar → Year → Month → Day` structure to hold that day's notes.

The two work well together. Keep the day's notes and tasks under a date row, give the ones that matter a `@due` or a `@priority`, and filter across the whole outline when you want to see what's actually pressing.

## See also

* [Row Attributes](row-attributes.md)
* [Row Badges](row-badges.md)
* [Using Calendar](using-calendar.md)
* [Outline Filtering](outline-filtering.md)
