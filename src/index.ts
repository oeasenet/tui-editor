import { App, Plugin } from 'vue'
import * as components from './components'
import './styles/main.css'

/**
 * All available components
 */
export * from './components'

/**
 * Vue plugin that registers all Toast UI Editor components globally
 */
export const TuiEditorPlugin: Plugin = {
  install(app: App): void {
    // Register each component globally
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
}

// Default export for easier plugin registration
export default TuiEditorPlugin
