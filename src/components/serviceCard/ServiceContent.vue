<script setup lang="ts">
import ButtonCallToAction from "@/components/buttons/ButtonCallToAction";

const props = defineProps({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  buttonText: { type: String, required: true },
  buttonTo: { type: String, required: true },
});
</script>

<template>
  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
    <div class="services__content">
      <i class="icon d-block" :class="props.icon"></i>
      <h3 class="display-3--title mt-1">{{ props.title }}</h3>
      <p class="lh-lg">
        <slot></slot>
      </p>
      <ButtonCallToAction :text="props.buttonText" :to="props.buttonTo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/custom";

.services {
  position: relative;
  padding: 1rem 0;

  &__content {
    padding: 1rem;
    margin-top: 0;

    p {
      font-size: 0.8rem;

      @include custom.media-breakpoint-up(lg) {
        font-size: 1rem;
      }
    }

    @include custom.media-breakpoint-up(lg) {
      margin-top: 5rem;
    }

    .icon {
      font-size: 1.5rem;
      color: var(--bs-primary);

      @include custom.media-breakpoint-up(lg) {
        font-size: 2.5rem;
      }
    }
  }
}
</style>
