<script setup lang="ts">
/**
 * WIP
 * Use as reference
 * https://github.com/surmon-china/vue-codemirror
 */
import { onMounted, ref } from "vue";
import { EditorView, basicSetup } from "codemirror";

const props = defineProps({
    text: { type: String, required: true }
})

const textAreaElement = ref<HTMLElement | null>(null);


onMounted(() => {
    if (textAreaElement.value) {
        new EditorView({
            doc: props.text,
            extensions: [basicSetup],
            parent: textAreaElement.value
        })
    }
})
</script>

<template>
    <div ref="textAreaElement"></div>
</template>