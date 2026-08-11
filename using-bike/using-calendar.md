# Using Calendar

The calendar allows you to organize notes by date. Pick a date and Bike generates the rows to hold that day's notes, building up a `Calendar → Year → Month → Day` structure as you go. It's a nice way to keep a journal or daily log.

## Jumping to Today

* Click the **Today** button in the sidebar.

This jumps to today's row, creating it first if it doesn't exist yet. Or use the command palette to run `calendar:today` (or bind it to a keyboard shortcut in [Bike's keybindings](commands-explorer.md)).

## The Calendar View

The inspector shows a month calendar view. Use it to see which days have associated rows, filter your outline by date, or to create a row for a specific day.

### To show the calendar view

* View > Show Inspector, or press <kbd>Command-Shift-I</kbd>.

### To filter your outline by a date

* Click to select a date in the calendar view. Your outline will be filtered to show rows associated with that date. Drag to select multiple dates. Clear the filter field to return to the full outline.

### To create a row in your outline by a date

* Double-click any date in the grid to jump to that day's row, creating it if needed. Or select a date and press <kbd>Return</kbd>.

## How Dated Rows Are Created

Rows are created only as you need them. Picking a date creates just the rows above it that don't already exist, and inserts them in chronological order among their siblings. Existing rows are reused, so you can edit the text of any year, week, month, or day row without breaking the link back to the calendar.

```
2026
└─ April 2026
   └─ Monday, April 27, 2026
      └─ your notes here
```

::: tip
Want your calendar somewhere specific, say under a `Calendar` row? Just move it there once. The extension reuses existing rows wherever they live, so new dates will be generated in that location from then on.
:::

### Weeks

If you think in weeks rather than months, turn on the **Week** level in Settings and turn Month off. Days are then gathered under the week they belong to:

```
2026
└─ Week 18 (Apr 27)
   ├─ Monday, April 27, 2026
   └─ Wednesday, April 29, 2026
```

Weeks start on whatever day your Mac's first day of the week is set to, so they always match the week numbers shown in the calendar grid.

You can leave Month on too, if you like a `Year → Month → Week → Day` structure. A week that straddles the end of a month stays in one piece under the month it started in — I'd rather keep a week whole than split it in half for the sake of the calendar.

## Commands

Four commands let you work with the calendar from the command palette, or you can bind them to keyboard shortcuts in [Bike's keybindings](commands-explorer.md):

* **`calendar:today`**: jump to today, creating the day row if needed.
* **`calendar:week`**: pre-create every day in the current week.
* **`calendar:month`**: pre-create every day in the current month.
* **`calendar:year`**: pre-create every day in the current year.

## Settings

Open Bike > Settings > Extensions

* **Show week numbers**: toggle the week-number column in the calendar grid.
* **Year / Month / Week / Day**: the text used for each level's rows. Put the date inside a `{ … }` span; everything outside the span is markdown. A field can hold more than one span, which is how the Week default writes both a number and a date.
* **Include checkbox** (Year, Month and Week): when unchecked, that level's row isn't created. Day is always included. Week starts out unchecked. Uncheck everything else for a flat list of days, or uncheck only Month to put days directly under each year.

The defaults look like this:

| Level | Format                              | Example                |
|-------|-------------------------------------|------------------------|
| Year  | `{ yyyy }`                          | 2026                   |
| Month | `{"year":"numeric","month":"long"}` | April 2026             |
| Week  | `Week { ww } ({ MMM d })`           | Week 18 (Apr 27)       |
| Day   | `{"dateStyle":"long"}`              | Monday, April 27, 2026 |

::: info
`ww` is the week number your Mac uses, so it matches the numbers down the side of the calendar grid. If you'd rather always have ISO week numbers — which count weeks as starting on Monday, whatever your Mac is set to — use `II` instead. On a Mac that starts weeks on Sunday the two disagree by one.
:::

::: details How the date formats work

The contents of the `{ … }` span control how the date is written:

* A valid JSON object is used as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options), for example `{"dateStyle":"long"}`.
* Anything else is treated as a [date-fns pattern](https://date-fns.org/docs/format), for example `{ yyyy }` or `{ MMMM d }`.

Markdown outside the span formats the row. A leading `#` or `##` makes it a heading, and `**…**` makes it bold. So `# { yyyy }` renders the year as a heading, and `**{"dateStyle":"long"}**` renders the day in bold.

:::

## The Calendar Is an Extension

The calendar isn't built into Bike. It's one of Bike's [open core extensions](https://github.com/bike-outliner/core-extensions/tree/main/src/calendar.bkext). The whole thing is just an extension, so you can read its source, change how it behaves, or use it as a starting point for something of your own.

If the default date structure or formatting doesn't fit how you work, you can modify the extension directly. And if you want a different kind of dated workflow altogether, the calendar is a good example to learn from when [creating your own extension](../using-bike-advanced/creating-extensions.md).

## See also

* [Using Inspector](using-inspector.md)
* [Using Sidebar](using-sidebar.md)
* [Creating Extensions](../using-bike-advanced/creating-extensions.md)
