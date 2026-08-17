"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Clock, Repeat, UserCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { getTreatmentBySlug } from "@/data/treatments";

export default function FeaturedTreatment() {
  const treatment = getTreatmentBySlug("dental-implants")!;

  return (
    <section className="py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl lg:order-1"
          >
            <Image
              src={treatment.image.src}
              alt={treatment.image.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink">
              Featured Treatment
            </span>
            <h2 className="font-serif text-4xl text-navy sm:text-5xl">
              {treatment.name}
            </h2>
            <p className="mt-4 text-lg text-navy-soft">
              A permanent solution for a confident, natural-looking smile.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-navy/10 py-6">
              <div>
                <Clock size={18} className="text-pink" />
                <p className="mt-2 text-sm text-navy">{treatment.duration}</p>
                <p className="text-xs text-navy-soft">Duration</p>
              </div>
              <div>
                <Repeat size={18} className="text-pink" />
                <p className="mt-2 text-sm text-navy">{treatment.visits}</p>
                <p className="text-xs text-navy-soft">Visits</p>
              </div>
              <div>
                <UserCheck size={18} className="text-pink" />
                <p className="mt-2 text-sm text-navy">Included</p>
                <p className="text-xs text-navy-soft">Coordinator</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {treatment.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-navy-soft">
                  <Check size={16} className="mt-0.5 shrink-0 text-pink" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <p className="font-serif text-3xl text-pink">
                From {treatment.startingPrice}
              </p>
              <Button href="/book-consultation" size="lg">
                Get My Treatment Plan
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
