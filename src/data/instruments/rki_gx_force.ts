import png1x from "@/assets/gas_detection_instruments/rki_gx_force.png";
import webp1x from "@/assets/gas_detection_instruments/rki_gx_force.webp";
import webp2x from "@/assets/gas_detection_instruments/rki_gx_force@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/rki_gx_force@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/rki_gx_force.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const rki_gx_force = createInstrumentWithHighDPI(
  "RKI GX-Force",
  [
    "2 Operating modes: Normal and Leak Check",
    "Internal sample pump with 100′ sample range",
    "30 hours of operation (Lithium-ion battery)",
    "USB Type-C charging & data connection",
    "Easy to grip lightweight design: 2.5″ W x 6.81″ H x 1.85″ D, 9.87 ounces",
    "Water and dust resistant design, IP67",
    "Field replaceable sensors & filters",
    "Impact resistant body",
    "Intrinsically safe",
    "Large LCD Auto-backlit display",
    "3 Year warranty",
  ],
  [
    "The GX-Force is RKI’s smallest personal 1-4 gas monitor with a strong internal sample pump capable of a 100’ sampling range. Weighing only 9.8 ounces, the GX-Force can monitor the standard confined space gases (LEL combustibles, Oxygen, Carbon Monoxide, and Hydrogen Sulfide). Utilizing the same micro-sensor technology, which are compatible with the GX-3R, GX-3R Pro, 04 Series, and Gaswatch 3 instruments.",
    "The GX-3R represents the latest evolution of gas detection technology utilizing a new generation of micro sensors. The LEL sensor has a unique design with two active filaments in one sensor to increase it’s resistance to silicone poisoning. If one filament gets poisoned the second filament takes over. The new O2 sensor is electrochemical with a 3 to 5 year life span. H2S and CO are now available in a combo micro sensor.",
    "With the GX-Force, you have multiple tools in one instrument. Having 2 operating modes, the GX-Force can be used for confined space, safety monitoring in its Normal Operating mode. A Leak Check mode is the solution for leak investigations. In Leak Check Mode, the GX-Force can monitor for combustibles in the ppm range.",
    "The GX-Force operates 30 hours on a Li-ion battery, and has a large LCD display showing all gas readings, battery level, current time and automatically backlights in alarm conditions. Standard alarm types include vibration, visual, and audible alarms, which can be set to latching or non-latching. Controlled by a microprocessor, the GX-Force continuously checks itself for sensor connections, low battery, circuit trouble, low flow, and calibration errors.",
    "Calibration and bump test intervals and reminders are user adjustable and can be set to either go into alarm or to lock the user out of normal measurement mode once a calibration period has expired. Calibration can be done individually or in a group.",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  "207",
  "419",
  "207/419",
  brochure
);
