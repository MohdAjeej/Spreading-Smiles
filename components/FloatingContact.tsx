"use client";

import Link from "next/link";
import { MessageCircle, Phone, CalendarCheck } from "lucide-react";
import { brand } from "@/lib/nav";

export default function FloatingContact() {
  return (
    <>
      <a
        href={brand.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-pink text-white shadow-lg transition-transform hover:scale-105 active:scale-95 md:flex"
      >
        <MessageCircle size={26} />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-navy/10 bg-white/95 backdrop-blur-md md:hidden">
        <a
          href={brand.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-navy-soft"
        >
          <MessageCircle size={20} className="text-pink" />
          WhatsApp
        </a>
        <a
          href={brand.phoneHref}
          className="flex flex-col items-center gap-1 border-x border-navy/10 py-3 text-xs font-medium text-navy-soft"
        >
          <Phone size={20} className="text-pink" />
          Call
        </a>
        <Link
          href="/book-consultation"
          className="flex flex-col items-center gap-1 bg-navy py-3 text-xs font-medium text-white"
        >
          <CalendarCheck size={20} />
          Book
        </Link>
      </div>
    </>
  );
}
