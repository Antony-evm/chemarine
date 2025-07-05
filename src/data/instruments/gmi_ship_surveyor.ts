import png1x from "@/assets/gas_detection_instruments/gmi_shipsurveyor.png";
import webp1x from "@/assets/gas_detection_instruments/gmi_shipsurveyor.webp";
import webp2x from "@/assets/gas_detection_instruments/gmi_shipsurveyor@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/gmi_shipsurveyor@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/gmi_ship_surveyor.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const gmi_shipsurveyor = createInstrumentWithHighDPI(
  "GMI Ship Surveyor",
  [
    "Infrared technology for inert atmosphere measurements",
    "Simple calibration with certificate printing",
    "Large display – all gas readings simultaneously displayed",
    "Dual Mode – Combustibe Gas Indicator (CGI) and Confined Space Monitor (CSM)",
    "Configurable Audible and Visual Alarms (CSM)",
    "Internal pump with superior flow rate to minimise tank sampling times",
    "Fault detection and reporting",
    "Language options",
    "GDCloud compatible",
  ],
  [
    "The Shipsurveyor was designed after extensive consultation with shipowners, ship managers and shipping personnel. The result is a range of 8 instruments dedicated to the marine market.",
    "The Shipsurveyor is versatile yet simple to use. The feature-rich range of instruments are suitable for all marine applications including confined space monitoring, cargo monitoring and inerting.",
    "Up to 5 gases can be simultaneously measured and displayed. The hydrocarbon range, which utilises the latest infrared technology, can be calibrated with Butane, Propane or Methane, depending on application.​​",
    "The Shipsurveyor also comes complete with an impressive and practical suite of application software. Our bespoke software not only allows simple on-board calibration but crucially provides the ability to print calibration certificates. In addition, complete datalogging software comes as standard allowing logged gas readings, with vessel locations, to be uploaded to a PC.​​",
    "With ATEX and MED approval, the Shipsurveyor is the complete shipping solution.​​​​",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  brochure
);
