<script setup lang="ts">
import ScrollCue from '@/components/ScrollCue/ScrollCue';

function initState() {
    return {
        color: "black",
    }
}

const source = `
<div class="absolute-center">
    <ScrollCue :color="${initState().color}" />
</div>
`
</script>

<template>
    <Story
        icon="carbon:wind-stream"
        title="Animations/ScrollCue"
        group="components"
        :init-state="initState"
        :source="source"
    >
        <!-- Controls -->
        <template #controls="{state}">
            <HstText
                type="text"
                v-model="state.color"
                title="Color"
            />
        </template>
        <!-- Controls end -->
        <template #default="{state}">
            <div class="absolute-center">
                <ScrollCue :color="state.color" />
            </div>
        </template>
    </Story>
</template>

<docs lang="md">

# ScrollCue

As the name says a cue for the user to scroll down the page.

</docs>

r
