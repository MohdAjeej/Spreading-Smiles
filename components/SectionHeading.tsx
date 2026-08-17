"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  heading,
  subtitle,
  align = "center",
  theme = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${isCenter ? "mx-auto text-center" : "text-left"} max-w-2xl`}
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
            isDark ? "text-pink-light" : "text-pink"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-balance font-serif text-3xl leading-tight sm:text-4xl md:text-5xl ${
          isDark ? "text-white" : "text-navy"
        }`}
      >
        {heading}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-balance text-base sm:text-lg ${
            isDark ? "text-white/75" : "text-navy-soft"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
