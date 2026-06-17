# Creating Extensions

Extend and customize Bike with extensions. They introduce new commands, keybindings, views, styles, and more. Sensitive features are safeguarded by a permission system.

I can't anticipate every way you'll want to use Bike, so extensions are how you teach it new tricks. An extension can add a command you can run from the menu or bind to a key, draw a new view, restyle the outline, and more — the same machinery Bike's own built-in behavior is built on. If you've ever wished Bike did one specific thing your way, an extension is usually the answer.

Because an extension is real code running inside Bike, I take its reach seriously. Anything sensitive an extension wants to do is guarded by a permission system, so you stay in control of what your extensions are allowed to touch. To install and manage the extensions you've already got, see [Using Extensions](../using-bike/using-extensions.md).

When you're ready to build your own, the SDK, examples, and full reference live in the extension-kit:

- [Bike Extension Kit](https://github.com/bike-outliner/extension-kit)

### See also

* [Using Extensions](../using-bike/using-extensions.md)