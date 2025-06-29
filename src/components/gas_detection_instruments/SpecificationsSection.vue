<script setup lang="ts">
import { defineProps, computed } from 'vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';

const props = defineProps<{
    specifications: any;
}>();

// Type guards to determine the structure
const isArrayFormat = computed(() => Array.isArray(props.specifications));
const isObjectFormat = computed(() =>
    typeof props.specifications === 'object' &&
    !Array.isArray(props.specifications) &&
    props.specifications !== null
);

// Process array format (like SDM calibration stations)
const arraySpecs = computed(() => {
    if (!isArrayFormat.value) return [];
    return props.specifications;
});

// Process object format (like detectors)
const objectSpecs = computed(() => {
    if (!isObjectFormat.value) return {};
    return props.specifications;
});

// Helper function to format values
const formatValue = (value: any): string => {
    if (Array.isArray(value)) {
        return value.join(', ');
    }
    if (typeof value === 'object' && value !== null) {
        return Object.entries(value)
            .map(([k, v]) => `${k}: ${formatValue(v)}`)
            .join('; ');
    }
    return String(value);
};

// Helper function to format keys (convert camelCase to readable text)
const formatKey = (key: string | number): string => {
    return String(key)
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .trim();
};

// Helper to determine if a value should be displayed as a nested structure
const isNestedObject = (value: any): boolean => {
    return typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        Object.keys(value).length > 0;
};
</script>

<template>
    <div class="mt-8">
        <h2>Specifications</h2>
        <SectionDivider />

        <!-- Array Format (like calibration stations with title/detail structure) -->
        <div v-if="isArrayFormat" class="space-y-6">
            <div v-for="(spec, index) in arraySpecs" :key="index"
                class="border border-gray-200 rounded-lg p-4 bg-gray-50">

                <!-- Simple title/detail format -->
                <div v-if="spec.title && spec.detail">
                    <h4 class="font-semibold text-graphite mb-2">{{ spec.title }}</h4>
                    <p class="text-sm md:text-base">{{ spec.detail }}</p>
                </div>

                <!-- Title with details array -->
                <div v-else-if="spec.title && spec.details">
                    <h4 class="font-semibold text-graphite mb-2">{{ spec.title }}</h4>
                    <ul class="list-disc list-inside space-y-1">
                        <li v-for="detail in spec.details" :key="detail" class="text-sm md:text-base">
                            {{ detail }}
                        </li>
                    </ul>
                </div>

                <!-- Complex object format (like combustible sensor options) -->
                <div v-else class="space-y-3">
                    <div v-for="(value, key) in spec" :key="key">
                        <span class="font-medium text-graphite">{{ formatKey(key) }}:</span>
                        <span class="ml-2 text-sm md:text-base">{{ formatValue(value) }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Object Format (like detector specifications) -->
        <div v-else-if="isObjectFormat" class="space-y-6">
            <div v-for="(section, sectionKey) in objectSpecs" :key="sectionKey"
                class="border border-gray-200 rounded-lg p-4 bg-gray-50">

                <h3 class="font-semibold text-lg text-graphite mb-4 capitalize">
                    {{ formatKey(sectionKey) }}
                </h3>

                <div class="space-y-3">
                    <div v-for="(value, key) in section" :key="key">

                        <!-- Nested objects (like alarmTypes, detectionRanges) -->
                        <div v-if="isNestedObject(value)" class="mb-4">
                            <h4 class="font-medium text-graphite mb-2">{{ formatKey(key) }}:</h4>
                            <div class="ml-4 space-y-2">
                                <div v-for="(nestedValue, nestedKey) in value" :key="nestedKey"
                                    class="flex flex-col sm:flex-row">
                                    <span class="font-medium text-gray-700 sm:w-48 flex-shrink-0">
                                        {{ formatKey(nestedKey) }}:
                                    </span>
                                    <span class="text-sm md:text-base mt-1 sm:mt-0">
                                        {{ formatValue(nestedValue) }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <!-- Simple key-value pairs -->
                        <div v-else class="flex flex-col sm:flex-row">
                            <span class="font-medium text-graphite sm:w-48 flex-shrink-0">
                                {{ formatKey(key) }}:
                            </span>
                            <span class="text-sm md:text-base mt-1 sm:mt-0">
                                {{ formatValue(value) }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Fallback for unsupported formats -->
        <div v-else class="text-center text-gray-500 py-8">
            <p>Specifications format not supported</p>
        </div>
    </div>
</template>
