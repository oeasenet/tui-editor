<script lang="ts" setup>
/**
 * Toast UI Viewer component for Vue 3
 *
 * Renders markdown content as HTML with the same styling as the editor
 * based on Toast UI Editor Viewer (https://ui.toast.com/tui-editor)
 */
import { onMounted, ref } from 'vue'
import { Viewer as TuiViewer } from '@toast-ui/editor/dist/toastui-editor-viewer'
import useViewer from '@/composables/useViewer'
import { ViewerProps } from './types'
import { mapPlugins } from '@/utils/TuiPlugins'

// Define component props with defaults
const props = withDefaults(defineProps<ViewerProps>(), {
    plugins: () => mapPlugins(['chart', 'codeSyntaxHighlight', 'colorSyntax', 'tableMergedCell', 'uml']),
    darkMode: false
})

// Component state
const viewer = ref<HTMLDivElement | null>(null)
const viewerInstance = ref<TuiViewer | null>(null)

// Expose viewer instance to parent components
defineExpose({ viewer: viewerInstance })

// Initialize viewer after component is mounted
onMounted(() => {
    if (!viewer.value) return

    viewerInstance.value = useViewer(viewer, {
        initialValue: props.value,
        plugins: props.plugins,
    })
})
</script>

<template>
    <!-- Viewer container -->
    <div
        ref="viewer"
        :class="{ 'toastui-editor-dark': darkMode }"
        class="tui-viewer-vue3-wrapper"
    />
</template>
