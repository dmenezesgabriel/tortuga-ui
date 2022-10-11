<script setup lang="ts">
import { useCssModule } from "vue";

useCssModule("classes")

</script>

<template>
    <ul :class="classes['navbar-nav']">
        <slot></slot>
    </ul>
</template>

<style lang="scss" module="classes">
.navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

/* Small Screens */
@media only screen and (max-width: 600px) {
    .navbar-nav {
        flex-direction: row;
    }
}
</style>