<script setup lang="ts">
import { ref, useAttrs } from "vue";

/**
 * Default input type is "text", but it can also be passed later on
 * <BaseInput type="text"></BaseInput>
 */
export interface Props {
  id?: string;
  defaultValue?: string | number | undefined;
  placeholder?: string;
}

const props = defineProps<Props>();
const attrs = useAttrs();
const emit = defineEmits(["update-value"]);

// Use with v-model
// <BaseInput v-model="someRef">Label</BaseInput>
const value = ref<Props["defaultValue"]>(props.defaultValue);
</script>
<template>
  <label :for="props.id">
    <slot name="label"></slot>
  </label>
  <input
    v-bind="attrs"
    :value="value"
    :placeholder="props.placeholder"
    @input="(event: Event) => emit('update-value', (<HTMLInputElement>event.target).value)"
  />
</template>
