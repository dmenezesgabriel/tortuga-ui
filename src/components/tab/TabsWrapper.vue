<!-- TODO
Move to functional component ? -->
<script setup lang="ts">
import { useSlots, ref, provide } from "vue";

const slots = useSlots();
const tabTitles = ref(slots.default?.().map((tab) => tab.props?.title));
const selectedTitle = ref(tabTitles.value?.[0]);

provide("selectedTitle", selectedTitle);
</script>
<template>
  <div class="tabs-wrapper">
    <ul class="tabs-wrapper__header">
      <li
        v-for="title in tabTitles"
        :key="title"
        :class="{ selected: title == selectedTitle }"
        @click="selectedTitle = title"
      >
        {{ title as string }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.tabs-wrapper {
  max-width: 400;
  margin: 0 auto;

  &__header {
    margin-bottom: 10px;
    list-style: none;
    padding: 0;
    display: flex;

    li {
      width: 100px;
      text-align: center;
      padding: 10px 20px;
      margin-right: 10px;
      background-color: var(--bs-gray-400);
      color: var(--bs-dark-alt);
      border-radius: 5px;
      cursor: pointer;
      transition: 0.4s all ease-out;
    }
    li.selected {
      background-color: var(--bs-primary);
      color: white;
    }
  }
}
</style>
