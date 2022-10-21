<script setup lang="ts">
import type { PropType } from "vue";

export interface TreeNode {
  type: string;
  name: string;
  contents?: Array<TreeNode>;
}

const props = defineProps({
  name: { type: String },
  contents: { type: Array as PropType<Array<TreeNode>> },
});
</script>
<template>
  <ul v-for="node in contents" :key="node.name">
    <li>
      {{ node.name }}
      <Tree v-if="node.type === 'folder'" :contents="node.contents" />
    </li>
  </ul>
</template>
