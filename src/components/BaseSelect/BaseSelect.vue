<script setup lang="ts">
import { useAttrs } from "vue";

const attrs = useAttrs();
const emit = defineEmits(["change-value"]);

const handleChange = (event: Event) => {
  if ((event.target as HTMLSelectElement).multiple) {
    return Array.from((event.target as HTMLSelectElement).options)
      .filter((o) => o.selected)
      .map((o) => o.value);
  }
  return (event.target as HTMLSelectElement).value;
};
</script>

<template>
  <select
    v-bind="attrs"
    @change="(event) => emit('change-value', handleChange(event))"
  >
    <slot></slot>
  </select>
</template>
