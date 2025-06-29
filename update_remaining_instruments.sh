#!/bin/bash
# Script to update remaining instrument files with brochure imports
# Run this script to add brochure imports to all remaining instrument files

# Remaining files to update (you can do these manually or adapt this script):

# For each file, you need to:
# 1. Add the brochure import line after the path import
# 2. Add the brochure parameter to the createInstrumentWithImport call

echo "Files to update with brochure imports:"
echo ""
echo "RKI Instruments:"
echo "- rki_gx_3r_pro.ts"
echo "- rki_gx_9000.ts" 
echo "- rki_gx_force.ts"
echo "- rki_rx_8000.ts"
echo ""
echo "GMI Instruments:"
echo "- gmi_ps_500_calibration_station.ts"
echo "- gmi_ship_surveyor.ts (NOTE: no PDF exists for this one)"
echo ""
echo "RKI Calibration Stations:"
echo "- rki_sdm_04_calibration_station.ts"
echo "- rki_sdm_2012_calibration_station.ts"
echo "- rki_sdm_3r_calibration_station.ts"
echo "- rki_sdm_6000_calibration_station.ts"
echo "- rki_sdm_force_calibration_station.ts"
echo ""
echo "For each file, make these changes:"
echo ""
echo "1. Add import line:"
echo '   import brochure from "@/assets/pdfs/instrument_specs/FILENAME.pdf";'
echo ""
echo "2. Update the export call to include brochure parameter:"
echo "   Change:   path"
echo "   To:       path,"
echo "             brochure"
echo ""
echo "Example for rki_gx_3r_pro.ts:"
echo ""
echo "Before:"
echo 'import path from "@/assets/gas_detection_instruments/rki_gx_3r_pro.png";'
echo 'import { createInstrumentWithImport } from "@/utils/instrumentFactory";'
echo ""
echo "After:"
echo 'import path from "@/assets/gas_detection_instruments/rki_gx_3r_pro.png";'
echo 'import brochure from "@/assets/pdfs/instrument_specs/rki_gx_3r_pro.pdf";'
echo 'import { createInstrumentWithImport } from "@/utils/instrumentFactory";'
echo ""
echo "And change the ending from:"
echo "  ],"
echo "  path"
echo ");"
echo ""
echo "To:"
echo "  ],"
echo "  path,"
echo "  brochure"
echo ");"
