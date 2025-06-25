<script setup lang="ts">
import PageSection from "@/components/utils/PageSection.vue";
import SpaceComponent from "@/components/utils/SpaceComponent.vue";
import { useRoute } from "vue-router";
import { GAS_DETECTION_INSTRUMENTS } from "@/data/gasDetectionInstruments";
import { ref, onMounted } from "vue";
import type { InstrumentData } from "@/data/gasDetectionInstruments";

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
    <div v-if="instrument">
        <PageSection :sections="[
            {
                title: instrument.title,
                titleTag: 'h1',
                content: 'features'
            },
            {
                title: 'Overview',
                titleTag: 'h2',
                content: 'overview'
            }
        ]" with-page-spacing>
            <template #features>
                <div class="flex justify-between">
                    <img :src="instrument.imgPath" :alt="instrument.alt" loading="lazy"
                        class="w-70 h-50 object-contain" />
                    <ul class="mt-4 md:ml-8 list-disc list-inside">
                        <li v-for="f in instrument.features" :key="f" v-html="f" class="mb-1" />
                    </ul>
                </div>
                <SpaceComponent size="paragraph" />
            </template>

            <template #overview>
                <p v-for="o in instrument.overview" :key="o">{{ o }}
                    <SpaceComponent size="paragraph" />
                </p>
            </template>
        </PageSection>
    </div>
    <div v-else>
        <p>Instrument not found.</p>
    </div>
</template>
