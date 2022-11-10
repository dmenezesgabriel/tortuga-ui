<script setup lang="ts">
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
 */
import { ref, onMounted } from "vue";

export interface Props {
  lang?: string; // en-US, pt-BR, ...
}

const props = defineProps<Props>();
const emit = defineEmits(["start", "stop", "result"]);

const isRecording = ref<boolean>(false);
const Recognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
const sr = new Recognition();

onMounted(() => {
  // Setup Speech Recognition
  sr.continuous = true;
  sr.interimResults = true;
  props.lang ? (sr.lang = props.lang) : null;

  // Events listeners
  sr.onstart = () => {
    emit("start");
    isRecording.value = true;
  };

  sr.onend = () => {
    emit("stop");
    isRecording.value = false;
  };

  sr.onresult = (event: any) => {
    for (let i = 0; i < event.results.length; i++) {
      const result = event.results[i];
      if (result.isFinal) emit("result", result);
    }

    const text = Array.from(event.results)
      .map((result: any) => result[0])
      .map((result) => result.transcript)
      .join("");
    emit("result", text);
  };
});
</script>

<template>
  <div type="button" role="button">
    <div v-if="!isRecording" @click="sr.start()"><i class="bi bi-mic"></i></div>
    <div v-else @click="sr.stop()"><i class="bi bi-mic-mute"></i></div>
  </div>
</template>
