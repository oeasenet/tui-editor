import { Viewer } from '@toast-ui/editor/dist/toastui-editor-viewer';
import type { Ref } from 'vue';
import type { Plugin } from '@/utils/TuiPlugins';
/**
 * Options for initializing the Toast UI Viewer
 */
export interface ViewerOptions {
    /**
     * Initial markdown content to display
     */
    initialValue?: string;
    /**
     * Plugins to use with the viewer
     */
    plugins?: Plugin[];
    /**
     * Whether to enable extended autolinks
     */
    extendedAutolinks?: boolean;
    /**
     * Attributes to add to links
     */
    linkAttributes?: Record<string, string>;
    /**
     * Whether to enable reference definition
     */
    referenceDefinition?: boolean;
    /**
     * Whether to enable front matter
     */
    frontMatter?: boolean;
    /**
     * Whether to collect usage statistics
     */
    usageStatistics?: boolean;
    /**
     * Theme to use for the viewer
     */
    theme?: string;
}
/**
 * Creates and initializes a Toast UI Viewer instance
 *
 * @param elRef - Reference to the element where the viewer will be mounted
 * @param options - Viewer initialization options
 * @returns The initialized Viewer instance
 * @throws Error if the element reference is null
 */
export default function useViewer(elRef: Ref<HTMLElement | null>, options: ViewerOptions): Viewer;
