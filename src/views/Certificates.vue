<template>
    <div>
        <header class="header-bg">
            <nav class="navbar">
                <div class="logo">Chemical Marine Inspections</div>
                <ul class="nav-links">
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#" class="active">Certificates</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header>

        <section class="content">
            <h2>Certified Excellence</h2>
            <p>
                We are proudly certified by <strong>ABS Quality Evaluations</strong> under
                <strong>ISO 9001:2015</strong>, ensuring the highest standards in operations and services.
            </p>

            <div class="certificate-card">
                <!-- <img src="/certificate.png" alt="ABS Quality Certificate" /> -->
                <!-- <a href="/certificate.pdf" class="download-btn" download>Download PDF</a> -->
            </div>
        </section>
    </div>
</template>

<style scoped>
.header-bg {
    background: url('/header.jpg') center/cover no-repeat;
    height: 250px;
    position: relative;
    display: flex;
    align-items: center;
    backdrop-filter: blur(4px);
}

.header-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
}

.navbar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 2rem;
    position: relative;
    z-index: 1;
    color: white;
}

.logo {
    font-weight: bold;
    font-size: 1.25rem;
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

.content {
    max-width: 800px;
    margin: 3rem auto;
    padding: 0 1rem;
    text-align: center;
}

h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.certificate-card {
    margin-top: 2rem;
    padding: 1.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    background: white;
}

.certificate-card img {
    max-width: 100%;
    height: auto;
    border-radius: 6px;
    margin-bottom: 1rem;
}

.download-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #00d1d1;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.3s;
}

.download-btn:hover {
    background: #00a3a3;
}
</style>
