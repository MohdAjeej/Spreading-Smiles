import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import DentistCard from "@/components/DentistCard";
import Button from "@/components/ui/Button";
import { dentists as allDentists } from "@/data/dentists";
import type { Dentist } from "@/data/dentists";

export default function DentistSection({
  dentists = allDentists,
  showHeading = true,
  showCta = false,
}: {
  dentists?: Dentist[];
  showHeading?: boolean;
  showCta?: boolean;
}) {
  return (
    <section className="py-24">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Our Team"
            heading="Meet Our Dentist"
            subtitle="A patient-first dentist with deep clinical experience and a gentle approach."
          />
        )}

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dentists.map((dentist, i) => (
            <DentistCard key={dentist.slug} dentist={dentist} index={i} />
          ))}
        </div>

        {showCta && (
          <div className="mt-14 text-center">
            <Button href="/dentists" variant="outline" size="lg">
              View Full Profile
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
