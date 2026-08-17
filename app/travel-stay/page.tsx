import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TravelSupport from "@/components/TravelSupport";
import InternationalPatients from "@/components/InternationalPatients";
import CTASection from "@/components/CTASection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Travel & Stay",
  description:
    "From airport pickup to accommodation and clinic transportation, see how we take care of every part of your trip to India.",
};

export default function TravelStayPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel & Stay"
        title="We Take Care of More Than Your Smile"
        subtitle="A complete travel experience designed around your comfort, from arrival to departure."
        image={images.travel.hotelPool}
      />
      <TravelSupport showHeading={false} />
      <InternationalPatients />
      <CTASection />
    </>
  );
}
