import png1x from "@/assets/gas_detection_instruments/rki_gx_9000.png";
import webp1x from "@/assets/gas_detection_instruments/rki_gx_9000.webp";
import webp2x from "@/assets/gas_detection_instruments/rki_gx_9000@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/rki_gx_9000@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/rki_gx_9000.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const rki_gx_9000 = createInstrumentWithHighDPI(
  "RKI GX-9000",
  [
    "Simultaneous detection of up to 6 gases",
    "Sensor warranty up to 3 years",
    "Explosion-proof, dust-proof and waterproof (equivalent to IP66/68), 1.5m drop durability",
    "Equipped with Bluetooth, Easy data management via smartphone",
    "Suitable for marine/onshore/underground work environments",
  ],
  [
    "The GX-9000 Marine Gas Monitor sets the new industry standard for rugged, reliable portable gas detection. It’s tough, water proof design utilized features based on years of gas detection design experience, to assure that the instrument will operate properly to protect workers and property in all kinds of harsh gas detection applications.",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  brochure
);
