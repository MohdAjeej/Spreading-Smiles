import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TreatmentItinerary from "@/components/TreatmentItinerary";
import ItineraryVideo from "@/components/ItineraryVideo";
import ItineraryVideos from "@/components/ItineraryVideos";
import ItineraryPricing from "@/components/ItineraryPricing";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Travel Itinerary & Pricing",
  description:
    "Explore our comprehensive dental tourism itineraries with transparent pricing - 7, 10, and 14-day all-inclusive packages combining world-class dental treatment with India's cultural wonders.",
};

export default function ItineraryPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel Itinerary & Pricing"
        title="Your Complete Dental Tourism Journey"
        subtitle="Experience exceptional dental care while exploring India's iconic destinations. Choose from 7, 10, or 14-day all-inclusive packages with transparent pricing."
        image={images.india.tajMahal}
      />
      <ItineraryVideo />
      <ItineraryVideos />
      <TreatmentItinerary />
      <ItineraryPricing />
      <FAQ />
      <CTASection />
    </>
  );
}
