import path from "@/assets/gas_detection_instruments/rki_gx_3r_pro.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_gx_3r_pro = createInstrumentWithImport(
  "RKI GX-3R PRO",
  [
    "Smallest & lightest detector",
    "Detect up to 5 gases simultaneously <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Confined Space: LEL, O2, H2S, CO <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Toxics/IR Sensors: HCN, NH3, NO2, PH3, SO2, and CO2 <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; H2 Compensated CO sensor available",
    "Simple 2-button operation",
    "Bluetooth communication with iOS & Android App",
    "3 user adjustable alarm levels",
    "Panic Alarm & Man Down Alarm",
    "Large full dot, auto-backlit display with auto-rotation",
    "Field replaceable sensors & filters",
    "Water and dust resistant design, IP66/68",
    "3 Year Warranty",
  ],
  [
    "The GX-3R Pro is the world’s smallest 5-gas monitor weighing only 4.58 ounces and fits in the palm of your hand (2.9” W x 2.6” H x 1.06” D). It simultaneously monitors and displays 5 different gases. In addition to monitoring standard confined space gases, LEL, O2, CO, & H2S, the GX-3R Pro has a 5th channel where you can add infrared or toxic gas sensors (Hydrogen Cyanide (HCN) and Nitrogen Dioxide (NO2) sensors are currently available for the GX-3R Pro). Two of the four sensor slots have interchangeable sensors providing flexible configurations, which can easily be changed in the field.",
    "RKI is pleased to announce the availability of  These 2 sensors are in stock and are the latest in toxic gas options added to the line of GX-3R Pro sensors.",
    "The GX-3R Pro comes equipped with Bluetooth wireless communication, man-down alarm, the choice of alkaline or rechargeable power supply, and a 3 year warranty. The Lithium-ion battery pack will operate for 25 hours and will fully charge in 3 hours.",
    "The GX-3R Pro utilizes Bluetooth communication to display direct gas readings from the instrument to a phone app, which is available free on either iOS or Android phones. Automatic notifications can be programmed to send text or email messages if there is an alarm event from the GX-3R Pro.",
    "Safety supervisors will appreciate the non-compliance indicator. The instrument flashes it’s 3 LED lights every 30 seconds in the following conditions; if the instrument has not been bump tested, or if calibration is due, or if there was a gas alarm event. The 3 LED lights will continue to flash once every 30 seconds until the non-compliance condition has been resolved. The 30 second interval is adjustable.",
    "* 3 year warranty on material and workmanship including sensors (1 year for Ammonia sensor)",
  ],
  {
    detector: {
      sensorSlots: {
        "Slot 1": [
          {
            gas: "Carbon Monoxide (CO)",
            detectionMethod: "Dual EC",
            range: "0–2,000 ppm (1 ppm)",
            accuracy: "±5% of reading or ±5 ppm CO",
            alarms: [
              "A1: 25 ppm",
              "A2: 50 ppm",
              "A3: 1200 ppm",
              "TWA: 25 ppm",
              "STEL: 200 ppm",
            ],
          },
          {
            gas: "Hydrogen Sulfide (H₂S)",
            detectionMethod: "Dual EC",
            range: "0–200.0 ppm (0.1 ppm)",
            accuracy: "±5% of reading or ±2 ppm H₂S",
            alarms: [
              "A1: 5 ppm",
              "A2: 30 ppm",
              "A3: 100 ppm",
              "TWA: 1.0 ppm",
              "STEL: 5.0 ppm",
            ],
          },
        ],
        "Slot 2": {
          gas: "Combustibles (CH₄ / HC)",
          detectionMethod: "Catalytic",
          range: "0–100% LEL (1% LEL)",
          accuracy: "±5% of reading or ±2% LEL",
          alarms: [
            "1st: 10% LEL",
            "2nd: 25% LEL",
            "3rd: 50% LEL",
            "Over: 100% LEL",
          ],
        },
        "Slot 3": {
          gas: "Oxygen (O₂)",
          detectionMethod: "EC",
          range: "0–40.0% Vol. (0.1%)",
          accuracy: "±0.5% O₂",
          alarms: [
            "Low 1: 19.5%",
            "Low 2: 18.0%",
            "High: 23.5%",
            "Over: 40.0%",
          ],
        },
        "Slot 4": [
          {
            gas: "Hydrogen Cyanide (HCN)",
            detectionMethod: "EC",
            range: "0–30.0 ppm (0.1 ppm)",
            accuracy: "±10% of reading or ±5% of full scale",
            alarms: [
              "A1: 5 ppm",
              "A2: 10 ppm",
              "A3: 30 ppm",
              "TWA: 4.7 ppm",
              "STEL: 10 ppm",
            ],
          },
          {
            gas: "Ammonia (NH₃)",
            range: "0–400.0 ppm (0.5 ppm)",
            alarms: [
              "A1: 25 ppm",
              "STEL: 1.0 ppm",
              "A2: 35 ppm",
              "TWA: 0.30 ppm",
              "A3: 300 ppm",
            ],
          },
          {
            gas: "Nitrogen Dioxide (NO₂)",
            range: "0–20.00 ppm (0.05 ppm)",
            alarms: [
              "A1: 2 ppm",
              "A2: 4 ppm",
              "A3: 20 ppm",
              "TWA: 0.20 ppm",
              "STEL: 1.00 ppm",
            ],
          },
          {
            gas: "Phosphine (PH₃)",
            range: "0–20.00 ppm (0.01 ppm)",
            alarms: [
              "A1: 0.30 ppm",
              "A2: 0.60 ppm",
              "A3: 0.60 ppm",
              "TWA: 0.30 ppm",
              "STEL: 1.0 ppm",
            ],
          },
          {
            gas: "Sulfur Dioxide (SO₂)",
            range: "0–100.0 ppm (0.05 ppm)",
            alarms: [
              "A1: 2 ppm",
              "A2: 5 ppm",
              "A3: 100 ppm",
              "TWA: 0.25 ppm",
              "STEL: 0.25 ppm",
            ],
          },
          {
            gas: "Carbon Dioxide (CO₂) %",
            detectionMethod: "IR",
            range: "0–10.0% Vol. (0.01%)",
            accuracy: "±5% of reading or ±2 ppm",
            alarms: [
              "A1: 0.50% Vol.",
              "A2: 3.00% Vol.",
              "A3: 4.00% Vol.",
              "TWA: 0.50% Vol.",
              "STEL: 3.00% Vol.",
            ],
          },
          {
            gas: "Carbon Dioxide (CO₂) ppm",
            range: "0–10,000 ppm (20 ppm)",
            alarms: ["A1: 5,000 ppm"],
          },
        ],
      },
      commonSpecifications: {
        samplingMethod:
          "Diffusion sampling standard (hand aspirator or clip-on motorized pump optional)",
        display: "Full dot LCD with auto-backlight and auto-rotation",
        alarmTypes: {
          "Gas Alarm": [
            "2 increasing alarms",
            "STEL",
            "TWA",
            "Over scale alarm",
            "O₂ decreasing/increasing",
          ],
          "Trouble Alarm": [
            "Sensor disconnection",
            "Low battery",
            "Circuit error",
            "Calibration range error",
            "Cal or bump due alarm",
            "Man Down Alarm",
            "Panic Alarm",
          ],
        },
        displayOfAlarm: {
          "Gas Alarm":
            "Flashing LEDs, continuous buzzer (100 dB @ 30 cm), flashing gas value, vibration",
          "Trouble Alarm":
            "Flashing LEDs, intermittent buzzer (95 dB @ 30 cm), error message display",
        },
        operatingConditions: {
          continuous:
            "-20°C to +50°C (-4°F to +122°F), 10–90% RH non-condensing",
          temporary:
            "-40°C to +60°C (-40°F to +140°F), 0–95% RH non-condensing",
        },
        responseTime: "Within 30 seconds (T90)",
        powerSource: {
          "4-gas + EC": {
            "Li-ion": "25 hours",
            Alkaline: "16 hours",
          },
          "4-gas + EC with Bluetooth": {
            "Li-ion": "23 hours",
            Alkaline: "14 hours",
          },
          "4-gas + IR": {
            "Li-ion": "16 hours",
            Alkaline: "7 hours",
          },
          "4-gas + IR with Bluetooth": {
            "Li-ion": "15 hours",
            Alkaline: "6 hours",
          },
        },
        dimensionsAndWeight:
          "2.9” W x 2.6” H x 1.06” D (73 x 65 x 26 mm), 4.58 oz (with rubber boot)",
        caseMaterial:
          "Dust and water resistant to IP66/68 (2m, 1h), drop height 23 ft",
        bluetooth: "BLE with iOS and Android app: RK Link",
        datalogging:
          "Logs user ID, station ID, calibration & bump history, alarm events, and trends",
        standardAccessories: [
          "Alligator clip",
          "Protective rubber boot",
          "Charger",
          "Calibration adapter",
        ],
        optionalAccessories: [
          "Padded carrying case",
          "RP-3R attachable pump with 4” rubber nipple, 10’ hose and probe (up to 40’)",
          "USB to IrDA downloading cable",
          "SDM-3R calibration station",
          "Hand aspirator",
        ],
        approvals: ["ATEX", "CSA", "IECEx", "MED"],
        warranty:
          "Three years material and workmanship (1 year for Ammonia sensor)",
      },
    },
  },
  path
);
