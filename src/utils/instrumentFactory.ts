import type { InstrumentData } from "@/data/gasDetectionInstruments";

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
