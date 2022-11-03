<script setup lang="ts">
import { Dropdown } from "bootstrap";
import { onBeforeMount, onMounted, onUnmounted, ref, useAttrs } from "vue";

/**
 * @see https://getbootstrap.com/docs/5.2/components/dropdowns/
 */

export interface Props {
  type: string;
  options?: Partial<Dropdown.Options>;
}

const props = defineProps<Props>();
const attrs = useAttrs();
const dropdownElement = ref<HTMLElement | undefined>();
const dropdown = ref<any>();
const htmlTag = ref<string>();

// Bootstrap dropdown methods

const dispose = () => dropdown.value.dispose();
const hide = () => dropdown.value.hide();
const show = () => dropdown.value.show();
const toggle = () => dropdown.value.toggle();

defineExpose({
  dispose,
  hide,
  show,
  toggle,
});

onBeforeMount(() => {
  htmlTag.value = props.type;
});

onMounted(() => {
  if (dropdownElement.value) {
    dropdown.value = new Dropdown(dropdownElement.value, props.options);
  }
});

onUnmounted(() => {
  dispose();
});
</script>

<template>
  <component
    class="dropdown"
    v-bind="attrs"
    :is="htmlTag"
    ref="dropdownElement"
    tabindex="0"
    aria-label="dropdown"
  >
    <slot></slot>
  </component>
</template>
