import gmi_ps_200 from "@/assets/gas_detection_instruments/personal/gmi_ps_200.png";
import gmi_ps_500 from "@/assets/gas_detection_instruments/personal/gmi_ps_500.png";
import riken_03_series from "@/assets/gas_detection_instruments/personal/riken_03_series.png";
import riken_gx_2009 from "@/assets/gas_detection_instruments/personal/riken_gx_2009.png";
import riken_gx_2012 from "@/assets/gas_detection_instruments/personal/riken_gx_2012.png";
import riken_gx_6000 from "@/assets/gas_detection_instruments/personal/riken_gx_6000.png";
import riken_rki_sc_01 from "@/assets/gas_detection_instruments/personal/riken_rki_sc_01.png";

import gmi_shipsurveyor from "@/assets/gas_detection_instruments/cargo_operation/gmi_shipsurveyor.png";
import riken_eagle from "@/assets/gas_detection_instruments/cargo_operation/riken_eagle.png";
import riken_eagle_2 from "@/assets/gas_detection_instruments/cargo_operation/riken_eagle_2.png";
import riken_gx_8000 from "@/assets/gas_detection_instruments/cargo_operation/riken_gx_8000.png";
import riken_rx_515 from "@/assets/gas_detection_instruments/cargo_operation/riken_rx_515.png";
import riken_rx_8000 from "@/assets/gas_detection_instruments/cargo_operation/riken_rx_8000.png";

import gmi_active_8 from "@/assets/gas_detection_instruments/fixed/gmi_active_8.png";
import gmi_single_point_gas_alarm from "@/assets/gas_detection_instruments/fixed/gmi_single_point_gas_alarm.png";

import gmi_ps_200_series from "@/assets/gas_detection_instruments/calibration_stations/gmi_ps200_series.jpg";
import gmi_ps_500_series from "@/assets/gas_detection_instruments/calibration_stations/gmi_ps500_series.jpg";
import riken_sdm_03 from "@/assets/gas_detection_instruments/calibration_stations/riken_sdm_03.png";
import riken_sdm_2009 from "@/assets/gas_detection_instruments/calibration_stations/riken_sdm_2009.png";
import riken_sdm_2012 from "@/assets/gas_detection_instruments/calibration_stations/riken_sdm_2012.png";
import riken_sdm_6000 from "@/assets/gas_detection_instruments/calibration_stations/riken_sdm_6000.png";
import riken_sdm_e2 from "@/assets/gas_detection_instruments/calibration_stations/riken_sdm_e2.png";

function generateLink(title: string): string {
  return `/gas-detection-instrument/${title.toLowerCase().replace(/ /g, "-")}`;
}

