<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    size?: "page" | "section" | "paragraph";
}>();

const heightClasses = computed(() => {
    switch (props.size) {
        case 'section':
            return 'h-paragraph sm:h-section md:h-page'
        case 'page':
            return 'h-page'
        case 'paragraph':
        default:
            return 'h-component sm:h-paragraph'
    }
})
</script>

<template>
    <div class="w-full" :class="heightClasses" />
</template>
