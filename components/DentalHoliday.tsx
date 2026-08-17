"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, Camera, Car, Languages, Hotel, Ticket } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWave from "@/components/SectionWave";
import { images } from "@/lib/images";

const PINK = "#3bf0bd";

const perks = [
  { icon: Plane, label: "Travel Planning" },
  { icon: Camera, label: "Sightseeing" },
  { icon: Car, label: "Local Transport" },
  { icon: Languages, label: "Translator" },
  { icon: Hotel, label: "Accommodation" },
  { icon: Ticket, label: "Free Airport Transfer" },
];

const gallery = [
  { image: images.travel.hotelLobby, label: "Accommodations" },
  { image: images.india.tajMahal, label: "Sightseeing" },
  { image: images.india.street, label: "Local Culture" },
  { image: images.travel.airportPickup, label: "Transport" },
];

export default function DentalHoliday() {
  return (
    <section className="relative bg-white pb-28 pt-24">
      <Container>
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
              Your Dental
              <br />
              <span className="font-bold text-pink">Holiday</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-navy-soft">
              India has become a leading dental tourism destination. It combines a
              top level of dental care with a remarkable travel experience for
              foreign and domestic patients alike.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5">
              {perks.map((perk) => (
                <div key={perk.label} className="flex items-center gap-3">
                  <perk.icon size={18} className="shrink-0 text-pink" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-navy">{perk.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-4 gap-4 sm:gap-6">
              {gallery.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full ring-4 ring-pink-light">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2 text-[11px] font-medium text-navy-soft sm:text-xs">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="absolute -inset-6 rounded-full bg-pink-light" />
            <div className="relative h-full w-full overflow-hidden rounded-full shadow-xl">
              <Image
                src={images.india.skyline.src}
                alt={images.india.skyline.alt}
                fill
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-2 left-0 flex h-28 w-28 -translate-x-4 flex-col items-center justify-center rounded-full bg-pink text-center text-white shadow-lg sm:h-32 sm:w-32">
              <p className="font-serif text-base leading-tight sm:text-lg">Free Transfer</p>
              <p className="text-sm font-semibold sm:text-base">Included</p>
            </div>
          </motion.div>
        </div>
      </Container>

      <SectionWave color={PINK} />
    </section>
  );
}
