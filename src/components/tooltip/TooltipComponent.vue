<script setup lang="ts">
import { Tooltip } from "bootstrap";
import { onMounted, ref } from "vue";

const props = defineProps({
  text: { type: String, required: true },
});

const tooltip = ref<HTMLElement | null>(null);

onMounted(() => {
  if (tooltip.value) new Tooltip(tooltip.value);
});
</script>
<template>
  <span
    ref="tooltip"
    tabindex="0"
    data-bs-toggle="tooltip"
    data-bs-delay="0"
    data-bs-trigger="focus hover"
    :title="props.text"
    aria-label="tooltip"
  >
    <slot></slot>
  </span>
</template>
