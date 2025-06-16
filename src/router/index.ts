// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Certificates from "@/pages/CertificatesPage.vue";

const routes = [
  {
    path: "/certificates",
    name: "Certificates",
    component: Certificates,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
