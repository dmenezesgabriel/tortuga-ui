<script setup lang="ts">
import { Tooltip } from "bootstrap";
import { onBeforeMount, onMounted, ref, useAttrs } from "vue";

/**
 * @see https://getbootstrap.com/docs/5.2/components/tooltips/
 */

// TODO
// Open the object property
// How To:
// https://getbootstrap.com/docs/5.2/components/tooltips/#options
// export const props = makePropsConfigurable(

export interface Props {
  type: string;
  options: Partial<Tooltip.Options>;
}

const props = defineProps<Props>();
const attrs = useAttrs();
const tooltipElement = ref<HTMLElement | undefined>();
const tooltip = ref<any>();
const htmlTag = ref<string>();

onBeforeMount(() => {
  htmlTag.value = props.type;
});

onMounted(() => {
  if (tooltipElement.value) {
    tooltip.value = new Tooltip(tooltipElement.value, props.options);
  }
});
</script>

<template>
  <component
    v-bind="attrs"
    :is="htmlTag"
    ref="tooltipElement"
    tabindex="0"
    aria-label="tooltip"
  >
    <slot></slot>
  </component>
</template>
