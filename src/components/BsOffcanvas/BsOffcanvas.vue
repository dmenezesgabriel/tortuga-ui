<script setup lang="ts">
import { Offcanvas } from "bootstrap";
import { onMounted, useAttrs } from "vue";
import useBootstrapLifeCycle from "@/composables/useBootstrapLifeCycle";
/**
 * @see https://getbootstrap.com/docs/5.2/components/classInstances/
 */

export interface Props {
  type: string; // HTML tag ex: button, span, ...
  options?: Partial<Offcanvas.Options>;
  show?: boolean;
}

const props = defineProps<Props>();
const attrs = useAttrs();

const { classInstance, domElement, htmlTag } = useBootstrapLifeCycle(
  Offcanvas,
  props.type,
  props.options
);

// Bootstrap Offcanvas methods
const show = () => classInstance.value.show();
const hide = () => classInstance.value.hide();
const toggle = () => classInstance.value.toggle();

defineExpose({
  hide,
  show,
  toggle,
});

onMounted(() => {
  if (props.show) show();
  console.dir(classInstance.value);
});
</script>

<template>
  <component
    class="offcanvas"
    v-bind="attrs"
    :is="htmlTag"
    ref="domElement"
    tabindex="0"
    aria-label="classInstance"
  >
    <slot></slot>
  </component>
</template>
