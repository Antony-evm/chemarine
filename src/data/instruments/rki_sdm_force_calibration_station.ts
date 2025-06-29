import path from "@/assets/gas_detection_instruments/rki_sdm_force_calibration_station.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_sdm_force_calibration_station = createInstrumentWithImport(
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
  [
    {
      title: "Input Power",
      detail:
        "5.2 VDC main unit input, 100–240 VAC accessory AC adapter input.",
    },
    {
      title: "Operating Temperature",
      detail: "0 to 40 °C (no sudden fluctuations).",
    },
    {
      title: "Applicable Instruments",
      detail: "GX-Force.",
    },
    {
      title: "Memory Capacity",
      detail: "Stores up to 500 bump tests, calibrations, or alarm checks.",
    },
    {
      title: "Number of Calibration Gas Cylinders",
      detail: "Supports up to three calibration gas cylinders.",
    },
    {
      title: "Standard Accessories",
      detail:
        "Includes USB-C cable for instrument connection, air filter, AC adapter, exhaust tubing, flash drive, USB-A to USB-B cable, and LAN cable.",
    },
  ],
  path
);
