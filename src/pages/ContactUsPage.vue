<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import MailIcon from '@/assets/svgs/mailIcon.svg';
</script>

<template>
    <CenteredContent>
        <SpaceComponent size="page" />
        <h1>Contact Us</h1>
        <SectionDivider />
        <h2 class="uppercase">Chemical Marine Inspections</h2>
        <SpaceComponent size="paragraph" />
        <div class="centered-element">
            <div class="bg-white/20 p-4 rounded-full text-white">
                <MailIcon class="h-10 w-10 text-white" />
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