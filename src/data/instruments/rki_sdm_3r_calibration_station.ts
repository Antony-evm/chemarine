import png1x from "@/assets/gas_detection_instruments/rki_sdm_3r_calibration_station.png";
import webp1x from "@/assets/gas_detection_instruments/rki_sdm_3r_calibration_station.webp";
import webp2x from "@/assets/gas_detection_instruments/rki_sdm_3r_calibration_station@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/rki_sdm_3r_calibration_station@3x.webp";
import brochure from "@/assets/pdfs/instrument_specs/rki_sdm_3r_calibration_station.pdf";
import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";

export const rki_sdm_3r_calibration_station = createInstrumentWithHighDPI(
  "RKI SDM-3R Calibration Station",
  [
    "Stand Alone Use: <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash;Compatible with both GX-3R and GX-3R Pro <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Automatically charge, bump test, and/or calibrate <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Auto on/off of gas detector <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; 3 separate gas inputs <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Multiple modules (10 max) can use one set of calibration equipment <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Save Bump Test, Calibration, and Alarm Check records to USB flash drive, computer, or network <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Includes PC software for viewing/archiving bump test, calibration records, and event data",
    "PC Controlled Use:  <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Multiple modules connected to a PC (10 max) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Automatic calibration/bump test option &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Configure GX-3R (Pro) parameters &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Archive Bump Test, Calibration, and Alarm Check &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Archive data to network location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Software controlled data retrieval &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ndash; Windows 7, 8, and 10 compatible",
  ],
  [
    "Stand Alone Use: The SDM-3R is a versatile maintenance tool that automates the service of a GX-3R (Pro) portable gas monitor. This docking station can be used as a stand alone device for charging, calibration and bump testing, with all records stored automatically for future upload to a PC via USB flash drive (PC software and flash drive included).",
    "PC Controlled Use: Automate how you manage and service GX-3R (Pro) instruments by connecting the SDM-3R to a computer with a USB cable. With the SDM Docking Station controller software, you can simultaneously calibrate, bump test, alarm check, archive data, or charge up to ten instruments. You can also download the datalogging history from each instrument into one easy to manage location. SDM-3R stations can be manifolded together to reduce the number of demand flow regulators gas cylinders required.",
  ],
  {
    png1x,
    webp1x,
    webp2x,
    webp3x,
  },
  "328",
  "554",
  "328/554",
  brochure
);
