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
        group="animations"
        :init-state="initState"
    >
        <template #default="{state}">
            <div class="absolute-center">
                <ScrollCue :color="state.color" />
            </div>
        </template>
    </Story>
</template>