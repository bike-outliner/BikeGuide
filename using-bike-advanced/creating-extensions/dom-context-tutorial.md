# DOM Context Tutorial

Use the DOM context to display custom UI using HTML and DOM.

You can present a sheet, panel, window, and add custom views to the inspector bar. Note, your extension might not need to use the DOM context. Instead, you can use the app context to present alerts and add items to the sidebar. The DOM context is only necessary when you want a fully custom view.

#### DOM Context Summary

* [DOM Context API](https://github.com/bike-outliner/extension-kit/tree/main/api/dom).
* Entry points: `dom/*.ts(x)`
* Code runs in web views embedded in Bike's UI.
* Web views are sandboxed and have no network access.
* These views are loaded dynamically using app context APIs.
* Communicate with the originating app context using `postMessage` and `onmessage`.
* Import DOM context API using `import { SYMBOL } from 'bike/dom'`.

## Setup

Tutorial assumes that you have completed the [App Context Tutorial](app-context-tutorial.md) and run the `npx bike-ext watch` command. Your extension should automatically build and install when you save changes.

## Create "Archive Done" Sheet

We will modify the "Archive Done" command to show a sheet with the number of archived rows.

#### Overview

1. Define a typed messaging protocol at `dom/protocols.ts`.
2. Create a DOM script at `dom/archive-done-sheet.ts` that uses the protocol.
3. Pass the script name to the app context API `window.presentSheet`.
4. Use the returned handle to send the row count to the DOM context for display.

#### Define a Typed Messaging Protocol

App and DOM contexts communicate via `postMessage` and `onmessage`. By default these are untyped. To get compile-time safety, define a typed protocol.

A protocol extends `DOMProtocol` from `bike/core` and declares the message types flowing in each direction:

- `toDOM` — messages sent from the app context to the DOM context
- `toApp` — messages sent from the DOM context to the app context

Create a new file at `dom/protocols.ts`:

```typescript
import { DOMProtocol } from 'bike/core'

export interface ArchiveDoneProtocol extends DOMProtocol {
  toDOM: { type: 'archiveCount'; count: number }
}
```

This protocol says the app side will send an `archiveCount` message with a `count`, and the DOM side won't send anything back.

Protocol files live at `dom/protocols.ts` by convention. This file is typechecked in both the app and DOM contexts, so both sides share a single protocol definition. When you scaffold a new extension with `npx bike-ext new` and select both contexts, this file is created automatically.

#### Create the DOM Script

Create a new file at `dom/archive-done-sheet.ts`:

```typescript
import { DOMExtensionContext } from 'bike/dom'
import { ArchiveDoneProtocol } from './protocols'

export async function activate(context: DOMExtensionContext<ArchiveDoneProtocol>) {
  context.element.textContent = 'Loading...'
  context.onmessage = (message) => {
    context.element.textContent = `Archived ${message.count} rows`
  }
}
```

By passing `ArchiveDoneProtocol` as the type parameter to `DOMExtensionContext`, `context.onmessage` receives the correctly typed message. If you try to access a property that doesn't exist on the protocol, the compiler will catch it.

#### Modify the App Context

Update `archiveDoneCommand` in `app/main.ts` to present the sheet after archiving:

```typescript
import { ArchiveDoneProtocol } from '../dom/protocols'

function archiveDoneCommand(context: CommandContext): boolean {
  ...

  bike.frontmostWindow?.presentSheet<ArchiveDoneProtocol>('archive-done-sheet.js').then((handle) => {
    handle.postMessage({ type: 'archiveCount', count: doneRows.length })
  })

  return true
}
```

The `presentSheet<ArchiveDoneProtocol>` type parameter ensures `handle.postMessage` only accepts messages matching the `toDOM` type.

Save, and your modified extension should rebuild and install.

Now in Bike, perform the archive done command. The sheet should present, telling you how many rows were archived. Press the Escape key to close the sheet. In code, you can close the sheet by calling `dispose()` on the returned handle.

### Using React

For more complex custom views, you might want to use React.

Bike bundles and loads a single copy of React into each web view. The extension kit is set up to use that bundled version when you import React into your DOM script. You may also use the `.tsx` file extension and JSX syntax in your DOM script.

## Next Steps

Follow the [Style Context Tutorial](style-context-tutorial.md) to create your own editor styles.
