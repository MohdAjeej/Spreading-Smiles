"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { beforeAfterCases, beforeAfterCategories } from "@/data/beforeAfter";
import type { BeforeAfterCase } from "@/data/beforeAfter";

function BeforeAfterSlider({ item }: { item: BeforeAfterCase }) {
  const [position, setPosition] = useState(50);

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm">
      <div className="relative aspect-[4/3] select-none overflow-hidden">
        <Image
          src={item.after.src}
          alt={`${item.treatment} after treatment`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={item.before.src}
            alt={`${item.treatment} before treatment`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-navy/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-pink/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-white">
          After
        </span>

        <div
          className="absolute inset-y-0 z-10 flex w-0.5 -translate-x-1/2 items-center justify-center bg-white"
          style={{ left: `${position}%` }}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-navy shadow-md">
            <MoveHorizontal size={16} />
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Reveal before and after comparison for ${item.treatment}`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="flex items-center justify-between p-5">
        <div>
          <p className="font-serif text-lg text-navy">{item.treatment}</p>
          <p className="text-sm text-navy-soft">{item.patient}</p>
        </div>
        <div className="text-right">
          <p className="text-[11px] uppercase tracking-wide text-navy-soft/70">Duration</p>
          <p className="text-sm font-medium text-pink">{item.duration}</p>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter({
  showHeading = true,
  limit,
}: {
  showHeading?: boolean;
  limit?: number;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = beforeAfterCases
    .filter((item) => activeCategory === "all" || item.category === activeCategory)
    .slice(0, limit ?? beforeAfterCases.length);

  return (
    <section className="py-24">
      <Container>
        {showHeading && (
          <SectionHeading eyebrow="Results" heading="Real Transformations" />
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {beforeAfterCategories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeCategory === category.value
                  ? "bg-navy text-white"
                  : "bg-blush/60 text-navy-soft hover:bg-blush"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((item) => (
              <BeforeAfterSlider key={item.id} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="mt-10 text-center text-xs text-navy-soft">
          Drag the slider to compare. Images are illustrative placeholders standing in for
          real patient results.
        </p>
      </Container>
    </section>
  );
}
