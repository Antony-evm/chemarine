import path from "@/assets/gas_detection_instruments/gmi_ps_200_calibration_station.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const gmi_ps_200_calibration_station = createInstrumentWithImport(
  "GMI PS200 Auto Bump/Calibration Station",
  [
    "Simple user interface",
    "Full bump, calibration and charging options",
    "Bump/calibration results storage",
    "Stand-alone, PC and ethernet options",
    "Robust construction",
  ],
  [
    "The multifunctional Auto Bump/Calibration (ABC) station provides simple but intelligent testing and calibration of the PS200 portable gas detector. Easy to use, with a durable, user friendly design, this automated test station offers high performance from a PC or stand-alone unit.",
    "The ABC station dramatically improves compliance record-keeping, efficiency and accuracy. Once the PS200 is placed in the dock it can be tested, calibrated and charged. Extremely cost effective, the station requires no testing and minimal effort by users.​​​​​​​​​​​​​​​​​​​​​​​",
  ],
  {
    autoBumpCalibrationStation: {
      size: "200 x 140 x 135 mm (7.9” x 5.5” x 5.3”)",
      weight: "1.2 kg (43 oz)",
      interfaces: ["Standalone", "USB", "Ethernet"],
      ledIndicators: {
        power: "Green",
        testing: "Yellow",
        pass: "Green",
        fail: "Red",
      },
      testingTime: {
        bumpTest: "60 seconds",
        calibrationTest: "90 seconds",
      },
      dataStorage: "up to 5000 Bump & Calibration results",
      powerSupply: "12V DC, 2A",
      operatingTemperature: "-10°C to 40°C (14°F to 104°F)",
      gasPorts: ["Air", "Combi Gas", "Exhaust"],
    },
  },
  path
);
