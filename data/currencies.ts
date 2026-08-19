export type CountryCode = "US" | "UK" | "CA" | "AE" | "MV" | "IN";

export type CurrencyOption = {
  countryCode: CountryCode;
  country: string;
  code: string;
  symbol: string;
  flag: string;
};

export const currencies: CurrencyOption[] = [
  { countryCode: "US", country: "USA", code: "USD", symbol: "$", flag: "🇺🇸" },
  { countryCode: "UK", country: "UK", code: "GBP", symbol: "£", flag: "🇬🇧" },
  { countryCode: "CA", country: "Canada", code: "CAD", symbol: "C$", flag: "🇨🇦" },
  { countryCode: "AE", country: "UAE", code: "AED", symbol: "د.إ", flag: "🇦🇪" },
  { countryCode: "MV", country: "Maldives", code: "MVR", symbol: "Rf", flag: "🇲🇻" },
  { countryCode: "IN", country: "India", code: "INR", symbol: "₹", flag: "🇮🇳" },
];

export function getCurrencyByCountryCode(countryCode: CountryCode): CurrencyOption {
  return currencies.find((c) => c.countryCode === countryCode)!;
}

export const defaultCountryCode: CountryCode = "IN";
