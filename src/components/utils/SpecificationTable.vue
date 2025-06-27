<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    rows: Array<{ label: string; key: string }>;
    models: Array<Record<string, any>>;
    tableLabel?: string;
}>();
</script>

<template>
    <div class="sm:hidden space-y-6">
        <div v-for="model in models" :key="model[rows[0].key]" class="border border-gray-200 rounded-lg p-4 shadow-sm">
            <h3>
                {{ model[rows[0].key] }}
            </h3>
            <dl class="grid grid-cols-2 gap-x-4 gap-y-2">
                <template v-for="col in rows.filter(c => c.key !== rows[0].key)" :key="col.key">
                    <dt class="table-element padding">{{ col.label }}</dt>
                    <dd class="table-element">
                        {{ model[col.key] ?? '—' }}
                    </dd>
                </template>
            </dl>
        </div>
    </div>
    <div class="table-styling-sm-plus">
        <table class="min-w-full table-auto border-collapse" :aria-label="tableLabel || 'Specification Table'">
            <caption class="sr-only">{{ tableLabel || 'Specification Table' }}</caption>
            <thead class="table-header">
                <tr>
                    <th scope="col" class="table-element padding">
                        {{ rows[0].label }}
                    </th>
                    <th v-for="item in models" :key="item[rows[0].key]" scope="col" class="table-element">
                        {{ item[rows[0].key] }}
                    </th>
                </tr>
            </thead>

            <tbody class="table-borders">
                <tr v-for="col in rows.filter(c => c.key !== rows[0].key)" :key="col.key">
                    <th scope="row" class="table-element padding">
                        {{ col.label }}
                    </th>

                    <td v-for="item in models" :key="item[rows[0].key] + '-' + col.key" class="table-element">
                        {{ item[col.key] ?? '—' }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
