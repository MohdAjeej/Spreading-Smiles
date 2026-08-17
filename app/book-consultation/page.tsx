import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Container from "@/components/ui/Container";
import ConsultationForm from "@/components/ConsultationForm";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Book Free Consultation",
  description:
    "Start your dental journey with a free online consultation. Share your needs and receive a personalized treatment plan.",
};

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Free Consultation"
        title="Get My Personalized Treatment Plan"
        subtitle="Answer a few quick questions and our dental team will prepare a tailored plan and quote — no obligation."
        image={images.hero.consultation}
      />
      <section className="pb-24">
        <Container className="max-w-3xl">
          <ConsultationForm />
        </Container>
      </section>
    </>
  );
}
