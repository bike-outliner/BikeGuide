# Commands Explorer

The Commands Explorer is the one place that lists *every* command Bike knows — the ones in the menus, the ones that aren't, and the ones added by extensions — along with the key you press to run each. Open it when you want to discover what Bike can do, or when a built-in shortcut isn't the one your fingers expect and you'd rather change it.

I think this is the honest way to handle keybindings: instead of hiding them, Bike shows you the whole list and lets you rebind anything.

Custom keybindings are only active when the outline editor has focus. They are not processed when focus is in the sidebar, find panel, or other UI elements.

### Opening the Commands Explorer

Open **Bike > Commands Explorer** to view all commands and their current keybindings. Select a command and press Return (or double-click the keybinding cell) to edit it. Press Delete to clear a custom keybinding. User-customized bindings are underlined.

Each command shows its keybindings in two columns: **Text Mode** and **Block Mode**. They sit side by side, so you can see both at once. Text mode is active when the selection is a caret or text range. Block mode is active when entire rows are selected. The same command can have different keybindings in each mode.

Click any column header to sort the table. By default commands are grouped by **Source**, then sorted by name. When multiple commands share the same key sequence, the one with the highest priority wins. Priority comes from the command's source: your own bindings from the keybindings file rank highest, then Bike and extension bindings, then menu items, and finally the Cocoa fallbacks rank lowest.

### Command Sources

Commands in the Commands Explorer come from several sources:

- **Bike Menu** — Commands with a corresponding menu item in Bike's menu bar. Their default keybindings come from the menu item's key equivalent.

- **Cocoa Keybindings** — Commands derived from macOS's text system keybinding dictionaries (`StandardKeyBinding.dict` and `~/Library/KeyBindings/DefaultKeyBinding.dict`). These provide standard text editing actions like `moveForward:`, `deleteWordForward:`, and `uppercaseWord:`. They appear as the lowest-priority fallback when no mode-specific or menu keybinding exists.

- **Bike** — Commands added directly by Bike that don't correspond to a menu item.

- **Extensions** — Commands added by installed Bike extensions.

### Key Sequence Format

When you edit a keybinding you'll type its key sequence. Most of the time you don't need to think about the format — you just press the keys. The full reference is here if you want it:

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

### Full API Reference

For the complete keybindings API including programmatic access from extensions, see the [keybindings type definitions](https://github.com/bike-outliner/extension-kit/blob/main/api/app/keybindings.d.ts).

### See also

* [Keyboard Shortcuts](../keyboard-shortcuts.md)
* [Using Extensions](using-extensions.md)
* [Interface Explorer](using-interface-explorer.md)
