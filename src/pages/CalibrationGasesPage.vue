<script setup lang="ts">
import ContentSection from '@/components/utils/ContentSection.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import { GASCYLINDERS, REGULATOR_ROUTE_MAP } from '@/data/calibrationGases';
</script>

<template>
    <ContentSection title="Calibration Gases" title-tag="h1" with-page-spacing>
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
            <img src="@/assets/calibration_gases/calgaz_cylinders_and_accessories.png" alt="Calibration Gas Cylinders"
                load="lazy" class="max-w-full h-auto" />
        </div>
        <SpaceComponent size="paragraph" />
        <div class="table-styling">
            <table class="min-w-full" aria-label="Calibration Gas Cylinders Specifications">
                <caption class="sr-only">Technical specifications of available calibration gas cylinders including
                    model, material, pressure, content, dimensions, mixtures, and regulator compatibility</caption>
                <thead class="table-header">
                    <tr>
                        <th scope="col" class="table-element">Model<br /></th>
                        <th scope="col" class="table-element">Material</th>
                        <th scope="col" class="table-element">Pressure</th>
                        <th scope="col" class="table-element">Gas Content<br />(Liters)</th>
                        <th scope="col" class="table-element">Dimensions</th>
                        <th scope="col" class="table-element">Mixtures</th>
                        <th scope="col" class="table-element">Regulator Compatibility<br /></th>
                    </tr>
                </thead>
                <tbody class="table-borders">
                    <tr v-for="(item, index) in GASCYLINDERS" :key="index">
                        <th scope="row" class="table-element text-[#0a1f3d] underline">
                            <a :href="item.pdfModelUrl" class="table-element" target="_blank" rel="noopener noreferrer">
                                {{ item.model }}
                            </a>
                        </th>
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
                                <router-link v-if="REGULATOR_ROUTE_MAP[comp]"
                                    :to="{ name: 'Regulator Series', params: { regulator_id: REGULATOR_ROUTE_MAP[comp] } }"
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
    </ContentSection>
</template>
