<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Import image assets
import frontpage1 from '@/assets/frontpage/frontpage_1.jpg';
import frontpage2 from '@/assets/frontpage/frontpage_2.jpg';

const images = [
    {
        src: frontpage1,
        alt: 'Crew member calibrating gas detector on deck at sunset',
    },
    {
        src: frontpage2,
        alt: 'Marine safety equipment ready for inspection',
    }
];

const currentIndex = ref(0);
const nextIndex = ref<number | null>(null);
const fading = ref(false);

let carouselTimeout: number | undefined;
const showTime = 5000;
const fadeTime = 2000;

function clearTimers() {
    if (carouselTimeout !== undefined) {
        clearTimeout(carouselTimeout);
        carouselTimeout = undefined;
    }
}

function scheduleNext() {
    clearTimers();
    carouselTimeout = window.setTimeout(transitionToNextImage, showTime);
}

function transitionToNextImage() {
    nextIndex.value = (currentIndex.value + 1) % images.length;
    fading.value = true;

    clearTimers();
    carouselTimeout = window.setTimeout(() => {
        if (nextIndex.value !== null) {
            currentIndex.value = nextIndex.value;
            nextIndex.value = null;
        }
        fading.value = false;
        scheduleNext();
    }, fadeTime);
}

onMounted(() => scheduleNext());
onUnmounted(() => clearTimers());
</script>

<template>
    <section class="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-black" role="region"
        aria-label="Slideshow of chemical marine inspections">
        <img :src="images[currentIndex].src" :alt="images[currentIndex].alt"
            class="absolute inset-0 w-full h-full object-cover" aria-hidden="true" />

        <img v-if="fading && nextIndex !== null" :src="images[nextIndex].src" :alt="images[nextIndex].alt"
            class="absolute inset-0 w-full h-full object-cover transition-fade"
            :class="fading ? 'opacity-0 z-20 animate-fade-in' : ''" aria-hidden="true" />

        <img v-if="fading" :src="images[currentIndex].src" :alt="images[currentIndex].alt"
            class="absolute inset-0 w-full h-full object-cover transition-fade"
            :class="fading ? 'opacity-100 z-10 animate-fade-out' : ''" aria-hidden="true" />

        <div class="z-30 absolute inset-x-0 text-center drop-shadow-lg pointer-events-none">
            <h1 class="uppercase">
                Chemical Marine Inspections
            </h1>
            <p class="mt-2">Gas Detectors — Span Gases — Spare Parts</p>
        </div>
    </section>
</template>

<style scoped>
.transition-fade {
    transition: opacity 2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity;
    backface-visibility: hidden;
}

.animate-fade-in {
    animation: fadeIn 2s forwards;
}

.animate-fade-out {
    animation: fadeOut 2s forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

.z-10 {
    z-index: 10;
}

.z-20 {
    z-index: 20;
}

.bg-black {
    background: #000;
}
</style>
