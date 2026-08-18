"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionWave from "@/components/SectionWave";
import { brand } from "@/lib/nav";

const PINK = "#3bf0bd";

function inputClasses() {
  return "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-pink";
}

export default function ContactTeaser() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-white pb-32 pt-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-blush"
          >
            <iframe
              title="Spreading Smiles clinic location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`}
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
              Write To Our
              <br />
              <span className="font-bold text-pink">Dental Office</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-navy-soft">
              Contact our office and we&apos;ll connect you back regarding the
              information you require.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 flex items-center gap-3 rounded-2xl border border-navy/10 bg-blush/40 p-6"
                >
                  <CheckCircle2 size={28} className="shrink-0 text-pink" />
                  <p className="text-sm text-navy">
                    Thanks for reaching out — our team will reply within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="mt-8 grid grid-cols-1 gap-4"
                >
                  <input
                    required
                    placeholder="Enter your Name"
                    className={inputClasses()}
                    suppressHydrationWarning
                  />
                  <input
                    required
                    type="email"
                    placeholder="Enter your Email Address"
                    className={inputClasses()}
                    suppressHydrationWarning
                  />
                  <textarea
                    required
                    rows={3}
                    placeholder="Enter your Message"
                    className={`${inputClasses()} resize-none`}
                    suppressHydrationWarning
                  />
                  <Button type="submit" variant="secondary" size="lg" className="mt-1 w-fit">
                    Send Message
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>

      <SectionWave color={PINK} position="bottom" />
    </section>
  );
}
