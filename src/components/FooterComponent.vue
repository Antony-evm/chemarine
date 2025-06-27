<script setup lang="ts">
import { PRIMARY_EMAIL, PHONE_NO, COMPANY_NAME } from '@/data/contactInformation';
</script>
<template>
    <footer class="bg-gradient-to-t from-teal-200 to-transparent padding w-full">
        <div class="flex flex-col items-center text-center
             sm:flex-row sm:justify-between sm:items-start
             gap-6">
            <div>
                <p class="text-lg font-bold">{{ COMPANY_NAME }}</p>
                <p class="text-sm">Gas Detectors — Span Gases — Spare Parts</p>
                <div class="text-center text-xs text-graphite/80">
                    © {{ new Date().getFullYear() }} {{ COMPANY_NAME }}. All rights reserved.
                </div>
            </div>
            <div>
                <p>Email: <a href="mailto:chemarin@otenet.gr" class="hover:underline">{{ PRIMARY_EMAIL }}</a>
                </p>
                <p class="mt-2">
                    Phone: <a href="tel:+302104688245" class="hover:underline">{{ PHONE_NO }}</a></p>
            </div>

        </div>
    </footer>
</template>
