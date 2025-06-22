import { gmi_ps_200 } from "./instruments/gmi_ps_200";
import { gmi_ps_500 } from "./instruments/gmi_ps_500";
import { rki_gx_3r } from "./instruments/rki_gx_3r";
import { rki_gx_3r_pro } from "./instruments/rki_gx_3r_pro";

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
      },
    },
  },
  {
    title: "Cargo Operation",
    instruments: {
      gmi: {
        gmi_ps_500,
      },
    },
  },
  {
    title: "Fixed",
    instruments: {},
  },
  {
    title: "Calibration Stations",
    instruments: {},
  },
];
