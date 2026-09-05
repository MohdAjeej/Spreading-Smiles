"use client";

import { motion } from "framer-motion";
import { Play, MapPin } from "lucide-react";
import Image from "next/image";
import Container from "@/components/ui/Container";

const patientVideos = [
  {
    id: 1,
    title: "Patient Success Story",
    country: "Hong Kong",
    countryCode: "hk",
    videoId: "ykC6ESylAOU",
    type: "shorts",
  },
  {
    id: 2,
    title: "Patient Success Story",
    country: "Canada",
    countryCode: "ca",
    videoId: "aXNn3TNgTuM",
    type: "shorts",
  },
  {
    id: 3,
    title: "Patient Success Story",
    country: "Dubai",
    countryCode: "ae",
    videoId: "Perhw8I0XPE",
    type: "shorts",
  },
  {
    id: 4,
    title: "Patient Success Story",
    country: "USA",
    countryCode: "us",
    videoId: "YSMnSdTofBM",
    type: "video",
  },
  {
    id: 5,
    title: "Patient Success Story",
    country: "UK",
    countryCode: "gb",
    videoId: "ap3ZC4ItXOM",
    type: "video",
  },
];

export default function PatientStoriesVideos() {
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
          <span className="text-sm font-semibold uppercase tracking-wide text-pink">
            Real Stories, Real Smiles
          </span>
          <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            Patient Success Stories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-navy-soft">
            Hear directly from our patients about their dental journey and
            experience at Spreading Smiles.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {patientVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-navy/10 bg-white shadow-md transition-all hover:border-pink/30 hover:shadow-xl"
            >
              {/* Video Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-navy/5">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={`${video.title} - ${video.country}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>

              {/* Video Info */}
              <div className="border-t border-navy/5 bg-gradient-to-br from-white to-blush/20 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pink-light">
                      <Play size={16} className="text-pink" fill="currentColor" />
                    </div>
                    <h3 className="font-semibold text-navy">{video.title}</h3>
                  </div>
                </div>
                
                {/* Country with Flag */}
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow-sm">
                  <Image
                    src={`https://flagcdn.com/w40/${video.countryCode}.png`}
                    alt={`${video.country} flag`}
                    width={20}
                    height={15}
                    className="h-auto w-5 object-contain"
                  />
                  <span className="text-sm font-medium text-navy-soft">{video.country}</span>
                </div>
              </div>

              {/* Hover Effect - Bottom Border */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-pink transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-navy-soft">
            Ready to start your own success story?
          </p>
          <a
            href="/book-consultation"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink px-8 py-4 font-medium text-white transition-all hover:bg-pink-dark hover:shadow-lg"
          >
            Book Your Free Consultation
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
