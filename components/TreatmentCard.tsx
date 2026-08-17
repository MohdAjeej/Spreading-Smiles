"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Treatment } from "@/data/treatments";

export default function TreatmentCard({
  treatment,
  index = 0,
}: {
  treatment: Treatment;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <Link
        href={`/treatments/${treatment.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={treatment.image.src}
          alt={treatment.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute right-4 top-4 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-white text-navy opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl text-navy">{treatment.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-soft">
          {treatment.shortDescription}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-navy/10 pt-4">
          <div className="flex items-center gap-1.5 text-xs text-navy-soft">
            <Clock size={14} className="text-pink" />
            {treatment.duration}
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-wide text-navy-soft/70">From</p>
            <p className="font-serif text-lg text-pink">{treatment.startingPrice}</p>
          </div>
        </div>

        <Link
          href={`/treatments/${treatment.slug}`}
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-navy transition-colors group-hover:text-pink"
        >
          Explore Treatment
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}
