import path from "@/assets/gas_detection_instruments/rki_gx_9000.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_gx_9000 = createInstrumentWithImport(
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
  [
    {
      title: "Sampling Method",
      detail: "Suction type / Double type",
    },
    {
      title: "Principle of Detection",
      details: [
        "New Ceramic Catalytic Method",
        "Thermal Conductivity Method",
        "Non-Dispersive Infrared Method",
        "Potentiostatic Electrolysis Method",
        "Photo-Ionization Detector",
      ],
    },
    {
      title: "Detection Range",
      detail: "Depends on target gas.",
    },
    {
      title: "Type of Alarm",
      detail: "Gas alarm / fault alarm",
    },
    {
      title: "Display of Alarm",
      detail: "Lamp blinking / buzzer / gas concentration display blinking",
    },
    {
      title: "Explosion Protected Construction",
      detail: "Flameproof enclosures + Intrinsic safety",
    },
    {
      title: "Explosion-Proof Class",
      details: [
        "ATEX: II1G Ex da ia IIC T4 Ga / II1G Ex ia IIC T4 Ga",
        "IECEx: Ex da ia IIC T4 Ga / Ex ia IIC T4 Ga",
        "* Dry battery models (Duracell MN1500): -40 °C to +40 °C: T4, -40 °C to +60 °C: T3",
      ],
    },
    {
      title: "Ingress Proof Rating",
      detail: "IP66 / IP68",
    },
    {
      title: "Approvals",
      details: [
        "Japan Ex",
        "ATEX",
        "IECEx",
        "MED",
        "EN 60079-29-1",
        "EN 50104",
        "JIS",
      ],
    },
    {
      title: "CE Marking",
      details: ["EMC", "ATEX", "RoHS", "RE"],
    },
    {
      title: "Power Source",
      details: [
        "Lithium-ion battery unit [BUL-9000]",
        "Dry battery unit (AA alkaline battery ×6) [BUD-9000]",
      ],
    },
    {
      title: "Continuous Operation",
      details: [
        "Approx. 25 hours (fully charged) [Lithium-ion battery unit]",
        "Approx. 12 hours (25℃, no alarm, no lighting) [Dry battery unit]",
        "* Varies depending on the mounted sensor.",
      ],
    },
    {
      title: "Dimensions",
      detail: "Approx. 6.2″ (W) × 3.3″ (H) × 5.2″ (D) / 158 × 85 × 132 mm",
    },
    {
      title: "Weight",
      detail: "Approx. 38.8 oz (1.1 kg), includes battery and battery unit",
    },
    {
      title: "Operating Temperature Range",
      details: [
        "Temporary ambient: -40 °F to +140 °F (-40 ℃ to +60 ℃)",
        "Continuous ambient: -4 °F to +122 °F (-20 ℃ to +50 ℃)",
        "* May vary depending on the mounted sensor.",
      ],
    },
    {
      title: "Operating Humidity Range",
      details: [
        "Temporary ambient: 0 to 95% RH (no condensation)",
        "Continuous ambient: 10 to 90% RH (no condensation)",
        "* May vary depending on the mounted sensor.",
      ],
    },
    {
      title: "Operating Pressure Range",
      details: ["80 to 120 kPa", "Explosion-proof range: 80 to 110 kPa"],
    },
    {
      title: "Target Gas",
      details: [
        "C₂H₂",
        "CH₄",
        "Cl₂",
        "CO",
        "CO₂",
        "H₂",
        "H₂S",
        "HCl",
        "i-C₄H₁₀",
        "NH₃",
        "O₂",
        "O₃",
        "SO₂",
        "VOC",
      ],
    },
  ],
  path
);
