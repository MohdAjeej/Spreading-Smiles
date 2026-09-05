"use client";

import { motion } from "framer-motion";
import { Play, MapPin, Calendar, Users } from "lucide-react";
import Container from "@/components/ui/Container";

const mainVideos = [
  {
    id: "3Ns_ejdZ56Y",
    title: "Complete Dental Tourism Experience",
    subtitle: "Treatment + Travel + Culture",
  },
  {
    id: "mlVp5kJud7A",
    title: "Medical Caravan Experience",
    subtitle: "Luxury Travel Meets Healthcare",
  },
];

const highlights = [
  {
    icon: MapPin,
    title: "Iconic Destinations",
    description: "Visit Taj Mahal, Jaipur, Mathura & more",
  },
  {
    icon: Calendar,
    title: "Flexible Duration",
    description: "Choose 7, 10, or 14-day packages",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "Dedicated coordinator throughout",
  },
];

export default function ItineraryVideo() {
  return (
    <section className="relative bg-gradient-to-b from-white to-blush py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-pink">
            Experience the Journey
          </span>
          <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            Your Dental Holiday in India
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-navy-soft">
            Watch how we combine world-class dental treatment with unforgettable
            cultural experiences across India's most beautiful destinations.
          </p>
        </motion.div>

        {/* Videos Grid - Side by Side */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {mainVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="group relative overflow-hidden rounded-2xl border-4 border-navy/10 bg-white shadow-2xl transition-all hover:border-pink/30 hover:shadow-3xl">
                {/* YouTube Video Embed */}
                <div className="relative aspect-video w-full overflow-hidden bg-navy/5">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>

                {/* Video Info Bar */}
                <div className="border-t border-navy/5 bg-gradient-to-r from-white to-blush/20 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-light">
                      <Play size={18} className="text-pink" fill="currentColor" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">
                        {video.title}
                      </h3>
                      <p className="text-sm text-navy-soft">
                        {video.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-light text-pink">
                <item.icon size={24} strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-soft">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
