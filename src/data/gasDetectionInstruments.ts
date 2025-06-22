import gmi_ps_200_path from "@/assets/gas_detection_instruments/gmi_ps_200.png";

function generateLink(title: string): string {
  return `/gas-detection-instrument/${title.toLowerCase().replace(/ /g, "-")}`;
}
const gmi_ps_200_title = "GMI PS 200";
const gmi_ps_200 = {
  title: gmi_ps_200_title,
  alt: gmi_ps_200_title,
  imgPath: gmi_ps_200_path,
  link: generateLink(gmi_ps_200_title),
  features: [
    "Simple 2-button operation",
    "Any combination of LEL/O2/CO/H2S",
    "Audible, visual and vibrating alarms",
    "Fully certified",
    "Internal pump (optional)",
    "Datalogging capabilities (up to 6 months)",
    "Run-time up to 80 hours, when using low power LEL sensor (optional)",
    "Quick field calibration (optional)",
    "Lightweight",
    "Robust construction",
    "GDCloud compatible",
  ],
  overview: [
    "The PS200 Series combines quality, ruggedness and advanced technology in a user friendly, portable gas monitor.",
    "It is compact, lightweight, water resistant, extremely robust, and is certified to multiple international and regional standards.",
    "The PS200 can measure any combination of LEL, ​O2, CO and H2S making it suitable for a wide range of personal monitoring and confined space applications.",
    "In addition to extensive datalogging capabilities, the PS200 is available with an optional internal pump and an extensive range of accessories to meet a wide variety of user applications.",
    "Importantly, the PS200 has been des​​igned to enable easier user maintenance which includes a fully automatic calibration station to simplify product compliance.",
  ],
};

export const GAS_DETECTION_INSTRUMENTS = [
  {
    title: "Personal Gas Detection Instruments",
    instruments: {
      gmi: {
        gmi_ps_200,
      },
    },
  },
  {
    title: "Cargo Operation Gas Detection Instruments",
    instruments: {},
  },
  {
    title: "Fixed Instruments",
    instruments: {},
  },
  {
    title: "Calibration Stations",
    instruments: {},
  },
];
