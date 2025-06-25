<script setup lang="ts">
import CenteredContent from './CenteredContent.vue';
import SectionDivider from './SectionDivider.vue';
import SpaceComponent from './SpaceComponent.vue';

defineProps<{
    title?: string;
    titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  pageLevel?: boolean; // Adds page-level spacing before content
  withPageSpacing?: boolean; // Alias for pageLevel for clarity
}>();
</script>

<template>
    <div>
        <!-- Page-level spacing if requested -->
        <SpaceComponent v-if="pageLevel || withPageSpacing" size="page" />

        <CenteredContent>
            <!-- Title section -->
            <component :is="titleTag || 'h2'" v-if="title">
                {{ title }}
            </component>
            <SectionDivider v-if="title" />

            <!-- Main content slot -->
            <slot />
        </CenteredContent>
    </div>
</template>
