<!-- TODO
Create functional text components with title, this component is not needed
 -->
<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  titleSize: { type: String, required: false },
});
</script>

<template>
  <div class="container">
    <div class="row text-center">
      <h3 class="fw-bold lead mb-3" v-if="props.titleSize === 'sm'">
        {{ props.title }}
      </h3>
      <h2 class="display-3 fw-bold text-capitalize" v-else>
        {{ props.title }}
      </h2>
      <div class="heading-line"></div>
      <p class="lh-lg">
        <slot name="subtitle"></slot>
      </p>
    </div>
    <slot name="content"></slot>
  </div>
</template>
