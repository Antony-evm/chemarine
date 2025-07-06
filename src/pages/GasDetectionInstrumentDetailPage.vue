<script setup lang="ts">
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import CenteredContent from '@/components/utils/CenteredContent.vue';
import { useInstrument } from '@/composables/gas_detection_instruments/useInstrumentDetail';
import OptimizedImage from '@/components/utils/OptimizedImage.vue';
import { defineAsyncComponent } from 'vue';
const { instrument } = useInstrument();
const OverviewComponent = defineAsyncComponent(() =>
    import('@/components/gas_detection_instruments/OverviewComponent.vue')
);
const TechnicalSpecificationsComponent = defineAsyncComponent(() =>
    import('@/components/gas_detection_instruments/TechnicalSpecificationsComponent.vue')
);

</script>

<template>
    <SpaceComponent size="page" />
    <div v-if="instrument">
        <CenteredContent>
            <h1>{{ instrument.title }}</h1>
            <SectionDivider />

            <!-- Mobile: Stack vertically, Desktop: Side by side -->
            <div class="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-6 lg:gap-8">
                <!-- Image container with responsive sizing -->
                <div class="flex justify-center lg:justify-start items-start flex-shrink-0">
                    <OptimizedImage :srcSet="instrument.srcSet" :src="instrument.imgPath" :alt="instrument.alt"
                        :width="instrument.width" :height="instrument.height"
                        :imgClass="`lg:mt-8 w-48 sm:w-56 md:w-64 lg:w-80 object-contain aspect-[${instrument.aspectRatio}]`"
                        loading="eager" />
                </div>

                <!-- Features list with responsive spacing -->
                <div class="flex-1 lg:ml-8 text-center">
                    <h3>Features</h3>
                    <ul class="list-disc space-y-2 inline-block text-left pl-6">
                        <li v-for="f in instrument.features" :key="f" v-html="f" />
                    </ul>
                </div>
            </div>

            <SpaceComponent size="paragraph" />
        </CenteredContent>
        <OverviewComponent :overview="instrument.overview" />
        <TechnicalSpecificationsComponent :title="instrument.title" :brochure="instrument.brochure" />

    </div>
    <div v-else class="text-center">
        <p class="text-lg text-gray-600">Instrument not found.</p>
    </div>
</template>
