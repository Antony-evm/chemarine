import png1x from "@/assets/gas_detection_instruments/gmi_proteze_zm.png";
import webp1x from "@/assets/gas_detection_instruments/gmi_proteze_zm.webp";
import webp2x from "@/assets/gas_detection_instruments/gmi_proteze_zm@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/gmi_proteze_zm@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/gmi_protege_zm.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const gmi_protege_zm = createInstrumentWithHighDPI(
  "GMI Protege ZM",
  [
    "O2, CO, H2﻿S and SO2 Models",
    "Zero maintenance",
    "Hibernation mode on the CO and H2S models for up to one year additional operating life",
    "Custom or factory-programmed alarm set points",
    "User configurable bump and calibration reminders",
    "Multiple LCD display options including real-time gas readings, monitor life remaining, or both",
    "Three point alarms (audible, visual and tactile)",
  ],
  [
    "The Protégé ZM single gas monitor is an easy-to-use, zero maintenance gas detection solution that delivers high performance in a small, ergonomically designed package. It is available in oxygen, carbon monoxide and hydrogen sulf​ide single gas models. This single gas monitor is incredibly reliable, giving industrial workers and first responders the confidence to focus on the task at hand, not on their equipment.​",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  "200",
  "300",
  "200/300",
  brochure
);
