<script setup lang="ts">
import { defineProps } from 'vue';
import SpaceComponent from '../utils/SpaceComponent.vue';
import CenteredContent from '../utils/CenteredContent.vue';
import SectionDivider from '../utils/SectionDivider.vue';
import SpecificationTable from '../utils/SpecificationTable.vue';

const props = defineProps<{
    title: string;
    rows: Array<{ label: string; key: string }>;
    models: Array<Record<string, any>>;
    imgPath?: string;
}>();

const tableLabel = props.title + ' Specifications';
</script>

<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <h1>{{ props.title }}</h1>
        <SectionDivider />
        <SpaceComponent size="paragraph" />
        <div class="flex justify-center" v-if="props.imgPath">
            <img :src="props.imgPath" :alt="props.title + ' Regulator'" loading="lazy" width="200" height="70"
                class="max-w-full h-auto" />
        </div>
        <SpaceComponent size="paragraph" />
        <SpecificationTable :rows="props.rows" :models="props.models" :table-label="tableLabel" />
    </CenteredContent>
</template>
