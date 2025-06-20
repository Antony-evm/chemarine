<template>
    <nav class="fixed-top liquid-glass navbar-layout">
        <div>
            <router-link to="/">
                Chemical Marine Inspections
            </router-link>
        </div>

        <ul class="flex gap-8 relative">
            <li class="relative group">
                <span class="navbar-element">Products</span>
                <ul
                    class="liquid-glass w-56 absolute left-0 mt-2 py-2 px-4 space-y-2 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition duration-200 z-50">
                    <li>
                        <router-link to="/gas-detectors" class="navbar-element">
                            Gas Detection Instruments
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/calibration-gases" class="navbar-element">
                            Calibration Gases
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/spare-parts" class="navbar-element">
                            Spare Parts
                        </router-link>
                    </li>
                </ul>
            </li>

            <li><router-link to="/services" class="navbar-element">Services</router-link></li>
            <li><router-link to="/certificates" class="navbar-element">Certificates</router-link></li>
            <li><router-link to="/contact" class="navbar-element">Contact Us</router-link></li>
        </ul>
    </nav>
</template>


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
