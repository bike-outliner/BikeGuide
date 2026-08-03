# Row Badges

A badge is a small label that follows a row's text. Badges are how [row attributes](row-attributes.md) become visible in your outline, and how you edit them without opening the attribute editor.

For example, a row with a `@priority : 1` attribute shows a `P1` badge at the end of its text.

## Built-in and Custom Badges

Every attribute Bike doesn't recognize gets a badge automatically. Add `@estimate : 2h` to a row and a badge for it appears. You don't have to set anything up.

Bike's built-in attributes get badges too, some with custom styling:

* `@priority` is shortened to just `P1`, rather than spelling out `@priority : 1`.
* `@due` turns red once the due date has passed.

If you want that kind of custom presentation for your own attributes, you can define your own badges with the extension API. See [Creating Extensions](../using-bike-advanced/creating-extensions.md).

## To edit an attribute from its badge

* Click the badge and edit the value.

## To remove an attribute from its badge

* Right-click the badge and choose to remove it.

## See also

* [Row Attributes](row-attributes.md)
* [Creating Extensions](../using-bike-advanced/creating-extensions.md)
