import type { InstrumentData } from "@/data/gasDetectionInstruments";

export interface InstrumentImages {
  png1x: string;
  webp1x: string;
  webp2x: string;
  webp3x: string;
}

/**
 * Helper function to create instrument with high-DPI image imports
 * This version requires all image variants to be explicitly imported
 */
export function createInstrumentWithHighDPI(
  titleText: string,
  features: string[],
  overview: string[],
  images: InstrumentImages,
  brochurePath?: string
): InstrumentData & { srcSet: string } {
  return {
    title: titleText,
    alt: titleText,
    imgPath: images.png1x, // Fallback PNG
    srcSet: `${images.webp1x} 1x, ${images.webp2x} 2x, ${images.webp3x} 3x`,
    features,
    overview,
    brochure: brochurePath,
  };
}

/**
 * Helper function to create instrument with image import (legacy)
 * This version uses actual imports for better Vite integration
 */
export function createInstrumentWithImport(
  titleText: string,
  features: string[],
  overview: string[],
  importedImagePath: string,
  brochurePath?: string
): InstrumentData {
  return {
    title: titleText,
    alt: titleText,
    imgPath: importedImagePath,
    features,
    overview,
    brochure: brochurePath,
  };
}
