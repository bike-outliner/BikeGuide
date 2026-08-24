# What's New?

Lots!

Bike version 2 has been in development for way too long. I think it's 100% new code compared to Bike 1.0. And then I managed to rewrite all that new code at least a few times. Phew! I think it's finally ready.

This is 2.0…

IMAGE

It looks exactly the same as Bike 1.0!

I hope you'll find that it generally works and feels like the original too. Animations are smoother. Details are polished. But the experience is the same. At its core Bike remains a simple, clean, and fast macOS native outliner.

::: tip
In Bike 2 the move commands don't change behavior when you switch modes like they did in Bike 1.0. Instead, either flavor of the move command is always available:

* Move rows like an outliner (<kbd>Control-Command-Arrows</kbd>)
* Move rows like a text editor (<kbd>Control-Option-Arrows</kbd>)
:::

## Now, The New Features!

The new features are out of your way when you don't need them. But when you do need them, I hope you'll find useful.

- **[Sidebar](using-bike/using-sidebar.md)**: Use the sidebar to navigate. You can also pin rows and save filter queries to the sidebar for quick access.
- **[Inspector](using-bike/using-inspector.md)**: Use the inspector for details and specialized views. By default it shows a calendar, but extensions can add their own views.
- **[Filtering](using-bike/outline-filtering.md)**: Instantly filter your outline to show matching rows. Want to see only unfinished todos? Bike can do that and much more.
- **[Row Attributes](using-bike/row-attributes.md)** - Add attributes to your rows, such as `@priority : 1`. Filter by attribute and display in badges at the end of the row.
- **[Row Log](using-bike/row-log.md)**: Give a row a Log and Bike records changes to its attributes as ordinary rows you can read and annotate.
- **[Tasks & More](using-bike/tasks-and-more.md)**: Check off a row like before, or give it a more granular status such as "started". Also due dates, priorities, estimates, and more.
- **[Attachments](using-bike/attachments.md)** - Drag and drop file attachments into your outline. They are embedded, traveling with your outline document.
- **[Themes](using-bike/using-themes.md)**: Themes set fonts, colors, and more. Backed by a programable style system that you can also plug into with extensions.
- **[Markdown](using-bike/bike-markdown-format.md)**: Bike Markdown stores your outline as a native nested Markdown list. Easily round trip your outlines through markdown tools.
- **[Keybindings](using-bike/commands-explorer.md)**: Set custom keybindings using the  Commands Explorer. Get fancy with multi-stroke chords, or just set a few keys to your favorite commands.
- **[Accessibility](using-bike/accessibility.md)**: Navigate and edit your outlines with assistive technologies. Bike now works with VoiceOver.
- **Writing Tools**: Bike's editor now works with the macOS Edit > Writing Tools system.
- **[Interface Explorer](using-bike/interface-explorer.md)**: Customize Bike's interface. Add commands to the toolbar and statusbar. Organize views in the inspector.
- **[Calendar System](using-bike/using-calendar.md)**: Open the inspector and double-click a day. Bike takes you to that day's row, creating it if needed. The calendar is an extension that ships with Bike.
- **[Command Line Interface](using-bike/command-line-interface.md)**: Access Bike from the command line. Run commands, automate tasks, observe queries, and integrate with other tools.
- **[MCP Server for AI agents](using-bike/using-mcp-server.md)**: Connect AI agents to Bike for advanced automation and assistance.

::: warning Coming from an earlier preview?
Completed tasks used to be marked with a `@done` attribute. They now use `@status`, which holds one of four states. Bike offers to convert a document the first time you open it, and nothing is written until you save.

Saved filters and custom stylesheets that mention `@done` need updating — use `@status`, or better, the new `open()` and `closed()` functions. Custom keybindings on `row:toggle-done` or any `tasks:` command need the new ids. See [Updating Older Documents](using-bike/tasks-and-more.md#updating-older-documents).
:::

## Extensions

I have always tried to make my apps simple and extendable.

In the past (and still in 2.0) I have done that by supporting AppleScript, Shortcuts, and open file formats. But the dream has always been to build a full extension system. Allowing your code to run in, and respond to, my app.

Bike's extension system is finally here.

Extensions can add new commands, views, and windows. Sensitive features are guarded by a permission system. They interact with your live outlines. You can now tailor Bike to your exact needs.

When I say "you" I mean you! Until very recently even with an extension system in place, very few users could make use of it. Programming is a hard barrier to entry. With the advent of powerful AI assistants, that barrier is coming down quickly.

AI agents are very good at building Bike extensions.

I've had multiple users who know very little about coding, but are still able to create useful extensions with the help of an AI assistant. Give it a try.

## One more thing…

Each new feature adds both power and complexity. Each new feature has a cost and there are times when you'll want them out of the way.

- View > Enter Full Window (<kbd>Command-.</kbd>)

And it's just you, your thoughts, and your outline. No title bar, no toolbars, no sidebar, no inspector. Move your mouse to reveal a minimal UI. Start typing again and it fades away until you need it again.

I hope you enjoy Bike 2.0!