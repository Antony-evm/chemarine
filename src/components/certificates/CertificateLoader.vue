<script setup lang="ts">
import { defineProps } from 'vue';
import SpaceComponent from '../utils/SpaceComponent.vue';

const props = defineProps<{
    src: string;
    alt: string;
    pdf: string;
}>();

function openPdf() {
    window.open(props.pdf, '_blank');
}
</script>

<template>
    <div class="certificate-loader w-full">
        <img :src="src" :alt="alt" loading="lazy" width="200" height="100"
            class="certificate-image cursor-pointer transition-transform hover:scale-105" @click="openPdf"
            draggable="false" />
    </div>
    <SpaceComponent size="paragraph" />
</template>

<style scoped>
.certificate-loader {
    display: flex;
    margin: 1rem;
}

.certificate-image {
    max-width: 50rem;
    border: 2px solid #e2e8f0;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
}
</style>
