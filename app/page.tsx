import Hero from "@/components/Hero";
import DentalHoliday from "@/components/DentalHoliday";
import TrustQuote from "@/components/TrustQuote";
import ReferFriend from "@/components/ReferFriend";
import TripSteps from "@/components/TripSteps";
import ServicesGrid from "@/components/ServicesGrid";
import TravelCTA from "@/components/TravelCTA";
import ContactTeaser from "@/components/ContactTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <DentalHoliday />
      <TrustQuote />
      <ReferFriend />
      <TripSteps />
      <ServicesGrid />
      <TravelCTA />
      <ContactTeaser />
    </>
  );
}
