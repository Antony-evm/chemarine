<script setup lang="ts">
import CertificateLoader from '@/components/certificates/CertificateLoader.vue';
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import { COMPANY_NAME } from '@/data/contactInformation';

// Import images
import isoCertificateImg from '@/assets/certificates/iso_certificate.png';
import trainingCertificateImg from '@/assets/certificates/training_certificate.png';
import panosCertificateImg from '@/assets/certificates/panos_evmorfopoulos_certificate.png';
import evaCertificateImg from '@/assets/certificates/eva_papoula_certificate.png';

// Import PDFs
import isoCertificatePdf from '@/assets/pdfs/certificates/iso_certificate.pdf';
import trainingCertificatePdf from '@/assets/pdfs/certificates/training_certificate.pdf';
import panosCertificatePdf from '@/assets/pdfs/certificates/panos_evmorfopoulos_certificate.pdf';
import evaCertificatePdf from '@/assets/pdfs/certificates/eva_papoula_certificate.pdf';

const certificates = {
    iso_certificate: {
        src: isoCertificateImg,
        alt: 'ISO 9001:2015 Certificate',
        pdf: isoCertificatePdf,
    },
    training_certificate: {
        src: trainingCertificateImg,
        alt: 'Training Certificate',
        pdf: trainingCertificatePdf,
    },
    panos: {
        src: panosCertificateImg,
        alt: 'Panos Evmorfopoulos Certificate',
        pdf: panosCertificatePdf,
    },
    eva: {
        src: evaCertificateImg,
        alt: 'Eva Papoula Certificate',
        pdf: evaCertificatePdf,
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
            quality management and continual improvement. Our engineers undergo comprehensive, manufacturer-endorsed
            training to ensure precision and reliability when
            servicing gas detectors, and related safety equipment.

        </p>
        <SpaceComponent size="paragraph" />
        <div class="flex flex-wrap justify-center gap-4 px-4">
            <CertificateLoader v-for="(certificate, key) in certificates" :key="key" :src="certificate.src"
                :alt="certificate.alt" :pdf="certificate.pdf" />
        </div>
        <SpaceComponent size="paragraph" />


    </CenteredContent>
</template>

<style scoped></style>
