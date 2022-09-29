<!-- TODO
Change to functional component
 -->
<script setup lang="ts">
import WaveUpLeft from "@/components/waves/WaveUpLeft";
import WaveDownLeft from "@/components/waves/WaveDownLeft";

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});
</script>

<template>
  <div class="wave-center">
    <WaveUpLeft :fill="'#fff'" />
    <div class="container">
      <div class="row text-center">
        <h2 class="display-3 fw-bold text-uppercase text-white">
          {{ props.title }}
        </h2>
        <hr style="width: 100px; height: 3px" class="mx-auto bg-white" />
        <p class="lead text-white">{{ props.subtitle }}</p>
      </div>
    </div>
    <slot name="content"></slot>
    <WaveDownLeft />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/mixins" as mixin;
.wave-center {
  position: relative;
  padding: 0;
  @include mixin.gradient;
}
</style>
