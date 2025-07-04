<script setup lang="ts">
import { useCarousel } from '@/composables/home_page/useFlorencePictures';
import frontpage1 from '@/assets/frontpage/frontpage_1.jpg';
import frontpage2 from '@/assets/frontpage/frontpage_2.jpg';
import frontpage1webp from '@/assets/frontpage/frontpage_1.webp';
import frontpage2webp from '@/assets/frontpage/frontpage_2.webp';
import OptimizedImage from '@/components/utils/OptimizedImage.vue';
import { COMPANY_NAME } from '@/data/contactInformation';

const images = [
    { srcSet: frontpage1webp, src: frontpage1, alt: 'Crew member calibrating gas detector on deck at sunset' },
    { srcSet: frontpage2webp, src: frontpage2, alt: 'Marine safety equipment ready for inspection' },
];

const {
    currentIndex,
    nextIndex,
    fading,
    isPaused,
    loadErrors,
    onLoad,
    onError,
    shouldShow,
    goTo,
    toggle,
} = useCarousel(images);
</script>

<template>
    <section class="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-black" role="region"
        aria-label="Hero slideshow" aria-live="polite" aria-atomic="true">
        <button type="button" @click="toggle()"
            class="absolute bottom-4 left-4 z-50 bg-black/50 text-warm_white px-3 py-2 rounded hover:bg-black/70 transition-colors"
            :aria-label="isPaused ? 'Resume slideshow' : 'Pause slideshow'">
            {{ isPaused ? '▶' : '⏸' }}
        </button>

        <!-- Current Image -->
        <OptimizedImage v-if="shouldShow(currentIndex)" :srcSet="images[currentIndex].srcSet"
            :src="images[currentIndex].src" :alt="images[currentIndex].alt"
            imgClass="absolute inset-0 w-full h-full object-cover brightness-75 aspect-[16/9]" loading="eager"
            fetchpriority="high" width="1366" height="768" @load="onLoad(currentIndex)"
            @error="onError(currentIndex)" />

        <!-- Error Fallback -->
        <div v-if="loadErrors[currentIndex]"
            class="absolute inset-0 w-full h-full bg-gradient-to-b from-[#165482] via-[#189ab4] to-[#83c5be] flex items-center justify-center">
            <div class="text-center text-warm_white">
                <h2>Image Loading Error</h2>
                <p>Unable to load slideshow image</p>
            </div>
        </div>

        <!-- Next & Fade Layers -->
        <img v-if="fading && nextIndex !== null && shouldShow(nextIndex)" :src="images[nextIndex].src"
            :alt="images[nextIndex].alt"
            class="absolute inset-0 w-full h-full object-cover brightness-75 transition-fade animate-fade-in z-20"
            aria-hidden="true" @load="onLoad(nextIndex)" @error="onError(nextIndex)" />

        <img v-if="fading && shouldShow(currentIndex)" :src="images[currentIndex].src" :alt="images[currentIndex].alt"
            class="absolute inset-0 w-full h-full object-cover brightness-75 transition-fade animate-fade-out z-10"
            aria-hidden="true" @load="onLoad(currentIndex)" @error="onError(currentIndex)" />

        <!-- Overlay Text -->
        <div class="z-30 absolute inset-x-0 flex items-center justify-center pointer-events-none">
            <div class="bg-charcoal/40 backdrop-blur-sm rounded-lg px-8 py-6 text-center border border-warm_white/20">
                <h1 class="uppercase text-warm_white">{{ COMPANY_NAME }}</h1>
                <p class="mt-2 text-warm_white">Gas Detectors — Span Gases — Spare Parts</p>
            </div>
        </div>

        <!-- Indicators -->
        <div class="absolute bottom-4 left-1/2 z-50 flex space-x-2" style="transform: translateX(calc(-50% + 2rem));">
            <button v-for="(img, idx) in images" :key="idx" type="button" @click="goTo(idx)"
                class="w-3 h-3 rounded-full border-2 border-warm_white hover:border-warm_white/80"
                :class="{ 'bg-warm_white': idx === currentIndex, 'bg-transparent': idx !== currentIndex }"
                :aria-label="`Go to slide ${idx + 1}: ${img.alt}`" />
        </div>
    </section>
</template>


<style scoped>
.transition-fade {
    transition: opacity 2s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: opacity;
    backface-visibility: hidden;
}
</style>
