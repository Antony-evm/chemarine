<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import { COMPANY_NAME } from '@/data/contactInformation';
</script>


<template>
    <CenteredContent>
        <h2>Premium Quality Products</h2>
        <SectionDivider />
        <p>
            We supply cutting-edge gas detection equipment from industry-leading manufacturers
            <strong>RKI Instruments Inc</strong> and <strong>GMI Ltd</strong>, both renowned
            for their excellence in marine gas detection technology. Our instruments are certified
            to the highest international standards and engineered to perform reliably in the
            demanding marine environment while ensuring maximum user safety.
        </p>
        <SpaceComponent size="paragraph" />
        <p>
            In addition to detection equipment, we provide essential calibration gases through our
            partnership with <strong>CalGaz International LLC</strong>, a premier manufacturer
            of precision calibration gases for testing and maintaining gas detection systems.
        </p>
        <SpaceComponent size="paragraph" />
        <p>
            All calibration gases are fully traceable to international standards and include
            comprehensive analysis certificates. We guarantee exceptional quality with extended
            shelf life to maximize your investment and operational efficiency.
        </p>
        <SpaceComponent size="paragraph" />

        <h2>Our Quality Policy</h2>
        <SectionDivider />
        <p>
            At <strong> {{ COMPANY_NAME }}</strong>, quality is not just a commitment, it's our foundation.
            We are dedicated to providing products and services that exceed international maritime
            safety standards while continuously improving our processes through our ISO 9001:2015
            certified Quality Management System.
        </p>
        <SpaceComponent size="paragraph" />
        <p>
            Our quality policy encompasses rigorous testing procedures, comprehensive documentation,
            and ongoing training to ensure every product we deliver meets the highest standards of
            reliability and performance. We believe that uncompromising quality is essential for
            protecting lives at sea and maintaining operational excellence in the maritime industry.
        </p>
    </CenteredContent>
</template>