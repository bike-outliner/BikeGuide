# Using MCP Server

Bike can run as an MCP server, letting AI assistants like Claude read and edit your outlines directly.

MCP (the [Model Context Protocol](https://modelcontextprotocol.io)) is a standard way for AI assistants to talk to the apps on your computer. When you connect an assistant to Bike's MCP server it can open your outlines, read what's there, and make changes for you: adding rows, moving things around, checking off tasks, and more.

The server is part of the [`bike` command line tool](command-line-interface.md). Like the rest of that tool, it drives the running Bike app, so **Bike needs to be open** for the server to do anything.

::: tip
The MCP server isn't your only option. Some agents (coding assistants like Claude Code, for example) can already run shell commands on their own. For those you can skip the MCP setup entirely and just tell the agent to use the [`bike` command line tool](command-line-interface.md) directly.
:::

## Starting the Server

The server runs over stdio, which means you don't usually start it yourself. Instead you tell your AI assistant how to launch it, and the assistant runs it for you in the background. The command is:

```sh
bike mcp
```

### To connect an AI assistant

Most MCP clients let you register a server by giving it a command to run. Point your client at `bike mcp`. For clients that use a JSON configuration file, the entry looks like this:

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

After you add the server, restart your assistant so it picks up the change. It should then list Bike's tools and be ready to work with your outlines.

::: warning
Bike's MCP server can change your real outlines, and an assistant won't always do exactly what you expect. When you're trying things out, open a fresh outline first so an experiment can't disturb your real work.
:::

## What the Server Can Do

Once connected, an assistant can:

- **Read your outlines**: list open editors and outlines, read the current outline, and look up the commands Bike has available.
- **Edit rows**: create new outlines and rows, change row text, type, and attributes, and move or delete rows along with their children.
- **Drive the editor**: change the focused row, selection, and which rows are expanded or collapsed.
- **Run commands and scripts**: run any named Bike command, or evaluate JavaScript in Bike's [extension](using-extensions.md) context for anything the other tools don't cover.
- **Query with outline paths**: test [outline paths](../using-bike-advanced/creating-outline-paths.md) to find exactly the rows you mean.

## See also

- [Command Line Interface](command-line-interface.md): the rest of what the `bike` command can do
