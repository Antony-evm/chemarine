<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import { defineAsyncComponent } from 'vue';
import ServicesComponent from '@/components/services/ServicesComponent.vue';

const ServiceOptionsComponent = defineAsyncComponent(() => import('@/components/services/ServiceOptionsComponent.vue'));
const QualityAssuranceComponent = defineAsyncComponent(() => import('@/components/services/QualityAssuranceComponent.vue'));
const ActionButton = defineAsyncComponent(() => import('@/components/utils/ActionButton.vue'));
</script>

<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <ServicesComponent />
        <ServiceOptionsComponent />
        <QualityAssuranceComponent />
        <ActionButton :to="{ name: 'Contact' }" label="Contact Our Service Team" />

    </CenteredContent>
</template>