import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Testimonials from "@/components/Testimonials";
import BeforeAfter from "@/components/BeforeAfter";
import CTASection from "@/components/CTASection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Patient Stories",
  description:
    "Read real stories from international patients who traveled to India for premium, affordable dental treatment.",
};

export default function PatientStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Stories"
        title="Patients Who Traveled for Their Smile"
        subtitle="Honest reflections from patients who combined premium dental care with a journey to India."
        image={images.clinic.closeupSmile}
      />
      <Testimonials />
      <BeforeAfter />
      <CTASection />
    </>
  );
}
