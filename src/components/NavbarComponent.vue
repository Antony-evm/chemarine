<template>
    <nav class="fixed top-0 left-0 w-full z-50
             bg-white/10 backdrop-blur-sm
             border-b border-white/20
             shadow-lg flex items-center justify-between px-8 py-4">
        <div class="text-2xl font-bold text-white drop-shadow logo">
            <router-link to='/'>Chemical Marine Inspections</router-link>
        </div>
        <ul class="flex gap-8 nav-links">
            <router-link to="/products" class="hover:text-teal-200 transition">Products</router-link>
            <router-link to="/services" class="hover:text-teal-200 transition">Services</router-link>
            <router-link to="/certificates" class="hover:text-teal-200 transition">Certificates</router-link>
            <router-link to="/contact" class="hover:text-teal-200 transition">Contact Us</router-link>
        </ul>
    </nav>
</template>
