import path from "@/assets/gas_detection_instruments/rki_gx_2012.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_gx_2012 = createInstrumentWithImport(
  "RKI GX-2012",
  [
    "Monitors ppm LEL, % volume methane, O2, CO and H2S",
    "0 to 100% volume methane option",
    "Auto-ranging display of % LEL and % volume",
    "3 Operating modes: Normal, leak check, & bar hole",
    "PPM leak detector",
    "Adjustable display ranges",
    "Visual / audible pulses change with gas concentration",
    "CO display in leak check mode",
    "Bar hole test mode for underground leak checks",
    "Internal sample drawing pump with up to 100 feet range",
    "Vibration, visual, and audible alarms",
    "Automatic backlight during alarms",
    "Lithium ion or alkaline battery packs (interchangeable)",
    "Intrinsically safe, ATEX/IECEx/CE or CSA/CE (Optional)",
  ],
  [
    "With the GX-2012, you have multiple tools in one instrument. Having 3 operating modes, the GX-2012 can be used for confined space, safety monitoring in it's Normal Operating mode; for leak investigation in Leak Check mode; and for underground leak checking in Bar Hole mode. When equipped with an optional TC sensor, the GX-2012 can measure 100% volume methane and dynamically auto range from % LEL to % volume. This is ideal for line purge testing.",
    "Built around high-quality micro-sensor technology, the GX-2012 is RKI's smallest personal 1-5 sensor gas monitor with a built in sample pump. Weighing only 12.3 ounces, the GX-2012 can monitor the standard confined space gases (LEL combustibles, Oxygen content, Carbon Monoxide, and Hydrogen Sulfide).",
    "The GX-2012's large LCD display shows all gas readings, battery level, current time, and will automatically backlight in alarm conditions. Standard alarm types include vibration, visual, and audible alarms, which can be set to latching or non-latching. Controlled by a microprocessor, the GX-2012 continuously checks itself for sensor connections, low battery, circuit trouble, low flow, and calibration errors. The GX-2012 can interchangeably operate on either a Li-ion battery pack or an alkaline battery pack. The batteries are simple to replace requiring no tools to access the removable battery compartment or pack.",
  ],
  {
    detector: {
      gasesDetected: [
        "Combustible Gases (Methane as standard)",
        "Methane",
        "Oxygen (O₂)",
        "Hydrogen Sulfide (H₂S)",
        "Carbon Monoxide (CO)",
      ],
      detectionPrinciples: {
        "Combustible Gases": "Catalytic combustion",
        Methane: "Thermal conductivity",
        Oxygen: "Galvanic cell",
        "Hydrogen Sulfide": "Electrochemical cell",
        "Carbon Monoxide": "Electrochemical cell",
      },
      detectionRanges: {
        "Combustible Gases": "0–100% LEL",
        Methane: "0–500 / 1,000 / 2,000 / 5,000 ppm",
        "Methane (% Vol.)": "0–100% Vol.",
        Oxygen: "0–40% Vol.",
        "Hydrogen Sulfide": "0–100 ppm (optional 0–500 ppm)",
        "Carbon Monoxide": "0–500 ppm",
      },
      accuracyStatements: {
        "Combustible Gases": "±5% of reading or ±2% LEL (LEL mode only)",
        Methane: "±5% of reading or ±2% of full scale",
        Oxygen: "±0.5% O₂",
        "Hydrogen Sulfide": "±5% of reading or ±2 ppm",
        "Carbon Monoxide": "±5% of reading or ±5 ppm",
      },
      samplingMethod:
        "Internal sample pump, flow rate nominal 0.5 LPM, includes hydrophobic filter",
      display: "Digital LCD with 7 segments, auto backlight during alarm",
      presetAlarms: {
        "Combustible Gases": [
          "1st alarm: 10% LEL",
          "2nd alarm: 50% LEL",
          "Over alarm: 100% LEL",
        ],
        "Methane (Vol%)": "No alarms",
        Oxygen: ["Low alarm: 19.5%", "High alarm: 23.5%", "Over alarm: 40.0%"],
        "Hydrogen Sulfide": [
          "1st: 5 ppm",
          "2nd: 30 ppm",
          "TWA: 10 ppm",
          "STEL: 15 ppm",
          "Over: 100 ppm",
        ],
        "Carbon Monoxide": [
          "1st: 25 ppm",
          "2nd: 50 ppm",
          "TWA: 25 ppm",
          "STEL: 200 ppm",
          "Over: 500 ppm",
        ],
      },
      alarmTypes: {
        "Gas Alarms": ["1st and 2nd", "STEL", "TWA", "OVER (user adjustable)"],
        "Trouble Alarms": [
          "Sensor connection",
          "Low battery",
          "Low flow",
          "Circuit trouble",
          "Calibration error",
        ],
      },
      alarmMethods: {
        "Gas Alarms": "Flashing lights, two-tone buzzer, and vibration",
        "Trouble Alarms":
          "Flashing lights, trouble displayed, intermittent buzzer, and vibration",
      },
      operatingConditions: {
        temperature: "-20°C to +50°C (-4°F to 122°F)",
        humidity: "0 to 95% RH, non-condensing",
      },
      responseTime: "Within 30 seconds (T90)",
      continuousOperation: {
        "Alkaline Battery": "15 hours",
        "Li-Ion Battery": "10 hours at 70°F (21°C)",
      },
      powerSource: [
        "Li-Ion battery pack",
        "3 “AA” Alkaline battery pack (interchangeable)",
      ],
      safetyRating: [
        "ATEX",
        "TIIS",
        "IECEx",
        "CE",
        "CSA classified (standard)",
        "Intrinsically safe",
        "Class I, Division 1, Groups A, B, C, D (optional)",
      ],
      dimensionsAndWeight:
        "143(H) × 71(W) × 43(D) mm (5.6” × 2.8” × 1.6”), approx. 350 g (12.3 oz)",
      caseMaterial:
        "High dust & water resistant, RFI shielded high impact plastic with protective rubber overmolding",
      controls: ["POWER / ENTER", "DISPLAY", "AIR", "RESET", "SHIFT"],
      standardAccessories: [
        "Belt clip",
        "Rubber nozzle (3.5”)",
        "Datalogging software",
        "10” Probe",
        "Manual",
        "Quick reference card",
        "10’ Hose",
        "Training CD",
      ],
      optionalAccessories: [
        "SDM-2012 calibration stations",
        "Calibration kit",
        "Li-Ion battery pack",
        "AC or DC Charger",
        "Sample draw hoses (10’ standard, up to 100’ max)",
        "Carrying case",
      ],
      configurations: [
        "1, 2, 3, 4, or 5 sensor units",
        "Li-Ion or alkaline battery pack options",
      ],
      warranty: "Two years material and workmanship",
    },
  },
  path
);
