<script setup lang="ts">
import SectionDivider from '@/components/utils/SectionDivider.vue';
import CenteredContent from '@/components/utils/CenteredContent.vue';
import { defineProps } from 'vue';

defineProps<{
    title: string;
    brochure: string;
}>();

</script>
<template>

    <CenteredContent v-if="brochure">
        <h2>Technical Specifications</h2>
        <SectionDivider />
        <p>
            For detailed technical specifications and comprehensive product information,
            download the {{ title }}
            <a :href="brochure" target="_blank" rel="noopener noreferrer"
                class="hover:text-teal-500 underline transition-colors font-semibold"
                :aria-label="`Download ${title} technical specifications brochure PDF`">
                technical brochure
            </a>.
        </p>
    </CenteredContent>
</template>