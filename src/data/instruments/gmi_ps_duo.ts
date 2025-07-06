import png1x from "@/assets/gas_detection_instruments/gmi_ps_duo.png";
import webp1x from "@/assets/gas_detection_instruments/gmi_ps_duo.webp";
import webp2x from "@/assets/gas_detection_instruments/gmi_ps_duo@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/gmi_ps_duo@3x.webp";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const gmi_ps_duo = createInstrumentWithHighDPI(
  "GMI PS DUO",
  [
    "Simultaneous detection of two toxic gases",
    "Integrated wireless connectivity for data retrieval",
    "Continuous real-time gas concentration display",
    "Rugged, IP67-rated for water and dust protection",
    "Lightweight, ergonomic design for ease of use",
    "Loud audible alarms, bright LEDs, and strong vibration feedback",
    "Internal memory supports up to 30 alarm logs",
    "Fast, intuitive setup and configuration through IR Link",
    "Designed with user convenience and safety in mind",
  ],
  [
    "The portable dual gas detector PS DUO is a handheld instrument designed for monitoring gas levels in potentially hazardous environments.",
    "It uses passive diffusion sensing for continuous detection of harmful gases, enhancing safety for personnel. ",
    "The device features real-time monitoring with audible, visual, and vibration alarms, providing immediate alerts when gas levels exceed safety thresholds.",
    "Data management is supported through wireless communication, allowing seamless integration with safety management systems. The optional IR Link tool offers additional data handling capabilities.",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  "151",
  "260",
  "151/260"
);
