<script setup lang="ts">
import { defineProps } from 'vue';
import OptimizedImage from '@/components/utils/OptimizedImage.vue';
import ActionButton from '@/components/utils/ActionButton.vue';
import type { InstrumentData } from '@/data/gasDetectionInstruments';

defineProps<{
    instrument: InstrumentData;
    groupKey: string;
    instKey: string;
}>();

</script>

<template>
    <div class="content-card flex flex-col items-center w-full max-w-xs p-4 lg:p-6">
        <div class="flex justify-center items-center h-32 sm:h-36 md:h-40 lg:h-44 w-full">
            <OptimizedImage :srcSet="instrument.srcSet" :src="instrument.imgPath" :alt="instrument.alt"
                :width="instrument.width" :height="instrument.height"
                :imgClass="`h-32 sm:h-36 md:h-40 lg:h-44 object-contain aspect-[${instrument.aspectRatio}]`"
                loading="lazy" />
        </div>
        <div class="mt-auto w-full">
            <p class="text-center mt-4 mb-2 h-12 sm:h-14 flex items-center justify-center px-2">
                {{ instrument.title }}
            </p>
            <div class="w-full flex justify-center mt-4">
                <ActionButton
                    :to="{ name: 'Gas Detection Instrument Detail', params: { category: groupKey, instrumentKey: instKey } }"
                    :label="'Read More'" :aria-label="`Learn more about ${instrument.title}`" />
            </div>
        </div>
    </div>
</template>
