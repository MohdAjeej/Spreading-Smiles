import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BeforeAfter from "@/components/BeforeAfter";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "Explore illustrative before and after comparisons across implants, veneers, smile makeovers and full mouth rehabilitation.",
};

export default function BeforeAfterPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Real Transformations"
        subtitle="Drag each slider to compare treatment outcomes across our most requested procedures."
        image={images.clinic.cosmetic}
      />
      <BeforeAfter showHeading={false} />
    </>
  );
}
