# Commands Explorer

Customize Bike's keybindings through the Commands Explorer window.

Custom keybindings are only active when the outline editor has focus. They are not processed when focus is in the sidebar, find panel, or other UI elements.

### Opening the Commands Explorer

Open **Bike > Commands Explorer** to view all commands and their current keybindings. Select a command and press Return (or double-click the keybinding cell) to edit it. Press Delete to clear a custom keybinding. User-customized bindings are underlined.

Use the mode picker at the top to switch between **Text Mode** and **Block Mode**. Each mode has its own set of keybindings. Text mode is active when the selection is a caret or text range. Block mode is active when entire rows are selected. The same command can have different keybindings in each mode.

Sort by the **Keybinding** column to see the order keybindings are processed in. When multiple commands share the same key sequence, the one with the lowest process order takes priority.

### Command Sources

Commands in the Commands Explorer come from several sources:

- **Bike Menu** — Commands with a corresponding menu item in Bike's menu bar. Their default keybindings come from the menu item's key equivalent.

- **Cocoa Keybindings** — Commands derived from macOS's text system keybinding dictionaries (`StandardKeyBinding.dict` and `~/Library/KeyBindings/DefaultKeyBinding.dict`). These provide standard text editing actions like `moveForward:`, `deleteWordForward:`, and `uppercaseWord:`. They appear as the lowest-priority fallback when no mode-specific or menu keybinding exists.

- **Bike** — Commands added directly by Bike that don't correspond to a menu item.

- **Extensions** — Commands added by installed Bike extensions.

### Key Sequence Format

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

### Full API Reference

For the complete keybindings API including programmatic access from extensions, see the [keybindings type definitions](https://github.com/bike-outliner/extension-kit/blob/main/api/app/keybindings.d.ts).
