<script setup lang="ts">
/**
 * Toast UI Editor component for Vue 3
 *
 * A full-featured markdown editor with WYSIWYG editing capabilities
 * based on Toast UI Editor (https://ui.toast.com/tui-editor)
 */
import { ref, onMounted, watch, nextTick } from 'vue'
import useEditor from '../composables/useEditor'
import { EditorProps, EditorInstance } from './types'

// Import the Editor type
import type { Editor } from '@toast-ui/editor'

// Define component props with defaults
const props = withDefaults(defineProps<EditorProps>(), {
    allowFullScreen: true,
    darkMode: false,
    enhanced: true,
    height: '500px',
    hideModeSwitch: false,
    initialEditType: 'markdown',
    modelValue: '',
    plugins: () => [],
    previewStyle: 'tab',
    toolbarItems: () => [
        ['heading', 'bold', 'italic'],
        ['quote', 'ul', 'ol'],
        ['table', 'link'],
    ],
})

// Component state
const editor = ref<Editor | null>(null)
const editorEl = ref<HTMLDivElement | null>(null)
const fullScreen = ref<boolean>(false)

// Define emitted events
const emit = defineEmits<{
  'update:modelValue': [value: string]
  'addImage': [payload: { blob: Blob | File, callback: (url: string, text?: string) => void }]
  'fullScreenChange': [value: boolean]
}>()

// Expose editor instance to parent components
defineExpose<EditorInstance>({ editor })

// Handle fullscreen mode changes
watch(fullScreen, (value) => {
    const cls = document.body.classList
    value ? cls.add('overflow-hidden') : cls.remove('overflow-hidden')
    emit('fullScreenChange', value)
})

// Initialize editor after component is mounted
onMounted(() => nextTick(() => {
    if (!editorEl.value) return

    editor.value = useEditor(editorEl, {
        // Use container height in fullscreen mode
        height: '100cqh',

        // Pass through props to the editor
        hideModeSwitch: props.hideModeSwitch,
        initialEditType: props.initialEditType,
        initialValue: props.modelValue,
        language: props.language,
        plugins: props.plugins,
        previewStyle: props.previewStyle,
        toolbarItems: props.toolbarItems,
        usageStatistics: props.usageStatistics,
        useCommandShortcut: props.useCommandShortcut,

        // Handle image uploads
        addImageBlobHook: (blob, callback): void => {
            emit('addImage', { blob, callback })
        },

        // Update v-model when content changes
        onChange: (e): void => {
            emit('update:modelValue', e.getMarkdown())
        },
    })
}))
</script>

<template>
    <div
        class="tui-editor-vue3-wrapper"
        :style="{ height: !fullScreen ? height : undefined }"
        @keydown.escape="fullScreen = false"
        :class="{
            'tui-editor-vue3-enhanced': enhanced,
            'toastui-full-screen': fullScreen,
            'toastui-editor-dark': darkMode
        }"
    >
        <!-- Editor container -->
        <div ref="editorEl" :class="editorClasses" />

        <!-- Fullscreen toggle button -->
        <div class="fullscreen-button-container" v-if="allowFullScreen">
            <a
                href="#"
                class="fullscreen-button"
                @click.prevent="fullScreen = !fullScreen"
                :title="fullScreen ? 'Exit fullscreen' : 'Enter fullscreen'"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                </svg>
            </a>
        </div>
    </div>
</template>
