<script setup lang="ts">
import { computed, ref, useAttrs } from "vue";
import type { PropType } from "vue";
import BsDropdown from "~/components/BsDropdown/BsDropdown.vue";

export interface TreeNode {
  name: string;
  node?: Array<TreeNode>;
  depth?: Number;
  to?: String;
}

const props = defineProps({
  name: { type: String },
  node: { type: Array as PropType<Array<TreeNode>>, required: false },
  depth: { type: Number, default: 0 },
  orient: {
    type: String,
    default: "horizontal",
    required: false,
    validator: (value: string) => {
      return ["vertical", "horizontal"].includes(value);
    },
  },
});

const emit = defineEmits(["nav-click"]);

const dropdown = ref<any>();

const hasChildren = computed(() => {
  return props.node && props.node.length > 0;
});

const flexDirection = computed(() => {
  const classes = {
    horizontal: "d-flex flex-row",
    vertical: "d-flex flex-column",
  } as Record<string, string>;
  return props.depth === 0 ? classes[props.orient] : "";
});
</script>

<template>
  <!-- First Node -->
  <template v-if="hasChildren && props.depth === 0">
    <ul class="nav list-unstyled" :class="flexDirection">
      <Navbar
        v-for="children in props.node"
        :key="children.name"
        :name="children.name"
        :node="children.node"
        :depth="props.depth + 1"
      />
    </ul>
  </template>
  <!-- Node with child -->
  <template v-else-if="hasChildren && props.depth > 0">
    <BsDropdown class="nav-item" ref="dropdown" type="li">
      <a
        role="button"
        v-if="props.depth > 0"
        class="nav-link dropdown-toggle"
        @click="dropdown.toggle()"
      >
        {{ props.name }}
      </a>
      <ul class="dropdown-menu" :class="flexDirection">
        <Navbar
          v-for="children in props.node"
          :key="children.name"
          :name="children.name"
          :node="children.node"
          :depth="props.depth + 1"
        />
      </ul>
    </BsDropdown>
  </template>
  <!-- End node -->
  <template v-else>
    <li class="nav-item">
      <a class="nav-link" role="button" @click="$emit('nav-click', props)">
        {{ props.name }}
      </a>
    </li>
  </template>
</template>
