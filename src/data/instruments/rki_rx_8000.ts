import path from "@/assets/gas_detection_instruments/rki_rx_8000.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_rx_8000 = createInstrumentWithImport(
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
  [
    {
      title: "Target Gas",
      details: ["Combustibles (i-C₄H₁₀ or CH₄ calibration)", "Oxygen"],
    },
    {
      title: "Combustibles",
      details: [
        "Detection Principle: Non-Dispersive Infrared (IR)",
        "Detection Range: 0–100 vol% (0.5 vol%), 0–100% LEL (0.5% LEL)",
        "Accuracy: ±5 vol%",
        "Response Time: T90 within 30 seconds",
        "Gas Alarm: 1st at 10% LEL, 2nd at 50% LEL",
      ],
    },
    {
      title: "Oxygen",
      details: [
        "Detection Principle: Galvanic Cell",
        "Detection Range: 0–40.0% (0.1%)",
        "Accuracy: Range 0–25%: ±0.7, Range 26–40%: ±3.0",
        "Response Time: T90 within 20 seconds",
        "Gas Alarm: 1st at 19.5%, 2nd at 23.5%",
      ],
    },
    {
      title: "Sampling Method",
      detail: "Sample draw: Minimum 0.75 L/min",
    },
    {
      title: "Display of Alarm",
      details: [
        "LED: LEDs flash",
        "Buzzer: 95 dB",
        "Visual: Indication value flashes and alarm message displays/flashes",
      ],
    },
    {
      title: "Display",
      detail: "Digital display and bar graph",
    },
    {
      title: "Power Source",
      details: [
        "Lithium-ion battery (3 hours full charge): Standard",
        "AA Alkaline battery (qty 3): Optional",
      ],
    },
    {
      title: "Continuous Operation",
      details: [
        "Lithium-ion battery: 15 hours",
        "AA Alkaline battery: 10 hours",
      ],
    },
    {
      title: "Operating Temperature & Humidity",
      detail: "-20°C to +50°C (-4°F to +122°F), below 95% RH (non-condensing)",
    },
    {
      title: "Dimensions & Weight",
      detail: "6.1″ W x 3.1″ H x 5″ D, 2.4 lbs",
    },
    {
      title: "Ingress Proof Rating",
      detail: "IP67",
    },
    {
      title: "Explosion Proof",
      detail: "Ex ia IIC T4 Ga",
    },
    {
      title: "Approvals",
      details: [
        "IECEx",
        "ATEX",
        "MED",
        "Compliant with IEC60079-29-1 and EN50104",
      ],
    },
    {
      title: "Additional Features",
      details: [
        "Indication to show energizing (pilot indicator and pump driving indicator)",
        "Activating confirmation",
        "IrDA communication",
        "Data logger",
        "Password protection",
      ],
    },
  ],
  path
);
