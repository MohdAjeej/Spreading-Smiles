"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionWave from "@/components/SectionWave";
import { images } from "@/lib/images";

const WHITE = "#ffffff";

export default function TravelCTA() {
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
              Ready To Go?
              <br />
              <span className="font-bold text-white">Apply For Your Free Consultation</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-navy/80">
              Take the first step toward your new smile. Share your case with our
              dental team and we&apos;ll take care of the rest — treatment, travel
              and everything in between.
            </p>
            <Button href="/book-consultation" variant="white" size="lg" className="mt-9">
              View Detailed Process
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[3rem] rounded-tl-[6rem] shadow-xl">
              <Image
                src={images.travel.hotelPool.src}
                alt={images.travel.hotelPool.alt}
                fill
                sizes="(max-width: 1024px) 80vw, 380px"
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
