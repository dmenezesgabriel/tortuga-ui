
<script setup lang="ts">
import BsTooltip from '@/components/BsTooltip/BsTooltip.vue';

function initState() {
    return {
        options: { title: "This is a Tooltip" }
    }
}

const source = `
<div class="absolute-center">
    <BsTooltip :options="${initState().options}" />
</div>
`
</script>

<template>
    <Story
        icon="carbon:information"
        title="Bootstrap/BsTooltip"
        group="components"
        :source="source"
    >
        <Variant
            auto-props-disabled
            :init-state="initState"
        >
            <template #default="{state}">
                <div class="absolute-center">
                    <BsTooltip :options="state.options">
                        <button class="btn btn-primary">Hover Me!</button>
                    </BsTooltip>
                </div>
            </template>
        </Variant>
    </Story>
</template>

<docs lang="md">

# BsTooltip

As the name says a cue for the user to scroll down the page.

</docs>


