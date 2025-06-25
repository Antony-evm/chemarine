import type { InstrumentData } from '@/data/gasDetectionInstruments';

/**
 * Factory function to create instrument data objects with consistent structure
 * Eliminates repetitive boilerplate code across instrument data files
 * 
 * @param id - The instrument identifier used for asset paths (e.g., "rki_gx_2012")
 * @param titleText - The display title for the instrument
 * @param features - Array of feature strings
 * @param overview - Array of overview paragraph strings
 * @returns InstrumentData object with standardized structure
 */
export function createInstrument(
  id: string,
  titleText: string,
  features: string[],
  overview: string[]
): InstrumentData {
  // Use dynamic import for Vite compatibility
  const imgPath = `/src/assets/gas_detection_instruments/${id}.png`;
  
  return {
    title: titleText,
    alt: titleText,
    imgPath,
    features,
    overview
  };
}

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
    overview
  };
}
