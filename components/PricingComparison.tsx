"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/ui/Button";
import CurrencySelector from "@/components/CurrencySelector";
import { treatments } from "@/data/treatments";
import {
  getCurrencyByCountryCode,
  defaultCountryCode,
  type CurrencyOption,
} from "@/data/currencies";
import { pricingData } from "@/data/pricing";
import { formatPriceRange } from "@/lib/currency";

export default function PricingComparison({
  showHeading = true,
  limit,
}: {
  showHeading?: boolean;
  limit?: number;
}) {
  const rows = treatments.slice(0, limit ?? treatments.length);
  const [currency, setCurrency] = useState<CurrencyOption>(
    getCurrencyByCountryCode(defaultCountryCode),
  );

  return (
    <section className="py-24">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Pricing"
            heading="Premium Dentistry. Transparent Pricing."
            subtitle="See how much you could save without compromising on quality or materials."
          />
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-2">
          <CurrencySelector
            value={currency}
            onChange={setCurrency}
            label="Select country for pricing"
          />
          <p className="text-xs text-navy-soft">
            {currency.code} ({currency.symbol})
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-left">
              <thead>
                <tr className="bg-blush/60 text-xs uppercase tracking-wide text-navy-soft">
                  <th scope="col" className="px-6 py-4 font-medium">
                    Treatment
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium text-pink">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((treatment, i) => (
                  <tr
                    key={treatment.slug}
                    className={i % 2 === 0 ? "bg-white" : "bg-blush/20"}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-navy">
                      {treatment.name}
                    </td>
                    <td className="px-6 py-4 font-serif text-lg text-pink">
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={currency.countryCode}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          className="inline-block"
                        >
                          {formatPriceRange(
                            pricingData[treatment.slug][currency.countryCode],
                            currency,
                            treatment.priceUnit,
                          )}
                        </motion.span>
                      </AnimatePresence>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-navy-soft">
          Prices are indicative market ranges for each country and may vary
          depending on individual treatment requirements.
        </p>

        <div className="mt-8 text-center">
          <Button href="/book-consultation" size="lg">
            Request Personalized Quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
