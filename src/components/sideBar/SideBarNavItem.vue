<script setup lang="ts">
import { useCssModule } from "vue";

useCssModule("classes")

</script>

<template>
    <li :class="classes['nav-item']">
        <slot></slot>
    </li>
</template>

<style lang="scss" module="classes">
.nav-item {
    width: 100%;
}
</style>