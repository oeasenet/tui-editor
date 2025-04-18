import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

/**
 * Vite configuration for building the Toast UI Editor Vue 3 wrapper library
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'TuiEditorVue3',
            formats: ['es', 'umd', 'cjs', 'iife', 'system'],
            fileName: (format) => `tui-editor-vue3.${format}.js`,
        },
        rollupOptions: {
            // Mark these modules as external to avoid bundling them
            external: [
                'vue',
                '@toast-ui/editor',
                '@toast-ui/editor-plugin-chart',
                '@toast-ui/editor-plugin-code-syntax-highlight',
                '@toast-ui/editor-plugin-color-syntax',
                '@toast-ui/editor-plugin-table-merged-cell',
                '@toast-ui/editor-plugin-uml',
                'prismjs'
            ],
            output: {
                // Disable warning for mixed default and named exports
                exports: 'named',
                // Provide global variable names for external dependencies in UMD build
                globals: {
                    vue: 'Vue',
                    '@toast-ui/editor': 'toastui.Editor',
                    '@toast-ui/editor-plugin-chart': 'toastui.Editor.plugin.chart',
                    '@toast-ui/editor-plugin-code-syntax-highlight': 'toastui.Editor.plugin.codeSyntaxHighlight',
                    '@toast-ui/editor-plugin-color-syntax': 'toastui.Editor.plugin.colorSyntax',
                    '@toast-ui/editor-plugin-table-merged-cell': 'toastui.Editor.plugin.tableMergedCell',
                    '@toast-ui/editor-plugin-uml': 'toastui.Editor.plugin.uml',
                    'prismjs': 'Prism'
                },
            },
        },
        // Generate sourcemaps for easier debugging
        sourcemap: true,
        // Clean the output directory before building
        emptyOutDir: true,
    },
})
