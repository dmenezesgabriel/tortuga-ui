<script setup lang="ts">
import { Tooltip } from "bootstrap";
import { onMounted, ref } from "vue";


const props = defineProps({
  options: { type: Object, required: true },
});

const tooltip = ref<HTMLElement | null>(null);

onMounted(() => {
  if (tooltip.value) new Tooltip(tooltip.value, props.options);
});
</script>
<template>
  <span
    ref="tooltip"
    tabindex="0"
    data-bs-toggle="tooltip"
    data-bs-delay="0"
    data-bs-trigger="focus hover"
    aria-label="tooltip"
  >
    <slot></slot>
  </span>
</template>
