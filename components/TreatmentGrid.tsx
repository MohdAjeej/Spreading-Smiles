"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import TreatmentCard from "@/components/TreatmentCard";
import CurrencySelector from "@/components/CurrencySelector";
import Button from "@/components/ui/Button";
import { treatments as allTreatments } from "@/data/treatments";
import type { Treatment } from "@/data/treatments";
import {
  getCurrencyByCountryCode,
  defaultCountryCode,
  type CurrencyOption,
} from "@/data/currencies";

export default function TreatmentGrid({
  treatments = allTreatments,
  showHeading = true,
  showCta = false,
  eyebrow = "Treatments",
  heading = "Transform Your Smile",
  subtitle = "Editorial-grade care across every major restorative and cosmetic dental treatment.",
}: {
  treatments?: Treatment[];
  showHeading?: boolean;
  showCta?: boolean;
  eyebrow?: string;
  heading?: string;
  subtitle?: string;
}) {
  const [currency, setCurrency] = useState<CurrencyOption>(
    getCurrencyByCountryCode(defaultCountryCode),
  );

  return (
    <section className="bg-blush/40 py-24">
      <Container>
        {showHeading && (
          <SectionHeading eyebrow={eyebrow} heading={heading} subtitle={subtitle} />
        )}

        <div className="mt-10 flex flex-col items-center justify-end gap-4 sm:flex-row">
          <p className="text-sm font-medium text-navy-soft">
            Show prices in your currency
          </p>
          <CurrencySelector
            value={currency}
            onChange={setCurrency}
            label="Select country for pricing"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, i) => (
            <TreatmentCard
              key={treatment.slug}
              treatment={treatment}
              index={i}
              currency={currency}
            />
          ))}
        </div>

        {showCta && (
          <div className="mt-14 text-center">
            <Button href="/treatments" variant="outline" size="lg">
              View All Treatments
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
