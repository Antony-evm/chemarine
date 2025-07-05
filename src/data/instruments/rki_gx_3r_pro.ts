import png1x from "@/assets/gas_detection_instruments/rki_gx_3r_pro.png";
import webp1x from "@/assets/gas_detection_instruments/rki_gx_3r_pro.webp";
import webp2x from "@/assets/gas_detection_instruments/rki_gx_3r_pro@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/rki_gx_3r_pro@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/rki_gx_3r_pro.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const rki_gx_3r_pro = createInstrumentWithHighDPI(
  "RKI GX-3R PRO",
  [
    "Smallest & lightest detector",
    "Detect up to 5 gases simultaneously <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Confined Space: LEL, O2, H2S, CO <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Toxics/IR Sensors: HCN, NH3, NO2, PH3, SO2, and CO2 <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; H2 Compensated CO sensor available",
    "Simple 2-button operation",
    "Bluetooth communication with iOS & Android App",
    "3 user adjustable alarm levels",
    "Panic Alarm & Man Down Alarm",
    "Large full dot, auto-backlit display with auto-rotation",
    "Field replaceable sensors & filters",
    "Water and dust resistant design, IP66/68",
    "3 Year Warranty",
  ],
  [
    "The GX-3R Pro is the world’s smallest 5-gas monitor weighing only 4.58 ounces and fits in the palm of your hand (2.9” W x 2.6” H x 1.06” D). It simultaneously monitors and displays 5 different gases. In addition to monitoring standard confined space gases, LEL, O2, CO, & H2S, the GX-3R Pro has a 5th channel where you can add infrared or toxic gas sensors (Hydrogen Cyanide (HCN) and Nitrogen Dioxide (NO2) sensors are currently available for the GX-3R Pro). Two of the four sensor slots have interchangeable sensors providing flexible configurations, which can easily be changed in the field.",
    "RKI is pleased to announce the availability of  These 2 sensors are in stock and are the latest in toxic gas options added to the line of GX-3R Pro sensors.",
    "The GX-3R Pro comes equipped with Bluetooth wireless communication, man-down alarm, the choice of alkaline or rechargeable power supply, and a 3 year warranty. The Lithium-ion battery pack will operate for 25 hours and will fully charge in 3 hours.",
    "The GX-3R Pro utilizes Bluetooth communication to display direct gas readings from the instrument to a phone app, which is available free on either iOS or Android phones. Automatic notifications can be programmed to send text or email messages if there is an alarm event from the GX-3R Pro.",
    "Safety supervisors will appreciate the non-compliance indicator. The instrument flashes it’s 3 LED lights every 30 seconds in the following conditions; if the instrument has not been bump tested, or if calibration is due, or if there was a gas alarm event. The 3 LED lights will continue to flash once every 30 seconds until the non-compliance condition has been resolved. The 30 second interval is adjustable.",
    "* 3 year warranty on material and workmanship including sensors (1 year for Ammonia sensor)",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  brochure
);
