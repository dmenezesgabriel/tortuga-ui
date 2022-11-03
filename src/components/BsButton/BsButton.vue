<script setup lang="ts">
import { Button } from "bootstrap";
import { useAttrs } from "vue";
import useBootstrapLifeCycle from "@/composables/useBootstrapLifeCycle";
/**
 * @see https://getbootstrap.com/docs/5.2/components/buttons/
 */

export interface Props {
  type: string;
}

const props = defineProps<Props>();
const attrs = useAttrs();

const { classInstance, domElement, htmlTag } = useBootstrapLifeCycle(
  Button,
  props.type
);

// Bootstrap button methods
const toggle = () => classInstance.value.toggle();

defineExpose({
  toggle,
});
</script>

<template>
  <component
    class="btn"
    v-bind="attrs"
    :is="htmlTag"
    ref="domElement"
    tabindex="0"
    aria-label="button"
    role="button"
  >
    <slot></slot>
  </component>
</template>
