# Using Inspector

The inspector is an optional panel on the right side of the Bike window. It's a place to show interactive content next to your outline without crowding the outline itself.

I built the inspector mostly for extensions. Some tools want screen space that doesn't belong inline in your text — a date grid, a word explorer, a custom panel. The inspector gives them a home on the right side of the window, where you can glance at them and reach for them when you need them, and tuck them away when you don't.

The best example that ships with Bike is the [Calendar](using-calendar.md). Its month grid lives in the inspector — click a date and Bike jumps to that day's row. That's the kind of thing the inspector is for.

So in practice the inspector is something extensions fill, not something you populate yourself. When no extensions have added items to it, the inspector will display "No Inspector Items".

#### To show the inspector

* View > Show Inspector

#### To hide the inspector

* View > Hide Inspector

### Inspector Tabs

When multiple extensions add items to the inspector, each item gets its own tab. Click a tab icon to switch between inspector items. Tab icons are shown at the top of the inspector panel. Hover over a tab icon to see its label.

### Extension Integration

For more on creating extensions that use the inspector, see the [DOM Context Tutorial](https://github.com/bike-outliner/extension-kit/blob/main/docs/dom-context-tutorial.md).

### See also

* [Using Calendar](using-calendar.md)
* [Interface Explorer](using-interface-explorer.md)
