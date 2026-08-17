import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Clock, Repeat } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import TreatmentGrid from "@/components/TreatmentGrid";
import { treatments, getTreatmentBySlug } from "@/data/treatments";

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};
  return {
    title: treatment.name,
    description: treatment.shortDescription,
  };
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const related = treatments.filter((t) => t.slug !== treatment.slug).slice(0, 4);

  return (
    <>
      <section className="bg-gradient-to-b from-blush/60 to-white pt-16 pb-24 sm:pt-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink">
                Treatment
              </span>
              <h1 className="text-balance font-serif text-4xl leading-tight text-navy sm:text-5xl">
                {treatment.name}
              </h1>
              <p className="mt-5 text-balance text-lg text-navy-soft">
                {treatment.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-y border-navy/10 py-6 sm:grid-cols-3">
                <div>
                  <Clock size={18} className="text-pink" />
                  <p className="mt-2 text-sm text-navy">{treatment.duration}</p>
                  <p className="text-xs text-navy-soft">Duration</p>
                </div>
                <div>
                  <Repeat size={18} className="text-pink" />
                  <p className="mt-2 text-sm text-navy">{treatment.visits}</p>
                  <p className="text-xs text-navy-soft">Visits</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {treatment.whatsIncluded.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-navy-soft"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-pink" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-soft/70">
                    Starting from
                  </p>
                  <p className="font-serif text-3xl text-pink">{treatment.startingPrice}</p>
                </div>
                <Button href="/book-consultation" size="lg">
                  Get My Treatment Plan
                </Button>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={treatment.image.src}
                alt={treatment.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <TreatmentGrid
        treatments={related}
        eyebrow="Related"
        heading="You May Also Be Interested In"
        subtitle="Other treatments patients often combine with their care plan."
      />
    </>
  );
}
