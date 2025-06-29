import path from "@/assets/gas_detection_instruments/gmi_shipsurveyor.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const gmi_shipsurveyor = createInstrumentWithImport(
  "GMI Ship Surveyor",
  [
    "Infrared technology for inert atmosphere measurements",
    "Simple calibration with certificate printing",
    "Large display – all gas readings simultaneously displayed",
    "Dual Mode – Combustibe Gas Indicator (CGI) and Confined Space Monitor (CSM)",
    "Configurable Audible and Visual Alarms (CSM)",
    "Internal pump with superior flow rate to minimise tank sampling times",
    "Fault detection and reporting",
    "Language options",
    "GDCloud compatible",
  ],
  [
    "The Shipsurveyor was designed after extensive consultation with shipowners, ship managers and shipping personnel. The result is a range of 8 instruments dedicated to the marine market.",
    "The Shipsurveyor is versatile yet simple to use. The feature-rich range of instruments are suitable for all marine applications including confined space monitoring, cargo monitoring and inerting.",
    "Up to 5 gases can be simultaneously measured and displayed. The hydrocarbon range, which utilises the latest infrared technology, can be calibrated with Butane, Propane or Methane, depending on application.​​",
    "The Shipsurveyor also comes complete with an impressive and practical suite of application software. Our bespoke software not only allows simple on-board calibration but crucially provides the ability to print calibration certificates. In addition, complete datalogging software comes as standard allowing logged gas readings, with vessel locations, to be uploaded to a PC.​​",
    "With ATEX and MED approval, the Shipsurveyor is the complete shipping solution.​​​​",
  ],
  {
    technicalSpecification: {
      dimensions: "180 x 95 x 100 mm / 7.1 x 3.7 x 3.9 in.",
      weight: "1.35 kg / 3.0 lbs",
      display: "LCD with backlighting",
      humidity: "0–100% R.H. non-condensing",
      temperature: "-20°C to +50°C (-4°F to +122°F)",
      alarms: {
        visual: "Highly visible flashing LEDs on display panel",
        audible: "Typically 85 dB(A) @ 12 in (in excess of 80 dB(A))",
      },
      sampling: {
        method: "Integral pump with flow fail sensor",
        protection: "Hydrophobic filter and automatic pump switch-off",
      },
      battery: {
        type: "2 ‘D’ type batteries – alkaline or rechargeable",
        life: {
          alkaline: "20 hours",
          rechargeable: "8 hours",
        },
      },
      construction: "Moulded polypropylene case",
      rating: "IP54 (Dust protected and splashproof)",
      certification: [
        "ATEX II 2 G Ex d ia IIB T3 Gb (-20°C ≤ Ta ≤ +50°C)",
        "IECEx Ex d ia IIB T3 Gb (-20°C ≤ Ta ≤ +50°C)",
        "MED (0038/YY) - Module B&E",
      ],
      warranty: "2 year",
    },
    sensorSpecification: [
      {
        gas: "Flammable (LEL)",
        range: ["0–9.9%", "10–100%"],
        increments: ["0.1%", "1%"],
        sensorType: "Infrared",
      },
      {
        gas: "Flammable (Volume)",
        range: ["0–9.9%", "10–100%"],
        increments: ["0.1%", "1%"],
        sensorType: "Infrared",
      },
      {
        gas: "O2",
        range: ["0–20.9%", "21–25%"],
        increments: ["0.1%", "1%"],
        sensorType: "Electrochemical",
      },
      {
        gas: "H2S",
        range: "0–100 ppm",
        increments: "1 ppm",
        sensorType: "Electrochemical",
      },
      {
        gas: "CO",
        range: "0–1000 ppm",
        increments: "1 ppm",
        sensorType: "Electrochemical",
      },
      {
        gas: "CO2",
        range: ["0–5%", "5–20%"],
        increments: ["0.1%", "0.5%"],
        sensorType: "Infrared",
      },
    ],
  },
  path
);
