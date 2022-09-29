<!-- TODO
Change to functional component
 -->
<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
});
</script>

<template>
  <div class="intro bg-primary">
    <div class="container-fluid mb-3 p-3">
      <div class="row">
        <div class="col">
          <div class="dashboard-title d-flex flex-column">
            <div class="title-wrapper">
              <h1 class="text-white">{{ props.title }}</h1>
            </div>
            <hr style="width: 100px; height: 3px" class="bg-dark" />
            <small class="text-white">{{ props.subtitle }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/mixins" as mixin;

.intro {
  @include mixin.gradient;
}
</style>
