import Link from "next/link";
import { Clock, Mail, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import ToothIcon from "@/components/ui/ToothIcon";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { brand, socialLinks } from "@/lib/nav";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
};

const treatmentLinks = [
  { label: "Consultation", href: "/treatments/consultation" },
  { label: "Teeth Whitening", href: "/treatments/teeth-whitening" },
  { label: "Tooth Filling", href: "/treatments/tooth-filling" },
  { label: "Braces", href: "/treatments/braces" },
];

const tourismLinks = [
  { label: "Why India", href: "/why-india" },
  { label: "Travel & Stay", href: "/travel-stay" },
  { label: "Dental Tourism", href: "/dental-tourism" },
  { label: "Patient Stories", href: "/patient-stories" },
  { label: "Case Study", href: "/case-study" },
];

const infoColumns = [
  { icon: MapPin, label: "Clinic Address", value: brand.address },
  { icon: Mail, label: "Email Us", value: brand.email },
  { icon: Clock, label: "Working Hours", value: brand.hours },
];

export default function Footer() {
  return (
    <footer className="bg-pink text-navy">
      <Container className="pb-16 pt-20 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/70">
          Contact Us
        </span>
        <a
          href={brand.phoneHref}
          className="mt-3 block font-serif text-4xl text-navy transition-opacity hover:opacity-80 sm:text-5xl"
        >
          {brand.phone}
        </a>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {infoColumns.map((info) => (
            <div key={info.label} className="flex flex-col items-center gap-2">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-navy">
                <info.icon size={18} strokeWidth={1.75} />
              </span>
              <p className="text-xs font-semibold uppercase tracking-wide text-navy/70">
                {info.label}
              </p>
              <p className="max-w-[220px] text-sm text-navy">{info.value}</p>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-navy/10 bg-white">
        <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 font-serif text-2xl text-navy">
              <ToothIcon className="h-6 w-6 text-pink" />
              {brand.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-soft">
              Premium dental care in India for international patients, with complete
              travel support from first consultation to your return home smiling.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg text-navy">Treatments</h3>
            <ul className="mt-4 space-y-3">
              {treatmentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-soft transition-colors hover:text-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-navy">Dental Tourism</h3>
            <ul className="mt-4 space-y-3">
              {tourismLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-soft transition-colors hover:text-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-navy">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-navy-soft hover:text-pink">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/dentists" className="text-sm text-navy-soft hover:text-pink">
                  Our Dentists
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-navy-soft hover:text-pink">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-navy-soft hover:text-pink">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <div className="border-t border-navy/10 bg-white">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-navy-soft sm:flex-row">
          <p>© 2026 {brand.fullName}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-pink">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-pink">
              Terms
            </Link>
            <Link href="#" className="hover:text-pink">
              Medical Disclaimer
            </Link>
            <div className="flex items-center gap-3 border-l border-navy/10 pl-6">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-navy-soft transition-colors hover:text-pink"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
