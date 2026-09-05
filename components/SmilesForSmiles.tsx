"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";

const smileImages = [
  {
    src: "/spreadingSmiles/Smile 1.jpeg",
    alt: "Happy patient smiling after dental treatment",
  },
  {
    src: "/spreadingSmiles/Smile 2.jpeg",
    alt: "Patient showing their new smile",
  },
  {
    src: "/spreadingSmiles/Smile 3.jpeg",
    alt: "Confident patient with a beautiful smile",
  },
];

export default function SmilesForSmiles() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blush py-24">
      <Container>
        <SectionHeading
          eyebrow="Smiles for a Smiles"
          heading="Transforming Lives, One Smile at a Time"
          subtitle="Every smile tells a story of confidence, care, and transformation. See the happiness we've helped create."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {smileImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-4/5 h-auto mx-auto rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-serif text-2xl italic text-navy sm:text-3xl">
            Your smile could be next. Let us help you shine.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
