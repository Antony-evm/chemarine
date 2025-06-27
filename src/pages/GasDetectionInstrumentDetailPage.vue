<script setup lang="ts">
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import CenteredContent from '@/components/utils/CenteredContent.vue';
import { useInstrument } from '@/composables/gas_detection_instruments/useInstrumentDetail';

const { instrument } = useInstrument();
</script>

<template>
    <SpaceComponent size="page" />
    <div v-if="instrument">
        <CenteredContent>
            <h1>{{ instrument.title }}</h1>
            <SectionDivider />

            <!-- Mobile: Stack vertically, Desktop: Side by side -->
            <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
                <!-- Image container with responsive sizing -->
                <div class="flex justify-center lg:justify-start items-start flex-shrink-0">
                    <img :src="instrument.imgPath" :alt="instrument.alt" loading="lazy"
                        class="w-48 h-[30rem] sm:w-56 sm:h-[35rem] md:w-64 md:h-[40rem] lg:w-80 lg:h-[50rem] object-contain" />
                </div>

                <!-- Features list with responsive spacing -->
                <div class="flex-1 lg:ml-8">
                    <h3>Features</h3>
                    <ul class="list-disc list-inside space-y-2">
                        <li v-for="f in instrument.features" :key="f" v-html="f" class="leading-relaxed" />
                    </ul>
                </div>
            </div>

            <SpaceComponent size="paragraph" />
        </CenteredContent>

        <CenteredContent>
            <h2>Overview</h2>
            <SectionDivider />
            <div class="space-y-4 md:space-y-6">
                <p v-for="o in instrument.overview" :key="o">
                    {{ o }}
                </p>
            </div>
        </CenteredContent>
    </div>
    <div v-else class="text-center">
        <p class="text-lg text-gray-600">Instrument not found.</p>
    </div>
</template>
