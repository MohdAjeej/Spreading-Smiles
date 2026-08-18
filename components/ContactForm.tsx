"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-[2rem] border border-navy/10 bg-white p-8 shadow-sm sm:p-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-10 text-center"
          >
            <CheckCircle2 size={48} className="text-pink" />
            <h3 className="mt-5 font-serif text-2xl text-navy">Message Sent</h3>
            <p className="mt-2 max-w-sm text-sm text-navy-soft">
              Thank you for reaching out. A patient coordinator will get back to you
              within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm font-medium text-navy" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                required
                type="text"
                className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-pink"
                placeholder="Jane Doe"
                suppressHydrationWarning
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm font-medium text-navy" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                required
                type="email"
                className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-pink"
                placeholder="jane@email.com"
                suppressHydrationWarning
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm font-medium text-navy" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-pink"
                placeholder="+1 555 000 0000"
                suppressHydrationWarning
              />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm font-medium text-navy" htmlFor="country">
                Country
              </label>
              <input
                id="country"
                type="text"
                className="w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-pink"
                placeholder="United States"
                suppressHydrationWarning
              />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-navy" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-pink"
                placeholder="Tell us about your dental needs..."
                suppressHydrationWarning
              />
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
