<script setup lang="ts">
import { PRIMARY_EMAIL, PHONE_NO, COMPANY_NAME } from '@/data/contactInformation';
</script>
<template>
    <footer class="bg-[#0a1f3d] px-8 py-4 w-full">
        <div class="flex flex-row items-center justify-between">
            <div class="text-center">
                <p class="text-lg font-bold">{{ COMPANY_NAME }}</p>
                <p class="text-sm">Gas Detectors — Span Gases — Spare Parts</p>
                <div class="text-center text-xs text-white/50">
                    © {{ new Date().getFullYear() }} {{ COMPANY_NAME }}. All rights reserved.
                </div>
            </div>
            <div class="text-center text-lg">
                <p>Email: <a href="mailto:chemarin@otenet.gr" class="hover:underline">{{ PRIMARY_EMAIL }}</a>
                </p>
                <p>Phone: <a href="tel:+302104688245" class="hover:underline">{{ PHONE_NO }}</a></p>
            </div>

        </div>
    </footer>
</template>
