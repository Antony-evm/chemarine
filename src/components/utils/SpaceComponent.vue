<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    size?: "page" | "section" | "paragraph";
}>();

const height = computed(() => {
    switch (props.size) {
        case "page":
            return "6rem";
        case "section":
            return "4rem";
        case "paragraph":
            return "2rem";
        default:
            return "6rem"; // fallback
    }
});
</script>

<template>
    <div class="w-full" :style="{ height }"></div>
</template>
