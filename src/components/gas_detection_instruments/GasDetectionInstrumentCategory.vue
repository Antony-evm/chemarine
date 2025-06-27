<script setup lang="ts">
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import { defineProps } from 'vue';
import ActionButton from '@/components/utils/ActionButton.vue';

const props = defineProps<{
    title: string;
    instruments: Record<string, Record<string, {
        title: string;
        alt: string;
        imgPath: string;
        overview: string[];
        features: string[];
    }>>;
}>();
</script>

<template>
    <SpaceComponent size="paragraph" />
    <h2>{{ props.title }}</h2>
    <SectionDivider />
    <div v-for="(group, groupKey) in props.instruments" :key="groupKey" class="my-4 sm:my-6 md:my-8 w-full">
        <div class="flex flex-row flex-wrap justify-left">
            <div v-for="(instrument, instKey) in group" :key="instKey" class="mx-4 sm:mx-6 md:mx-8">
                <div class="flex justify-center">
                    <img :src="instrument.imgPath" :alt="instrument.alt" loading="lazy" class="
            w-32 h-22 sm:w-40 sm:h-26 md:w-48 md:h-32 lg:w-56 lg:h-38 object-contain" />
                </div>
                <p class="text-center mt-3 sm:mt-6">{{ instrument.title }}</p>
                <ActionButton
                    :to="{ name: 'Gas Detection Instrument Detail', params: { category: groupKey, instrumentKey: instKey } }"
                    label="Read More" />
            </div>
            <SpaceComponent size="paragraph" />
        </div>
    </div>
    <SpaceComponent size="paragraph" />
</template>