<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import LocationIcon from '@/assets/svgs/locationIcon.svg';
import PhoneIcon from '@/assets/svgs/phoneIcon.svg';
import EmailIcon from '@/assets/svgs/emailIcon.svg';
import { ADDRESS, CITY, COUNTRY, PHONE_NO, PRIMARY_EMAIL, SECONDARY_EMAIL, COMPANY_NAME } from '@/data/contactInformation';
</script>

<template>
    <CenteredContent>
        <SpaceComponent size="page" />
        <div>
            <h1>Contact Us</h1>
            <SectionDivider />
            <h2 class="uppercase">{{ COMPANY_NAME }}</h2>
        </div>

        <SpaceComponent size="paragraph" />

        <div class="contact-grid gap-y-6 sm:gap-y-8 md:gap-y-10 items-stretch">
            <div class="content-card w-full p-4 sm:p-6 md:p-8">
                <div class="contact-icon">
                    <LocationIcon />
                </div>
                <div class="text-center">
                    <h3>Address</h3>
                    <div>
                        <p>
                            {{ ADDRESS }}<br />
                            {{ CITY + ', ' + COUNTRY }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- Phone Section -->
            <div class="content-card w-full p-4 sm:p-6 md:p-8">
                <div class="contact-icon">
                    <PhoneIcon />
                </div>
                <div class="text-center">
                    <h3>Phone</h3>
                    <div>
                        <a href="tel:+302104688245" class="contact-link" aria-label="Call us at {{ PHONE_NO }}">
                            {{ PHONE_NO }}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Email Section -->
            <div class="content-card w-full p-4 sm:p-6 md:p-8">
                <div class="contact-icon">
                    <EmailIcon />
                </div>
                <div class="text-center">
                    <h3>Email</h3>
                    <div class="block">
                        <a href="mailto:chemarin@otenet.gr" class="contact-link block"
                            aria-label="Send email to primary address">
                            {{ PRIMARY_EMAIL }}
                        </a>
                        <a href="mailto:info@chemarine.com" class="contact-link block"
                            aria-label="Send email to secondary address">
                            {{ SECONDARY_EMAIL }}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-8 sm:mt-10 md:mt-12 text-center">
            <div class="p-4 sm:p-6 md:p-8 content-card">
                <h3>Get in Touch</h3>
                <p>
                    We're here to help with all your marine safety equipment needs.
                    <span class="hidden sm:inline">Contact us for expert advice and fast, reliable service.</span>
                </p>
            </div>
        </div>

    </CenteredContent>

</template>

<style scoped>
/* Contact Grid Layout */
.contact-grid {
    max-width: 56rem;
    margin-left: auto;
    margin-right: auto;
    align-items: stretch;
}



/* Medium screens (768px and up) */
@media (min-width: 768px) {
    .contact-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        max-width: 72rem;
    }

    .contact-card {
        padding: 2rem;
    }
}

/* Large screens (1024px and up) */
@media (min-width: 1024px) {
    .contact-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2.5rem;
    }
}
</style>