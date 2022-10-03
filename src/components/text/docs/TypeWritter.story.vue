<!-- Meow.story.vue -->
<script setup lang="ts">
import TypeWritter from '../TypeWritter.vue';
import { reactive } from '@vue/reactivity';

const state = reactive({
    phrases: "Hello, World!"
})
</script>
<template>
    <Story
        title="Type Writter"
        :layout="{type: 'single', iframe: true}"
    >
        <!-- Controls -->
        <template #controls>
            <HstText
                type="text"
                v-model="state.phrases"
                title="Phrases"
            />
        </template>
        <!-- Controls end -->

        <Variant
            title="Default"
            group="Text"
        >
            <TypeWritter :phrases="[state.phrases]" />
        </Variant>
    </Story>
</template>
