# Toast UI Editor for Vue 3

[![npm version](https://img.shields.io/npm/v/@oeasenet/tui-editor.svg)](https://www.npmjs.com/package/@oeasenet/tui-editor)
[![license](https://img.shields.io/npm/l/@oeasenet/tui-editor.svg)](https://github.com/oeasenet/tui-editor/blob/main/LICENSE)

> Vue 3 wrapper components for [TOAST UI Editor](https://ui.toast.com/tui-editor).

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

```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import TuiEditorPlugin from '@oeasenet/tui-editor'
import '@oeasenet/tui-editor/dist/style.css'

const app = createApp(App)
app.use(TuiEditorPlugin)
app.mount('#app')
```

### Local Registration

```vue
<script setup>
import { Editor, Viewer } from '@oeasenet/tui-editor'
import '@oeasenet/tui-editor/dist/style.css'
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
| `initialEditType` | `'markdown' \| 'wysiwyg'` | `'markdown'` | Initial editor type |
| `previewStyle` | `'tab' \| 'vertical'` | `'tab'` | Preview style |
| `toolbarItems` | `Array` | See below | Toolbar items |
| `plugins` | `Array` | `[]` | Editor plugins |
| `darkMode` | `Boolean` | `false` | Enable dark mode |
| `hideModeSwitch` | `Boolean` | `false` | Hide mode switch tab |
| `enhanced` | `Boolean` | `true` | Enable enhanced UI features |
| `allowFullScreen` | `Boolean` | `true` | Allow fullscreen mode |
| `language` | `String` | `undefined` | Editor language |
| `usageStatistics` | `Boolean` | `undefined` | Enable usage statistics |
| `useCommandShortcut` | `Boolean` | `undefined` | Enable keyboard shortcuts |
| `editorClasses` | `Object \| String \| Array` | `undefined` | CSS classes for editor |

Default toolbar items:
```js
[
  ['heading', 'bold', 'italic'],
  ['quote', 'ul', 'ol'],
  ['table', 'link']
]
```

#### Events

| Name | Parameters | Description |
| --- | --- | --- |
| `update:modelValue` | `(value: string)` | Emitted when content changes |
| `addImage` | `({ blob, callback })` | Emitted when an image is added |
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
| `plugins` | `Array` | `[]` | Viewer plugins |
| `darkMode` | `Boolean` | `false` | Enable dark mode |

#### Exposing

| Name | Type | Description |
| --- | --- | --- |
| `viewer` | `Viewer \| null` | The underlying Toast UI Viewer instance |

## 🧩 Using Plugins

```vue
<script setup>
import { Editor } from '@oeasenet/tui-editor'
import '@oeasenet/tui-editor/dist/style.css'
import { mapPlugins } from '@oeasenet/tui-editor/dist/utils/TuiPlugins'

const plugins = mapPlugins(['chart', 'codeSyntaxHighlight', 'colorSyntax'])
</script>

<template>
  <Editor v-model="content" :plugins="plugins" />
</template>
```

Available plugins:
- `chart` - Chart plugin
- `codeSyntaxHighlight` - Code syntax highlighting
- `colorSyntax` - Color syntax
- `tableMergedCell` - Table merged cell
- `uml` - UML diagrams

## 📝 License

MIT
