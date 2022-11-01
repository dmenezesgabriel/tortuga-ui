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
  <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs" v-if="$slots.default">
        <li
          class="nav-item"
          v-for="(slotItem, index) in $slots.default()"
          :key="slotItem.props?.title"
          @click="handleClick(slotItem.props?.title)"
        >
          <a
            class="nav-link"
            :class="{
              active: selectedTitle
                ? slotItem.props?.title === selectedTitle
                : index === 0,
            }"
          >
            {{ slotItem.props?.title as string }}
          </a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>
