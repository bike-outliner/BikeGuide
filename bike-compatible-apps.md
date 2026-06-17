# Bike Compatible Apps

::: info
I originally put this list together for Bike 1.x, when [OPML](http://opml.org) was the main way to move an outline between Bike and another app. It's still handy for that. These days, though, I'd reach for [Bike Markdown](using-bike/bike-markdown-format.md) first: because `.md` is a subset of standard markdown, your Bike outlines are readable and writable in just about any text editor or markdown tool — no special compatibility needed.
:::

Bike supports four file formats `bike`, `md`, `opml`, and `txt` as described in [Using Documents](using-bike/using-documents.md). Each is what I would describe as an "open" file format, a format for structured data that is already supported by other applications.

The [Bike Markdown](using-bike/bike-markdown-format.md) format (`.md`) is the best option for sharing and interoperability. It's a subset of standard markdown, so any app or tool that works with markdown can read it. It also preserves all Bike features. If you want to edit your outlines with other tools, version control them with Git, or process them with scripts, Bike Markdown is the way to go.

OPML is another option for interchange. It's a [common standard](http://opml.org) for outlines with a long list of [compatible apps](http://opml.org/compatibleApps.opml). Bike's OPML preserves your full outline, including row types, text formatting, attributes, and hierarchy, so nothing is lost when you save to it. Keep in mind, though, that other apps don't always read all of that, so some Bike features may not survive a round trip through another OPML editor.

#### Bike Compatible Apps

This list welcome your feedback, additions, results, and notes. I have made this list by searching and reading product pages and release notes. Some things may be out of date or just untrue. Please let me know what needs fixing!

- [Bike (macOS)](https://www.hogbaysoftware.com/bike/) – Bike can read and write `bike`, `md`, `opml`, and `txt` directly to the file system as a supported file format. It can also read/write those formats to the clipboard. The `md` format is a [markdown subset](using-bike/bike-markdown-format.md) that works well with markdown-compatible tools.
- [Checkvist (Web)](https://checkvist.com) – Import and export OPML. Copy and paste outlines with Bike, may need formatting cleanup.
- [Cloud Outliner (macOS + iOS)](https://xwavesoft.com/cloud-outliner-for-iphone-ipad-mac-os-x.html) – Import and export OPML.
- [Drummer (Web + Electron)](http://drummer.scripting.com) – Uses OPML as native format. The Electron version saves OPML directly to disk so you can work on the same file with Bike and Drummer without import/export. Both the web and Electron versions support import and export of OPML. Copy and paste outlines with Bike.
- [Dynalist (Web)](https://dynalist.io) – Import and export OPML. Copy and paste outlines with Bike, may need formatting cleanup.
- [iThoughtsX (macOS, iOS, Windows)](https://www.toketaware.com) – Import and export OPML. Copy and paste outlines with Bike, may need formatting cleanup.
- [LittleOutliner (Web)](http://littleoutliner.com) – Uses OPML as native format. Import and export OPML. Copy and paste outlines with Bike. (This link looks to be down as of this writing — let me know if you find a working address.)
- [Logseq (Electron)](https://logseq.com) – Import and export OPML. Copy and paste outlines with Bike, may need formatting cleanup.
- [Mellel (macOS + iOS)](https://www.mellel.com/) – Import and export OPML. A multilingual word processor which assigns different formatting styles to each outline level.
- [MindNode (macOS + iOS)](https://www.mindnode.com) – Import and export OPML. Copy and paste outlines with Bike.
- [OmniOutliner (macOS + iOS)](https://www.omnigroup.com/omnioutliner) – OPML mode available. Work on the same file in Bike and OmniOutliner without import/export. Share an OPML document on iCloud Drive and edit on iOS with OmniOutliner and on macOS with Bike and/or OmniOutliner. Some of OmniOutliner's features are only supported in its `ooutline` file format, and will not persist when using OPML mode.
- [OutlineEdit (macOS)](https://outlineedit.com/index.html) – Import and export OPML. Copy and paste outlines with Bike, may need formatting cleanup
- [Outlinely (macOS + iOS)](https://glamdevelopment.com/outlinely) – Import and export OPML. Copy and paste outlines with Bike, may need formatting cleanup.
- [Outliner (iOS)](https://carbonfin.com) – Uses OPML as its native document format. I think you can share an OPML document on iCloud and edit on iOS with Outliner and on macOS with Bike. I have not tested this.
- [WorkFlowy (Web + iOS + Electron)](https://workflowy.com/) – Import and export OPML. Copy and paste outlines with Bike, may need formatting cleanup.
- [Zavala (macOS + iOS)](https://zavala.vincode.io) – Import and export OPML. Copy and paste outlines with Bike, may need formatting cleanup.

### See also

* [Bike Markdown Format](using-bike/bike-markdown-format.md)
* [Using Documents](using-bike/using-documents.md)
