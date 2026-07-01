import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bike Guide',
  description: 'User guide for the Bike outliner',

  srcExclude: ['SUMMARY.md', 'CLAUDE.md', 'fact-check-report.md'],

  themeConfig: {
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Bike Guide', link: '/' },
          { text: 'Why Bike?', link: '/why-bike' },
          { text: 'What\'s New?', link: '/whats-new' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Using Outlines',
        items: [
          { text: 'Outline Viewing', link: '/using-bike/outline-viewing' },
          { text: 'Outline Navigation', link: '/using-bike/outline-navigation' },
          { text: 'Outline Editing', link: '/using-bike/outline-editing' },
          { text: 'Outline Checking', link: '/using-bike/outline-checking' },
          { text: 'Outline Links', link: '/using-bike/outline-links' },
          { text: 'Row Formatting', link: '/using-bike/row-formatting' },
          { text: 'Text Formatting', link: '/using-bike/text-formatting' },
          { text: 'Using Accessibility', link: '/using-bike/using-accessibility' },
        ]
      },
      {
        text: 'Finding & Filtering',
        items: [
          { text: 'Using Find Panel', link: '/using-bike/using-find-panel' },
          { text: 'Using the Choice Box', link: '/using-bike/using-the-choice-box' },
          { text: 'Using Outline Filtering', link: '/using-bike/using-outline-filtering' },
        ]
      },
      {
        text: 'Windows',
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
        text: 'Settings',
        items: [
          { text: 'Settings Window', link: '/using-bike/settings-window' },
          { text: 'Editor View Settings', link: '/using-bike/editor-view-settings' },
        ]
      },
      {
        text: 'Files',
        items: [
          { text: 'Using Documents', link: '/using-bike/using-documents' },
          { text: 'Printing Documents', link: '/using-bike/printing-documents' },
          { text: 'Bike HTML Format', link: '/using-bike/bike-html-format' },
          { text: 'Bike Markdown Format', link: '/using-bike/bike-markdown-format' },
          { text: 'Other Bike Formats', link: '/using-bike/other-bike-formats' },
        ]
      },
      {
        text: 'Customize & Automate',
        items: [
          { text: 'Using Themes', link: '/using-bike/using-themes' },
          { text: 'Using Scripts', link: '/using-bike/using-scripts' },
          { text: 'Using Shortcuts', link: '/using-bike/using-shortcuts' },
          { text: 'Using Extensions', link: '/using-bike/using-extensions' },
          { text: 'Using CLI Interface', link: '/using-bike-advanced/using-cli-interface' },
          { text: 'Using MCP Server', link: '/using-bike/using-mcp-server' },
          { text: 'Commands Explorer', link: '/using-bike/using-commands' },
          { text: 'Interface Explorer', link: '/using-bike/using-interface-explorer' },
        ]
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Creating Scripts', link: '/using-bike-advanced/creating-scripts' },
          { text: 'Creating Themes', link: '/using-bike-advanced/creating-themes' },
          { text: 'Creating Shortcuts', link: '/using-bike-advanced/creating-shortcuts' },
          { text: 'Creating Extensions', link: '/using-bike-advanced/creating-extensions' },
          { text: 'Creating Outline Paths', link: '/using-bike-advanced/creating-outline-paths' },
          { text: 'Logs Explorer', link: '/using-bike/using-logs' },
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
