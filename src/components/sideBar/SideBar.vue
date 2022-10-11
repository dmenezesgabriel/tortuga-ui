<script setup lang="ts">
import { useCssModule } from "vue";

useCssModule("classes")

</script>
<template>
    <nav :class="classes['navbar']">
        <slot></slot>
    </nav>
</template>
<style lang="scss" module="classes">
.navbar {
    left: 0;
    position: fixed;
    background-color: var(--bs-dark);
}


// Small Screens
@media only screen and (max-width: 600px) {
    .navbar {
        border-top: 1px solid var(--bs-dark);
        bottom: 0;
        width: 100vw;
        height: 5rem;
    }
}

// Large Screens
// Could use bootstrap breakpoints?
@media only screen and (min-width: 600px) {
    .navbar {
        top: 0;
        width: 5rem;
        height: 600px;
    }

    .navbar:hover {
        width: 16rem;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    }
}
</style>