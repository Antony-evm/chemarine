<script setup lang="ts">
import { useRoute } from 'vue-router';
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';

const route = useRoute();
const instrumentTitle = route.params.title;
</script>

<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <h1>{{ instrumentTitle }}</h1>
        <SectionDivider />
    </CenteredContent>
</template>
