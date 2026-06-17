# Using CLI Interface

`bike` is a companion command line tool for Bike.app. It lets you open, read, and edit Bike outlines from the terminal and from scripts, driving the running app over IPC.

Reach for it when you want to automate Bike from outside the app: script a repetitive edit, pull outline content into another program, generate or update an outline from a build step, or wire Bike into whatever tools you already use in the terminal. It's also how Bike runs as an [MCP server](../using-bike/using-mcp-server.md), letting AI agents read and edit your outlines.

### Installing the `bike` command

Choose Bike > Install Command Line Tool…

Installing creates symlinks at `/usr/local/bin/bike` (and a matching man page) that point into Bike.app, so you can run `bike` from any terminal. You may be asked for permission to create them. Because the links point at the copy of Bike you're running, the tool always matches your installed version — if you move Bike.app, run Install again so the links point to its new location.

### Quick examples

By default every command targets the frontmost editor and its outline, so the most common commands need no ids at all:

```sh
bike get outline -o markdown        # print the frontmost outline as markdown
bike create row --text "New task"   # add a row to the frontmost outline
bike evaluate commands fold:collapse-all   # run a built-in Bike command
bike open ~/notes/todo.bike         # open an outline from a path
bike observe                        # stream outline changes as they happen
bike mcp                            # run an MCP server on stdio
```

Read the manual with `man bike`, and get help for any subcommand with `--help`, e.g. `bike get outline --help`.

### Going further

This page is just a quick orientation. For the full picture — every subcommand, how row references and session vs. persistent ids work, the available output formats, streaming changes, and evaluating JavaScript in Bike's extension context — see the **[Session Automation guide](https://github.com/bike-outliner/extension-kit/blob/main/docs/session-automation.md)**.

### See also

* [Using MCP Server](../using-bike/using-mcp-server.md)
* [Using Scripts](../using-bike/using-scripts.md)
