<script setup lang="ts">
import { useChart } from "@/composables/useChart";
import { onMounted } from "vue";
import type { ChartData, ChartOptions } from "chart.js";
import type { PropType } from "vue";

const props = defineProps({
  data: {
    type: Object as PropType<ChartData>,
  },
  options: { type: Object as PropType<ChartOptions<any>> },
});

const emit = defineEmits(["click"]);

const { canvasElement, _chart } = useChart(props, "bar");

// a composable can also hook into its owner component's
// lifecycle to setup and teardown side effects.
const clickHandler = (event: Event) => {
  /**
   * Get clicked canvas element
   * @param event
   */
  const points = _chart.value.getElementsAtEventForMode(event, "nearest", {
    intersect: true,
  });
  // TODO correct typing
  points.map((point: any) => {
    emit("click", {
      data: props.data?.datasets[point.datasetIndex].data[point.index],
      // TODO
      // if not labels, search for x, y or complete raw data for rect.
      label: props.data?.labels ? props.data.labels[point.index] : "",
    });
  });
};

onMounted(() => {
  if (_chart.value?.canvas) _chart.value.canvas.onclick = clickHandler;
});
</script>

<template>
  <canvas
    ref="canvasElement"
    aria-label="Bar Chart"
    role="img"
    tabindex="0"
  ></canvas>
</template>
