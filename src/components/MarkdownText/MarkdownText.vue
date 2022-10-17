<script setup lang="ts">
import { computed } from "@vue/reactivity";
import useMarkdownRef from "@/composables/useMarkdownRef";
import type { PropType } from "vue";
import type { marked } from "marked";

const props = defineProps({
  markdown: { type: String, required: true },
  options: {
    type: Object as PropType<Partial<marked.MarkedOptions>>,
    required: false,
  },
});

const markdownToHTML = computed(
  () => useMarkdownRef(props.markdown, props?.options).value
);
</script>

<template>
  <div v-html="markdownToHTML"></div>
</template>
