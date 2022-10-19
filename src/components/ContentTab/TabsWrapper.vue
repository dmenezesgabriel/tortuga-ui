<!-- TODO
Move to functional component ? -->
<script setup lang="ts">
import { useSlots, ref, provide } from "vue";

const slots = useSlots();
// TODO
// supress [warn] Slot "default" invoked outside of the render function
const selectedTitle = ref(slots.default?.()[0].props?.title);

provide("selectedTitle", selectedTitle);
</script>
<template>
  <div class="tabs-wrapper">
    <ul class="tabs-wrapper__header" v-if="$slots.default">
      <li
        v-for="(slotItem, index) in $slots.default()"
        :key="slotItem.props?.title"
        :class="{
          selected: selectedTitle
            ? slotItem.props?.title === selectedTitle
            : index === 0,
        }"
        @click="selectedTitle = slotItem.props?.title"
      >
        {{ slotItem.props?.title as string }}
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
