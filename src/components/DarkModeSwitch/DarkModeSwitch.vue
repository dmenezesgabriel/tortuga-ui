<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue";
const switchRef = ref<any>(null);

const emit = defineEmits(["mode-change"]);

const isDark = ref<Boolean>();

//TODO
// Separate contexts and responsabilities, modes should be dark or light,
// Themes can have light or dark mode, but are different than modes.

const setIsDark = (value: Boolean) => {
  if (value === true) {
    isDark.value = true;
    document.documentElement.removeAttribute("data-mode");
    document.documentElement.setAttribute("data-mode", "dark");
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    localStorage.setItem("preferredDarkMode", "true");
  } else {
    isDark.value = false;
    document.documentElement.removeAttribute("data-mode");
    document.documentElement.setAttribute("data-mode", "light");
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
  <div
    ref="switchRef"
    class="d-flex flex-column text-center justify-content-center rounded-circle text-white toggle"
    @click="toggleMode"
  >
    <div id="darkModeToggle" v-if="!isDark" type="button" role="button">
      <i class="bi bi-moon toggle-mode"></i>
    </div>
    <div id="lightModeToggle" v-else type="button" role="button">
      <i class="bi bi-brightness-high toggle-mode"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// TODO
// Use css module
.toggle {
  background-color: var(--bs-dark-alt);
  width: 30px;
  height: 30px;
  i {
    font-size: 1rem;
  }
}
</style>
