<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import { GASCYLINDERS, REGULATOR_ROUTE_MAP } from '@/data/calibrationGases';
import { COMPANY_NAME } from '@/data/contactInformation';
import OptimizedImage from '@/components/utils/OptimizedImage.vue';
import calgazWebp from "@/assets/calibration_gases/calgaz_cylinders_and_accessories.webp";
import calgazPng from "@/assets/calibration_gases/calgaz_cylinders_and_accessories.png";
</script>

<template>
    <SpaceComponent size="page" />
    <CenteredContent>
        <h1>Calibration Gases</h1>
        <SectionDivider />
        <div class="space-y-4 md:space-y-6">
            <p><strong>{{ COMPANY_NAME }}</strong>, in partnership with <strong>CalGaz International LLC</strong>,
                provides a comprehensive range of precision calibration gases to our customers. All calibration
                gases are fully traceable to international standards and include comprehensive analysis certificates.
                We guarantee exceptional quality with extended shelf life to maximize your investment and operational
                efficiency.
            </p>

            <p>We also supply the essential equipment for gas handling, including regulator valves, and provide
                equipment for the safe disposal and recycling of empty cylinders.
            </p>

            <p>Calibration gases and handling equipment can be dispatched to your nominated forwarder with
                minimal lead time, ensuring your operations continue without interruption.
            </p>

            <p>The following table details the technical specifications of our calibration gas cylinders.
                Click on the model links for comprehensive technical documentation.
            </p>
        </div>

        <SpaceComponent size="paragraph" />

        <div class="flex mx-auto justify-center w-[100px] sm:w-[150px] md:w-[200px] mb-6">
            <OptimizedImage :srcSet="calgazWebp" :src="calgazPng" alt="Calibration Gas Cylinders" loading="lazy"
                imgClass="w-24 sm:w-34 md:w-42 lg:w-48 h-18 sm:26 md:32" fetchpriority="low" />
        </div>

        <!-- Mobile: Card Layout -->
        <div class="block md:hidden space-y-4">
            <div v-for="(item, index) in GASCYLINDERS" :key="index"
                class="border border-gray-300 rounded-lg p-4 shadow-sm">
                <h3 class="table-header">
                    <a :href="item.pdfModelUrl" class="underline my-text-size" target="_blank" rel="noopener noreferrer"
                        :aria-label="`Download ${item.model} calibration gas cylinder specification PDF`">
                        {{ item.model }}
                    </a>
                </h3>
                <div class="space-y-2">
                    <div><span class="table-element padding">Material:</span> {{ item.material }}</div>
                    <div><span class="table-element padding">Pressure:</span> {{ item.pressure }}</div>
                    <div><span class="table-element padding">Gas Content:</span> {{ item.content }} Liters</div>
                    <div><span class="table-element padding">Dimensions:</span> {{ item.dimensions }}</div>
                    <div><span class="table-element padding my-text-size">Mixtures:</span>
                        <span v-for="(mixture, i) in item.mixtures" :key="i">
                            {{ mixture }}<span v-if="i < item.mixtures.length - 1">, </span>
                        </span>
                    </div>
                    <div><span class="table-element padding my-text-size">Regulator Compatibility:</span>
                        <span v-for="(comp, i) in item.compatibility" :key="i">
                            <router-link v-if="REGULATOR_ROUTE_MAP[comp]"
                                :to="{ name: 'Regulator Series', params: { regulator_id: REGULATOR_ROUTE_MAP[comp] } }"
                                class="underline my-text-size"
                                :aria-label="`View details for ${comp} regulator series`">
                                {{ comp }}
                            </router-link>
                            <span v-else>{{ comp }}</span>
                            <span v-if="i < item.compatibility.length - 1">, </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Desktop: Table Layout -->
        <div class="hidden md:block overflow-x-auto">
            <div class="table-styling-sm-plus">
                <table class="min-w-full table-auto border-collapse"
                    aria-label="Calibration Gas Cylinders Specifications">
                    <caption class="sr-only">Technical specifications of available calibration gas cylinders including
                        model, material, pressure, content, dimensions, mixtures, and regulator compatibility</caption>
                    <thead class="table-header">
                        <tr>
                            <th scope="col" class="table-element padding my-text-size font-normal">Model</th>
                            <th scope="col" class="table-element padding my-text-size font-normal">Material</th>
                            <th scope="col" class="table-element padding my-text-size font-normal">Pressure</th>
                            <th scope="col" class="table-element padding my-text-size font-normal">Gas
                                Content<br />(Liters)</th>
                            <th scope="col" class="table-element padding my-text-size font-normal">Dimensions</th>
                            <th scope="col" class="table-element padding my-text-size font-normal">Mixtures</th>
                            <th scope="col" class="table-element padding my-text-size font-normal">Regulator
                                Compatibility</th>
                        </tr>
                    </thead>
                    <tbody class="table-borders">
                        <tr v-for="(item, index) in GASCYLINDERS" :key="index">
                            <td class="table-element padding underline my-text-size font-normal hover:text-teal-500">
                                <a :href="item.pdfModelUrl"
                                    class='table-element my-text-size font-normal hover:text-teal-500' target="_blank"
                                    rel="noopener noreferrer"
                                    :aria-label="`Download ${item.model} calibration gas cylinder specification PDF`">
                                    {{ item.model }}
                                </a>
                            </td>
                            <td class="table-element padding font-normal my-text-size">{{ item.material }}</td>
                            <td class="table-element padding font-normal my-text-size">{{ item.pressure }}</td>
                            <td class="table-element padding font-normal my-text-size">{{ item.content }}</td>
                            <td class="table-element padding font-normal my-text-size">{{ item.dimensions }}</td>
                            <td class="table-element padding font-normal my-text-size">
                                <template v-for="(mixture, i) in item.mixtures" :key="i">
                                    {{ mixture }}<span v-if="i < item.mixtures.length - 1">, </span>
                                </template>
                            </td>
                            <td class="table-element padding underline my-text-size">
                                <template v-for="(comp, i) in item.compatibility" :key="i">
                                    <router-link v-if="REGULATOR_ROUTE_MAP[comp]"
                                        :to="{ name: 'Regulator Series', params: { regulator_id: REGULATOR_ROUTE_MAP[comp] } }"
                                        class="table-element underline my-text-size font-normal hover:text-teal-500"
                                        :aria-label="`View details for ${comp} regulator series`">
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
        </div>

    </CenteredContent>
</template>
