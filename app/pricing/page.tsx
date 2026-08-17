import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PricingComparison from "@/components/PricingComparison";
import FAQ from "@/components/FAQ";
import { images } from "@/lib/images";
import { faqs as allFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, indicative pricing for dental treatment in India compared to international averages.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Premium Dentistry. Transparent Pricing."
        subtitle="See how much you could save without compromising on quality or materials used."
        image={images.clinic.reception}
      />
      <PricingComparison showHeading={false} />
      <FAQ showHeading={false} faqs={allFaqs.slice(0, 4)} />
    </>
  );
}
