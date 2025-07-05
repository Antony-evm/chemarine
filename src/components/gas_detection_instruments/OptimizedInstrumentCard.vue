<script setup lang="ts">
import { defineProps, computed } from 'vue';
import OptimizedImage from '@/components/utils/OptimizedImage.vue';
import ActionButton from '@/components/utils/ActionButton.vue';

const props = defineProps<{
    instrument: {
        title: string;
        alt: string;
        imgPath: string;
        srcSet?: string;
        overview: string[];
        features: string[];
    };
    groupKey: string;
    instKey: string;
}>();

// Generate srcSet for high-DPI images (fallback if not provided in data)
const srcSet = computed(() => {
    // Use the srcSet from instrument data if available
    if (props.instrument.srcSet) {
        return props.instrument.srcSet;
    }

    // Fallback: try to construct srcSet from image path
    const basePath = props.instrument.imgPath.replace('.png', '');
    return `${basePath}.webp 1x, ${basePath}@2x.webp 2x, ${basePath}@3x.webp 3x`;
});

// Calculate dimensions based on common aspect ratios
const dimensions = computed(() => {
    // Container heights: h-32 (128px), sm:h-36 (144px), md:h-40 (160px), lg:h-44 (176px)
    // But we need to size for the largest container to prevent overflow
    const maxContainerHeight = 176; // lg:h-44

    // Get image name to determine aspect ratio
    const imageName = props.instrument.imgPath.split('/').pop()?.replace('.png', '') || '';

    // Define aspect ratios for different instruments
    const aspectRatioMap: Record<string, number> = {
        'gmi_ps_200': 0.58,
        'gmi_ps_500': 0.63,
        'gmi_ps_200_calibration_station': 0.71,
        'gmi_ps_500_calibration_station': 0.71,
        'gmi_shipsurveyor': 1.63,
        'rki_04_series': 1.08,
        'rki_gx_2012': 0.51,
        'rki_gx_3r': 0.92,
        'rki_gx_3r_pro': 1.15,
        'rki_gx_6000': 0.44,
        'rki_gx_9000': 1.10,
        'rki_gx_force': 0.49,
        'rki_rx_8000': 1.06,
        'rki_sdm_04_calibration_station': 0.80,
        'rki_sdm_2012_calibration_station': 0.61,
        'rki_sdm_3r_calibration_station': 0.59,
        'rki_sdm_6000_calibration_station': 0.44,
        'rki_sdm_force_calibration_station': 1.39,
    };

    const aspectRatio = aspectRatioMap[imageName] || 1.0;

    // Calculate dimensions that fit within container
    // For portrait images (ratio < 1), limit by height
    // For landscape images (ratio >= 1), limit by width or height as needed
    let width: number, height: number;

    if (aspectRatio < 1) {
        // Portrait: fit to container height
        height = maxContainerHeight - 16; // Leave some padding
        width = Math.round(height * aspectRatio);
    } else {
        // Landscape: fit to container width or height, whichever is more restrictive
        const maxContainerWidth = 320; // max-w-xs (20rem = 320px)
        height = maxContainerHeight - 16; // Leave some padding
        width = Math.round(height * aspectRatio);

        // If width exceeds container, scale down proportionally
        if (width > maxContainerWidth - 32) { // Leave padding
            width = maxContainerWidth - 32;
            height = Math.round(width / aspectRatio);
        }
    }

    return {
        width: width.toString(),
        height: height.toString()
    };
});
</script>

<template>
    <div class="content-card flex flex-col items-center w-full max-w-xs p-4 lg:p-6">
        <div class="flex justify-center items-center h-32 sm:h-36 md:h-40 lg:h-44 w-full">
            <OptimizedImage :srcSet="srcSet" :src="instrument.imgPath" :alt="instrument.alt" :width="dimensions.width"
                :height="dimensions.height" imgClass="h-32 sm:h-36 md:h-40 lg:h-44 object-contain" loading="lazy" />
        </div>
        <div class="mt-auto w-full">
            <p class="text-center mt-4 mb-2 h-12 sm:h-14 flex items-center justify-center px-2">
                {{ instrument.title }}
            </p>
            <div class="w-full flex justify-center">
                <ActionButton
                    :to="{ name: 'Gas Detection Instrument Detail', params: { category: groupKey, instrumentKey: instKey } }"
                    :label="'Read More'" :aria-label="`Learn more about ${instrument.title}`" />
            </div>
        </div>
    </div>
</template>
