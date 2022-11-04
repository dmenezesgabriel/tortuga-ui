<script setup lang="ts">
import { Modal } from "bootstrap";
import { useAttrs } from "vue";
import useBootstrapLifeCycle from "~/composables/useBootstrapLifeCycle";
/**
 * @see https://getbootstrap.com/docs/5.2/components/modal/
 */

export interface Props {
  type: string;
  options?: Partial<Modal.Options>;
}

const props = defineProps<Props>();
const attrs = useAttrs();

const { classInstance, domElement, htmlTag } = useBootstrapLifeCycle(
  Modal,
  props.type,
  props.options
);

// Bootstrap modal methods
const hide = () => classInstance.value.hide();
const show = () => classInstance.value.show();
const toggle = () => classInstance.value.toggle();

defineExpose({
  hide,
  show,
  toggle,
});
</script>

<template>
  <component
    class="modal"
    v-bind="attrs"
    :is="htmlTag"
    ref="domElement"
    tabindex="0"
    aria-label="modal"
  >
    <slot></slot>
  </component>
</template>
