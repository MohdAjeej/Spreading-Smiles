"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/ui/Button";
import { treatments } from "@/data/treatments";

export default function PricingComparison({
  showHeading = true,
  limit,
}: {
  showHeading?: boolean;
  limit?: number;
}) {
  const rows = treatments.slice(0, limit ?? treatments.length);

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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="bg-blush/60 text-xs uppercase tracking-wide text-navy-soft">
                  <th className="px-6 py-4 font-medium">Treatment</th>
                  <th className="px-6 py-4 font-medium text-pink">In India</th>
                  <th className="px-6 py-4 font-medium">International Average</th>
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
                      {treatment.startingPrice}
                    </td>
                    <td className="px-6 py-4 text-sm text-navy-soft line-through decoration-navy/30">
                      {treatment.internationalAveragePrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-navy-soft">
          Prices are indicative and may vary depending on individual treatment
          requirements.
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
