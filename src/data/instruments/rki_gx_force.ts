import path from "@/assets/gas_detection_instruments/rki_gx_force.png";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_gx_force = createInstrumentWithImport(
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
  [
    {
      gas: "Combustible Gas (CH₄ or HC)",
      details: [
        "Detection Principle: Catalytic combustion",
        "Detection Range: 0–100% LEL",
        "Resolution: 1% LEL",
        "Alarm Setpoints: 1st alarm: 10% LEL, 2nd alarm: 25% LEL, 3rd alarm: 50% LEL, OVER alarm: 100% LEL",
        "Response Time (T90): CH₄: Within 30 seconds, HC: Within 40 seconds",
      ],
    },
    {
      gas: "Oxygen (O₂)",
      details: [
        "Detection Principle: Electrochemical type",
        "Detection Range: 0.0–40.0 vol%",
        "Resolution: 0.1 vol%",
        "Alarm Setpoints: L alarm: 19.5 vol%, LL alarm: 18.0 vol%, H alarm: 23.5 vol%, OVER alarm: 40.0 vol%",
        "Response Time (T90): Within 20 seconds",
      ],
    },
    {
      gas: "Carbon Monoxide (CO)",
      details: [
        "Detection Principle: Electrochemical type",
        "Detection Range: 0–2,000 ppm",
        "Resolution: 1 ppm",
        "Alarm Setpoints: 1st alarm: 25 ppm, 2nd alarm: 50 ppm, 3rd alarm: 1200 ppm, TWA alarm: 25 ppm, STEL alarm: 200 ppm, OVER alarm: 2,000 ppm",
        "Response Time (T90): Within 30 seconds",
      ],
    },
    {
      gas: "Hydrogen Sulfide (H₂S)",
      details: [
        "Detection Principle: Electrochemical type",
        "Detection Range: 0.0–200.0 ppm",
        "Resolution: 0.1 ppm",
        "Alarm Setpoints: 1st alarm: 5.0 ppm, 2nd alarm: 30.0 ppm, 3rd alarm: 100.0 ppm, TWA alarm: 1.0 ppm, STEL alarm: 5.0 ppm, OVER alarm: 200.0 ppm",
        "Response Time (T90): Within 30 seconds",
      ],
    },
    {
      title: "Sampling Method",
      detail:
        "Internal sample pump, flow rate nominal 0.5 LPM, includes hydrophobic filter",
    },
    {
      title: "Suction Flow Rate",
      detail: "Minimum 0.35 L/min (open flow rate)",
    },
    {
      title: "Gas Alarm Pattern",
      detail:
        "Lamp flashing, continuous modulating buzzer sounding, gas concentration display flashing, vibration",
    },
    {
      title: "Gas Alarm Reset Operation",
      detail: "Self-resetting or latching",
    },
    {
      title: "Fault Alarm / Self-Diagnosis",
      detail:
        "System, clock, or sensor abnormality; battery voltage drop; calibration failure; pump abnormality; low flow rate",
    },
    {
      title: "Fault Alarm Pattern",
      detail: "Lamp flashing, intermittent buzzer sounding, detail display",
    },
    {
      title: "Fault Alarm Reset Operation",
      detail: "Self-resetting",
    },
    {
      title: "Display",
      detail: "LCD digital (7-segment + 14-segment + icons) with backlight",
    },
    {
      title: "Individual Operations",
      detail:
        "Operational status, clock, battery level, peak reading, pump status, calibration notification",
    },
    {
      title: "Sound Pressure",
      detail: "Approx. 90 dB (30 cm)",
    },
    {
      title: "Data Logger Function",
      detail: "Maximum storage: 3,600 items. Interval: 5 minutes (adjustable)",
    },
    {
      title: "Communication Specifications",
      detail: "USB 2.0 (for data logger), Connector: USB Type-C",
    },
    {
      title: "Power Source",
      detail: "Rechargeable lithium-ion battery, USB Type-C power cord",
    },
    {
      title: "Continuous Operating Time",
      detail:
        "Approx. 30 hours (at 25 °C, fully charged, no alarm, no backlight)",
    },
    {
      title: "Operating Ambient Temperature & Humidity",
      detail: "-20 °C to +50 °C (no sudden changes), 0–95% RH (non-condensing)",
    },
    {
      title: "Approvals",
      details: [
        "Intrinsically safe construction",
        "IECEx (Ex da ia IIC T4 Ga / Ex ia IIC T4 Ga)",
        "ATEX (II1G Ex da ia IIC T4 Ga / II1G Ex ia IIC T4 Ga)",
      ],
    },
    {
      title: "Certifications",
      details: [
        "CQPSUS, Class I, Div 1, Groups ABCD",
        "Ex da ia IIC T4 Ga (with NCR-6309 sensor) / Ex ia IIC T4 Ga (without)",
        "Class I, Zone 0",
        "AEx da ia IIC T4 Ga (with NCR-6309) / AEx ia IIC T4 GA (without)",
      ],
    },
    {
      title: "Protection Level",
      detail: "IP67 equivalent",
    },
    {
      title: "External Dimensions & Weight",
      detail:
        "Approx. 2.52″ (W) × 6.81″ (H) × 1.85″ (D), Approx. 9.87 oz (excluding protrusions)",
    },
    {
      title: "Warranty",
      detail: "Three years (material and workmanship)",
    },
  ],
  path
);
