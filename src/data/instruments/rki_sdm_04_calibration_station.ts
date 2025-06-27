import path from "@/assets/gas_detection_instruments/rki_sdm_04_calibration_station.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_sdm_04_calibration_station = createInstrumentWithImport(
  "RKI SDM-04 Calibration Station",
  [
    "Stand Alone Station: <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Calibration <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Bump Test <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; 4 Calibration gas ports <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Save Bump Test and Calibration records <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Bump Test and Calibration records copy to USB Jump Drive <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Includes PC software for viewing/archiving bump test and calibration records",
    "Multi Module System:  <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Multiple modules connected to a PC (10 max) <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Calibration, Bump Test <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Configure 04 Series <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; 4 Calibration gas ports",
  ],
  [
    "Stand Alone Station: The SDM-04 is a versatile maintenance tool that automates the service of a 04 Series portable gas monitor. This docking station can be used as a stand alone device for calibrating and bump testing, with all records stored automatically for future upload to a PC via USB flash drive (PC software and flash drive included).",
    "PC Controlled System: The SDM-04 can also be connected to a PC for automated calibration, bump testing, and archiving of datalog data from 04 Series instruments. Up to ten SDM-04 docking stations can be connected simultaneously using USB cables and the SDM-04 includes connections for one to three calibration gas cylinders.",
  ],
  path
);
