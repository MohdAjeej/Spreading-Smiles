import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhyIndia from "@/components/WhyIndia";
import TrustStats from "@/components/TrustStats";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Why India",
  description:
    "Learn why thousands of international patients choose India for advanced, affordable dental treatment every year.",
};

export default function WhyIndiaPage() {
  return (
    <>
      <PageHero
        eyebrow="Why India"
        title="A Trusted Destination for Dental Care"
        subtitle="Modern technology, highly qualified dentists and a significant cost advantage make India a leading choice for dental tourism."
        image={images.india.skyline}
      />
      <TrustStats />
      <WhyIndia />
      <Testimonials />
      <CTASection />
    </>
  );
}
