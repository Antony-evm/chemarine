import path from "@/assets/gas_detection_instruments/gmi_ps_500.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const gmi_ps_500 = createInstrumentWithImport(
  "GMI PS 500",
  [
    "Over 15 “plug-and-play” smart sensors",
    "Audible and visual alarms",
    "Robust construction",
    "Easy maintenance",
    "Low cost of ownership",
  ],
  [
    "Designed by our customers, this robust and accurate gas detector provides unrivaled protection in confined space applications.",
    "The PS500 can be tailored to detect up to fi​ve gases with its toxic and catalytic sensors, photo ionisation detectors, and infrared capabilities. “Plug and Play” option allows the customer to “plug in” a new board with a different gas range.",
    "The PS500 is particularly useful in noisy environments, featuring a very loud (95dBA) penetrating and distinctive audible alarm together with high visibility large area visual alarm.",
    "Pump, diffusion or both together, allowing pumped sample for pre-entry checking and diffusion in confined space working, thus maximising battery life.",
    "A robust, moulded, rubberised casing guaranteeing Hi-Impact resistance, the PS500 can be used in the most demanding industrial environments.",
  ],
  {
    sensorSpecification: [
      {
        gas: "LEL",
        ranges: ["0 - 100% LEL", "0 - 100% LEL"],
        resolutions: ["1% LEL", "1% LEL"],
        sensorTypes: ["Cat-bead", "NDIR"],
        responseTimes: ["15 sec", "35 sec"],
      },
      {
        gas: "CO2",
        ranges: ["0 - 2.50%", "2.50 - 5.00%"],
        resolutions: ["0.01%", "0.05%"],
        sensorType: "NDIR",
        responseTime: "25 sec",
      },
      {
        gas: "O2",
        range: "0 - 25%",
        resolution: "0.1%",
        sensorType: "Electrochemical",
        responseTime: "10 sec",
      },
      {
        gas: "CO",
        range: "0 - 1000 PPM",
        resolution: "1 PPM",
        sensorType: "Electrochemical",
        responseTime: "35 sec",
      },
      {
        gas: "H2S",
        range: "0 - 100 PPM",
        resolution: "1 PPM",
        sensorType: "Electrochemical",
        responseTime: "25 sec",
      },
      {
        gas: "CO/H2S (DUAL TOX)",
        range: ["0 - 1000 PPM (CO)", "0 - 100 PPM (H2S)"],
        resolution: "1 PPM",
        sensorType: "Electrochemical",
        responseTime: ["35 sec", "25 sec"],
      },
      {
        gas: "SO2",
        ranges: ["0 - 30 PPM", "0 - 100 PPM"],
        resolution: "1 PPM",
        sensorType: "Electrochemical",
        responseTime: "10 sec",
      },
      {
        gas: "CL2",
        range: "0 - 10 PPM",
        resolution: "0.1 PPM",
        sensorType: "Electrochemical",
        responseTime: "30 sec",
      },
      {
        gas: "NH3",
        range: "0 - 100 PPM",
        resolution: "1 PPM",
        sensorType: "Electrochemical",
        responseTime: "60 sec",
      },
      {
        gas: "NO",
        range: "0 - 300 PPM",
        resolution: "1 PPM",
        sensorType: "Electrochemical",
        responseTime: "20 sec",
      },
      {
        gas: "NO2",
        range: "0 - 20 PPM",
        resolution: "0.1 PPM",
        sensorType: "Electrochemical",
        responseTime: "185 sec",
      },
      {
        gas: "PH3",
        range: "0 - 100 PPM",
        resolution: "1 PPM",
        sensorType: "PID",
        responseTime: "5 sec",
      },
      {
        gas: "VOC",
        ranges: ["0 - 100 PPM", "0 - 1000 PPM"],
        resolutions: ["0.1 PPM", "1 PPM"],
        sensorType: "PID",
        responseTime: "5 sec",
      },
      {
        gas: "C6H6",
        range: "0 - 20 PPM",
        resolution: "0.1 PPM",
        sensorType: "PID",
        responseTime: "5 sec",
      },
    ],
  },
  path
);
