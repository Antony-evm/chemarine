<script setup lang="ts">
import SpaceComponent from './SpaceComponent.vue';
</script>
<template>
    <div class="w-full px-4 sm:px-8 md:px-16">
        <div class="w-full max-w-6xl mx-auto text-justify">
            <slot />
        </div>
    </div>
    <SpaceComponent size="paragraph" />
</template>
