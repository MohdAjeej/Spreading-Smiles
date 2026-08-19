import type { CurrencyOption } from "@/data/currencies";
import type { PriceRange } from "@/data/pricing";

function formatAmount(amount: number) {
  return amount.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

/** Formats a single already-converted amount, e.g. "₹478.54". */
export function formatPrice(amount: number, currency: CurrencyOption, unit?: string) {
  const formatted = `${currency.symbol}${formatAmount(amount)}`;
  return unit ? `${formatted} / ${unit}` : formatted;
}

/** Formats an already-converted min–max range, e.g. "₹478.54 – ₹1,914.16". */
export function formatPriceRange(range: PriceRange, currency: CurrencyOption, unit?: string) {
  const formatted = `${currency.symbol}${formatAmount(range.min)} – ${currency.symbol}${formatAmount(range.max)}`;
  return unit ? `${formatted} / ${unit}` : formatted;
}
