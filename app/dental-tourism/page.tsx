import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyChooseUs from "@/components/WhyChooseUs";
import PatientJourney from "@/components/PatientJourney";
import InternationalPatients from "@/components/InternationalPatients";
import CTASection from "@/components/CTASection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Dental Tourism",
  description:
    "Discover how dental tourism in India works — from your first online consultation to complete travel support and post-treatment follow-up.",
};

export default function DentalTourismPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental Tourism"
        title="Care Without Borders"
        subtitle="Combine premium dental treatment with a seamless travel experience, guided by a dedicated coordinator every step of the way."
        image={images.travel.hotelLobby}
      />
      <WhyChooseUs />
      <PatientJourney />
      <InternationalPatients />
      <CTASection />
    </>
  );
}
