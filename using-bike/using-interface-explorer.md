# Interface Explorer

[Extensions](using-extensions.md) can add new commands and views to Bike. The Interface Explorer is where you decide how those commands and views show up in Bike's interface — which bar a button lives in, what symbol it uses, which inspector tabs exist, and what order your sidebar items appear in. Bike's own built-in interface items are organized here too.

#### To open the Interface Explorer

* Bike > Interface Explorer…

### What you can organize

The Interface Explorer lists the editable surfaces of the Bike window, each as a section you can expand:

* **Window Sidebar Items** — the locations shown in the [sidebar](using-sidebar.md).
* **Window Inspector Tabs** — the tabs and items shown in the [inspector](using-inspector.md).
* **Window Titlebar Menu Items** — commands in the window title bar menu.
* **Editor Toolbar Buttons** — buttons on the editor [toolbar](using-toolbar.md).
* **Editor Statusbar Buttons** — buttons on the editor [status bar](using-status-bar.md).

### Arranging items

Each section's items can be rearranged in place:

* **Add** a button — click the **+** on a bar section and pick a command from the list. For inspector tabs, **+** lets you choose a symbol for a new tab.
* **Edit** an item — double-click it, or click its pencil button, to change the command it runs and the SF Symbol it shows.
* **Reorder** items — drag them up and down within their section.
* **Show or hide** an item — click the eye button next to a sidebar location or inspector item to toggle whether it's visible.
* **Remove** a button — click its trash button.

Bike remembers your changes, so the way you arrange things sticks from one launch to the next.

### How extension items appear

When an extension adds a command, that command can suggest where its button should go — the title bar, toolbar, or status bar — along with a symbol to use. The first time Bike sees the command it places the button in the suggested spot. From then on the item is yours.

In the Interface Explorer you can move that button to another bar, change its symbol, or remove it, and your choice persists. A removed button is not added back the next time the extension loads. Items that came from an extension show a "from \<extension>" label, and right-clicking one offers **Reset to Extension Default** to restore the placement the extension originally suggested.

This division of labor is the point: an extension suggests sensible defaults, and the Interface Explorer lets you have the final say. If you're building your own extension, see [Creating Extensions](../using-bike-advanced/creating-extensions.md) to learn how to declare commands, views, and their default placements.

### See also

* [Using Extensions](using-extensions.md)
* [Using Toolbar](using-toolbar.md)
* [Using Status Bar](using-status-bar.md)
* [Using Inspector](using-inspector.md)
