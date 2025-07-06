import png1x from "@/assets/gas_detection_instruments/rki_sdm_force_calibration_station.png";
import webp1x from "@/assets/gas_detection_instruments/rki_sdm_force_calibration_station.webp";
import webp2x from "@/assets/gas_detection_instruments/rki_sdm_force_calibration_station@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/rki_sdm_force_calibration_station@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/rki_sdm_force_calibration_station.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const rki_sdm_force_calibration_station = createInstrumentWithHighDPI(
  "RKI SDM-Force Calibration Station",
  [
    "Charging (Lithium-Ion Battery)",
    "Calibration",
    "Bump Test",
    "3 Calibration gas ports",
    "Save Bump Test and Calibration records",
    "Bump Test and Calibration records copy to USB Jump Drive",
  ],
  [
    "Stand Alone Station: The SDM-Force is a versatile maintenance tool that automates the service of a GX-Force portable gas monitor. This docking station can be used as a stand alone device for charging, calibrating and bump testing, with all records stored automatically for future upload to a PC via USB flash drive (PC software and flash drive included).",
    "PC Controlled System: The SDM-Force can also be connected to a PC for automated calibration, bump testing, and archiving of datalog data from GX-Force instruments. Up to ten SDM-Force docking stations can be connected simultaneously using USB cables and the SDM-Force includes connections for one to three calibration gas cylinders.",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  "501",
  "361",
  "501/361",
  brochure
);
