<script setup lang="ts">
import { ref } from "vue";
const tags = ref<Array<string>>([]);

const addTag = (event: any) => {
  if (event.code == "Comma" || event.code == "Enter") {
    event.preventDefault();
    const value = (event.target as HTMLInputElement).value.trim();

    if (value.length > 0) {
      tags.value.push(value);
      (event.target as HTMLInputElement).value = "";
    }
  }
};

const removeTag = (index: number) => {
  tags.value.splice(index, 1);
};

const removeLastTag = (event: any) => {
  if ((event.target as HTMLInputElement).value.length === 0) {
    removeTag(tags.value.length - 1);
  }
};
</script>

<template>
  <div class="w-100 border border-light px-2 text-sm tag-input">
    <!-- Tag -->
    <span
      v-for="(tag, index) in tags"
      :key="tag"
      class="d-flex align-items-center badge bg-primary float-start rounded tag-input__tag"
    >
      <span class="opacity-75 tag-input__tag--icon" @click="removeTag(index)">
        <i class="bi bi-x-lg"></i>
      </span>
      <span class="mx-1 tag-input__tag--text">
        {{ tag as string }}
      </span>
    </span>
    <!-- Tag end -->
    <input
      type="text"
      class="border-0 tag-input__entry"
      placeholder="Enter Tag..."
      @keydown="addTag"
      @keydown.delete="removeLastTag"
    />
  </div>
</template>
