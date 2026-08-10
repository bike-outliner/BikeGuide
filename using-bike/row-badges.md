# Row Badges

A badge is a small label that follows a row's text. Badges are how [row attributes](row-attributes.md) become visible in your outline, and how you edit them without opening the attribute editor.

For example, a row with a `@priority : 1` attribute shows a `P1` badge at the end of its text.

## Built-in and Custom Badges

Every attribute Bike doesn't recognize gets a badge automatically. Add `@estimate : 2h` to a row and a badge for it appears. You don't have to set anything up.

Bike's built-in attributes get badges too, some with custom styling:

* `@priority` is shortened to just `P1`, rather than spelling out `@priority : 1`.
* `@due` turns red once the due date has passed.

If you want that kind of custom presentation for your own attributes, you can define your own badges with the extension API. See [Creating Extensions](../using-bike-advanced/creating-extensions.md).

## Hiding Badges You Didn't Ask For

Sometimes attributes arrive from somewhere other than you. A syncing tool stamps rows with an id, a script leaves a hash behind. Those aren't notes to yourself, and a badge for each one is just noise.

You can tell the automatic badge to leave them alone.

#### To stop an attribute from showing a badge

* Choose Bike > Settings > Extensions, open **Default Badge Exclusions**, and add the attribute's name to the list. Separate names with commas.

The attribute itself is untouched — it stays in your outline, it still saves to your file, and you can still see and edit it in the attribute palette. It just stops drawing a badge.

This applies to every document you open, not just the current one. Attributes with their own custom badge, like `@due` and `@priority`, aren't affected — the extension that draws them decides how they look.

## To edit an attribute from its badge

* Click the badge and edit the value.

## To remove an attribute from its badge

* Right-click the badge and choose to remove it.

## See also

* [Row Attributes](row-attributes.md)
* [Creating Extensions](../using-bike-advanced/creating-extensions.md)
