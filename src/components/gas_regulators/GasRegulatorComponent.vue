<script setup lang="ts">
import { defineProps } from 'vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import { defineAsyncComponent } from 'vue';
import OptimizedImage from '@/components/utils/OptimizedImage.vue';
const SpecificationTable = defineAsyncComponent(() => import('@/components/utils/SpecificationTable.vue'));

const props = defineProps<{
    title: string;
    rows: Array<{ label: string; key: string }>;
    models: Array<Record<string, any>>;
    imgPath: string;
    imgWebpPath: string;
    brochure?: string;
}>();

const tableLabel = props.title + ' Specifications';
</script>

<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <h1>{{ props.title }}</h1>
        <SectionDivider />
        <div class="mx-auto justify-center w-[100px] sm:w-[150px] md:w-[200px]" v-if="props.imgPath">
            <OptimizedImage :srcSet="props.imgWebpPath" :src="props.imgPath" :alt="props.title + ' Regulator'"
                imgClass="h-32 sm:h-40 md:h-52 w-24 sm:w-30 md:w-39" loading="eager" fetchpriority="high" />
        </div>

        <!-- Brochure Link -->
        <div v-if="props.brochure" class="text-center mb-6">
            <p class="text-base sm:text-lg md:text-xl text-graphite">
                For more details please
                <a :href="props.brochure" target="_blank" rel="noopener noreferrer"
                    class="hover:text-teal-600 underline transition-colors"
                    :aria-label="`Download ${props.title} brochure PDF`">
                    download the {{ props.title }} brochure
                </a>.
            </p>
        </div>
        <SpecificationTable :rows="props.rows" :models="props.models" :table-label="tableLabel" />
    </CenteredContent>
</template>
