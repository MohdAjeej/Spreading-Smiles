import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DentistSection from "@/components/DentistSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Dentist",
  description:
    "Meet the dentist behind your treatment — experienced, patient-first, and dedicated to compassionate dental care.",
};

export default function DentistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet Our Dentist"
        subtitle="A patient-first dentist with deep clinical experience, backed by advanced training and modern technology."
        image={images.clinic.dentistAtWork}
      />
      <DentistSection showHeading={false} />
    </>
  );
}
