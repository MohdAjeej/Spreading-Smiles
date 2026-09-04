import TrustQuote from "@/components/TrustQuote";
import ReferFriend from "@/components/ReferFriend";
import ProcessSteps from "@/components/ProcessSteps";
import TripSteps from "@/components/TripSteps";
import ServicesGrid from "@/components/ServicesGrid";
import PricingHighlight from "@/components/PricingHighlight";
import TreatmentItinerary from "@/components/TreatmentItinerary";
import CountryFlags from "@/components/CountryFlags";
import LocationMap from "@/components/LocationMap";
import ContactTeaser from "@/components/ContactTeaser";

export default function Home() {
  return (
    <>
      <TrustQuote />
      <ProcessSteps />
      <ServicesGrid />
      <TripSteps />
      <TreatmentItinerary />
      <PricingHighlight />
      <ReferFriend />
      <CountryFlags />
      <LocationMap />
      <ContactTeaser />
    </>
  );
}
