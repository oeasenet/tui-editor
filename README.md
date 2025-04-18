# Toast UI Editor for Vue 3

[![npm version](https://img.shields.io/npm/v/@oeasenet/tui-editor.svg)](https://www.npmjs.com/package/@oeasenet/tui-editor)
[![license](https://img.shields.io/npm/l/@oeasenet/tui-editor.svg)](https://github.com/oeasenet/tui-editor/blob/main/LICENSE)

> Vue 3 wrapper components for [TOAST UI Editor](https://ui.toast.com/tui-editor) - a powerful Markdown WYSIWYG editor.

## 📋 Overview

This library provides Vue 3 components that wrap the Toast UI Editor, offering a seamless integration of this powerful Markdown editor into your Vue applications. The package includes two main components:

- **Editor**: A full-featured Markdown editor with WYSIWYG editing capabilities
- **Viewer**: A component to render Markdown content as HTML with the same styling as the editor

### Key Features

- 📝 Markdown and WYSIWYG editing modes
- 🔄 Seamless switching between editing modes
- 🌙 Dark mode support
- 🖼️ Image upload handling
- 🔌 Plugin system for extended functionality
- 📊 Built-in support for charts, code highlighting, and more
- 🖥️ Fullscreen editing mode
- 🎨 Customizable toolbar and styling

## 📦 Installation

```bash
# npm
npm install @oeasenet/tui-editor

# yarn
yarn add @oeasenet/tui-editor

# pnpm
pnpm add @oeasenet/tui-editor
```

## 🚀 Usage

### Global Registration

Register the components globally in your Vue application:

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import TuiEditorPlugin from '@oeasenet/tui-editor'
import '@oeasenet/tui-editor/dist/tui-editor.css' // Import the CSS

const app = createApp(App)
app.use(TuiEditorPlugin)
app.mount('#app')
```

### Local Registration

Import and use the components directly in your Vue components:

```vue
<script setup>
import { ref } from 'vue'
import { Editor, Viewer } from '@oeasenet/tui-editor'
import '@oeasenet/tui-editor/dist/tui-editor.css' // Import the CSS

const content = ref('# Hello, Toast UI Editor!')
</script>

<template>
  <Editor v-model="content" height="500px" />
  <Viewer :value="content" />
</template>
```

## 🔧 Components

### Editor

A full-featured markdown editor with WYSIWYG editing capabilities.

#### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `modelValue` | `String` | `''` | Markdown content (v-model) |
| `height` | `String` | `'500px'` | Editor height |
| `initialEditType` | `'markdown' \| 'wysiwyg'` | `'wysiwyg'` | Initial editor type |
| `previewStyle` | `'tab' \| 'vertical'` | `'vertical'` | Preview style |
| `toolbarItems` | `Array` | See below | Toolbar items |
| `plugins` | `Array` | All plugins | Editor plugins |
| `darkMode` | `Boolean` | `false` | Enable dark mode |
| `hideModeSwitch` | `Boolean` | `false` | Hide mode switch tab |
| `enhanced` | `Boolean` | `false` | Enable enhanced UI features |
| `allowFullScreen` | `Boolean` | `true` | Allow fullscreen mode |
| `language` | `String` | `undefined` | Editor language |
| `usageStatistics` | `Boolean` | `undefined` | Enable usage statistics |
| `useCommandShortcut` | `Boolean` | `undefined` | Enable keyboard shortcuts |
| `editorClasses` | `Object \| String \| Array` | `undefined` | CSS classes for editor |

Default toolbar items:
```js
[
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote'],
  ['ul', 'ol', 'task', 'indent', 'outdent'],
  ['table', 'image', 'link'],
  ['code', 'codeblock']
]
```

#### Events

| Name | Parameters | Description |
| --- | --- | --- |
| `update:modelValue` | `(value: string)` | Emitted when content changes |
| `addImage` | `({ blob, callback })` | Emitted when an image is added. The callback should be called with the image URL |
| `fullScreenChange` | `(value: boolean)` | Emitted when fullscreen mode changes |

#### Exposing

| Name | Type | Description |
| --- | --- | --- |
| `editor` | `Editor \| null` | The underlying Toast UI Editor instance |

### Viewer

Renders markdown content as HTML with the same styling as the editor.

#### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `value` | `String` | Required | Markdown content to display |
| `plugins` | `Array` | All plugins | Viewer plugins |
| `darkMode` | `Boolean` | `false` | Enable dark mode |

#### Exposing

| Name | Type | Description |
| --- | --- | --- |
| `viewer` | `Viewer \| null` | The underlying Toast UI Viewer instance |

## 🧩 Using Plugins

The library comes with several plugins pre-configured. By default, all plugins are enabled, but you can customize which ones to use:

```vue
<script setup>
import { ref } from 'vue'
import { Editor } from '@oeasenet/tui-editor'
import '@oeasenet/tui-editor/dist/tui-editor.css'
import { mapPlugins } from '@oeasenet/tui-editor/dist/utils/TuiPlugins'

const content = ref('# Hello, Toast UI Editor!')
// Only enable specific plugins
const plugins = mapPlugins(['chart', 'codeSyntaxHighlight', 'colorSyntax'])
</script>

<template>
  <Editor v-model="content" :plugins="plugins" />
</template>
```

### Available Plugins

- `chart` - Add chart diagrams using [Chart.js](https://www.chartjs.org/)
- `codeSyntaxHighlight` - Syntax highlighting for code blocks using [Prism.js](https://prismjs.com/)
- `colorSyntax` - Add color to text using syntax like `{color:red}text{color}`
- `tableMergedCell` - Support for merged cells in tables
- `uml` - UML diagrams using [PlantUML](https://plantuml.com/)

## 🎨 Customization

### Dark Mode

Enable dark mode for both the Editor and Viewer components:

```vue
<template>
  <Editor v-model="content" :dark-mode="true" />
  <Viewer :value="content" :dark-mode="true" />
</template>
```

### Custom Toolbar

Customize the toolbar items to show only the tools you need:

```vue
<script setup>
const customToolbar = [
  ['heading', 'bold', 'italic'],
  ['ul', 'ol', 'link']
]
</script>

<template>
  <Editor v-model="content" :toolbar-items="customToolbar" />
</template>
```

### Image Upload

Handle image uploads by listening to the `addImage` event:

```vue
<script setup>
function handleImageUpload({ blob, callback }) {
  // Upload the image to your server
  const uploadPromise = uploadImageToServer(blob)

  uploadPromise.then(imageUrl => {
    // Provide the image URL to the editor
    callback(imageUrl, 'Image description')
  })
}
</script>

<template>
  <Editor v-model="content" @add-image="handleImageUpload" />
</template>
```

## 📝 License

MIT
