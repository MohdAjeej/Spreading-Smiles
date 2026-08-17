"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionWave from "@/components/SectionWave";
import { images } from "@/lib/images";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-pink pb-28 pt-8 sm:pb-36 sm:pt-10">
      <div
        aria-hidden
        className="dot-pattern pointer-events-none absolute left-6 top-24 h-32 w-32 text-white/25 sm:left-12"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/3 h-24 w-24 rounded-full border-2 border-white/20"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8">
          <div>
            <motion.h1
              custom={0}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="font-serif text-3xl leading-tight text-navy sm:text-4xl"
            >
              Your New Smile.
            </motion.h1>
            <motion.p
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="hero-heading text-balance font-serif font-bold text-white"
            >
              Starts Here.
            </motion.p>

            <motion.p
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-6 max-w-md text-balance text-base text-white/90 sm:text-lg"
            >
              World-class dental care in India, combined with personalized travel
              support for international patients.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <Button href="/book-consultation" variant="white" size="lg">
                Start Your Dental Journey
              </Button>
              <Button href="/treatments" variant="ghost-light" size="lg">
                Explore Treatments
              </Button>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="mt-10 flex items-center gap-2"
            >
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-xs font-medium text-white/85">
                Trusted by 10,000+ Happy Patients
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:-mr-6"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] rounded-tr-[6rem] shadow-2xl sm:mx-0">
              <Image
                src={images.hero.consultation.src}
                alt={images.hero.consultation.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white px-6 py-4 shadow-xl sm:block">
              <p className="font-serif text-2xl text-pink">30–70%</p>
              <p className="text-xs text-navy-soft">Potential Treatment Savings</p>
            </div>
          </motion.div>
        </div>
      </Container>

      <SectionWave color="#ffffff" />
    </section>
  );
}
