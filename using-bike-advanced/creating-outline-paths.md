# Creating Outline Paths

Outline paths are Bike's query language.

Use them to match rows and compute values from your outline. Outline paths are an advanced feature, you don't need to understand them to use Bike. Places they are used include the filter bar, editor styles, scripts, and extensions APIs.

Examples:

```
//pizza
/inbox//task
//task not @done
//task @due <[d] today()
//@classes matches "\burgent\b"
//heading union //task
```

## What is an outline path?

On your computer you use file paths to locate files.

Outline paths are similar, but used to locate rows and compute values in your outline. Simple outline paths look just like file paths. More powerful outline paths that work more like database queries are also possible.

One important difference between outline paths and file paths is that outline paths often locate many rows, while file paths locate individual files.

::: details Outline paths are similar to XPath

If you already know what [XPath](https://developer.mozilla.org/en-US/docs/Web/XPath) is then you are well on your way to understanding Bike outline paths. Outline paths have a different syntax, but the underlying concetps are very similar.

:::

### Where are outline paths used?

Outline paths don't do much on their own, but they are an important building block for other features. Here are some places where they are being used today:

1. Search UI uses outline paths to filter your outline
2. Editor styles use relative outline paths to select which rules apply
3. Sidebar index uses outline paths to select which rows are included in the index
4. AppleScript dictionary's `query` command takes an outline path and returns result
5. Shortcuts "Query Rows" action takes an outline path and returns matching rows.
6. Extensions API's `Outline.queryRows()` method takes an outline path.

### Outline Path Explorer

Use the Bike > Outline Path Explorer to play with outline paths and learn how they work.

#### To open the Outline Path Explorer:

1. Open the outline that you would like to query
2. Open menu Bike > Outline Path Explorer

Type an outline path in the top text field in the Outline Path Explorer window. The path results are displayed in a label to the trailing side of the search field. Matching rows are highlighted in green. Matching text runs are highlighted in darker green. Last you see a diagnostics text area that shows how your outline path was understood.

The outline shown in the Outline Path Explorer shows outline text and all outline attributes. For example above each row you will see `@id`, `@level`, and `@type` because every row has those attributes. You might also see other attributes, for example a checked off task will include a `@done` attribute. There are the attributes you can use in your outline paths.

### Basic Paths

Unlike file paths the default test is "contains text" instead of "equals file name". Outline paths often have multiple matching rows.

*   `/a`

    Select top level rows containing "a"
*   `/a/b`

    Select "b" children of top level "a" rows
*   `.a`

    A relative path that selects the current row if it contains "a". Generally you won't need to use relative paths. But it's good to know that they exist, and good to know that paths need to start with `/` or `.` to match rows. Otherwise see "Value Expressions".

### Path Expressions

Use `union`, `except`, and `intersect` to combine the results of multiple outline paths.

*   `/a union /b`

    Top level rows that contain "a" or "b"
*   `/a except /b`

    Top level "a" rows removing "b" rows
*   `/a intersect /b`

    Top level rows that contain "a" and "b"
*   `(/a union /b) except /c`

    Top level rows that contain "a" or "b", but not "c"

### Path Steps

Paths are divided into steps. For example the path `/a/b` has two steps. Each step contains filtering logic. You don’t have to include all filtering options in each step. For example the following steps have the same behavior.

*   `/a`

    Simple top level contains "a"
*   `/* a`

    Same behavior as above, but makes the row type test explicit. `*` means match "any" row type.
*   `/* @text contains "a"`

    Same behavior as above, but makes the predicate test explicit. See "Step Predicate" below to learn how predicates work.

#### Step Axes

By default each step passes the children of the matched rows to the next step. This is because "child" is the default axis. Other axes are also possible.

For example, say you want to search your entire outline for the text "pizza". That would be difficult if each step could only process the children of the previous step. To search the entire outline we would need to keep creating longer paths to search each level of the outline:

* \`/pizza\`
* \`/\*/pizza\`
* \`/\*/\*/pizza\`

To solve this we can use the "descendant" axis. It selects all descendants of the rows passed into the step. You can search for pizza anywhere in your outline using the `//` descendant axis like this:

*   `//pizza`

    Descendant axis, selects all descendants of the outline root. They are then filtered to only the ones that contain pizza.

::: details Advanced step axes

Another useful axis is "parent". This uses the same `..` syntax that file paths use to go to the parent directory.

*   `//pizza/..box`

    First use the descendant access to find "pizza". Then use the `..` parent axis select the parents of those "pizza" rows, and then filter those parents to those that contain "box. You've found the pizza boxes!

The above examples use the shortcut form of the descendant and parent axes. There is also a more general form where you enter the axis name followed by `::`. This is needed because there are more axes and some don't have shortcut forms:

*   `ancestor::`

    All ancestors of the rows passed into the step
*   `ancestor-or-self::`

    All rows passed into the step and their ancestors
*   `parent::` or shortcut `..`

    All parents the rows passed into the step
*   `self::` or shortcut `.`

    All rows passed into the step
*   `child::`

    All children of the rows passed into the step
*   `run::`

    All text runs of the rows passed into the step. This step is unique because you are filtering on text runs and their attributes, not rows. This query uses the text run axis to find all bold text in your outline `//*/run::@strong`.
*   `descendant::` or shortcut `//`

    All descendants of the rows passed into the step
*   `descendant-or-self::` or shortcut `///`

    All rows passed into the step and their descendants
*   `following-sibling::`

    All siblings after the rows passed into the step
*   `following::`

    All rows (in outline) following the rows passed into the step
*   `preceding-sibling::`

    All siblings before the rows passed into the step
*   `preceding::`

    All rows (in outline) before the rows passed into the step

:::

#### Step Type

Each step can include a row type test at the start.

*   `//task`

    Match all rows of type task
*   `/heading//task`

    Match all tasks that are contained by a top level heading.
*   `//"task"`

    Match all rows that contain the text "task". When you want to search for text that in some way conflicts with outline path syntax put that text in quotes to make it a value.

::: details List of row types

* `row`
* `body`
* `heading`
* `blockquote`
* `codeblock`
* `note`
* `unordered`
* `ordered`
* `task`
* `hr`
* `*` Matches any type

:::

#### Step Predicate

Each step can include a predicate test. You can then combine predicates with `and`, `or`, and `not`. Use `@` to name the row attribute to testing against.

*   `//@done`

    Matches rows that have a @done attribute.
*   `//not @done`

    Matches rows that do not have a @done attribute.
*   `//@text contains "get rich"`

    Match rows that contain the text "get rich". This example uses the `contains` relation.
*   `//@text contains "get rich" and not @done`

    Combine predicates. Use it to find all rows that will make you rich and are unfinished!

::: details More on row attributes

Each row in your outline has associated attributes that you can use in outline path predicate tests.

Some attributes are built in to all rows, other attributes are optional and may be set by scripts or other features within Bike. For example when you click the checkmark of a task row it adds the @done attribute.

Open Bike > Outline Path Explorer and notice that the outline view showns each row's attributes. The built in attributes include:

* `@id`
* `@type`
* `@level`
* `@text`

:::

::: details More on comparison relations

Use the following relations in your comparision predicates:

* `beginswith`
* `contains`
* `endswith`
* `matches`
* `=`
* `!=`
* `<`
* `<=`
* `>`
* `>=`

Use relation modifiers in brackets after the relation to change how it is evaluated. For example `beginswith[s]` will perform a case sensitive test instead of the default case insensitive test. The available modifiers are:

* `i` Case insensitive (also ignores diacritics, default)
* `s` Case sensitive compare
* `n` Numeric compare

    Both sides of the compare are converted to numbers before comparing. Shorthand for wrapping both sides in `number(side)` functions; see [util functions](#functions-reference).

*   `d` Date compare

    Compares both sides as dates: `@done <[d] "2026-07-01"`. Shorthand for wrapping both sides in `date(side)` functions; see [date functions](#functions-reference).

##### Match comparisons

The `matches` relation treats the right side as a regular expression:

*   `//@text matches "\bsum\b"` — the whole word "sum"
*   `//@text matches "^Q[1-4]\b"` — starts with Q1, Q2, Q3, or Q4
*   `//@text matches "cats?"` — "cat" or "cats"
*   `//@tags matches "\bdone\b"` — matches item in a space-delimited list
*   `//@cities matches "(^|,)\s*New York\s*(,|$)"` - matches item in a comma-delimited list

Regex patterns use backslashes, so in an editor style write them with `String.raw` — see [Paths in editor styles](#paths-in-editor-styles).

:::

#### Step Slice

Each step produces a list of ordered matches. Use position based slicing if you want to limit the step results by position.

*   `//a[1]`

    Match the first row that contains "a"
*   `//a[-1]`

    Match the last row that contains "a"
*   `//a[2:]`

    Match rows 2 through last that contain "a".
*   `//a[2:-1]`

    Match rows 2 through last that contain "a".
*   `//a[2:-2]`

    Match rows 2 through last -1 that contain "a".
*   `//a[2:4]`

    Match second, third, and fourth rows that contain "a".

### Value Expressions

You have already seen many value expressions such as `a`, `"a"`, and `@attribute`. They all generate a value that can be used in your outline path logic. Here are all the value expressions supported in outline paths:

*   `hello world`

    Unquoted text value expression that evaluates to `hello world`.
*   `"hello world"`

    Quoted text value evaluating to `hello world`. Quote text that would conflict with path syntax. Contents are literal — no backslash escaping — so `"\bsum\b"` is exactly those characters. A doubled `""` is one literal `"` (`"she said ""hi"""` → `she said "hi"`).
*   `@attribute`

    Attribute value expression that returns the value of the attribute named "attribute" for the current row (or current run when using the `run::` axis). This value expression will always return `nil` if it's not used within a path step.
*   `functionName(params?)`

    Functions are composed of a name followed by `()` with optional params. See the [Functions Reference](#functions-reference) for a list of available functions.
*   `1` or `(1 + 1) / 2`

    Math value expression that evaluates to `1`. Math operators (`+`, `-`, `*`, `/`) require single whitespace on either side. This is so `/` doesn't conflict with path step separator. It doesn't make sense to use Math operators with text. `1 + "1"` is invalid. `1 + @attribute` is ok, but will return `nan` if the attribute can't be converted to a number.

If you don't start your outline path with a `/` or a `.` then it is treated as a value expression. For example try typing `1 + 2` in the Outline Path Explorer and note how no rows are matched, but the result of the value expression is displayed trailing the text field.

#### Paths in editor styles

An editor style path is *also* a JavaScript string, and JavaScript strips backslashes before Bike sees the path — so a plain `"\b"` becomes a backspace and a pattern like `matches "\bdone\b"` fails. Use `String.raw` so the path reads the same as in the filter bar:

```js
row(String.raw`.@tags matches "\bdone\b"`, (_, row) => {
  row.text.color = Color.systemRed()
})
```

Or double each backslash for JavaScript's sake (`"\\bdone\\b"`), which collapses to `\bdone\b` by the time Bike parses it.

### Functions Reference

Outline path functions serve a variety of purposes:

1. Easy and efficient access to outline structure.
2. Access to external editor state such as selection and folding.
3. Access to date & math utilities and other behavior that isn't otherwise available.

::: details Outline Functions

These functions provide easy and efficient access to outline structure.

In some cases you might accomplish similar results with more complex outline path queries. For example instead of using `level()` you could use `count(ancestor::*)`, but you should expect `level()` to have better performance.

*   parent() -> boolean

    True if has children
*   level() -> number

    Number of steps to root
*   leaf() -> boolean

    True if has no children
*   root() -> boolean

    True if the element is the outline's root.
*   first-child() -> boolean

    True if is first child of parent
*   last-child() -> boolean

    True if is last child of parent
*   nth-child(n) -> boolean

    True if is the nth child of its parent, counting from 1.
*   first-of-type() -> boolean

    True if is first of type in siblings
*   last-of-type() -> boolean

    True if is last of type in siblings
*   nth-of-type(n) -> boolean

    True if is the nth sibling of its type, counting from 1.
*   only-child() -> boolean

    True if has no siblings
*   only-of-type() -> boolean

    True if is only of type in siblings
*   start-of-matches(relative path expression) -> boolean

    True if element matches relative path and previous sibling does not. Useful when styling attribute runs and you want to special case the first match in a sequence of matching runs. You can implement the same logic using the preceding-sibling axis, but this function shorter and faster.
*   end-of-matches(relative path expression) -> boolean

    True if element matches relative path and next sibling does not. Useful when styling attribute runs and you want to special case the last match in a sequence of matching runs. You can implement the same logic using the following-sibling axis, but this function shorter and faster.

:::

::: details Editor Functions

These functions all provide access to editor state. They are only available when evaluating your outline path in the context of an outline editor, and generally used in editor styles. For example you can use `focused-root()` to style the focused root row differently than other rows.

*   focused-root() -> boolean

    True if row is the focused root
*   focused-branch() -> boolean

    True if row is in the focused branch
*   focused-level() -> number

    Number of steps to focused root, or max value if not focused
*   expanded() -> boolean

    True if row is expanded
*   collapsed() -> boolean

    True if row is collapsed
*   filter-match() -> boolean

    True if row is matched
*   filter-match-ancestor() -> boolean

    True if row is ancestor of matched row
*   selection() -> caret|range|block|null

    Returns row selection type
*   selection-ancestor() -> caret|range|block|null

    Selection type if this row is ancestor of a selected row
*   selection-descendant() -> caret|range|block|null

    Selection type if this row is descendant of selected row
*   drop-indicator() -> on|above|below|null

    Drop indicator state for this row

:::

::: details Context Functions

*   last() -> number

    Size of the evaluation context
*   position() -> number

    Current position in evaluation context

:::

::: details Date Functions

A date is a number, so you compare dates with the normal relations and add or subtract with `+` and `-` (which need a single space on each side).

*   date(value) -> number

    Interprets its argument as a date — `date("2026-07-01")` for a literal, `date(@due)` for an attribute. Accepts a year (`2026`), year-month (`2026-07`), full date (`2026-07-01`), or full timestamp (`2026-07-01T13:53:00Z`). A bare date resolves to midnight in your local time zone; a timestamp keeps its own zone. The `[d]` modifier is shorthand for wrapping both sides of a compare in `date()`.
*   now() -> number

    The current date and time.
*   today() -> number

    The start of today, in local time.

The duration functions return a length of time to add or subtract. They're fixed lengths, so `days(1)` is always 24 hours, even across a daylight-saving change.

*   seconds(number) -> number
*   minutes(number) -> number
*   hours(number) -> number
*   days(number) -> number
*   weeks(number) -> number

The start-of functions return a calendar boundary, offset by a whole number of periods: `0` (the default) is the current period, `1` the next, `-1` the previous. They're calendar aware, so `start-of-month(1)` is always the first of next month. The week starts on your calendar's first day of the week.

*   start-of-day(offset?) -> number
*   start-of-week(offset?) -> number
*   start-of-month(offset?) -> number
*   start-of-year(offset?) -> number

The component functions pull a single field out of a date, in local time. `weekday` is `1` (Sunday) through `7` (Saturday).

*   year(date) -> number
*   month(date) -> number
*   day(date) -> number
*   weekday(date) -> number
*   hour(date) -> number
*   minute(date) -> number
*   second(date) -> number

Some examples:

*   `@due <[d] today()`

    Rows due before the start of today.
*   `@due <[d] today() + days(7)`

    Rows due within the next seven days.
*   `@due >=[d] start-of-week(0) and @due <[d] start-of-week(1)`

    Rows due this week.
*   `@due <[d] start-of-month(1)`

    Rows due before next month starts.
*   `@done >=[d] start-of-year(0)`

    Rows finished this year.
*   `month(@due) = 6`

    Rows due in June, in any year.
*   `weekday(@due) = 1 or weekday(@due) = 7`

    Rows due on a weekend.
*   `date(@due) < now() - weeks(1)`

    Same idea using `date()` instead of the `[d]` shorthand.

:::

::: details Util Functions

* floor(number) -> number
* ceil(number) -> number
* round(number) -> number
* count(expression) -> number
* boolean(expression) -> boolean
* number(value) -> number

    Interprets its argument as a number (non-numbers become `nan`). This is the function twin of the `[n]` modifier: `x OP[n] y` is the same as `number(x) OP number(y)`.

:::

### See also

* [Using Outline Filtering](../using-bike/using-outline-filtering.md)