"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Stethoscope, CalendarCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionWave from "@/components/SectionWave";
import { images } from "@/lib/images";

const WHITE = "#ffffff";

const steps = [
  {
    icon: MapPin,
    title: "Arrival",
    description: "Airport pickup and a warm welcome from your coordinator.",
  },
  {
    icon: Stethoscope,
    title: "Treatment",
    description: "Your personalized plan carried out by our specialist dentists.",
  },
  {
    icon: CalendarCheck,
    title: "Follow-up Check",
    description: "A final review before you fly home with peace of mind.",
  },
];

export default function TripSteps() {
  return (
    <section className="relative bg-pink pb-28 pt-24">
      <SectionWave color={WHITE} position="top" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
              Dental Tourism
              <br />
              <span className="font-bold text-white">What, How, Where?</span>
            </h2>

            <div className="mt-9 grid grid-cols-3 gap-4 sm:gap-6">
              {steps.map((step) => (
                <div key={step.title}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-pink">
                    <step.icon size={20} strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 font-serif text-base text-navy sm:text-lg">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-navy/70 sm:text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <Button href="/dental-tourism" variant="white" size="lg" className="mt-10">
              View Detailed Process
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[3rem] rounded-bl-[6rem] shadow-xl">
              <Image
                src={images.travel.flight.src}
                alt={images.travel.flight.alt}
                fill
                sizes="(max-width: 1024px) 80vw, 380px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      <SectionWave color={WHITE} position="bottom" />
    </section>
  );
}
