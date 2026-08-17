"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import type { Dentist } from "@/data/dentists";

export default function DentistCard({
  dentist,
  index = 0,
}: {
  dentist: Dentist;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={dentist.image.src}
          alt={dentist.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-navy">{dentist.name}</h3>
        <p className="text-sm text-pink">{dentist.qualification}</p>
        <p className="mt-1 text-sm text-navy-soft">{dentist.specialty}</p>
        <p className="mt-1 text-xs text-navy-soft">
          {dentist.yearsExperience}+ Years Experience
        </p>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-navy-soft">
          <Languages size={14} className="text-pink" />
          {dentist.languages.join(", ")}
        </p>
        <Link
          href={`/dentists/${dentist.slug}`}
          className="mt-5 inline-block text-sm font-medium text-navy underline decoration-pink decoration-2 underline-offset-4 transition-colors group-hover:text-pink"
        >
          View Profile
        </Link>
      </div>
    </motion.div>
  );
}
