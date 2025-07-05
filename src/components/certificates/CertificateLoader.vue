<script setup lang="ts">
import { defineProps } from 'vue';
import OptimizedImage from '@/components/utils/OptimizedImage.vue';

const props = defineProps<{
    src: string;
    srcSet: string;
    alt: string;
    pdf: string;
    width: string;
    height: string;
}>();

function openPdf() {
    window.open(props.pdf, '_blank');
}
</script>

<template>
    <div class="certificate-loader">
        <button type="button" @click="openPdf"
            class="cursor-pointer transition-transform hover:scale-105 border-none bg-transparent p-0"
            :aria-label="`Open ${alt} PDF document in new window`">
            <OptimizedImage :src-set="props.srcSet" :src="props.src" :alt="props.alt" :width="props.width"
                :height="props.height" imgClass="object-contain" loading="lazy" />
        </button>
    </div>
</template>

<style scoped>
.certificate-loader {
    display: flex;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
}
</style>
