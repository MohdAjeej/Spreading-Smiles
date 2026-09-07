"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionWave from "@/components/SectionWave";
import { images } from "@/lib/images";

const WHITE = "#ffffff";

export default function TripSteps() {
  return (
    <section className="relative bg-pink pb-28 pt-24">
      <SectionWave color={WHITE} position="top" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
              Dental Tourism
            </h2>

            <div className="mt-9">
              <p className="text-lg leading-relaxed text-white font-semibold">
                World-Class Dental Treatment. Royal Indian Hospitality. Exceptional Value.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/90">
                Experience international-grade dental care combined with an unforgettable royal travel experience in India — at a fraction of the cost.
              </p>
            </div>

            <Button href="/dental-tourism" variant="white" size="lg" className="mt-10">
              View Detailed Process
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={images.travel.flight.src}
                alt={images.travel.flight.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 450px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      <SectionWave color={WHITE} position="bottom" />
    </section>
  );
}
