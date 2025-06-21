<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const images = [
    {
        src: '/src/assets/frontpage/frontpage_1.jpg',
        alt: 'Crew member calibrating gas detector on deck at sunset',
        label: 'Calibrating Gas Detector'
    },
    {
        src: '/src/assets/frontpage/frontpage_2.jpg',
        alt: 'Marine safety equipment ready for inspection',
        label: 'Marine Safety Equipment'
    }
];

const currentIndex = ref(0);
const prevIndex = ref(0);
const fading = ref(false);
const loaded = ref(images.map(() => false));

let carouselTimeout: number | undefined = undefined;
const showTime = 5000;
const fadeTime = 1400;

function clearTimers() {
    if (carouselTimeout !== undefined) {
        window.clearTimeout(carouselTimeout);
        carouselTimeout = undefined;
    }
}

function preloadImages() {
    images.forEach((img, i) => {
        const im = new window.Image();
        im.onload = () => loaded.value[i] = true;
        im.src = img.src;
    });
}
preloadImages();

function scheduleNext() {
    clearTimers();
    carouselTimeout = window.setTimeout(() => {
        transitionToNextImage();
    }, showTime);
}

function transitionToNextImage() {
    // Start fade
    prevIndex.value = currentIndex.value;
    const next = (currentIndex.value + 1) % images.length;
    currentIndex.value = next;
    fading.value = true;
    const now = new Date().toLocaleTimeString();
    console.log(`${now} - Transitioning to image ${currentIndex.value}, fading is now true`);

    clearTimers();
    carouselTimeout = window.setTimeout(() => {
        fading.value = false;
        const now = new Date().toLocaleTimeString();
        console.log(`${now} - Fading complete for image ${currentIndex.value}, fading is now false`);
        scheduleNext(); // Only schedule the next transition **after** fade is finished
    }, fadeTime);
}

onMounted(() => {
    scheduleNext();
});

onUnmounted(() => {
    clearTimers();
});

// Keyboard nav: optional but robust (keeps only one transition in progress)
function onKey(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        clearTimers();
        prevIndex.value = currentIndex.value;
        if (e.key === 'ArrowLeft') {
            currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
        } else {
            currentIndex.value = (currentIndex.value + 1) % images.length;
        }
        fading.value = true;
        setTimeout(() => {
            fading.value = false;
            scheduleNext();
        }, fadeTime);
    }
}
onMounted(() => window.addEventListener('keydown', onKey));
onUnmounted(() => window.removeEventListener('keydown', onKey));
</script>


<template>
    <section class="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-black" role="region"
        aria-label="Slideshow of chemical marine inspections">
        <!-- Outgoing image, fading out -->
        <img v-if="fading && loaded[prevIndex]" :src="images[prevIndex].src" :alt="images[prevIndex].alt"
            class="absolute inset-0 w-full h-full object-cover transition-fade" :aria-hidden="fading ? 'false' : 'true'"
            :class="fading ? 'opacity-100 z-10' : 'opacity-0 z-0'" draggable="false" />

        <!-- Incoming image, fading in -->
        <img v-if="loaded[currentIndex]" :src="images[currentIndex].src" :alt="images[currentIndex].alt"
            class="absolute inset-0 w-full h-full object-cover transition-fade"
            :aria-hidden="!fading ? 'false' : 'true'" :class="fading ? 'opacity-0 z-20' : 'opacity-100 z-20'"
            draggable="false" />

        <div class="z-30 absolute inset-x-0 bottom-12 text-center text-white drop-shadow-lg pointer-events-none"
            aria-live="polite">
            <h1 class="text-3xl md:text-5xl font-bold">{{ images[currentIndex].label }}</h1>
            <p class="mt-2">Gas Detectors — Span Gases — Spare Parts</p>
        </div>

        <!-- Optional: Carousel indicators -->
        <div class="absolute left-0 right-0 bottom-4 flex justify-center gap-2 z-40" aria-label="Slideshow indicators">
            <button v-for="(img, i) in images" :key="img.src" class="w-3 h-3 rounded-full focus:ring-2 ring-white"
                :class="currentIndex === i ? 'bg-white' : 'bg-gray-500 opacity-70'"
                @click="() => { if (carouselTimeout) clearTimeout(carouselTimeout); prevIndex = currentIndex; currentIndex = i; fading = true; setTimeout(() => { fading = false; scheduleNext(); }, fadeTime); }"
                :aria-label="`Show slide ${i + 1}`" :aria-current="currentIndex === i ? 'true' : 'false'" />
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

.z-0 {
    z-index: 0;
}

.z-10 {
    z-index: 10;
}

.z-20 {
    z-index: 20;
}

.z-30 {
    z-index: 30;
}

.bg-black {
    background: #000;
}

button {
    border: none;
    outline: none;
}
</style>
