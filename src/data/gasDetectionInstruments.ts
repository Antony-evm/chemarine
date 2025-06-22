import { gmi_ps_200 } from "./instruments/gmi_ps_200";
import { gmi_ps_200_calibration_station } from "./instruments/gmi_ps_200_calibration_station";
import { gmi_ps_500 } from "./instruments/gmi_ps_500";
import { gmi_shipsurveyor } from "./instruments/gmi_ship_surveyor";
import { rki_04_series } from "./instruments/rki_04_series";
import { rki_gx_2012 } from "./instruments/rki_gx_2012";
import { rki_gx_3r } from "./instruments/rki_gx_3r";
import { rki_gx_3r_pro } from "./instruments/rki_gx_3r_pro";
import { rki_gx_6000 } from "./instruments/rki_gx_6000";
import { rki_gx_9000 } from "./instruments/rki_gx_9000";
import { rki_gx_force } from "./instruments/rki_gx_force";
import { rki_rx_8000 } from "./instruments/rki_rx_8000";

export const GAS_DETECTION_INSTRUMENTS = [
  {
    title: "Personal",
    instruments: {
      gmi: {
        gmi_ps_200,
        gmi_ps_500,
      },
      riken: {
        rki_04_series,
        rki_gx_3r,
        rki_gx_3r_pro,
        rki_gx_force,
        rki_gx_6000,
      },
    },
  },
  {
    title: "Cargo Operation",
    instruments: {
      gmi: {
        gmi_ps_500,
        gmi_shipsurveyor,
      },
      riken: {
        rki_gx_2012,
        rki_gx_6000,
        rki_rx_8000,
        rki_gx_9000,
      },
    },
  },
  {
    title: "Calibration Stations",
    instruments: {
      gmi: {
        gmi_ps_200_calibration_station,
      },
    },
  },
];
