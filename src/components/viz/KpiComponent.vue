<script setup lang="ts">
import Tooltip from "@/components/tooltip/TooltipComponent.vue";

const props = defineProps({
  text: { type: String, required: true },
  value: { type: String, required: true },
  tooltip: { type: String, required: false },
});
</script>

<template>
  <div
    class="card h-100 w-100 shadow kpi"
    :aria-label="props.text"
    tabindex="0"
  >
    <div class="card-body">
      <div class="d-flex flex-column alig-items-center text-center">
        <span class="fs-5">{{ props.value }}</span>
        <div class="d-flex flex-row justify-content-center align-items-center">
          <span class="fs-7" aria-hidden="true">{{ props.text }}</span>
          <span class="mx-2" v-if="props.tooltip">
            <Tooltip :text="props.tooltip">
              <i
                class="bi bi-info-circle"
                role="img"
                aria-label="info icon"
              ></i>
            </Tooltip>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/scss/abstracts/mixins";

.kpi {
  border: none;
  border-right: 3px solid var(--bs-secondary);
}

[data-mode="dark"] .darker {
  .kpi {
    border: none;
    @include mixins.gradient;
  }
}
</style>
