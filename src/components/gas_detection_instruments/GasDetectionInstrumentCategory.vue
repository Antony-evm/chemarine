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
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            <div v-for="(instrument, instKey) in group" :key="instKey"
                class="flex flex-col items-center w-full max-w-xs">
                <div class="flex justify-center items-center h-32 sm:h-36 md:h-40 lg:h-44 w-full">
                    <img :src="instrument.imgPath" :alt="instrument.alt" loading="lazy" class="
                        max-w-full max-h-full object-contain" />
                </div>
                <p class="text-center mt-3 sm:mt-4 h-12 sm:h-14 flex items-center justify-center px-2">{{
                    instrument.title }}</p>
                <div class="mt-2 w-full flex justify-center">
                    <ActionButton
                        :to="{ name: 'Gas Detection Instrument Detail', params: { category: groupKey, instrumentKey: instKey } }"
                        label="Read More" />
                </div>
            </div>
        </div>
        <SpaceComponent size="paragraph" />
    </div>
    <SpaceComponent size="paragraph" />
</template>