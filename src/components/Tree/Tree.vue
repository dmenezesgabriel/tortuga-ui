<script setup lang="ts">
import { computed, ref } from "vue";
import type { PropType } from "vue";

export interface TreeNode {
  name: string;
  node?: Array<TreeNode>;
  spacing: number;
  spacingIncrement?: number;
}

const props = defineProps({
  name: { type: String },
  node: { type: Array as PropType<Array<TreeNode>>, required: false },
  spacing: { type: Number, default: 0 },
  spacingIncrement: { type: Number, default: 10 },
});

const showChildren = ref<boolean>(false);

const hasChildren = computed(() => {
  return props.node && props.node.length > 0;
});

const nodeMargin = computed(() => {
  return { "margin-left": `${props.spacing}px` };
});

const toggleChildren = () => {
  showChildren.value = !showChildren.value;
};

const toogleChildrenIcon = computed(() => {
  return showChildren.value ? "-" : "+";
});
</script>

<template>
  <div :style="nodeMargin">
    <div>
      {{ props.name }}
      <span class="fw-bold" @click="toggleChildren" v-if="hasChildren">
        [{{ toogleChildrenIcon }}]
      </span>
    </div>

    <div v-if="hasChildren" v-show="showChildren">
      <Tree
        v-for="children in props.node"
        :key="children.name"
        :name="children.name"
        :node="children.node"
        :spacing="spacing + props.spacingIncrement"
      />
    </div>
  </div>
</template>
