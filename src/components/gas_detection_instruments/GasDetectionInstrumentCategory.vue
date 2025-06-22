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
        link: string;
    }>>;
}>();
</script>

<template>
    <SpaceComponent size="paragraph" />
    <h2>{{ props.title }}</h2>
    <SectionDivider />
    <div v-for="(group, groupKey) in props.instruments" :key="groupKey" class="mb-8 w-full">
        <div class="flex flex-row flex-wrap justify-left">
            <div v-for="(instrument, instKey) in group" :key="instKey" class="m-2 max-w-xs">
                <img :src="instrument.imgPath" :alt="instrument.alt" loading="lazy" class="w-48 h-32 object-contain" />
                <p class="text-center mt-2">{{ instrument.title }}</p>
                <router-link :to="instrument.link"
                    class="block rounded overflow-hidden shadow hover:shadow-lg transition">Read More</router-link>
            </div>
            <SpaceComponent size="paragraph" />
        </div>
    </div>
    <SpaceComponent size="paragraph" />
</template>
