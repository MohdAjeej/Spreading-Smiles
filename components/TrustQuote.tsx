"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWave from "@/components/SectionWave";
import { dentists } from "@/data/dentists";

const WHITE = "#ffffff";

export default function TrustQuote() {
  const director = dentists[0];

  return (
    <section className="relative bg-pink pb-28 pt-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
              We Can Help You Have A
              <br />
              <span className="font-bold text-white">Natural Smile</span>
            </h2>

            <div className="mt-8 border-l-2 border-white/60 pl-6">
              <Quote className="text-white/50" size={28} strokeWidth={1.5} />
              <p className="mt-3 text-balance font-serif text-xl leading-relaxed text-white sm:text-2xl">
                Every patient deserves a gentle, patient-first approach — from your
                first visit to your last, my goal is comfort, honest guidance, and
                results that last.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-serif text-xl text-navy">{director.name}</p>
              <p className="text-sm text-navy/70">Chief Dentist & Founder</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-1 mx-auto aspect-[4/5] w-full max-w-sm lg:order-2"
          >
            <div className="absolute -inset-4 rounded-[3rem] border-2 border-white/30" />
            <div className="relative h-full w-full overflow-hidden rounded-[3rem]">
              <Image
                src={director.image.src}
                alt={director.image.alt}
                fill
                sizes="(max-width: 1024px) 80vw, 380px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      <SectionWave color={WHITE} />
    </section>
  );
}
