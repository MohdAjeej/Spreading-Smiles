"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="bg-blush/40 py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          heading="What Our Patients Say"
        />

        <div className="mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-lg sm:p-12">
            <Quote className="text-pink-light" size={40} strokeWidth={1.5} />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.name}
                custom={direction}
                initial={{ opacity: 0, x: 40 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 * direction }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <p className="mt-6 text-balance font-serif text-xl leading-relaxed text-navy sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={current.image.src}
                      alt={current.image.alt}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-navy">
                      {current.name} <span className="ml-1">{current.flag}</span>
                    </p>
                    <p className="text-sm text-navy-soft">
                      {current.country} · {current.treatment}
                    </p>
                    <div className="mt-1 flex gap-0.5 text-gold">
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-pink" : "w-2 bg-navy/20"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
