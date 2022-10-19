<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const switchRef = ref<any>(null);

const emit = defineEmits(["mode-change"]);

const isDark = ref<Boolean>();

const setIsDark = (value: Boolean) => {
  if (value === true) {
    isDark.value = true;
    document.documentElement.setAttribute("data-mode", "dark");
    //TODO
    // Separate contexts and responsabilities, modes should be dark or light,
    // Themes can have light or dark mode, but are different than modes.
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("preferredDarkMode", "true");
  } else {
    isDark.value = false;
    document.documentElement.removeAttribute("data-mode");
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("preferredDarkMode", "false");
  }
  emit("mode-change", { preferredDarkMode: value });
};

const toggleMode = () => {
  setIsDark(!isDark.value);
};

onMounted(() => {
  if (localStorage.getItem("preferredDarkMode")) {
    if (localStorage.getItem("preferredDarkMode") === "true") {
      nextTick(() => {
        setIsDark(true);
      });
    } else if (localStorage.getItem("preferredDarkMode") === "false") {
      nextTick(() => {
        setIsDark(false);
      });
    }
  } else {
    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        nextTick(() => {
          setIsDark(true);
        });
      } else if (!window.matchMedia("(prefers-color-scheme: dark)").matches) {
        nextTick(() => {
          setIsDark(false);
        });
      }
    }
  }
});
</script>

<template>
  <div class="mx-auto my-3">
    <div
      ref="switchRef"
      class="d-flex flex-column text-center justify-content-center rounded-circle text-white toggle"
      @click="toggleMode"
    >
      <div v-if="!isDark"><i class="bi bi-moon"></i></div>
      <div v-else><i class="bi bi-brightness-high"></i></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.toggle {
  background-color: var(--bs-dark-alt);
  width: 30px;
  height: 30px;
  i {
    font-size: 1rem;
  }
}
</style>
