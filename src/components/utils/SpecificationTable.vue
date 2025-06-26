<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    rows: Array<{ label: string; key: string }>;
    models: Array<Record<string, any>>;
    tableLabel?: string;
}>();
</script>

<template>
    <div class="table-styling">
        <table class="min-w-full" :aria-label="tableLabel || 'Specification Table'">
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
