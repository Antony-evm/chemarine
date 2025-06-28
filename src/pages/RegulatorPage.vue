<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { REGULATORS } from '@/data/regulators';
import GasRegulatorComponent from '@/components/gas_regulators/GasRegulatorComponent.vue';

const route = useRoute();
const router = useRouter();
const regulatorId = route.params.regulator_id as string;

const regulatorData = REGULATORS[regulatorId];

if (!regulatorData) {
    router.replace('/calibration-gases');
}
</script>

<template>
    <div v-if="regulatorData">
        <GasRegulatorComponent :title="regulatorData.title" :rows="regulatorData.rows" :models="regulatorData.models"
            :imgPath="regulatorData.imgPath" :brochure="regulatorData.brochure" />
    </div>
</template>
