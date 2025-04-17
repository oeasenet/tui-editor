import { Editor as TuiEditor, EditorType, PreviewStyle } from '@toast-ui/editor';
import { ToolbarItemOptions } from '@toast-ui/editor/types/ui';
import { Plugin } from '../utils/TuiPlugins';

/**
 * Type for the Editor component instance
 * Provides access to the underlying Toast UI Editor instance
 */
export interface EditorInstance {
  /**
   * The underlying Toast UI Editor instance
   */
  editor: TuiEditor | null;
}

/**
 * Props for the Editor component
 */
export interface EditorProps {
  /**
   * Whether to allow fullscreen mode
   * @default true
   */
  allowFullScreen?: boolean;

  /**
   * Whether to use dark mode
   * @default false
   */
  darkMode?: boolean;

  /**
   * CSS classes to apply to the editor element
   */
  editorClasses?: object | string | string[];

  /**
   * Whether to use enhanced UI features
   * @default true
   */
  enhanced?: boolean;

  /**
   * Height of the editor
   * @default '500px'
   */
  height?: string;

  /**
   * Whether to hide the mode switch button
   * @default false
   */
  hideModeSwitch?: boolean;

  /**
   * Initial edit type (markdown or wysiwyg)
   * @default 'markdown'
   */
  initialEditType?: EditorType;

  /**
   * Language for the editor UI
   */
  language?: string;

  /**
   * Markdown content for the editor (v-model)
   * @default ''
   */
  modelValue?: string;

  /**
   * Plugins to use with the editor
   * @default []
   */
  plugins?: Plugin[];

  /**
   * Preview style (tab or vertical)
   * @default 'tab'
   */
  previewStyle?: PreviewStyle;

  /**
   * Toolbar items to display
   * @default [['heading', 'bold', 'italic'], ['quote', 'ul', 'ol'], ['table', 'link']]
   */
  toolbarItems?: (string | ToolbarItemOptions)[][];

  /**
   * Whether to collect usage statistics
   * @default undefined
   */
  usageStatistics?: boolean;

  /**
   * Whether to use command shortcuts
   * @default undefined
   */
  useCommandShortcut?: boolean;
}

/**
 * Props for the Viewer component
 */
export interface ViewerProps {
  /**
   * Markdown content to display
   */
  value: string;

  /**
   * Plugins to use with the viewer
   * @default []
   */
  plugins?: Plugin[];

  /**
   * Whether to use dark mode
   * @default false
   */
  darkMode?: boolean;
}
