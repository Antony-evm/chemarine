import { gmi_ps_200 } from "./instruments/gmi_ps_200";
import { gmi_ps_500 } from "./instruments/gmi_ps_500";
import { rki_gx_3r } from "./instruments/rki_gx_3r";
import { rki_gx_3r_pro } from "./instruments/rki_gx_3r_pro";
import { rki_gx_6000 } from "./instruments/rki_gx_6000";
import { rki_gx_force } from "./instruments/rki_gx_force";

export const GAS_DETECTION_INSTRUMENTS = [
  {
    title: "Personal",
    instruments: {
      gmi: {
        gmi_ps_200,
        gmi_ps_500,
      },
      riken: {
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
      },
      riken: {
        rki_gx_6000,
      },
    },
  },
  {
    title: "Calibration Stations",
    instruments: {},
  },
];
