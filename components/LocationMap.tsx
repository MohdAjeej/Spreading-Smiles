"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { images } from "@/lib/images";
import { brand } from "@/lib/nav";

const contactDetails = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: brand.address,
    color: "text-pink",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: brand.phone,
    href: brand.phoneHref,
    color: "text-blue",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: brand.email,
    href: `mailto:${brand.email}`,
    color: "text-gold",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: brand.hours,
    color: "text-navy",
  },
];

export default function LocationMap() {
  return (
    <section className="relative bg-blush py-24">
      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-pink">
              Global Reach, Local Care
            </span>
            <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
              Welcoming Patients from Around the World
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-navy-soft">
              Our clinic in Wave City Centre, Sector 32, Noida serves international
              patients. Conveniently located with easy access
              from Delhi NCR and international airports.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={images.clinic.map.src}
                alt={images.clinic.map.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-light ${detail.color}`}>
                    <detail.icon size={20} strokeWidth={1.75} />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-navy-soft">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-1 block text-base font-medium text-navy transition-colors hover:text-pink"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base font-medium text-navy">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Get Directions
              </Button>
              <Button href="/book-consultation" variant="secondary" size="lg">
                Book Appointment
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
