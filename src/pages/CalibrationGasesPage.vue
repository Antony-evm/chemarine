<script setup lang="ts">
import CenteredContent from '@/components/utils/CenteredContent.vue';
import SpaceComponent from '@/components/utils/SpaceComponent.vue';
import SectionDivider from '@/components/utils/SectionDivider.vue';
import { GASCYLINDERS, REGULATOR_ROUTE_MAP } from '@/data/calibrationGases';
import { COMPANY_NAME } from '@/data/contactInformation';
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

        <div class="flex justify-center mb-6">
            <img src="@/assets/calibration_gases/calgaz_cylinders_and_accessories.png" alt="Calibration Gas Cylinders"
                loading="lazy"
                class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain" />
        </div>

        <!-- Mobile: Card Layout -->
        <div class="block md:hidden space-y-4">
            <div v-for="(item, index) in GASCYLINDERS" :key="index"
                class="border border-gray-300 rounded-lg p-4 shadow-sm">
                <h3 class="font-semibold text-lg mb-3 text-[#0a1f3d]">
                    <a :href="item.pdfModelUrl" class="underline" target="_blank" rel="noopener noreferrer">
                        {{ item.model }}
                    </a>
                </h3>
                <div class="space-y-2 text-sm">
                    <div><span class="font-medium">Material:</span> {{ item.material }}</div>
                    <div><span class="font-medium">Pressure:</span> {{ item.pressure }}</div>
                    <div><span class="font-medium">Gas Content:</span> {{ item.content }} Liters</div>
                    <div><span class="font-medium">Dimensions:</span> {{ item.dimensions }}</div>
                    <div><span class="font-medium">Mixtures:</span>
                        <span v-for="(mixture, i) in item.mixtures" :key="i">
                            {{ mixture }}<span v-if="i < item.mixtures.length - 1">, </span>
                        </span>
                    </div>
                    <div><span class="font-medium">Regulator Compatibility:</span>
                        <span v-for="(comp, i) in item.compatibility" :key="i">
                            <router-link v-if="REGULATOR_ROUTE_MAP[comp]"
                                :to="{ name: 'Regulator Series', params: { regulator_id: REGULATOR_ROUTE_MAP[comp] } }"
                                class="underline text-[#0a1f3d]">
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
            <div class="table-styling">
                <table class="min-w-full text-sm lg:text-base" aria-label="Calibration Gas Cylinders Specifications">
                    <caption class="sr-only">Technical specifications of available calibration gas cylinders including
                        model, material, pressure, content, dimensions, mixtures, and regulator compatibility</caption>
                    <thead class="table-header">
                        <tr>
                            <th scope="col" class="table-element padding">Model</th>
                            <th scope="col" class="table-element padding">Material</th>
                            <th scope="col" class="table-element padding">Pressure</th>
                            <th scope="col" class="table-element padding">Gas Content<br />(Liters)</th>
                            <th scope="col" class="table-element padding">Dimensions</th>
                            <th scope="col" class="table-element padding">Mixtures</th>
                            <th scope="col" class="table-element padding">Regulator Compatibility</th>
                        </tr>
                    </thead>
                    <tbody class="table-borders">
                        <tr v-for="(item, index) in GASCYLINDERS" :key="index">
                            <th scope="row" class="table-element text-[#0a1f3d] underline">
                                <a :href="item.pdfModelUrl" class="table-element" target="_blank"
                                    rel="noopener noreferrer">
                                    {{ item.model }}
                                </a>
                            </th>
                            <td class="table-element">{{ item.material }}</td>
                            <td class="table-element">{{ item.pressure }}</td>
                            <td class="table-element">{{ item.content }}</td>
                            <td class="table-element">{{ item.dimensions }}</td>
                            <td class="table-element">
                                <template v-for="(mixture, i) in item.mixtures" :key="i">
                                    {{ mixture }}<span v-if="i < item.mixtures.length - 1">, </span>
                                </template>
                            </td>
                            <td class="table-element text-[#0a1f3d] underline">
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
        </div>

    </CenteredContent>
</template>
