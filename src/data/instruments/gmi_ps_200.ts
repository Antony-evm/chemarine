import path from "@/assets/gas_detection_instruments/gmi_ps_200.png";
import brochure from "@/assets/pdfs/instrument_specs/gmi_ps_200.pdf";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const gmi_ps_200 = createInstrumentWithImport(
  "GMI PS 200",
  [
    "Simple 2-button operation",
    "Any combination of LEL/O2/CO/H2S",
    "Audible, visual and vibrating alarms",
    "Fully certified",
    "Internal pump (optional)",
    "Datalogging capabilities (up to 6 months)",
    "Run-time up to 80 hours, when using low power LEL sensor (optional)",
    "Quick field calibration (optional)",
    "Lightweight",
    "Robust construction",
    "GDCloud compatible",
  ],
  [
    "The PS200 Series combines quality, ruggedness and advanced technology in a user friendly, portable gas monitor.",
    "It is compact, lightweight, water resistant, extremely robust, and is certified to multiple international and regional standards.",
    "The PS200 can measure any combination of LEL, ​O2, CO and H2S making it suitable for a wide range of personal monitoring and confined space applications.",
    "In addition to extensive datalogging capabilities, the PS200 is available with an optional internal pump and an extensive range of accessories to meet a wide variety of user applications.",
    "Importantly, the PS200 has been des​​igned to enable easier user maintenance which includes a fully automatic calibration station to simplify product compliance.",
  ],
  path,
  brochure
);
