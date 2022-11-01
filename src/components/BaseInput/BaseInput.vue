<script setup lang="ts">
import { ref, useAttrs } from "vue";

/**
 * Default input type is "text", but it can also be passed later on
 * <BaseInput type="text"></BaseInput>
 */
export interface Props {
  id?: string;
  type?: string;
  value?: string | number | undefined;
  placeholder?: string;
}
const props = defineProps<Props>();
const attrs = useAttrs();
const emit = defineEmits(["update-value"]);

// Use with v-model
// <BaseInput v-model="someRef">Label</BaseInput>
const value = ref<Props["value"]>(props.value);
const checkTypes = ["radio", "checkbox"];

const handleInput = (event: Event) => {
  /**
   * Emits input metadata
   * @param {Event} event
   * @returns {void}
   */

  const eventTarget = event.target as HTMLInputElement;
  let metadata;

  // Radio and Checkbox
  if (eventTarget && checkTypes.includes(eventTarget.type)) {
    metadata = {
      value: (event.target as HTMLInputElement).value,
      checked: (event.target as HTMLInputElement).checked,
    };
  } else {
    metadata = (event.target as HTMLInputElement).value;
  }
  emit("update-value", metadata);
};
</script>

<template>
  <input
    v-bind="attrs"
    :value="value"
    :type="props.type"
    :placeholder="props.placeholder"
    @input="handleInput"
  />
</template>
