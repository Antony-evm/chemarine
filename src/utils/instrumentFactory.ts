import type { InstrumentData } from "@/data/gasDetectionInstruments";

/**
 * Helper function to create instrument with image import
 * This version uses actual imports for better Vite integration
 */
export function createInstrumentWithImport(
  titleText: string,
  features: string[],
  overview: string[],
  importedImagePath: string
): InstrumentData {
  return {
    title: titleText,
    alt: titleText,
    imgPath: importedImagePath,
    features,
    overview,
  };
}
