import png1x from "@/assets/gas_detection_instruments/gmi_ps_500_calibration_station.png";
import webp1x from "@/assets/gas_detection_instruments/gmi_ps_500_calibration_station.webp";
import webp2x from "@/assets/gas_detection_instruments/gmi_ps_500_calibration_station@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/gmi_ps_500_calibration_station@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/gmi_ps_500_calibration_station.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const gmi_ps_500_calibration_station = createInstrumentWithHighDPI(
  "GMI PS500 Auto Bump/Calibration Station",
  [
    "Customer autonomy",
    "Cost savings for bigger fleets",
    "Minimum training for PS500 operators",
    "Operate wearing gloves",
    "Certificate printing",
    "History / traceability",
    "Suitable for different customers",
    "Stand-Alone: small fleet / less infrastructure",
    "PC mode: Workshop",
    "Ethernet: large fleet / IMS compliancy",
  ],
  [
    "To provide accurate performance and results, the PS500 has to be properly used and maintained. The Auto Bump & Calibration Station (ABC) provides bump testing, calibration and data management options and is compact, robust and intuitive to use.",
    "Two versions of the ABC are available allowing either a single gas cylinder or up to three cylinders to be connected. Additionally, a special three cylinder version is available for reactive gases.​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  "214",
  "300",
  "214/300",
  brochure
);
