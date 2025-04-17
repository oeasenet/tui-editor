import Editor from './Editor.vue'
import Viewer from './Viewer.vue'

/**
 * Toast UI Editor component for Vue 3
 * Provides a full-featured markdown editor with WYSIWYG editing capabilities
 */
export { Editor }

/**
 * Toast UI Viewer component for Vue 3
 * Renders markdown content as HTML with the same styling as the editor
 */
export { Viewer }

// Named exports for better TypeScript support
export type {
  EditorProps,
  EditorInstance
} from './types'
