"use client";

import { motion } from "framer-motion";
import { Lightbulb, Play } from "lucide-react";
import Container from "@/components/ui/Container";

const healthyTipsVideos = [
  {
    id: 1,
    title: "Healthy Tip 1",
    videoId: "jTMoY4y4n18",
  },
  {
    id: 2,
    title: "Healthy Tip 2",
    videoId: "SBfNdrc-rfQ",
  },
  {
    id: 3,
    title: "Healthy Tip 3",
    videoId: "HJgwCXdhR_w",
  },
  {
    id: 4,
    title: "Healthy Tip 4",
    videoId: "VREc_9wwQzQ",
  },
  {
    id: 5,
    title: "Healthy Tip 5",
    videoId: "swQJKy0SQIw",
  },
  {
    id: 6,
    title: "Healthy Tip 6",
    videoId: "DSi47mY3duE",
  },
  {
    id: 7,
    title: "Healthy Tip 7",
    videoId: "GxA-D6k1SEM",
  },
  {
    id: 8,
    title: "Healthy Tip 8",
    videoId: "wmam-U2fEME",
  },
  {
    id: 9,
    title: "Healthy Tip 9",
    videoId: "KW3_j9EwUPI",
  },
];

export default function HealthyTipsVideos() {
  return (
    <section className="relative bg-white py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
            <Lightbulb size={32} className="text-gold" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            Expert Advice
          </span>
          <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            Some Healthy Tips
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-navy-soft">
            Practical dental health tips and advice from our expert team to help you maintain a healthy, beautiful smile.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {healthyTipsVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-navy/10 bg-white shadow-md transition-all hover:border-gold/30 hover:shadow-xl"
            >
              {/* Video Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-navy/5">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              {/* Video Info */}
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10">
                    <Play size={14} className="text-gold" fill="currentColor" />
                  </div>
                  <h3 className="font-medium text-navy">{video.title}</h3>
                </div>
              </div>

              {/* Hover Effect - Bottom Border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Tips CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-2xl rounded-2xl border-2 border-gold/20 bg-gradient-to-br from-gold/5 to-blue/5 p-8">
            <h3 className="font-serif text-2xl text-navy">
              Want Personalized Dental Advice?
            </h3>
            <p className="mt-3 text-navy-soft">
              Schedule a consultation with our expert dentists and get customized tips for your oral health.
            </p>
            <a
              href="/book-consultation"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-medium text-white transition-all hover:bg-gold/90 hover:shadow-lg"
            >
              Book Free Consultation
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
