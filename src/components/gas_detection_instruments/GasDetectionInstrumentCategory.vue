<script setup lang="ts">
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import OptimizedInstrumentCard from '@/components/gas_detection_instruments/OptimizedInstrumentCard.vue';
import { defineProps } from 'vue';
import type { InstrumentData } from '@/data/gasDetectionInstruments';

const props = defineProps<{
    title: string;
    instruments: Record<string, Record<string, InstrumentData>>;
}>();
</script>

<template>
    <SpaceComponent size="paragraph" />
    <h2>{{ props.title }}</h2>
    <SectionDivider />
    <div v-for="(group, groupKey) in props.instruments" :key="groupKey" class="my-4 sm:my-6 md:my-8 w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            <OptimizedInstrumentCard v-for="(instrument, instKey) in group" :key="instKey" :instrument="instrument"
                :group-key="groupKey" :inst-key="instKey" />
        </div>
        <SpaceComponent size="paragraph" />
    </div>
    <SpaceComponent size="paragraph" />
</template>