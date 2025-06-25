<script setup lang="ts">
import CenteredContent from './CenteredContent.vue';
import SectionDivider from './SectionDivider.vue';
import SpaceComponent from './SpaceComponent.vue';

defineProps<{
    title?: string;
    titleTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}>();
</script>

<template>
    <div>
        <SpaceComponent size="page" />
        <CenteredContent>
            <!-- Title section -->
            <component :is="titleTag || 'h1'" v-if="title">
                {{ title }}
            </component>
            <SectionDivider v-if="title" />

            <!-- 
        Main content slot with helper components
        Users can manually add <SectionDivider /> and <SpaceComponent /> as needed
      -->
            <slot />
        </CenteredContent>
    </div>
</template>
