<script setup lang="ts">
import PageSection from '@/components/utils/PageSection.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import ActionButton from '@/components/utils/ActionButton.vue';
</script>

<template>
    <PageSection title="Services">
        <p>Our service engineers are certified from the gas detection instruments manufactures and offer highest
            quality of maintenance to your gas detection instruments. They follow strict servicing & calibrating
            procedures controlled by our certified ISO 9001:2015 Quality Management System.</p>
        <SectionDivider />

        <p>We can offer the calibration of your gas detectors either to our workshop or on board your vessel.
            Our effort is to offer fastest response time and minimum turnaround without compromising the quality
            of the services we provide.</p>

        <SectionDivider />

        <p>We are always using genuine spare parts for any repair maybe needed.
            The test gases used for the calibration of the gas detectors are in line with the specifications of
            the gas detection instruments manufacturers and traceable to international standards.</p>

        <p>We are always using genuine spare parts for any repair maybe needed.
            The test gases used for the calibration of the gas detectors are in line with the specifications of
            the gas detection instruments manufacturers and traceable to international standards.</p>

        <p>We are always using genuine spare parts for any repair maybe needed.
            The test gases used for the calibration of the gas detectors are in line with the specifications of
            the gas detection instruments manufacturers and traceable to international standards.</p>

        <SectionDivider />
        <ActionButton :to="{ name: 'Contact' }" label="Contact Our Service Team" />
    </PageSection>
</template>