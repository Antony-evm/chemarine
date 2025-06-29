import path from "@/assets/gas_detection_instruments/rki_sdm_2012_calibration_station.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_sdm_2012_calibration_station = createInstrumentWithImport(
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
  [
    {
      title: "Input Power",
      detail:
        "12 VDC. NOTE: AC adapter with 100–240 VAC, 50/60 Hz, 0.6A input and 12 VDC, 1.2A output is provided as standard.",
    },
    {
      title: "Environmental Conditions",
      detail:
        "For indoor use only. Operating range is -10°C to 40°C, below 80% relative humidity, non-condensing.",
    },
    {
      title: "Applicable Instruments",
      detail: "GX-2012 and Gas Tracer.",
    },
    {
      title: "Maximum Number of Records Saved",
      detail: "200 (stand-alone).",
    },
    {
      title: "Number of Calibration Gas Cylinders",
      detail:
        "Up to two calibration gas cylinders can be used per bump test or calibration at a time.",
    },
    {
      title: "Standard Accessories",
      details: [
        "AC adapter",
        "USB flash drive",
        "Single Module Data Viewer Software",
        "SDM Docking Station PC Controller Software",
        "Inlet air filter",
        "Instruction manual",
        "10-foot long exhaust tube",
        "Two 3-foot long tubes for GAS 1 and GAS 2",
        "Fittings",
        "3 T-fittings for PC-controlled configuration",
        "USB cable, Type A to Type B",
      ],
    },
  ],
  path
);
