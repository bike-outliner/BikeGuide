# Command Line Interface

`bike` is a command line tool for opening, reading, and editing outlines from the terminal and scripts. It drives the running Bike app, and also runs Bike's [MCP server](using-mcp-server.md).

## Installing the `bike` Command

Choose Bike > Install Command Line Tool…

This links `/usr/local/bin/bike` and its man page into Bike.app. If you move Bike.app, install again.

## Quick Examples

Commands target the frontmost outline by default:

```sh
bike get outline -o markdown        # print the frontmost outline as markdown
bike create row --text "New task"   # add a row to the frontmost outline
bike evaluate commands fold:collapse-all   # run a built-in Bike command
bike open ~/notes/todo.bike         # open an outline from a path
bike observe                        # stream outline changes as they happen
bike mcp                            # run an MCP server on stdio
```

Read the manual with `man bike`, and get help for any subcommand with `--help`, e.g. `bike get outline --help`.

## Going Further

For everything else, see the **[Session Automation guide](https://github.com/bike-outliner/extension-kit/blob/main/docs/session-automation.md)**.

## See also

* [Using MCP Server](using-mcp-server.md)
* [Using Scripts](using-scripts.md)
