<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import ActionButton from '@/components/utils/ActionButton.vue';
</script>

<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <h1>Services</h1>
        <SectionDivider />
        <p>Our service engineers are certified by gas detection instrument manufacturers and deliver the highest
            quality maintenance for your gas detection instruments. They follow strict servicing and calibrating
            procedures controlled by our certified ISO 9001:2015 Quality Management System.</p>
        <SectionDivider />

        <h2>Flexible Service Options</h2>
        <SpaceComponent size="paragraph" />
        <p>We offer calibration services for your gas detectors either at our workshop or on board your vessel.
            Our commitment is to provide the fastest response time and minimum turnaround while maintaining
            the highest quality standards in all services we provide.</p>

        <SectionDivider />

        <h2>Quality Assurance</h2>
        <SpaceComponent size="paragraph" />
        <p>We use only manufacturer-approved spare parts for any repairs that may be required.
            The test gases used for calibration are fully compliant with gas detection instrument manufacturers'
            specifications and are traceable to international standards, ensuring accuracy and reliability.</p>

        <SpaceComponent size="paragraph" />

        <p>Our comprehensive approach includes thorough documentation, quality control procedures, and
            post-service verification to guarantee that your equipment meets all safety requirements and
            operational standards.</p>

        <SectionDivider />
        <ActionButton :to="{ name: 'Contact' }" label="Contact Our Service Team" />

    </CenteredContent>
</template>