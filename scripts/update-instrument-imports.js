import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const instrumentFiles = [
  "gmi_ps_200_calibration_station",
  "gmi_ps_500",
  "gmi_ps_500_calibration_station",
  "gmi_shipsurveyor",
  "rki_04_series",
  "rki_gx_2012",
  "rki_gx_3r",
  "rki_gx_3r_pro",
  "rki_gx_6000",
  "rki_gx_9000",
  "rki_gx_force",
  "rki_rx_8000",
  "rki_sdm_04_calibration_station",
  "rki_sdm_2012_calibration_station",
  "rki_sdm_3r_calibration_station",
  "rki_sdm_6000_calibration_station",
  "rki_sdm_force_calibration_station",
];

async function updateInstrumentFiles() {
  const instrumentsDir = path.join(
    __dirname,
    "..",
    "src",
    "data",
    "instruments"
  );

  console.log("Updating instrument files to use high-DPI imports...");

  for (const fileName of instrumentFiles) {
    const filePath = path.join(instrumentsDir, `${fileName}.ts`);

    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${fileName}.ts`);
      continue;
    }

    try {
      let content = fs.readFileSync(filePath, "utf8");

      // Skip if already updated
      if (content.includes("createInstrumentWithHighDPI")) {
        console.log(`✓ Already updated: ${fileName}.ts`);
        continue;
      }

      // Replace the old import pattern
      const oldImportPattern =
        /import\s+path\s+from\s+"@\/assets\/gas_detection_instruments\/([^"]+)\.png";/;
      const match = content.match(oldImportPattern);

      if (!match) {
        console.log(`⚠️  No matching import found in: ${fileName}.ts`);
        continue;
      }

      const imageName = match[1];

      // Replace imports
      const newImports = `import png1x from "@/assets/gas_detection_instruments/${imageName}.png";
import webp1x from "@/assets/gas_detection_instruments/${imageName}.webp";
import webp2x from "@/assets/gas_detection_instruments/${imageName}@2x.webp";
import webp3x from "@/assets/gas_detection_instruments/${imageName}@3x.webp";`;

      content = content.replace(oldImportPattern, newImports);

      // Replace factory function import
      content = content.replace(
        'import { createInstrumentWithImport } from "@/utils/instrumentFactory";',
        'import { createInstrumentWithHighDPI } from "@/utils/instrumentFactory";'
      );

      // Replace factory function call
      content = content.replace(
        "createInstrumentWithImport(",
        "createInstrumentWithHighDPI("
      );

      // Replace the last parameters (path, brochure) with the new image object
      const pathParamPattern = /(\s+\],\s*)(path)(,\s*brochure\s*\);)/;
      content = content.replace(
        pathParamPattern,
        "$1{\n    png1x,\n    webp1x,\n    webp2x,\n    webp3x,\n  }$3"
      );

      fs.writeFileSync(filePath, content, "utf8");
      console.log(`✓ Updated: ${fileName}.ts`);
    } catch (error) {
      console.error(`Error updating ${fileName}.ts:`, error.message);
    }
  }

  console.log("\n✅ Instrument file updates complete!");
}

updateInstrumentFiles();
