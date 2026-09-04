import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),

  },
  // basePath: "/spreadingSmiles",

  // trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
  allowedDevOrigins: ["192.168.56.1"],
};

export default nextConfig;
