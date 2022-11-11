<!-- TODO
Move to functional component -->
<script setup lang="ts">
import { withDefaults } from "vue";
import type { Tooltip } from "bootstrap";
import BsTooltip from "~/components/BsTooltip/BsTooltip.vue";

export interface Props {
  title: String;
  tooltipOptions?: Partial<Tooltip.Options>;
  isLoaded?: boolean;
}

const props = withDefaults(defineProps<Props>(), { isLoaded: true });
</script>

<template>
  <div
    class="card p-0 border-0 h-100 shadow rounded wrapper"
    aria-label="chart wrapper"
    tabindex="0"
  >
    <div
      class="card-header bg-gradient-primary d-flex flex-row justify-content-between"
    >
      <div class="card-title text-capitalize">{{ props.title }}</div>
      <BsTooltip
        type="span"
        :options="props.tooltipOptions"
        v-if="props.tooltipOptions"
      >
        <i class="bi bi-info-circle" role="img" aria-label="info icon"></i>
      </BsTooltip>
    </div>
    <div class="card-body">
      <slot v-if="isLoaded" name="content"></slot>
      <slot v-else-if="!isLoaded" name="fallback"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// TODO
// Use scss module
.card-header {
  background-color: var(--bs-gray-200);
}

i {
  color: var(--bs-dark-alt);
  font-size: 1.2rem;

  &:hover {
    color: var(--bs-gray-600);
    transform: scale(1.1);
  }
}

// Dark mode
[data-mode="dark"] .dark {
  .wrapper {
    background: var(--background-primary);
  }
  i {
    color: var(--bs-white);
  }
}
</style>
