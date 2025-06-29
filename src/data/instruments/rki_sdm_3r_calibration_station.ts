import path from "@/assets/gas_detection_instruments/rki_sdm_3r_calibration_station.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_sdm_3r_calibration_station = createInstrumentWithImport(
  "RKI SDM-3R Calibration Station",
  [
    "Stand Alone Use: <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash;Compatible with both GX-3R and GX-3R Pro <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Automatically charge, bump test, and/or calibrate <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Auto on/off of gas detector <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; 3 separate gas inputs <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Multiple modules (10 max) can use one set of calibration equipment <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Save Bump Test, Calibration, and Alarm Check records to USB flash drive, computer, or network <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Includes PC software for viewing/archiving bump test, calibration records, and event data",
    "PC Controlled Use:  <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Multiple modules connected to a PC (10 max) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Automatic calibration/bump test option &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Configure GX-3R (Pro) parameters &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Archive Bump Test, Calibration, and Alarm Check &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Archive data to network location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Software controlled data retrieval &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Windows 7, 8, and 10 compatible",
  ],
  [
    "Stand Alone Use: The SDM-3R is a versatile maintenance tool that automates the service of a GX-3R (Pro) portable gas monitor. This docking station can be used as a stand alone device for charging, calibration and bump testing, with all records stored automatically for future upload to a PC via USB flash drive (PC software and flash drive included).",
    "PC Controlled Use: Automate how you manage and service GX-3R (Pro) instruments by connecting the SDM-3R to a computer with a USB cable. With the SDM Docking Station controller software, you can simultaneously calibrate, bump test, alarm check, archive data, or charge up to ten instruments. You can also download the datalogging history from each instrument into one easy to manage location. SDM-3R stations can be manifolded together to reduce the number of demand flow regulators gas cylinders required.",
  ],
  [
    {
      title: "Input Power",
      detail:
        "AC adapter with 100–240 VAC, 47–63 Hz, 0.4A input and 5.99 VDC, 2A output is provided as standard.",
    },
    {
      title: "Environmental Conditions",
      detail:
        "For indoor use only. Operating temperature is 0°C to 40°C, below 95% relative humidity, non-condensing.",
    },
    {
      title: "Applicable Instruments",
      detail: "GX-3R and GX-3R Pro.",
    },
    {
      title: "Maximum Number of Records Saved",
      details: [
        "Stand-alone mode: 200 calibrations, or 214 bump test, or 469 alarm check records.",
        "PC program controlled: Unlimited records.",
      ],
    },
    {
      title: "Ports",
      detail: "5 ports: 3 calibration gas, 1 fresh air, and 1 exhaust.",
    },
    {
      title: "Standard Accessories",
      details: [
        "AC adapter",
        "USB flash drive",
        "Inlet air filter",
        "10-foot long exhaust tube",
        "One 3-foot long tube for GAS fitting",
        "USB cable, Type A to Type B",
      ],
    },
  ],
  path
);
