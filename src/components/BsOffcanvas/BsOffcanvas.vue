<script setup lang="ts">
import { Offcanvas } from "bootstrap";
import { onBeforeMount, onMounted, onUnmounted, ref, useAttrs } from "vue";

/**
 * @see https://getbootstrap.com/docs/5.2/components/offCanvass/
 */

// TODO
// Open the object property
// How To:
// https://getbootstrap.com/docs/5.2/components/offCanvass/#options
// export const props = makePropsConfigurable(

export interface Props {
  type: string; // HTML tag ex: button, span, ...
  options?: Partial<Offcanvas.Options>;
  show?: boolean;
}

const props = defineProps<Props>();
const attrs = useAttrs();

const offCanvasElement = ref<HTMLElement | undefined>();
const offCanvas = ref<any>();
const htmlTag = ref<string>();

// Bootstrap Offcanvas methods
const show = () => offCanvas.value.show();
const hide = () => offCanvas.value.hide();
const toggle = () => offCanvas.value.toggle();
const dispose = () => offCanvas.value.dispose();

// Use a ref in the componet to call any of the methods from it's parent.
// <BsOffcanvas ref="offcanvas"></BsOffcanvas>
// ...
// offcanvas.toggle()
defineExpose({
  show,
  hide,
  toggle,
});

onBeforeMount(() => {
  htmlTag.value = props.type;
});

onMounted(() => {
  if (offCanvasElement.value) {
    offCanvas.value = new Offcanvas(offCanvasElement.value, props.options);
  }
  if (props.show) show();
  console.dir(offCanvas.value);
});

onUnmounted(() => {
  dispose();
});
</script>

<template>
  <component
    class="offcanvas"
    v-bind="attrs"
    :is="htmlTag"
    ref="offCanvasElement"
    tabindex="0"
    aria-label="offCanvas"
  >
    <slot></slot>
  </component>
</template>
