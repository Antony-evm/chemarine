import path from "@/assets/gas_detection_instruments/gmi_ps_500.png";
import brochure from "@/assets/pdfs/instrument_specs/gmi_ps_500.pdf";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const gmi_ps_500 = createInstrumentWithImport(
  "GMI PS 500",
  [
    "Over 15 “plug-and-play” smart sensors",
    "Audible and visual alarms",
    "Robust construction",
    "Easy maintenance",
    "Low cost of ownership",
  ],
  [
    "Designed by our customers, this robust and accurate gas detector provides unrivaled protection in confined space applications.",
    "The PS500 can be tailored to detect up to fi​ve gases with its toxic and catalytic sensors, photo ionisation detectors, and infrared capabilities. “Plug and Play” option allows the customer to “plug in” a new board with a different gas range.",
    "The PS500 is particularly useful in noisy environments, featuring a very loud (95dBA) penetrating and distinctive audible alarm together with high visibility large area visual alarm.",
    "Pump, diffusion or both together, allowing pumped sample for pre-entry checking and diffusion in confined space working, thus maximising battery life.",
    "A robust, moulded, rubberised casing guaranteeing Hi-Impact resistance, the PS500 can be used in the most demanding industrial environments.",
  ],
  path,
  brochure
);
