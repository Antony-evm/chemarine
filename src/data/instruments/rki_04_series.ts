import path from "@/assets/gas_detection_instruments/rki_04_series.png";
import brochure from "@/assets/pdfs/instrument_specs/rki_04_series.pdf";
import { createInstrumentWithImport } from "@/utils/instrumentFactory";

export const rki_04_series = createInstrumentWithImport(
  "RKI 04 Series",
  [
    "Continuously operate for over one year (H2S & CO)",
    "Toxic gases include: NH3, Cl2, HCN, NO2, PH3 & SO2",
    "CO with H2 elimination",
    "CO & O2 Dual Sensor",
    "Field serviceable",
    'Pocket size 2.1"(W) x 2.6"(H) x 0.9"(D), 2.8 ounces',
    "Impact, dust, and water resistant (IP-67)",
    "Replaceable rubber boot",
    "Alligator clip with 360° rotation",
    "Audible / visual / vibration alarms",
    "Automatic backlight",
    "Intrinsically safe, ATEX and C / US approvals",
    "3 Year warranty*",
  ],
  [
    "The 04 Series single gas monitor is designed to operate for many years with field replaceable sensors and filters.The 04 Series can be operated continuously for up to 9,000 hours on (2) AAA size alkaline batteries (depending on model). The 04 Series has 3 preset alarms that are user adjustable. Each version is also equipped with visual, audible, and vibration alarms as standard.",
    "The replacement sensors are inexpensive, easily field replaceable, and are interchangeable with other popular RKI instruments like the GX-3R, GX-3R Pro, and GasWatch 3. Sensors have a life expectancy of over 3 years and are backed by a 3 year warranty.*",
    "Each 04 Series monitor is impact, dust, and water resistant with an IP-67 ingress protection rating. 04 Series instruments are safe for use in hazardous locations, classified as intrinsically safe ATEX/IECEx and by QPS to U.S. and Canadian standards for Class I, Division 1, Groups A, B, C, and D atmospheres.",
    "* 3 year warranty on material and workmanship including sensors   (1 year warranty for Ammonia and Chlorine sensors)",
  ],
  path,
  brochure
);
