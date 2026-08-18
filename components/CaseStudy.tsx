"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { caseStudyPhotos } from "@/data/caseStudy";

export default function CaseStudy({
  showHeading = true,
  limit,
}: {
  showHeading?: boolean;
  limit?: number;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const photos = caseStudyPhotos.slice(0, limit ?? caseStudyPhotos.length);

  const close = () => setActiveIndex(null);
  const go = (dir: number) =>
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev + dir + photos.length) % photos.length;
    });

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, photos.length]);

  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <section className="py-24">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Case Study"
            heading="Inside Our Clinic & Patient Journeys"
            subtitle="Real clinical case reports — diagnosis, treatment and outcome — documented from procedures performed at our clinic."
          />
        )}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, i) => {
            const caseNumber = photo.id.split("-").pop();
            return (
              <motion.button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: (i % 9) * 0.04 }}
                aria-label={`Open ${photo.image.alt}`}
                className="group relative aspect-[3/2] overflow-hidden rounded-2xl border border-navy/10 bg-[#f6f4ef] shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <Image
                  src={photo.image.src}
                  alt={photo.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                />

                <span className="absolute left-3 top-3 rounded-full bg-navy/80 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
                  Case {caseNumber}
                </span>

                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 p-4 text-sm font-medium text-white">
                    <ZoomIn size={16} />
                    View full case
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </Container>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 p-4 sm:p-8"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={close}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative h-full max-h-[85vh] w-full max-w-6xl overflow-hidden rounded-xl bg-[#f6f4ef]"
            >
              <Image
                src={active.image.src}
                alt={active.image.alt}
                fill
                sizes="95vw"
                className="object-contain"
                priority
              />
            </motion.div>

            <button
              type="button"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight size={22} />
            </button>

            <p className="absolute bottom-4 rounded-full bg-navy/70 px-3 py-1 text-sm text-white sm:bottom-8">
              Case {active.id.split("-").pop()} · {activeIndex !== null ? activeIndex + 1 : 0} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
