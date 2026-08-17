"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, Video } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { countries } from "@/data/countries";
import { brand } from "@/lib/nav";

const channels = [
  { icon: MessageCircle, label: "WhatsApp", href: brand.whatsappHref },
  { icon: Mail, label: "Email", href: `mailto:${brand.email}` },
  { icon: Phone, label: "Phone", href: brand.phoneHref },
  { icon: Video, label: "Video Consultation", href: "/book-consultation" },
];

export default function InternationalPatients() {
  return (
    <section className="bg-blush/40 py-24">
      <Container>
        <SectionHeading
          eyebrow="Support"
          heading="Dedicated International Patient Coordinator"
          subtitle="Reach us however is most convenient for you — we're available across time zones."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {channels.map((channel, i) => (
            <motion.a
              key={channel.label}
              href={channel.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-navy/10 bg-white p-6 text-center transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-light text-pink">
                <channel.icon size={20} strokeWidth={1.75} />
              </span>
              <span className="text-sm font-medium text-navy">{channel.label}</span>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-serif text-2xl text-navy">We welcome patients from:</p>
          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-3">
            {countries.map((country) => (
              <span
                key={country.name}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-navy shadow-sm"
              >
                <img
                  src={country.flag}
                  alt=""
                  aria-hidden
                  className="h-3.5 w-5 rounded-[2px] object-cover"
                />
                {country.name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
