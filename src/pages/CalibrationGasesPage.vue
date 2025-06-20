<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';

</script>


<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <h1>Calibration Gases</h1>
        <SectionDivider />
        <p><strong>Chemical Marine Inspections</strong>, in cooperation with <strong>CalGaz International LLC</strong>,
            offers a wide
            range of Calibration Gases to customers. All the Calibration Gases are traceable to international standards
            and accompanied by an analysis certificate. They are offering the best quality with the longest possible
            shelf life.
        </p>
        <SpaceComponent size="paragraph" />
        <p>We also offer the required equipment for handling the gas (regulator valves) and the equipment for safe
            disposal of the empty cylinders (recycling tools).
        </p>
        <SpaceComponent size="paragraph" />
        <p>The Calibration Gases and handling equipment can be dispatched to your nominated forwarder in a short notice.
        </p>
        <SpaceComponent size="paragraph" />
        <p>The table summarizes the technical characteristics of the Calibration Gas Cylinders we are using. Please
            follow
            the links for more details…..
        </p>
        <div>
            <img src="@/assets/calgaz_cylinders_and_accessories.png" alt="Calibration Gas Cylinders"
                class="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
    </CenteredContent>
</template>
