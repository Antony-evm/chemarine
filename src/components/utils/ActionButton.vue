<script setup lang="ts">
defineProps<{
    to: string | object;
    label: string;
}>();
</script>

<template>
    <div class="flex justify-center">
        <router-link :to="to" class="button">
            {{ label }}
        </router-link>
    </div>
</template>


<style scoped>
.button {
    @apply inline-block bg-white text-teal-700 px-4 py-3 rounded-full shadow hover:bg-teal-100 transition text-center;
}
</style>
