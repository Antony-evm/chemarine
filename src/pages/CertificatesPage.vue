<script setup lang="ts">
import CertificateLoader from '@/components/certificates/CertificateLoader.vue';
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import { COMPANY_NAME } from '@/data/contactInformation';

const certificates = {
    iso_certificate: {
        src: '/src/assets/certificates/iso_certificate.png',
        alt: 'ISO 9001:2015 Certificate',
        pdf: '/src/assets/pdfs/certificates/iso_certificate.pdf',
    },
    training_certificate: {
        src: '/src/assets/certificates/training_certificate.png',
        alt: 'Training Certificate',
        pdf: '/src/assets/pdfs/certificates/training_certificate.pdf',
    },
    panos: {
        src: '/src/assets/certificates/panos_evmorfopoulos_certificate.png',
        alt: 'Panos Evmorfopoulos Certificate',
        pdf: '/src/assets/pdfs/certificates/panos_evmorfopoulos_certificate.pdf',
    },
    eva: {
        src: '/src/assets/certificates/eva_papoula_certificate.png',
        alt: 'Eva Papoula Certificate',
        pdf: '/src/assets/pdfs/certificates/eva_papoula_certificate.pdf',
    }
};
</script>

<template>
    <CenteredContent>
        <SpaceComponent size="page" />
        <h1>Certificates</h1>
        <SectionDivider />

        <p>
            At {{ COMPANY_NAME }}, we are committed to delivering world-class services. Our ISO 9001:2015 certification
            by ABS Quality Evaluations underscores our dedication to rigorous
            quality management and continual improvement.
            Our engineers undergo comprehensive, manufacturer-endorsed training to ensure precision and reliability when
            servicing gas detectors, and related safety equipment.

        </p>
        <SpaceComponent size="paragraph" />
        <div class="flex flex-row justify-center items-center">
            <CertificateLoader v-for="(certificate, key) in certificates" :key="key" :src="certificate.src"
                :alt="certificate.alt" :pdf="certificate.pdf" />
        </div>


    </CenteredContent>
</template>

<style scoped></style>
