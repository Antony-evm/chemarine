import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function createHighDpiCertificates() {
  const certificatesDir = path.join(
    __dirname,
    "..",
    "src",
    "assets",
    "certificates"
  );
  const files = fs
    .readdirSync(certificatesDir)
    .filter((file) => file.endsWith(".png"));

  console.log("Creating high-DPI certificate images...");

  for (const file of files) {
    const filePath = path.join(certificatesDir, file);
    const baseName = path.parse(file).name;

    try {
      const metadata = await sharp(filePath).metadata();
      console.log(
        `Processing ${file} (${metadata.width}x${metadata.height})...`
      );

      // Original image as 1x
      const img1x = sharp(filePath);

      // Generate WebP versions at different DPR
      // 1x version (WebP)
      await img1x
        .webp({ quality: 85 })
        .toFile(path.join(certificatesDir, `${baseName}.webp`));

      // 2x version (double resolution)
      const width2x = Math.round(metadata.width * 2);
      const height2x = Math.round(metadata.height * 2);

      await sharp(filePath)
        .resize(width2x, height2x, {
          kernel: sharp.kernel.lanczos3,
          fit: "fill",
        })
        .png({ quality: 90 })
        .toFile(path.join(certificatesDir, `${baseName}@2x.png`));

      await sharp(filePath)
        .resize(width2x, height2x, {
          kernel: sharp.kernel.lanczos3,
          fit: "fill",
        })
        .webp({ quality: 85 })
        .toFile(path.join(certificatesDir, `${baseName}@2x.webp`));

      // 3x version (triple resolution)
      const width3x = Math.round(metadata.width * 3);
      const height3x = Math.round(metadata.height * 3);

      await sharp(filePath)
        .resize(width3x, height3x, {
          kernel: sharp.kernel.lanczos3,
          fit: "fill",
        })
        .png({ quality: 90 })
        .toFile(path.join(certificatesDir, `${baseName}@3x.png`));

      await sharp(filePath)
        .resize(width3x, height3x, {
          kernel: sharp.kernel.lanczos3,
          fit: "fill",
        })
        .webp({ quality: 85 })
        .toFile(path.join(certificatesDir, `${baseName}@3x.webp`));

      console.log(`✓ Generated high-DPI versions for ${baseName}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }

  console.log("\n✅ High-DPI certificate generation complete!");
  console.log("\nRecommended Tailwind classes based on aspect ratios:");
  console.log("=====================================================");
  console.log(
    "eva_papoula_certificate (0.686 ratio): w-64 aspect-[588/857] or w-72 aspect-[686/1000]"
  );
  console.log(
    "iso_certificate (0.770 ratio): w-64 aspect-[77/100] or w-72 aspect-[77/100]"
  );
  console.log(
    "panos_evmorfopoulos_certificate (0.675 ratio): w-64 aspect-[27/40] or w-72 aspect-[27/40]"
  );
  console.log(
    "training_certificate (1.307 ratio): w-80 aspect-[1307/1000] or w-96 aspect-[1307/1000]"
  );
}

createHighDpiCertificates();
