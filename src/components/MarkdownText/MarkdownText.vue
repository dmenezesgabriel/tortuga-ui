<script setup lang="ts">
import { computed } from "@vue/reactivity";
import type { PropType } from "vue";
import { marked } from "marked";

const props = defineProps({
  markdown: { type: String, required: true },
  options: { type: Object as PropType<marked.MarkedOptions>, required: false }
})

// TODO
// Move marked.parse to a composable.
const markdownToHTML = computed(() => marked.parse(props.markdown, props.options))
</script>

<template>
  <div v-html="markdownToHTML"></div>
</template>