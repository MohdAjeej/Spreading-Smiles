"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Plane,
  Hotel,
  Car,
  Stethoscope,
  FileCheck,
  UserRound,
  Camera,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/lib/images";

const services = [
  { icon: Plane, title: "Airport Pickup", image: images.travel.airportPickup },
  { icon: Hotel, title: "Hotel Accommodation", image: images.travel.hotelRoom },
  { icon: Car, title: "Local Transportation", image: images.travel.hotelLobby },
  { icon: Stethoscope, title: "Clinic Transportation", image: images.clinic.reception },
  { icon: FileCheck, title: "Visa & Travel Assistance", image: images.travel.flight },
  { icon: UserRound, title: "Patient Coordinator", image: images.travel.coordinatorCall },
  { icon: Camera, title: "Local Sightseeing Assistance", image: images.india.tajMahal },
];

export default function TravelSupport({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="py-24">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Travel & Stay"
            heading="We Take Care of More Than Your Smile"
            subtitle="A complete travel experience designed around your comfort and peace of mind."
          />
        )}

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-pink">
                  <service.icon size={18} strokeWidth={1.75} />
                </span>
                <h3 className="font-serif text-lg text-white">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
