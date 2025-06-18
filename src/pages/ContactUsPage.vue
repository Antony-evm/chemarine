<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
</script>

<template>
    <CenteredContent>
        <SpaceComponent size="page" />
        <h1>Contact Us</h1>
        <SectionDivider />
        <h2 class="uppercase">Chemical Marine Inspections</h2>
        <SpaceComponent size="paragraph" />
        <div class="centered-element">
            <div class="bg-white/20 text-white p-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" href="mailto:chemarin@otenet.gr" class="h-10 w-10 text-white"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" stroke-width="2"
                        fill="none" />
                    <path d="M3 7l9 6 9-6" stroke="currentColor" stroke-width="2" fill="none" />
                </svg>
            </div>
        </div>
        <SpaceComponent size="paragraph" />
        <div class="centered-element">
            <p>44, Akti Moutsopoulou str.<br />
                Piraeus, Greece<br />
                +30 2104611799</p>
        </div>
        <SpaceComponent size="paragraph" />
        <div class="centered-element">
            <a href="mailto:chemarin@otenet.gr" class="mailto">chemarin@otenet.gr</a>
        </div>
        <div class="centered-element">
            <a href="mailto:info@chemarine.com" class="mailto">info@chemarine.com</a>
        </div>
    </CenteredContent>

</template>

<style scoped>
.centered-element {
    @apply flex justify-center text-center
}

.mailto {
    @apply underline block
}
</style>