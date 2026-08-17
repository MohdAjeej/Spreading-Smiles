"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Online Consultation",
    description: "Share your dental concerns, scans and medical history.",
  },
  {
    number: "02",
    title: "Personalized Treatment Plan",
    description: "Our dental team reviews your case and prepares your treatment plan.",
  },
  {
    number: "03",
    title: "Plan Your Trip",
    description:
      "Choose your preferred dates and receive assistance with accommodation and transportation.",
  },
  {
    number: "04",
    title: "Arrive in India",
    description: "Airport pickup and dedicated patient coordination.",
  },
  {
    number: "05",
    title: "Begin Treatment",
    description: "Receive treatment at our partner dental clinic.",
  },
  {
    number: "06",
    title: "Return Home Smiling",
    description: "Post-treatment guidance and remote follow-up.",
  },
];

export default function PatientJourney() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="The Journey"
          heading="Your Dental Journey, Simplified"
          subtitle="A clear, guided path from your first message to your confident new smile."
        />

        <div className="relative mt-16">
          <div className="hidden lg:block absolute left-0 right-0 top-6 h-px bg-navy/10" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-pink font-serif text-lg text-white">
                  {step.number}
                </div>
                <h3 className="mt-5 font-serif text-lg text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-soft">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
