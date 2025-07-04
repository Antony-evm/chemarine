import sharp from "sharp";
import fs from "fs";
import path from "path";

async function convertToWebP() {
  const inputDir = "./src/assets/calibration_gases";
  const images = [
    "713-regulator.png",
    "2000-series-regulator.png",
    "ff_20_regulator.png",
  ];

  console.log("Converting regulator images to WebP...\n");

  for (const imageName of images) {
    const inputPath = path.join(inputDir, imageName);
    const outputPath = path.join(inputDir, imageName.replace(".png", ".webp"));

    try {
      // Check if input file exists
      if (!fs.existsSync(inputPath)) {
        console.log(`❌ ${imageName} not found, skipping...`);
        continue;
      }

      // Get original file stats
      const originalStats = fs.statSync(inputPath);
      const originalSize = originalStats.size;

      // Convert to WebP with high quality
      await sharp(inputPath)
        .webp({
          quality: 85,
          effort: 6,
        })
        .toFile(outputPath);

      // Get WebP file stats
      const webpStats = fs.statSync(outputPath);
      const webpSize = webpStats.size;
      const savings = (
        ((originalSize - webpSize) / originalSize) *
        100
      ).toFixed(1);

      console.log(`✅ ${imageName} -> ${imageName.replace(".png", ".webp")}`);
      console.log(`   Original: ${(originalSize / 1024).toFixed(1)} KB`);
      console.log(`   WebP: ${(webpSize / 1024).toFixed(1)} KB`);
      console.log(`   Savings: ${savings}%\n`);
    } catch (error) {
      console.error(`❌ Error converting ${imageName}:`, error.message);
    }
  }

  console.log("✨ Conversion complete!");
}

convertToWebP().catch(console.error);
