<script setup lang="ts">
import BsTooltip from "@/components/BsTooltip/BsTooltip.vue";
import type { Tooltip } from "bootstrap";

export interface Props {
  tooltipOptions: Partial<Tooltip.Options>;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="card h-100 w-100 shadow kpi" tabindex="0">
    <div class="card-body">
      <div class="d-flex flex-column alig-items-center text-center">
        <span class="fs-5">
          <slot name="value"></slot>
        </span>
        <div class="d-flex flex-row justify-content-center align-items-center">
          <span class="fs-7" aria-hidden="true">
            <slot name="text"></slot>
          </span>
          <span class="mx-2" v-if="props.tooltipOptions">
            <BsTooltip :options="props.tooltipOptions">
              <i
                class="bi bi-info-circle"
                role="img"
                aria-label="info icon"
              ></i>
            </BsTooltip>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// TODO
// Use scss module
@use "@/assets/scss/variables";

.kpi {
  border: none;
  border-right: 3px solid var(--bs-secondary);
}

[data-mode="dark"] .dark {
  .kpi {
    border: none;
    background: linear-gradient(
      to right,
      rgba(variables.$dark-alt, 0.95),
      rgba(variables.$primary, 0.95)
    );
  }
}
</style>
