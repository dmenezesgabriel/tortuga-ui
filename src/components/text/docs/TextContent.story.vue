<script setup lang="ts">
import TextContent from '../TextContent';
import { reactive } from 'vue';

const state = reactive({
    type: "h1",
    content: "Hello, World!"
})

</script>
<template>
    <Story
        title="Text Content"
        :layout="{type: 'single', iframe: true}"
    >
        <Variant
            title="Default"
            group="Text"
        >
            <TextContent :type="state.type">
                {{state.content}}
            </TextContent>
        </Variant>
    </Story>
</template>