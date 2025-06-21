<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';

const regulatorTableColumns = [
    { label: "Model #", key: "model" },
    { label: "Connection", key: "connection" },
    { label: "Inlet", key: "inlet" },
    { label: "Outlet", key: "outlet" },
    { label: "Flow", key: "flow" },
    { label: "Max Inlet Pressure", key: "maxInletPressure" },
    { label: "Demand Pressure", key: "demandPressure" },
    { label: "Gauge Range", key: "gaugeRange" },
    { label: "Flow Rate Range", key: "flowRateRange" },
    { label: "Construction", key: "construction" },
    { label: "Body", key: "body" },
    { label: "Gauge", key: "gauge" },
    { label: "Piston", key: "piston" },
    { label: "Seat", key: "seat" },
    { label: "Diaphragm", key: "diaphragm" },
    { label: "Filter", key: "filter" },
    { label: "Bonnet", key: "bonnet" },
    { label: "Weight", key: "weight" },
];

const regulatorModels = [
    {
        model: "2001",
        connection: '',
        inlet: "5/8\" - 18 UNF",
        outlet: "3/16\" (4.8mm) tubing",
        flow: '',
        maxInletPressure: "1000 psig (70 bar)",
        demandPressure: "3\" H2O (5.6mm)",
        gaugeRange: "0-1000 psig (70 bar)",
        flowRateRange: "0-3.0 LPM",
        construction: '',
        body: "Nickel-plated brass",
        gauge: "Chrome-plated brass",
        piston: "Brass (Nickel-plated Brass for 2004)",
        seat: "Buna",
        diaphragm: "Buna (PVC for 2004)",
        filter: "Sintered Bronze",
        bonnet: "Aluminum",
        weight: "1 lb (0.63 kg)",
    },
    {
        model: "2003",
        connection: '',
        inlet: "1/4\" NPT",
        outlet: null,
        flow: '',
        maxInletPressure: "0-3000 psig (207 bar)",
        demandPressure: null,
        gaugeRange: "0-3000 psig (207 bar)",
        flowRateRange: null,
        construction: '',
        body: null,
        gauge: null,
        piston: null,
        seat: "Buna",
        diaphragm: null,
        filter: null,
        bonnet: null,
        weight: null,
    },
    {
        model: "2004",
        connection: '',
        inlet: "5/8\" - 18 UNF",
        outlet: null,
        flow: '',
        maxInletPressure: "1000 psig (70 bar)",
        demandPressure: null,
        gaugeRange: "0-1000 psig (70 bar)",
        flowRateRange: null,
        construction: '',
        body: null,
        gauge: null,
        piston: null,
        seat: "Viton®",
        diaphragm: null,
        filter: null,
        bonnet: null,
        weight: null,
    },
    {
        model: "2007",
        connection: '',
        inlet: "CGA-600",
        outlet: null,
        flow: '',
        maxInletPressure: "0-500 psig (35 bar)",
        demandPressure: null,
        gaugeRange: "0-3000 psig (207 bar)",
        flowRateRange: null,
        construction: '',
        body: null,
        gauge: null,
        piston: null,
        seat: "Buna",
        diaphragm: null,
        filter: null,
        bonnet: null,
        weight: null,
    },
];

</script>

<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <h1>2000 Series Regulators</h1>
        <SectionDivider />
        <SpaceComponent size="paragraph" />
        <div class="flex justify-center">
            <img src="@/assets/2000-series-regulator.png" alt="2000 Series Regulator" loading="lazy" width="200"
                height="70" class="max-w-full h-auto" />
        </div>
        <SpaceComponent size="paragraph" />
        <div class="table-styling">
            <table class="min-w-full" aria-label="700 Series Regulator Specifications">
                <thead class="table-header">
                    <tr>
                        <th class="table-element">Model #</th>
                        <th v-for="item in regulatorModels" :key="item.model" class="table-element">
                            {{ item.model }}
                        </th>
                    </tr>
                </thead>
                <tbody class="table-borders">
                    <tr v-for="col in regulatorTableColumns.filter(c => c.key !== 'model')" :key="col.key">
                        <td class="table-element">{{ col.label }}</td>
                        <td v-for="item in regulatorModels" :key="item.model + '-' + col.key" class="table-element">
                            {{ item[col.key] ?? '—' }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </CenteredContent>
</template>