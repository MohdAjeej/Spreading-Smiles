"use client";

import { motion } from "framer-motion";
import { Anchor, Stethoscope, Siren, Puzzle, Sparkles, SmilePlus } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Anchor,
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth.",
  },
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Comprehensive checkups and preventive care for every visit.",
  },
  {
    icon: Siren,
    title: "Urgent Care",
    description: "Fast, reliable relief for sudden dental concerns.",
  },
  {
    icon: Puzzle,
    title: "Prosthesis",
    description: "Custom-fitted restorations that feel completely natural.",
  },
  {
    icon: Sparkles,
    title: "Whitening",
    description: "Brighten your smile with safe, professional-grade treatment.",
  },
  {
    icon: SmilePlus,
    title: "Braces",
    description: "Modern alignment options for every age and lifestyle.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pink">
            Our Services
          </span>
          <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            Healthy Smiles
            <br />
            <span className="font-bold text-pink">Everyday!</span>
          </h2>
          <p className="mt-4 text-base text-navy-soft">
            Start your day with a smile check. See how we can help with everything
            from routine care to complete transformations.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-10 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-pink-light text-pink">
                <service.icon size={24} strokeWidth={1.75} />
              </span>
              <p className="mt-4 font-serif text-lg text-navy">{service.title}</p>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-navy-soft">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button href="/treatments" variant="primary" size="lg">
            Full List Of Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
