<script setup lang="ts">
import SectionDivider from '@/components/utils/SectionDivider.vue';
import CenteredContent from '@/components/utils/CenteredContent.vue';
import { defineProps } from 'vue';
defineProps<{
    overview: readonly string[];
}>();
</script>

<template>
    <CenteredContent>
        <h2>Overview</h2>
        <SectionDivider />
        <div class="space-y-4 md:space-y-6">
            <p v-for="o in overview" :key="o">
                {{ o }}
            </p>
        </div>
    </CenteredContent>
</template>