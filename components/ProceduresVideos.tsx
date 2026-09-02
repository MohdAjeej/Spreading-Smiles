"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Container from "@/components/ui/Container";

const procedureVideos = [
  {
    id: 1,
    title: "Dental Procedure 1",
    videoId: "fLDwkZh9qU4",
  },
  {
    id: 2,
    title: "Dental Procedure 2",
    videoId: "A8tT-qklfD0",
  },
  {
    id: 3,
    title: "Dental Procedure 3",
    videoId: "h76jRdHP00Q",
  },
  {
    id: 4,
    title: "Dental Procedure 4",
    videoId: "h76jRdHP00Q",
  },
  {
    id: 5,
    title: "Dental Procedure 5",
    videoId: "0T03F2SQyt8",
  },
  {
    id: 6,
    title: "Dental Procedure 6",
    videoId: "7FvdFTEFk1E",
  },
  {
    id: 7,
    title: "Dental Procedure 7",
    videoId: "_EL_FzrC4Ps",
  },
  {
    id: 8,
    title: "Dental Procedure 8",
    videoId: "IiQXtBrF13Q",
  },
];

export default function ProceduresVideos() {
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
            Watch Our Work
          </span>
          <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
            Procedures
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg text-navy-soft">
            See our dental procedures in action and the quality care we provide to every patient.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {procedureVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-light">
                    <Play size={14} className="text-pink" fill="currentColor" />
                  </div>
                  <h3 className="font-medium text-navy">{video.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
