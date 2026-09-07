"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import type { ImageAsset } from "@/lib/images";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  video,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: ImageAsset;
  video?: string;
}) {
  const [videoError, setVideoError] = useState(false);

  // 📝 Log all props on mount
  useEffect(() => {
    console.log("🔍 PageHero Props:", {
      eyebrow,
      title,
      subtitle,
      image: image ? { src: image.src, alt: image.alt } : null,
      video,
      videoType: typeof video,
      videoLength: video?.length,
      videoTrimmed: video?.trim(),
      hasVideo: !!video,
      hasValidVideo: !!(video && video.trim().length > 0),
    });
  }, [eyebrow, title, subtitle, image, video]);



  // 📝 Check video validity
  const hasValidVideo = video && video.trim().length > 0 && !videoError;

  // 📝 Log video validation
  useEffect(() => {
    console.log("🎬 Video Validation:", {
      video,
      videoTrimmed: video?.trim(),
      videoError,
      hasValidVideo,
      willRenderVideo: hasValidVideo,
      willRenderImage: !hasValidVideo && !!image,
      willRenderNothing: !hasValidVideo && !image,
    });
  }, [video, videoError, hasValidVideo, image]);

  // Log rendering decision outside JSX
  if (!hasValidVideo && !image) {
    console.log("ℹ️ Neither video nor image provided - rendering text only");
  }

  // 🔍 Check if file exists by fetching it
  useEffect(() => {
    if (hasValidVideo && video) {
      const videoUrl = video.trim();
      console.log(`🔍 Attempting to fetch video from: ${videoUrl}`);

      // Check if the file exists with a HEAD request
      fetch(videoUrl, { method: 'HEAD' })
        .then(response => {
          console.log(`📡 HEAD request response:`, {
            status: response.status,
            statusText: response.statusText,
            ok: response.ok,
            contentType: response.headers.get('content-type'),
            contentLength: response.headers.get('content-length'),
          });

          if (!response.ok) {
            console.error(`❌ Video file not found (${response.status}): ${videoUrl}`);
          }
        })
        .catch(err => {
          console.error(`❌ Failed to check video file:`, err);
        });
    }
  }, [hasValidVideo, video]);

  // In your DentalTourismPage component
  useEffect(() => {
    // Check what's in the public folder
    const checkPublicFiles = async () => {
      try {
        // Try to fetch the file list (only works in development)
        const response = await fetch('/api/public-files');
        if (response.ok) {
          const files = await response.json();
          console.log('📁 Files in public folder:', files);
        }
      } catch (e) {
        console.log('Could not fetch file list');
      }
    };
    checkPublicFiles();
  }, []);

  // Log video element creation
  useEffect(() => {
    if (hasValidVideo) {
      console.log("🎥 Creating video element with src:", video?.trim());
    }
  }, [hasValidVideo, video]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blush/60 to-white pt-16 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <div
          className={`grid grid-cols-1 items-center gap-12 ${image || hasValidVideo ? "lg:grid-cols-2 lg:gap-16" : ""
            }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={image || hasValidVideo ? "" : "mx-auto max-w-2xl text-center"}
          >
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pink">
              {eyebrow}
            </span>
            <h1 className="text-balance font-serif text-4xl leading-tight text-navy sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 text-balance text-lg text-navy-soft">{subtitle}</p>
          </motion.div>

          {hasValidVideo ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl bg-navy/5"
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
                onLoadStart={() => {
                  console.log("📹 Video: onLoadStart - video is starting to load");
                  const videoEl = document.querySelector('video');
                  if (videoEl) {
                    console.log("📹 Video element:", {
                      src: videoEl.src,
                      currentSrc: videoEl.currentSrc,
                      networkState: videoEl.networkState,
                      readyState: videoEl.readyState,
                      error: videoEl.error,
                    });
                  }
                }}
                onLoadedData={() => console.log("✅ Video: onLoadedData - video data loaded successfully")}
                onLoadedMetadata={(e) => {
                  const videoEl = e.currentTarget;
                  console.log("📊 Video: onLoadedMetadata - metadata loaded", {
                    videoWidth: videoEl?.videoWidth,
                    videoHeight: videoEl?.videoHeight,
                    duration: videoEl?.duration,
                    src: videoEl?.src,
                    currentSrc: videoEl?.currentSrc,
                  });
                }}
                onCanPlay={() => console.log("▶️ Video: onCanPlay - video is ready to play")}
                onError={(e) => {
                  const videoEl = e.currentTarget;
                  const error = videoEl?.error;
                  console.error("❌ Video: onError - video failed to load", {
                    errorCode: error?.code,
                    errorMessage: error?.message,
                    networkState: videoEl?.networkState,
                    readyState: videoEl?.readyState,
                    src: videoEl?.src,
                    currentSrc: videoEl?.currentSrc,
                    // Log the actual element attributes
                    elementSrc: videoEl?.getAttribute('src'),
                    sourceSrc: videoEl?.querySelector('source')?.getAttribute('src'),
                  });

                  // Try to log more details about the failure
                  if (error?.code === 4) {
                    console.error("🔴 MEDIA_ERR_SRC_NOT_SUPPORTED: The video source couldn't be loaded. Check if the file exists and is in a supported format.");
                  } else if (error?.code === 3) {
                    console.error("🔴 MEDIA_ERR_DECODE: The video file is corrupted or in an unsupported format.");
                  } else if (error?.code === 2) {
                    console.error("🔴 MEDIA_ERR_NETWORK: A network error occurred while loading the video.");
                  } else if (error?.code === 1) {
                    console.error("🔴 MEDIA_ERR_ABORTED: The video loading was aborted.");
                  }

                  setVideoError(true);
                }}
                onWaiting={() => console.log("⏳ Video: onWaiting - buffering")}
                onPlaying={() => console.log("▶️ Video: onPlaying - video is now playing")}
              >
                <source
                  src={video.trim()}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ) : image ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-white shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-contain p-4"
                onLoad={() => console.log("🖼️ Image: loaded successfully", image.src)}
                onError={() => console.error("❌ Image: failed to load", image.src)}
              />
            </motion.div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}