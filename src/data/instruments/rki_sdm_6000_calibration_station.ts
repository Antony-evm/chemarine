import path from "@/assets/gas_detection_instruments/rki_sdm_6000_calibration_station.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_sdm_6000_calibration_station = createInstrumentWithImport(
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
  [
    {
      title: "Display",
      detail:
        "Touch panel TFT liquid crystal (3.5 inch, 320×240 image element QVGA, RGB 16.77 million colors) with backlight.",
    },
    {
      title: "LED",
      detail:
        "3 colors (Green, Red, Orange), and each status is indicated by lighting or blinking.",
    },
    {
      title: "BUMP Test",
      details: [
        "Standard setting values: AIR flush time is 15 sec, GAS time is 20 sec, AIR purge time is 5 sec.",
        "Threshold value is ±50%.",
        "Auto calibration is OFF.",
        "Auto alarm function check is ON.",
        "Auto print is OFF.",
        "AIR flush time range: 15–120 sec.",
        "GAS time range: 20–120 sec.",
        "AIR purge time range: 5–120 sec.",
        "Threshold value range: ±10–50%.",
        "Auto calibration can be ON or OFF.",
        "Auto alarm function check can be ON or OFF.",
        "Auto print can be ON or OFF.",
        "BUMP test result is displayed on the TFT liquid crystal.",
      ],
    },
    {
      title: "Calibration",
      details: [
        "Standard setting values: AIR flush time is 30 sec, GAS time is 90 sec, AIR purge time is 30 sec.",
        "Auto alarm function check is ON.",
        "Auto print is OFF.",
        "AIR flush time range: 15–120 sec.",
        "GAS time range: 20–120 sec.",
        "AIR purge time range: 5–120 sec.",
        "Auto alarm function check can be ON or OFF.",
        "Auto print can be ON or OFF.",
        "Calibration result is displayed on the touch screen display.",
      ],
    },
    {
      title: "Power (AC Adapter)",
      detail: "100–240VAC, 50/60Hz.",
    },
    {
      title: "Dimension and Weight",
      detail: "5.11” (W) x 13” (H) x 7.2” (D), approximately 3.7 lb.",
    },
    {
      title: "Operation Temperature and Humidity",
      detail: "0–104°F, below 95% RH (no condensation).",
    },
    {
      title: "USB Printer Port",
      detail:
        "A type: Connects SDM-6000 printer (SII, DPU-S245) via USB cable.",
    },
    {
      title: "RJ-45 Connector",
      detail: "Ethernet port for LAN connection.",
    },
    {
      title: "SD Card Slot",
      detail: "Compatible with SD & SDHC cards.",
    },
    {
      title: "Joint Connector",
      detail: "Connects SDM-6000 (max 10 units) and SV-3.",
    },
    {
      title: "Inlet",
      detail: "4 inlets: GAS 1 / GAS 2 / GAS 3 / AIR.",
    },
    {
      title: "Certification",
      detail: "CE marking.",
    },
    {
      title: "Standard Functions",
      detail:
        "Charging, cal cap fitting status monitoring, power ON function, alarm activation check, multi-language support (English, German, Japanese, Korean, Russian, Portuguese, Spanish, Italian, French), backlight adjustment, buzzer function, and self-diagnosis for instrument connection.",
    },
    {
      title: "Standard Accessory",
      detail:
        "Operating manual, filter, connecting plate, wall mount plate, PC controller software.",
    },
    {
      title: "Software",
      detail:
        "PC controller software included as standard. Compatible with Windows 7 & 10.",
    },
    {
      title: "Optional Accessory",
      details: [
        "SV-3 solenoid valve which adds 3 additional calibration gas inputs.",
        "AC adaptor (15W output), AC adaptor (100W output).",
        "Calibration Station utility software.",
        "Calibration gas & regulators.",
        "Tubing.",
        "Battery-powered printer.",
      ],
    },
  ],
  path
);
