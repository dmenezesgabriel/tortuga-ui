<script setup lang="ts">
import { onMounted, ref, type PropType } from "vue";

const props = defineProps({
  phrases: { type: Array as PropType<Array<string>>, required: true },
});

const phrasesCount = ref<number>(0);
const phraseIndex = ref<number>(0);
const currentPhrase = ref<string>("");
const letter = ref<string>("");
const textDisplay = ref<HTMLElement | null>(null);

const type = (): void => {
  /**
   * Typewritter effect
   * @returns {void}
   */
  if (phrasesCount.value === props.phrases.length) {
    phrasesCount.value = 0;
  }
  currentPhrase.value = props.phrases[phrasesCount.value];
  letter.value = currentPhrase.value.slice(0, ++phraseIndex.value);
  if (textDisplay.value) textDisplay.value.textContent = letter.value;
  if (letter.value.length === currentPhrase.value.length) {
    phrasesCount.value++;
    phraseIndex.value = 0;
  }
  setTimeout(type, 300);
};

onMounted(() => {
  type();
});
</script>

<template>
  <span ref="textDisplay" class="typing"></span>
</template>

<style lang="scss" scoped>
.typing {
  position: relative;

  &::after {
    content: "";
    width: 1px;
    height: 100%;
    border-right: 2px solid var(--bs-gray-500);
    animation: blink 0.8s infinite ease;
  }
}

@keyframes blink {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

[data-mode="dark"] .dark {
  .typing {
    color: var(--bs-white);

    &::after {
      border-right: 2px solid var(--bs-white);
    }
  }
}
</style>
