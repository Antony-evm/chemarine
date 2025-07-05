import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createHighDpiGasDetectionInstruments() {
  const instrumentsDir = path.join(
    __dirname,
    "..",
    "src",
    "assets",
    "gas_detection_instruments"
  );
  const files = fs
    .readdirSync(instrumentsDir)
    .filter((file) => file.endsWith(".png"));

  console.log("Creating high-DPI gas detection instrument images...");

  for (const file of files) {
    const filePath = path.join(instrumentsDir, file);
    const baseName = path.parse(file).name;

    try {
      const metadata = await sharp(filePath).metadata();
      console.log(
        `Processing ${file} (${metadata.width}x${metadata.height})...`
      );

      // Skip if @2x and @3x versions already exist
      const webp2xPath = path.join(instrumentsDir, `${baseName}@2x.webp`);
      const webp3xPath = path.join(instrumentsDir, `${baseName}@3x.webp`);

      if (fs.existsSync(webp2xPath) && fs.existsSync(webp3xPath)) {
        console.log(`✓ High-DPI versions already exist for ${baseName}`);
        continue;
      }

      // 2x version (double resolution)
      const width2x = Math.round(metadata.width * 2);
      const height2x = Math.round(metadata.height * 2);

      await sharp(filePath)
        .resize(width2x, height2x, {
          kernel: sharp.kernel.lanczos3,
          fit: "fill",
        })
        .png({ quality: 90 })
        .toFile(path.join(instrumentsDir, `${baseName}@2x.png`));

      await sharp(filePath)
        .resize(width2x, height2x, {
          kernel: sharp.kernel.lanczos3,
          fit: "fill",
        })
        .webp({ quality: 85 })
        .toFile(path.join(instrumentsDir, `${baseName}@2x.webp`));

      // 3x version (triple resolution)
      const width3x = Math.round(metadata.width * 3);
      const height3x = Math.round(metadata.height * 3);

      await sharp(filePath)
        .resize(width3x, height3x, {
          kernel: sharp.kernel.lanczos3,
          fit: "fill",
        })
        .png({ quality: 90 })
        .toFile(path.join(instrumentsDir, `${baseName}@3x.png`));

      await sharp(filePath)
        .resize(width3x, height3x, {
          kernel: sharp.kernel.lanczos3,
          fit: "fill",
        })
        .webp({ quality: 85 })
        .toFile(path.join(instrumentsDir, `${baseName}@3x.webp`));

      console.log(`✓ Generated high-DPI versions for ${baseName}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log("\n✅ High-DPI gas detection instrument generation complete!");

  // Provide recommendations for standard dimensions
  console.log("\n=== RECOMMENDED TAILWIND DIMENSIONS ===");
  console.log(
    "Based on aspect ratios, here are suggested standardized dimensions:"
  );
  console.log("");
  console.log("Portrait instruments (~0.4-0.8 ratio):");
  console.log("- Container: h-32 sm:h-36 md:h-40 lg:h-44 (128-176px)");
  console.log("- Width: Auto-calculated based on aspect ratio");
  console.log("");
  console.log("Square/Landscape instruments (~1.0-1.6 ratio):");
  console.log("- Container: h-32 sm:h-36 md:h-40 lg:h-44 (128-176px)");
  console.log("- Width: Auto-calculated based on aspect ratio");
  console.log("");
  console.log("Specific aspect ratios to add to Tailwind config:");
  console.log("- aspect-[4/10] for ~0.4 ratio (very tall)");
  console.log("- aspect-[1/2] for ~0.5 ratio (tall)");
  console.log("- aspect-[3/5] for ~0.6 ratio (portrait)");
  console.log("- aspect-[7/10] for ~0.7 ratio (portrait)");
  console.log("- aspect-[4/5] for ~0.8 ratio (portrait)");
  console.log("- aspect-[9/10] for ~0.9 ratio (almost square)");
  console.log("- aspect-[11/10] for ~1.1 ratio (wide)");
  console.log("- aspect-[14/10] for ~1.4 ratio (landscape)");
  console.log("- aspect-[16/10] for ~1.6 ratio (wide landscape)");
}

createHighDpiGasDetectionInstruments();
