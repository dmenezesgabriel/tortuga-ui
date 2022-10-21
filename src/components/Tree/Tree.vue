<script setup lang="ts">
import { computed, ref } from "vue";
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

const showChildren = ref<boolean>(false);

const hasChildren = computed(() => {
  return props.contents && props.contents.length > 0;
});

const toggleChildren = () => {
  showChildren.value = !showChildren.value;
};

const toogleChildrenIcon = computed(() => {
  return showChildren.value ? "-" : "+";
});
</script>

<template>
  <div>
    <div>
      {{ props.name }}
      <span class="" @click="toggleChildren" v-if="hasChildren">
        [{{ toogleChildrenIcon }}]
      </span>
    </div>

    <div v-if="hasChildren" v-show="showChildren">
      <Tree
        v-for="node in props.contents"
        :key="node.name"
        :name="node.name"
        :contents="node.contents"
      />
    </div>
  </div>
</template>
