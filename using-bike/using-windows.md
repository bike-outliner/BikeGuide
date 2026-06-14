# Using Windows

From macOS User Guide:

* [Manage app windows](https://support.apple.com/guide/mac-help/work-with-app-windows-mchlp2469/mac)
* [Use tabs in windows](https://support.apple.com/guide/mac-help/use-tabs-in-windows-mchla4695cce/mac)
* [See open windows and spaces in Mission Control](https://support.apple.com/guide/mac-help/open-windows-spaces-mission-control-mh35798/mac)

### Bike Window Options

#### To open a single document in multiple windows

![Multiple Window Views](/assets/Windows.png)

* Use the menu item Window > Duplicate Tab to New Window
* Each window maintains its own selection, focused row, and expanded row.

#### To open a single document in multiple tabs

![Multiple Tab Views](/assets/Tabs.png)

* Use the menu item Window > Duplicate Tab
* Each tab maintains its own selection, focused row, and expanded row.

#### To open multiple documents in a single window in separate tabs

* Use the menu item File > New Tab (<kbd>Option-Command-N</kbd>) to open a new untitled document in a new tab. (Must hold down <kbd>Option</kbd> to see that menu item.)
* Use the menu item Window > Merge All Windows to merge all windows into a single window with multiple tabs.
* You can also drag existing tabs from window to window when the tab bar is visible. The tab bar is always visible if a window has multiple tabs... to make it visible when only a single tab is present use the menu View > Show Tab Bar.

### Full Window Mode

Full window mode strips Bike down to just your outline. It's Bike's own minimal mode, and it's a different thing than the standard macOS [full screen mode](using-full-screen-mode.md).

#### To enter or leave full window mode

* View > Enter Full Window (<kbd>Command-.</kbd>)
* Choose View > Exit Full Window (<kbd>Command-.</kbd>) to return.

When you enter full window mode Bike:

* Hides the window's title bar, so the [editor toolbar](using-toolbar.md) sits flush at the top and takes over hosting the title bar's View menu and buttons.
* Collapses the [sidebar](using-sidebar.md) and [inspector](using-inspector.md).
* Hides the [status bar](using-status-bar.md).

What's left is your outline, edge to edge. As you type, the remaining controls fade away so nothing competes with your writing, and they reappear when you move the mouse. Leaving full window mode puts everything back exactly as it was — your sidebar and inspector return to their previous widths and your status bar comes back.

### Bike Window Restoration

macOS has a standard feature that saves windows when you quit an application and restores them next time you open the application.

To have your windows restored you need to make sure that Bike doesn't close windows before it quits. There is a system setting for this "Close windows when quitting an app", but I have found that many users want to use a separate setting for Bike, without changing that system setting.

Bike no longer uses the system setting. Instead to leave windows open when quitting Bike you should open Settings > Document. And then make sure that "When quitting Bike: Close documents" is _not_ checked. After you've done that then Bike should restore your open windows and the focused row, collapsed rows, and the selection.

#### Bike "Secondary" Restoration

If standard macOS Window Restoration, described above, is not available then Bike will use secondary restoration. Secondary restoration restores only Bike outline state such as expanded rows, focused row, and selection. It does not restore windows, a new default window is created when opening your outline document.
