# Using Calendar

The calendar helps you work with dates in two ways. First, it creates a calendar row structure for your notes. Second, the calendar view indicates which days have associated due dates and allows you to filter your outline by date.

## The Calendar View

The calendar view is located in Bike's inspector panel:

* View > Show Inspector

It shows a month grid with the current date highlighted. Days with associated rows are colored blue. Days with associated due dates have a dot. Change the selected day by clicking or with the arrow keys.

### To create a day row

* Click "Today" in Bike's leading sidebar
* Double-click any day in the calendar view to jump to that day's row, creating it if needed. Or select a date(s) and press <kbd>Return</kbd>.

### To filter your outline by day

* Click to select a date in the calendar view. Your outline is filtered to show rows associated with that date. Drag to select multiple dates. Clear the filter field to return to the full outline.

### Drag and drop to assign a due date

* Drag a row from your outline and drop it onto a date in the calendar view. The row's due date will be set to that day.

## Commands

Four commands let you work with the calendar from the [choice box](using-choice-box.md), or you can bind them to keyboard shortcuts in [Bike's keybindings](commands-explorer.md):

* **`calendar:today`**: jump to today, creating the day row if needed.
* **`calendar:week`**: pre-create every day in the current week.
* **`calendar:month`**: pre-create every day in the current month.
* **`calendar:year`**: pre-create every day in the current year.

## How Dated Rows Are Created

Day rows, and higher-level rows (Year, Month, Week) are created only as you need them. Use settings to configure the exact structure and text labels that are used.

```
2026
└─ April 2026
   └─ Monday, April 27, 2026
      └─ your notes here
```

::: tip
Want your calendar somewhere specific, say under a `Calendar` row? Just move it there once. The extension reuses existing rows wherever they live, so new dates will be generated in that location from then on.
:::

## Settings

Open Bike > Settings > Extensions

* **Show week numbers**: toggle the week-number column in the calendar view.
* **Year / Month / Week / Day**: the text/templates used for each level's rows.
* **Include checkbox** (Year, Month and Week): the structure levels to include.

::: details How the date formats work

The contents of the `{ … }` span control how the date is written:

* A valid JSON object is used as [`Intl.DateTimeFormat` options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options), for example `{"dateStyle":"long"}`.
* Anything else is treated as a [date-fns pattern](https://date-fns.org/docs/format), for example `{ yyyy }` or `{ MMMM d }`.

One place Bike differs from the date-fns defaults: `ww` follows your Mac's first day of the week, so these numbers match the calendar grid. Use `II` if you always want ISO week numbers instead — on a Sunday-start Mac the two disagree by one.

Markdown outside the span formats the row. A leading `#` or `##` makes it a heading, and `**…**` makes it bold. So `# { yyyy }` renders the year as a heading, and `**{"dateStyle":"long"}**` renders the day in bold.

:::

## The Calendar Is an Extension

The calendar isn't built into Bike. It's one of Bike's [open core extensions](https://github.com/bike-outliner/core-extensions/tree/main/src/calendar.bkext). You can read its source, change how it behaves, or use it as a starting point for something of your own.

## See also

* [Using Inspector](using-inspector.md)
* [Using Sidebar](using-sidebar.md)
* [Creating Extensions](../using-bike-advanced/creating-extensions.md)
