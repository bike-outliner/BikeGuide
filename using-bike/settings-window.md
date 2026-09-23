# Settings Window

- Open Bike's settings with Bike > Settings… (<kbd>Command-,</kbd>).

## General

* **Enable editor animations**: animate the outline editor.
* **Enable editor typing animations**: animate text as you type.
* **Disable animations in macOS Low Power Mode**: turn animations off in Low Power Mode.
* **Animation Rate**: Adjust Bike's animations faster or slower.
* **Show action images**: Turns the small icons in menus on or off.
* **Advanced**: buttons to open the [Interface Explorer](interface-explorer.md), [Commands Explorer](commands-explorer.md), Extensions Explorer ([Using Extensions](using-extensions.md)), and [Logs Explorer](../using-bike-advanced/logs-explorer.md)
* **Reset All Settings**: restores all settings (including extension) to their defaults.
* Direct download version only
    * **Check for Updates automatically**
    * **Include "Preview" releases in updates**: See [Software Update](software-update.md).
    * **Prompt to send crash reports**: offer to send a report after a crash.


## Typography

Controls the font, spacing, and text wrap of your outline:

![Text wrap adds margins](/assets/TextWrap.png)

* **Font & Size**: Choose base font and size. Themes may override this. 
* **Line Width**: wrap text at the editor's width, or at a fixed column (66, 72, 80, 90, or 120 characters) centered in the window.
* **Allow size scale when line wraps at character width**: with a fixed column, scale the text up to fill large windows.
* **Line Height and Row Spacing** for the space within and between rows.
* **Reset Typography Settings** returns this pane to its defaults.

## Appearance

* **Auto / Light / Dark**: follow the system appearance or pin Bike to one.
* **Editor**: toggles for the outline editor's display.
* **Hide outline controls when typing**: check the controls you want to hide while you type, they come back when mouse moves.
* **Light/Dark Themes**: [Themes](using-themes.md) specify colors and fonts. **Open Themes Folder…** reveals where themes live so you can add your own.
* **Editor Style**: the programmable rules, similar to CSS, that lay out and style your outline using the theme. See [Creating Themes](../using-bike-advanced/creating-themes.md).

## Autocorrect

Text-correction options. See [Outline Checking](outline-checking.md).

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
