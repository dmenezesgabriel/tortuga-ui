<script setup lang="ts">
import { useCssModule, inject, computed, type Ref } from "vue";

useCssModule("classes")

const sidebarExpanded: Ref<Boolean> | undefined = inject("sidebarExpanded")
const display = computed(() => sidebarExpanded?.value ? "inline" : "none")

</script>
<template>
    <a
        href="#"
        :class="classes['nav-link']"
    >
        <span :class="classes['nav-link__icon']">
            <slot name="icon"></slot>
        </span>
        <span :class="classes['nav-link__text']">
            <slot name="text"></slot>
        </span>
    </a>
</template>
<style lang="scss" module="classes">
.nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: white;
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: 600ms;

    &:hover {
        filter: grayscale(0%) opacity(1);
        background: var(--bs-dark-alt);
        color: white;
    }

    &__icon {
        text-align: center;
        width: 2rem;
        margin: 0 1.5rem;
    }

    &__text {
        display: none;
        margin-left: 1rem;
    }
}

// Small Screens
@media only screen and (max-width: 600px) {
    .nav-link {
        justify-content: center;
    }
}


@media only screen and (min-width: 600px) {
    .nav-link {
        &__text {
            display: v-bind(display);
        }
    }
}
</style>