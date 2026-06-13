# Using Calendar

The calendar gives Bike a notes-by-date workflow. Pick a date and Bike generates the rows to hold that day's notes, building up a `Calendar → Year → Month → Day` structure as you go. It's a nice way to keep a journal or daily log without any bookkeeping of your own.

The calendar shows up in two places: a **Today** button in the [sidebar](using-sidebar.md) and a month-grid **Calendar** panel in the [inspector](using-inspector.md).

### Jumping to today

* Click the **Today** button in the sidebar.

This jumps to today's row, creating it first if it doesn't exist yet.

### The calendar inspector

The inspector shows a month grid you can click around in.

#### To show the calendar

* View > Show Inspector, then click the **Calendar** tab.

Click any date in the grid to jump to that day's row. When you hover over the calendar's header you'll find three controls: ‹ for the previous month, ◆ for today, and › for the next month. Selecting any row inside the date hierarchy highlights its matching day back in the grid.

### How dated rows are created

Rows are created only as you need them. Picking a date creates just the rows above it that don't already exist, and inserts them in chronological order among their siblings. Existing rows are reused, so you can edit the text of any year, month, or day row without breaking the link back to the calendar.

```
2026
└─ April 2026
   └─ Monday, April 27, 2026
      └─ your notes here
```

::: tip
Want your calendar somewhere specific — say under a `Calendar` row? Just move it there once. The extension reuses existing rows wherever they live, so new dates will be generated in that location from then on.
:::

### Commands

Three commands let you work with the calendar from the command palette, or you can bind them to keyboard shortcuts in [Bike's keybindings](using-commands.md):

* **`calendar:today`** — jump to today, creating the day row if needed.
* **`calendar:month`** — pre-create every day in the current month.
* **`calendar:year`** — pre-create every day in the current year.

### Settings

Open Bike > Settings > Extensions

* **Show week numbers** — toggle the week-number column in the calendar grid.
* **Year / Month / Day** — the text used for each level's rows. Put the date inside a single `{ … }` span; everything outside the span is markdown.
* **Include checkbox** (Year and Month) — when unchecked, that level's row isn't created. Day is always included. Uncheck both Year and Month for a flat list of days, or uncheck only Month to put days directly under each year.

The defaults look like this:

| Level | Format                              | Example                |
|-------|-------------------------------------|------------------------|
| Year  | `{ yyyy }`                          | 2026                   |
| Month | `{"year":"numeric","month":"long"}` | April 2026             |
| Day   | `{"dateStyle":"long"}`              | Monday, April 27, 2026 |

<details>

<summary>How the date formats work</summary>

The contents of the `{ … }` span control how the date is written:

* A valid JSON object is used as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options) — for example `{"dateStyle":"long"}`.
* Anything else is treated as a [date-fns pattern](https://date-fns.org/docs/format) — for example `{ yyyy }` or `{ MMMM d }`.

Markdown outside the span formats the row. A leading `#` or `##` makes it a heading, and `**…**` makes it bold. So `# { yyyy }` renders the year as a heading, and `**{"dateStyle":"long"}**` renders the day in bold.

</details>

### The calendar is an extension

The calendar isn't built into Bike — it's one of Bike's [open core extensions](https://github.com/bike-outliner/core-extensions/tree/main/src/calendar.bkext). The whole thing is just an extension, so you can read its source, change how it behaves, or use it as a starting point for something of your own.

If the default date structure or formatting doesn't fit how you work, you can modify the extension directly. And if you want a different kind of dated workflow altogether, the calendar is a good example to learn from when [creating your own extension](../using-bike-advanced/creating-extensions.md).
