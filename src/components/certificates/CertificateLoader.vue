<script setup lang="ts">
import { defineProps } from 'vue';

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
    <div class="certificate-loader">
        <button type="button" @click="openPdf"
            class="certificate-image cursor-pointer transition-transform hover:scale-105 border-none bg-transparent p-0"
            :aria-label="`Open ${alt} PDF document in new window`">
            <img :src="src" :alt="alt" class="w-full h-auto object-contain" loading="lazy" draggable="false" />
        </button>
    </div>
</template>

<style scoped>
.certificate-loader {
    @apply flex justify-center px-4
}

.certificate-image {
    @apply flex-shrink-0 flex w-[100px] sm:w-[150px] md:w-[200px] border-2 border-gray-300 rounded-lg overflow-hidden shadow-sm transform transition-transform duration-200 hover:scale-105
}
</style>
