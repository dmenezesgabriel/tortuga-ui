
<script setup lang="ts">
import ButtonCallToAction from '@/components/ButtonCallToAction/ButtonCallToAction';

function initState() {
    return {
        text: "Learn More",
    }
}
</script>

<template>
    <Story
        icon="carbon:button-centered"
        title="Buttons/ButtonCallToAction"
        group="components"
        :init-state="initState"
    >
        <!-- Controls -->
        <template #controls="{state}">
            <HstText
                type="text"
                v-model="state.text"
                title="Text"
            />
        </template>
        <!-- Controls end -->
        <template #default="{state}">
            <div class="absolute-center">
                <ButtonCallToAction :text="state.text" />
            </div>
        </template>
    </Story>
</template>