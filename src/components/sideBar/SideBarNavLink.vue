<script setup lang="ts">
import { useCssModule } from "vue";

useCssModule("classes")

</script>
<template>
    <a
        href="#"
        :class="classes['nav-link']"
    >
        <span :class="classes['nav-link__icon']">
            <i class="bi bi-1-circle"></i>
        </span>
        <span :class="classes['nav-link__text']">
            Nav link text
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
</style>