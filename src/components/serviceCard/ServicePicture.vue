<script setup lang="ts">
const props = defineProps({
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, required: true },
  imagePosition: { type: String, required: true },
});
</script>

<template>
  <div
    class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4"
    :class="props.imagePosition ? `text-${props.imagePosition}` : 'text-end'"
  >
    <div class="services__picture">
      <img :src="props.imageSrc" :alt="props.imageAlt" class="img-fluid" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.services {
  position: relative;
  padding: 1rem 0;

  &__picture {
    max-width: 100%;
  }
}
</style>
