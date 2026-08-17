import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ContactForm";
import { images } from "@/lib/images";
import { brand } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our international patient coordination team via WhatsApp, phone, email or our contact form.",
};

const contactPoints = [
  { icon: Phone, label: "Phone", value: brand.phone, href: brand.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: brand.whatsapp, href: brand.whatsappHref },
  { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
  { icon: MapPin, label: "Clinic Address", value: brand.address, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're Here to Help"
        subtitle="Reach out with any questions about treatment, pricing or planning your trip — our team typically replies within 24 hours."
        image={images.travel.coordinatorCall}
      />

      <section className="pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div className="space-y-4">
              {contactPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pink-light text-pink">
                    <point.icon size={18} strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-navy-soft/70">
                      {point.label}
                    </p>
                    {point.href ? (
                      <a href={point.href} className="text-sm text-navy hover:text-pink">
                        {point.value}
                      </a>
                    ) : (
                      <p className="text-sm text-navy">{point.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
