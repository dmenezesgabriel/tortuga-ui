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
  padding: 20px;
  border-radius: 5px;
}
</style>
