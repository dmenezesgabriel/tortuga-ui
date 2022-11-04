<script setup lang="ts">
import { Dropdown } from "bootstrap";
import { useAttrs, computed } from "vue";
import useBootstrapLifeCycle from "~/composables/useBootstrapLifeCycle";
/**
 * @see https://getbootstrap.com/docs/5.2/components/dropdowns/
 */

export interface Props {
  type: string;
  options?: Partial<Dropdown.Options>;
}

const props = defineProps<Props>();
const attrs = useAttrs();
const tag = computed(() => props.type);

const { classInstance, domElement } = useBootstrapLifeCycle(
  Dropdown,
  props.options
);

// Bootstrap dropdown methods
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
    class="dropdown"
    v-bind="attrs"
    :is="tag"
    ref="domElement"
    tabindex="0"
    aria-label="dropdown"
  >
    <slot></slot>
  </component>
</template>
