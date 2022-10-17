/**
 * Vue 3 Composable
 * ChartJS base chart
 */
import { onMounted, shallowRef, ref, watch, h, type SetupContext } from "vue";
import Chart from "chart.js/auto";

import ChartDataLabels from "chartjs-plugin-datalabels";
import "chartjs-adapter-date-fns";
import { computed } from "vue";

import type { ChartData, ChartOptions } from "chart.js";
import type { PropType } from "vue";

Chart.register(ChartDataLabels);
// by convention, composable function names start with "use"
// TODO correct typing

const BaseChart = {
  props: {
    data: {
      type: Object as PropType<ChartData>,
    },
    options: { type: Object as PropType<ChartOptions<any>> },
    type: { type: String, required: true },
  },
  setup(props: any, context: SetupContext) {
    // state encapsulated and managed by the composable
    const canvasElement = ref<HTMLCanvasElement | null>(null);
    const _chart = shallowRef<any>(null);

    const dataTrigger = computed(() => JSON.stringify(props.data));
    const optionsTrigger = computed(() => JSON.stringify(props.options));

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
        context.emit("click", {
          data: props.data?.datasets[point.datasetIndex].data[point.index],
          // TODO
          // if not labels, search for x, y or complete raw data for rect.
          label: props.data?.labels ? props.data.labels[point.index] : "",
        });
      });
    };

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
          type: props.type,
          data: props.data,
          options: props.options,
        });

        if (_chart.value?.canvas) _chart.value.canvas.onclick = clickHandler;
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

    return () =>
      h(
        "canvas",
        {
          data: props.data,
          options: props.options,
          type: props.type,
          ref: canvasElement,
        },
        []
      );
  },
};

const BarChart = (props: any) =>
  h(BaseChart, { data: props.data, options: props.options, type: "bar" });

const LineChart = (props: any) =>
  h(BaseChart, { data: props.data, options: props.options, type: "line" });

const DoughnutChart = (props: any) =>
  h(BaseChart, { data: props.data, options: props.options, type: "doughnut" });

const PieChart = (props: any) =>
  h(BaseChart, { data: props.data, options: props.options, type: "pie" });
export { BaseChart, BarChart, LineChart, DoughnutChart, PieChart };
