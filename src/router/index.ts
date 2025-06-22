import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { GAS_DETECTION_INSTRUMENTS } from "@/data/gasDetectionInstruments";

const routes: RouteRecordRaw[] = [
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
    name: "Regulator Series",
    component: () => import("@/pages/RegulatorPage.vue"),
  },
  {
    path: "/gas-detection-instruments",
    name: "Gas Detection Instruments",
    component: () => import("@/pages/GasDetectionInstrumentsPage.vue"),
  },
  {
    path: "/gas-detection-instrument/:category/:instrumentKey",
    name: "Gas Detection Instrument Detail",
    component: () => import("@/pages/GasDetectionInstrumentDetailPage.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
