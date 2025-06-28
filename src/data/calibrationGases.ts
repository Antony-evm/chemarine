import pdf1al from "@/assets/pdfs/models/1al.pdf";
import pdf2al from "@/assets/pdfs/models/2al.pdf";
import pdf7hp from "@/assets/pdfs/models/7hp.pdf";
import pdf6dm from "@/assets/pdfs/models/6dm.pdf";
import pdf8al from "@/assets/pdfs/models/8al.pdf";
import pdf6d from "@/assets/pdfs/models/6d.pdf";
import pdf10al from "@/assets/pdfs/models/10al.pdf";

export const REGULATOR_ROUTE_MAP: Record<string, string> = {
  "702": "700",
  "705": "700",
  "713": "700",
  "715": "700",
  "725": "700",
  "735": "700",
  "DFR 2001": "2000",
  "DFR 2004": "2000",
  "DFR 2007": "2000",
  "DFR 2008": "2000",
};

export const GASCYLINDERS = [
  {
    model: "1AL",
    material: "Aluminum",
    pressure: "145 psig/10 bar",
    content: "10",
    dimensions: `11.5" x 2.9" / 292 mm x 74 mm`,
    mixtures: ["Limited"],
    compatibility: [],
    pdfModelUrl: pdf1al,
  },
  {
    model: "2AL",
    material: "Aluminum",
    pressure: "500 psig/35.5 bar",
    content: "34",
    dimensions: `11.4" x 3" / 289 mm x 76mm`,
    mixtures: ["Reactive", "Non-Reactive"],
    compatibility: [
      "705",
      "715",
      "725",
      "735",
      "DFR 2001",
      "DFR 2004",
      "DFR 2008",
    ],
    pdfModelUrl: pdf2al,
  },
  {
    model: "7HP",
    material: "Steel",
    pressure: "494 psig/34 bar",
    content: "34",
    dimensions: `11" x 3" / 279 mm x 76 mm`,
    mixtures: ["Non-Reactive"],
    compatibility: ["702", "713", "DFR 2007"],
    pdfModelUrl: pdf7hp,
  },
  {
    model: "6DM",
    material: "Steel",
    pressure: "1000 psig/ 69 bar",
    content: "58",
    dimensions: `3.26" x 8.09" / 83 mm x 204 mm`,
    mixtures: ["Non-Reactive"],
    compatibility: ["705", "715", "725", "735", "DFR 2001", "DFR 2008"],
    pdfModelUrl: pdf6dm,
  },
  {
    model: "8AL",
    material: "Aluminum",
    pressure: "500 psig/34.5 bar",
    content: "58",
    dimensions: `14.25" x 3.5" / 362 mm x 89 mm`,
    mixtures: ["Reactive", "Non-Reactive"],
    compatibility: [
      "705",
      "715",
      "725",
      "735",
      "DFR 2001",
      "DFR 2004",
      "DFR 2008",
    ],
    pdfModelUrl: pdf8al,
  },
  {
    model: "6D",
    material: "Steel",
    pressure: "1000 psig/69 bar",
    content: "103",
    dimensions: `13.5" x 3.25" / 345 mm x 83 mm`,
    mixtures: ["Non-Reactive"],
    compatibility: ["715", "DFR 2001", "DFR 2001", "DFR 2004", "DFR 2008"],
    pdfModelUrl: pdf6d,
  },
  {
    model: "10AL",
    material: "Aluminum",
    pressure: "1000 psig/70 bar",
    content: "116",
    dimensions: `15" x 3.5" / 381 mm x 89 mm`,
    mixtures: ["Reactive", "Non-Reactive"],
    compatibility: [
      "705",
      "715",
      "725",
      "735",
      "DFR 2001",
      "DFR 2004",
      "DFR 2008",
    ],
    pdfModelUrl: pdf10al,
  },
];
