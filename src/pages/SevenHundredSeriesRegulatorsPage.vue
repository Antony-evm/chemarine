<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import SpecificationTable from '@/components/utils/SpecificationTable.vue';

const regulatorTableColumns = [
    { label: "Model #", key: "model" },
    { label: "Connection", key: "connection" },
    { label: "Inlet", key: "inlet" },
    { label: "Outlet", key: "outlet" },
    { label: "Flow", key: "flow" },
    { label: "Max Inlet Pressure", key: "maxInletPressure" },
    { label: "Max Outlet Pressure", key: "maxOutletPressure" },
    { label: "Delivery Gauge Range", key: "deliveryGaugeRange" },
    { label: "Flow Rate Range", key: "flowRateRange" },
    { label: "Construction", key: "construction" },
    { label: "Weight", key: "weight" },
    { label: "Body", key: "body" },
    { label: "Seat", key: "seat" },
    { label: "Piston", key: "piston" },
    { label: "Washer", key: "washer" },
    { label: "O-rings", key: "oRings" },
    { label: "Bonnet", key: "bonnet" },
];
const regulatorModels = [
    {
        model: "713",
        connection: '',
        inlet: "CGA 600",
        outlet: "3/16\" Barb / 4.8mm",
        flow: '',
        maxInletPressure: "500 psig (35 bar)",
        maxOutletPressure: "20 psig (1.4 bar)",
        deliveryGaugeRange: "0-500 psig (35 bar)",
        flowRateRange: "0.2-4.0 LPM",
        construction: '',
        weight: "0.6 lb (0.28 kg)",
        body: "Brass",
        seat: "PTFE",
        piston: "Brass",
        washer: "Buna N",
        oRings: "Viton®",
        bonnet: "Nickel-plated brass",
    },
    {
        model: "715",
        connection: '',
        inlet: "5/8\"-18 UNF",
        outlet: null,
        flow: '',
        maxInletPressure: "1000 psig (70 bar)",
        maxOutletPressure: "60 psig (4.1 bar)",
        deliveryGaugeRange: "0-1000 psig (70 bar)",
        flowRateRange: "0.2-6.0 LPM",
        construction: '',
        weight: "0.5 lb (0.24 kg)",
        body: null,
        seat: null,
        piston: null,
        washer: null,
        oRings: null,
        bonnet: null,
    },
    {
        model: "718",
        connection: '',
        inlet: "1/4\" NPT",
        outlet: null,
        flow: '',
        maxInletPressure: "3000 psig (207 bar)",
        maxOutletPressure: "60 psig (4.1 bar)",
        deliveryGaugeRange: "0-3000 (200 bar)",
        flowRateRange: "0.2-6.0 LPM",
        construction: '',
        weight: "0.7 lb (0.32 kg)",
        body: null,
        seat: null,
        piston: null,
        washer: null,
        oRings: null,
        bonnet: null,
    },
];
</script>

<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <h1>700 Series Regulators</h1>
        <SectionDivider />
        <SpaceComponent size="paragraph" />
        <div class="flex justify-center">
            <img src="@/assets/713-regulator.png" alt="713 Series Regulator" loading="lazy" width="200" height="70"
                class="max-w-full h-auto" />
        </div>
        <SpaceComponent size="paragraph" />
        <SpecificationTable :columns="regulatorTableColumns" :rows="regulatorModels"
            table-label="700 Series Regulator Specifications" />
    </CenteredContent>
</template>