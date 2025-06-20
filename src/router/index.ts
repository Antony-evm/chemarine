// src/router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import CertificatesPage from "@/pages/CertificatesPage.vue";
import ServicesPage from "@/pages/ServicesPage.vue";
import HomePage from "@/pages/HomePage.vue";
import ContactUsPage from "@/pages/ContactUsPage.vue";
import SparePartsPage from "@/pages/SparePartsPage.vue";
import CalibrationGasesPage from "@/pages/CalibrationGasesPage.vue";
import SevenHundredSeriesRegulatorsPage from "@/pages/SevenHundredSeriesRegulatorsPage.vue";

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
  {
    path: "/spare-parts",
    name: "Spare Parts",
    component: SparePartsPage,
  },
  {
    path: "/calibration-gases",
    name: "Calibration Gases",
    component: CalibrationGasesPage,
  },
  {
    path: "/calibration-gases/regulators/700",
    name: "Regulators - 700 Series",
    component: SevenHundredSeriesRegulatorsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
