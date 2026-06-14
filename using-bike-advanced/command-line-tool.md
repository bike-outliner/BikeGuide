# Command Line Tool

`bike` is a companion command line tool for Bike.app. It lets you open, read, and edit Bike outlines from the terminal and from scripts, driving the running app over IPC.

By default every command targets the frontmost editor and its outline, so the quickest commands need no ids at all:

```sh
bike get outline -o markdown        # print the frontmost outline as markdown
bike create row --text "New task"   # add a row to the frontmost outline
bike evaluate commands fold:collapse-all
```

### Subcommands

| Command | Purpose |
| --- | --- |
| `open` / `close` | Open an outline by path, or close one. |
| `get` | Read editors, outlines, the current outline, or available commands. |
| `create` | Create an outline, a single row, or a row hierarchy from markdown. |
| `update` | Update the editor (focus, selection, expand/collapse) or rows (text, type, attributes). |
| `move` / `delete` | Move or delete rows and their descendants. |
| `observe` | Stream outline changes as NDJSON for as long as the command runs. |
| `evaluate` | Run a named Bike command, or evaluate JavaScript in Bike's extension context. |
| `mcp` | Run an [MCP server](../using-bike/using-mcp-server.md) on stdio. |

### Key concepts

- **Row refs** identify which rows a command targets: a session id, a persistent id, an [outline path](../using-bike/using-outline-paths.md) (starts with `/`), `@selection`, or `@focused`.
- **Ids** come in two flavors — *session ids* are stable while an outline stays open, and *persistent ids* are saved in the file and stable across sessions.
- **Output formats** (`-o`) include `session` (the default JSON API shape), `markdown`, `bike`, `opml`, `json`, and `txt`.

### Reference

This is just an overview. For the full list of subcommands, options, id semantics, and output formats, see the manual:

```sh
man bike
```

Per-subcommand help is also available with `--help`, e.g. `bike get outline --help`.

### See also

* [Using MCP Server](../using-bike/using-mcp-server.md)
* [Using Scripts](../using-bike/using-scripts.md)
* [Using Outline Paths](../using-bike/using-outline-paths.md)
