import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
  // Common redirects for alternative paths
  {
    path: "/about",
    redirect: "/",
  },
  {
    path: "/products",
    redirect: "/gas-detection-instruments",
  },
  {
    path: "/equipment",
    redirect: "/gas-detection-instruments",
  },
  {
    path: "/gases",
    redirect: "/calibration-gases",
  },
  {
    path: "/parts",
    redirect: "/spare-parts",
  },
  {
    path: "/contact-us",
    redirect: "/contact",
  },
  {
    path: "/404",
    name: "Not Found",
    component: () => import("@/pages/NotFoundPage.vue"),
    meta: {
      title: "Page Not Found - 404",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});
