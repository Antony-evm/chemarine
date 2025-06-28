<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import ActionButton from '@/components/utils/ActionButton.vue';
import { COMPANY_NAME } from '@/data/contactInformation';
</script>

<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <div class="text-center space-y-6">
            <!-- 404 Number -->
            <div class="text-8xl sm:text-9xl md:text-[12rem] font-bold text-graphite/20 leading-none">
                404
            </div>

            <!-- Page Not Found Title -->
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-graphite mb-4">
                Page Not Found
            </h1>

            <!-- Description -->
            <div class="space-y-4 max-w-2xl mx-auto">
                <p class="text-lg sm:text-xl md:text-2xl text-graphite/80">
                    We're sorry, but the page you're looking for doesn't exist or has been moved.
                </p>

                <p class="text-base sm:text-lg md:text-xl text-graphite/70">
                    Please check the URL or use the navigation menu to find what you're looking for.
                    If you believe this is an error, please don't hesitate to contact us.
                </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <ActionButton to="/" label="Return Home" />
                <ActionButton to="/contact" label="Contact Us" />
            </div>

            <!-- Navigation Links -->
            <div class="pt-8 border-t border-graphite/20 max-w-lg mx-auto">
                <h3 class="text-lg sm:text-xl font-semibold text-graphite mb-4">
                    Popular Pages
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base">
                    <router-link to="/gas-detection-instruments"
                        class="text-graphite hover:text-teal-500 underline transition-colors">
                        Gas Detection Instruments
                    </router-link>
                    <router-link to="/calibration-gases"
                        class="text-graphite hover:text-teal-500 underline transition-colors">
                        Calibration Gases
                    </router-link>
                    <router-link to="/services" class="text-graphite hover:text-teal-500 underline transition-colors">
                        Services
                    </router-link>
                    <router-link to="/certificates"
                        class="text-graphite hover:text-teal-500 underline transition-colors">
                        Certificates
                    </router-link>
                </div>
            </div>

            <!-- Company Information -->
            <div class="pt-6 text-sm sm:text-base text-graphite/60">
                <p>{{ COMPANY_NAME }} - Maritime Safety Equipment & Services</p>
            </div>
        </div>
    </CenteredContent>
    <SpaceComponent size="page" />
</template>
