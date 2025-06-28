<script setup lang="ts">
import { PRIMARY_EMAIL, PHONE_NO, COMPANY_NAME } from '@/data/contactInformation';
import PhoneIcon from '@/assets/svgs/phoneIcon.svg';
import EmailIcon from '@/assets/svgs/emailIcon.svg';
</script>
<template>
    <footer class="bg-gradient-to-t from-teal-200 to-transparent w-full footer-padding">
        <div class="flex flex-col text-center sm:text-left
             sm:flex-row sm:justify-between sm:items-start
             gap-6">
            <div>
                <p>{{ COMPANY_NAME }}</p>
                <p class="mt-2">Gas Detectors — Span Gases — Spare Parts</p>
                <p class="text-graphite/80 mt-2">
                    © {{ new Date().getFullYear() }} {{ COMPANY_NAME }}. All rights reserved.
                </p>
            </div>
            <div>
                <div class="contact-icon">
                    <EmailIcon />
                    <a href="mailto:chemarin@otenet.gr" class="px-2 underline hover:text-teal-500 cursor-pointer">{{
                        PRIMARY_EMAIL }}</a>
                </div>
                <div class="contact-icon mt-2">
                    <PhoneIcon />
                    <a href="tel:+302104688245" class="px-2 underline hover:text-teal-500 cursor-pointer">{{ PHONE_NO
                    }}</a>
                </div>

            </div>

        </div>
    </footer>
</template>
<style scoped>
.footer-padding {
    @apply px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10;
}
</style>