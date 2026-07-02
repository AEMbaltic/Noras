export type House = {
  number: number;
  name: string;
  meaning: string;
  guests: number;
  from: number;
  tone: "sand" | "pine" | "sea" | "choc";
};

export const houses: House[] = [
  { number: 1, name: "Kāpa", meaning: "the dune", guests: 4, from: 90, tone: "sand" },
  { number: 2, name: "Priede", meaning: "the pine", guests: 4, from: 90, tone: "pine" },
  { number: 3, name: "Vilnis", meaning: "the wave", guests: 4, from: 95, tone: "sea" },
  { number: 4, name: "Dzintars", meaning: "the amber", guests: 4, from: 95, tone: "choc" },
  { number: 5, name: "Smilga", meaning: "the beach grass", guests: 4, from: 90, tone: "sand" },
  { number: 6, name: "Bāka", meaning: "the lighthouse", guests: 4, from: 105, tone: "sea" },
  { number: 7, name: "Krasts", meaning: "the shore", guests: 4, from: 90, tone: "pine" },
  { number: 8, name: "Egle", meaning: "the spruce", guests: 4, from: 90, tone: "choc" },
  { number: 9, name: "Saulriets", meaning: "the sunset", guests: 4, from: 110, tone: "sea" },
];

export const toneClasses: Record<House["tone"], { bg: string; text: string; ring: string }> = {
  sand: { bg: "bg-sand-200", text: "text-choc-700", ring: "ring-sand-300" },
  pine: { bg: "bg-pine-600", text: "text-sand-100", ring: "ring-pine-500" },
  sea: { bg: "bg-sea-500", text: "text-sand-50", ring: "ring-sea-400" },
  choc: { bg: "bg-choc-600", text: "text-sand-100", ring: "ring-choc-500" },
};
