"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, DollarSign } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { images } from "@/lib/images";

const savings = [
  { treatment: "Dental Implants", usaPrice: "$3,000 - $6,000", indiaPrice: "$800 - $1,500", savings: "70%" },
  { treatment: "Smile Makeover", usaPrice: "$15,000 - $30,000", indiaPrice: "$3,000 - $8,000", savings: "75%" },
  { treatment: "Teeth Whitening", usaPrice: "$500 - $1,000", indiaPrice: "$150 - $300", savings: "70%" },
  { treatment: "Root Canal", usaPrice: "$800 - $1,500", indiaPrice: "$100 - $300", savings: "80%" },
];

const benefits = [
  "International quality standards",
  "US-trained dental specialists",
  "Advanced technology & equipment",
  "Comprehensive travel support",
  "No compromise on safety or care",
];

export default function PricingHighlight() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-pink">
              <DollarSign size={24} strokeWidth={1.75} />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Affordable Excellence
              </span>
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl">
              Save 50-70% Without Compromising Quality
            </h2>
            <p className="mt-6 text-balance text-lg leading-relaxed text-navy-soft">
              Experience world-class dental care at a fraction of Western costs. Our
              international patients save thousands while receiving the same high
              standards of treatment, technology, and expertise.
            </p>

            <div className="mt-8 space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink-light text-pink">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-navy">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/pricing" variant="primary" size="lg">
                View Detailed Pricing
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-[1500px] overflow-hidden rounded-2xl bg-white p-8 shadow-2xl">
              <Image
                src={images.clinic.pricing.src}
                alt={images.clinic.pricing.alt}
                width={1500}
                height={1200}
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
