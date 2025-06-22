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
    props: (route) => {
      const { category, instrumentKey } = route.params as {
        category: string;
        instrumentKey: string;
      };

      // Find the matching instrument object
      let instrumentData: {
        title: string;
        alt: string;
        imgPath: string;
        features: string[];
        overview: string[];
      } | null = null;

      for (const section of GAS_DETECTION_INSTRUMENTS) {
        const group = section.instruments[category];
        if (group && group[instrumentKey]) {
          instrumentData = group[instrumentKey];
          break;
        }
      }

      if (!instrumentData) {
        // No match—could also redirect or throw a 404 here
        return {};
      }

      // Inject each field as its own prop
      return {
        title: instrumentData.title,
        alt: instrumentData.alt,
        imgPath: instrumentData.imgPath,
        features: instrumentData.features,
        overview: instrumentData.overview,
      };
    },
  },

  // —————————————
  // Catch-all 404
  // —————————————
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: () => import("@/pages/NotFoundPage.vue"),
  // },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
