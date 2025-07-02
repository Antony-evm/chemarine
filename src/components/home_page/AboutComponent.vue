<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpaceComponent from '../utils/SpaceComponent.vue';
import { COMPANY_NAME } from '@/data/contactInformation';
</script>


<template>
    <SpaceComponent size="section" />
    <CenteredContent>
        <h1>{{ COMPANY_NAME }}</h1>
        <SectionDivider />
        <p><strong>{{ COMPANY_NAME }}</strong> was established in 1994 in Piraeus, Greece, strategically located at the
            heart of the international marine industry.</p>
        <SpaceComponent size="paragraph" />
        <p>We are committed to excellence in three key areas:</p>
        <SpaceComponent size="paragraph" />
        <ul class="list-disc pl-6 space-y-2">
            <li>Providing reliable gas detection instruments, spare parts, and calibration gases to the maritime sector
            </li>
            <li>Delivering professional servicing and maintenance for gas detection equipment</li>
            <li>Serving as a trusted resource for marine safety information and best practices</li>
        </ul>
        <SpaceComponent size="paragraph" />
        <p>Through our extensive expertise in gas detection technology and strategic partnerships with
            internationally recognized manufacturers, {{ COMPANY_NAME }} has established itself as
            Greece's leading specialist in marine gas detection safety solutions. Our dedication to
            quality and safety continues to set us apart in the competitive maritime industry.
        </p>
    </CenteredContent>
</template>