import path from "@/assets/gas_detection_instruments/rki_04_series.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_04_series = createInstrumentWithImport(
  "RKI 04 Series",
  [
    "Continuously operate for over one year (H2S & CO)",
    "Toxic gases include: NH3, Cl2, HCN, NO2, PH3 & SO2",
    "CO with H2 elimination",
    "CO & O2 Dual Sensor",
    "Field serviceable",
    'Pocket size 2.1"(W) x 2.6"(H) x 0.9"(D), 2.8 ounces',
    "Impact, dust, and water resistant (IP-67)",
    "Replaceable rubber boot",
    "Alligator clip with 360° rotation",
    "Audible / visual / vibration alarms",
    "Automatic backlight",
    "Intrinsically safe, ATEX and C / US approvals",
    "3 Year warranty*",
  ],
  [
    "The 04 Series single gas monitor is designed to operate for many years with field replaceable sensors and filters.The 04 Series can be operated continuously for up to 9,000 hours on (2) AAA size alkaline batteries (depending on model). The 04 Series has 3 preset alarms that are user adjustable. Each version is also equipped with visual, audible, and vibration alarms as standard.",
    "The replacement sensors are inexpensive, easily field replaceable, and are interchangeable with other popular RKI instruments like the GX-3R, GX-3R Pro, and GasWatch 3. Sensors have a life expectancy of over 3 years and are backed by a 3 year warranty.*",
    "Each 04 Series monitor is impact, dust, and water resistant with an IP-67 ingress protection rating. 04 Series instruments are safe for use in hazardous locations, classified as intrinsically safe ATEX/IECEx and by QPS to U.S. and Canadian standards for Class I, Division 1, Groups A, B, C, and D atmospheres.",
    "* 3 year warranty on material and workmanship including sensors   (1 year warranty for Ammonia and Chlorine sensors)",
  ],
  {
    detector: {
      samplingMethod: "Diffusion",
      responseTime: "T90 in 30 seconds",
      alarmTypes: {
        "Gas Alarm": [
          "1st",
          "2nd",
          "3rd (user adjustable)",
          "OVER alarm",
          "STEL",
          "TWA",
        ],
        "Trouble Alarm": [
          "Sensor connection",
          "Low battery",
          "Circuit failure",
          "Calibration range error",
        ],
      },
      alarmMethods: {
        "Gas Alarm":
          "Flashing LEDs, intermittent buzzer, flashing gas value, and vibration",
        "Trouble Alarm":
          "Flashing LEDs, intermittent buzzer, and display of error message",
        "STEL / TWA":
          "Flashing LEDs, intermittent buzzer, flashing gas value, and vibration",
      },
      datalogging: {
        storage: {
          "10 sec intervals": "10 hours",
          "5 min intervals": "300 hours",
          "10 min intervals": "600 hours",
        },
        records: [
          "Alarms",
          "Alarm trends",
          "Gas readings",
          "Calibration & bump test history",
          "Instrument settings",
        ],
      },
      batteryOptions: "Alkaline dry cell (2-AAA size)",
      display:
        "Digital LCD, gas name & concentration, auto backlighting during alarm, operation icon, battery icon",
      operatingConditions: {
        temperature: "-4°F to 122°F (-20°C to +50°C)",
        humidity: "0–90% RH non-condensing",
      },
      dimensions: "2.1” W x 2.64” H x 0.94” D (54 x 67 x 24 mm), 2.8 oz (80 g)",
      enclosure: "Dust and water resistant with IP-67 rating",
      safetyRating:
        "ATEX/IECEx approved. QPS classified, “C / US”, as intrinsically safe, Class I, Division 1, Groups A, B, C, D",
      standardAccessories: [
        "Rubber boot",
        "Datalogging software",
        "Alligator clip",
        "Alkaline batteries",
      ],
      optionalAccessories: [
        "Calibration cap",
        "Wrist strap",
        "Calibration kit",
        "Belt clip",
        "Datalogging download cable",
      ],
      specialFunctions: [
        "Manual backlight for LCD (auto-lit during alarm)",
        "Peak hold",
        "STEL & TWA",
      ],
      warranty: "3 year warranty (1 year for Ammonia and Chlorine)",
    },
  },
  path
);
