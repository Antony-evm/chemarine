<script setup lang="ts">
import SectionDivider from '@/components/utils/SectionDivider.vue';
</script>

<template>
    <div class="flex items-center justify-center text-center px-4 py-16">
        <div class="max-w-3xl w-full space-y-6">
            <h1 class="font-bold">Contact Us</h1>
            <SectionDivider />
            <div class="uppercase tracking-wide font-medium">
                <h2>Chemical Marine Inspections</h2>
            </div>
            <div class="flex justify-center">
                <div class="bg-white/20 text-white p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" href="mailto:chemarin@otenet.gr"
                        class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" stroke-width="2"
                            fill="none" />
                        <path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="2" fill="none" />
                    </svg>
                </div>
            </div>
            <div class="font-medium leading-relaxed">
                <p>44, Akti Moutsopoulou str.<br />
                    Piraeus, Greece<br />
                    +30 2104611799</p>
            </div>
            <div class="space-y-1">
                <a href="mailto:chemarin@otenet.gr" class="underline block">chemarin@otenet.gr</a>
                <a href="mailto:info@chemarine.com" class="underline block">info@chemarine.com</a>
            </div>
        </div>
    </div>

</template>
