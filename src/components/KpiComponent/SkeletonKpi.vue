<script setup lang="ts">
import SkeletonBase from "@/components/SkeletonBase/SkeletonBase";
</script>
<template>
  <div class="card h-100 w-100 shadow kpi">
    <div class="card-body">
      <div class="d-flex flex-column alig-items-center text-center">
        <span class="fs-5">
          <SkeletonBase />
        </span>
        <div class="mt-1">
          <span>
            <SkeletonBase />
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
