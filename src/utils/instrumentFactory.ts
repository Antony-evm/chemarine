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
  height: string,
  width: string,
  aspectRatio: string,
  brochurePath?: string
): InstrumentData & { srcSet: string } {
  return {
    title: titleText,
    alt: titleText,
    imgPath: images.png1x, // Fallback PNG
    srcSet: `${images.webp1x} 1x, ${images.webp2x} 2x, ${images.webp3x} 3x`,
    features,
    overview,
    height,
    width,
    aspectRatio,
    brochure: brochurePath ? brochurePath : "",
  };
}
