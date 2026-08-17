"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import type { ImageAsset } from "@/lib/images";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: ImageAsset;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush/60 to-white pt-16 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <div
          className={`grid grid-cols-1 items-center gap-12 ${
            image ? "lg:grid-cols-2 lg:gap-16" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={image ? "" : "mx-auto max-w-2xl text-center"}
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink">
              {eyebrow}
            </span>
            <h1 className="text-balance font-serif text-4xl leading-tight text-navy sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 text-balance text-lg text-navy-soft">{subtitle}</p>
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
