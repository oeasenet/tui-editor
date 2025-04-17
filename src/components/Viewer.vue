<script setup lang="ts">
/**
 * Toast UI Viewer component for Vue 3
 *
 * Renders markdown content as HTML with the same styling as the editor
 * based on Toast UI Editor Viewer (https://ui.toast.com/tui-editor)
 */
import { ref, onMounted } from 'vue'
import { Viewer as TuiViewer } from '@toast-ui/editor/dist/toastui-editor-viewer'
import useViewer from '../composables/useViewer'
import { ViewerProps } from './types'

// Define component props with defaults
const props = withDefaults(defineProps<ViewerProps>(), {
    plugins: () => [],
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
        class="tui-viewer-vue3-wrapper"
        :class="{ 'toastui-editor-dark': darkMode }"
    />
</template>
