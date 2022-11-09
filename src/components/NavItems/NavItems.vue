<script setup lang="ts">
import { computed, ref, provide, inject } from "vue";
import type { PropType } from "vue";
import BsDropdown from "~/components/BsDropdown/BsDropdown.vue";

export interface TreeNode {
  name: string;
  node?: Array<TreeNode>;
  depth?: Number;
  to?: String;
  class?: String;
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
  to: { type: String, required: false },
  class: { type: String, required: false },
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

const active = ref<any>();
const setActive = (value: string) => {
  active.value = value;
};

let activeLink: any;
provide("activeLink", { active, setActive });
if (props.depth > 0) {
  activeLink = inject("activeLink");
}

const handleClick = () => {
  emit("nav-click", props);
  activeLink.setActive(props.name);
  console.log(activeLink.active.value);
};

const handleNavClick = (node: TreeNode) => {
  emit("nav-click", node);
};
</script>

<template>
  <template v-if="hasChildren && props.depth === 0">
    <ul class="nav list-unstyled" :class="flexDirection">
      <NavItems
        v-for="children in props.node"
        :key="children.name"
        :name="children.name"
        :node="children.node"
        :to="children.to"
        :depth="props.depth + 1"
        @nav-click="handleNavClick"
      />
    </ul>
  </template>
  <!-- Node with child -->
  <template v-else-if="hasChildren && props.depth > 0">
    <BsDropdown
      class="nav-item"
      ref="dropdown"
      type="li"
      @nav-click="handleNavClick"
    >
      <a
        role="button"
        v-if="props.depth > 0"
        class="nav-link dropdown-toggle"
        @click="dropdown.toggle()"
      >
        {{ props.name }}
      </a>
      <ul class="dropdown-menu" :class="flexDirection">
        <NavItems
          v-for="children in props.node"
          :key="children.name"
          :name="children.name"
          :node="children.node"
          :depth="props.depth + 1"
          :to="children.to"
          @nav-click="handleNavClick"
        />
      </ul>
    </BsDropdown>
  </template>
  <!-- End node -->
  <template v-else>
    <li class="nav-item">
      <a
        class="nav-link"
        role="button"
        @click="handleClick"
        :class="{ active: props.name === activeLink.active.value }"
      >
        {{ props.name }}
      </a>
    </li>
  </template>
</template>
