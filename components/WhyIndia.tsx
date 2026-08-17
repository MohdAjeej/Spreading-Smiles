"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, GraduationCap, BadgePercent, Globe2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/lib/images";

const points = [
  {
    icon: Cpu,
    title: "Advanced Dental Technology",
    description:
      "Modern clinics equipped with advanced diagnostic and treatment technology.",
  },
  {
    icon: GraduationCap,
    title: "Highly Qualified Dentists",
    description: "Experienced dental professionals with international exposure.",
  },
  {
    icon: BadgePercent,
    title: "Significant Cost Advantage",
    description: "Premium treatment at a more accessible price.",
  },
  {
    icon: Globe2,
    title: "Complete Medical Tourism Experience",
    description:
      "Treatment, accommodation, transportation and travel assistance in one journey.",
  },
];

export default function WhyIndia() {
  return (
    <section className="bg-navy py-24 text-white">
      <Container>
        <SectionHeading
          eyebrow="Why India"
          heading="Why India for Dental Treatment?"
          subtitle="A trusted destination for international patients seeking premium care at accessible prices."
          theme="dark"
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
          >
            <Image
              src={images.india.cityLife.src}
              alt={images.india.cityLife.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <point.icon size={22} className="text-pink-light" strokeWidth={1.75} />
                <h3 className="mt-4 font-serif text-lg text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
