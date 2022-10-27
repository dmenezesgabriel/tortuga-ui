<script setup lang="ts">
import { ref, useAttrs } from "vue";

export interface Props {}

const props = defineProps<Props>();
const attrs = useAttrs();
const emit = defineEmits(["change-value"]);
</script>

<template>
  <select
    v-bind="attrs"
    @change="(event) => emit('change-value', (<HTMLSelectElement>event.target).value)"
  >
    <slot></slot>
  </select>
</template>
