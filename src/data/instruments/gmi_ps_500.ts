import png1x from "@/assets/gas_detection_instruments/gmi_ps_500.png";
import webp1x from "@/assets/gas_detection_instruments/gmi_ps_500.webp";
import webp2x from "@/assets/gas_detection_instruments/gmi_ps_500@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/gmi_ps_500@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/gmi_ps_500.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const gmi_ps_500 = createInstrumentWithHighDPI(
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
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  "188",
  "300",
  "188/300",
  brochure
);
