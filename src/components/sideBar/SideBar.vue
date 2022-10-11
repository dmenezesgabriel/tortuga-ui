<script setup lang="ts">
import { useCssModule, computed } from "vue";

useCssModule("classes")

const props = defineProps({
    smallScreenPlacement: {
        type: String,
        required: false,
        default: "bottom",
        validator: (value: string) => ["top", "bottom"].includes(value)
    }
})

const style = computed(() => {
    let style: any = {}
    style[props.smallScreenPlacement] = 0
    return style
})

</script>
<template>
    <nav
        :class="classes['navbar']"
        :style="style"
    >
        <slot></slot>
    </nav>
</template>
<style lang="scss" module="classes">
.navbar {
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
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
}
</style>