# @oeasenet/tui-editor - Toast UI Editor for Vue 3

[![npm version](https://img.shields.io/npm/v/@oeasenet/tui-editor.svg)](https://www.npmjs.com/package/@oeasenet/tui-editor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A Vue 3 wrapper for the powerful [Toast UI Markdown Editor](https://ui.toast.com/tui-editor), maintained by [OEASE](https://github.com/oeasenet).

## Features

- 📝 Full-featured markdown editor with preview
- 🔌 Vue 3 components with TypeScript support
- 🌓 Light and dark mode support
- 🖼️ Image upload capabilities
- 🔍 Syntax highlighting
- 📊 Plugin support for charts, table cells, UML diagrams, and more
- 📱 Responsive design with fullscreen mode
- 🧩 Easy integration with Vue 3 applications

## Installation

```bash
# npm
npm install @oeasenet/tui-editor

# yarn
yarn add @oeasenet/tui-editor

# pnpm
pnpm add @oeasenet/tui-editor
```

## Usage

### Global Registration

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import TuiEditor from '@oeasenet/tui-editor'
import '@oeasenet/tui-editor/dist/style.css'

const app = createApp(App)
app.use(TuiEditor)
app.mount('#app')
```

### Component Registration

```vue
<script setup>
import { ref } from 'vue'
import { Editor, Viewer } from '@oeasenet/tui-editor'
import '@oeasenet/tui-editor/dist/style.css'

const content = ref('# Hello, world!')
</script>

<template>
  <Editor v-model="content" />
  <Viewer :value="content" />
</template>
```

## Components

### Editor

The Editor component provides a full-featured markdown editor with preview capabilities.

```vue
<Editor v-model="content" />
```

#### Editor Props

| Name               | Type                                 | Default      | Description |
| ------------------ | ------------------------------------ | ------------ | ----------- |
| allowFullScreen    | `boolean`                            | `true`       | Enable fullscreen mode |
| darkMode           | `boolean`                            | `false`      | Enable dark mode |
| editorClasses      | `object \| string \| string[]`       | `undefined`  | Classes to bind to the editor element |
| enhanced           | `boolean`                            | `true`       | Enable enhanced CSS in normal and fullscreen mode |
| height             | `string`                             | `'500px'`    | Height of the editor |
| hideModeSwitch     | `boolean`                            | `undefined`  | Hide the mode switch tab |
| initialEditType    | `EditorType`                         | `'markdown'` | Initial editor type ('markdown' or 'wysiwyg') |
| language           | `string`                             | `undefined`  | Editor language |
| plugins            | `PluginName[]`                       | `[]`         | Array of plugin names to use |
| previewStyle       | `PreviewStyle`                       | `'tab'`      | Preview style in markdown mode ('tab' or 'vertical') |
| toolbarItems       | `(string \| ToolbarItemOptions)[][]` | *            | Toolbar configuration |
| usageStatistics    | `boolean`                            | `undefined`  | Enable usage statistics |
| useCommandShortcut | `boolean`                            | `undefined`  | Enable keyboard shortcuts |
| modelValue         | `string`                             | `undefined`  | Editor content (for v-model) |

* Default toolbar: `[['heading', 'bold', 'italic'], ['quote', 'ul', 'ol'], ['table', 'link']]`

#### Editor Events

| Name              | Parameters | Description       |
| ----------------- | ---------- | ----------------- |
| update:modelValue | `string`   | Emitted when content changes (for v-model) |
| addImage          | *          | Emitted when an image is added |
| fullScreenChange  | `boolean`  | Emitted when fullscreen mode changes |

* `{ blob, callback }: { blob: File | Blob, callback: HookCallback }`

### Viewer

The Viewer component displays rendered markdown content.

```vue
<Viewer :value="content" />
```

#### Viewer Props

| Name     | Type           | Default     | Description |
| -------- | -------------- | ----------- | ----------- |
| darkMode | `boolean`      | `false`     | Enable dark mode |
| plugins  | `PluginName[]` | `[]`        | Array of plugin names to use |
| value    | `string`       | `undefined` | Markdown content to display |

## Plugins

This wrapper supports all official Toast UI Editor plugins:

- Code Syntax Highlighting
- Color Syntax
- Charts
- UML diagrams
- Table Merged Cell

To use plugins, install them separately and include them in your component:

```bash
npm install @toast-ui/editor-plugin-code-syntax-highlight @toast-ui/editor-plugin-color-syntax
```

```vue
<script setup>
import { ref } from 'vue'
import { Editor } from '@oeasenet/tui-editor'
import '@oeasenet/tui-editor/dist/style.css'

// Import plugins
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'

const content = ref('# Hello, world!')
const plugins = [colorSyntax, codeSyntaxHighlight]
</script>

<template>
  <Editor v-model="content" :plugins="plugins" />
</template>
```

## Documentation

For more detailed documentation and examples, visit the [documentation site](https://github.com/oeasenet/tui-editor).

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run documentation site in development mode
npm run docs:dev

# Build documentation site
npm run docs:build
```

## License

[MIT](LICENSE) © OEASE Solutions

---

*This project is a fork of [tui-editor-vue3](https://github.com/sirmathays/tui-editor-vue3) originally created by [Matti Suoraniemi](https://github.com/sirmathays).*
