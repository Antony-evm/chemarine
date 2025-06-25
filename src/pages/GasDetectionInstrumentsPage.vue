<script setup lang="ts">
import ContentSection from '@/components/utils/ContentSection.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import { COMPANY_NAME } from '@/data/contactInformation';
import { GAS_DETECTION_INSTRUMENTS } from '@/data/gasDetectionInstruments';
import GasDetectionInstrumentCategory from '@/components/gas_detection_instruments/GasDetectionInstrumentCategory.vue';
</script>

<template>
    <ContentSection title="Gas Detection Instruments" title-tag="h1" with-page-spacing>
        <p><strong>{{ COMPANY_NAME }}</strong> offers advanced technology gas detection
            equipment from <strong>RKI Instruments Inc</strong> and <strong>GMI Ltd</strong>, both leading manufacturers
            for gas detectors in marine
            industry. These instruments are certified to the highest standards. They are designed to withstand the harsh
            environment of a vessel without compromising their functionality and the safety of the user.
        </p>
        <SpaceComponent size="paragraph" />
        <GasDetectionInstrumentCategory v-for="category in GAS_DETECTION_INSTRUMENTS" :key="category.title"
            :title="category.title" :instruments="category.instruments" />
    </ContentSection>
</template>
