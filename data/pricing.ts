import type { CountryCode } from "@/data/currencies";

export type PriceRange = { min: number; max: number };

/**
 * Literal, already-converted price ranges per treatment per country.
 * These are the authoritative displayed values — do not derive or
 * re-convert them at runtime (no exchange-rate math).
 */
export const pricingData: Record<string, Record<CountryCode, PriceRange>> = {
  consultation: {
    US: { min: 100, max: 250 },
    UK: { min: 44.31, max: 110.78 },
    CA: { min: 111.05, max: 277.63 },
    AE: { min: 183.62, max: 550.88 },
    MV: { min: 1236.59, max: 3091.48 },
    IN: { min: 478.54, max: 1914.16 },
  },
  "dental-cleaning": {
    US: { min: 150, max: 300 },
    UK: { min: 59.08, max: 147.7 },
    CA: { min: 166.58, max: 347.04 },
    AE: { min: 293.8, max: 734.5 },
    MV: { min: 1545.74, max: 3864.35 },
    IN: { min: 957.08, max: 3828.33 },
  },
  "tooth-filling": {
    US: { min: 150, max: 450 },
    UK: { min: 73.85, max: 258.48 },
    CA: { min: 166.58, max: 555.27 },
    AE: { min: 293.8, max: 918.12 },
    MV: { min: 1854.89, max: 4637.22 },
    IN: { min: 957.08, max: 5742.49 },
  },
  "root-canal": {
    US: { min: 800, max: 2000 },
    UK: { min: 369.25, max: 1033.9 },
    CA: { min: 971.72, max: 2498.71 },
    AE: { min: 1469, max: 4407 },
    MV: { min: 9274.44, max: 23186.1 },
    IN: { min: 3828.33, max: 19141.64 },
  },
  "dental-crown": {
    US: { min: 1000, max: 2500 },
    UK: { min: 516.95, max: 1107.75 },
    CA: { min: 1110.54, max: 2776.34 },
    AE: { min: 1469, max: 5508.75 },
    MV: { min: 10820.18, max: 27823.32 },
    IN: { min: 7656.66, max: 33497.87 },
  },
  "tooth-extraction": {
    US: { min: 150, max: 600 },
    UK: { min: 73.85, max: 258.48 },
    CA: { min: 166.58, max: 694.08 },
    AE: { min: 293.8, max: 1101.75 },
    MV: { min: 1854.89, max: 6182.96 },
    IN: { min: 957.08, max: 7656.66 },
  },
  "dental-implant": {
    US: { min: 3000, max: 6000 },
    UK: { min: 1477, max: 2584.75 },
    CA: { min: 3470.42, max: 6940.85 },
    AE: { min: 5508.75, max: 14690 },
    MV: { min: 30914.8, max: 69558.3 },
    IN: { min: 23927.05, max: 86137.38 },
  },
  "teeth-whitening": {
    US: { min: 300, max: 1000 },
    UK: { min: 147.7, max: 516.95 },
    CA: { min: 347.04, max: 1110.54 },
    AE: { min: 550.88, max: 2203.5 },
    MV: { min: 3091.48, max: 10820.18 },
    IN: { min: 3828.33, max: 14356.23 },
  },
  braces: {
    US: { min: 4000, max: 8000 },
    UK: { min: 1846.25, max: 4431 },
    CA: { min: 4164.51, max: 9717.19 },
    AE: { min: 7345, max: 18362.5 },
    MV: { min: 46372.2, max: 100473.1 },
    IN: { min: 47854.1, max: 191416.4 },
  },
};
