<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import { COMPANY_NAME } from '@/data/contactInformation';
</script>

<template>
    <CenteredContent>
        <h2>Serving the Global Maritime Community</h2>
        <SectionDivider />
        <p>
            At <strong>{{ COMPANY_NAME }}</strong>, we are committed to serving all members
            of the international maritime community with equal dedication and respect. We
            understand that maritime safety is a universal concern that transcends borders,
            cultures, and backgrounds.
        </p>
        <SpaceComponent size="paragraph" />
        <p>
            Our approach focuses on accessibility and understanding—providing clear
            communication, comprehensive support, and products that meet the diverse needs
            of vessels and crews worldwide. We strive to make our safety solutions and
            services readily available to all maritime professionals, regardless of vessel
            size, route, or operational requirements.
        </p>
        <SpaceComponent size="paragraph" />
        <p>
            We believe that effective maritime safety solutions must be practical, reliable,
            and accessible to everyone who works at sea. Our commitment is to continuous
            improvement in how we serve our customers and contribute to safer maritime
            operations globally.
        </p>
    </CenteredContent>
</template>
