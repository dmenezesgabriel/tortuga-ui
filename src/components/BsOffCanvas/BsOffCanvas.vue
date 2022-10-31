<script setup lang="ts">
import { Offcanvas } from "bootstrap";
import { onMounted, ref } from "vue";

export interface Props {
  options: Partial<Offcanvas.Options>;
}

const props = defineProps<Props>();
const offCanvasElement = ref<HTMLElement | undefined>();
const offCanvas = ref<any>();

onMounted(() => {
  if (offCanvasElement.value) {
    offCanvas.value = new Offcanvas(offCanvasElement.value, props.options);
  }
});
</script>

<template>
  <div ref="offCanvasElement">
    <slot></slot>
  </div>
</template>
