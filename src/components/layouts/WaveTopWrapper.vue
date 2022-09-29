<!-- TODO
Change to functional component
 -->
<script setup lang="ts">
import WaveUpRight from "@/components/waves/WaveUpRight";
</script>

<template>
  <div class="wave-top-section">
    <slot name="content"></slot>
    <WaveUpRight />
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/mixins" as mixin;
.wave-top-section {
  @include mixin.gradient;
}
</style>
