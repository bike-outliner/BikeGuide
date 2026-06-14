import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bike Guide',
  description: 'User guide for the Bike outliner',

  srcExclude: ['SUMMARY.md', 'CLAUDE.md'],

  themeConfig: {
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Bike Guide', link: '/' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Why Bike?', link: '/why-bike' },
          { text: 'What\'s New?', link: '/whats-new' },
        ]
      },
      {
        text: 'Editing Outlines',
        items: [
          { text: 'Outline Viewing', link: '/using-bike/outline-viewing' },
          { text: 'Outline Editing', link: '/using-bike/outline-editing' },
          { text: 'Using Selection', link: '/using-bike/using-selection' },
          { text: 'Row Types', link: '/using-bike/row-types' },
          { text: 'Text Formatting', link: '/using-bike/text-formatting' },
          { text: 'Using Text Checking', link: '/using-bike/text-checking' },
          { text: 'Using Links', link: '/using-bike/using-links' },
        ]
      },
      {
        text: 'Finding & Filtering',
        items: [
          { text: 'Using Find Panel', link: '/using-bike/using-find-panel' },
          { text: 'Using the Choice Palette', link: '/using-bike/using-the-choice-palette' },
          { text: 'Using Outline Filtering', link: '/using-bike/using-outline-filtering' },
          { text: 'Using Outline Paths', link: '/using-bike/using-outline-paths' },
        ]
      },
      {
        text: 'Focus & Display',
        items: [
          { text: 'Using Text Wrap', link: '/using-bike/using-text-wrap' },
          { text: 'Writing Focus Mode', link: '/using-bike/using-focus-mode' },
          { text: 'Using Typewriter Mode', link: '/using-bike/using-typewriter-mode' },
          { text: 'Using Full Screen Mode', link: '/using-bike/using-full-screen-mode' },
        ]
      },
      {
        text: 'Window & Interface',
        items: [
          { text: 'Using Windows', link: '/using-bike/using-windows' },
          { text: 'Using Sidebar', link: '/using-bike/using-sidebar' },
          { text: 'Using Inspector', link: '/using-bike/using-inspector' },
          { text: 'Using Calendar', link: '/using-bike/using-calendar' },
          { text: 'Using Toolbar', link: '/using-bike/using-toolbar' },
          { text: 'Using Status Bar', link: '/using-bike/using-status-bar' },
        ]
      },
      {
        text: 'Files',
        items: [
          { text: 'Using Documents', link: '/using-bike/using-documents' },
          { text: 'Bike Markdown Format', link: '/using-bike/bike-markdown-format' },
        ]
      },
      {
        text: 'Customize & Automate',
        items: [
          { text: 'Using Themes', link: '/using-bike/using-themes' },
          { text: 'Using Scripts', link: '/using-bike/using-scripts' },
          { text: 'Using Shortcuts', link: '/using-bike/using-shortcuts' },
          { text: 'Using MCP Server', link: '/using-bike/using-mcp-server' },
        ]
      },
      {
        text: 'Explorers',
        items: [
          { text: 'Commands Explorer', link: '/using-bike/using-commands' },
          { text: 'Extensions Explorer', link: '/using-bike/using-extensions' },
          { text: 'Interface Explorer', link: '/using-bike/using-interface-explorer' },
          { text: 'Outline Path Explorer', link: '/using-bike/using-outline-path-explorer' },
          { text: 'Logs Explorer', link: '/using-bike/using-logs' },
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Creating Scripts', link: '/using-bike-advanced/creating-scripts' },
          { text: 'Creating Themes', link: '/using-bike-advanced/creating-themes' },
          { text: 'Creating Shortcuts', link: '/using-bike-advanced/creating-shortcuts' },
          { text: 'Creating Extensions', link: '/using-bike-advanced/creating-extensions' },
          { text: 'Command Line Tool', link: '/using-bike-advanced/command-line-tool' },
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'Keyboard Shortcuts', link: '/keyboard-shortcuts' },
          { text: 'Using Software Update', link: '/using-bike/using-software-update' },
          { text: 'Bike Compatible Apps', link: '/bike-compatible-apps' },
          { text: 'Software Credits', link: '/software' },
          { text: 'Glossary', link: '/glossary' },
        ]
      },
    ],

    search: {
      provider: 'local'
    },
  }
})
