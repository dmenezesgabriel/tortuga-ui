
<script setup lang="ts">
import BsTooltip from '@/components/BsTooltip/BsTooltip.vue';

function initDefaultState() {
    return {
        options: { title: "This is a Tooltip" }
    }
}

function initLeftState() {
    return {
        options: { title: "This is a Tooltip", placement: "left" }
    }
}

const source = `
<div class="absolute-center">
    <BsTooltip :options="${JSON.stringify(initDefaultState().options)}" />
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
            :init-state="initDefaultState"
        >
            <template #default="{state}">
                <BsTooltip :options="state.options">
                    <button class="btn btn-primary">Tooltip Top</button>
                </BsTooltip>
            </template>
        </Variant>
        <!-- Default end -->
        <!-- Left -->
        <Variant
            title="Left"
            auto-props-disabled
            :init-state="initLeftState"
        >
            <template #default="{state}">
                <BsTooltip :options="state.options">
                    <button class="btn btn-primary">Tooltip Left</button>
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


