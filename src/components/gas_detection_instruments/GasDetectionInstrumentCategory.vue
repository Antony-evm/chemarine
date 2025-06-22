<script setup lang="ts">
import SpaceComponent from '../utils/SpaceComponent.vue';
import SectionDivider from '../utils/SectionDivider.vue';
import { defineProps } from 'vue';

const props = defineProps<{
    title: string;
    instruments: Record<string, Record<string, {
        title: string;
        alt: string;
        imgPath: string;
    }>>;
}>();
</script>

<template>
    <SpaceComponent size="paragraph" />
    <h2>{{ props.title }}</h2>
    <SectionDivider />

    <!-- Loop over each group (gmi, riken) -->
    <div v-for="(group, groupKey) in props.instruments" :key="groupKey" class="mb-8 w-full">
        <div class="flex flex-row flex-wrap justify-left">
            <div v-for="(instrument, instKey) in group" :key="instKey" class="m-2 max-w-xs">
                <img :src="instrument.imgPath" :alt="instrument.alt" loading="lazy" class="max-w-full h-auto" />
                <p class="text-center mt-2">{{ instrument.title }}</p>
            </div>
            <SpaceComponent size="paragraph" />
        </div>
    </div>
    <SpaceComponent size="paragraph" />
</template>
