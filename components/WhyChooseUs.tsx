"use client";

import { motion } from "framer-motion";
import { Sparkles, PiggyBank, Plane, UserCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";

const features = [
  {
    icon: Sparkles,
    title: "World-Class Dentistry",
    description: "Advanced technology and experienced dental professionals.",
  },
  {
    icon: PiggyBank,
    title: "Affordable Treatment",
    description:
      "High-quality dental care at significantly lower costs than many Western markets.",
  },
  {
    icon: Plane,
    title: "Complete Travel Support",
    description: "Airport pickup, accommodation assistance and local transportation.",
  },
  {
    icon: UserCheck,
    title: "Personalized Care",
    description: "A dedicated international patient coordinator throughout your journey.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          heading="Dental Care Without Borders"
          subtitle="Everything you need for a confident dental journey — from your first consultation to your return home."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-light text-pink transition-colors group-hover:bg-pink group-hover:text-white">
                <feature.icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-6 font-serif text-xl text-navy">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-soft">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
