# Outline Navigation

As [focus changes](outline-viewing.md#to-focus-into-your-outline) in your outline, Bike creates locations in its navigation history. Like in a web browser, it's easy to go back to previous views:

- Use Go > Back (<kbd>Command-[</kbd>)
- Use Go > Forward (<kbd>Command-]</kbd>)

## Locations

When focus is changed Bike stores a new location in its navigation history.

A location is more than just which row is focused. It also remembers which rows were expanded, your scroll position, selection, and any filters that were applied. When you go back, your outline doesn't just refocus, it returns to the shape it had before you left.

## Locations & Filtering

Location history becomes especially important when [filtering](outline-filtering.md) your outline.

Right before you start filtering, Bike stores your location. The filtering process changes everything: selection, scroll position, expanded rows. But when you are done, all you need to do is clear the filter and your location is restored. You don't have to worry about losing your place or how to get back.

Sometimes the filtered shape is the one you want to keep. Press <kbd>Command-Return</kbd> to clear the filter while keeping the folds it created, and you carry that pruned view into normal editing instead of returning to where you started.

## See also

* [Outline Filtering](outline-filtering.md)
