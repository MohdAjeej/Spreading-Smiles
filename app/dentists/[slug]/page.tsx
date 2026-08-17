import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Languages, GraduationCap, Stethoscope, Clock3 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { dentists, getDentistBySlug } from "@/data/dentists";

export function generateStaticParams() {
  return dentists.map((dentist) => ({ slug: dentist.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dentist = getDentistBySlug(slug);
  if (!dentist) return {};
  return {
    title: dentist.name,
    description: dentist.bio,
  };
}

export default async function DentistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dentist = getDentistBySlug(slug);
  if (!dentist) notFound();

  return (
    <section className="bg-gradient-to-b from-blush/60 to-white py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src={dentist.image.src}
              alt={dentist.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 380px"
              className="object-cover"
            />
          </div>

          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink">
              Dentist Profile
            </span>
            <h1 className="font-serif text-4xl text-navy sm:text-5xl">
              {dentist.name}
            </h1>
            <p className="mt-2 text-lg text-pink">{dentist.qualification}</p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-soft">
              {dentist.bio}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 border-y border-navy/10 py-6 sm:grid-cols-3">
              <div>
                <Stethoscope size={18} className="text-pink" />
                <p className="mt-2 text-sm text-navy">{dentist.specialty}</p>
                <p className="text-xs text-navy-soft">Specialty</p>
              </div>
              <div>
                <Clock3 size={18} className="text-pink" />
                <p className="mt-2 text-sm text-navy">
                  {dentist.yearsExperience}+ Years
                </p>
                <p className="text-xs text-navy-soft">Experience</p>
              </div>
              <div>
                <Languages size={18} className="text-pink" />
                <p className="mt-2 text-sm text-navy">{dentist.languages.join(", ")}</p>
                <p className="text-xs text-navy-soft">Languages</p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-2 text-sm text-navy-soft">
              <GraduationCap size={16} className="mt-0.5 shrink-0 text-pink" />
              Qualified dental professional dedicated to compassionate, patient-first care.
            </div>

            <div className="mt-8">
              <Button href="/book-consultation" size="lg">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
