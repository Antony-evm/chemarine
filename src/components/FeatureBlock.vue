<template>
    <div class="flex items-start space-x-6">
        <div class="flex-shrink-0 mt-1 rounded-full border border-gray-300 p-3 bg-gray-50">
            <slot name="icon">
            </slot>
        </div>
        <div>
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <div v-html="description"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string,
    description: string
}>()
</script>
