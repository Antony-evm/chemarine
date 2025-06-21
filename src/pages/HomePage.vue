<script setup lang="ts">
import AboutComponent from '@/components/home_page/AboutComponent.vue';
import DetailedAboutComponent from '@/components/home_page/DetailedAboutComponent.vue';
import FlorencePicturesComponent from '@/components/home_page/FlorencePicturesComponent.vue';
</script>


<template>
    <FlorencePicturesComponent />
    <AboutComponent />
    <DetailedAboutComponent />
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
