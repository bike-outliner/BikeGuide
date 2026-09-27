# Commands Explorer

The Commands Explorer lists every Bike command and its keybindings, and lets you rebind any of them. Custom keybindings only work when the outline editor has focus.

## Opening the Commands Explorer

Open **Bike > Commands Explorer** to view all commands and their current keybindings. Select a command and press Return (or double-click the keybinding cell) to edit it. Press Delete to clear a custom keybinding. User-customized bindings are underlined.

Each command has separate keybindings for **Text Mode** and **Block Mode**. Text mode is active when the selection is a caret or text range. Block mode is active when entire rows are selected. The same command can have different keybindings in each mode.

When commands share a key sequence, the highest priority wins: your bindings, then Bike and extension bindings, then menu items, then Cocoa keybindings.

## Command Sources

- **Bike Menu**: commands in Bike's menu bar.
- **Bike**: Bike commands that aren't in the menus.
- **Extensions**: commands from installed extensions.
- **Cocoa Keybindings**: standard macOS text editing actions like `moveForward:`, including your `~/Library/KeyBindings/DefaultKeyBinding.dict`.

## Key Sequence Format

Usually you just press the keys. The format reference:

::: details Key sequence format reference

A key sequence is one or more keys separated by spaces. Each key is a combination of modifiers and a key name joined by hyphens. The format is case-insensitive.

**Modifiers:**

| Modifier | Alias |
| -------- | ----- |
| Command  | cmd   |
| Control  | ctrl  |
| Option   | opt   |
| Shift    |       |

**Named keys:**

Return, Tab, Space, Delete, Escape, ForwardDelete, Home, End, PageUp, PageDown, LeftArrow (alias: left), RightArrow (alias: right), UpArrow (alias: up), DownArrow (alias: down), F1–F20, CapsLock, Function, Help

Any single typed character (a–z, 0–9, punctuation) is also a valid key.

**Examples:**

| Key Sequence    | Description                            |
| --------------- | -------------------------------------- |
| `cmd-s`         | Command-S                              |
| `ctrl-shift-a`  | Control-Shift-A                        |
| `space`         | Space key (no modifiers)               |
| `cmd-k cmd-c`   | Chord: Command-K followed by Command-C |
| `ctrl-x ctrl-s` | Chord: Control-X followed by Control-S |
| `m d`           | Chord: M followed by D (no modifiers)  |

:::

## Full API Reference

For the complete keybindings API including programmatic access from extensions, see the [keybindings type definitions](https://github.com/bike-outliner/extension-kit/blob/main/api/app/keybindings.d.ts).

## See also

* [Keyboard Shortcuts](../keyboard-shortcuts.md)
* [Using Extensions](using-extensions.md)
* [Interface Explorer](interface-explorer.md)
