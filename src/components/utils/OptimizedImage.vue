<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    srcSet: string;
    src: string;
    alt: string;
    width: string;
    height: string;
    imgClass?: string;
    loading?: 'lazy' | 'eager';
    fetchpriority?: 'high' | 'low';
}>();

</script>

<template>
    <picture>
        <source :srcset="srcSet" type="image/webp" />

        <!-- Fallback to original format -->
        <img :src="src" :alt="alt" :class="imgClass" :width="width" :height="height" :loading="loading"
            :fetchpriority="fetchpriority" />
    </picture>
</template>
