<template>
    <div class="h-screen w-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth">

        <section
            class="snap-start h-screen w-screen relative overflow-hidden flex items-center justify-center bg-cover bg-center"
            :style="{ backgroundImage: `url('/src/assets/frontpage/frontpage_3.jpg')` }">
            <div class="absolute inset-0"></div>
            <div class="z-10 text-center px-4">
                <h1>Chemical Marine Inspections</h1>
                <p>Gas Detectors — Span Gases — Spare Parts</p>
            </div>
        </section>

        <section class="snap-start min-h-screen flex items-center justify-center px-4 py-16">
            <div class=" max-w-3xl w-full text-justify space-y-6">
                <h1 class="text-3xl font-bold text-center">About Chemical Marine Inspections</h1>

                <p>
                    <strong>Chemical Marine Inspections</strong> was established in 2004 in Piraeus, Greece, a major
                    centre for the marine industry.
                </p>

                <p>Our company looks forward to becoming:</p>

                <ul class="list-disc pl-6">
                    <li>a reliable supplier for gas detection instruments, spare parts and their consumables.</li>
                    <li>a reliable service station for servicing gas detection instruments.</li>
                    <li>a reliable source of information related to safety issues in the marine industry.</li>
                </ul>

                <p>
                    Our extensive knowledge and expertise in gas detection along with the cooperation with
                    internationally recognized manufacturers allows Chemical Marine Inspections to stand out of the
                    competition and become the leading Greek company dealing with gas detection safety issues for the
                    marine industry.
                </p>
            </div>
        </section>

    </div>
</template>
