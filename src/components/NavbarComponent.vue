<template>

    <nav class="navbar w-full">
        <div class="logo">
            <router-link to='/'>Chemical Marine Inspections</router-link>
        </div>
        <ul class="nav-links">
            <router-link to="/products">Products</router-link>
            <router-link to="/services">Services</router-link>
            <router-link to="/certificates">Certificates</router-link>
            <router-link to="/contact">Contact Us</router-link>
        </ul>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 2rem;
    position: relative;
    z-index: 1;
    color: white;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a.active,
.nav-links a:hover {
    color: #00d1d1;
}
</style>