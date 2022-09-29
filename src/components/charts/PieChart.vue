<script setup lang="ts">
import { useChart } from "@/composables/useChart";
import type { ChartData, ChartOptions } from "chart.js";
import type { PropType } from "vue";

const props = defineProps({
  data: { type: Object as PropType<ChartData> },
  options: { type: Object as PropType<ChartOptions<any>> },
  type: { default: "pie" },
});

const { canvasElement } = useChart(props);
</script>

<template>
  <canvas
    ref="canvasElement"
    aria-label="Pie Chart"
    role="img"
    tabindex="0"
  ></canvas>
</template>
