<script setup lang="ts">
import { Tooltip } from "bootstrap";
import { onMounted, ref } from "vue";

/**
 * @see https://getbootstrap.com/docs/5.2/components/tooltips/
 */

// TODO
// Open the object property
// How To:
// https://getbootstrap.com/docs/5.2/components/tooltips/#options
// export const props = makePropsConfigurable(

export interface Props {
  options: Partial<Tooltip.Options>;
}

const props = defineProps<Props>();

const tooltipElement = ref<HTMLElement | null>(null);
const tooltip = ref<any>(null);

onMounted(() => {
  if (tooltipElement.value) {
    tooltip.value = new Tooltip(tooltipElement.value, props.options);
  }
});
</script>

<template>
  <div ref="tooltipElement" tabindex="0" aria-label="tooltip">
    <slot></slot>
  </div>
</template>
