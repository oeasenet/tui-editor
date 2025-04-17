/// <reference types="vite/client" />

/**
 * Type declaration for Vue single-file components
 * This ensures proper TypeScript support for .vue files
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // Use more specific types instead of any
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}
