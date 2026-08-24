# Accessibility

Bike's outline editor works with macOS accessibility. If you use VoiceOver, Voice Control, or Switch Control, you can read, navigate, and edit your outline the way you'd work in any well-behaved Mac app.

::: info
Bike draws its outline with a custom view for speed. For a long time it had no accessibility support at all. That's now fixed in Bike 2.0. The editor presents itself as a proper outline, with rows, structure, selection, and editable text.
:::

## Reading Your Outline with VoiceOver

Turn on VoiceOver (<kbd>Command-F5</kbd>) and Bike presents your document as an outline. You move through it one row at a time.

For each row, VoiceOver tells you:

- The row's text.
- How deeply it's nested.
- Whether it's expanded or collapsed, when the row has children.
- Its position, and whether it's selected.

Because Bike exposes the real structure of your outline, VoiceOver can move from a parent into the rows it reveals and back out again. The shape of your outline comes through, not just a flat list of lines.

## Editing Row Text

Each row is an editable text area. You can read it by character, word, or line, move the caret, select text, and type. All the usual VoiceOver text navigation works inside a row.

This helps text tools beyond VoiceOver too. For example, an inline autocomplete utility can read a row's text and insert a suggestion that matches Bike's font and layout.

### To expand or collapse a row

- Use VoiceOver's standard disclosure command on a row that has children. Bike reports the change and the row folds or unfolds in place.

## Row Actions

When VoiceOver is on a row, open the Actions menu (<kbd>VO-Command-Space</kbd>) to run common outline commands by name:

- Indent and Outdent
- Move Up and Move Down
- Toggle Fold (on rows that have children)
- Toggle Done, Toggle Started, Toggle Canceled
- Delete

These match Bike's keyboard commands, so you can restructure a whole outline without leaving VoiceOver.

### To open a row's context menu

- Press <kbd>VO-Shift-M</kbd>, or use Voice Control. You get the same menu as a right-click.
- Press <kbd>Control-Return</kbd>, macOS's own shortcut for showing a context menu. You can change that key in System Settings > Keyboard > Keyboard Shortcuts.

Opening the menu from the keyboard leaves your selection alone. A text selection, a block selection, or a caret you've placed all survive, so the command you pick acts on what you had chosen rather than on whatever the menu landed next to.

## Feedback Appreciated

I'm not an everyday VoiceOver user myself, so if something isn't quite please let me know. I'll do my best to get it working well.