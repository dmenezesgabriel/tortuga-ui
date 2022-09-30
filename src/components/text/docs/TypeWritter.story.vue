<!-- Meow.story.vue -->
<script setup lang="ts">
import TypeWritter from '../TypeWritter.vue';

</script>
<template>
    <Story>
        <Variant title="Default">
            <TypeWritter :phrases="['Hello']" />
        </Variant>
    </Story>
</template>
