<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const images = [
    '/src/assets/frontpage/frontpage_1.jpg',
    '/src/assets/frontpage/frontpage_2.jpg'
];

const currentIndex = ref(0);
const prevIndex = ref(0);
const fading = ref(false);
let carouselTimeout: number | undefined;
const showTime = 5000;
const fadeTime = 1400;

function runCarousel() {
    carouselTimeout = window.setTimeout(() => {
        prevIndex.value = currentIndex.value;
        const next = (currentIndex.value + 1) % images.length;
        currentIndex.value = next;
        fading.value = true;
        carouselTimeout = window.setTimeout(() => {
            fading.value = false;
            runCarousel();
        }, fadeTime);
    }, showTime);
}

onMounted(() => {
    runCarousel();
});

onUnmounted(() => {
    if (carouselTimeout) clearTimeout(carouselTimeout);
});
</script>


<template>
    <section class="relative h-screen w-screen flex items-center justify-center">
        <!-- Old image (fades out) -->
        <div v-if="fading" class="absolute inset-0 bg-cover bg-center transition-fade"
            :style="{ backgroundImage: `url('${images[prevIndex]}')` }"
            :class="{ 'opacity-100': fading, 'opacity-0': !fading }"></div>
        <!-- Current image (fades in) -->
        <div class="absolute inset-0 bg-cover bg-center transition-fade"
            :style="{ backgroundImage: `url('${images[currentIndex]}')` }"
            :class="{ 'opacity-0': fading, 'opacity-100': !fading }"></div>
        <div class="z-10 text-center">
            <h1>Chemical Marine Inspections</h1>
            <p>Gas Detectors — Span Gases — Spare Parts</p>
        </div>
    </section>
</template>

<style scoped>
.transition-fade {
    transition: opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity;
    backface-visibility: hidden;
}

.opacity-100 {
    opacity: 1;
}

.opacity-0 {
    opacity: 0;
}

.scale-100 {
    transform: scale(1);
}

.scale-105 {
    transform: scale(1.05);
}
</style>
