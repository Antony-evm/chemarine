import png1x from "@/assets/gas_detection_instruments/rki_sdm_6000_calibration_station.png";
import webp1x from "@/assets/gas_detection_instruments/rki_sdm_6000_calibration_station.webp";
import webp2x from "@/assets/gas_detection_instruments/rki_sdm_6000_calibration_station@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/rki_sdm_6000_calibration_station@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/rki_sdm_6000_calibration_station.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const rki_sdm_6000_calibration_station = createInstrumentWithHighDPI(
  "RKI SDM-6000 Calibration Station",
  [
    "Stand-alone station (no PC Required)",
    "Charge, calibrate, bump test, and alarm test",
    "Included software collects calibration, bump test, alarm history, and exposure date from instruments",
    "Automatically power instruments on / off for scheduled calibration",
    "Accepts GX-6000 with or without rubber boot",
  ],
  [
    "The SDM-6000 is a versatile maintenance tool that automates the service of a GX-6000 portable gas monitor. This docking station can be used as a stand alone device for charging, calibration and bump testing, with all records stored automatically for future upload to a PC via SD card (PC software and SD card included).",
    "SDM-6000 calibration stations are modular by design and can easily connect to each other without the need of any tubes or cables. One power source and one set of calibration equipment can provide service for up to 10 SDM-6000 calibration stations.",
    "Up to 10 calibration stations can also be connected to one PC for automated charging, calibration, bump testing and archiving of data. Even if instruments are turned off, automated routines will power up the instruments and run as scheduled. All data collected from the PC Controlled software can also be centralized in one network location accessible by anyone with the PC Controlled software with access to the network location.",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  "199",
  "453",
  "199/453",
  brochure
);
