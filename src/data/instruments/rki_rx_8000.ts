import png1x from "@/assets/gas_detection_instruments/rki_rx_8000.png";
import webp1x from "@/assets/gas_detection_instruments/rki_rx_8000.webp";
import webp2x from "@/assets/gas_detection_instruments/rki_rx_8000@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/rki_rx_8000@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/rki_rx_8000.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const rki_rx_8000 = createInstrumentWithHighDPI(
  "RKI RX-8000",
  [
    "Real-time detection combustible gas, 100%vol./ 100%LEL & O2",
    "Large simultaneous display with auto back lighting",
    "Strong sample drawing capability",
    "Loud alarm buzzer with 95dB",
    "3 bright LED alarm indicators",
    "ATEX Exia II CT4/MED approved",
    "Water and dust resistant IP67",
    "Lithium-ion rechargeable battery",
    "Compact and lightweight",
    "Internal sample draw pump",
    "Ergonomic design with wrist strap for hands free operation",
    "Datalogging standard",
  ],
  [
    "The RX-8000 is an ideal multigas monitor for marine applications.",
    "The RX-8000 sets the new industry standard for rugged, reliable portable gas detection. It’s tough, water proof design utilized features based on years of gas detection design experience, to assure that the instrument will operate properly to protect workers and property in all kinds of harsh gas detection applications.",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  brochure
);
