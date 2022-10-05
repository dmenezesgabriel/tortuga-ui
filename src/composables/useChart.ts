/**
 * Vue 3 Composable
 * ChartJS base chart
 */
import { onMounted, shallowRef, ref, watch } from "vue";
import Chart from "chart.js/auto";

import ChartDataLabels from "chartjs-plugin-datalabels";
import "chartjs-adapter-date-fns";
import { computed } from "vue";

Chart.register(ChartDataLabels);
// by convention, composable function names start with "use"
// TODO correct typing
export function useChart(props: any, type: any) {
  // state encapsulated and managed by the composable
  const canvasElement = ref<HTMLCanvasElement | null>(null);
  const _chart = shallowRef<any>(null);

  const dataTrigger = computed(() => JSON.stringify(props.data));
  const optionsTrigger = computed(() => JSON.stringify(props.options));

  onMounted(() => {
    // TS Optional chaining
    const ctx = canvasElement.value?.getContext("2d");

    // Destroy chart element if already exists
    if (_chart.value != null) {
      _chart.value.destroy();
    }

    if (ctx !== null && ctx !== undefined) {
      // Instance a chart
      _chart.value = new Chart(ctx, {
        type: type,
        data: props.data,
        options: props.options,
      });
    }
  });
  // whenever data changes, update chart
  watch(dataTrigger, () => {
    if (_chart.value != null) {
      _chart.value.data = props.data;
      _chart.value.update();
    }
  });

  watch(optionsTrigger, () => {
    if (_chart.value != null) {
      _chart.value.options = props.options;
      _chart.value.update();
    }
  });

  // expose managed state as return value
  return { canvasElement, _chart };
}
