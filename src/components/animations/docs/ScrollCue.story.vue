<script setup lang="ts">
import ScrollCue from '@/components/animations/ScrollCue';

function initState() {
    return {
        color: "black",
    }
}
</script>

<template>
    <Story
        icon="carbon:wind-stream"
        title="Animations/ScrollCue"
        group="components"
        :init-state="initState"
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