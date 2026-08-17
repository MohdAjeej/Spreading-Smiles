import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TreatmentGrid from "@/components/TreatmentGrid";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore our full range of dental treatments for international patients, from implants and veneers to full mouth rehabilitation.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title="Transform Your Smile"
        subtitle="Editorial-grade care across every major restorative and cosmetic dental treatment, delivered by specialists you can trust."
        image={images.clinic.interior}
      />
      <TreatmentGrid showHeading={false} />
    </>
  );
}
