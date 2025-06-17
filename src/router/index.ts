// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import CertificatesPage from "@/pages/CertificatesPage.vue";
import ServicesPage from "@/pages/ServicesPage.vue";
import HomePage from "@/pages/HomePage.vue";
import ContactUsPage from "@/pages/ContactUsPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/certificates",
    name: "Certificates",
    component: CertificatesPage,
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactUsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
