<!-- TODO
Move to functional component? -->
<script setup lang="ts">
import { inject } from "vue";

const props = defineProps({
  title: { type: String, required: true },
});

const selectedTitle = inject("selectedTitle");
</script>

<template>
  <div class="tab-content" v-show="props.title == selectedTitle">
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-content {
  min-height: 400px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 3px 5px 5px rgba(0, 0, 0, 0.05);
}
</style>
