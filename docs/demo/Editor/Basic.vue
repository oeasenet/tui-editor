<script lang="ts" setup>
import { ref } from 'vue'
import lorem from '../lorem'
import { Editor } from '../../../src'

const darkMode = ref(false)
const allowFullScreen = ref(true)
const enhanced = ref(false)
const model = ref(lorem)
</script>

<template>
    <div>
        <Editor
            v-model="model"
            :allow-full-screen="allowFullScreen"
            :dark-mode="darkMode"
            :enhanced="enhanced"
            height="350px"
        />

        <div class="demo-container-toggle-wrapper">
            <button @click.prevent="enhanced = !enhanced">Enhanced</button>
            <button @click.prevent="darkMode = !darkMode">{{ darkMode ? 'Turn off Dark Mode' : 'Turn on Dark Mode' }}</button>
            <button @click.prevent="allowFullScreen = !allowFullScreen">Allow Full Screen</button>
        </div>
    </div>
</template>
