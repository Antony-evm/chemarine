<script setup lang="ts">
import SpaceComponent from "@/components/utils/SpaceComponent.vue";
import SectionDivider from "@/components/utils/SectionDivider.vue";
import { useRoute } from "vue-router";
import { GAS_DETECTION_INSTRUMENTS } from "@/data/gasDetectionInstruments";
import { ref, onMounted } from "vue";
import CenteredContent from "@/components/utils/CenteredContent.vue";
import type { InstrumentData } from "@/data/gasDetectionInstruments";


onMounted(() => {
    for (const section of GAS_DETECTION_INSTRUMENTS) {
        const group = section.instruments[category as string];
        if (group && group[instrumentKey as string]) {
            instrument.value = group[instrumentKey as string];
            break;
        }
    }
});

const route = useRoute();
const { category, instrumentKey } = route.params;

const instrument = ref<InstrumentData | null>(null);

onMounted(() => {
    for (const section of GAS_DETECTION_INSTRUMENTS) {
        if (section.instruments[category as string] && section.instruments[category as string][instrumentKey as string]) {
            instrument.value = section.instruments[category as string][instrumentKey as string];
            break;
        }
    }
});
</script>

<template>
    <SpaceComponent size="page" />
    <div v-if="instrument">
        <CenteredContent>
            <h1>{{ instrument.title }}</h1>
            <SectionDivider />
            <div class="flex justify-between">
                <img :src="instrument.imgPath" :alt="instrument.alt" loading="lazy" class="w-70 h-50 object-contain" />
                <ul class="mt-4 md:ml-8 list-disc list-inside">
                    <li v-for="f in instrument.features" :key="f" v-html="f" class="mb-1" />
                </ul>
            </div>
            <SpaceComponent size="paragraph" />
        </CenteredContent>

        <CenteredContent>
            <h2>Overview</h2>
            <SectionDivider />
            <p v-for="o in instrument.overview" :key="o">{{ o }}
                <SpaceComponent size="paragraph" />
            </p>
        </CenteredContent>
    </div>
    <div v-else>
        <p>Instrument not found.</p>
    </div>
</template>
