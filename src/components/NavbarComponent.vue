<template>
    <nav class="fixed top-0 left-0 w-full z-50
             bg-white/10 backdrop-blur-sm
             border-b border-white/20
             shadow-lg flex items-center justify-between px-8 py-4">
        <div>
            <router-link to='/'>Chemical Marine Inspections</router-link>
        </div>
        <ul class="flex gap-8">
            <router-link to="/products" class="navbar-element">Products</router-link>
            <router-link to="/services" class="navbar-element">Services</router-link>
            <router-link to="/certificates" class="navbar-element">Certificates</router-link>
            <router-link to="/contact" class="navbar-element">Contact Us</router-link>
        </ul>
    </nav>
</template>

<style scoped>
.navbar-element {
    @apply hover:text-teal-200 transition
}
</style>
