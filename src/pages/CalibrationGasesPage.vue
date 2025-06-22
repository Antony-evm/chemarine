<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';


const regulatorRouteMap = {
    "713": "700",
    "715": "700",
    "DFR 2001": "2000",
    "DFR 2004": "2000",
    "DFR 2007": "2000",
};


const gasCylinders = [
    {
        model: "12DA",
        material: "Aluminum",
        pressure: "160 psig/11 bar",
        content: "11",
        dimensions: `9.8" x 3" / 250 mm x 78 mm`,
        mixtures: ["Limited"],
        compatibility: [],
        pdfModelUrl: 'src/assets/pdfs/models/12da.pdf'
    },
    {
        model: "2AL",
        material: "Aluminum",
        pressure: "500 psig/35.5 bar",
        content: "34",
        dimensions: `11.375" x 3" / 289 mm x 76mm`,
        mixtures: ["Reactive", "Non-Reactive"],
        compatibility: ["715", "DFR 2001", "DFR 2004"],
        pdfModelUrl: 'src/assets/pdfs/models/2al.pdf'
    },
    {
        model: "7HP",
        material: "Steel",
        pressure: "494 psig/34 bar",
        content: "34",
        dimensions: `11" x 3" / 279 mm x 76 mm`,
        mixtures: ["Non-Reactive"],
        compatibility: ["713", "DFR 2007"],
        pdfModelUrl: 'src/assets/pdfs/models/7hp.pdf'
    },
    {
        model: "6DM",
        material: "Steel",
        pressure: "1000 psig/ 69 bar",
        content: "58",
        dimensions: `3.26" x 8.09" / 83 mm x 204 mm`,
        mixtures: ["Non-Reactive"],
        compatibility: ["715", "DFR 2001"],
        pdfModelUrl: 'src/assets/pdfs/models/6dm.pdf'
    },
    {
        model: "8AL",
        material: "Aluminum",
        pressure: "500 psig/34.5 bar",
        content: "58",
        dimensions: `14.25" x 3.5" / 362 mm x 89 mm`,
        mixtures: ["Reactive", "Non-Reactive"],
        compatibility: ["715", "DFR 2001", "DFR 2004"],
        pdfModelUrl: 'src/assets/pdfs/models/8al.pdf'
    },
    {
        model: "6D",
        material: "Steel",
        pressure: "1000 psig/69 bar",
        content: "103",
        dimensions: `13.875" x 3.25" / 352 mm x 83 mm`,
        mixtures: ["Non-Reactive"],
        compatibility: ["715", "DFR 2001", "DFR 2004"],
        pdfModelUrl: 'src/assets/pdfs/models/6d.pdf'
    },
    {
        model: "10AL",
        material: "Aluminum",
        pressure: "1000 psig/69 bar",
        content: "116",
        dimensions: `15" x 3.5" / 381 mm x 89 mm`,
        mixtures: ["Reactive", "Non-Reactive"],
        compatibility: ["715", "DFR 2001", "DFR 2004"],
        pdfModelUrl: 'src/assets/pdfs/models/10al.pdf'
    },
];
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
            follow the links for more details…..
        </p>
        <SpaceComponent size="paragraph" />
        <div class="flex justify-center">
            <img src="@/assets/calgaz_cylinders_and_accessories.png" alt="Calibration Gas Cylinders" load="lazy"
                class="max-w-full h-auto" />
        </div>
        <SpaceComponent size="paragraph" />
        <div class="table-styling">
            <table class="min-w-full">
                <thead class="table-header">
                    <tr>
                        <th class="table-element">Model<br /></th>
                        <th class="table-element">Material</th>
                        <th class="table-element">Pressure</th>
                        <th class="table-element">Gas Content<br />(Liters)</th>
                        <th class="table-element">Dimensions</th>
                        <th class="table-element">Mixtures</th>
                        <th class="table-element">Regulator Compatibility<br /></th>
                    </tr>
                </thead>
                <tbody class="table-borders">
                    <tr v-for="(item, index) in gasCylinders" :key="index">
                        <td class="table-element text-[#0a1f3d] underline"><a :href="item.pdfModelUrl"
                                class="table-element" target="_blank" rel="noopener noreferrer">
                                {{ item.model }}
                            </a>
                        </td>
                        <td class="table-element">{{ item.material }}</td>
                        <td class="table-element">{{ item.pressure }}</td>
                        <td class="table-element">{{ item.content }}</td>
                        <td class="table-element">{{ item.dimensions }}</td>
                        <td class="table-element whitespace-nowrap">
                            <template v-for="(mixture, i) in item.mixtures" :key="i">
                                {{ mixture }}<span v-if="i < item.mixtures.length - 1">, </span>
                            </template>
                        </td>
                        <td class="table-element text-[#0a1f3d] underline whitespace-nowrap">
                            <template v-for="(comp, i) in item.compatibility" :key="i">
                                <router-link v-if="regulatorRouteMap[comp]"
                                    :to="{ name: 'Regulator Series', params: { regulator_id: regulatorRouteMap[comp] } }"
                                    class="underline text-[#0a1f3d]">
                                    {{ comp }}
                                </router-link>
                                <span v-else>{{ comp }}</span>
                                <span v-if="i < item.compatibility.length - 1">, </span>
                            </template>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </CenteredContent>
</template>
