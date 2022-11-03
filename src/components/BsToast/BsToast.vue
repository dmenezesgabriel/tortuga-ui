<script setup lang="ts">
import { Toast } from "bootstrap";
import { onMounted, useAttrs } from "vue";
import useBootstrapLifeCycle from "@/composables/useBootstrapLifeCycle";
/**
 * @see https://getbootstrap.com/docs/5.2/components/toasts/
 */

export interface Props {
  type: string; // HTML tag ex: button, span, ...
  options?: Partial<Toast.Options>;
}

const props = defineProps<Props>();
const attrs = useAttrs();

const { classInstance, domElement, htmlTag } = useBootstrapLifeCycle(
  Toast,
  props.type,
  props.options
);
// Bootstrap toast methods
const hide = () => classInstance.value.hide();
const show = () => classInstance.value.show();

defineExpose({
  hide,
  show,
});

onMounted(() => {
  console.log(classInstance.value);
});
</script>

<template>
  <component
    v-bind="attrs"
    :is="htmlTag"
    ref="domElement"
    tabindex="0"
    aria-label="toast"
  >
    <slot></slot>
  </component>
</template>
