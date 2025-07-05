import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function checkGasDetectionImageSizes() {
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

  console.log("Gas Detection Instrument Image Dimensions:");
  console.log("==========================================");

  const imageInfo = [];

  for (const file of files) {
    const filePath = path.join(instrumentsDir, file);
    try {
      const metadata = await sharp(filePath).metadata();
      const aspectRatio = (metadata.width / metadata.height).toFixed(3);
      const info = {
        name: file,
        width: metadata.width,
        height: metadata.height,
        aspectRatio: parseFloat(aspectRatio),
      };
      imageInfo.push(info);
      console.log(
        `${file}: ${metadata.width}x${metadata.height} pixels (aspect ratio: ${aspectRatio})`
      );
    } catch (error) {
      console.log(`Error reading ${file}:`, error.message);
    }
  }

  // Analyze aspect ratios to recommend standard sizes
  console.log("\n=== ASPECT RATIO ANALYSIS ===");
  const aspectRatios = imageInfo.map((img) => img.aspectRatio);
  const uniqueRatios = [
    ...new Set(aspectRatios.map((r) => r.toFixed(2))),
  ].sort();
  console.log("Unique aspect ratios:", uniqueRatios);

  // Group images by similar aspect ratios
  const ratioGroups = {};
  imageInfo.forEach((img) => {
    const roundedRatio = img.aspectRatio.toFixed(1);
    if (!ratioGroups[roundedRatio]) {
      ratioGroups[roundedRatio] = [];
    }
    ratioGroups[roundedRatio].push(img.name);
  });

  console.log("\n=== GROUPED BY ASPECT RATIO ===");
  Object.entries(ratioGroups).forEach(([ratio, images]) => {
    console.log(`Ratio ~${ratio}: ${images.length} images`);
    images.forEach((img) => console.log(`  - ${img}`));
  });

  return imageInfo;
}

checkGasDetectionImageSizes();
