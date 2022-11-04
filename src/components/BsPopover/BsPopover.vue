<script setup lang="ts">
import { Popover } from "bootstrap";
import { useAttrs, computed } from "vue";
import useBootstrapLifeCycle from "~/composables/useBootstrapLifeCycle";
/**
 * @see https://getbootstrap.com/docs/5.2/components/popovers/
 */

export interface Props {
  type: string;
  options: Partial<Popover.Options>;
}

const props = defineProps<Props>();
const attrs = useAttrs();
const tag = computed(() => props.type);

const { classInstance, domElement } = useBootstrapLifeCycle(
  Popover,
  props.options
);

// Bootstrap button methods
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
    class="btn"
    v-bind="attrs"
    :is="tag"
    ref="domElement"
    tabindex="0"
    aria-label="popover"
  >
    <slot></slot>
  </component>
</template>
