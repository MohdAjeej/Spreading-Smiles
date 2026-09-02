"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const countries = [
  { name: "Maldives", code: "mv" },
  { name: "Canada", code: "ca" },
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "gb" },
  { name: "United Arab Emirates", code: "ae" },
  { name: "Australia", code: "au" },
  { name: "Singapore", code: "sg" },
];

export default function CountryFlags() {
  return (
    <section className="relative bg-white py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-pink">
            Serving Patients From
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="flex flex-col items-center gap-3"
              >
                <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white p-4 shadow-md transition-transform hover:scale-110">
                  <Image
                    src={`https://flagcdn.com/w160/${country.code}.png`}
                    alt={`${country.name} flag`}
                    width={120}
                    height={90}
                    className="h-auto w-24 object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-navy">{country.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}