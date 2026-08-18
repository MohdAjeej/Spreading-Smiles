"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Gift } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { images } from "@/lib/images";

function inputClasses() {
  return "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-pink";
}

export default function ReferFriend() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              aria-hidden
              className="absolute inset-0 bg-blue"
              style={{ borderRadius: "62% 38% 34% 66% / 58% 32% 68% 42%" }}
            />
            <div
              aria-hidden
              className="absolute -right-4 top-6 h-16 w-16 rounded-full border-2 border-blue/30"
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-[14%] overflow-hidden rounded-[2.5rem] shadow-xl"
            >
              <Image
                src={images.travel.giftBoxes.src}
                alt={images.travel.giftBoxes.alt}
                fill
                sizes="(max-width: 1024px) 70vw, 320px"
                className="object-cover"
              />
            </motion.div>
            <div className="absolute bottom-4 right-2 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
              <Gift size={24} className="text-blue" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
              Reward Awaits When
              <br />
              <span className="font-bold text-pink">You Refer A Friend</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-navy-soft">
              If you&apos;ve been happy with the care you&apos;ve received and would
              like to share it with friends or family, we invite you to take part in
              our patient referral rewards program.
            </p>

            <div className="mt-8 rounded-[2rem] border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center py-6 text-center"
                  >
                    <CheckCircle2 size={40} className="text-pink" />
                    <p className="mt-4 font-serif text-xl text-navy">
                      Thank You for the Referral
                    </p>
                    <p className="mt-2 text-sm text-navy-soft">
                      We&apos;ll reach out to your friend and let you know once their
                      journey begins.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-4"
                  >
                    <input
                      required
                      placeholder="Your Name *"
                      className={inputClasses()}
                      suppressHydrationWarning
                    />
                    <input
                      required
                      type="email"
                      placeholder="Your Email Address *"
                      className={inputClasses()}
                      suppressHydrationWarning
                    />
                    <input
                      required
                      placeholder="Who You Referred *"
                      className={inputClasses()}
                      suppressHydrationWarning
                    />
                    <textarea
                      rows={3}
                      placeholder="Additional Comments or Referral Date"
                      className={`${inputClasses()} resize-none`}
                      suppressHydrationWarning
                    />
                    <Button type="submit" variant="secondary" size="lg" className="mt-1">
                      Refer Your Friend
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
