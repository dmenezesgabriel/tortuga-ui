
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
        :layout="{type: 'grid'}"
    >
        <!-- Default -->
        <Variant
            title="Default"
            auto-props-disabled
            :init-state="initState"
        >
            <template #default="{state}">
                <BsTooltip :options="state.options">
                    <button class="btn btn-primary">Hover Me!</button>
                </BsTooltip>
            </template>
        </Variant>
        <!-- Default end -->
        <!-- Left -->
        <Variant
            title="Left"
            auto-props-disabled
            :init-state="initState"
        >
            <template #default="{state}">
                <BsTooltip :options="state.options">
                    <button class="btn btn-primary">Hover Me!</button>
                </BsTooltip>
            </template>
        </Variant>
        <!-- Left end -->
    </Story>
</template>

<docs lang="md">

# BsTooltip

As the name says a cue for the user to scroll down the page.

</docs>


