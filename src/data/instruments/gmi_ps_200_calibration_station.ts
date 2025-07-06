import png1x from "@/assets/gas_detection_instruments/gmi_ps_200_calibration_station.png";
import webp1x from "@/assets/gas_detection_instruments/gmi_ps_200_calibration_station.webp";
import webp2x from "@/assets/gas_detection_instruments/gmi_ps_200_calibration_station@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/gmi_ps_200_calibration_station@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/gmi_ps_200_calibration_station.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const gmi_ps_200_calibration_station = createInstrumentWithHighDPI(
  "GMI PS200 Auto Bump/Calibration Station",
  [
    "Simple user interface",
    "Full bump, calibration and charging options",
    "Bump/calibration results storage",
    "Stand-alone, PC and ethernet options",
    "Robust construction",
  ],
  [
    "The multifunctional Auto Bump/Calibration (ABC) station provides simple but intelligent testing and calibration of the PS200 portable gas detector. Easy to use, with a durable, user friendly design, this automated test station offers high performance from a PC or stand-alone unit.",
    "The ABC station dramatically improves compliance record-keeping, efficiency and accuracy. Once the PS200 is placed in the dock it can be tested, calibrated and charged. Extremely cost effective, the station requires no testing and minimal effort by users.​​​​​​​​​​​​​​​​​​​​​​​",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  "213",
  "300",
  "213/300",
  brochure
);
