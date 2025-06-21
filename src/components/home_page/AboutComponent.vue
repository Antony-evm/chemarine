<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpaceComponent from '../utils/SpaceComponent.vue';
</script>


<template>
    <SpaceComponent size="section" />
    <CenteredContent>
        <h1>About Chemical Marine Inspections</h1>
        <SectionDivider />
        <p><strong>Chemical Marine Inspections</strong> was established in 2004 in Piraeus, Greece...</p>
        <SpaceComponent size="paragraph" />
        <p>Our company looks forward to becoming:</p>
        <SpaceComponent size="paragraph" />
        <ul class="list-disc pl-6">
            <li>a reliable supplier for gas detection instruments, spare parts and their consumables</li>
            <li>a reliable service station for servicing gas detection instruments.</li>
            <li>a reliable source of information related to safety issues in the marine industry.</li>
        </ul>
        <SpaceComponent size="paragraph" />
        <p>Our extensive knowledge and expertise in gas detection along with the cooperation with
            internationally recognized manufacturers allows Chemical Marine Inspections to stand out of the
            competition and become the leading Greek company dealing with gas detection safety issues for the
            marine industry.
        </p>
    </CenteredContent>
    <SpaceComponent size="section" />
</template>