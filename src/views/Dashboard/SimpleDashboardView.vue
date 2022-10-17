<script setup lang="ts">
import { ref, computed } from "vue";
import { BarChart } from "@/components/Chart/BaseChart";

const data = [
  { x: "January", y: 65 },
  { x: "February", y: 59 },
  { x: "March", y: 80 },
  { x: "April", y: 81 },
  { x: "May", y: 56 },
  { x: "June", y: 55 },
  { x: "July", y: 40 },
];

const selected = ref(data.map((d) => d.x));

const filteredData = computed(() => {
  const chartData = data.filter((d: any) => {
    let shouldReturn = true;
    shouldReturn = true;
    if (selected.value.includes(d.x)) {
      shouldReturn = true;
    } else {
      shouldReturn = false;
    }
    return shouldReturn;
  });

  return {
    datasets: [{ data: chartData }],
  };
});

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
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div>Selected: {{ selected }}</div>

        <select v-model="selected" multiple>
          <optgroup>
            <option v-for="option in data" :key="option.x" :value="option.x">
              {{ option.x }}
            </option>
          </optgroup>
        </select>

        <BarChart :data="filteredData" :options="options" />
      </div>
      <div class="col-6"></div>
    </div>
  </div>
</template>