export const GAS_DETECTION_INSTRUMENTS = [
  {
    title: "Personal Gas Detection Instruments",
    instruments: {
      gmi: {
        gmi_ps_200: {
          title: "GMI PS 200",
          alt: "GMI PS 200",
          imgPath: gmi_ps_200,
          link: generateLink("GMI PS 200"),
        },
        gmi_ps_500: {
          title: "GMI PS 500",
          alt: "GMI PS 500",
          imgPath: gmi_ps_500,
          link: generateLink("GMI PS 500"),
        },
      },
      riken: {
        riken_03_series: {
          title: "RIKEN 03 Series",
          alt: "RIKEN 03 Series",
          imgPath: riken_03_series,
          link: generateLink("RIKEN 03 Series"),
        },
        riken_gx_2009: {
          title: "RIKEN GX-2009",
          alt: "RIKEN GX-2009",
          imgPath: riken_gx_2009,
          link: generateLink("RIKEN GX-2009"),
        },
        riken_gx_2012: {
          title: "RIKEN GX-2012",
          alt: "RIKEN GX-2012",
          imgPath: riken_gx_2012,
          link: generateLink("RIKEN GX-2012"),
        },
        riken_gx_6000: {
          title: "RIKEN GX-6000",
          alt: "RIKEN GX-6000",
          imgPath: riken_gx_6000,
          link: generateLink("RIKEN GX-6000"),
        },
        riken_rki_sc_01: {
          title: "RIKEN RKI SC-01",
          alt: "RIKEN RKI SC-01",
          imgPath: riken_rki_sc_01,
          link: generateLink("RIKEN RKI SC-01"),
        },
      },
    },
  },
  {
    title: "Cargo Operation Gas Detection Instruments",
    instruments: {
      gmi: {
        gmi_shipsurveyor: {
          title: "GMI Ship Surveyor",
          alt: "GMI Ship Surveyor",
          imgPath: gmi_shipsurveyor,
          link: generateLink("GMI Ship Surveyor"),
        },
      },
      riken: {
        riken_eagle: {
          title: "Riken Eagle",
          alt: "Riken Eagle",
          imgPath: riken_eagle,
          link: generateLink("Riken Eagle"),
        },
        riken_eagle_2: {
          title: "Riken Eagle 2",
          alt: "Riken Eagle 2",
          imgPath: riken_eagle_2,
          link: generateLink("Riken Eagle 2"),
        },
        riken_gx_8000: {
          title: "Riken GX-8000",
          alt: "Riken GX-8000",
          imgPath: riken_gx_8000,
          link: generateLink("Riken GX-8000"),
        },
        riken_rx_515: {
          title: "Riken RX-515",
          alt: "Riken RX-515",
          imgPath: riken_rx_515,
          link: generateLink("Riken RX-515"),
        },
        riken_rx_8000: {
          title: "Riken RX-8000",
          alt: "Riken RX-8000",
          imgPath: riken_rx_8000,
          link: generateLink("Riken RX-8000"),
        },
      },
    },
  },
  {
    title: "Fixed Instruments",
    instruments: {
      gmi: {
        gmi_active_8: {
          title: "GMI Active 8",
          alt: "GMI Active 8",
          imgPath: gmi_active_8,
          link: generateLink("GMI Active 8"),
        },
        gmi_single_point_gas_alarm: {
          title: "GMI Single Point Gas Alarm",
          alt: "GMI Single Point Gas Alarm",
          imgPath: gmi_single_point_gas_alarm,
          link: generateLink("GMI Single Point Gas Alarm"),
        },
      },
    },
  },
  {
    title: "Calibration Stations",
    instruments: {
      gmi: {
        gmi_ps_200_series: {
          title: "GMI PS200 Series",
          alt: "GMI PS200 Series",
          imgPath: gmi_ps_200_series,
          link: generateLink("GMI PS200 Series"),
        },
        gmi_ps_500_series: {
          title: "GMI PS500 Series",
          alt: "GMI PS500 Series",
          imgPath: gmi_ps_500_series,
          link: generateLink("GMI PS500 Series"),
        },
      },
      riken: {
        riken_sdm_03: {
          title: "Riken SDM-03",
          alt: "Riken SDM-03",
          imgPath: riken_sdm_03,
          link: generateLink("Riken SDM-03"),
        },
        riken_sdm_2009: {
          title: "Riken SDM-2009",
          alt: "Riken SDM-2009",
          imgPath: riken_sdm_2009,
          link: generateLink("Riken SDM-2009"),
        },
        riken_sdm_2012: {
          title: "Riken SDM-2012",
          alt: "Riken SDM-2012",
          imgPath: riken_sdm_2012,
          link: generateLink("Riken SDM-2012"),
        },
        riken_sdm_6000: {
          title: "Riken SDM-6000",
          alt: "Riken SDM-6000",
          imgPath: riken_sdm_6000,
          link: generateLink("Riken SDM-6000"),
        },
        riken_sdm_e2: {
          title: "Riken SDM-E2",
          alt: "Riken SDM-E2",
          imgPath: riken_sdm_e2,
          link: generateLink("Riken SDM-E2"),
        },
      },
    },
  },
];
