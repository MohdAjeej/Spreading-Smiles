"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DollarSign, TrendingDown } from "lucide-react";
import Container from "@/components/ui/Container";
import { images } from "@/lib/images";

export default function PricingComparisonImage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush/30 to-white py-24">
      {/* Background decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-blue/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 right-0 h-96 w-96 rounded-full bg-pink/5 blur-3xl"
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-pink/10 px-4 py-2">
            <TrendingDown size={20} className="text-pink" strokeWidth={2} />
            <span className="text-sm font-semibold uppercase tracking-wide text-pink">
              Cost Comparison
            </span>
          </div>
          <h2 className="mt-4 font-serif text-4xl text-navy sm:text-5xl">
            Save 50-70% on Dental Treatments
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-navy-soft">
            Compare treatment costs across countries and see how much you can save
            with world-class dental care in India.
          </p>
        </motion.div>

        {/* Pricing Comparison Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative mt-12"
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="relative h-[300px] w-full">
              <Image
                src={images.clinic.pricing.src}
                alt={images.clinic.pricing.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {[
            {
              title: "Same Quality",
              description: "International standards & US-trained dentists",
              icon: "🏆",
            },
            {
              title: "50-70% Savings",
              description: "Compared to USA, UK, Australia & Canada",
              icon: "💰",
            },
            {
              title: "All-Inclusive",
              description: "Treatment + Travel + Accommodation packages",
              icon: "✈️",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="rounded-xl border-2 border-navy/10 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-pink/30 hover:shadow-md"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-soft">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-medium text-navy">
            Ready to save thousands on your dental treatment?
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border-2 border-pink bg-white px-6 py-3 font-medium text-pink transition-all hover:bg-pink hover:text-white"
            >
              <DollarSign size={20} strokeWidth={2} />
              View Detailed Pricing
            </a>
            <a
              href="/book-consultation"
              className="inline-flex items-center gap-2 rounded-full bg-pink px-6 py-3 font-medium text-white transition-all hover:bg-pink-dark hover:shadow-lg"
            >
              Get Free Quote
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
