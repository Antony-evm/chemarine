<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const isOpen = ref(false)
const openedByKeyboard = ref(false)
const trigger = ref<HTMLElement | null>(null)
const menu = ref<HTMLElement | null>(null)
const mobileMenuButton = ref<HTMLElement | null>(null)

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
    const wasOpenedByKeyboard = openedByKeyboard.value
    openedByKeyboard.value = false
    updateAria()
    // Only restore focus if the dropdown was opened by keyboard
    if (wasOpenedByKeyboard) {
        trigger.value?.focus()
    }
}

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
    // Handle desktop dropdown - only close if it's actually open
    if (isOpen.value &&
        !trigger.value?.contains(e.target as Node) &&
        !menu.value?.contains(e.target as Node)) {
        closeDropdown()
    }

    // Handle mobile menu - only close if clicking outside and not on the mobile menu button or mobile menu
    if (isMobileOpen.value) {
        const target = e.target as Element
        // Don't close if clicking on the mobile menu button or inside the mobile menu overlay
        if (!mobileMenuButton.value?.contains(e.target as Node) &&
            !target.closest('.mobile-menu-overlay')) {
            isMobileOpen.value = false
            document.body.style.overflow = ''
        }
    }
}

const isMobileOpen = ref(false)

function toggleMobileMenu() {
    isMobileOpen.value = !isMobileOpen.value

    // Prevent body scroll when mobile menu is open
    if (isMobileOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => {
    document.removeEventListener('click', onClickOutside)
    // Restore body scroll when component unmounts
    document.body.style.overflow = ''
})
</script>

<template>
    <nav class="fixed-top liquid-glass navbar-layout padding" role="navigation" aria-label="Main navigation">
        <div class="flex items-center">
            <router-link to="/" aria-label="Chemical Marine Inspections - Home" class="flex items-center">
                <img src="@/assets/logo.png" alt="Chemical Marine Inspections" class="h-8 sm:h-10 md:h-12 w-auto"
                    loading="eager" />
            </router-link>
        </div>

        <ul class="hidden md:flex gap-8 relative" role="menubar">
            <li role="none"><router-link to="/" class="navbar-element" role="menuitem">About</router-link></li>
            <li class="relative" role="none" @mouseenter="() => { if (!openedByKeyboard.valueOf()) openDropdown() }"
                @mouseleave="() => { if (!openedByKeyboard.valueOf()) closeDropdown() }">
                <button ref="trigger" @click="toggleDropdown" @keydown="onTriggerKeydown" class="navbar-element"
                    role="menuitem" aria-haspopup="true" aria-expanded="false" id="productsButton">
                    Products
                </button>

                <transition name="fade-scale">
                    <ul v-show="isOpen" ref="menu" class="bg-warm_white absolute left-0 mt-2 py-3 px-4 space-y-2 rounded-lg shadow-xl
                   opacity-0 scale-95 origin-top-left min-w-[240px]
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
        </ul> <button ref="mobileMenuButton"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-md relative z-[110] text-graphite hover:text-teal-500"
            @click.stop="toggleMobileMenu" :aria-expanded="isMobileOpen" aria-label="Toggle navigation menu">
            <!-- Hamburger Icon -->
            <svg v-if="!isMobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                </path>
            </svg>
            <!-- Close Icon -->
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button> <!-- Full-screen mobile menu overlay -->
        <transition name="fade">
            <div v-show="isMobileOpen"
                class="mobile-menu-overlay md:hidden fixed inset-0 liquid-glass-mobile w-full h-screen ">
                <div class="relative z-10 flex flex-col h-full">
                    <!-- Navigation menu -->
                    <nav class="flex-1 flex flex-col justify-center px-0">
                        <ul class="space-y-8 text-center">
                            <li>
                                <RouterLink to="/" class="text-2xl font-semibold mb-4" @click="toggleMobileMenu">
                                    About
                                </RouterLink>
                            </li>

                            <!-- Products submenu -->
                            <li>
                                <div class="text-2xl font-semibold mb-4">Products</div>
                                <ul class="space-y-4 pl-4">
                                    <li>
                                        <RouterLink to="/gas-detection-instruments" class="block transition-colors py-2"
                                            @click="toggleMobileMenu">
                                            Gas Detection Instruments
                                        </RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/calibration-gases" class="block transition-colors py-2"
                                            @click="toggleMobileMenu">
                                            Calibration Gases
                                        </RouterLink>
                                    </li>
                                    <li>
                                        <RouterLink to="/spare-parts" class="block transition-colors py-2"
                                            @click="toggleMobileMenu">
                                            Spare Parts
                                        </RouterLink>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <RouterLink to="/services" class="text-2xl font-semibold mb-4"
                                    @click="toggleMobileMenu">
                                    Services
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/certificates" class="text-2xl font-semibold mb-4"
                                    @click="toggleMobileMenu">
                                    Certificates
                                </RouterLink>
                            </li>

                            <li>
                                <RouterLink to="/contact" class="text-2xl font-semibold mb-4" @click="toggleMobileMenu">
                                    Contact Us
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </transition>

    </nav>
</template>

<style scoped>
.navbar-element {
    transition: color 0.2s ease;
    cursor: pointer;
    @apply text-graphite hover:text-teal-500
}

.fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 60;
}

.liquid-glass {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.liquid-glass-mobile {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    z-index: 100;
    @apply bg-warm_white
}

.navbar-layout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.padding {
    padding: 1rem 2rem;
}

/* Fade transition for mobile menu */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

/* Scale transition for dropdown */
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: all 0.2s ease;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
    opacity: 1;
    transform: scale(1);
}

/* Mobile menu specific styles */
@media (max-width: 767px) {
    .padding {
        padding: 1rem;
    }
}

/* Prevent body scroll when mobile menu is open */
body:has(.mobile-menu-open) {
    overflow: hidden;
}
</style>
