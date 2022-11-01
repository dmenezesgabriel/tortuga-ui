<script setup lang="ts">
/**
 * @see https://codemirror.net/docs/guide/
 * WIP
 * Use as reference
 * https://github.com/surmon-china/vue-codemirror
 * read
 */

import { onBeforeMount, onMounted, shallowRef, withDefaults } from "vue";
import { EditorState, type EditorStateConfig } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";

export interface Props {
  text: string;
  extensions?: EditorStateConfig["extensions"];
}
const props = withDefaults(defineProps<Props>(), {
  text: "",
});

const emit = defineEmits(["change", "update", "focus", "blur", "ready"]);

const container = shallowRef<HTMLDivElement>();
const state = shallowRef<EditorState>();
const view = shallowRef<EditorView>();

onMounted(() => {
  state.value = EditorState.create({
    doc: props.text,
    extensions: [
      ...(Array.isArray(props.extensions) ? props.extensions : [basicSetup]),
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

onBeforeMount(() => {
  if (view.value) {
    view.value.destroy();
  }
});
</script>

<template>
  <div ref="container"></div>
</template>
