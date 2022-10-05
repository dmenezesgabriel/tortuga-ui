<script setup lang="ts">
import { useChart } from "@/composables/useChart";
import type { ChartData, ChartOptions } from "chart.js";
import type { PropType } from "vue";

const props = defineProps({
  data: { type: Object as PropType<ChartData> },
  options: { type: Object as PropType<ChartOptions<any>> },
});

const { canvasElement } = useChart(props, "line");
</script>

<template>
  <canvas
    ref="canvasElement"
    aria-label="Line Chart"
    role="img"
    tabindex="0"
  ></canvas>
</template>
