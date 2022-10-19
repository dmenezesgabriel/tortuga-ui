<template>
  <div class="gradient bg-primary">
    <div class="container-fluid mb-3 p-3">
      <div class="row">
        <div class="col">
          <div class="dashboard-title d-flex flex-column">
            <div class="title-wrapper">
              <h1 class="text-white">
                <slot name="title"></slot>
              </h1>
            </div>
            <hr style="width: 100px; height: 3px" class="bg-dark" />
            <small class="text-white">
              <slot name="subtitle"></slot>
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/variables";
.gradient {
  background: linear-gradient(
    to right,
    rgba(variables.$dark-alt, 0.95),
    rgba(variables.$primary, 0.95)
  );
}
</style>
