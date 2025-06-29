import path from "@/assets/gas_detection_instruments/rki_gx_2012.png";
import brochure from "@/assets/pdfs/instrument_specs/rki_gx_2012.pdf";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_gx_2012 = createInstrumentWithImport(
  "RKI GX-2012",
  [
    "Monitors ppm LEL, % volume methane, O2, CO and H2S",
    "0 to 100% volume methane option",
    "Auto-ranging display of % LEL and % volume",
    "3 Operating modes: Normal, leak check, & bar hole",
    "PPM leak detector",
    "Adjustable display ranges",
    "Visual / audible pulses change with gas concentration",
    "CO display in leak check mode",
    "Bar hole test mode for underground leak checks",
    "Internal sample drawing pump with up to 100 feet range",
    "Vibration, visual, and audible alarms",
    "Automatic backlight during alarms",
    "Lithium ion or alkaline battery packs (interchangeable)",
    "Intrinsically safe, ATEX/IECEx/CE or CSA/CE (Optional)",
  ],
  [
    "With the GX-2012, you have multiple tools in one instrument. Having 3 operating modes, the GX-2012 can be used for confined space, safety monitoring in it's Normal Operating mode; for leak investigation in Leak Check mode; and for underground leak checking in Bar Hole mode. When equipped with an optional TC sensor, the GX-2012 can measure 100% volume methane and dynamically auto range from % LEL to % volume. This is ideal for line purge testing.",
    "Built around high-quality micro-sensor technology, the GX-2012 is RKI's smallest personal 1-5 sensor gas monitor with a built in sample pump. Weighing only 12.3 ounces, the GX-2012 can monitor the standard confined space gases (LEL combustibles, Oxygen content, Carbon Monoxide, and Hydrogen Sulfide).",
    "The GX-2012's large LCD display shows all gas readings, battery level, current time, and will automatically backlight in alarm conditions. Standard alarm types include vibration, visual, and audible alarms, which can be set to latching or non-latching. Controlled by a microprocessor, the GX-2012 continuously checks itself for sensor connections, low battery, circuit trouble, low flow, and calibration errors. The GX-2012 can interchangeably operate on either a Li-ion battery pack or an alkaline battery pack. The batteries are simple to replace requiring no tools to access the removable battery compartment or pack.",
  ],
  path,
  brochure
);
