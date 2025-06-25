<script setup lang="ts">
import { defineProps } from 'vue';
import ContentSection from '@/components/utils/ContentSection.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SpecificationTable from '@/components/utils/SpecificationTable.vue';

const props = defineProps<{
    title: string;
    rows: Array<{ label: string; key: string }>;
    models: Array<Record<string, any>>;
    imgPath?: string;
}>();

const tableLabel = props.title + ' Specifications';
</script>

<template>
    <ContentSection :title="props.title" title-tag="h1" with-page-spacing>
        <SpaceComponent size="paragraph" />
        <div class="flex justify-center" v-if="props.imgPath">
            <img :src="props.imgPath" :alt="props.title + ' Regulator'" loading="lazy" width="200" height="70"
                class="max-w-full h-auto" />
        </div>
        <SpaceComponent size="paragraph" />
        <SpecificationTable :rows="props.rows" :models="props.models" :table-label="tableLabel" />
    </ContentSection>
</template>
