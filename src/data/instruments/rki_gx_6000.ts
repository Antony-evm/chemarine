import path from "@/assets/gas_detection_instruments/rki_gx_6000.png";
import brochure from "@/assets/pdfs/instrument_specs/rki_gx_6000.pdf";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_gx_6000 = createInstrumentWithImport(
  "RKI GX-6000",
  [
    "5 Operating modes",
    "Smallest 6 gas sample draw",
    "2 Interchangeable smart sensor slots",
    "4 PID options: 10.6 (2 ranges) eV, 10.0 eV, and 11.7 eV lamps",
    "Supports dual PID sensors",
    "PID library of over 600 VOCs — Easily switch target VOC from customizable user list or a recently used list",
    "Benzene specific version",
    "PPM Leak Check mode",
    "LEL sensor protection mode",
    "Man-down alarm",
    "Panic alarm",
    "Auto display rotation",
    "Peak-bar display",
    "LED Light source",
    "Internal sample pump",
    "Light weight, small, rugged IP-67",
    "Interchangeable battery packs",
    "Operates up to 14 hours",
    "Field replaceable sensors, batteries, filters and pump",
    "Intrinsically safe ATEX / IECEx / cCSAus",
  ],
  [
    "The RKI GX-6000 is a versatile handheld gas detector capable of monitoring up to six gases simultaneously. Uniquely, it supports dual PID sensors, allowing the installation of two photoionization detectors within a single unit—an industry first. Users can combine a broad-range 10.6 eV PID sensor with a benzene-specific 10.0 eV sensor, facilitating both general VOC detection and targeted benzene analysis without equipment changes. The GX-6000 features a library of over 600 VOCs, customizable favorites, and recent gas lists for quick access. Additional features include a strong internal pump, man-down and panic alarms, LED flashlight, and a rugged IP-67 rated design, ensuring reliability in demanding environments.",
    "The GX-6000 has a rugged design built for the nastiest environments. It is equipped with a removable impact-resistant rubber boot and a dust and water resistant enclosure with an IP-67 rating. With 5 bright LED lights on 3 sides of the instrument, alarms are easily seen from a variety of perspectives. With vibration and loud audible alarm, GX-6000 will easily alert users when needed.",
    "Sensors available: CL2, CO, CO2, HCN, H2S, NH3, NO2, PH3, SO2, and VOC (volatile organic compounds) Ammonia, Chlorine, Hydrogen Cyanide, Nitrogen Dioxide, Phosphine, Sulfur Dioxide, Carbon Dioxide, Methane, Hydrocarbon, Hydrogen Sulfide, Carbon Monoxide, and Oxygen Monitor.",
    "6 Operating Modes: Normal Mode, Barhole Mode, Inert Mode, Leak Check, Snap Log Mode, Benzene Specific",
  ],
  path,
  brochure
);
