# Row Badges

A badge is a small label that follows a row's text. Badges are how [row attributes](row-attributes.md) are made visible in your outline. For example, a row with a `@priority : 1` will show the badge `P1`. Click on a badge to see a related menu.

## Custom & Catch-All Badges

Badges are drawn by the extension system. They can be custom drawn by an extension, or drawn by the catch-all badge.

Bike's built-in extension draws custom badges for well known attributes, such as those described in [Tasks & More](tasks-and-more.md). 
These custom badges incorporate color, icons, and other styling based on the attribute and value. Other extensions can do the same.

There is also a catch-all badge that is used for any attribute that doesn't have a custom badge. The catch-all badge simply shows the attribute's name and value.

## Hiding Unwanted Badges

Sometimes attributes are not meant to be seen in your outline. You might use an attribute to store a hash, a timestamp, or some other data that you don't want to see mixed in with outline content. In that case, you can tell the catch-all badge to ignore it.

* Choose Bike > Settings > Extensions. Go to the **Badges** section, and add the attribute's name so that the catch-all badge will ignore it.

The attribute itself is untouched, it stays in your outline, and you can still see and edit it in the attribute palette. It just stops drawing a badge.

## See also

* [Row Attributes](row-attributes.md)
* [Creating Extensions](../using-bike-advanced/creating-extensions.md)
