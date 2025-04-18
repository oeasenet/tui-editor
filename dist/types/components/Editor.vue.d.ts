import { EditorProps } from './types';
import type { Editor } from '@toast-ui/editor';
declare const _default: import("vue").DefineComponent<EditorProps, {
    editor: import("vue").Ref<Editor | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
    addImage: (payload: {
        blob: Blob | File;
        callback: (url: string, text?: string) => void;
    }) => any;
    fullScreenChange: (value: boolean) => any;
}, string, import("vue").PublicProps, Readonly<EditorProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onAddImage?: ((payload: {
        blob: Blob | File;
        callback: (url: string, text?: string) => void;
    }) => any) | undefined;
    onFullScreenChange?: ((value: boolean) => any) | undefined;
}>, {
    allowFullScreen: boolean;
    darkMode: boolean;
    enhanced: boolean;
    height: string;
    hideModeSwitch: boolean;
    initialEditType: import("@toast-ui/editor").EditorType;
    modelValue: string;
    plugins: import("@/utils/TuiPlugins.ts").Plugin[];
    previewStyle: import("@toast-ui/editor").PreviewStyle;
    toolbarItems: (string | import("@toast-ui/editor/types/ui").ToolbarItemOptions)[][];
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
