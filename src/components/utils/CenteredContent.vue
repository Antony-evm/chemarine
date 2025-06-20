<script setup lang="ts">
import SpaceComponent from './SpaceComponent.vue';
</script>
<template>
    <div class="w-full flex justify-center">
        <div class="max-w-5xl w-full text-justify">
            <slot />
        </div>
    </div>
    <SpaceComponent size="paragraph" />
</template>
