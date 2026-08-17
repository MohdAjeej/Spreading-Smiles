import type { Metadata } from "next";
import Image from "next/image";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import TrustStats from "@/components/TrustStats";
import DentistSection from "@/components/DentistSection";
import CTASection from "@/components/CTASection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our mission to make world-class dental care accessible to international patients through India's leading dental specialists.",
};

const values = [
  {
    icon: Heart,
    title: "Patient-First",
    description:
      "Every treatment plan is built around your comfort, timeline and goals — never a one-size-fits-all approach.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Standards",
    description:
      "We partner only with clinics that meet rigorous hygiene, technology and training benchmarks.",
  },
  {
    icon: Sparkles,
    title: "Genuine Craftsmanship",
    description:
      "Our dentists treat every smile as a personal project, not a procedure on a checklist.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Making World-Class Dental Care Accessible"
        subtitle="We connect international patients with India's leading dental specialists — combining premium treatment with a seamless travel experience."
        image={images.clinic.interior}
      />

      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={images.clinic.treatmentRoom.src}
                alt={images.clinic.treatmentRoom.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink">
                Our Story
              </span>
              <h2 className="font-serif text-3xl text-navy sm:text-4xl">
                A decade of guiding patients to confident new smiles
              </h2>
              <p className="mt-5 text-base leading-relaxed text-navy-soft">
                Spreading Smiles is a modern dental clinic dedicated to delivering
                high-quality, painless, and advanced dental treatments in a
                comfortable environment. We combine expert care with modern
                technology, building patient relationships through trust and
                transparency.
              </p>
              <p className="mt-4 text-base leading-relaxed text-navy-soft">
                Every treatment plan is personalized, every environment is
                comfortable, and every price is transparent — backed by the
                highest sterilization standards and emergency care when you need
                it most.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <TrustStats />

      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            heading="What Guides Our Work"
            subtitle="The principles behind every treatment plan and every patient journey we support."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-light text-pink">
                  <value.icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-serif text-xl text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-soft">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <DentistSection showCta />
      <CTASection />
    </>
  );
}
