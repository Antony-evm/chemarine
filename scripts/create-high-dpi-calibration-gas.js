import sharp from "sharp";
import fs from "fs";
import path from "path";

async function createHighDPICalibrationGasImage() {
  const inputPath =
    "./src/assets/calibration_gases/calgaz_cylinders_and_accessories.png";
  const outputDir = "./src/assets/calibration_gases";

  // Define the different DPI versions - 1.31:1 aspect ratio (300×229 base size)
  const versions = [
    {
      name: "calgaz_cylinders_and_accessories@1x",
      width: 300,
      height: 229,
      density: "1x",
    },
    {
      name: "calgaz_cylinders_and_accessories@2x",
      width: 600,
      height: 458,
      density: "2x",
    },
    {
      name: "calgaz_cylinders_and_accessories@3x",
      width: 900,
      height: 687,
      density: "3x",
    },
  ];

  try {
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.log("❌ Original calgaz_cylinders_and_accessories.png not found");
      return;
    }

    console.log("Creating high-DPI calibration gas image variants...\n");

    // Get original file stats
    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size;

    console.log(
      `📊 Original file size: ${(originalSize / 1024).toFixed(1)} KB\n`
    );

    for (const version of versions) {
      const pngPath = path.join(outputDir, `${version.name}.png`);
      const webpPath = path.join(outputDir, `${version.name}.webp`);

      console.log(
        `🔧 Creating ${version.density} (${version.width}×${version.height})...`
      );

      // Create PNG version
      await sharp(inputPath)
        .resize(version.width, version.height, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 1 }, // White background for product image
        })
        .png()
        .toFile(pngPath);

      // Create WebP version
      await sharp(inputPath)
        .resize(version.width, version.height, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 1 }, // White background for product image
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

      console.log(`   📁 PNG:  ${(pngSize / 1024).toFixed(1)} KB`);
      console.log(
        `   📁 WebP: ${(webpSize / 1024).toFixed(1)} KB (${savings}% smaller)`
      );
      console.log(`   ✅ ${version.density} versions created\n`);
    }

    console.log(
      "🎉 All high-DPI calibration gas image variants created successfully!"
    );
    console.log("\n📝 Usage example for OptimizedImage component:");
    console.log(`<OptimizedImage`);
    console.log(
      `  :srcSet="'/assets/calibration_gases/calgaz_cylinders_and_accessories@1x.webp 1x, /assets/calibration_gases/calgaz_cylinders_and_accessories@2x.webp 2x, /assets/calibration_gases/calgaz_cylinders_and_accessories@3x.webp 3x'"`
    );
    console.log(
      `  :src="'/assets/calibration_gases/calgaz_cylinders_and_accessories@1x.png'"`
    );
    console.log(`  alt="Calibration Gas Cylinders"`);
    console.log(`  width="300"`);
    console.log(`  height="229"`);
    console.log(`  imgClass="aspect-[4/3] w-24 sm:w-34 md:w-42 lg:w-48"`);
    console.log(`  loading="lazy"`);
    console.log(`  fetchpriority="low"`);
    console.log(`/>`);
  } catch (error) {
    console.error(
      "❌ Error creating high-DPI calibration gas image variants:",
      error
    );
  }
}

createHighDPICalibrationGasImage();
