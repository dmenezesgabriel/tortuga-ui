<script setup lang="ts">
/**
 * WIP
 * Use as reference
 * https://github.com/surmon-china/vue-codemirror
 * read
 * https://codemirror.net/docs/guide/
 */
import { onMounted, shallowRef, type PropType } from "vue";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";

const props = defineProps({
  text: { type: String, default: "" },
});

const emit = defineEmits(["change", "update", "focus", "blur", "ready"]);

const container = shallowRef<HTMLDivElement>();
const state = shallowRef<EditorState>();
const view = shallowRef<EditorView>();

onMounted(() => {
  state.value = EditorState.create({
    doc: props.text,
    extensions: [
      basicSetup,
      EditorView.updateListener.of((viewUpdate) => {
        emit("update", viewUpdate);

        if (viewUpdate.docChanged) {
          emit("change", viewUpdate.state.doc.toString(), viewUpdate);
        }
        if (viewUpdate.focusChanged) {
          viewUpdate.view.hasFocus
            ? emit("focus", viewUpdate)
            : emit("blur", viewUpdate);
        }
      }),
    ],
  });

  view.value = new EditorView({
    state: state.value,
    parent: container.value,
  });
});
</script>

<template>
  <div ref="container"></div>
</template>
