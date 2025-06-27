<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import { COMPANY_NAME } from '@/data/contactInformation';
</script>

<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <h1>Spare Parts</h1>
        <SectionDivider />
        <p><strong>{{ COMPANY_NAME }}</strong> provides customers with a comprehensive range of spare parts for gas
            detection instruments from leading manufacturers.
        </p>
        <SpaceComponent size="paragraph" />
        <p>We stock only manufacturer-approved spare parts to ensure optimal performance and reliability.
            The majority of our spare parts inventory is maintained in stock at our premises, with regular
            replenishment to ensure immediate availability when you need them.
        </p>
        <SpaceComponent size="paragraph" />
        <p>Our spare parts are used for servicing gas detection instruments in our workshop or can be
            dispatched directly to your vessel for regular on-board maintenance operations.</p>

        <SpaceComponent size="paragraph" />

        <h2>Quality and Availability</h2>
        <SpaceComponent size="paragraph" />
        <p>All spare parts come with full manufacturer warranties and documentation. Our efficient logistics
            ensure fast delivery worldwide, minimizing vessel downtime and maintaining your operational schedule.</p>
    </CenteredContent>
</template>