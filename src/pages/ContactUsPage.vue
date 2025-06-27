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

        <div class="contact-grid gap-y-6 sm:gap-y-8 md:gap-y-10">
            <div class="w-full">
                <div class="contact-card">
                    <div class="contact-icon">
                        <LocationIcon />
                    </div>
                    <div class="text-center">
                        <h3>Address</h3>
                        <div class="contact-content">
                            <p class="leading-relaxed">
                                {{ ADDRESS }}<br />
                                {{ CITY + ', ' + COUNTRY }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Phone Section -->
            <div class="w-full">
                <div class="contact-card">
                    <div class="contact-icon">
                        <PhoneIcon />
                    </div>
                    <div class="text-center">
                        <h3>Phone</h3>
                        <div class="contact-content">
                            <a href="tel:+302104688245" class="contact-link" aria-label="Call us at {{ PHONE_NO }}">
                                {{ PHONE_NO }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Email Section -->
            <div class="w-full">
                <div class="contact-card">
                    <div class="contact-icon">
                        <EmailIcon />
                    </div>
                    <div class="text-center">
                        <h3>Email</h3>
                        <div class="contact-content space-y-2">
                            <a href="mailto:chemarin@otenet.gr" class="contact-link block"
                                aria-label="Send email to primary address">
                                {{ PRIMARY_EMAIL }}
                            </a>
                            <a href="mailto:info@chemarine.com"
                                class="contact-link block text-sm sm:text-base opacity-90"
                                aria-label="Send email to secondary address">
                                {{ SECONDARY_EMAIL }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="mt-8 sm:mt-10 md:mt-12 text-center">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-white/20">
                <h3>Get in Touch</h3>
                <p class="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
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
    /* max-w-4xl */
    margin-left: auto;
    margin-right: auto;
}


.contact-card {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1rem;
    transition: all 0.3s ease;
}

.contact-card:hover {
    background-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
}

/* Contact Elements */
.contact-icon {
    @apply flex justify-center text-white/80 mb-3 sm:mb-4
}

.contact-icon svg {
    @apply w-5 h-5 sm:w-6 sm:h-6
}

.contact-label {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: center;
}

.contact-content {
    font-size: 0.875rem;
    line-height: 1.6;
}

.contact-link {
    color: white;
    text-decoration: none;
    transition: color 0.2s ease;
    font-weight: 500;
    cursor: pointer;
    border-radius: 0.25rem;
    padding: 0.5rem 0.75rem;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.contact-link:hover {
    color: #bfdbfe;
    /* blue-200 */
    text-decoration: underline;
}

.contact-link:focus {
    outline: 2px solid #93c5fd;
    /* blue-300 */
    outline-offset: 2px;
}

/* Small screens (640px and up) */
@media (min-width: 640px) {
    .contact-card {
        padding: 1.5rem;
    }

    .contact-label {
        font-size: 1.125rem;
        margin-bottom: 0.75rem;
    }

    .contact-content {
        font-size: 1rem;
    }

    .contact-link {
        padding: 0.75rem 1rem;
    }
}

/* Medium screens (768px and up) */
@media (min-width: 768px) {
    .contact-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        max-width: 72rem;
        /* 2xl */
    }

    .contact-card {
        padding: 2rem;
    }

    .contact-label {
        font-size: 1.25rem;
    }

    .contact-content {
        font-size: 1.125rem;
    }
}

/* Large screens (1024px and up) */
@media (min-width: 1024px) {
    .contact-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2.5rem;

        align-items: start;
    }

    .contact-card {
        @apply h-[250px] flex flex-col justify-start;
    }
}

/* Desktop hover effects */
@media (hover: hover) {
    .contact-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
    .contact-card {
        border-color: white;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .contact-link {
        color: white;
        border: 1px solid white;
    }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {

    .contact-card,
    .contact-link {
        transition: none !important;
    }

    .contact-card:hover {
        transform: none !important;
    }
}

/* Mobile-specific optimizations */
@media (max-width: 639px) {
    .contact-content {
        line-height: 1.6;
    }

    .contact-link {
        padding: 0.75rem 1rem;
        min-height: 44px;
        width: 100%;
        margin: 0.25rem 0;
    }

    /* Larger touch targets for mobile */
    .contact-card {
        margin-bottom: 1rem;
    }
}
</style>