<!-- TODO
Move to functional component ? -->
<script setup lang="ts">
import { useSlots, ref, provide } from "vue";

const emit = defineEmits(["tab-click"]);

const slots = useSlots();
// TODO
// supress [warn] Slot "default" invoked outside of the render function
const selectedTitle = ref(slots.default?.()[0].props?.title);

const handleClick = (tabTitle: string): void => {
  /**
   * @param {string} tabTitle
   * @returns {void}
   */
  selectedTitle.value = tabTitle;
  emit("tab-click", tabTitle);
};

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
        @click="handleClick(slotItem.props?.title)"
      >
        {{ slotItem.props?.title as string }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
// TODO
// Change styles to match https://getbootstrap.com/docs/5.2/components/card/#navigation
// Use scss module
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
      background-color: var(--background-secondary);
      color: var(--bs-dark-alt);
      border-radius: 5px;
      cursor: pointer;
      transition: 0.4s all ease-out;
      color: var(--text-primary);
    }
    li.selected {
      background-color: var(--primary);
      color: white;
    }
  }
}
</style>
