<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import type { PropType } from "vue";
import BsDropdown from "~/components/BsDropdown/BsDropdown.vue";

export interface TreeNode {
  name: string;
  node?: Array<TreeNode>;
  depth?: Number;
}

const props = defineProps({
  name: { type: String },
  node: { type: Array as PropType<Array<TreeNode>>, required: false },
  depth: { type: Number, default: 0 },
});

const dropdown = ref<any>();

const hasChildren = computed(() => {
  return props.node && props.node.length > 0;
});

onMounted(() => {
  if (props.depth === 0) dropdown.value.show();
});
</script>

<template>
  <template v-if="hasChildren">
    <BsDropdown class="nav-item" ref="dropdown" type="div">
      <a
        v-if="props.depth > 0"
        class="nav-link dropdown-toggle"
        @click="dropdown.toggle()"
      >
        {{ props.name }}
      </a>
      <ul class="dropdown-menu border-0">
        <li v-for="children in props.node" :key="children.name">
          <Navbar
            :name="children.name"
            :node="children.node"
            :depth="props.depth + 1"
          />
        </li>
      </ul>
    </BsDropdown>
  </template>
  <template v-else>
    <li class="nav-item">
      <a class="nav-link">
        {{ props.name }}
      </a>
    </li>
  </template>
</template>
