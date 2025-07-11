import png1x from "@/assets/gas_detection_instruments/rki_sdm_2012_calibration_station.png";
import webp1x from "@/assets/gas_detection_instruments/rki_sdm_2012_calibration_station.webp";
import webp2x from "@/assets/gas_detection_instruments/rki_sdm_2012_calibration_station@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/rki_sdm_2012_calibration_station@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/rki_sdm_2012_calibration_station.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const rki_sdm_2012_calibration_station = createInstrumentWithHighDPI(
  "RKI SDM-2012 Calibration Station",
  [
    "Stand-alone station (no PC Required)",
    "Charging (Li-Ion Battery Pack)",
    "Calibration",
    "Bump Test",
    "Save Bump Test and Calibration records",
    "Bump test and calibration records copy to USB jump drive",
    "Includes PC software for viewing/ archiving bump test and calibration records",
  ],
  [
    "RKI’s new SDM-2012 calibration station for the GX-2012 is now available with advanced features for charging, calibration, & bump testing. Once you power up the GX-2012 inside the SDM-2012 calibration module, the GX-2012’s display will indicate whether it’s transmitting data, bump testing, calibrating, as well as the results of the bump test or calibration.",
    "The SDM-2012 can also be connected to a PC for automated calibration, bump testing, and archiving of logged data including calibration and bump test records, interval and alarm trends. Network up to 10 SDM-2012 stations to charge, calibrate, and bump test 10 instruments simultaneously.",
    "Each SDM-2012 ships with a pictoral wall chart user guide. This guide gives the already easy to use cal station a simple pictorial easy step by step guide to calibrating or bump testing a GX-2012. It’s ideal to hang in an instrument shop or wherever the GX-2012 is located.",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  "325",
  "532",
  "325/532",
  brochure
);
