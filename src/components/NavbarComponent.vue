<template>
    <nav class="fixed-top liquid-glass navbar-layout" role="navigation" aria-label="Main navigation">
        <div>
            <router-link to="/" aria-label="Chemical Marine Inspections - Home">
                Chemical Marine Inspections
            </router-link>
        </div>

        <ul class="flex gap-8 relative" role="menubar">
            <li role="none"><router-link to="/" class="navbar-element" role="menuitem">About</router-link></li>
            <li class="relative group" role="none"> <button class="navbar-element" role="menuitem" aria-haspopup="true"
                    aria-expanded="false" id="productsButton" @click="toggleDropdown" @keydown="handleDropdownKeydown"
                    ref="productsButton">
                    Products
                </button>
                <ul class="liquid-glass w-56 absolute left-0 mt-2 py-2 px-4 space-y-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition duration-200 z-50"
                    role="menu" aria-labelledby="productsButton"
                    :class="{ 'opacity-100 translate-y-0': isDropdownOpen }">
                    <li role="none">
                        <router-link to="/gas-detection-instruments" class="navbar-element" role="menuitem">
                            Gas Detection Instruments
                        </router-link>
                    </li>
                    <li role="none">
                        <router-link to="/calibration-gases" class="navbar-element" role="menuitem">
                            Calibration Gases
                        </router-link>
                    </li>
                    <li role="none">
                        <router-link to="/spare-parts" class="navbar-element" role="menuitem">
                            Spare Parts
                        </router-link>
                    </li>
                </ul>
            </li>

            <li role="none"><router-link to="/services" class="navbar-element" role="menuitem">Services</router-link>
            </li>
            <li role="none"><router-link to="/certificates" class="navbar-element"
                    role="menuitem">Certificates</router-link></li>
            <li role="none"><router-link to="/contact" class="navbar-element" role="menuitem">Contact Us</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isDropdownOpen = ref(false);
const productsButton = ref<HTMLElement | null>(null);

function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
    if (productsButton.value) {
        productsButton.value.setAttribute('aria-expanded', isDropdownOpen.value.toString());
    }
}

function handleDropdownKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleDropdown();
    } else if (event.key === 'Escape') {
        isDropdownOpen.value = false;
        if (productsButton.value) {
            productsButton.value.setAttribute('aria-expanded', 'false');
            productsButton.value.focus();
        }
    }
}
</script>

<style scoped>
.navbar-element {
    @apply hover:text-teal-200 transition cursor-pointer
}

.fixed-top {
    @apply fixed top-0 left-0 w-full z-50
}

.liquid-glass {
    @apply bg-white/10 backdrop-blur-sm border-b border-white/20 shadow-lg
}

.navbar-layout {
    @apply flex items-center justify-between px-8 py-4
}
</style>
