<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

const images = [
    '/src/assets/frontpage/frontpage_1.jpg',
    '/src/assets/frontpage/frontpage_2.jpg'
];

const currentIndex = ref(0);
const fade = ref(false);
let interval: number | undefined;

const startFade = () => {
    fade.value = true;
    setTimeout(() => {
        currentIndex.value = (currentIndex.value + 1) % images.length;
        fade.value = false;
    }, 1400); // correct time in ms
};

onMounted(() => {
    document.body.style.overflow = "hidden";
    interval = window.setInterval(startFade, 5000);
});

onUnmounted(() => {
    document.body.style.overflow = "";
    if (interval) clearInterval(interval);
});

const nextIndex = computed(() => (currentIndex.value + 1) % images.length);
</script>


<template>
    <div class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth">
        <section class="snap-start h-screen w-screen relative flex items-center justify-center overflow-hidden">

            <div class="absolute inset-0 bg-cover bg-center transition-fade-scale"
                :style="{ backgroundImage: `url('${images[currentIndex]}')` }"
                :class="{ 'opacity-100 scale-100': !fade, 'opacity-0 scale-105': fade }"></div>

            <div class="absolute inset-0 bg-cover bg-center transition-fade-scale"
                :style="{ backgroundImage: `url('${images[nextIndex]}')` }"
                :class="{ 'opacity-0 scale-105': !fade, 'opacity-100 scale-100': fade }"></div>

            <div class="z-10 text-center px-4 text-white">
                <h1 class="text-3xl md:text-5xl font-bold">Chemical Marine Inspections</h1>
                <p class="mt-4 text-lg">Gas Detectors — Span Gases — Spare Parts</p>
            </div>
        </section>

        <section class="content-section">
            <div class="max-w-3xl w-full text-justify space-y-6">
                <h1 class="font-bold text-center">About Chemical Marine Inspections</h1>
                <p><strong>Chemical Marine Inspections</strong> was established in 2004 in Piraeus, Greece...</p>
                <p>Our company looks forward to becoming:</p>
                <ul class="list-disc pl-6">
                    <li>a reliable supplier for gas detection instruments, spare parts and their consumables</li>
                    <li>a reliable service station for servicing gas detection instruments.</li>
                    <li>a reliable source of information related to safety issues in the marine industry.</li>
                </ul>
                <p>Our extensive knowledge and expertise in gas detection along with the cooperation with
                    internationally recognized manufacturers allows Chemical Marine Inspections to stand out of the
                    competition and become the leading Greek company dealing with gas detection safety issues for the
                    marine industry.
                </p>
            </div>
        </section>

        <section class="content-section">
            <div class="max-w-5xl w-full flex flex-col space-y-12">
                <div class="flex items-start space-x-6">
                    <div class="flex-shrink-0 mt-1 rounded-full border border-gray-300 p-3 bg-gray-50">
                        <svg class="h-8 w-8 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M6 21V5a2 2 0 012-2h8a2 2 0 012 2v16M6 21H5a2 2 0 01-2-2V7a2 2 0 012-2h1m0 16h12M6 21h12" />
                        </svg>
                    </div>
                    <div>
                        <h2>Best Quality Products</h2>
                        <p>
                            We offer advanced technology gas detection equipment from <strong>RKI Instruments
                                Inc</strong> and <strong>GMI Ltd</strong>, both leading manufacturers for gas detectors
                            in marine industry. These instruments are certified to the highest standards. They are
                            designed to withstand the harsh environment of a vessel without compromising their
                            functionality and the safety of the user.<br />
                            We also offer the required span gases for testing & calibrating the gas detectors.
                            <strong>CalGaz International LLC</strong> is a leading manufacturer for calibration gases.
                            The supplied gases are traceable to international standards and accompanied by an analysis
                            certificate, while they offer the best quality with the longest possible shelf life.
                        </p>
                    </div>
                </div>
                <div class="flex items-start space-x-6">
                    <div class="flex-shrink-0 mt-1 rounded-full border border-gray-300 p-3 bg-gray-50">
                        <svg class="h-8 w-8 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3" />
                            <path
                                d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V20a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H4a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09A1.65 1.65 0 0012 4.6V4a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09c.31.34.47.79.47 1.26s-.16.92-.47 1.26z" />
                        </svg>
                    </div>
                    <div>
                        <h2 class="font-bold mb-2">Years of Experience in Gas Detection</h2>
                        <p>
                            Our staff are Chemical and Electrical Engineers having a combined experience of more than 40
                            years in safety issues in the marine industry. Our certificates for servicing gas detectors
                            are regularly updated through the attendance of training courses provided by the
                            manufacturers.
                        </p>
                    </div>
                </div>
                <div class="flex items-start space-x-6">
                    <div class="flex-shrink-0 mt-1 rounded-full border border-gray-300 p-3 bg-gray-50">

                        <svg class="h-8 w-8 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
                            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="7" r="4" />
                            <path d="M5.5 21v-2a6.5 6.5 0 0113 0v2" />
                        </svg>
                    </div>
                    <div>
                        <h2 class="font-bold mb-2">Fast, Friendly and Reliable Support</h2>
                        <p>
                            Our customer service team is available to answer your question in a friendly and reliable
                            way. We are available in a 24/7 module while our effort is to resolve your query in less
                            than 24 hours.<br />
                            The service of any gas detector is carried out according to the manufacturer's procedures
                            and we are using only genuine spare parts. Our effort is to minimize the turnaround time
                            without compromising the quality of the offered services. Our service engineers follow
                            strict servicing & calibrating procedures controlled by our certified ISO 9001:2015 Quality
                            Management System.<br />
                            We aim to become a reliable source of information regarding safety issues on board vessels.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<style scoped>
.content-section {
    @apply snap-start min-h-screen flex items-center justify-center py-16
}

.transition-fade-scale {
    transition: opacity 1.4s ease-in-out, transform 5s ease-in-out;
}

.opacity-100 {
    opacity: 1;
    z-index: 1;
}

.opacity-0 {
    opacity: 0;
    z-index: 0;
}

.scale-100 {
    transform: scale(1);
}

.scale-105 {
    transform: scale(1.05);
}
</style>
