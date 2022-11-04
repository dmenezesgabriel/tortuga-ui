<script setup lang="ts">
import { Modal } from "bootstrap";
import { useAttrs, computed } from "vue";
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

const tag = computed(() => props.type);

const { classInstance, domElement } = useBootstrapLifeCycle(
  Modal,
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
    :is="tag"
    ref="domElement"
    tabindex="0"
    aria-label="modal"
  >
    <slot></slot>
  </component>
</template>
