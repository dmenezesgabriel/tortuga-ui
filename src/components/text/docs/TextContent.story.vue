<script setup lang="ts">
import TextContent from '../TextContent';

function initState() {
    return {
        type: "h1",
        content: "Hello, World!"
    }
}

</script>
<template>
    <Story
        title="Text Content"
        :layout="{type: 'single', iframe: true}"
    >
        <!-- Controls -->
        <template #controls="{state}">
            <HstText
                type="text"
                v-model="state.type"
                title="Type"
            />
            <HstText
                type="text"
                v-model="state.content"
                title="Content"
            />
        </template>
        <!-- Controls end -->
        <!-- Default variant -->
        <Variant
            title="Default"
            group="Text"
            :init-state="initState"
        >
            <template #default="{state}">

                <TextContent :type="state.type">
                    {{state.content}}
                </TextContent>
            </template>
            <!-- Default variant end -->
        </Variant>
    </Story>
</template>