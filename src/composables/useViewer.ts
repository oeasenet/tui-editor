import Viewer from "@toast-ui/editor/dist/toastui-editor-viewer";
import { Ref } from "vue";
import { PluginName, mapPlugins } from "../utils/TuiPlugins";

interface Options {
    initialValue?: string;

    plugins?: any[];
    // extendedAutolinks?: ExtendedAutolinks;
    // linkAttributes?: LinkAttributes;
    // referenceDefinition?: boolean;
    // frontMatter?: boolean;
    // usageStatistics?: boolean;
    // theme?: string;
}

export default (elRef: Ref<HTMLElement | null>, options: Options) => {
    if (!elRef.value) {
        throw new Error("Reference to the element is set");
    }

    const e: Viewer = new Viewer({
        el: elRef.value,
        plugins: options.plugins,
        initialValue: options.initialValue,
    });

    return e;
};
