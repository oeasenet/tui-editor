/**
 * Toast UI Editor language imports
 * Import all available languages to support dynamic language switching
 */
import '@toast-ui/editor/dist/i18n/ar';
import '@toast-ui/editor/dist/i18n/cs-cz';
import '@toast-ui/editor/dist/i18n/de-de';
import '@toast-ui/editor/dist/i18n/es-es';
import '@toast-ui/editor/dist/i18n/fi-fi';
import '@toast-ui/editor/dist/i18n/fr-fr';
import '@toast-ui/editor/dist/i18n/gl-es';
import '@toast-ui/editor/dist/i18n/it-it';
import '@toast-ui/editor/dist/i18n/ja-jp';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/i18n/nb-no';
import '@toast-ui/editor/dist/i18n/nl-nl';
import '@toast-ui/editor/dist/i18n/pl-pl';
import '@toast-ui/editor/dist/i18n/ru-ru';
import '@toast-ui/editor/dist/i18n/sv-se';
import '@toast-ui/editor/dist/i18n/tr-tr';
import '@toast-ui/editor/dist/i18n/uk-ua';
import '@toast-ui/editor/dist/i18n/zh-cn';
import '@toast-ui/editor/dist/i18n/zh-tw';
import type { Ref } from 'vue';
import type { Editor } from '@toast-ui/editor';
import { EditorType, PreviewStyle } from '@toast-ui/editor';
import type { ToolbarItemOptions } from '@toast-ui/editor/types/ui';
import type { Plugin } from '@/utils/TuiPlugins';
/**
 * Callback function for handling image URLs
 */
export type HookCallback = (url: string, text?: string) => void;
/**
 * Hook for handling image blob uploads
 */
export type AddImageBlobHook = (blob: Blob | File, callback: HookCallback) => void;
/**
 * Options for initializing the Toast UI Editor
 */
export interface EditorOptions {
    /**
     * Initial markdown content
     */
    initialValue: string;
    /**
     * Height of the editor
     */
    height?: string;
    /**
     * Whether to hide the mode switch button
     */
    hideModeSwitch?: boolean;
    /**
     * Initial edit type (markdown or wysiwyg)
     */
    initialEditType?: EditorType;
    /**
     * Language for the editor UI
     */
    language?: string;
    /**
     * Plugins to use with the editor
     */
    plugins?: Plugin[];
    /**
     * Preview style (tab or vertical)
     */
    previewStyle?: PreviewStyle;
    /**
     * Toolbar items to display
     */
    toolbarItems?: (string | ToolbarItemOptions)[][];
    /**
     * Whether to collect usage statistics
     */
    usageStatistics?: boolean;
    /**
     * Whether to use command shortcuts
     */
    useCommandShortcut?: boolean;
    /**
     * Callback for when the editor content changes
     */
    onChange?: (editor: Editor) => void;
    /**
     * Hook for handling image blob uploads
     */
    addImageBlobHook?: AddImageBlobHook;
}
/**
 * Creates and initializes a Toast UI Editor instance
 *
 * @param elRef - Reference to the element where the editor will be mounted
 * @param options - Editor initialization options
 * @returns The initialized Editor instance
 * @throws Error if the element reference is null
 */
export default function useEditor(elRef: Ref<HTMLElement | null>, options: EditorOptions): Editor;
