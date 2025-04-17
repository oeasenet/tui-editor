// Type declarations for Toast UI Editor modules
declare module '@toast-ui/editor' {
  const Editor: any;
  export default Editor;

  export type EditorType = 'markdown' | 'wysiwyg';
  export type PreviewStyle = 'tab' | 'vertical';

  export interface EditorOptions {
    el: HTMLElement;
    height?: string;
    initialValue?: string;
    initialEditType?: EditorType;
    previewStyle?: PreviewStyle;
    usageStatistics?: boolean;
    useCommandShortcut?: boolean;
    hideModeSwitch?: boolean;
    toolbarItems?: (string | object)[][];
    plugins?: unknown[];
    language?: string;
    events?: Record<string, Function>;
    hooks?: Record<string, Function>;
  }

  export class Editor {
    constructor(options: EditorOptions);
    getMarkdown(): string;
    getHTML(): string;
    setMarkdown(markdown: string): void;
    setHTML(html: string): void;
    reset(): void;
    focus(): void;
    blur(): void;
    destroy(): void;
    isMarkdownMode(): boolean;
    isWysiwygMode(): boolean;
    changeMode(mode: EditorType, isWithoutFocus?: boolean): void;
  }
}

declare module '@toast-ui/editor/dist/toastui-editor-viewer' {
  export interface ViewerOptions {
    el: HTMLElement;
    initialValue?: string;
    plugins?: unknown[];
    extendedAutolinks?: boolean;
    linkAttributes?: Record<string, string>;
    referenceDefinition?: boolean;
    frontMatter?: boolean;
    usageStatistics?: boolean;
    theme?: string;
  }

  export class Viewer {
    constructor(options: ViewerOptions);
    setMarkdown(markdown: string): void;
    getMarkdown(): string;
    setHTML(html: string): void;
    getHTML(): string;
    destroy(): void;
  }
}

declare module '@toast-ui/editor/types/ui' {
  export interface ToolbarItemOptions {
    name: string;
    tooltip?: string;
    command?: string;
    text?: string;
    className?: string;
    style?: Record<string, string>;
    popup?: Record<string, any>;
    state?: any;
  }
}

declare module '@toast-ui/editor-plugin-chart' {
  const plugin: unknown;
  export default plugin;
}

declare module '@toast-ui/editor-plugin-code-syntax-highlight' {
  const plugin: unknown;
  export default plugin;
}

declare module '@toast-ui/editor-plugin-color-syntax' {
  const plugin: unknown;
  export default plugin;
}

declare module '@toast-ui/editor-plugin-table-merged-cell' {
  const plugin: unknown;
  export default plugin;
}

declare module '@toast-ui/editor-plugin-uml' {
  const plugin: unknown;
  export default plugin;
}
