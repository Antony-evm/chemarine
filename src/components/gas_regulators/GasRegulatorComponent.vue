<script setup lang="ts">
import { defineProps } from 'vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpecificationTable from '@/components/utils/SpecificationTable.vue';

const props = defineProps<{
    title: string;
    rows: Array<{ label: string; key: string }>;
    models: Array<Record<string, any>>;
    imgPath?: string;
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
            <img :src="props.imgPath" :alt="props.title + ' Regulator'" loading="lazy"
                class="w-full h-auto object-contain" />
        </div>

        <!-- Brochure Link -->
        <div v-if="props.brochure" class="text-center mb-6">
            <p class="text-base sm:text-lg md:text-xl text-graphite">
                For more details please find the regulator brochure
                <a :href="props.brochure" target="_blank" rel="noopener noreferrer"
                    class="hover:text-teal-600 underline transition-colors">
                    here
                </a>.
            </p>
        </div>
        <SpecificationTable :rows="props.rows" :models="props.models" :table-label="tableLabel" />
    </CenteredContent>
</template>
