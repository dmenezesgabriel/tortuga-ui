<script setup lang="ts">
import { useChart } from "../../composables/useChart";
import { onMounted } from "vue";
import type { ChartData, ChartOptions } from "chart.js";
import type { PropType } from "vue";

const props = defineProps({
  data: {
    type: Object as PropType<ChartData>,
  },
  options: { type: Object as PropType<ChartOptions<any>> },
});

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
    console.log(point.element.$context.raw);
    if (props.data?.labels) console.log(props.data.labels[point.index]);
    console.log(props.data?.datasets[point.datasetIndex].data[point.index]);
  });
};

onMounted(() => {
  _chart.value.canvas.onclick = clickHandler;
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
