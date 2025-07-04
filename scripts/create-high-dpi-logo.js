import sharp from "sharp";
import fs from "fs";
import path from "path";

async function createHighDPILogo() {
  const inputPath = "./src/assets/logo.png";
  const outputDir = "./src/assets";

  // Define the different DPI versions
  const versions = [
    { name: "logo@1x", width: 280, height: 40, density: "1x" },
    { name: "logo@2x", width: 560, height: 80, density: "2x" },
    { name: "logo@3x", width: 840, height: 120, density: "3x" },
  ];

  try {
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.log("❌ Original logo.png not found");
      return;
    }

    console.log("Creating high-DPI logo variants...\n");

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
          background: { r: 0, g: 0, b: 0, alpha: 0 }, // Transparent background
        })
        .png()
        .toFile(pngPath);

      // Create WebP version
      await sharp(inputPath)
        .resize(version.width, version.height, {
          fit: "contain",
          background: { r: 0, g: 0, b: 0, alpha: 0 }, // Transparent background
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

    console.log("🎉 All high-DPI logo variants created successfully!");
    console.log("\n📝 Usage example for OptimizedImage component:");
    console.log(`<OptimizedImage`);
    console.log(
      `  :srcSet="'/assets/logo@1x.webp 1x, /assets/logo@2x.webp 2x, /assets/logo@3x.webp 3x'"`
    );
    console.log(`  :src="'/assets/logo@1x.png'"`);
    console.log(`  alt="Chemical Marine Inspections Logo"`);
    console.log(`  :width="280"`);
    console.log(`  :height="40"`);
    console.log(`  imgClass="aspect-[7/1] w-42 sm:w-56 md:w-70"`);
    console.log(`  loading="eager"`);
    console.log(`  fetchpriority="high"`);
    console.log(`/>`);
  } catch (error) {
    console.error("❌ Error creating high-DPI logo variants:", error);
  }
}

createHighDPILogo();
