import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/certificates",
    name: "Certificates",
    component: () => import("@/pages/CertificatesPage.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("@/pages/ServicesPage.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/pages/ContactUsPage.vue"),
  },
  {
    path: "/spare-parts",
    name: "Spare Parts",
    component: () => import("@/pages/SparePartsPage.vue"),
  },
  {
    path: "/calibration-gases",
    name: "Calibration Gases",
    component: () => import("@/pages/CalibrationGasesPage.vue"),
  },
  {
    path: "/calibration-gases/regulator/:regulator_id",
    name: "RegulatorDetail",
    component: () => import("@/pages/RegulatorPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
