# Using MCP Server

Bike's [MCP](https://modelcontextprotocol.io) server lets AI assistants like Claude read and edit your outlines. It's part of the [`bike` command line tool](command-line-interface.md), and **Bike needs to be open** for it to work.

::: tip
Agents that can run shell commands, like Claude Code, don't need MCP. Just tell them to use the `bike` command.
:::

## Starting the Server

Your assistant starts the server itself. The command is:

```sh
bike mcp
```

### To connect an AI assistant

Point your client at `bike mcp`. In a JSON configuration file:

```json
{
  "mcpServers": {
    "bike": {
      "command": "bike",
      "args": ["mcp"]
    }
  }
}
```

Then restart your assistant.

::: warning
The assistant can change your real outlines. Experiment in a new outline first.
:::

## What the Server Can Do

An assistant can:

- **Read your outlines**: list open editors and outlines, read the current outline, and look up the commands Bike has available.
- **Edit rows**: create new outlines and rows, change row text, type, and attributes, and move or delete rows along with their children.
- **Drive the editor**: change the focused row, selection, and which rows are expanded or collapsed.
- **Run commands and scripts**: run any named Bike command, or evaluate JavaScript in Bike's [extension](using-extensions.md) context for anything the other tools don't cover.
- **Query with outline paths**: test [outline paths](../using-bike-advanced/creating-outline-paths.md) to find exactly the rows you mean.

## See also

- [Command Line Interface](command-line-interface.md): the rest of what the `bike` command can do
