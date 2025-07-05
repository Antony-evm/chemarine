import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function checkImageSizes() {
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

  console.log("Certificate Image Dimensions:");
  console.log("=============================");

  for (const file of files) {
    const filePath = path.join(certificatesDir, file);
    try {
      const metadata = await sharp(filePath).metadata();
      const aspectRatio = (metadata.width / metadata.height).toFixed(3);
      console.log(
        `${file}: ${metadata.width}x${metadata.height} pixels (aspect ratio: ${aspectRatio})`
      );
    } catch (error) {
      console.log(`Error reading ${file}:`, error.message);
    }
  }
}

checkImageSizes();
