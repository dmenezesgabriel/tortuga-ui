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
    position: fixed;
    background-color: var(--bs-dark);
}

.navbar {
    top: 0;
    width: 5rem;
    height: 600px;
}

.navbar:hover {
    width: 16rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
}
</style>