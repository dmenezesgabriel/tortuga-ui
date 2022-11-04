<script setup lang="ts">
import { Alert } from "bootstrap";
import { useAttrs, computed } from "vue";
import useBootstrapLifeCycle from "~/composables/useBootstrapLifeCycle";
/**
 * @see https://getbootstrap.com/docs/5.2/components/alerts/
 */

export interface Props {
  type: string;
}

const props = defineProps<Props>();
const attrs = useAttrs();

const tag = computed(() => props.type);

const { classInstance, domElement } = useBootstrapLifeCycle(Alert);

// Bootstrap alert methods
const close = () => classInstance.value.close();

defineExpose({
  close,
});
</script>

<template>
  <component
    class="alert"
    v-bind="attrs"
    :is="tag"
    ref="domElement"
    tabindex="0"
    aria-label="alert"
    role="alert"
  >
    <slot></slot>
  </component>
</template>
