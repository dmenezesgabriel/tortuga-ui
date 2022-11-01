<script setup lang="ts">
import { Tooltip } from "bootstrap";
import { onBeforeMount, onMounted, onUnmounted, ref, useAttrs } from "vue";

/**
 * @see https://getbootstrap.com/docs/5.2/components/tooltips/
 */

// TODO
// Open the object property
// How To:
// https://getbootstrap.com/docs/5.2/components/tooltips/#options
// export const props = makePropsConfigurable(

export interface Props {
  type: string; // HTML tag ex: button, span, ...
  options: Partial<Tooltip.Options>;
}

const props = defineProps<Props>();
const attrs = useAttrs();
const tooltipElement = ref<HTMLElement | undefined>();
const tooltip = ref<any>();
const htmlTag = ref<string>();

// Bootstrap tooltip methods
const dispose = () => tooltip.value.dispose();
const disable = () => tooltip.value.disable();
const enable = () => tooltip.value.enable();
const hide = () => tooltip.value.hide();
const show = () => tooltip.value.show();

defineExpose({
  disable,
  enable,
  hide,
  show,
});

onBeforeMount(() => {
  htmlTag.value = props.type;
});

onMounted(() => {
  if (tooltipElement.value) {
    tooltip.value = new Tooltip(tooltipElement.value, props.options);
  }
});

onUnmounted(() => {
  dispose();
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
