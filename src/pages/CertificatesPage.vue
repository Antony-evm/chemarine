<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const CertificateLoader = defineAsyncComponent(() => import('@/components/certificates/CertificateLoader.vue'));
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import { COMPANY_NAME } from '@/data/contactInformation';

// Import images - PNG versions for fallback
import isoCertificateImg from '@/assets/certificates/iso_certificate.png';
import trainingCertificateImg from '@/assets/certificates/training_certificate.png';
import panosCertificateImg from '@/assets/certificates/panos_evmorfopoulos_certificate.png';
import evaCertificateImg from '@/assets/certificates/eva_papoula_certificate.png';

// Import WebP versions for srcSet
import isoCertificateWebp from '@/assets/certificates/iso_certificate.webp';
import isoCertificateWebp2x from '@/assets/certificates/iso_certificate@2x.webp';
import isoCertificateWebp3x from '@/assets/certificates/iso_certificate@3x.webp';

import trainingCertificateWebp from '@/assets/certificates/training_certificate.webp';
import trainingCertificateWebp2x from '@/assets/certificates/training_certificate@2x.webp';
import trainingCertificateWebp3x from '@/assets/certificates/training_certificate@3x.webp';

import panosCertificateWebp from '@/assets/certificates/panos_evmorfopoulos_certificate.webp';
import panosCertificateWebp2x from '@/assets/certificates/panos_evmorfopoulos_certificate@2x.webp';
import panosCertificateWebp3x from '@/assets/certificates/panos_evmorfopoulos_certificate@3x.webp';

import evaCertificateWebp from '@/assets/certificates/eva_papoula_certificate.webp';
import evaCertificateWebp2x from '@/assets/certificates/eva_papoula_certificate@2x.webp';
import evaCertificateWebp3x from '@/assets/certificates/eva_papoula_certificate@3x.webp';

// Import PDFs
import isoCertificatePdf from '@/assets/pdfs/certificates/iso_certificate.pdf';
import trainingCertificatePdf from '@/assets/pdfs/certificates/training_certificate.pdf';
import panosCertificatePdf from '@/assets/pdfs/certificates/panos_evmorfopoulos_certificate.pdf';
import evaCertificatePdf from '@/assets/pdfs/certificates/eva_papoula_certificate.pdf';

const certificates = {
    iso_certificate: {
        src: isoCertificateImg,
        srcSet: `${isoCertificateWebp} 1x, ${isoCertificateWebp2x} 2x, ${isoCertificateWebp3x} 3x`,
        alt: 'ISO 9001:2015 Certificate',
        pdf: isoCertificatePdf,
        width: '216', // 280px max-width * 0.770 ratio
        height: '280'
    },
    training_certificate: {
        src: trainingCertificateImg,
        srcSet: `${trainingCertificateWebp} 1x, ${trainingCertificateWebp2x} 2x, ${trainingCertificateWebp3x} 3x`,
        alt: 'Training Certificate',
        pdf: trainingCertificatePdf,
        width: '280', // Landscape - use full width 
        height: '214'  // 280px / 1.307 ratio
    },
    panos: {
        src: panosCertificateImg,
        srcSet: `${panosCertificateWebp} 1x, ${panosCertificateWebp2x} 2x, ${panosCertificateWebp3x} 3x`,
        alt: 'Panos Evmorfopoulos Certificate',
        pdf: panosCertificatePdf,
        width: '189', // 280px * 0.675 ratio
        height: '280'
    },
    eva: {
        src: evaCertificateImg,
        srcSet: `${evaCertificateWebp} 1x, ${evaCertificateWebp2x} 2x, ${evaCertificateWebp3x} 3x`,
        alt: 'Eva Papoula Certificate',
        pdf: evaCertificatePdf,
        width: '192', // 280px * 0.686 ratio
        height: '280'
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
                :src-set="certificate.srcSet" :alt="certificate.alt" :pdf="certificate.pdf" :width="certificate.width"
                :height="certificate.height" />
        </div>
        <SpaceComponent size="paragraph" />


    </CenteredContent>
</template>

<style scoped></style>
