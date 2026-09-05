"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Container from "@/components/ui/Container";

const videos = [
  {
    id: "0T03F2SQyt8",
    title: "Dental Tourism Experience 1",
  },
  {
    id: "nYPY6_TFkvc",
    title: "Dental Tourism Experience 2",
  },
  {
    id: "h76jRdHP00Q",
    title: "Dental Tourism Experience 3",
  },
  {
    id: "_EL_FzrC4Ps",
    title: "Dental Tourism Experience 4",
  },
];

export default function ItineraryVideos() {
  return (
    <section className="relative bg-gradient-to-b from-blush to-white py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wide text-pink">
            Watch Our Journeys
          </span>
          <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            Experience Stories from Our Patients
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-navy-soft">
            See real stories from patients who combined their dental treatment with unforgettable travel experiences across India.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-navy/10 bg-white shadow-lg transition-all hover:border-pink/30 hover:shadow-2xl"
            >
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
                    <h3 className="font-semibold text-navy">{video.title}</h3>
                    <p className="text-sm text-navy-soft">Patient Journey</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
