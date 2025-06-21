<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    columns: Array<{ label: string; key: string }>;
    rows: Array<Record<string, any>>;
    tableLabel?: string;
}>();
</script>

<template>
    <div class="table-styling">
        <table class="min-w-full" :aria-label="tableLabel || 'Specification Table'">
            <thead class="table-header">
                <tr>
                    <th class="table-element">{{ columns[0].label }}</th>
                    <th v-for="item in rows" :key="item[columns[0].key]" class="table-element">
                        {{ item[columns[0].key] }}
                    </th>
                </tr>
            </thead>
            <tbody class="table-borders">
                <tr v-for="col in columns.filter(c => c.key !== columns[0].key)" :key="col.key">
                    <td class="table-element">{{ col.label }}</td>
                    <td v-for="item in rows" :key="item[columns[0].key] + '-' + col.key" class="table-element">
                        {{ item[col.key] ?? '—' }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
