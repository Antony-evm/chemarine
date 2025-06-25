/**
 * Common table row configurations for regulator specifications
 * Extracted to reduce duplication across different regulator series
 */

export interface TableRow {
  label: string;
  key: string;
}

// Basic specifications common to all regulators
export const BASIC_REGULATOR_ROWS: TableRow[] = [
  { label: "Model #", key: "model" },
  { label: "Connection", key: "connection" },
  { label: "Inlet", key: "inlet" },
  { label: "Outlet", key: "outlet" },
  { label: "Flow", key: "flow" },
  { label: "Max Inlet Pressure", key: "maxInletPressure" },
  { label: "Flow Rate Range", key: "flowRateRange" },
  { label: "Construction", key: "construction" },
  { label: "Weight", key: "weight" },
];

// Material specifications common to many regulators
export const MATERIAL_REGULATOR_ROWS: TableRow[] = [
  { label: "Body", key: "body" },
  { label: "Seat", key: "seat" },
  { label: "Piston", key: "piston" },
];

// 700 Series specific rows
export const SERIES_700_SPECIFIC_ROWS: TableRow[] = [
  { label: "Max Outlet Pressure", key: "maxOutletPressure" },
  { label: "Delivery Gauge Range", key: "deliveryGaugeRange" },
  { label: "Washer", key: "washer" },
  { label: "O-rings", key: "oRings" },
  { label: "Bonnet", key: "bonnet" },
];

// 2000 Series specific rows
export const SERIES_2000_SPECIFIC_ROWS: TableRow[] = [
  { label: "Demand Pressure", key: "demandPressure" },
  { label: "Gauge Range", key: "gaugeRange" },
  { label: "Gauge", key: "gauge" },
  { label: "Diaphragm", key: "diaphragm" },
  { label: "Filter", key: "filter" },
  { label: "Bonnet", key: "bonnet" },
];

/**
 * Factory function to create regulator table rows for specific series
 */
export function createRegulatorRows(seriesType: "700" | "2000"): TableRow[] {
  const baseRows = [...BASIC_REGULATOR_ROWS];

  // Insert series-specific rows in appropriate positions
  const maxInletIndex = baseRows.findIndex(
    (row) => row.key === "maxInletPressure"
  );

  if (seriesType === "700") {
    // Insert after maxInletPressure
    baseRows.splice(
      maxInletIndex + 1,
      0,
      ...SERIES_700_SPECIFIC_ROWS.slice(0, 2)
    ); // Max Outlet Pressure, Delivery Gauge Range

    // Add material rows after construction
    const constructionIndex = baseRows.findIndex(
      (row) => row.key === "construction"
    );
    baseRows.splice(constructionIndex + 2, 0, ...MATERIAL_REGULATOR_ROWS);

    // Add remaining 700-specific rows
    baseRows.push(...SERIES_700_SPECIFIC_ROWS.slice(2));
  } else if (seriesType === "2000") {
    // Insert after maxInletPressure
    baseRows.splice(
      maxInletIndex + 1,
      0,
      ...SERIES_2000_SPECIFIC_ROWS.slice(0, 2)
    ); // Demand Pressure, Gauge Range

    // Add material and component rows after construction
    const constructionIndex = baseRows.findIndex(
      (row) => row.key === "construction"
    );
    baseRows.splice(constructionIndex + 1, 0, ...MATERIAL_REGULATOR_ROWS);
    baseRows.splice(
      constructionIndex + 4,
      0,
      ...SERIES_2000_SPECIFIC_ROWS.slice(2)
    );
  }

  return baseRows;
}
