"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import ToothIcon from "@/components/ui/ToothIcon";
import { navLinks, brand } from "@/lib/nav";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-navy/40 2xl:hidden"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="ml-auto flex h-full w-full max-w-sm flex-col bg-white px-6 py-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-serif text-2xl text-navy">
            <ToothIcon className="h-6 w-6 text-pink" />
            {brand.name}
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="rounded-full p-2 text-navy hover:bg-navy/5"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mt-10 flex flex-1 flex-col gap-1">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i, duration: 0.3 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="block border-b border-navy/10 py-4 font-serif text-2xl text-navy transition-colors hover:text-pink"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        <Button href="/book-consultation" variant="secondary" size="lg" className="w-full">
          Book Free Consultation
        </Button>
      </motion.div>
    </motion.div>
  );
}
