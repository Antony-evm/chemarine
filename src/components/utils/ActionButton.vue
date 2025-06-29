<script setup lang="ts">
defineProps<{
    to: string | object;
    label: string;
    ariaLabel?: string;
}>();
</script>

<template>
    <div class="flex justify-center">
        <router-link :to="to" class="button padding" role="button" tabindex="0" :aria-label="ariaLabel || label">
            {{ label }}
        </router-link>
    </div>
</template>
