"use client";

import { motion } from "framer-motion";
import { Anchor, Smile, Crown, Layers } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Anchor,
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth.",
  },
  {
    icon: Layers,
    title: "Full Mouth Rehabilitation",
    description: "Complete restoration for optimal dental function and aesthetics.",
  },
  {
    icon: Smile,
    title: "Smile Makeover",
    description: "Transform your smile with customized cosmetic treatments.",
  },
  {
    icon: Crown,
    title: "Crowns & Bridges",
    description: "Durable solutions to restore and replace damaged teeth.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-pink">
            Our Services
          </span>
          <h2 className="mt-3 font-serif text-3xl text-navy sm:text-4xl lg:text-5xl">
            Healthy Smiles
            <br />
            <span className="font-bold text-pink">Everyday!</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-soft sm:text-lg">
            Start your day with a smile check. See how we can help with everything
            from routine care to complete transformations.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.1 }}
              className="flex flex-col items-center rounded-xl border border-navy/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-light text-pink">
                <service.icon size={28} strokeWidth={1.75} />
              </span>
              <p className="mt-4 font-serif text-lg font-semibold text-navy sm:text-xl">
                {service.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-soft">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/treatments" variant="primary" size="lg">
            Full List Of Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
