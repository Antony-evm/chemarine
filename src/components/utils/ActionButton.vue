<script setup lang="ts">
defineProps<{
    to: string | object;
    label: string;
}>();
</script>

<template>
    <div class="flex justify-center">
        <router-link :to="to" class="button padding" role="button" tabindex="0">
            {{ label }}
        </router-link>
    </div>
</template>
