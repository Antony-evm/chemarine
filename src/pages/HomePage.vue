<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import CenteredContent from '@/components/utils/CenteredContent.vue';

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
    }, 1400);
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

            <div class="z-10 text-center">
                <h1>Chemical Marine Inspections</h1>
                <p>Gas Detectors — Span Gases — Spare Parts</p>
            </div>
        </section>

        <section class="content-section">
            <CenteredContent>
                <h1>About Chemical Marine Inspections</h1>
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
            </CenteredContent>
        </section>

        <section class="content-section">
            <CenteredContent>
                <h2>Best Quality Products</h2>
                <p>
                    We offer advanced technology gas detection equipment from <strong>RKI Instruments
                        Inc</strong> and <strong>GMI Ltd</strong>, both leading manufacturers for gas
                    detectors
                    in marine industry. These instruments are certified to the highest standards. They are
                    designed to withstand the harsh environment of a vessel without compromising their
                    functionality and the safety of the user.<br />
                    We also offer the required span gases for testing & calibrating the gas detectors.
                    <strong>CalGaz International LLC</strong> is a leading manufacturer for calibration
                    gases.
                    The supplied gases are traceable to international standards and accompanied by an
                    analysis
                    certificate, while they offer the best quality with the longest possible shelf life.
                </p>
            </CenteredContent>
            <CenteredContent>
                <h2>Years of Experience in Gas Detection</h2>
                <p>
                    Our staff are Chemical and Electrical Engineers having a combined experience of more
                    than 40
                    years in safety issues in the marine industry. Our certificates for servicing gas
                    detectors
                    are regularly updated through the attendance of training courses provided by the
                    manufacturers.
                </p>
            </CenteredContent>
            <CenteredContent>
                <h2>Fast, Friendly and Reliable Support</h2>
                <p>
                    Our customer service team is available to answer your question in a friendly and
                    reliable
                    way. We are available in a 24/7 module while our effort is to resolve your query in less
                    than 24 hours.<br />
                    The service of any gas detector is carried out according to the manufacturer's
                    procedures
                    and we are using only genuine spare parts. Our effort is to minimize the turnaround time
                    without compromising the quality of the offered services. Our service engineers follow
                    strict servicing & calibrating procedures controlled by our certified ISO 9001:2015
                    Quality
                    Management System.<br />
                    We aim to become a reliable source of information regarding safety issues on board
                    vessels.
                </p>
            </CenteredContent>
        </section>
    </div>
</template>

<style scoped>
.content-section {
    @apply snap-start min-h-screen flex-row
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
