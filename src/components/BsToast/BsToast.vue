<script setup lang="ts">
import { Toast } from "bootstrap";
import { computed, onMounted, useAttrs } from "vue";
import useBootstrapLifeCycle from "~/composables/useBootstrapLifeCycle";
/**
 * @see https://getbootstrap.com/docs/5.2/components/toasts/
 */

export interface Props {
  type: string; // HTML tag ex: button, span, ...
  options?: Partial<Toast.Options>;
}

const props = defineProps<Props>();
const attrs = useAttrs();

const { classInstance, domElement } = useBootstrapLifeCycle(
  Toast,
  props.options
);
// Bootstrap toast methods
const hide = () => classInstance.value.hide();
const show = () => classInstance.value.show();
const tag = computed(() => props.type);

defineExpose({
  hide,
  show,
});
</script>

<template>
  <component
    v-bind="attrs"
    :is="tag"
    ref="domElement"
    tabindex="0"
    aria-label="toast"
  >
    <slot></slot>
  </component>
</template>
