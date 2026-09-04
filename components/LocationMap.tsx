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
    <section className="relative bg-blush py-10">
      <Container>
        {/* Header */}
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

            <h2 className="mt-2 font-serif text-2xl text-navy sm:text-3xl">
              Welcoming Patients from Around the World
            </h2>

            <p className="mx-auto mt-2 max-w-3xl text-balance text-sm leading-relaxed text-navy-soft">
              Our clinic in Wave City Centre, Sector 32, Noida serves
              international patients. Conveniently located with easy access
              from Delhi NCR and international airports.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Map / Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl shadow-xl"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={images.clinic.map.src}
                alt={images.clinic.map.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-3">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {/* Icon */}
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-light ${detail.color}`}
                  >
                    <detail.icon size={19} strokeWidth={1.75} />
                  </span>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-navy-soft">
                      {detail.label}
                    </p>

                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="mt-1 block text-sm font-medium leading-relaxed text-navy transition-colors hover:text-pink"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium leading-relaxed text-navy">
                        {detail.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="md"
              >
                Get Directions
              </Button>

              <Button
                href="/book-consultation"
                variant="secondary"
                size="md"
              >
                Book Appointment
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}