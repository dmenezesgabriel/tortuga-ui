<script setup lang="ts">
import { Tooltip } from "bootstrap";
import { onMounted, ref, type PropType } from "vue";
// TODO
// Open the object property
// How To:
// https://getbootstrap.com/docs/5.2/components/tooltips/#options
// export const props = makePropsConfigurable(

const props = defineProps({
  options: { type: Object as PropType<Tooltip.Options>, required: true },
});

const tooltipElement = ref<HTMLElement | null>(null);
const tooltip = ref<any>(null)

onMounted(() => {
  if (tooltipElement.value) {
    tooltip.value = new Tooltip(tooltipElement.value, props.options);
  }

});
</script>

<template>
  <span
    ref="tooltipElement"
    tabindex="0"
    aria-label="tooltip"
  >
    <slot></slot>
  </span>
</template>
