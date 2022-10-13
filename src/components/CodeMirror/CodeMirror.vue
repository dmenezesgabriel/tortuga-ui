<script setup lang="ts">
/**
 * WIP
 * Use as reference
 * https://github.com/surmon-china/vue-codemirror
 */
import { onMounted, shallowRef } from "vue";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror"

const container = shallowRef<HTMLDivElement>();
const state = shallowRef<EditorState>();
const view = shallowRef<EditorView>();


onMounted(() => {
    state.value = EditorState.create({
        doc: "Hello, World!",
        extensions: [basicSetup]
    })

    view.value = new EditorView({
        state: state.value,
        parent: container.value
    })

})
</script>

<template>
    <div ref="container"></div>
</template>