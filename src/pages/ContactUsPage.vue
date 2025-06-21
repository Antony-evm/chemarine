<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import MailIcon from '@/assets/svgs/mailIcon.svg';
import { ADDRESS, CITY, COUNTRY, PHONE_NO, PRIMARY_EMAIL, SECONDARY_EMAIL, COMPANY_NAME } from '@/data/contactInformation';
</script>

<template>
    <CenteredContent>
        <SpaceComponent size="page" />
        <h1>Contact Us</h1>
        <SectionDivider />
        <h2 class="uppercase">{{ COMPANY_NAME }}</h2>
        <SpaceComponent size="paragraph" />
        <div class="centered-element">
            <div class="bg-white/20 p-4 rounded-full text-white">
                <MailIcon class="h-10 w-10 text-white" />
            </div>
        </div>
        <SpaceComponent size="paragraph" />
        <div class="centered-element">
            <p>{{ ADDRESS }}<br />
                {{ CITY + ', ' + COUNTRY }}<br />
                <a href="tel:+302104688245" class="contact">{{ PHONE_NO }}</a>
            </p>
        </div>
        <SpaceComponent size="paragraph" />
        <div class="centered-element">
            <a href="mailto:chemarin@otenet.gr" class="contact">{{ PRIMARY_EMAIL }}</a>
        </div>
        <div class="centered-element">
            <a href="mailto:info@chemarine.com" class="contact">{{ SECONDARY_EMAIL }} </a>
        </div>
    </CenteredContent>

</template>

<style scoped>
.centered-element {
    @apply flex justify-center text-center
}

.contact {
    @apply hover:underline block
}
</style>