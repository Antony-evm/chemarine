<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import { COMPANY_NAME } from '@/data/contactInformation';
import { GAS_DETECTION_INSTRUMENTS } from '@/data/gasDetectionInstruments';
import { defineAsyncComponent } from 'vue';
const GasDetectionInstrumentCategory = defineAsyncComponent(() =>
    import('@/components/gas_detection_instruments/GasDetectionInstrumentCategory.vue')
);
</script>

<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <h1>Gas Detection Instruments</h1>
        <SectionDivider />
        <p><strong>{{ COMPANY_NAME }}</strong> supplies cutting-edge gas detection equipment from industry-leading
            manufacturers <strong>Teledyne GMI Ltd</strong> and <strong>RKI Instruments Inc</strong>, both renowned for
            their excellence in marine gas detection technology. Our instruments are certified to the highest
            international
            standards and engineered to perform reliably in the demanding marine environment while ensuring maximum
            user safety.
        </p>
        <SpaceComponent size="paragraph" />
        <GasDetectionInstrumentCategory v-for="category in GAS_DETECTION_INSTRUMENTS" :key="category.title"
            :title="category.title" :instruments="category.instruments" />

    </CenteredContent>
</template>
