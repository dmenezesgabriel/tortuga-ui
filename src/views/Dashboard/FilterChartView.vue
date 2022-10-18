<script setup lang="ts">
import { ref, computed, onBeforeMount } from "vue";
import { BarChart } from "@/components/Chart/BaseChart";
import MultiselectCheckbox from "@/components/MultiselectCheckbox/MultiselectCheckbox.vue";
import type { IOption } from "@/types/IFilter";

const data = [
  { x: "January", y: 65 },
  { x: "February", y: 59 },
  { x: "March", y: 80 },
  { x: "April", y: 81 },
  { x: "May", y: 56 },
  { x: "June", y: 55 },
  { x: "July", y: 40 },
];

const options = ref({
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    datalabels: {
      anchor: "end",
      align: "end",
    },
  },
});

const filter = ref();
const filteredData = ref();

const chartData = computed(() => {
  return {
    datasets: [{ data: filteredData.value ? filteredData.value : data }],
  };
});

const applyFilters = ({ options }: { options: IOption[] }) => {
  const available = options
    .filter((o) => o.available === true)
    .map((o) => o.name);
  filteredData.value = data.filter((d) => available.includes(d.x));
};

onBeforeMount(() => {
  const options = data.map((d) => ({
    name: d.x,
    available: true,
    visible: true,
    exclude: false,
  }));

  filter.value = {
    id: "months",
    title: "Months",
    options: options,
  };
});
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <MultiselectCheckbox v-bind="filter" @apply="applyFilters" />
        <BarChart :data="chartData" :options="options" />
      </div>
      <div class="col-6"></div>
    </div>
  </div>
</template>
