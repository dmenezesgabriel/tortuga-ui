<!-- TODO
Move to functional component -->
<script setup lang="ts">
import BsTooltip from "~/components/BsTooltip/BsTooltip.vue";

const props = defineProps({
  title: { type: String, required: true },
  tooltip: { type: String, required: false },
  isLoaded: { type: Boolean, default: true },
});
</script>

<template>
  <div
    class="card p-0 border-0 h-100 shadow rounded"
    aria-label="chart wrapper"
    tabindex="0"
  >
    <div class="card-header d-flex flex-row justify-content-between">
      <div class="card-title text-capitalize">{{ props.title }}</div>
      <BsTooltip
        type="span"
        :options="{ title: props.tooltip }"
        v-if="props.tooltip"
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
  i {
    color: var(--bs-white);
  }
}
</style>
