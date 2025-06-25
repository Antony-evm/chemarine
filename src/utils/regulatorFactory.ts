import { createRegulatorRows, type TableRow } from "./regulatorConstants";

export interface RegulatorModel {
  model: string;
  connection?: string;
  inlet?: string;
  outlet?: string | null;
  flow?: string;
  maxInletPressure?: string;
  maxOutletPressure?: string;
  deliveryGaugeRange?: string;
  demandPressure?: string | null;
  gaugeRange?: string;
  flowRateRange?: string | null;
  construction?: string;
  weight?: string | null;
  body?: string | null;
  seat?: string | null;
  piston?: string | null;
  washer?: string | null;
  oRings?: string | null;
  bonnet?: string | null;
  gauge?: string | null;
  diaphragm?: string | null;
  filter?: string | null;
}

export interface Regulator {
  title: string;
  imgPath: string;
  rows: TableRow[];
  models: RegulatorModel[];
}

/**
 * Factory function to create a regulator data structure
 * Automatically generates appropriate table rows based on series type
 */
export function createRegulator(
  seriesType: "700" | "2000",
  title: string,
  imgPath: string,
  models: RegulatorModel[]
): Regulator {
  return {
    title,
    imgPath,
    rows: createRegulatorRows(seriesType),
    models,
  };
}

/**
 * Helper function to create a regulator model with default empty values
 * Reduces boilerplate when creating models with many optional fields
 */
export function createRegulatorModel(
  baseModel: Partial<RegulatorModel> & { model: string }
): RegulatorModel {
  return {
    connection: "",
    inlet: "",
    outlet: null,
    flow: "",
    maxInletPressure: "",
    maxOutletPressure: "",
    deliveryGaugeRange: "",
    demandPressure: null,
    gaugeRange: "",
    flowRateRange: null,
    construction: "",
    weight: null,
    body: null,
    seat: null,
    piston: null,
    washer: null,
    oRings: null,
    bonnet: null,
    gauge: null,
    diaphragm: null,
    filter: null,
    ...baseModel,
  };
}
