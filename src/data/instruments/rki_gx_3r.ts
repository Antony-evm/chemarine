import png1x from "@/assets/gas_detection_instruments/rki_gx_3r.png";
import webp1x from "@/assets/gas_detection_instruments/rki_gx_3r.webp";
import webp2x from "@/assets/gas_detection_instruments/rki_gx_3r@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/rki_gx_3r@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/rki_gx_3r.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const rki_gx_3r = createInstrumentWithHighDPI(
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
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  brochure
);
