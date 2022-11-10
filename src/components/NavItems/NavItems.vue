<script setup lang="ts">
import { computed, ref, provide, inject } from "vue";
import type { PropType } from "vue";
import BsDropdown from "~/components/BsDropdown/BsDropdown.vue";

export interface TreeNode {
  name: string;
  node?: Array<TreeNode>;
  depth?: Number;
  to?: String;
  activeLinkName?: String;
  mode?: String;
  isDisabled?: Boolean;
  badge?: String;
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
  activeLinkName: { type: String, required: false },
  isDisabled: { type: Boolean, required: false },
  badge: { type: String, required: false },
});

const emit = defineEmits(["nav-click"]);
const dropdown = ref<any>();

// Check if node should be collapsible
const hasChildren = computed(() => {
  return props.node && props.node.length > 0;
});

// Vertical or horizonal orientation
const flexDirection = computed(() => {
  const classes = {
    horizontal: "d-flex flex-row",
    vertical: "d-flex flex-column",
  } as Record<string, string>;
  return props.depth === 0 ? classes[props.orient] : "";
});

// Deal with active link class
const active = ref<string>(props.activeLinkName || "");
const setActive = (value: string) => {
  active.value = value;
};

let activeLink: any;
provide("activeLink", { active, setActive });
if (props.depth > 0) {
  activeLink = inject("activeLink");
}

// Emit clicked link
const handleClick = (event: Event) => {
  event.preventDefault();

  emit("nav-click", props);
  activeLink.setActive(props.name);
};

const handleNavClick = (node: TreeNode) => {
  emit("nav-click", node);
};

const handleDropdownClick = (event: Event) => {
  handleClick(event);
  dropdown.value.toggle();
};
</script>

<template>
  <!-- First node -->
  <template v-if="hasChildren && props.depth === 0">
    <ul class="nav bg-dark" :class="flexDirection">
      <NavItems
        v-for="children in props.node"
        :key="children.name"
        :name="children.name"
        :node="children.node"
        :to="children.to"
        :depth="props.depth + 1"
        :isDisabled="children.isDisabled"
        :badge="children.badge"
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
        :class="{
          'active fw-bold': props.name === activeLink.active.value,
          disabled: props.isDisabled,
        }"
        @click="handleDropdownClick"
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
          :isDisabled="children.isDisabled"
          :badge="children.badge"
          @nav-click="handleNavClick"
        />
      </ul>
    </BsDropdown>
  </template>
  <!-- End node -->
  <template v-else>
    <li class="nav-item">
      <a
        class="nav-link position-relative"
        role="button"
        @click="(event) => handleClick(event)"
        href="#"
        :class="{
          'active fw-bold': props.name === activeLink.active.value,
          disabled: props.isDisabled,
        }"
      >
        {{ props.name }}
        <span
          v-if="props.badge"
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {{ props.badge }}
          <span class="visually-hidden">acessibility</span>
        </span>
      </a>
    </li>
  </template>
</template>

<style lang="scss" scoped>
@import "bootstrap/scss/functions";

// Nav
// Do something better than this !important
$nav-link-color: var(--bs-white) !important;
$nav-link-hover-color: var(--secondary);
$nav-tabs-link-active-bg: var(--background-primary);
// Dropdown
$dropdown-link-color: var(--text-primary);
$dropdown-bg: var(--navbar-background-primary);
$dropdown-link-hover-color: var(--text-primary);
$dropdown-link-hover-bg: var(--background-primary);

@import "bootstrap/scss/variables";
@import "bootstrap/scss/maps";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/nav";
@import "bootstrap/scss/dropdown";
</style>
