import { Viewer as TuiViewer } from '@toast-ui/editor/dist/toastui-editor-viewer';
import { ViewerProps } from './types';
declare const _default: import("vue").DefineComponent<ViewerProps, {
    viewer: import("vue").Ref<{
        setMarkdown: (markdown: string) => void;
        getMarkdown: () => string;
        setHTML: (html: string) => void;
        getHTML: () => string;
        destroy: () => void;
    } | null, TuiViewer | {
        setMarkdown: (markdown: string) => void;
        getMarkdown: () => string;
        setHTML: (html: string) => void;
        getHTML: () => string;
        destroy: () => void;
    } | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ViewerProps> & Readonly<{}>, {
    darkMode: boolean;
    plugins: import("../utils/TuiPlugins.ts").Plugin[];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
