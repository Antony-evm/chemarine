import sharp from "sharp";
import fs from "fs";
import path from "path";

async function createResizedLogo() {
  const inputPath = "./src/assets/logo.png";
  const outputPngPath = "./src/assets/logo-280x40.png";
  const outputWebpPath = "./src/assets/logo-280x40.webp";

  try {
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.log("❌ Original logo.png not found");
      return;
    }

    console.log("Creating 280x40 logo variants...\n");

    // Get original file stats
    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size;

    // Resize to 280x40 and save as PNG
    await sharp(inputPath)
      .resize(280, 40, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 }, // Transparent background
      })
      .png()
      .toFile(outputPngPath);

    // Resize to 280x40 and save as WebP
    await sharp(inputPath)
      .resize(280, 40, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 }, // Transparent background
      })
      .webp({
        quality: 90,
        effort: 6,
      })
      .toFile(outputWebpPath);

    // Get file stats for both outputs
    const pngStats = fs.statSync(outputPngPath);
    const webpStats = fs.statSync(outputWebpPath);
    const pngSize = pngStats.size;
    const webpSize = webpStats.size;
    const savings = (((pngSize - webpSize) / pngSize) * 100).toFixed(1);

    console.log(`✅ Created logo-280x40.png`);
    console.log(`   Size: ${(pngSize / 1024).toFixed(1)} KB`);
    console.log(`✅ Created logo-280x40.webp`);
    console.log(`   Size: ${(webpSize / 1024).toFixed(1)} KB`);
    console.log(`   WebP savings: ${savings}%\n`);

    console.log("📏 Dimensions: 280x40 pixels");
    console.log("✨ Logo resize complete!");
  } catch (error) {
    console.error("❌ Error creating resized logo:", error.message);
  }
}

createResizedLogo().catch(console.error);
