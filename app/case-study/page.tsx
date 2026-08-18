import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CaseStudy from "@/components/CaseStudy";
import CTASection from "@/components/CTASection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Case Study",
  description:
    "A closer look at real treatments, consultations and patient journeys at Spreading Smiles.",
};

export default function CaseStudyPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title="Inside Our Clinic & Patient Journeys"
        subtitle="Browse photos from consultations, treatments and patient visits that show what a Spreading Smiles experience looks like."
        image={images.clinic.dentistAtWork}
      />
      <CaseStudy showHeading={false} />
      <CTASection />
    </>
  );
}
