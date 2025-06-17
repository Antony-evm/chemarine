// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import CertificatesPage from "@/pages/CertificatesPage.vue";
import ServicesPage from "@/pages/ServicesPage.vue";

const routes = [
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
