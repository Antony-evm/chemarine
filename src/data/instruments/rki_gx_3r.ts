import path from "@/assets/gas_detection_instruments/rki_gx_3r.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_gx_3r = createInstrumentWithImport(
  "RKI GX-3R",
  [
    "Smallest & lightest 4 gas monitor",
    "Simultaneous detection of 4 gases; LEL, O2, H2S & CO",
    "H2 Compensated CO sensor available",
    "Simple 2-button operation",
    "Alarms: audible, visual, & vibration",
    "3 user adjustable alarm levels",
    "25 hours of operation (Lithium-ion battery)",
    "Water and dust resistant design, IP66/68",
    "3 Year warranty",
  ],
  [
    "The GX-3R is the worlds smallest 4 gas monitor weighing only 3.52 ounces and can comfortably be clipped within a worker’s breathing zone (2.2” W x 2.55” H x 1.02” D). It simultaneously monitors and displays LEL combustibles, O2, CO (Hydrogen compensated CO also available), and H2S.",
    "The GX-3R represents the latest evolution of gas detection technology utilizing a new generation of micro sensors. The LEL sensor has a unique design with two active filaments in one sensor to increase it’s resistance to silicone poisoning. If one filament gets poisoned the second filament takes over. The new O2 sensor is electrochemical with a 3 to 5 year life span. H2S and CO are now available in a combo micro sensor.",
    "Safety supervisors will appreciate the non-compliance indicator. The instrument flashes it’s 3 LED lights every 30 seconds in the following conditions; if the instrument has not been bump tested, or if calibration is due, or if there was a gas alarm event. The 3 LED lights will continue to flash once every 30 seconds until the non-compliance condition has been resolved. The 30 second interval is adjustable.",
    "OSHA defines the breathing zone as a ten inch radius around the worker’s nose and mouth, and requires that worker exposure monitoring air samples be collected in the breathing zone. Air sampling filters may be attached to the collar or lapel. Traditionally this means only a single gas monitor would be small enough for a worker to practically wear a gas monitor ‘In the breathing zone’. Now there is a 4 gas monitor smaller than many single gas monitors.",
  ],
  {
    detector: {
      gasesDetected: [
        "Carbon Monoxide (CO) – H₂ Compensated",
        "Hydrogen Sulfide (H₂S)",
        "Combustible Gases (Methane as standard)",
        "Oxygen (O₂)",
      ],
      sensorSlots: {
        "Slot 1": "CO – Electrochemical (EC)",
        "Slot 2": "Dual EC – CO & H₂S",
        "Slot 3":
          "EC for H₂S / Catalytic combustion for Combustibles / EC for O₂",
      },
      detectionRanges: {
        CO: "0–2,000 ppm (1 ppm)",
        "H₂S": "0–200.0 ppm (0.1 ppm)",
        Combustibles: "0–100% LEL (1% LEL)",
        "O₂": "0–40% Vol. (0.1%)",
      },
      accuracyStatements: {
        CO: "±5% of reading or ±2 ppm CO / ±5% of reading or ±5 ppm CO (whichever is greater)",
        "H₂S": "±5% of reading or ±2 ppm H₂S (whichever is greater)",
        Combustibles: "±5% of reading or ±2% LEL (whichever is greater)",
        "O₂": "±0.5% of reading",
      },
      samplingMethod:
        "Diffusion sampling standard (hand aspirator or clip-on motorized pump optional)",
      display: "Digital LCD with 7 segment + 14 segment + icons",
      presetAlarms: {
        CO: [
          "1st: 25 ppm",
          "2nd: 50 ppm",
          "3rd: 1200 ppm",
          "TWA: 25 ppm",
          "STEL: 200 ppm",
          "Over: 2000 ppm",
        ],
        "H₂S": [
          "1st: 5 ppm",
          "2nd: 30 ppm",
          "3rd: 100 ppm",
          "TWA: 1 ppm",
          "STEL: 5 ppm",
          "Over: 200 ppm",
        ],
        Combustibles: [
          "1st: 10% LEL",
          "2nd: 25% LEL",
          "3rd: 50% LEL",
          "Over: 100% LEL",
        ],
      },
      alarmTypes: {
        "Gas Alarm": [
          "3 Increasing alarms",
          "STEL",
          "TWA",
          "Overscale alarm",
          "O₂ decreasing/increasing",
        ],
        "Trouble Alarm": [
          "Sensor disconnection",
          "Low battery",
          "Circuit error",
          "Calibration range error",
        ],
      },
      alarmDisplay: {
        "Gas Alarm":
          "Flashing LEDs, continuous buzzer (100 dB @ 30 cm), flashing gas value, vibration",
        "Trouble Alarm":
          "Flashing LEDs, intermittent buzzer (95 dB @ 30 cm), error message display",
      },
      operatingConditions: {
        continuous:
          "-20°C to +50°C (-4°F to +122°F), 10–90% RH (non-condensing)",
        temporary:
          "-40°C to +60°C (-40°F to +140°F), 0–95% RH (non-condensing, 15 minutes max)",
      },
      responseTime: "Within 30 seconds (T90)",
      powerSource:
        "Lithium-ion battery, approx. 25 hours operation after 3-hour full charge",
      approvals: ["ATEX", "CSA", "IECEx", "MED"],
      dimensionsAndWeight: {
        withoutRubberBoot:
          "2.2” W × 2.55” H × 1.02” D (58 × 65 × 26 mm), approx. 3.52 oz (100 g)",
        withRubberBoot:
          "2.4” W × 2.63” H × 1.06” D (61 × 67 × 27 mm), approx. 3.70 oz (105 g)",
      },
      caseMaterial:
        "Dust and water resistant (IP66/68, 2m for 1 hour). Drop-tested at 23 ft. RFI shielded.",
      controls: ["POWER / MODE", "AIR"],
      datalogging:
        "Logs user ID, station ID, calibration & bump test history, alarm events & trends",
      standardAccessories: [
        "Alligator clip",
        "Protective rubber boot",
        "Charger",
        "Calibration adapter",
      ],
      optionalAccessories: [
        "SDM-3R calibration station",
        "RP-3R Clip-on pump with 4” rubber nipple, 10’ hose and probe (up to 40’)",
        "Padded carrying case (for GX-3R and accessories)",
        "USB to IrDA cable for datalogging",
      ],
      warranty: "Three years (materials and workmanship)",
    },
  },
  path
);
