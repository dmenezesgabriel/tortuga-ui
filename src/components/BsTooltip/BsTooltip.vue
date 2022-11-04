<script setup lang="ts">
import { Tooltip } from "bootstrap";
import { useAttrs, computed } from "vue";
import useBootstrapLifeCycle from "~/composables/useBootstrapLifeCycle";
/**
 * @see https://getbootstrap.com/docs/5.2/components/tooltips/
 */

export interface Props {
  type: string; // HTML tag ex: button, span, ...
  options: Partial<Tooltip.Options>;
}

const props = defineProps<Props>();
const attrs = useAttrs();
const tag = computed(() => props.type);

const { classInstance, domElement } = useBootstrapLifeCycle(
  Tooltip,
  props.options
);
// Bootstrap tooltip methods
const disable = () => classInstance.value.disable();
const enable = () => classInstance.value.enable();
const hide = () => classInstance.value.hide();
const show = () => classInstance.value.show();

defineExpose({
  disable,
  enable,
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
    aria-label="tooltip"
  >
    <slot></slot>
  </component>
</template>
