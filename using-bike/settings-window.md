# Settings Window

- Open Bike's settings with Bike > Settings… (<kbd>Command-,</kbd>).

## General

* **Enable editor animations**: Turn off all animations in the outline editor.
* **Enable editor typing animations**: Turn off typing (slide) animations.
* **Disable animations in macOS Low Power Mode**: Keep animations in Low Power Mode.
* **Animation Rate**: Adjust Bike's animations faster or slower.
* **Show action images**: Turns the small icons in menus on or off.
* **Advanced**: buttons to open the [Interface Explorer](interface-explorer.md), [Commands Explorer](commands-explorer.md), Extensions Explorer ([Using Extensions](using-extensions.md)), and [Logs Explorer](../using-bike-advanced/logs-explorer.md)
* **Reset All Settings**: restores all settings (including extension) to their defaults.
* Direct download version only
    * **Check for Updates automatically**: Disable automatic update checks.
    * **Include "Preview" releases in updates**: See [Software Update](software-update.md).
    * **Prompt to send crash reports**: After a crash Bike will prepare a crash report.


## Typography

![Text wrap adds margins](/assets/TextWrap.png)

Text wrap limits the number of characters that your outline uses until the text wraps to the next line. When text is wrapping, margins are added to keep the text centered in the window. You can see text wrap in effect in the screenshot above.

Text wrap will also scale your document to fit large windows. For example if you have text wrap enabled and then enter [full screen mode](using-windows.md#full-screen-mode) you'll notice that the text is scaled larger to better fit your screen.

Controls the font, spacing, and text wrap of your outline:

* **Font & Size**: Choose base font and size. Themes may override this. 
* **Line Width**: wrap text to the editor's width or to a fixed character column (66, 72, 80, 90, or 120 characters).
* **Allow size scale when line wraps at character width**: When text wrap is on Bike may scale font size larger to better fit window width. (Good for fullscreen mode)
* **Line Height and Row Spacing** for the space within and between rows.
* **Reset Typography Settings** returns this pane to its defaults.

## Appearance

* **Auto / Light / Dark**: follow the system appearance or pin Bike to one.
* **Editor**: toggles for the outline editor's display.
* **Hide outline controls when typing**: check the controls you want to hide while you type, they come back when mouse moves.
* **Light/Dark Themes**: [Themes](using-themes.md) specify colors and fonts. **Open Themes Folder…** reveals where themes live so you can add your own.
* **Editor Style**: the programmable rules, similar to CSS, that lay out and style your outline using the theme. See [Creating Themes](../using-bike-advanced/creating-themes.md).

## Autocorrect

Bike's text-correction options, covered in [Outline Checking](outline-checking.md).

## Links

Decide what happens when you activate a [row link](outline-links.md).

## Document

Defaults for new documents and windows:

* **New Document**: the [file format](other-bike-formats.md) new documents use by default.
* **Save row created & modified attributes**: whether new documents record row dates.
* **Show welcome text**: whether new outlines start with welcome content.
* **New Window**: *Match the current window's layout*, or use a layout you capture with **Save Window Layout**. See [Window Layout](using-windows.md#window-layout).
* **When Open**: for documents you open while Bike is already running, expand no rows, all rows, or just level-one rows. See [Open Options](using-documents.md#open-options).
* **When Quit Bike**: *Close documents*, or leave it unchecked to have Bike re-open your documents next launch. This is the setting behind [window restoration](using-windows.md#bike-window-restoration).

## Extensions

A home for settings that [extensions](using-extensions.md) add. Use Bike > Extensions Explorer to install and remove extensions.

Bike's own built-in extension contributes two sections here:

### Attributes

Every known [row attribute](row-attributes.md), with checkboxes for its Editor, Badge, and [Log](row-log.md) behavior.

### Calendar

See [Using Calendar](using-calendar.md) for details on calendar settings.

### Tasks

* **Sort completed to end of list**: move closed tasks to the bottom of their list.
* **Hide Done badge on completed tasks**: canceled tasks keep their badge.
* **Show task progress badges**: as a **Fraction** or **Pie chart**.

## Sandbox

Grant Bike access to folders of outlines, so [links](outline-links.md) to documents that aren't open can resolve.

## License

Your license or subscription status.

## See also

* [Editor View Settings](editor-view-settings.md)
* [Using Documents](using-documents.md)
