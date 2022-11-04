<script setup lang="ts">
import { ref } from "vue";
import { CodeMirror, MarkdownText } from "~/components";

const text = ref<string>(`
# Markdown Editor

## Description

Here you can type **what ever** you _want_ in markdown,
then it will be render on the preview.

`);
</script>
<template>
  <div class="container">
    <div class="row g-3">
      <div class="col">
        <CodeMirror :text="text" @change="(input) => (text = input)" />
      </div>
      <div class="col">
        <div class="border border-rpimary rounded p-3 h-100 w-100">
          <MarkdownText :markdown="text" />
        </div>
      </div>
    </div>
  </div>
</template>
