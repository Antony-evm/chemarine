<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    srcSet: string;
    src: string;
    alt: string;
    imgClass: string;
    loading?: 'lazy' | 'eager';
    fetchpriority?: 'high' | 'low';
}>();

</script>

<template>
    <picture>
        <source :srcset="srcSet" type="image/webp" />
        <img :src="src" :alt="alt" :class="imgClass" :loading="loading" :attr.fetchpriority="fetchpriority" />
    </picture>
</template>
