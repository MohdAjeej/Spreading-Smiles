"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ToothIcon from "@/components/ui/ToothIcon";
import MobileMenu from "@/components/MobileMenu";
import { navLinks, brand } from "@/lib/nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full overflow-x-hidden transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_0_0_rgba(43,42,76,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 whitespace-nowrap font-serif text-xl tracking-tight text-navy sm:text-2xl"
            aria-label={`${brand.fullName} home`}
          >
            <ToothIcon className="h-6 w-6 shrink-0 text-pink" />
            {brand.name}
          </Link>

          <ul className="hidden items-center gap-6 2xl:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`whitespace-nowrap text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:text-pink ${
                    pathname === link.href ? "text-pink" : "text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 2xl:block">
            <Button href="/book-consultation" variant="secondary" size="md">
              Book Free Consultation
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="rounded-full p-2 text-navy transition-colors hover:bg-navy/5 2xl:hidden"
          >
            <Menu size={26} />
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}
