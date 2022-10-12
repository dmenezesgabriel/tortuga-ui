<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { marked } from "marked";

const props = defineProps({
  markdown: { type: String, required: true }
})

const markdownToHTML = computed(() => marked.parse(props.markdown))
</script>

<template>
  <div v-html="markdownToHTML"></div>
</template>