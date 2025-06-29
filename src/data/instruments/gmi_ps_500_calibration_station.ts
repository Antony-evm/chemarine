import path from "@/assets/gas_detection_instruments/gmi_ps_500_calibration_station.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const gmi_ps_500_calibration_station = createInstrumentWithImport(
  "GMI PS500 Auto Bump/Calibration Station",
  [
    "Customer autonomy",
    "Cost savings for bigger fleets",
    "Minimum training for PS500 operators",
    "Operate wearing gloves",
    "Certificate printing",
    "History / traceability",
    "Suitable for different customers",
    "Stand-Alone: small fleet / less infrastructure",
    "PC mode: Workshop",
    "Ethernet: large fleet / IMS compliancy",
  ],
  [
    "To provide accurate performance and results, the PS500 has to be properly used and maintained. The Auto Bump & Calibration Station (ABC) provides bump testing, calibration and data management options and is compact, robust and intuitive to use.",
    "Two versions of the ABC are available allowing either a single gas cylinder or up to three cylinders to be connected. Additionally, a special three cylinder version is available for reactive gases.​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​",
  ],
  {
    autoBumpCalibrationStation: {
      size: "200 x 140 x 135 mm (7.9” x 5.5” x 5.3”)",
      weight: {
        singleGas: "1.2 kg (43 oz)",
        multiGas: "1.35 kg (48 oz)",
      },
      interfaces: ["Standalone", "USB", "Ethernet"],
      ledIndicators: {
        power: "Green",
        testing: "Orange",
        pass: "Green",
        fail: "Red",
      },
      testingTime: {
        bumpTest: "150 seconds",
        calibrationTest: "150 seconds",
      },
      dataStorage: "Up to 6000 bump & calibration results",
      powerSupply: "12V DC, 2A",
      operatingTemperature: "-10°C to 40°C (14°F to 104°F)",
      gasPorts: {
        singleGas: 3,
        multiGas: 5,
        description: {
          singleGas: ["Air", "Gas", "Exhaust"],
          multiGas: ["Air", "Gas x 3", "Exhaust"],
        },
      },
    },
  },
  path
);
