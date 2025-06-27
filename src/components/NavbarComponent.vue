<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const isOpen = ref(false)
const openedByKeyboard = ref(false)
const trigger = ref<HTMLElement | null>(null)
const menu = ref<HTMLElement | null>(null)

// keep aria-expanded in sync
function updateAria() {
    if (trigger.value) {
        trigger.value.setAttribute('aria-expanded', String(isOpen.value))
    }
}

// open (mouse or keyboard)
function openDropdown(byKeyboard = false) {
    openedByKeyboard.value = byKeyboard
    isOpen.value = true
    updateAria()
    if (byKeyboard) {
        // move focus into the menu
        nextTick(() => {
            menu.value
                ?.querySelector<HTMLElement>('[role="menuitem"]')
                ?.focus()
        })
    }
}

// close and reset keyboard flag
function closeDropdown() {
    isOpen.value = false
    openedByKeyboard.value = false
    updateAria()
    trigger.value?.focus()
}

// toggle on click
function toggleDropdown() {
    if (isOpen.value) {
        closeDropdown()
    } else {
        openDropdown(false)
    }
}

// keyboard on the trigger
function onTriggerKeydown(e: KeyboardEvent) {
    switch (e.key) {
        case 'Enter':
        case ' ':
            e.preventDefault()
            openDropdown(true)
            break
        case 'Escape':
            e.preventDefault()
            closeDropdown()
            break
    }
}

// arrow‐key navigation inside the menu
function onMenuKeydown(e: KeyboardEvent) {
    const items = Array.from(
        menu.value?.querySelectorAll<HTMLElement>('[role="menuitem"]') || []
    )
    const idx = items.findIndex(i => i === document.activeElement)
    if (!items.length) return

    if (e.key === 'ArrowDown') {
        e.preventDefault()
        items[(idx + 1) % items.length].focus()
    } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        items[(idx - 1 + items.length) % items.length].focus()
    } else if (e.key === 'Escape') {
        e.preventDefault()
        closeDropdown()
    }
}

// click‐away to close
function onClickOutside(e: MouseEvent) {
    if (
        !trigger.value?.contains(e.target as Node) &&
        !menu.value?.contains(e.target as Node)
    ) {
        closeDropdown()
    }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
    <nav class="fixed-top liquid-glass navbar-layout padding" role="navigation" aria-label="Main navigation">
        <div>
            <router-link to="/" aria-label="Chemical Marine Inspections - Home">
                Chemical Marine Inspections
            </router-link>
        </div>

        <ul class="flex gap-8 relative" role="menubar">
            <li role="none"><router-link to="/" class="navbar-element" role="menuitem">About</router-link></li>
            <li class="relative" role="none" @mouseenter="() => { if (!openedByKeyboard.valueOf()) openDropdown() }"
                @mouseleave="() => { if (!openedByKeyboard.valueOf()) closeDropdown() }">
                <button ref="trigger" @click="toggleDropdown" @keydown="onTriggerKeydown" class="navbar-element"
                    role="menuitem" aria-haspopup="true" aria-expanded="false" id="productsButton">
                    Products
                </button>

                <transition name="fade-scale">
                    <ul v-show="isOpen" ref="menu" class="liquid-glass absolute left-0 mt-2 py-2 px-4 space-y-2 rounded-lg shadow-lg
                   opacity-0 scale-95 origin-top-left
                   transition-all duration-200" :class="{ 'opacity-100 scale-100': isOpen }" role="menu"
                        aria-labelledby="productsButton" @keydown="onMenuKeydown">
                        <li role="none">
                            <router-link to="/gas-detection-instruments" class="navbar-element block" role="menuitem"
                                tabindex="-1">
                                Gas Detection Instruments
                            </router-link>
                        </li>
                        <li role="none">
                            <router-link to="/calibration-gases" class="navbar-element block" role="menuitem"
                                tabindex="-1">
                                Calibration Gases
                            </router-link>
                        </li>
                        <li role="none">
                            <router-link to="/spare-parts" class="navbar-element block" role="menuitem" tabindex="-1">
                                Spare Parts
                            </router-link>
                        </li>
                    </ul>
                </transition>
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

<style scoped>
.navbar-element {
    @apply hover:text-teal-200 transition cursor-pointer
}

.fixed-top {
    @apply fixed top-0 left-0 z-50
}

.liquid-glass {
    @apply bg-white/10 backdrop-blur-sm border-b border-white/20 shadow-lg
}

.navbar-layout {
    @apply flex items-center justify-between w-full
}
</style>
