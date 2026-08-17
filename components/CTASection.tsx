"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { images } from "@/lib/images";
import { brand } from "@/lib/nav";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <Image
        src={images.hero.consultation.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-balance font-serif text-4xl text-white sm:text-5xl">
            Ready to Start Your Smile Journey?
          </h2>
          <p className="mt-5 text-balance text-lg text-white/80">
            Tell us about your dental needs and receive a personalized treatment plan
            from our dental team.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/book-consultation" size="lg">
              Book Free Consultation
            </Button>
            <Button
              href={brand.whatsappHref}
              variant="outline"
              size="lg"
              className="border-white/40 text-white hover:bg-white hover:text-navy"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
