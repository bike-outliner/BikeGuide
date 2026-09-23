# Using Scripts

Use AppleScripts to automate Bike. This page shows how to run a script; to write your own see [Creating Scripts](../using-bike-advanced/creating-scripts.md). Find scripts on the [extension wiki](https://support.hogbaysoftware.com/t/bike-extensions-wiki/4810).

## Which automation should I use?

* **[Shortcuts](using-shortcuts.md)**: no code. Start here.
* **Scripts (AppleScript)**: more control, and works with other Mac apps.
* **[Extensions](using-extensions.md)**: add a real feature (a command, view, or style) to Bike.
* **[Command line tool](command-line-interface.md)**: for the terminal and other tools.
* **[MCP server](using-mcp-server.md)**: for AI assistants.

## To try a script:

![Script Editor](/assets/Screen%20Shot%202022-05-05%20at%2012.25.09%20PM.png)

1. Open the "Script Editor" application that comes with your Mac.
2. Paste the following script into a new editor window.
3. Make sure that the scripting language is set to "AppleScript". (Use `View > Show Navigation Bar` if no language selector is displayed at the top left of the document).
4. Press the "Play" button. The script creates a "Testing!" document with a "Hello" row containing a "World" row.

```applescript
tell application "Bike"
  tell (make document with properties {name:"Testing!"})
    delete every row -- remove any welcome text
    tell (make row with properties {name:"Hello"})
      make row with properties {name:"World"}
    end tell
  end tell
end tell
```

::: warning
Try scripts from other people on a test document first, not your real work.
:::

## To install a script in the script menu

In Script Editor, choose Help > Script Editor Help and search for "Access your scripts using the Script menu".

You can also use [FastScripts](http://www.red-sweater.com/fastscripts/) or [Keyboard Maestro](http://www.keyboardmaestro.com/main/) to run your scripts with assigned keyboard shortcuts.

## See also

* [Creating Scripts](../using-bike-advanced/creating-scripts.md)
* [Using Shortcuts](using-shortcuts.md)
