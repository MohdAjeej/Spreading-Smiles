"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, Stethoscope, Castle, Church, Crown, Heart, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { images } from "@/lib/images";

const itinerary = [
  {
    day: 1,
    title: "Arrival in Delhi",
    icon: Plane,
    image: images.travel.airportPickup,
    activities: [
      "Airport welcome",
      "Hotel check-in",
      "Welcome dinner",
      "Rest and recovery",
    ],
    color: "text-blue",
  },
  {
    day: 2,
    title: "Dental Consultation & Treatment",
    icon: Stethoscope,
    image: images.clinic.reception,
    activities: [
      "Dental consultation",
      "Diagnostic assessment",
      "Treatment planning",
      "Initial procedure",
    ],
    color: "text-pink",
  },
  {
    day: 3,
    title: "Agra: The Taj Mahal",
    icon: Castle,
    image: images.india.tajMahal,
    activities: [
      "Travel to Agra",
      "Visit the iconic Taj Mahal",
      "Agra Fort",
      "Royal dining experience",
      "Overnight stay",
    ],
    color: "text-gold",
  },
  {
    day: 4,
    title: "Mathura & Vrindavan",
    icon: Church,
    image: images.india.mathuraVrindavan,
    activities: [
      "Explore Mathura and Vrindavan",
      "Cultural experiences",
      "Local cuisine",
      "Return to Delhi / onward journey",
    ],
    color: "text-blue-dark",
  },
  {
    day: 5,
    title: "Jaipur: The Pink City",
    icon: Crown,
    image: images.india.hawaMahal,
    activities: [
      "Travel to Jaipur",
      "Amber Fort",
      "City Palace",
      "Hawa Mahal",
      "Traditional Rajasthani experience",
    ],
    color: "text-pink",
  },
  {
    day: 6,
    title: "Dental Treatment & Recovery",
    icon: Heart,
    image: images.clinic.treatmentRoom,
    activities: [
      "Scheduled dental treatment",
      "Rest and recovery",
      "Doctor follow-up",
      "Personalized wellness experience",
    ],
    color: "text-gold",
  },
  {
    day: 7,
    title: "Final Follow-Up & Departure",
    icon: CheckCircle2,
    image: images.travel.flight,
    activities: [
      "Post-treatment assessment",
      "Final consultation",
      "Treatment documentation",
      "Airport transfer",
    ],
    color: "text-blue",
  },
];

export default function TreatmentItinerary() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % itinerary.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to current card
  useEffect(() => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 + 16; // card width + gap (reduced from 24 to 16)
      scrollContainerRef.current.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + itinerary.length) % itinerary.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % itinerary.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blush py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-20 h-64 w-64 rounded-full bg-pink/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-20 right-0 h-64 w-64 rounded-full bg-blue/10 blur-3xl"
      />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-pink">
            Your Journey
          </span>
          <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            7-Day Dental Tourism Itinerary
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-navy-soft">
            Experience world-class dental care combined with India's rich cultural
            heritage. We handle every detail of your dental journey.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1  lg:grid-cols-2 gap-8  items-stretch">
          {/* Left Side - 7 Day Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full"
          >
            <h4 className="font-serif text-2xl text-navy mb-4 flex-shrink-0 font-extrabold">
              Complete 7-Day Itinerary
            </h4>
            <div className="space-y-2 flex-1">
              {itinerary.map((day) => (
                <div
                  key={day.day}
                  className={`flex items-center gap-3 p-2.5 rounded-lg transition-all cursor-pointer ${
                    currentIndex === day.day - 1
                      ? 'bg-pink-light border-2 border-pink'
                      : 'bg-blush hover:bg-pink-light/50'
                  }`}
                  onClick={() => setCurrentIndex(day.day - 1)}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
                    <span className="font-serif text-[10px] font-bold text-pink leading-tight">
                      Day {day.day}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 flex items-center gap-2">
                    <day.icon size={14} className={day.color} strokeWidth={1.75} />
                    <div>
                      <h4 className="font-serif text-sm text-navy font-semibold leading-tight">
                        {day.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Carousel */}
          <div className="relative h-full mt-10 mb-10">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute -left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-pink hover:text-white"
              aria-label="Previous day"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="absolute -right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-pink hover:text-white"
              aria-label="Next day"
            >
              <ChevronRight size={24} />
            </button>

            {/* Scrollable Container */}
            <div ref={scrollContainerRef} className="overflow-x-hidden pb-4">
              <div className="flex gap-4" style={{ width: 'max-content' }}>
              {itinerary.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative w-80 flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
                >
                  {/* Image Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-blush">
                    <Image
                      src={day.image.src}
                      alt={day.image.alt}
                      fill
                      sizes="320px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                    
                    {/* Day Badge */}
                    <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
                      <span className="font-serif text-lg font-bold text-pink">
                        {day.day}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className={`absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 ${day.color}`}>
                      <day.icon size={22} strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-navy">
                      {day.title}
                    </h3>

                    <ul className="mt-4 space-y-2">
                      {day.activities.map((activity, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-navy-soft"
                        >
                          <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-pink-light">
                            <span className="h-1.5 w-1.5 rounded-full bg-pink" />
                          </span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* Progress Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {itinerary.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-pink' : 'w-2 bg-navy/20'
              }`}
              aria-label={`Go to day ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-serif text-2xl italic text-navy sm:text-3xl">
            Your Treatment. Your Journey. Your India.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/dental-tourism" variant="primary" size="lg">
              Explore Dental Tourism
            </Button>
            <Button href="/book-consultation" variant="secondary" size="lg">
              Plan Your Journey
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
