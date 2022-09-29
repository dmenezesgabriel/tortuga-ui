<!-- TODO
Fix when height is 100vh
 -->
<script setup lang="ts">
import { onMounted, ref } from "vue";

const isTop = ref<boolean>(true);
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

onMounted(() => {
  // TODO
  // Use vue roter scroll to top to fix this
  // https://router.vuejs.org/guide/advanced/scroll-behavior.html
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 100) {
      isTop.value = false;
    } else {
      isTop.value = true;
    }
  });
});
</script>

<template>
  <button
    role="button"
    class="shadow btn-primary rounded-circle back-to-top"
    @click="scrollToTop"
    v-show="!isTop"
  >
    <i class="bi bi-chevron-up"></i>
  </button>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/abstracts/mixins" as mixins;

.back-to-top {
  position: fixed;
  width: 3rem;
  height: 3rem;
  right: 1.875rem;
  bottom: 1.875rem;
  z-index: 9999;

  i {
    color: var(--bs-white);
    font-size: 1rem;

    @include mixins.absoluteCenter;
  }
}
</style>
