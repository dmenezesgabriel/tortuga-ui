<script setup lang="ts">
import { ref, useCssModule } from "vue";

useCssModule("classes");

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
  <div
    class="w-100 border border-light px-2 text-sm "
    :class="classes['tag-input']"
  >
    <!-- Tag -->
    <span
      v-for="(tag, index) in tags"
      :key="tag"
      class="d-flex align-items-center badge bg-primary float-start rounded "
      :class="classes['tag-input__tag']"
    >
      <span
        class="opacity-75 "
        :class="classes['tag-input__tag--icon']"
        @click="removeTag(index)"
      >
        <i class="bi bi-x-lg"></i>
      </span>
      <span
        class="mx-1 "
        :class="classes['tag-input__tag--text']"
      >
        {{ tag as string }}
      </span>
    </span>
    <!-- Tag end -->
    <input
      type="text"
      class="border-0 "
      :class="classes['tag-input__entry']"
      placeholder="Enter Tag..."
      @keydown="addTag"
      @keydown.delete="removeLastTag"
    />
  </div>
</template>

<style lang="scss" module="classes">
.tag-input {
  font-size: 0.9em;
  height: 50px;
  box-sizing: border-box;

  &__tag {
    height: 30px;
    margin-right: 10px;
    margin-top: 10px;
    line-height: 30px;
    padding: 0 5px;

    &--icon {
      cursor: pointer;
    }
  }

  &__entry {
    outline: none;
    font-size: 0.9em;
    line-height: 50px;
    background: none;
  }
}

// Dark mode
[data-mode="dark"] .darker {
  .tag-input {
    &__entry {
      color: var(--bs-white);
    }
  }
}
</style>