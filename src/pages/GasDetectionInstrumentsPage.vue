<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import { COMPANY_NAME } from '@/data/contactInformation';
import { GAS_DETECTION_INSTRUMENTS } from '@/data/gasDetectionInstruments';
import GasDetectionInstrumentCategory from '@/components/gas_detection_instruments/GasDetectionInstrumentCategory.vue';
</script>

<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <h1>Gas Detection Instruments Gases</h1>
        <SectionDivider />
        <p><strong>{{ COMPANY_NAME }}</strong> offers advanced technology gas detection
            equipment from <strong>RKI Instruments Inc</strong> and <strong>GMI Ltd</strong>, both leading manufacturers
            for gas detectors in marine
            industry. These instruments are certified to the highest standards. They are designed to withstand the harsh
            environment of a vessel without compromising their functionality and the safety of the user.
        </p>
        <SpaceComponent size="paragraph" />
        <GasDetectionInstrumentCategory v-for="category in GAS_DETECTION_INSTRUMENTS" :key="category.title"
            :title="category.title" :instruments="category.instruments" />

    </CenteredContent>
</template>
