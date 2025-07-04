import sharp from "sharp";
import fs from "fs";
import path from "path";

async function createHighDPIRegulatorImages() {
  const inputDir = "./src/assets/calibration_gases";
  const outputDir = "./src/assets/calibration_gases";

  // Define the regulator images to process (3:4 aspect ratio, 225×300 base size)
  const regulatorImages = [
    {
      name: "713-regulator",
      baseName: "713 Regulator",
    },
    {
      name: "2000-series-regulator",
      baseName: "2000 Series Regulator",
    },
    {
      name: "ff_20_regulator",
      baseName: "FF 20 Regulator",
    },
  ];

  // Define the different DPI versions - 3:4 aspect ratio (225×300 base size)
  const versions = [
    { suffix: "@1x", width: 225, height: 300, density: "1x" },
    { suffix: "@2x", width: 450, height: 600, density: "2x" },
    { suffix: "@3x", width: 675, height: 900, density: "3x" },
  ];

  try {
    console.log("Creating high-DPI regulator image variants...\n");

    for (const regulator of regulatorImages) {
      const inputPath = path.join(inputDir, `${regulator.name}.png`);

      // Check if input file exists
      if (!fs.existsSync(inputPath)) {
        console.log(`❌ ${regulator.baseName} PNG not found at ${inputPath}`);
        continue;
      }

      console.log(`🔧 Processing ${regulator.baseName}...`);

      // Get original file stats
      const originalStats = fs.statSync(inputPath);
      const originalSize = originalStats.size;
      console.log(
        `📊 Original file size: ${(originalSize / 1024).toFixed(1)} KB`
      );

      for (const version of versions) {
        const pngPath = path.join(
          outputDir,
          `${regulator.name}${version.suffix}.png`
        );
        const webpPath = path.join(
          outputDir,
          `${regulator.name}${version.suffix}.webp`
        );

        // Skip if already exists
        if (fs.existsSync(pngPath) && fs.existsSync(webpPath)) {
          console.log(
            `  ⏭️  ${version.density} versions already exist, skipping...`
          );
          continue;
        }

        console.log(
          `  🔧 Creating ${version.density} (${version.width}×${version.height})...`
        );

        try {
          // Create PNG version
          await sharp(inputPath)
            .resize(version.width, version.height, {
              fit: "contain",
              background: { r: 255, g: 255, b: 255, alpha: 0 }, // Transparent background
            })
            .png()
            .toFile(pngPath);

          // Create WebP version
          await sharp(inputPath)
            .resize(version.width, version.height, {
              fit: "contain",
              background: { r: 255, g: 255, b: 255, alpha: 0 }, // Transparent background
            })
            .webp({
              quality: 90,
              effort: 6,
            })
            .toFile(webpPath);

          // Get file stats
          const pngStats = fs.statSync(pngPath);
          const webpStats = fs.statSync(webpPath);
          const pngSize = pngStats.size;
          const webpSize = webpStats.size;
          const savings = (((pngSize - webpSize) / pngSize) * 100).toFixed(1);

          console.log(`     📁 PNG:  ${(pngSize / 1024).toFixed(1)} KB`);
          console.log(
            `     📁 WebP: ${(webpSize / 1024).toFixed(
              1
            )} KB (${savings}% smaller)`
          );
        } catch (error) {
          console.error(
            `     ❌ Error creating ${version.density}:`,
            error.message
          );
        }
      }

      console.log(`   ✅ ${regulator.baseName} - Processing complete\n`);
    }

    console.log(
      "🎉 All high-DPI regulator image variants created successfully!"
    );
    console.log("\n📝 Next step: Update regulators.ts to use high-DPI images:");
    console.log(
      "Replace the single imgWebpPath with computed srcSet strings for each regulator."
    );
  } catch (error) {
    console.error(
      "❌ Error creating high-DPI regulator image variants:",
      error
    );
  }
}

createHighDPIRegulatorImages();
